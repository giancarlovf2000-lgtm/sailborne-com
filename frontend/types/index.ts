export interface Vessel {
  id: string
  created_at: string
  name: string
  type: string
  destination: 'fajardo' | 'parguera' | 'miami' | 'greece'
  length_ft: number | null
  capacity: number | null
  cabins: number | null
  price_from: number | null
  price_unit: 'day' | 'week' | 'event' | null
  price_contact: boolean
  image_url: string | null
  featured: boolean
  display_order: number
}

export interface BookingPayload {
  first_name: string
  last_name: string
  email: string
  phone?: string
  inquiry_type?: string
  location?: string
  vessel?: string
  duration?: string
  preferred_date?: string
  guests?: string
  pr_destinations?: string[]
  addons?: string[]
  message?: string
}
