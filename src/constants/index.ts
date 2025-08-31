import type { Exercise, MuscleGroup } from '../types'

export const EXERCISES: Record<MuscleGroup, Exercise[]> = {
  Chest: [
    {
      name: 'Dumbbell Flyes/Pec Deck Flyes',
      maxRecommendedReps: 10,
      description: 'Pre-exhaust chest isolation (superset with incline press)',
      tips: 'Wide arc, feel the deep stretch, control the negative - superset with incline press',
    },
    {
      name: 'Incline Press',
      maxRecommendedReps: 10,
      description: 'Upper chest mass builder (supersetted after flyes)',
      tips: 'Smith machine or barbell, 30-45 degree angle, press through pre-exhausted chest',
    },
    {
      name: 'Chest Dips',
      maxRecommendedReps: 10,
      description: 'Ultimate chest mass builder (after incline press)',
      tips: 'Wide arc, feel the deep stretch, control the negative',
    },
  ],
  Back: [
    {
      name: 'Machine Pullovers',
      maxRecommendedReps: 10,
      description: 'Lat pre-exhaust (superset with pulldowns)',
      tips: 'Straight-arm movement, feel lats stretch, immediately go to pulldowns',
    },
    {
      name: 'Close-Grip Underhand Pulldown',
      maxRecommendedReps: 10,
      description: 'Lat width through pre-exhausted muscles',
      tips: 'Underhand grip, pull to upper chest, squeeze lats hard',
    },
    {
      name: 'Deadlift',
      maxRecommendedReps: 10,
      description: 'Ultimate back mass and power builder',
      tips: 'Drive through heels, keep bar close, controlled negative',
    },
  ],
  Legs: [
    {
      name: 'Leg Extensions',
      maxRecommendedReps: 20,
      description: 'Quad pre-exhaust (superset with squats)',
      tips: 'High reps to pre-exhaust quads, immediately go to squats',
    },
    {
      name: 'Barbell Squats',
      maxRecommendedReps: 10,
      description: 'Ultimate leg mass builder (after pre-exhaust)',
      tips: 'Below parallel, drive through heels, quads already fatigued',
    },
    {
      name: 'Leg Curls',
      maxRecommendedReps: 10,
      description: 'Hamstring isolation and development',
      tips: 'Full range, squeeze at the top, control the negative',
    },
    {
      name: 'Standing Calf Raises',
      maxRecommendedReps: 10,
      description: 'Complete calf development',
      tips: 'Full stretch at bottom, hold squeeze at top',
    },
  ],
  Biceps: [
    {
      name: 'Barbell Curls',
      maxRecommendedReps: 10,
      description: 'Classic bicep mass builder',
      tips: 'Strict form, elbows close to your body, squeeze at the top',
    },
    {
      name: 'Concentrated Dumbbell curls',
      maxRecommendedReps: 10,
      description: 'Ultimate bicep mass builder',
      tips: 'Strict form, preacher bench, arm flat on bench, squeeze at the top',
    },
  ],
  Triceps: [
    {
      name: 'Cable Pressdowns',
      maxRecommendedReps: 10,
      description: 'Tricep pre-exhaust (superset with dips)',
      tips: 'Keep elbows stationary, full extension, immediately go to dips',
    },
    {
      name: 'Weighted Dips',
      maxRecommendedReps: 10,
      description: 'Tricep mass builder (after pre-exhaust)',
      tips: 'Lean forward slightly, full range, triceps already fatigued',
    },
  ],
  Shoulders: [
    {
      name: 'Lateral Raises',
      maxRecommendedReps: 10,
      description: 'Side delt isolation and width',
      tips: 'Machine or dumbbells, slight forward angle, control the weight',
    },
    {
      name: 'Rear Delt Raises',
      maxRecommendedReps: 10,
      description: 'Rear delt isolation for balance',
      tips: 'Reverse pec deck or dumbbells, squeeze shoulder blades',
    },
    {
      name: 'Shoulder Press Machine/Dumbbells',
      maxRecommendedReps: 10,
      description: 'Ultimate shoulder mass and power builder',
      tips: 'Machine or dumbbells, 180 degree angle, control the weight',
    },
    {
      name: 'Reverse Pec Deck',
      maxRecommendedReps: 10,
      description: 'Ultimate rear delt mass and power builder',
      tips: 'Machine or dumbbells, 180 degree angle, control the weight',
    },
  ],
  Abs: [
    {
      name: 'Weighted Decline Sit-ups',
      maxRecommendedReps: 20,
      description: 'Heavy resistance ab work',
      tips: 'Hold weight to chest, crunch up, control the negative',
    },
  ],
} as const
