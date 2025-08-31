export type MuscleGroup = 'Chest' | 'Back' | 'Legs' | 'Biceps' | 'Triceps' | 'Shoulders' | 'Abs'

export type Exercise = {
  name: string
  maxRecommendedReps: number
  description: string
  tips: string
}

export type WorkoutEntry = {
  weight: number
  reps: number
  intensity: number
}
