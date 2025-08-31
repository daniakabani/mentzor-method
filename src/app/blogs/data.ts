export type BlogPost = {
  slug: string
  title: string
  description: string
  tags: string[]
  html: string
}

// Store article content as HTML strings to avoid JSX in data file
const BackHTML = `
  <article>
    <header>
      <h1>Mike Mentzer Chest Workout Routine: Heavy Duty Training for Maximum Chest Growth</h1>
      <p>Few names in bodybuilding are as iconic as <strong>Mike Mentzer</strong>. With his <strong>Heavy Duty</strong> philosophy, Mentzer broke away from the high-volume training styles of his era and introduced a system centered around brief, intense, and infrequent workouts. His chest routine, in particular, is a masterclass in maximizing muscle growth with minimal sets.</p>
      <p>If you’ve ever wanted to know how Mike Mentzer built his legendary chest, this article will explore his chest training methodology, exercises, sets, style, and philosophy in detail. By the end, you’ll understand why his approach remains highly respected among serious bodybuilders today.</p>
    </header>

    <section>
      <h2>The Heavy Duty Philosophy Behind Mentzer’s Chest Training</h2>
      <p>Mentzer’s entire system was based on <strong>intensity over volume</strong>. Instead of spending hours in the gym, he believed in short but brutally effective workouts taken to absolute muscular failure. Here are his core principles applied to chest:</p>
      <ul>
        <li><strong>One All-Out Set Per Exercise</strong> – Warm up, then push one working set to total failure.</li>
        <li><strong>Perfect Form and Controlled Reps</strong> – Slow, deliberate movements to keep tension on the chest and avoid momentum.</li>
        <li><strong>Intensity Techniques</strong> – Forced reps, negatives, and static holds to push beyond failure.</li>
        <li><strong>Infrequent Training</strong> – Hitting chest once every 5–7 days to allow full recovery.</li>
        <li><strong>Focus on Compound Lifts</strong> – Exercises that recruit maximum muscle fibers.</li>
      </ul>
    </section>

    <section>
      <h2>Mike Mentzer Chest Workout Routine</h2>
      <p>Mentzer’s chest workouts were concise but devastatingly effective. Here’s an example of what his routine looked like:</p>

      <ol>
        <li>
          <h3>Incline Barbell Press (or Incline Dumbbell Press)</h3>
          <p><strong>Sets:</strong> 1–2 warm-up sets, 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> Mentzer favored incline pressing to build the upper chest, giving the chest fuller, more balanced development. Each rep was slow, controlled, and taken to failure.</p>
        </li>
        <li>
          <h3>Flat Barbell or Dumbbell Press</h3>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–8<br>
          <strong>Notes:</strong> This was a staple for overall chest mass. Mentzer stressed form and control, avoiding ego-lifting or bouncing the bar off the chest.</p>
        </li>
        <li>
          <h3>Dips (Chest Emphasis)</h3>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> By leaning forward and keeping elbows flared, Mentzer turned dips into one of his favorite chest builders. Weighted dips were often used once bodyweight became too easy.</p>
        </li>
        <li>
          <h3>Dumbbell Flyes or Nautilus Pec Deck (Pre-Exhaust Method)</h3>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> Mentzer sometimes began with flyes to pre-exhaust the pecs before presses, making presses even more challenging. On machines, he loved static holds for maximum contraction.</p>
        </li>
      </ol>
    </section>

    <section>
      <h2>Mentzer’s Chest Training Style and Intensity</h2>
      <p>Mike Mentzer’s workouts were short in duration but pushed the body past what most lifters could tolerate. Some of his methods included:</p>
      <ul>
        <li><strong>Forced Reps:</strong> Partner-assisted reps after failure.</li>
        <li><strong>Negatives:</strong> Slowly lowering the weight for maximum eccentric stress.</li>
        <li><strong>Static Holds:</strong> Holding the weight in the contracted position for 10–15 seconds.</li>
        <li><strong>Pre-Exhaust:</strong> Fatiguing the pecs with isolation (flyes/pec deck) before compound presses.</li>
      </ul>
      <p>By using these intensity boosters, a single set could achieve what multiple traditional sets could not.</p>
    </section>

    <section>
      <h2>Training Frequency for Chest</h2>
      <p>Mentzer’s chest workouts were performed once every 5–7 days, sometimes even less often depending on recovery. His belief was simple: if the chest wasn’t fully recovered, training it again would hinder growth instead of promoting it.</p>
      <p>This infrequency allowed him to go “all in” on every set without worrying about burning out.</p>
    </section>

    <section>
      <h2>Key Takeaways from Mike Mentzer’s Chest Routine</h2>
      <ul>
        <li><strong>Train with Intensity, Not Volume</strong> – One brutal set can stimulate growth better than five half-hearted ones.</li>
        <li><strong>Upper Chest Emphasis</strong> – Incline presses were prioritized for a well-developed look.</li>
        <li><strong>Controlled Reps</strong> – Quality execution always outweighed heavy weights moved with sloppy form.</li>
        <li><strong>Pre-Exhaust Works</strong> – Flyes or pec deck first can make pressing movements more effective.</li>
        <li><strong>Rest and Recover</strong> – Chest should be trained only when fully recovered to maximize growth.</li>
      </ul>
    </section>

    <section>
      <h2>Final Thoughts: Should You Try Mike Mentzer’s Chest Workout?</h2>
      <p>Mike Mentzer’s <strong>chest workout routine</strong> remains one of the most efficient ways to train the chest. While most bodybuilders of his time were performing dozens of sets, Mentzer proved that just a handful of all-out sets, done with perfect form and intensity, could build world-class results.</p>
      <p>If you’re tired of marathon chest days and want a smarter, more effective system, experimenting with <strong>Mentzer’s Heavy Duty chest training</strong> could change the way you build muscle forever.</p>
    </section>
  </article>
`

