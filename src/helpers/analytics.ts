// Analytics helper functions for tracking events
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID!, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = (action: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, parameters)
  }
}

// Fitness-specific tracking functions
export const trackWorkoutStart = (workoutType: string) => {
  event('workout_start', {
    event_category: 'fitness',
    workout_type: workoutType,
  })
}

export const trackWorkoutComplete = (workoutType: string, duration: number) => {
  event('workout_complete', {
    event_category: 'fitness',
    workout_type: workoutType,
    workout_duration: duration,
  })
}

export const trackIntensityLevel = (exercise: string, intensity: number) => {
  event('intensity_tracked', {
    event_category: 'fitness',
    exercise_name: exercise,
    intensity_level: intensity,
  })
}

export const trackPageEngagement = (page: string, timeOnPage: number) => {
  event('page_engagement', {
    event_category: 'engagement',
    page_name: page,
    time_on_page: timeOnPage,
  })
}
