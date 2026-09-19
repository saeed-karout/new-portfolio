// ============================================================
//  PROFILE DATA — src/data/profile.js
//  كل النصوص الشخصية في مكان واحد. عدّل هنا فقط.
// ============================================================

export const profile = {
  name: 'Mohamad Saeed Karout',
  initials: 'MK',
  role: 'Full-Stack Developer',
  location: 'Damascus, Syria · Working remotely',
  email: 'mohamadsaeedkarout@gmail.com',
  phone: '+963 957 608 833',
  whatsapp: 'https://wa.me/963957608833',
  linkedin: 'https://www.linkedin.com/in/mhd-saeed-karout-245a88436',
  github: 'https://github.com/saeed-karout',

  // ضع صورتك في public/images/profile.jpg ثم اكتب: '/images/profile.jpg'
  photo: '/images/profile.webp',

  // ضع ملف الـ CV في public/ ثم اكتب مثلاً: '/Mohamad-Saeed-Karout-CV.pdf'
  // يظهر زر Download CV تلقائياً عندما لا يكون فارغاً
  cvUrl: '',

  status: 'Open to full-time & remote roles',
}

export const intro =
  "Clean, secure REST APIs with Node.js and Express, paired with fast, friendly interfaces " +
  "in React and Vue.js — that's what I do best. Over the past 3+ years I've shipped " +
  "products for clients in Germany, the USA, the UAE and Saudi Arabia, and I built my own " +
  "SaaS platform, Sham Stores, from the first line of code to launch."

export const stats = [
  { value: '3+',  label: 'Years of professional experience' },
  { value: '20+', label: 'Projects delivered to clients' },
  { value: '4',   label: 'Countries I’ve worked with' },
]

export const about = [
  "I enjoy owning a product from start to finish: shaping the data model, writing the API, " +
  "building the interface and putting it live. I care about code that is easy to read, easy " +
  "to change and dependable in production.",

  "Today I lead Sham Stores, a platform that helps Syrian restaurants and shops go online " +
  "with QR menus and web stores. Before that I worked as a full-stack developer at Tessafold, " +
  "a software and AI company serving international clients, and as a front-end developer at " +
  "Plateau Agency.",

  "Since 2022 I've also taught web development to 150+ students and junior developers. " +
  "Teaching keeps my fundamentals sharp — and makes me a clearer, more patient teammate.",
]

export const services = [
  {
    icon: 'server',
    title: 'Back-end',
    text: 'REST APIs with Node.js and Express, JWT authentication, role-based access and well-designed MongoDB and MySQL data models.',
  },
  {
    icon: 'layout',
    title: 'Front-end',
    text: 'Responsive, accessible interfaces in React and Vue.js, turned from design files into clean, reusable components.',
  },
  {
    icon: 'rocket',
    title: 'Delivery',
    text: 'Deployment on DigitalOcean, Vercel and Netlify, Git-based workflows, code review and steady work in Agile teams.',
  },
]

export const experience = [
  {
    role: 'Founder & CEO',
    company: 'Sham Stores',
    link: 'https://shamstores.com/',
    location: 'Damascus, Syria',
    date: '09/2026 — Present',
    points: [
      'Founded a SaaS platform that turns restaurants and retail shops into digital QR menus and online stores.',
      'Designed and built the whole platform: Node.js & Express REST API, MySql data layer, and the customer and merchant web apps.',
      'Built multi-tenant merchant accounts, menu and product management, QR table ordering and the full order flow.',
      'Handle deployment, security and performance in production, plus merchant onboarding and the product roadmap.',
    ],
  },
  {
    role: 'Full-Stack Developer (Node.js)',
    company: 'Tessafold',
    link: 'https://tessafold.com/',
    location: 'Germany · Remote',
    date: '06/2025 — 09/2026',
    points: [
      'Built and maintained web applications for 5+ international clients in Germany, the USA, the UAE and Saudi Arabia.',
      'Developed REST APIs in Node.js and Express with authentication, role-based access and third-party integrations.',
      'Designed MySQL schemas and connected back-end services to React and Vue.js interfaces.',
      'Worked in an Agile/Scrum team with Git, GitHub, code reviews and regular release cycles.',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'Plateau Agency',
    link: 'https://plateau.media/',
    location: 'Syria & Saudi Arabia',
    date: '08/2024 — 04/2025',
    points: [
      'Built websites and client-facing interfaces for 5+ clients of a licensed marketing agency.',
      'Created reusable components in Vue.js and React, styled with Tailwind CSS and Bootstrap.',
      'Worked closely with designers and account managers to turn campaign ideas into live pages.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    link: null,
    location: 'Damascus, Syria',
    date: '01/2024 — Present',
    points: [
      'Delivered complete web solutions for 10+ small businesses and startups — from requirements to handover.',
      'Built back ends in Node.js/Express and Laravel, and front ends in React and Vue.js.',
    ],
  },
]

export const skills = [
  { group: 'Back-end',  items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'MVC', 'C#'] },
  { group: 'Front-end', items: ['React.js', 'Vue.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vuetify', 'Bootstrap', 'HTML5 & CSS3'] },
  { group: 'Databases', items: ['MongoDB', 'Mongoose', 'MySQL'] },
  { group: 'Tools & Delivery', items: ['Git & GitHub', 'Postman', 'Swagger', 'DigitalOcean', 'Vercel', 'Netlify', 'Agile / Scrum','heroku'] },
]

export const teaching = {
  title: 'IT Trainer & Web Development Mentor',
  date: '07/2022 — Present',
  text:
    'I teach web development, modern JavaScript frameworks and C# to students and junior developers — ' +
    'online and in in-person workshops — and share tutorials with a growing community on YouTube and social media.',
  highlights: [
    { value: '150+', label: 'Students & juniors trained' },
    { value: '30+',  label: 'Tutorials published' },
  ],
}

export const education = [
  {
    degree: 'B.Sc. in Information Technology (ISDN)',
    school: 'Syrian Virtual University',
    date: '2023 — 2026',
  },
  {
    degree: 'Diploma in Computer Science — Software',
    school: 'Syrian Virtual University',
    date: '2020 — 2022',
  },
]

export const certifications = [
  'Web Development Fundamentals — Step Ahead, UAE',
  'Web Developer Program — Al Barakaa Association, Damascus',
]

export const languages = [
  { name: 'Arabic',  level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
]
