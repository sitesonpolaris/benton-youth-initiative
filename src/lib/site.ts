// Single source of truth for Benton Youth Initiative content.
// Items marked CONFIRM need sign-off from BYI before launch (see CLAUDE.md).

export const site = {
  name: "Benton Youth Initiative",
  shortName: "BYI",
  legalName: "Benton's Youth Initiatives, Inc.", // CONFIRM exact legal name
  url: "https://www.bentonyouthinitiative.org",
  founded: 2016, // CONFIRM: old About page lists both 1994 and 2016
  founder: "James Alex Benton",
  phone: "(336) 575-0754",
  phoneHref: "tel:+13365750754",
  email: "info@bentonyouthinitative.com", // CONFIRM: domain spelling differs from the website
  social: {
    facebook: "https://www.facebook.com/james.benton.315",
    instagram: "https://www.instagram.com/jalexbenton/",
  },
  mission:
    "We partner with Title I schools to give students who are struggling, or who have been written off, a real path to an affordable college education at historically Black colleges and universities.",
  vision:
    "Every first-generation and financially challenged student should walk onto a college campus, meet the people who run it, and leave knowing they belong there.",
  purpose:
    "We work alongside community organizations, city agencies, educators and churches to bring families educational resources, information sessions, workshops, conferences, parent engagement and crisis support.",
};

