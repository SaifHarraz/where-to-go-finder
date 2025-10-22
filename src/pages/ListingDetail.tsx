import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { listings } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Star,
  Heart,
  Share2,
  Navigation,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";

export default function ListingDetail() {
  const { slug } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  
  const listing = listings.find((l) => l.slug === slug);

  if (!listing) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold">Listing Not Found</h1>
            <p className="mb-8 text-muted-foreground">
              The listing you're looking for doesn't exist.
            </p>
            <Link to="/listings">
              <Button>Browse Listings</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1">
        {/* Back Button */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-4">
            <Link to="/listings">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Listings
              </Button>
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={listing.image}
                alt={listing.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {listing.gallery?.slice(0, 4).map((image, idx) => (
                <div key={idx} className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`${listing.title} ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-6">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline">{listing.category}</Badge>
                      {listing.isOpen && (
                        <Badge className="bg-success">Open Now</Badge>
                      )}
                      {listing.isFeatured && (
                        <Badge className="bg-accent">Featured</Badge>
                      )}
                    </div>
                    <h1 className="mb-2 text-3xl font-bold md:text-4xl">
                      {listing.title}
                    </h1>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-semibold text-foreground">
                          {listing.rating}
                        </span>
                        <span>({listing.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{listing.location.city}, {listing.location.state}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="mb-2 text-3xl font-bold text-primary">
                      ${listing.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {listing.priceLabel}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsFavorite(!isFavorite)}
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        isFavorite ? "fill-primary text-primary" : ""
                      }`}
                    />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button className="flex-1">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </div>

              {/* Description */}
              <Card className="mb-6">
                <CardContent className="pt-6">
                  <h2 className="mb-4 text-xl font-semibold">About</h2>
                  <p className="text-muted-foreground">{listing.description}</p>
                </CardContent>
              </Card>

              {/* Amenities */}
              {listing.amenities && listing.amenities.length > 0 && (
                <Card className="mb-6">
                  <CardContent className="pt-6">
                    <h2 className="mb-4 text-xl font-semibold">Amenities</h2>
                    <div className="flex flex-wrap gap-2">
                      {listing.amenities.map((amenity, idx) => (
                        <Badge key={idx} variant="secondary">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Hours */}
              {listing.hours && (
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                      <Clock className="h-5 w-5" />
                      Hours
                    </h2>
                    <div className="space-y-2">
                      {Object.entries(listing.hours).map(([day, time]) => (
                        <div
                          key={day}
                          className="flex justify-between text-sm"
                        >
                          <span className="font-medium">{day}</span>
                          <span className="text-muted-foreground">{time}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-20">
                <CardContent className="pt-6">
                  <h2 className="mb-4 text-xl font-semibold">Contact Info</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">
                          {listing.location.address}
                          <br />
                          {listing.location.city}, {listing.location.state}
                        </p>
                      </div>
                    </div>

                    {listing.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Phone</p>
                          <a
                            href={`tel:${listing.phone}`}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {listing.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {listing.email && (
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Email</p>
                          <a
                            href={`mailto:${listing.email}`}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {listing.email}
                          </a>
                        </div>
                      </div>
                    )}

                    {listing.website && (
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-primary" />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Website</p>
                          <a
                            href={listing.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            Visit Website
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 space-y-2">
                    {listing.phone && (
                      <Button className="w-full" size="lg">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </Button>
                    )}
                    <Button variant="outline" className="w-full" size="lg">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
