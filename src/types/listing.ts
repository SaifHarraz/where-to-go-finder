export interface Location {
  lat: number;
  lng: number;
  address: string;
  city: string;
  state: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
}

export interface Listing {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  subcategory?: string;
  location: Location;
  price: number;
  priceLabel?: string;
  rating: number;
  reviewCount: number;
  image: string;
  gallery?: string[];
  phone?: string;
  email?: string;
  website?: string;
  hours?: {
    [key: string]: string;
  };
  amenities?: string[];
  isOpen?: boolean;
  isFeatured?: boolean;
  createdAt: string;
}

export interface FilterState {
  search: string;
  categories: string[];
  priceRange: [number, number];
  distance: number;
  sortBy: string;
  location?: Location;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
}