const ChestHTML = `
  <article>
    <header>
      <h1>Mike Mentzer Chest Workout Routine: Heavy Duty Training for Maximum Chest Growth</h1>
      <p>Few names in bodybuilding are as iconic as <strong>Mike Mentzer</strong>. With his <strong>Heavy Duty training philosophy</strong>, Mentzer broke away from the high-volume workout styles of his era and introduced a system centered around brief, intense, and infrequent workouts. His chest routine, in particular, is a masterclass in maximizing muscle growth with minimal sets.</p>
      <p>If you’ve ever wanted to know how <strong>Mike Mentzer built his legendary chest</strong>, this article will explore his chest training methodology, exercises, sets, style, and philosophy in detail. By the end, you’ll understand why his approach remains highly respected among serious bodybuilders today.</p>
    </header>

    <section>
      <h2>The Heavy Duty Philosophy Behind Mentzer’s Chest Training</h2>
      <p>Mentzer’s entire system was based on <strong>intensity over volume</strong>. Instead of spending hours in the gym, he believed in short but brutally effective workouts taken to absolute muscular failure. Here are his core principles applied to chest:</p>
      <ul>
        <li><strong>One All-Out Set Per Exercise</strong> – Warm up, then push one working set to total failure.</li>
        <li><strong>Perfect Form and Controlled Reps</strong> – Slow, deliberate movements to keep tension on the chest and avoid momentum.</li>
        <li><strong>Intensity Techniques</strong> – Forced reps, negatives, and static holds to push beyond failure.</li>
        <li><strong>Infrequent Training</strong> – Hitting chest once every 5–7 days to allow full recovery.</li>
        <li><strong>Focus on Compound Lifts</strong> – Exercises that recruit maximum muscle fibers.</li>
      </ul>
    </section>

    <section>
      <h2>Mike Mentzer Chest Workout Routine</h2>
      <p>Mentzer’s chest workouts were concise but devastatingly effective. Here’s an example of what his <strong>chest training routine</strong> looked like:</p>

      <ol>
        <li>
          <h3>Incline Barbell Press (or Incline Dumbbell Press)</h3>
          <p><strong>Sets:</strong> 1–2 warm-up sets, 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> Mentzer favored incline pressing to build the upper chest, giving the pecs fuller, more balanced development. Each rep was slow, controlled, and taken to failure.</p>
        </li>
        <li>
          <h3>Flat Barbell or Dumbbell Press</h3>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–8<br>
          <strong>Notes:</strong> A staple for overall chest mass. Mentzer emphasized form and control, avoiding ego-lifting or bouncing the bar off the chest.</p>
        </li>
        <li>
          <h3>Dips (Chest Emphasis)</h3>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> By leaning forward and keeping elbows flared, Mentzer turned dips into one of his favorite chest builders. Weighted dips were used once bodyweight became too easy.</p>
        </li>
        <li>
          <h3>Dumbbell Flyes or Nautilus Pec Deck (Pre-Exhaust Method)</h3>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> Mentzer often began with flyes to pre-exhaust the pecs before presses, making pressing movements even more challenging. On machines, he loved static holds for maximum contraction.</p>
        </li>
      </ol>
    </section>

    <section>
      <h2>Mentzer’s Chest Training Style and Intensity</h2>
      <p>Mike Mentzer’s workouts were short in duration but pushed the body past what most lifters could tolerate. Some of his favorite intensity methods included:</p>
      <ul>
        <li><strong>Forced Reps:</strong> Partner-assisted reps after failure.</li>
        <li><strong>Negatives:</strong> Slowly lowering the weight for maximum eccentric stress.</li>
        <li><strong>Static Holds:</strong> Holding the weight in the contracted position for 10–15 seconds.</li>
        <li><strong>Pre-Exhaust:</strong> Fatiguing the pecs with isolation work (flyes/pec deck) before compound presses.</li>
      </ul>
      <p>By using these intensity boosters, a single set could achieve what multiple traditional sets could not.</p>
    </section>

    <section>
      <h2>Training Frequency for Chest</h2>
      <p>Mentzer’s chest workouts were performed once every 5–7 days, sometimes even less often depending on recovery. His belief was simple: if the chest wasn’t fully recovered, training it again would hinder growth instead of promoting it.</p>
      <p>This low frequency allowed him to go “all in” on every set without worrying about overtraining.</p>
    </section>

    <section>
      <h2>Key Takeaways from Mike Mentzer’s Chest Routine</h2>
      <ul>
        <li><strong>Train with Intensity, Not Volume</strong> – One brutal set can stimulate growth better than five half-hearted ones.</li>
        <li><strong>Upper Chest Emphasis</strong> – Incline presses were prioritized for a well-developed look.</li>
        <li><strong>Controlled Reps</strong> – Proper execution always outweighed heavy weights moved with poor form.</li>
        <li><strong>Pre-Exhaust Works</strong> – Flyes or pec deck first can make pressing movements more effective.</li>
        <li><strong>Rest and Recover</strong> – Train chest only when fully recovered to maximize growth.</li>
      </ul>
    </section>

    <section>
      <h2>Final Thoughts: Should You Try Mike Mentzer’s Chest Workout?</h2>
      <p>The <strong>Mike Mentzer chest workout routine</strong> remains one of the most efficient ways to train the chest. While most bodybuilders of his time were performing dozens of sets, Mentzer proved that just a handful of all-out sets, done with perfect form and intensity, could build world-class results.</p>
      <p>If you’re tired of marathon chest days and want a smarter, more effective system, experimenting with <strong>Mentzer’s Heavy Duty chest training</strong> could change the way you build muscle forever.</p>
    </section>
  </article>
`

