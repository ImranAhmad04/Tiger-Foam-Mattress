export interface ProductItem {
  id: string;
  name: string;
  category: 'foam' | 'mattress';
  tagline: string;
  description: string;
  specs: { label: string; value: string }[];
  applications: string[];
  image: string;
  whatsappMessage: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  date: string;
  projectType: string;
}

export interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  actionText: string;
}
