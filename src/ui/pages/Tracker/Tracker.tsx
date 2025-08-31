'use client'

import { useEffect, useMemo, useState } from 'react'
import { EXERCISES } from 'src/constants'
import { trackIntensityLevel, trackWorkoutComplete } from 'src/helpers/analytics'
import { ExerciseCard } from 'src/ui/components'
import type { MuscleGroup, WorkoutEntry } from 'src/types'

export const Tracker = () => {
  const [group, setGroup] = useState<MuscleGroup>('Chest')
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
  const [workoutData, setWorkoutData] = useState<Record<number, WorkoutEntry>>({})
  const [isWorkoutComplete, setIsWorkoutComplete] = useState(false)
  const [result, setResult] = useState<number | null>(null)
  const [showCelebration, setShowCelebration] = useState(false)

  const exercises = EXERCISES[group]
  const currentExercise = exercises[currentExerciseIndex]
  const totalExercises = exercises.length
  const completedExercises = Object.keys(workoutData).length
  const progress = (completedExercises / totalExercises) * 100

  // Reset workout when changing muscle groups
  useEffect(() => {
    setCurrentExerciseIndex(0)
    setWorkoutData({})
    setIsWorkoutComplete(false)
    setResult(null)
  }, [group])

  // Check if current exercise is completed
  const isCurrentExerciseCompleted = workoutData[currentExerciseIndex] !== undefined

  // Auto-advance to next exercise when current one is completed
  useEffect(() => {
    if (isCurrentExerciseCompleted && currentExerciseIndex < totalExercises - 1) {
      const timer = setTimeout(() => {
        setCurrentExerciseIndex(prev => prev + 1)
      }, 1500)
      return () => clearTimeout(timer)
    } else if (completedExercises === totalExercises && completedExercises > 0) {
      setIsWorkoutComplete(true)
      calculateIntensity()
    }
  }, [workoutData, currentExerciseIndex, totalExercises, completedExercises])

  const calculateIntensity = () => {
    const intensities = Object.values(workoutData).map(entry => entry.intensity)
    if (intensities.length > 0) {
      const avg = intensities.reduce((a, b) => a + b, 0) / intensities.length
      setResult(Math.round(avg))
      setShowCelebration(true)
      trackIntensityLevel(currentExercise.name, avg)
      setTimeout(() => setShowCelebration(false), 3000)
    }
  }

  const handleExerciseComplete = (weight: number, reps: number) => {
    const intensity = Math.min(100, (reps / currentExercise.maxRecommendedReps) * 100)
    setWorkoutData(prev => ({
      ...prev,
      [currentExerciseIndex]: { weight, reps, intensity },
    }))
  }

  const resetWorkout = () => {
    trackWorkoutComplete('Heavy Duty HIT', 10)
    setCurrentExerciseIndex(0)
    setWorkoutData({})
    setIsWorkoutComplete(false)
    setResult(null)
  }

  const verdict = useMemo(() => {
    if (result == null) return ''
    if (result >= 90) return "Elite effort! You've mastered Heavy Duty! 🔥"
    if (result >= 75) return 'Excellent work! True intensity achieved! 💪'
    if (result >= 60) return 'Good session—keep pushing those limits! 🎯'
    if (result > 0) return 'Building momentum—aim for failure next time! ⚡'
    return ''
  }, [result])

  const getResultColor = (score: number | null) => {
    if (score == null) return ''
    if (score >= 90) return 'text-green-400'
    if (score >= 75) return 'text-blue-400'
    if (score >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900'>
      {/* Celebration Effect */}
      {showCelebration && (
        <div className='pointer-events-none fixed inset-0 z-50 flex items-center justify-center'>
          <div className='animate-bounce text-6xl'>🎉</div>
        </div>
      )}

      {/* Hero Section */}
      <section className='bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20 py-24'>
        <div className='mx-auto max-w-4xl px-6 text-center'>
          <div className='mb-8 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2'>
            <div className='h-2 w-2 animate-pulse rounded-full bg-red-500'></div>
            <span className='text-sm font-semibold tracking-wide text-red-400 uppercase'>
              Interactive HIT Tracker
            </span>
          </div>

          <h1 className='mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-5xl leading-tight font-black tracking-tight text-transparent md:text-6xl'>
            Intensity Tracker Pro
          </h1>

          <p className='mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl'>
            Experience Mike Mentzer&apos;s Heavy Duty training with our{' '}
            <strong className='text-white'>step-by-step workout companion</strong>. Complete each
            exercise to unlock the next and discover your true intensity level.
          </p>
        </div>
      </section>

      {/* Main Tracker Interface */}
      <div className='mx-auto max-w-4xl px-6 pb-24 mt-8'>
        <div className='rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 md:p-12'>
          {/* Muscle Group Selection */}
          <div className='mb-12'>
            <label className='mb-4 block text-lg font-semibold text-white'>
              Choose Your Training Focus
            </label>
            <div className='grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7'>
              {(Object.keys(EXERCISES) as MuscleGroup[]).map(g => (
                <button
                  key={g}
                  onClick={() => setGroup(g)}
                  disabled={Object.keys(workoutData).length > 0}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    group === g
                      ? 'border border-red-500 bg-red-600 text-white shadow-lg'
                      : Object.keys(workoutData).length > 0
                        ? 'cursor-not-allowed border border-gray-800 bg-gray-800/30 text-gray-500'
                        : 'border border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600 hover:bg-gray-800/70'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
            {Object.keys(workoutData).length > 0 && (
              <p className='mt-2 flex items-center gap-2 text-sm text-gray-400'>
                <span className='flex h-4 w-4 items-center justify-center rounded border border-yellow-500/40 bg-yellow-500/20'>
                  <span className='text-xs text-yellow-500'>!</span>
                </span>
                Complete current workout to switch muscle groups
              </p>
            )}
          </div>

          {/* Workout Progress */}
          <div className='mb-8'>
            <div className='mb-4 flex items-center justify-between'>
              <h3 className='flex items-center gap-3 text-xl font-bold text-white'>
                <span className='flex h-8 w-8 items-center justify-center rounded-lg border border-red-500/30 bg-red-600/20 text-sm font-bold text-red-400'>
                  {group.charAt(0)}
                </span>
                {group} Heavy Duty Session
              </h3>
              <span className='text-sm font-medium text-gray-400'>
                {completedExercises}/{totalExercises} Complete
              </span>
            </div>

            {/* Progress Bar */}
            <div className='relative mb-2 h-2 w-full overflow-hidden rounded-full bg-gray-800'>
              <div
                className='absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-red-600 to-red-500 transition-all duration-1000 ease-out'
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className='flex justify-between text-xs text-gray-500'>
              <span>Start</span>
              <span className='font-medium text-gray-400'>{Math.round(progress)}%</span>
              <span>Finished</span>
            </div>
          </div>

          {!isWorkoutComplete ? (
            /* Current Exercise Display */
            <div className='mb-12'>
              <ExerciseCard
                exercise={currentExercise}
                exerciseIndex={currentExerciseIndex}
                totalExercises={totalExercises}
                isCompleted={isCurrentExerciseCompleted}
                onComplete={handleExerciseComplete}
                completedData={workoutData[currentExerciseIndex]}
              />

              {/* Completed Exercises Summary */}
              {completedExercises > 0 && (
                <div className='mt-8'>
                  <h4 className='mb-4 flex items-center gap-2 text-lg font-semibold text-white'>
                    <span className='text-green-500'>✓</span>
                    Completed Exercises
                  </h4>
                  <div className='grid gap-3'>
                    {exercises.slice(0, currentExerciseIndex).map((ex, i) => {
                      const data = workoutData[i]
                      if (!data) return null

                      return (
                        <div
                          key={ex.name}
                          className='flex items-center justify-between rounded-lg border border-green-500/30 bg-green-900/20 p-4'
                        >
                          <div className='flex items-center gap-3'>
                            <span className='text-lg text-green-500'>✓</span>
                            <div>
                              <span className='font-medium text-white'>{ex.name}</span>
                              <span className='ml-2 text-sm text-gray-400'>
                                {data.weight}lbs × {data.reps} reps
                              </span>
                            </div>
                          </div>
                          <div className='text-right'>
                            <span className={`text-lg font-bold ${getResultColor(data.intensity)}`}>
                              {Math.round(data.intensity)}%
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Workout Complete - Results */
            <div className='text-center'>
              <div className='mb-8'>
                <div className='mb-6 inline-flex items-center space-x-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2'>
                  <span className='text-lg text-green-500'>🎉</span>
                  <span className='text-sm font-semibold tracking-wide text-green-400 uppercase'>
                    Workout Complete!
                  </span>
                </div>

                <h3 className='mb-4 text-3xl font-black text-white md:text-4xl'>
                  Heavy Duty Session Completed
                </h3>

                <div className='mb-8 flex items-center justify-center gap-6'>
                  <span className={`text-7xl font-black md:text-8xl ${getResultColor(result)}`}>
                    {result}%
                  </span>
                  <div className='text-left'>
                    <div className='text-2xl font-bold text-white md:text-3xl'>Intensity</div>
                    <div className='text-lg text-gray-400'>{verdict.split('!')[1] || verdict}</div>
                  </div>
                </div>
              </div>

              {/* Detailed Results */}
              <div className='mb-8 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8'>
                <h4 className='mb-6 text-xl font-bold text-white'>Session Breakdown</h4>

                <div className='mb-6 grid gap-4'>
                  {exercises.map((ex, i) => {
                    const data = workoutData[i]
                    return (
                      <div
                        key={ex.name}
                        className='flex items-center justify-between rounded-lg bg-black/30 p-4'
                      >
                        <div className='text-left'>
                          <div className='font-medium text-white'>{ex.name}</div>
                          <div className='text-sm text-gray-400'>
                            {data.weight}lbs × {data.reps} reps (
                            {Math.round((data.reps / ex.maxRecommendedReps) * 100)}% of target)
                          </div>
                        </div>
                        <div className={`text-xl font-bold ${getResultColor(data.intensity)}`}>
                          {Math.round(data.intensity)}%
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className='text-center'>
                  <p className='mb-6 text-sm text-gray-400'>
                    <strong className='text-white'>Overall Intensity:</strong> {verdict}
                  </p>

                  <button
                    onClick={resetWorkout}
                    className='inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-red-700'
                  >
                    Start New Session
                    <span>🔄</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tips Section - Only show when not in workout */}
        {Object.keys(workoutData).length === 0 && (
          <div className='mt-12 grid gap-6 md:grid-cols-3'>
            <div className='rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-6'>
              <h4 className='mb-3 text-lg font-bold text-blue-400'>💡 How It Works</h4>
              <p className='text-sm text-gray-300'>
                Complete each exercise one by one. The tracker automatically advances to the next
                exercise and calculates your intensity.
              </p>
            </div>

            <div className='rounded-xl border border-green-500/20 bg-gradient-to-br from-green-900/20 to-green-800/10 p-6'>
              <h4 className='mb-3 text-lg font-bold text-green-400'>🎯 Perfect Form</h4>
              <p className='text-sm text-gray-300'>
                Focus on controlled reps to failure. Quality beats quantity—that&apos;s the Heavy
                Duty way.
              </p>
            </div>

            <div className='rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-6'>
              <h4 className='mb-3 text-lg font-bold text-purple-400'>📈 Track Progress</h4>
              <p className='text-sm text-gray-300'>
                Aim for higher intensity scores each session by increasing weight or reps to
                failure.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
