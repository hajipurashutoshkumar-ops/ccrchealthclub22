import { Activity, TeamMember, GalleryItem, StatItem, ClubObjective, Notice } from '../types';

export const CLUB_INFO = {
  name: "CCRC Health Club",
  college: "Capital College and Research Center (CCRC)",
  location: "Koteshwor, Kathmandu, Nepal",
  shortLocation: "Koteshwor, Kathmandu",
  slogan: "Quality Health with Quality Education.",
  established: "2018",
  email: "healthclub@ccrc.edu.np",
  phone: "+977-1-5100421",
  alternatePhone: "+977 9841234567",
  address: "Koteshwor-32, Kathmandu 44600, Nepal",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1706606371754!2d85.3444453761895!3d27.681121026645396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1994e073c683%3A0x86134b9d0b6bfd41!2sCapital%20College%20and%20Research%20Center!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp",
  socials: {
    facebook: "https://facebook.com/ccrchealthclub",
    instagram: "https://instagram.com/ccrchealthclub",
    linkedin: "https://linkedin.com/company/ccrchealthclub",
    youtube: "https://youtube.com/@ccrchealthclub"
  },
  images: {
    logo: "https://i.im.ge/QMZe7z8/symbol.jpg-t600.webp",
    logoFallback: "https://im.ge/i/QMZe7z8",
    heroBg: "https://i.im.ge/QMZeIOh/WhatsApp_Image_2026-06-24_at_10.20.59_AM.jpg",
    heroBgFallback: "https://im.ge/i/QMZeIOh",
    campus: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
  }
};

export const ABOUT_DETAILS = {
  introduction: "CCRC Health Club is a student-led organization at Capital College and Research Center (CCRC), Koteshwor, Kathmandu. Grounded in our motto 'Quality Health with Quality Education', we are dedicated to fostering physical wellness, mental health awareness, emergency preparedness, and community health services across campus and Nepal.",
  mission: "To cultivate a healthy, empathetic, and resilient student community by promoting holistic health awareness, emergency medical readiness, blood donation drives, and active community outreach.",
  vision: "To become Nepal's leading youth health organization in higher education, inspiring future leaders to integrate healthy living with academic excellence.",
  whyJoin: [
    {
      title: "Leadership & Personal Growth",
      desc: "Gain hands-on experience organizing mega blood donation drives, health camps, and national awareness campaigns.",
      icon: "Award"
    },
    {
      title: "First Aid & Lifesaving Skills",
      desc: "Receive certified medical training in CPR, first aid response, and emergency triage directly from medical professionals.",
      icon: "ShieldCheck"
    },
    {
      title: "Community Impact",
      desc: "Serve local communities in Kathmandu valley and rural Nepal through free medical camps and health literacy programs.",
      icon: "Heart"
    },
    {
      title: "Mental & Physical Wellness",
      desc: "Participate in daily yoga, mindfulness sessions, outdoor fitness challenges, and peer counseling workshops.",
      icon: "Sparkles"
    }
  ]
};

