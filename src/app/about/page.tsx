import Link from 'next/link'
import { aboutPageMetadata } from 'src/constants/metadata'

export const metadata = aboutPageMetadata
export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20 py-24'>
        <div className='mx-auto max-w-4xl px-6 text-center'>
          <div className='mb-8 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2'>
            <div className='h-2 w-2 rounded-full bg-red-500'></div>
            <span className='text-sm font-semibold tracking-wide text-red-400 uppercase'>
              The Legacy
            </span>
          </div>

          <h1 className='mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-5xl leading-tight font-black tracking-tight text-transparent md:text-6xl lg:text-7xl'>
            The Mentzer Method
          </h1>

          <p className='mx-auto max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl'>
            An educational journey into Mike Mentzer&apos;s revolutionary high-intensity approach.
            Whether you&apos;re a beginner or seasoned lifter, discover the{' '}
            <strong className='text-white'>science and principles</strong> behind maximum muscle
            growth.
          </p>
        </div>
      </section>

      <div className='mx-auto max-w-6xl space-y-24 px-6 pb-24'>
        {/* Mike Mentzer Section */}
        <section id='mike-mentzer' className='mt-6 grid items-center gap-12 lg:grid-cols-2'>
          <div>
            <div className='mb-6 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1'>
              <div className='h-1.5 w-1.5 rounded-full bg-red-500'></div>
              <span className='text-xs font-medium tracking-wide text-red-400 uppercase'>
                Biography
              </span>
            </div>

            <h2 className='mb-6 text-3xl leading-tight font-black text-white md:text-4xl'>
              Who was Mike Mentzer?
            </h2>

            <div className='space-y-4 leading-relaxed text-gray-300'>
              <p>
                <strong className='text-white'>Mike Mentzer</strong> (1951-2001) was a revolutionary
                bodybuilder who challenged the high-volume training norms of his era. Born in
                Philadelphia, he championed brief, intensely focused sessions using heavy loads and
                strict execution.
              </p>
              <p>
                By his early twenties, he was already a standout competitor—winning{' '}
                <strong className='text-white'>Mr. America in 1976</strong> and{' '}
                <strong className='text-white'>Mr. Universe in 1978</strong> with a rare perfect
                score. In 1979, he captured the Mr. Olympia heavyweight class.
              </p>
              <p>
                The following year&apos;s Mr. Olympia became infamous when Arnold Schwarzenegger returned
                and won; Mentzer placed fourth and stepped away from competition. He then focused on
                coaching, influencing champions like{' '}
                <strong className='text-white'>six-time Mr. Olympia Dorian Yates</strong>.
              </p>
            </div>
          </div>

          <div className='rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8'>
            <h3 className='mb-4 text-xl font-bold text-red-400'>Championship Achievements</h3>
            <ul className='space-y-3'>
              <li className='flex items-center gap-3'>
                <div className='h-2 w-2 rounded-full bg-red-500'></div>
                <span className='text-gray-300'>
                  <strong className='text-white'>1976:</strong> Mr. America Winner
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <div className='h-2 w-2 rounded-full bg-red-500'></div>
                <span className='text-gray-300'>
                  <strong className='text-white'>1978:</strong> Mr. Universe (Perfect Score)
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <div className='h-2 w-2 rounded-full bg-red-500'></div>
                <span className='text-gray-300'>
                  <strong className='text-white'>1979:</strong> Mr. Olympia Heavyweight Class
                </span>
              </li>
              <li className='flex items-center gap-3'>
                <div className='h-2 w-2 rounded-full bg-red-500'></div>
                <span className='text-gray-300'>
                  <strong className='text-white'>Legacy:</strong> Mentor to Dorian Yates
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Heavy Duty Training Section */}
        <section
          id='heavy-duty-training'
          className='rounded-3xl border border-gray-700/30 bg-gradient-to-br from-gray-900/30 to-gray-800/20  p-6 md:p-12'
        >
          <div className='mb-12 text-center'>
            <div className='mb-6 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2'>
              <div className='h-2 w-2 rounded-full bg-red-500'></div>
              <span className='text-sm font-semibold tracking-wide text-red-400 uppercase'>
                The System
              </span>
            </div>

            <h2 className='mb-6 text-3xl font-black text-white md:text-4xl'>
              What is Heavy Duty Training?
            </h2>
          </div>

          <div className='grid items-center gap-8 md:grid-cols-2'>
            <div>
              <p className='mb-6 text-lg leading-relaxed text-gray-300'>
                Heavy Duty is Mentzer&apos;s version of high-intensity training (HIT):{' '}
                <strong className='text-white'>short workouts, infrequent sessions</strong>, and one
                all-out working set per exercise performed with controlled form—usually to true
                muscular failure.
              </p>
              <p className='text-lg leading-relaxed text-gray-300'>
                Recovery is treated as a priority, not an afterthought. The constant thread wasn&apos;t
                volume—it was{' '}
                <strong className='text-white'>effort, precision, and measured progression</strong>.
              </p>
            </div>

            <div className='rounded-xl border border-gray-800 bg-black/30 p-6'>
              <h3 className='mb-4 text-lg font-bold text-red-400'>Core Elements</h3>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-red-400'>•</span>
                  <span className='text-gray-300'>One working set to failure</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-red-400'>•</span>
                  <span className='text-gray-300'>Controlled, strict form</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-red-400'>•</span>
                  <span className='text-gray-300'>Infrequent training sessions</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-red-400'>•</span>
                  <span className='text-gray-300'>Maximum recovery emphasis</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Training Split Section */}
        <section id='training-split'>
          <div className='mb-12 text-center'>
            <div className='mb-6 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2'>
              <div className='h-2 w-2 rounded-full bg-red-500'></div>
              <span className='text-sm font-semibold tracking-wide text-red-400 uppercase'>
                Workout Structure
              </span>
            </div>

            <h2 className='mb-6 text-3xl font-black text-white md:text-4xl'>
              3-Day Split (Mentzer-Inspired)
            </h2>
            <p className='mx-auto max-w-3xl text-lg text-gray-300'>
              A practical application of Heavy Duty principles with strategic muscle pairing and
              optimal recovery periods
            </p>
          </div>

          <div className='grid gap-8 lg:grid-cols-3'>
            {/* Day 1 */}
            <div className='rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/20 to-red-800/10 p-8'>
              <div className='mb-6 flex items-center gap-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg border border-red-500/30 bg-red-600/20'>
                  <span className='text-sm font-bold text-red-400'>1</span>
                </div>
                <h3 className='text-xl font-bold text-red-400'>Chest & Back</h3>
              </div>
              <ul className='space-y-3 text-gray-300'>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-red-400'>•</span>
                  <span>
                    <strong className='text-white'>Chest fly variation:</strong> 1 set × 6-10 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-red-400'>•</span>
                  <span>
                    <strong className='text-white'>Incline press:</strong> 1 set × 6-10 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-red-400'>•</span>
                  <span>
                    <strong className='text-white'>Pullover:</strong> 1 set × 6-10 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-red-400'>•</span>
                  <span>
                    <strong className='text-white'>Close-grip pulldown:</strong> 1 set × 6-10 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-red-400'>•</span>
                  <span>
                    <strong className='text-white'>Deadlift:</strong> 1 set × 6-10 reps
                  </span>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className='rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8'>
              <div className='mb-6 flex items-center gap-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg border border-gray-500/30 bg-gray-600/20'>
                  <span className='text-sm font-bold text-gray-300'>2</span>
                </div>
                <h3 className='text-xl font-bold text-gray-200'>Legs & Abs</h3>
              </div>
              <ul className='space-y-3 text-gray-300'>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-gray-400'>•</span>
                  <span>
                    <strong className='text-white'>Leg extension:</strong> 1 set × 12-20 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-gray-400'>•</span>
                  <span>
                    <strong className='text-white'>Back squat:</strong> 1 set × 6-10 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-gray-400'>•</span>
                  <span>
                    <strong className='text-white'>Leg curl:</strong> 1 set × 6-10 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-gray-400'>•</span>
                  <span>
                    <strong className='text-white'>Calf raise:</strong> 1 set × 6-10 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-gray-400'>•</span>
                  <span>
                    <strong className='text-white'>Weighted sit-ups:</strong> 1 set × 12-20 reps
                  </span>
                </li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className='rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-8'>
              <div className='mb-6 flex items-center gap-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/30 bg-blue-600/20'>
                  <span className='text-sm font-bold text-blue-400'>3</span>
                </div>
                <h3 className='text-xl font-bold text-blue-400'>Shoulders & Arms</h3>
              </div>
              <ul className='space-y-3 text-gray-300'>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-blue-400'>•</span>
                  <span>
                    <strong className='text-white'>Lateral raise:</strong> 1 set × 6-10 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-blue-400'>•</span>
                  <span>
                    <strong className='text-white'>Rear-delt raise:</strong> 1 set × 6-10 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-blue-400'>•</span>
                  <span>
                    <strong className='text-white'>Barbell curl:</strong> 1 set × 6-10 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-blue-400'>•</span>
                  <span>
                    <strong className='text-white'>Cable pressdown:</strong> 1 set × 6-10 reps
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='mt-1 text-sm text-blue-400'>•</span>
                  <span>
                    <strong className='text-white'>Weighted dips:</strong> 1 set × 6-10 reps
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className='mt-8 text-center'>
            <p className='inline-block rounded-lg border border-gray-800 bg-gray-900/30 p-4 text-gray-400'>
              <strong className='text-white'>Recovery Protocol:</strong> Rest 1-2 days between
              sessions. Advanced lifters may need even longer recovery periods.
            </p>
          </div>
        </section>

        {/* Core Principles */}
        <section id='mentzer-method'>
          <div className='mb-12 text-center'>
            <div className='mb-6 inline-flex items-center space-x-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2'>
              <div className='h-2 w-2 rounded-full bg-red-500'></div>
              <span className='text-sm font-semibold tracking-wide text-red-400 uppercase'>
                Philosophy
              </span>
            </div>

            <h2 className='mb-6 text-3xl font-black text-white md:text-4xl'>
              Core Principles of the Mentzer Method
            </h2>
            <p className='mx-auto max-w-3xl text-lg text-gray-300'>
              Five fundamental principles that form the foundation of successful Heavy Duty training
            </p>
          </div>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                title: 'High Intensity',
                description:
                  "Push working sets to genuine momentary failure with crisp form. True effort is easier to measure at the limit than when you 'leave a few in the tank.'",
                icon: '⚡',
              },
              {
                title: 'Low Volume',
                description:
                  'Train hard, not long. One decisive set per exercise can be sufficient when intensity and execution are high. Efficiency is the aim.',
                icon: '🎯',
              },
              {
                title: 'Progressive Overload',
                description:
                  'Track your lifts and beat your previous bests using double progression: first add reps, then increase load once you hit the top range.',
                icon: '📈',
              },
              {
                title: 'Low Frequency',
                description:
                  'Most lifters thrive on 2-4 training days per week with HIT. The stronger you are, the more recovery you need.',
                icon: '⏰',
              },
              {
                title: 'Strict Technique',
                description:
                  'Control each rep and use complete range of motion. Clean mechanics protect from injury and ensure strength improvements.',
                icon: '🛡️',
              },
              {
                title: 'Recovery Focus',
                description:
                  'Growth happens during rest, not training. Prioritize sleep, nutrition, and stress management for optimal results.',
                icon: '🔄',
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className='rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 transition-all duration-300 hover:border-red-500/30'
              >
                <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-600/10'>
                  <span className='text-xl'>{principle.icon}</span>
                </div>
                <h3 className='mb-3 text-lg font-bold text-white'>{principle.title}</h3>
                <p className='text-sm leading-relaxed text-gray-300'>{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className='rounded-3xl bg-gradient-to-r from-red-900/20 via-red-800/10 to-red-900/20 p-6 md:p-12 text-center'>
          <h3 className='mb-6 text-3xl font-bold text-white md:text-4xl'>
            Ready to Apply These Principles?
          </h3>
          <p className='mx-auto mb-8 max-w-2xl text-lg text-gray-300'>
            Start implementing Mike Mentzer&apos;s Heavy Duty methods with our practical tools and
            detailed workout guides.
          </p>

          <div className='flex flex-col justify-center gap-4 sm:flex-row'>
            <Link
              href='/tracker'
              className='inline-flex items-center gap-2 rounded-lg bg-red-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-red-700'
            >
              Try Intensity Tracker
              <span>→</span>
            </Link>
            <Link
              href='/blogs'
              className='inline-flex items-center gap-2 rounded-lg border border-gray-600 px-8 py-4 font-semibold text-gray-300 transition-colors hover:border-gray-500 hover:text-white'
            >
              Read Workout Guides
              <span>📖</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