const ArmsHTML = `
  <article>
    <header>
      <h1>Mike Mentzer Arm Workout Routine: Heavy Duty Training for Bigger Biceps and Triceps</h1>
      <p>When it comes to bodybuilding legends, <strong>Mike Mentzer</strong> wasn’t just known for his incredible physique but also for his groundbreaking <strong>Heavy Duty training system</strong>. While many lifters spent hours hammering away at arms with endless sets, Mentzer believed in a <strong>low-volume, high-intensity</strong> approach that produced maximum results in minimum time.</p>
      <p>His arm workouts were concise yet brutally effective—designed to push both biceps and triceps to failure with just a few carefully chosen exercises. In this article, we’ll break down <strong>Mike Mentzer’s arm workout routine</strong>, his training philosophy, exercise selection, sets, reps, intensity techniques, and recovery strategies so you can understand how he built his famously thick and powerful arms.</p>
    </header>

    <section>
      <h2>Mike Mentzer’s Heavy Duty Philosophy for Arms</h2>
      <p>Mentzer’s training approach for arms followed the same Heavy Duty principles as his other muscle groups:</p>
      <ul>
        <li><strong>Low Volume</strong> – 1–2 working sets per exercise, taken to absolute failure.</li>
        <li><strong>High Intensity</strong> – Using advanced techniques to push past normal limits.</li>
        <li><strong>Strict Form</strong> – Slow, controlled reps with maximum tension, avoiding momentum.</li>
        <li><strong>Infrequent Training</strong> – Training arms once every 5–7 days to allow full recovery.</li>
        <li><strong>Balanced Development</strong> – Giving equal attention to biceps and triceps for symmetry.</li>
      </ul>
    </section>

    <section>
      <h2>Mike Mentzer Arm Workout Routine</h2>
      <p>Mentzer’s arm workouts focused on a mix of compound and isolation movements performed with maximum intensity. A sample routine included:</p>

      <h3>Biceps</h3>
      <ol>
        <li>
          <h4>Barbell Curls (or Dumbbell Curls)</h4>
          <p><strong>Sets:</strong> 1–2 warm-up sets, 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> Mentzer used strict form, with no swinging or cheating. He slowed down the eccentric phase to maximize tension.</p>
        </li>
        <li>
          <h4>Incline Dumbbell Curls (Isolation & Stretch)</h4>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> This exercise provided a deep stretch, which Mentzer valued for stimulating full muscle fiber recruitment.</p>
        </li>
      </ol>

      <h3>Triceps</h3>
      <ol>
        <li>
          <h4>Close-Grip Bench Press (Compound Mass Builder)</h4>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–8<br>
          <strong>Notes:</strong> Mentzer loved this movement for triceps thickness. He used slow, controlled reps and avoided explosive lockouts.</p>
        </li>
        <li>
          <h4>Overhead Triceps Extensions (Dumbbell or Machine)</h4>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> Provided a full stretch of the long head of the triceps, ensuring complete development.</p>
        </li>
        <li>
          <h4>Pushdowns (Nautilus or Cable)</h4>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> Mentzer often finished triceps with machine pushdowns, holding peak contraction for maximum pump.</p>
        </li>
      </ol>
    </section>

    <section>
      <h2>Mentzer’s Arm Training Style and Intensity Techniques</h2>
      <p>Mentzer pushed every set to absolute muscular failure. To make one set as effective as possible, he used:</p>
      <ul>
        <li><strong>Forced Reps:</strong> Partner-assisted reps after failure.</li>
        <li><strong>Negatives:</strong> Slowly lowering the weight under control.</li>
        <li><strong>Static Holds:</strong> Holding the peak contraction for 10–15 seconds.</li>
        <li><strong>Pre-Exhaust:</strong> For triceps, he sometimes did pushdowns before close-grip bench press.</li>
      </ul>
    </section>

    <section>
      <h2>Training Frequency for Arms</h2>
      <p>Mentzer typically trained arms once every 5–7 days, often paired with chest or back. He always ensured arms were fully recovered before the next session, allowing maximum effort without risking overtraining.</p>
    </section>

    <section>
      <h2>Final Thoughts: Should You Try Mike Mentzer’s Arm Workout?</h2>
      <p>The <strong>Mike Mentzer arm workout routine</strong> remains one of the most efficient ways to build bigger biceps and triceps. By focusing on <strong>intensity over volume</strong>, Mentzer proved you don’t need endless sets for massive results—just a handful of perfectly executed, all-out sets.</p>
      <p>If you’re tired of marathon arm days, adopting <strong>Heavy Duty arm training</strong> could help you unlock new growth and strength.</p>
    </section>
  </article>
`

