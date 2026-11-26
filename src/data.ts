export interface JourneyEntry {
  when: string;
  title: string;
  where: string;
  desc: string;
  current?: boolean;
  duties?: string[];
}

export const PROFILE = {
  name: 'Lydiah Mwanu',
  fullName: 'Lydiah Wamucii Mwanu',
  email: 'lydiahwamucii7@gmail.com',
  roles: ['Software Developer', 'Web Developer', 'ICT Intern', 'Lifelong Learner'],
} as const;

export const JOURNEY: JourneyEntry[] = [
  {
    when: 'Sep — Dec 2026',
    title: 'ICT Intern',
    where: 'Outspan Global University',
    current: true,
    desc: "Industrial attachment with the university's ICT department — my first role applying classroom skills to real systems and real users.",
    duties: [
      'Supporting day-to-day ICT operations and user support across the university',
      'Working alongside the ICT team on systems, maintenance and troubleshooting',
      'Applying web and database coursework to practical, real-world tasks',
    ],
  },
  {
    when: '2025 — 2026',
    title: 'Diploma in Software Development',
    where: 'The Nyeri National Polytechnic',
    desc: 'Core training in how software is built, from front-end pages to the databases behind them.',
    duties: [
      'Web development with HTML and CSS',
      'Programming fundamentals and problem-solving',
      'Database design and management',
    ],
  },
  {
    when: '2021 — 2024',
    title: 'Kenya Certificate of Secondary Education',
    where: 'South Tetu Girls High School',
    desc: 'Completed secondary education — where my interest in ICT first took shape and grew into a career direction.',
  },
];
