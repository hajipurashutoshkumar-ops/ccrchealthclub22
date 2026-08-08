export interface Activity {
  id: string;
  title: string;
  category: 'Community' | 'Wellness' | 'Medical' | 'Fitness' | 'Training';
  icon: string;
  shortDesc: string;
  fullDesc: string;
  impact: string;
  frequency: string;
  image: string;
  highlights: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'Executive' | 'Coordinator' | 'Advisor';
  photo: string;
  gradeOrFaculty?: string;
  quote?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  email?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Blood Donation' | 'Yoga' | 'Health Camp' | 'Workshop' | 'Community';
  imageUrl: string;
  fallbackUrl: string;
  date: string;
  location: string;
  description: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface ClubObjective {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Announcement' | 'Upcoming Event' | 'Health Tip';
  content: string;
  badge?: string;
}