const LegsHTML = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Discover Mike Mentzer's leg workout routine for massive leg growth. Learn his Heavy Duty training philosophy, exercises, sets, and intensity techniques.">
  <title>Mike Mentzer Leg Workout Routine: Heavy Duty Training for Massive Leg Growth</title>
</head>
<body>

  <article>
    <header>
      <h1>Mike Mentzer Leg Workout Routine: Heavy Duty Training for Massive Leg Growth</h1>
      <p>When it comes to bodybuilding legends, <strong>Mike Mentzer</strong> is remembered not only for his physique but also for his revolutionary <strong>Heavy Duty training system</strong>. While many bodybuilders of his era hammered legs with countless sets of squats and extensions, Mentzer believed in a <strong>low-volume, high-intensity</strong> approach that produced maximum results in minimum time.</p>
      <p>His leg workouts were short, intense, and brutally effective—proving that you don’t need marathon sessions to build powerful quads, hamstrings, and calves. In this article, we’ll explore <strong>Mike Mentzer’s leg workout routine</strong>, including his methodology, exercises, sets, intensity techniques, and training philosophy.</p>
    </header>

    <section>
      <h2>Mike Mentzer’s Heavy Duty Philosophy for Legs</h2>
      <p>Mentzer applied his core Heavy Duty principles to leg training:</p>
      <ul>
        <li><strong>Low Volume, Maximum Effort</strong> – 1–2 working sets per exercise, taken to failure.</li>
        <li><strong>Perfect Form</strong> – Slow, controlled reps with no bouncing or momentum.</li>
        <li><strong>High Intensity</strong> – Using forced reps, negatives, and static holds.</li>
        <li><strong>Infrequent Training</strong> – Training legs once every 5–7 days, or longer if needed.</li>
        <li><strong>Balanced Approach</strong> – Training quads, hamstrings, glutes, and calves equally.</li>
      </ul>
    </section>

    <section>
      <h2>Mike Mentzer Leg Workout Routine</h2>
      <p>Mentzer’s leg training combined compound lifts with isolation work, performed with ruthless intensity. A sample leg workout looked like this:</p>

      <h3>Quadriceps & Glutes</h3>
      <ol>
        <li>
          <h4>Leg Extensions (Pre-Exhaust)</h4>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 8–12<br>
          <strong>Notes:</strong> Used to pre-exhaust the quads before squats or presses, ensuring the quads reached failure first.</p>
        </li>
        <li>
          <h4>Leg Press (or Barbell Squats)</h4>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> Mentzer favored the leg press for controlled, heavy work but also included squats. Every rep was slow and deep.</p>
        </li>
        <li>
          <h4>Hack Squats (Optional)</h4>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> Sometimes added for extra quad emphasis, always performed with strict form.</p>
        </li>
      </ol>

      <h3>Hamstrings</h3>
      <ol>
        <li>
          <h4>Leg Curls (Lying or Seated)</h4>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 6–10<br>
          <strong>Notes:</strong> Mentzer often used static holds or forced reps to push past failure.</p>
        </li>
      </ol>

      <h3>Calves</h3>
      <ol>
        <li>
          <h4>Standing Calf Raises</h4>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 8–15<br>
          <strong>Notes:</strong> Performed slowly with a full stretch and contraction, holding the squeeze at the top.</p>
        </li>
        <li>
          <h4>Seated Calf Raises</h4>
          <p><strong>Sets:</strong> 1 all-out working set<br>
          <strong>Reps:</strong> 10–15<br>
          <strong>Notes:</strong> Targeted the soleus muscle for complete calf development.</p>
        </li>
      </ol>
    </section>

    <section>
      <h2>Mentzer’s Leg Training Style and Intensity Techniques</h2>
      <p>Mentzer maximized each set with techniques such as:</p>
      <ul>
        <li><strong>Pre-Exhaust:</strong> Leg extensions before presses or squats.</li>
        <li><strong>Negatives:</strong> Slowly lowering the weight under control.</li>
        <li><strong>Static Holds:</strong> Holding peak contraction for 10–15 seconds.</li>
        <li><strong>Forced Reps:</strong> With a spotter’s help after reaching failure.</li>
      </ul>
      <p>This made even one set feel like multiple traditional sets, ensuring full muscle fiber recruitment.</p>
    </section>

    <section>
      <h2>Training Frequency for Legs</h2>
      <p>Mentzer believed leg training was extremely taxing on the body and central nervous system. For this reason, he often recommended training legs once every 7–10 days, depending on recovery needs.</p>
    </section>

    <section>
      <h2>Key Takeaways from Mike Mentzer’s Leg Routine</h2>
      <ul>
        <li><strong>Train to Failure:</strong> Push every set until you cannot complete another rep in good form.</li>
        <li><strong>Pre-Exhaust for Quad Growth:</strong> Leg extensions before presses or squats.</li>
        <li><strong>Quality Over Quantity:</strong> One perfect set beats five sloppy ones.</li>
        <li><strong>Balanced Development:</strong> Quads, hamstrings, and calves all trained equally.</li>
        <li><strong>Prioritize Recovery:</strong> Train legs only when fully recovered.</li>
      </ul>
    </section>

    <section>
      <h2>Final Thoughts: Should You Train Legs Like Mike Mentzer?</h2>
      <p>The <strong>Mike Mentzer leg workout routine</strong> is a brutally efficient way to build mass and strength. While most lifters punish themselves with endless squats and leg presses, Mentzer showed that short, high-intensity sessions could deliver superior results.</p>
      <p>If you’re tired of marathon leg days and want a smarter, more effective approach, adopting <strong>Heavy Duty leg training</strong> could transform your lower body development. Train hard, train smart, and let recovery do the rest.</p>
    </section>
  </article>