export const donate = {
  // Zeffy (0% platform fees). Replace with BYI's Zeffy donation form URL once the account is set up.
  // Until then the button falls back to the existing Cash App link.
  url: "https://cash.app/$BentonYIScholars",
  provider: "zeffy" as const,
  // CONFIRM: sample gift levels, adjust to real program costs.
  levels: [
    { amount: 25, funds: "Covers one student's college application fee." },
    { amount: 50, funds: "Puts one student on the bus for a full HBCU campus tour day." },
    { amount: 100, funds: "Funds a family workshop on financial aid and the FAFSA." },
    { amount: 250, funds: "Sponsors a student's full season of tours, mentoring and application help." },
  ],
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/#road", label: "What we do" },
  { href: "/#campuses", label: "Campuses" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export const shortcuts = [
  { href: "/apply", label: "Apply to BYI", note: "Students" },
  { href: "/events", label: "Tours & events", note: "What's next" },
  { href: "/contact?topic=parent", label: "For parents", note: "Get support" },
  { href: "/contact?topic=partner", label: "Partner with us", note: "Schools & churches" },
  { href: "/#donate", label: "Donate", note: "Fund a seat" },
];

export const audiences = [
  {
    title: "First in the family",
    body: "Students who will be the first in their family to go to college, and need someone to walk them through every step.",
  },
  {
    title: "Title I high schools",
    body: "We partner directly with Title I schools to reach students where they already are.",
  },
  {
    title: "Families stretching every dollar",
    body: "Students from low to moderate income homes who assume college is out of reach. It usually isn't.",
  },
  {
    title: "Students who need a second look",
    body: "Young people with low grades or a rough record who have the potential and need an adult in their corner.",
  },
];

export const road = [
  {
    id: "tour",
    title: "Step on campus",
    body: "We put students on the bus to HBCU open houses and campus tours. They walk the yard, eat in the student union and meet students who look like them.",
    image: "/images/wssu-visit.jpg",
    alt: "BYI students with James Benton in the student union during a visit to Winston-Salem State University",
    caption: "Winston-Salem State University",
  },
  {
    id: "fairs",
    title: "Meet the colleges",
    body: "At college fairs and admissions sessions, students talk face to face with recruiters, deans and coaches, and learn what each school is looking for.",
    image: "/images/college-fair-clinton.jpg",
    alt: "James Benton at a Clinton College recruiting table at a college fair",
    caption: "College fair, Clinton College table",
  },
  {
    id: "apply",
    title: "Apply and get funded",
    body: "One-on-one help choosing schools, finishing applications and securing the financial aid and scholarships that make college affordable.",
    image: "/images/mentees-suits.jpg",
    alt: "James Benton with two young adults he mentored, all dressed in suits",
    caption: "Mentees, dressed for the next step",
  },
  {
    id: "graduate",
    title: "Walk across the stage",
    body: "We stay in touch through high school graduation and beyond, with mentors, check-ins and a community that shows up for every milestone.",
    image: "/images/grad-ncat.jpg",
    alt: "A BYI graduate in a blue and gold North Carolina A&T cap and gown standing with James Benton",
    caption: "Graduation day at North Carolina A&T",
  },
];

export const campuses = [
  {
    id: "nccu",
    short: "NCCU",
    name: "North Carolina Central University",
    city: "Durham",
    image: "/images/nccu-visit.jpg",
    alt: "BYI students crossing their arms in a group pose with James Benton inside the NCCU student center",
    caption: "Campus visit to North Carolina Central University.",
  },
  {
    id: "wssu",
    short: "WSSU",
    name: "Winston-Salem State University",
    city: "Winston-Salem",
    image: "/images/wssu-visit.jpg",
    alt: "BYI students with James Benton in the WSSU student union",
    caption: "Lunch in the student union at Winston-Salem State.",
  },
  {
    id: "ncat",
    short: "A&T",
    name: "North Carolina A&T State University",
    city: "Greensboro",
    image: "/images/ncat-visit.jpg",
    alt: "James Benton with young men standing on an Aggie logo floor at North Carolina A&T",
    caption: "Standing on the Aggie floor at North Carolina A&T.",
  },
  {
    id: "bennett",
    short: "Bennett",
    name: "Bennett College",
    city: "Greensboro",
    image: "/images/bennett-visit.jpg",
    alt: "A BYI student in a graduation stole in front of Bennett College banners",
    caption: "Celebrating at Bennett College.",
  },
  {
    id: "clinton",
    short: "Clinton",
    name: "Clinton College",
    city: "Rock Hill, SC",
    image: "/images/clinton-gym.jpg",
    alt: "James Benton with Clinton College staff in a college gym",
    caption: "With friends of BYI at Clinton College.",
  },
];

// CONFIRM: sample figures for layout. Replace with real counts before launch.
export const impact = {
  confirmed: false,
  stats: [
    { value: 500, suffix: "+", label: "Students reached" },
    { value: 25, suffix: "", label: "Title I schools partnered" },
    { value: 60, suffix: "+", label: "Campus tours and events" },
    { value: 1200, suffix: "", label: "Student service hours" },
  ],
};

export const graduates = [
  { image: "/images/grad-hug.jpg", alt: "A BYI graduate in cap and gown hugging James Benton" },
  { image: "/images/grads-stoles.jpg", alt: "Three young men in graduation stoles with James Benton" },
  { image: "/images/grad-stadium.jpg", alt: "A graduate holding his diploma beside James Benton in a stadium" },
  { image: "/images/grad-ncat.jpg", alt: "A North Carolina A&T graduate with James Benton" },
  { image: "/images/career-fair.jpg", alt: "Two young women in business attire at a career fair" },
];

export const events = [
  {
    id: "all-white",
    title: "The All White Party",
    when: "Annual summer fundraiser",
    where: "Charlotte, NC",
    body: "Our signature dressed-in-white night out, with a live DJ, that funds the year's campus tours and scholarships. The 3rd annual party was held at Club Mirage in Charlotte. For guests 25 and older.",
    image: "/images/all-white-party.jpg",
    alt: "Flyer for the Benton Youth Initiative 3rd Annual All White Party at Club Mirage in Charlotte",
  },
  {
    id: "homecoming",
    title: "Homecoming service day",
    when: "Every fall",
    where: "On campus",
    body: "Students roll up their sleeves before the game, delivering supplies and serving the community that hosts them.",
    image: "/images/homecoming-service.jpg",
    alt: "BYI students in matching shirts carrying boxes beside a passenger van during a homecoming service day",
  },
  {
    id: "youth-sunday",
    title: "Youth Sunday",
    when: "With our church partners",
    where: "Partner congregations",
    body: "BYI young men dress up, stand up and are celebrated by the congregations that back them.",
    image: "/images/church-youth-sunday.jpg",
    alt: "BYI young men with pastors and mentors at the front of a church sanctuary",
  },
  {
    id: "seniors",
    title: "Service with our seniors",
    when: "Throughout the year",
    where: "Local neighborhoods",
    body: "Students visit and help older neighbors, and learn that leadership starts with showing up for others.",
    image: "/images/service-seniors.jpg",
    alt: "BYI students giving a thumbs up with older neighbors after a service visit",
  },
];

// Contact details from the old /staff page (tel/mailto link targets, not the
// placeholder "(704) 806-4102" link text). CONFIRM: Pierce and Smith had placeholder
// phone links (555-555-5555) so no phone is shown; Thompson's listed email is
// jalexbenton@yahoo.com (possibly Mr. Benton's); Jerrell's number matches the
// template's placeholder text.
export type BoardMember = { name: string; role: string; phone?: string; email?: string };

export const board: BoardMember[] = [
  { name: "James Alex Benton", role: "Founder" },
  { name: "Dr. John T. McCoy", role: "Nazareth Baptist Church", phone: "(803) 328-8349", email: "mccjo8@yahoo.com" },
  { name: "Ms. Shawn Pierce", role: "Secretary", email: "shawn.l.pierce@gmail.com" },
  { name: "Ms. Kai Jerrell", role: "Owner, Speechworks Therapy", phone: "(704) 806-4102", email: "kai@speechworkstherapy.com" },
  { name: "Ms. Garrette Smith", role: "Board Member", email: "garretteesmith@gmail.com" },
  { name: "Mr. Rodrigues Thompson", role: "Board Member", phone: "(917) 370-7402", email: "jalexbenton@yahoo.com" },
  { name: "Coach David Bowser", role: "Football Coach, Johnson C. Smith University", phone: "(919) 244-9316", email: "dbowser@jcsu.edu" },
];

export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, "")}`;

export const paths = [
  {
    id: "student",
    label: "I'm a student",
    heading: "Your path to college starts with one form.",
    steps: [
      "Apply to BYI. It takes about five minutes.",
      "We call you to learn what you want and where you are in school.",
      "Get on the bus for the next campus tour and meet your mentor.",
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
      "Ride along on a campus tour and see it for yourself.",
    ],
    cta: { href: "/contact?topic=parent", label: "Talk with BYI" },
  },
  {
    id: "mentor",
    label: "I want to mentor",
    heading: "Be the adult in a student's corner.",
    steps: [
      "Chaperone a campus tour or a college fair.",
      "Share your own college or career story.",
      "Check in with one student once a month.",
    ],
    cta: { href: "/contact?topic=volunteer", label: "Volunteer with BYI" },
  },
  {
    id: "partner",
    label: "We're a school or church",
    heading: "Bring BYI to your students.",
    steps: [
      "Host a BYI information session or family workshop.",
      "Send students on our HBCU tours.",
      "Sponsor a bus, a table, or a scholarship.",
    ],
    cta: { href: "/contact?topic=partner", label: "Partner with us" },
  },
];
