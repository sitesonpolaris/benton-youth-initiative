// Single source of truth for Benton Youth Initiative content.
// Items marked CONFIRM need sign-off from BYI before launch (see CLAUDE.md).

export const site = {
  name: "Benton Youth Initiative",
  shortName: "BYI",
  legalName: "Benton's Youth Initiatives, Inc.", // CONFIRM exact legal name
  tagline: "Leadership · Empowerment",
  url: "https://www.bentonyouthinitiative.org",
  founded: 2016, // CONFIRM: old About page lists both 1994 and 2016
  founder: "James Alex Benton",
  phone: "(336) 575-0754",
  phoneHref: "tel:+13365750754",
  email: "info@bentonyouthinitative.com", // CONFIRM: domain spelling differs from the website
  region: "North Carolina",
  social: {
    facebook: "https://www.facebook.com/james.benton.315",
    instagram: "https://www.instagram.com/jalexbenton/",
  },
  mission:
    "We partner with Title I schools to give students who are struggling academically, or who have been written off, a real path to an affordable college education at historically Black colleges and universities.",
  vision:
    "Every first-generation and financially challenged student should walk onto a college campus, meet the people who run it, and leave knowing they belong there.",
  purpose:
    "We work alongside community organizations, city agencies, educators and faith-based groups to bring families educational resources, information sessions, workshops, conferences, parent engagement and crisis support.",
};

export const donate = {
  // Replace with the BYI Zeffy (recommended, 0% platform fees) or Givebutter form URL.
  // Until then the button falls back to the existing Cash App link.
  url: "https://cash.app/$BentonYIScholars",
  platformReady: false,
  // CONFIRM: sample gift levels, adjust to real program costs.
  levels: [
    { amount: 25, funds: "Covers one student's college application fee." },
    { amount: 50, funds: "Puts one student on a bus for a full HBCU campus tour day." },
    { amount: 100, funds: "Funds a family workshop on financial aid and the FAFSA." },
    { amount: 250, funds: "Sponsors a student's full season of tours, mentoring and application support." },
  ],
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/#what-we-do", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/#get-involved", label: "Get involved" },
  { href: "/contact", label: "Contact" },
];

export const audiences = [
  {
    title: "First-generation students",
    body: "Young people who will be the first in their family to go to college, and who need someone to walk them through each step.",
  },
  {
    title: "Students at Title I schools",
    body: "We partner directly with Title I high schools to reach students where they already are.",
  },
  {
    title: "Families with limited means",
    body: "Students from low to moderate income households who assume college is out of reach financially. It usually isn't.",
  },
  {
    title: "Youth who need a second look",
    body: "Students with low grades or a rough record who have the potential and need an adult in their corner.",
  },
];

export const programs = [
  {
    id: "tours",
    title: "HBCU campus tours",
    body: "We put students on the bus to college open houses, college fairs and campus tours, so the first time they see a campus isn't move-in day.",
    image: "/images/nc-at-visit.jpg",
    alt: "BYI students and Mr. Benton crossing their arms in the Aggie pride sign inside an NC A&T campus building",
  },
  {
    id: "applications",
    title: "Applications and financial aid",
    body: "One-on-one help matching students with the colleges they want, completing applications, and securing the financial aid that makes it affordable.",
    image: "/images/campus-dining-hall.jpg",
    alt: "BYI students with Mr. Benton in a college student union during a campus visit",
  },
  {
    id: "mentoring",
    title: "Mentoring and leadership",
    body: "Students meet deans, admissions advisors, coaches and current college students, and build the confidence to speak up for themselves.",
    image: "/images/church-sunday.jpg",
    alt: "Young men from BYI gathered with church leaders and mentors at a Sunday service",
  },
  {
    id: "community",
    title: "Service and family support",
    body: "Students give back through service projects, and families get workshops, parent engagement sessions and crisis support when they need it.",
    image: "/images/community-service.jpg",
    alt: "BYI students giving a thumbs up with elderly neighbors after a community service visit",
  },
];

// CONFIRM: sample figures for layout. Replace with real counts before launch.
export const impact = {
  confirmed: false,
  stats: [
    { value: "500+", label: "Students reached" },
    { value: "25", label: "Title I schools partnered" },
    { value: "60+", label: "Campus tours and events" },
    { value: "1,200", label: "Student service hours" },
  ],
};

export const pastEvents = [
  { title: "HBCU bus tours", body: "Day trips to North Carolina campuses with admissions sessions, student panels and campus walks." },
  { title: "All White Gala", body: "Our signature dressed-up fundraiser that funds the year's tours and scholarships." },
  { title: "Christmas celebration", body: "A holiday party for BYI students, families and mentors." },
  { title: "Community service days", body: "Students visiting seniors and neighbors, and helping where they're needed." },
];

export const board = [
  { name: "James Alex Benton", role: "Founder" },
  { name: "Dr. John T. McCoy", role: "Board Member, Nazareth Baptist Church" },
  { name: "Ms. Shawn Pierce", role: "Secretary" },
  { name: "Ms. Kai Jerrell", role: "Board Member, Owner of Speechworks Therapy" },
  { name: "Ms. Garrette Smith", role: "Board Member" },
  { name: "Mr. Rodrigues Thompson", role: "Board Member" },
  { name: "Coach David Bowser", role: "Board Member, Football Coach at Johnson C. Smith University" },
];

export const paths = [
  {
    id: "student",
    label: "I'm a student",
    heading: "Your path to college starts with one form.",
    steps: [
      "Apply to the BYI program. It takes about five minutes.",
      "We'll call to learn what you want and where you are in school.",
      "Join the next campus tour and meet your mentor.",
    ],
    cta: { href: "/apply", label: "Apply to BYI" },
  },
  {
    id: "parent",
    label: "I'm a parent",
    heading: "You don't have to figure out college alone.",
    steps: [
      "Tell us about your child and what they need.",
      "Come to a family workshop on applications and financial aid.",
      "Ride along on a campus tour if you'd like to see it yourself.",
    ],
    cta: { href: "/contact?topic=parent", label: "Talk with BYI" },
  },
  {
    id: "partner",
    label: "I'm a school or church",
    heading: "Bring BYI to your students.",
    steps: [
      "Title I schools, churches and community groups can host a BYI session.",
      "We bring information sessions, workshops and tours to your students.",
      "We stay in touch with each student through application season.",
    ],
    cta: { href: "/contact?topic=partner", label: "Partner with us" },
  },
  {
    id: "supporter",
    label: "I want to help",
    heading: "Put a student on the bus to college.",
    steps: [
      "Give once or monthly. Every gift goes to tours, fees and mentoring.",
      "Volunteer as a mentor or chaperone.",
      "Sponsor a tour or a table at the All White Gala.",
    ],
    cta: { href: "/#donate", label: "Ways to give" },
  },
];