`

export const posts: BlogPost[] = [
  {
    slug: 'back-workout',
    title: 'Mike Mentzer Back Workout Routine: Heavy Duty Training for Maximum Growth',
    description:
      'Build a wide, thick back with low-volume, high-intensity HIT. Exercises, sets, reps, and frequency.',
    tags: ['mike mentzer', 'back workout', 'heavy duty', 'HIT'],
    html: BackHTML,
  },
  {
    slug: 'chest-workout',
    title: 'Mike Mentzer Chest Workout Routine: Heavy Duty Training for Maximum Chest Growth',
    description:
      'Upper-chest focused, low-volume routine with pre-exhaust options and intensity techniques.',
    tags: ['mike mentzer', 'chest workout', 'heavy duty', 'HIT'],
    html: ChestHTML,
  },
  {
    slug: 'arm-workout',
    title: 'Mike Mentzer Arm Workout Routine: Heavy Duty Training for Bigger Biceps and Triceps',
    description:
      'Few precise sets taken past comfort — strict curls, heavy close-grip pressing, and smart isolation.',
    tags: ['mike mentzer', 'arm workout', 'heavy duty', 'HIT'],
    html: ArmsHTML,
  },
  {
    slug: 'leg-workout',
    title: 'Mike Mentzer Leg Workout Routine: Heavy Duty Training for Massive Leg Growth',
    description:
      'Short, savage sessions for quads, hamstrings, and calves with pre-exhaust and slow negatives.',
    tags: ['mike mentzer', 'leg workout', 'heavy duty', 'HIT'],
    html: LegsHTML,
  },
]

export function getPostBySlug(slug: string) {
  return posts.find(p => p.slug === slug)
}