export const OBJECTIVES: ClubObjective[] = [
  {
    id: 'obj-1',
    title: 'Health Education',
    description: 'Promote disease prevention, nutrition, hygiene, and mental health awareness among students and faculty.',
    icon: 'BookOpen'
  },
  {
    id: 'obj-2',
    title: 'Emergency Readiness',
    description: 'Train college members in basic life support, emergency response, and certified first aid practices.',
    icon: 'Activity'
  },
  {
    id: 'obj-3',
    title: 'Blood Donation Drives',
    description: 'Organize bi-annual blood donation camps in coordination with Nepal Red Cross Society.',
    icon: 'Droplet'
  },
  {
    id: 'obj-4',
    title: 'Community Outreach',
    description: 'Extend healthcare access to underprivileged communities around Kathmandu through volunteer medical camps.',
    icon: 'Users'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'act-1',
    title: 'Blood Donation Camp',
    category: 'Medical',
    icon: 'Droplet',
    shortDesc: 'Bi-annual blood donation drive in partnership with Nepal Red Cross Society to support blood banks in Kathmandu.',
    fullDesc: 'Our landmark event held twice every academic year. Students, teachers, and staff come together to donate blood. We ensure complete safety, professional medical screening, donor certificates, and nutritional refreshments for all donors.',
    impact: 'Over 450+ pints of blood collected annually',
    frequency: 'Bi-annual (Spring & Autumn)',
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80',
    highlights: ['Medical screening', 'Certificate of Appreciation', 'Donor Refreshments', 'Red Cross Partnership']
  },
  {
    id: 'act-2',
    title: 'Health Awareness Program',
    category: 'Wellness',
    icon: 'Stethoscope',
    shortDesc: 'Interactive seminars on seasonal epidemics, cardiovascular health, hygiene, and lifestyle disease prevention.',
    fullDesc: 'Distinguished doctors and public health specialists are invited to deliver engaging talks on diabetes, hypertension, dengue prevention, personal hygiene, and modern lifestyle balance for college students.',
    impact: '1,200+ students educated each semester',
    frequency: 'Monthly Seminars',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    highlights: ['Guest Doctor Talks', 'Free BMI Screening', 'Informative Pamphlets', 'Q&A Sessions']
  },
  {
    id: 'act-3',
    title: 'Yoga & Meditation Sessions',
    category: 'Wellness',
    icon: 'Sparkles',
    shortDesc: 'Morning mindfulness sessions, diaphragmatic breathing techniques, and stress-busting posture exercises.',
    fullDesc: 'Designed to help students manage exam stress and maintain mental clarity. Guided by certified yoga instructors in CCRC college courtyard and auditorium.',
    impact: '300+ regular student practitioners',
    frequency: 'Weekly Sessions',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80',
    highlights: ['Pranayama Practice', 'Postural Alignment', 'Exam Stress Relief', 'Guided Meditation']
  },
  {
    id: 'act-4',
    title: 'Mental Health Campaign',
    category: 'Wellness',
    icon: 'HeartHandshake',
    shortDesc: 'Breaking stigma around anxiety and depression through peer listening, counseling sessions, and art therapy.',
    fullDesc: 'Mental wellness is as important as physical health. CCRC Health Club hosts safe spaces, anonymous question boxes, peer support circles, and professional psychologist workshops.',
    impact: '800+ students engaged in mental health dialogues',
    frequency: 'Quarterly Event',
    image: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=800&q=80',
    highlights: ['Anonymous Peer Support', 'Art Therapy', 'Expert Psychologists', 'Self-Care Kits']
  },
  {
    id: 'act-5',
    title: 'First Aid Training',
    category: 'Training',
    icon: 'ShieldAlert',
    shortDesc: 'Hands-on practical workshops on CPR, wound dressing, fracture immobilization, and emergency management.',
    fullDesc: 'Certified training conducted by paramedics and Red Cross trainers. Every health club volunteer learns lifesaving CPR, choking response, and burn treatment.',
    impact: '150+ certified student first responders',
    frequency: 'Bi-monthly Workshops',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    highlights: ['CPR Dummy Practice', 'Bandaging Drills', 'Emergency Protocol', 'Official Certification']
  },
  {
    id: 'act-6',
    title: 'Community Health Service',
    category: 'Community',
    icon: 'Users',
    shortDesc: 'Free general health checkup camps, eye checkups, and medicine distribution for underprivileged local communities.',
    fullDesc: 'Volunteers travel to peri-urban areas around Kathmandu valley, assisting medical doctors with patient registration, height/weight measurement, BP checks, and free distribution of basic essential medicines.',
    impact: '2,500+ community patients served',
    frequency: 'Annual Flagship Project',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    highlights: ['Free Medicine Supply', 'Doctor Consultation', 'Eye Checkup Drive', 'Health Literacy']
  },
  {
    id: 'act-7',
    title: 'Fitness Challenge',
    category: 'Fitness',
    icon: 'Dumbbell',
    shortDesc: 'Inter-faculty steps challenge, 5k walkathon, rope-skipping contest, and sports endurance activities.',
    fullDesc: 'Encouraging an active lifestyle among CCRC students. Features friendly step-count competitions, plank challenges, and health rally walks through Koteshwor.',
    impact: '600+ active participants across +2 & Bachelors level',
    frequency: 'Semester Competition',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    highlights: ['5K Health Rally', 'Calisthenics Workshops', 'Prizes & Medals', 'Fitness Leaderboard']
  },
  {
    id: 'act-8',
    title: 'Nutrition Awareness',
    category: 'Wellness',
    icon: 'Utensils',
    shortDesc: 'Workshops on balanced diets, healthy canteen guidelines, hydration habits, and debunking food myths.',
    fullDesc: 'Educating students on fuel for academic success. We audit canteen options, promote wholesome local Nepalese traditional foods, and share easy meal prep guides for hostel students.',
    impact: 'Entire CCRC campus community',
    frequency: 'Monthly Campaign',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    highlights: ['Canteen Health Audit', 'Smoothie & Fruit Stalls', 'Hydration Reminders', 'Dietitian Consultation']
  }
];

