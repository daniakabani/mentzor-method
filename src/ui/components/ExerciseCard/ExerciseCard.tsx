'use client'

import { useState } from 'react'
import type { Exercise, WorkoutEntry } from 'src/types'

export const ExerciseCard = ({
  exercise,
  exerciseIndex,
  totalExercises,
  isCompleted,
  onComplete,
  completedData,
}: {
  exercise: Exercise
  exerciseIndex: number
  totalExercises: number
  isCompleted: boolean
  onComplete: (weight: number, reps: number) => void
  completedData?: WorkoutEntry
}) => {
  const [weight, setWeight] = useState(completedData?.weight || 0)
  const [reps, setReps] = useState(completedData?.reps || 0)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleComplete = () => {
    if (weight > 0 && reps > 0) {
      onComplete(weight, reps)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 1500)
    }
  }

  const intensityPreview =
    weight > 0 && reps > 0 ? Math.min(100, (reps / exercise.maxRecommendedReps) * 100) : 0

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
        isCompleted
          ? 'border-green-500/30 bg-gradient-to-br from-green-900/30 to-green-800/20'
          : 'border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/30'
      }`}
    >
      {/* Success Animation */}
      {showSuccess && (
        <div className='absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-green-500/20'>
          <div className='animate-bounce text-6xl'>✅</div>
        </div>
      )}

      <div className='p-6 md:p-8'>
        {/* Exercise Header */}
        <div className='mb-6 flex items-start justify-between'>
          <div className='flex-1'>
            <div className='mb-2 flex items-center gap-3'>
              <span className='rounded-lg border border-red-500/30 bg-red-600/20 px-3 py-1 text-sm font-medium text-red-400'>
                Exercise {exerciseIndex + 1} of {totalExercises}
              </span>
              {isCompleted && (
                <span className='rounded-lg border border-green-500/30 bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400'>
                  ✓ Complete
                </span>
              )}
            </div>

            <h3 className='mb-2 text-2xl font-black text-white md:text-3xl'>{exercise.name}</h3>
            <p className='mb-2 text-gray-400'>{exercise.description}</p>

            <div className='flex items-center gap-2 text-sm text-gray-500'>
              <span className='h-2 w-2 rounded-full bg-red-500'></span>
              <span>Target: {exercise.maxRecommendedReps} reps to failure</span>
            </div>
          </div>
        </div>

        {/* Exercise Tip */}
        <div className='mb-8 rounded-lg border border-blue-500/20 bg-blue-900/20 p-4'>
          <div className='flex items-start gap-3'>
            <span className='flex-shrink-0 text-lg text-blue-400'>💡</span>
            <div>
              <h4 className='mb-1 font-semibold text-blue-400'>Technique Tip</h4>
              <p className='text-sm text-gray-300'>{exercise.tips}</p>
            </div>
          </div>
        </div>

        {!isCompleted ? (
          /* Input Form */
          <div className='space-y-6'>
            <div className='grid gap-6 md:grid-cols-2'>
              <div>
                <label className='mb-3 block font-medium text-white'>Weight (lbs/kg)</label>
                <input
                  type='number'
                  min={0}
                  step={0.5}
                  value={weight || ''}
                  onChange={e => setWeight(Number(e.target.value))}
                  placeholder='Enter weight used'
                  className='w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-lg text-white placeholder-gray-500 transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                />
              </div>

              <div>
                <label className='mb-3 block font-medium text-white'>Reps Completed</label>
                <input
                  type='number'
                  min={0}
                  value={reps || ''}
                  onChange={e => setReps(Number(e.target.value))}
                  placeholder='Reps to failure'
                  className='w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-lg text-white placeholder-gray-500 transition-all focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                />
              </div>
            </div>

            {/* Intensity Preview */}
            {intensityPreview > 0 && (
              <div className='rounded-lg border border-gray-800 bg-black/30 p-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-400'>Intensity Preview:</span>
                  <span
                    className={`text-xl font-bold ${
                      intensityPreview >= 90
                        ? 'text-green-400'
                        : intensityPreview >= 75
                          ? 'text-blue-400'
                          : intensityPreview >= 60
                            ? 'text-yellow-400'
                            : 'text-red-400'
                    }`}
                  >
                    {Math.round(intensityPreview)}%
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={handleComplete}
              disabled={!weight || !reps}
              className={`w-full rounded-lg py-4 text-lg font-semibold transition-all duration-200 ${
                weight && reps
                  ? 'bg-red-600 text-white shadow-lg hover:scale-[1.02] hover:bg-red-700'
                  : 'cursor-not-allowed bg-gray-800 text-gray-500'
              }`}
            >
              {weight && reps ? 'Complete Exercise ✓' : 'Enter Weight & Reps'}
            </button>
          </div>
        ) : (
          /* Completed Display */
          <div className='py-8 text-center'>
            <div className='mb-4 text-6xl'>✅</div>
            <h4 className='mb-2 text-xl font-bold text-white'>Exercise Complete!</h4>
            <p className='mb-4 text-gray-400'>
              {completedData?.weight}lbs × {completedData?.reps} reps
            </p>
            <div className='inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2'>
              <span className='font-semibold text-green-400'>
                {Math.round(completedData?.intensity || 0)}% Intensity
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
