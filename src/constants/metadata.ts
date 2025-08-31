import type { Metadata } from 'next'

// Base URL for your site
const BASE_URL = 'https://mentzermethod.com'

export const defaultMetadata: Metadata = {
  title: {
    default: 'The Mike Mentzer Method: High-Intensity Training',
    template: '%s | Mentzer Method',
  },
  icons: {
    icon: '/images/icon/favicon.ico',
    shortcut: '/images/icon/favicon-96x96.png',
    apple: '/images/icon/apple-touch-icon.png',
  },
  description:
    "Discover the power of short, intense workouts that changed bodybuilding forever. Learn Mike Mentzer's HIT principles and track your workout intensity.",
  keywords: [
    'Mike Mentzer',
    'Heavy Duty training',
    'HIT training',
    'high intensity training',
    'bodybuilding workout',
    'muscle building',
    'strength training',
    'workout routine',
  ],
  authors: [{ name: 'Mentzer Method Team' }],
  creator: 'Mentzer Method',
  publisher: 'Mentzer Method',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: 'The Mike Mentzer Method: High-Intensity Training',
    description:
      "Discover Mike Mentzer's Heavy Duty training system. Maximum results through scientific intensity principles.",
    siteName: 'Mentzer Method',
    images: [
      {
        url: `${BASE_URL}/images/og-default.webp`,
        width: 1200,
        height: 630,
        alt: 'Mike Mentzer Heavy Duty Training Method',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Mike Mentzer Method: High-Intensity Training',
    description: "Learn Mike Mentzer's HIT principles and track your workout intensity.",
    images: [`${BASE_URL}/images/og-default.webp`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: 'REPLACE_WITH_ACTUAL_VERIFICATION_CODE',
  },
  manifest: '/site.webmanifest',
}

export const homePageMetadata: Metadata = {
  title: 'Mike Mentzer Method: Revolutionary HIT Training System',
  description:
    "Master Mike Mentzer's Heavy Duty training philosophy. Build maximum muscle with brief, intense workouts. Includes workout tracker, exercise guides, and HIT principles.",
  icons: {
    icon: '/images/icon/favicon.ico',
    shortcut: '/images/icon/favicon-96x96.png',
    apple: '/images/icon/apple-touch-icon.png',
  },
  keywords: [
    'Mike Mentzer workout',
    'Heavy Duty training',
    'HIT bodybuilding',
    'high intensity training routine',
    'muscle building program',
    'strength training system',
    'bodybuilding philosophy',
    'workout intensity tracker',
  ],
  openGraph: {
    title: 'Mike Mentzer Method: Revolutionary HIT Training System',
    description:
      'Master brief, intense workouts that changed bodybuilding forever. Learn HIT principles, track intensity, and build maximum muscle.',
    type: 'website',
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/images/og-default.webp`,
        width: 1200,
        height: 630,
        alt: 'Mike Mentzer training with intense focus - Heavy Duty method',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mike Mentzer Method: Revolutionary HIT Training System',
    description: 'Master brief, intense workouts that changed bodybuilding forever. Learn HIT principles, track intensity, and build maximum muscle.',
    images: [`${BASE_URL}/images/og-default.webp`],
  },
  alternates: {
    canonical: BASE_URL,
  },
}

export const aboutPageMetadata: Metadata = {
  title: 'About Mike Mentzer & Heavy Duty Training Philosophy',
  description:
    "Learn about Mike Mentzer's revolutionary Heavy Duty training system. Discover the biography, achievements, and core principles behind high-intensity training (HIT).",
  icons: {
    icon: '/images/icon/favicon.ico',
    shortcut: '/images/icon/favicon-96x96.png',
    apple: '/images/icon/apple-touch-icon.png',
  },
  keywords: [
    'Mike Mentzer biography',
    'Heavy Duty training philosophy',
    'HIT training principles',
    'Mike Mentzer achievements',
    'bodybuilding history',
    'high intensity training theory',
    'workout philosophy',
    'training methodology',
  ],
  openGraph: {
    title: 'About Mike Mentzer & Heavy Duty Training Philosophy',
    description:
      "Discover Mike Mentzer's revolutionary approach to bodybuilding. Learn his biography, achievements, and the core principles of Heavy Duty training.",
    type: 'article',
    url: `${BASE_URL}/about`,
    images: [
      {
        url: `${BASE_URL}/images/og-default.webp`,
        width: 1200,
        height: 630,
        alt: 'Mike Mentzer - Bodybuilding legend and Heavy Duty training pioneer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mike Mentzer & Heavy Duty Training Philosophy',
    description: "Discover Mike Mentzer's revolutionary approach to bodybuilding. Learn his biography, achievements, and the core principles of Heavy Duty training.",
    images: [`${BASE_URL}/images/og-default.webp`],
  },
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
}

export const trackerPageMetadata: Metadata = {
  title: 'HIT Intensity Tracker - Mike Mentzer Workout Companion',
  description:
    "Track your Heavy Duty training intensity with our interactive workout companion. Monitor sets, reps, and intensity levels following Mike Mentzer's HIT principles.",
  icons: {
    icon: '/images/icon/favicon.ico',
    shortcut: '/images/icon/favicon-96x96.png',
    apple: '/images/icon/apple-touch-icon.png',
  },
  keywords: [
    'workout tracker',
    'intensity tracker',
    'Heavy Duty tracker',
    'HIT workout app',
    'Mike Mentzer tracker',
    'bodybuilding tracker',
    'training intensity',
    'workout companion',
  ],
  openGraph: {
    title: 'HIT Intensity Tracker - Mike Mentzer Workout Companion',
    description:
      "Interactive workout tracker for Heavy Duty training. Monitor your intensity and progress with Mike Mentzer's HIT methodology.",
    type: 'website',
    url: `${BASE_URL}/tracker`,
    images: [
      {
        url: `${BASE_URL}/images/og-default.webp`,
        width: 1200,
        height: 630,
        alt: 'HIT Intensity Tracker interface for Heavy Duty training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HIT Intensity Tracker - Mike Mentzer Workout Companion',
    description: "Interactive workout tracker for Heavy Duty training. Monitor your intensity and progress with Mike Mentzer's HIT methodology.",
    images: [`${BASE_URL}/images/og-default.webp`],
  },
  alternates: {
    canonical: `${BASE_URL}/tracker`,
  },
}
