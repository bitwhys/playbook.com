export const explorationCategories = {
  nba: {
    title: 'NBA',
    description: 'Basketball through the numbers.',
  },
  nfl: {
    title: 'NFL',
    description: 'A statistical view of football.',
  },
  math: {
    title: 'Math',
    description: 'The ideas behind the analysis.',
  },
  general: {
    title: 'General',
    description: 'Questions, patterns, and possibilities.',
  },
} as const

export type ExplorationCategory = keyof typeof explorationCategories

export type Exploration = {
  slug: string
  category: ExplorationCategory
  title: string
  description: string
  sample?: 'bars' | 'curve' | 'scatter'
  preview?: {
    src: string
    alt: string
  }
}

// Sample entries for verifying the index and detail layouts.
export const explorations: readonly Exploration[] = [
  {
    slug: 'the-shape-of-a-shot',
    category: 'nba',
    title: 'The shape of a shot',
    description: 'How might shot selection change the way we compare scorers?',
    sample: 'scatter',
  },
  {
    slug: 'pace-and-possessions',
    category: 'nba',
    title: 'Pace, possessions, and the scoreboard',
    description:
      'A space to explore what changes when we measure performance per possession.',
    sample: 'bars',
  },
  {
    slug: 'the-hot-hand',
    category: 'nba',
    title: 'What would a hot hand look like?',
    description:
      'A space to compare streaks with the patterns randomness can produce.',
    sample: 'curve',
  },
  {
    slug: 'fourth-down',
    category: 'nfl',
    title: 'The fourth-down question',
    description:
      'A space to explore field position, risk, and the decision to go for it.',
    sample: 'curve',
  },
  {
    slug: 'beyond-the-record',
    category: 'nfl',
    title: 'Beyond the win-loss record',
    description:
      'How might point differential offer another view of a team\u2019s season?',
    sample: 'scatter',
  },
  {
    slug: 'field-position',
    category: 'nfl',
    title: 'Every yard has a context',
    description:
      'A space to compare the value of field position across a drive.',
    sample: 'bars',
  },
  {
    slug: 'small-samples',
    category: 'math',
    title: 'Small samples, big swings',
    description:
      'A space to explore why early results can look so different from long-run averages.',
    sample: 'bars',
  },
  {
    slug: 'bayesian-updates',
    category: 'math',
    title: 'Changing your mind with evidence',
    description:
      'A space to see how new observations could update an initial belief.',
    sample: 'curve',
  },
  {
    slug: 'correlation',
    category: 'math',
    title: 'When two things move together',
    description:
      'A space to explore correlation, outliers, and the limits of a trend line.',
    sample: 'scatter',
  },
  {
    slug: 'polling-uncertainty',
    category: 'general',
    title: 'What does a polling margin mean?',
    description:
      'A space to explore uncertainty around a hypothetical polling estimate.',
    sample: 'curve',
  },
  {
    slug: 'averages',
    category: 'general',
    title: 'Which average tells the story?',
    description:
      'A space to compare the mean and median when a distribution is uneven.',
    sample: 'bars',
  },
  {
    slug: 'hidden-patterns',
    category: 'general',
    title: 'The patterns a summary can hide',
    description:
      'A space to examine how grouping observations can change the apparent relationship.',
    sample: 'scatter',
  },
]
