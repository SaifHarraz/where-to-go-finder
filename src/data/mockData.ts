import { Listing, Category, User } from "@/types/listing";

export const categories: Category[] = [
  { id: "1", name: "Restaurant", slug: "restaurant", icon: "UtensilsCrossed", count: 10 },
  { id: "2", name: "Shopping", slug: "shopping", icon: "ShoppingBag", count: 8 },
  { id: "3", name: "Hotel", slug: "hotel", icon: "Hotel", count: 6 },
  { id: "4", name: "Museum", slug: "museum", icon: "Building2", count: 4 },
  { id: "5", name: "GYM", slug: "gym", icon: "Dumbbell", count: 5 },
  { id: "6", name: "Cafe", slug: "cafe", icon: "Coffee", count: 7 },
  { id: "7", name: "Doctor", slug: "doctor", icon: "Stethoscope", count: 9 },
  { id: "8", name: "Bakery", slug: "bakery", icon: "Cake", count: 4 },
];

export const listings: Listing[] = [
  {
    id: "1",
    title: "Bella Italia Restaurant",
    slug: "bella-italia-restaurant",
    description: "Authentic Italian cuisine in the heart of the city. Experience traditional recipes passed down through generations.",
    category: "Restaurant",
    subcategory: "Italian",
    location: {
      lat: 40.7128,
      lng: -74.0060,
      address: "125 Main Street",
      city: "New York",
      state: "NY"
    },
    price: 35,
    priceLabel: "$$",
    rating: 4.8,
    reviewCount: 127,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
    ],
    phone: "+1 (212) 555-0123",
    email: "info@bellaitalia.com",
    website: "https://bellaitalia.com",
    hours: {
      "Monday-Friday": "11:00 AM - 10:00 PM",
      "Saturday-Sunday": "12:00 PM - 11:00 PM"
    },
    amenities: ["WiFi", "Outdoor Seating", "Reservations", "Parking"],
    isOpen: true,
    isFeatured: true,
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    title: "Urban Fitness Center",
    slug: "urban-fitness-center",
    description: "State-of-the-art gym facility with personal trainers and modern equipment.",
    category: "GYM",
    location: {
      lat: 40.7489,
      lng: -73.9680,
      address: "456 Park Avenue",
      city: "New York",
      state: "NY"
    },
    price: 50,
    priceLabel: "$$",
    rating: 4.6,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    phone: "+1 (212) 555-0456",
    hours: {
      "Monday-Friday": "5:00 AM - 11:00 PM",
      "Saturday-Sunday": "7:00 AM - 9:00 PM"
    },
    amenities: ["Locker Room", "Personal Training", "Group Classes", "Sauna"],
    isOpen: true,
    isFeatured: true,
    createdAt: "2024-01-20"
  },
  {
    id: "3",
    title: "The Grand Hotel",
    slug: "the-grand-hotel",
    description: "Luxury accommodation with stunning city views and premium amenities.",
    category: "Hotel",
    location: {
      lat: 40.7614,
      lng: -73.9776,
      address: "789 Central Park West",
      city: "New York",
      state: "NY"
    },
    price: 250,
    priceLabel: "$$$",
    rating: 4.9,
    reviewCount: 203,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    phone: "+1 (212) 555-0789",
    website: "https://thegrandhotel.com",
    hours: {
      "Check-in": "3:00 PM",
      "Check-out": "11:00 AM"
    },
    amenities: ["Pool", "Spa", "Restaurant", "Concierge", "Valet Parking"],
    isOpen: true,
    isFeatured: true,
    createdAt: "2024-01-10"
  },
  {
    id: "4",
    title: "City Art Museum",
    slug: "city-art-museum",
    description: "Explore contemporary and classical art from around the world.",
    category: "Museum",
    location: {
      lat: 40.7794,
      lng: -73.9632,
      address: "321 Museum Mile",
      city: "New York",
      state: "NY"
    },
    price: 25,
    priceLabel: "$",
    rating: 4.7,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=800&q=80",
    phone: "+1 (212) 555-0321",
    website: "https://cityartmuseum.com",
    hours: {
      "Tuesday-Sunday": "10:00 AM - 5:30 PM",
      "Monday": "Closed"
    },
    amenities: ["Gift Shop", "Cafe", "Guided Tours", "Wheelchair Access"],
    isOpen: true,
    isFeatured: false,
    createdAt: "2024-01-25"
  },
  {
    id: "5",
    title: "Sunrise Cafe",
    slug: "sunrise-cafe",
    description: "Cozy neighborhood cafe serving artisan coffee and fresh pastries.",
    category: "Cafe",
    location: {
      lat: 40.7282,
      lng: -73.9942,
      address: "147 Bedford Ave",
      city: "Brooklyn",
      state: "NY"
    },
    price: 12,
    priceLabel: "$",
    rating: 4.5,
    reviewCount: 92,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    phone: "+1 (718) 555-0147",
    hours: {
      "Daily": "7:00 AM - 6:00 PM"
    },
    amenities: ["WiFi", "Outdoor Seating", "Vegan Options"],
    isOpen: true,
    isFeatured: false,
    createdAt: "2024-02-01"
  },
  {
    id: "6",
    title: "Dr. Sarah Johnson",
    slug: "dr-sarah-johnson",
    description: "Board-certified family physician with 15 years of experience.",
    category: "Doctor",
    subcategory: "Family Medicine",
    location: {
      lat: 40.7580,
      lng: -73.9855,
      address: "555 Medical Plaza",
      city: "New York",
      state: "NY"
    },
    price: 150,
    priceLabel: "$$",
    rating: 4.9,
    reviewCount: 178,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    phone: "+1 (212) 555-0555",
    hours: {
      "Monday-Friday": "9:00 AM - 5:00 PM",
      "Saturday": "10:00 AM - 2:00 PM"
    },
    amenities: ["Insurance Accepted", "Online Booking", "Telemedicine"],
    isOpen: true,
    isFeatured: true,
    createdAt: "2024-01-05"
  },
  {
    id: "7",
    title: "Style Boutique",
    slug: "style-boutique",
    description: "Trendy fashion boutique featuring local designers and unique pieces.",
    category: "Shopping",
    location: {
      lat: 40.7218,
      lng: -74.0015,
      address: "88 Spring Street",
      city: "New York",
      state: "NY"
    },
    price: 80,
    priceLabel: "$$",
    rating: 4.4,
    reviewCount: 67,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    phone: "+1 (212) 555-0088",
    hours: {
      "Monday-Saturday": "11:00 AM - 8:00 PM",
      "Sunday": "12:00 PM - 6:00 PM"
    },
    amenities: ["Personal Styling", "Gift Cards", "Alterations"],
    isOpen: true,
    isFeatured: false,
    createdAt: "2024-02-05"
  },
  {
    id: "8",
    title: "Fresh Bakehouse",
    slug: "fresh-bakehouse",
    description: "Artisan bakery with fresh bread, pastries, and custom cakes daily.",
    category: "Bakery",
    location: {
      lat: 40.7306,
      lng: -73.9352,
      address: "234 Queens Blvd",
      city: "Queens",
      state: "NY"
    },
    price: 8,
    priceLabel: "$",
    rating: 4.8,
    reviewCount: 134,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    phone: "+1 (718) 555-0234",
    hours: {
      "Daily": "6:00 AM - 7:00 PM"
    },
    amenities: ["Custom Orders", "Gluten-Free Options", "Wedding Cakes"],
    isOpen: true,
    isFeatured: true,
    createdAt: "2024-01-28"
  }
];

export const users: User[] = [
  {
    id: "1",
    name: "John Admin",
    email: "admin@wheretogo.com",
    role: "admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    id: "2",
    name: "Jane User",
    email: "jane@example.com",
    role: "user",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
  }
];