export const STATS: StatItem[] = [
  {
    id: 'stat-1',
    label: 'Active Members',
    value: 100,
    suffix: '+',
    description: 'Enthusiastic student members at CCRC',
    iconName: 'Users'
  },
  {
    id: 'stat-2',
    label: 'Health Camps',
    value: 35,
    suffix: '+',
    description: 'Blood donation & medical checkup camps',
    iconName: 'Building2'
  },
  {
    id: 'stat-3',
    label: 'Dedicated BOD Members',
    value: 15,
    suffix: '+',
    description: 'Core Board of Directors & executive student leaders',
    iconName: 'Award'
  },
  {
    id: 'stat-4',
    label: 'Events Conducted',
    value: 50,
    suffix: '+',
    description: 'Workshops, rallies & awareness drives',
    iconName: 'Activity'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Mega Blood Donation Drive 2025',
    category: 'Blood Donation',
    imageUrl: 'https://im.ge/i/QMZe5YC',
    fallbackUrl: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1200&q=80',
    date: 'March 2025',
    location: 'CCRC Campus Premises, Koteshwor',
    description: 'Student volunteers and Red Cross officials coordinating blood collection at CCRC main quadrangle.'
  },
  {
    id: 'gal-2',
    title: 'Yoga & Stress Relief Workshop',
    category: 'Yoga',
    imageUrl: 'https://im.ge/i/QMZe0U4',
    fallbackUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    date: 'January 2025',
    location: 'CCRC Auditorium Hall',
    description: 'Students practicing pranayama and morning yoga stretches before final term examinations.'
  },
  {
    id: 'gal-3',
    title: 'Free Health Checkup Camp',
    category: 'Health Camp',
    imageUrl: 'https://im.ge/i/QMZemsp',
    fallbackUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    date: 'December 2024',
    location: 'Koteshwor Community Clinic',
    description: 'Health club members assisting doctors with patient vitals and free medicine distribution.'
  },
  {
    id: 'gal-4',
    title: 'CPR & First Aid Hands-on Session',
    category: 'Workshop',
    imageUrl: 'https://im.ge/i/QMZe9Bq',
    fallbackUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',
    date: 'November 2024',
    location: 'Biology Lab, CCRC Building B',
    description: 'Emergency response training with CPR mannequins for new club executive members.'
  },
  {
    id: 'gal-5',
    title: 'Health Rally & Walkathon',
    category: 'Community',
    imageUrl: 'https://im.ge/i/QMZewyP',
    fallbackUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    date: 'October 2024',
    location: 'Koteshwor to Tinkune Ring Road',
    description: 'Awareness walkathon raising banners for mental health and cardiovascular fitness.'
  },
  {
    id: 'gal-6',
    title: 'Nutrition & Healthy Diet Stalls',
    category: 'Workshop',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80',
    date: 'September 2024',
    location: 'CCRC Canteen Plaza',
    description: 'Student-managed nutritious smoothie bar and fruit salad sampling booth.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Aayush Adhikari',
    role: 'President',
    category: 'Executive',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    gradeOrFaculty: '+2 Science (Grade 12)',
    quote: 'Leading CCRC Health Club is about building a community where health and education go hand in hand.',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    email: 'president.healthclub@ccrc.edu.np'
  },
  {
    id: 'tm-2',
    name: 'Sujata Sharma',
    role: 'Vice President',
    category: 'Executive',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    gradeOrFaculty: '+2 Management (Grade 12)',
    quote: 'Empowering youth through health education creates ripples of positive change across Nepal.',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    email: 'vp.healthclub@ccrc.edu.np'
  },
  {
    id: 'tm-3',
    name: 'Rohan Karki',
    role: 'General Secretary',
    category: 'Executive',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    gradeOrFaculty: '+2 Science (Grade 12)',
    quote: 'Precision in organizing blood donation drives ensures every drop counts when lives are on the line.',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    email: 'secretary.healthclub@ccrc.edu.np'
  },
  {
    id: 'tm-4',
    name: 'Prashant Nepal',
    role: 'Event Coordinator',
    category: 'Coordinator',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    gradeOrFaculty: '+2 Management (Grade 11)',
    quote: 'Turning big health ideas into seamless campus events with energetic team coordination.',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'tm-5',
    name: 'Shreya Dahal',
    role: 'Mental Health Lead',
    category: 'Coordinator',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    gradeOrFaculty: '+2 Science (Grade 11)',
    quote: 'Mental health is non-negotiable. Creating judgment-free safe spaces for student dialogues.',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'tm-6',
    name: 'Dr. Ramesh Thapa',
    role: 'Medical Advisor',
    category: 'Advisor',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    gradeOrFaculty: 'Senior Consultant & CCRC Faculty',
    quote: 'Guiding student healthcare initiatives with professional medical protocols and ethics.',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com'
  }
];

export const NOTICES: Notice[] = [
  {
    id: 'not-1',
    title: 'Upcoming Mega Blood Donation Camp 2026',
    date: 'August 20, 2026',
    category: 'Upcoming Event',
    content: 'Join us at the CCRC Main Quadrangle from 9:00 AM to 3:00 PM. Donors receive health checkup, certificate & refreshments.',
    badge: 'Registration Open'
  },
  {
    id: 'not-2',
    title: 'Mental Health & Mindfulness Workshop',
    date: 'August 28, 2026',
    category: 'Announcement',
    content: 'Special session by guest clinical psychologists in CCRC Hall A. Free entry for all +2 and Bachelors students.'
  },
  {
    id: 'not-3',
    title: 'Hydration & Exam Prep Health Tip',
    date: 'August 04, 2026',
    category: 'Health Tip',
    content: 'Drink at least 2.5L of water daily and take 10-minute movement breaks every hour during exam study sessions!'
  }
];
