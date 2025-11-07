import { Listing } from '@/types/listing';

export const mapDatabaseListingToListing = (dbListing: any): Listing => {
  return {
    id: dbListing.id,
    title: dbListing.title,
    slug: dbListing.slug,
    description: dbListing.description,
    category: dbListing.category,
    subcategory: dbListing.subcategory,
    location: {
      lat: dbListing.lat,
      lng: dbListing.lng,
      address: dbListing.address,
      city: dbListing.city,
      state: dbListing.state,
    },
    price: dbListing.price,
    priceLabel: dbListing.price_label,
    rating: dbListing.rating,
    reviewCount: dbListing.review_count,
    image: dbListing.image,
    gallery: dbListing.gallery,
    phone: dbListing.phone,
    email: dbListing.email,
    website: dbListing.website,
    hours: dbListing.hours as any,
    amenities: dbListing.amenities,
    isOpen: dbListing.is_open,
    isFeatured: dbListing.is_featured,
    status: dbListing.status,
    rejectionReason: dbListing.rejection_reason,
    createdAt: dbListing.created_at,
  };
};
