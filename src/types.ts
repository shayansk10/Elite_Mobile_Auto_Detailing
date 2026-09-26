export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  category: 'interior' | 'exterior' | 'paint' | 'coatings';
  description: string;
  benefits: string[];
  duration: string;
  startingPrice: string; // Clearly marked as "Starting at $___" or "Get a Quote"
  icon: string;
  image?: string;
  popular?: boolean;
}

export interface BeforeAfterComparison {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string;
  afterImage: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  initials?: string;
  verified: boolean;
  rating: number; // 1 to 5
  reviewText: string;
  vehicleModel?: string;
  serviceType?: string;
  date?: string;
  source?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  vehicle_make: string;
  vehicle_model: string;
  service_needed: string;
  service_address: string;
  zip_code: string;
  preferred_date: string;
  preferred_time: string;
  notes?: string;
}
