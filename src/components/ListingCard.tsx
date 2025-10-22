import { Link } from "react-router-dom";
import { Listing } from "@/types/listing";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ListingCardProps {
  listing: Listing;
  userLocation?: { lat: number; lng: number };
}

export function ListingCard({ listing, userLocation }: ListingCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/listing/${listing.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
            loading="lazy"
          />
          {listing.isOpen && (
            <Badge className="absolute left-3 top-3 bg-success">
              Open Now
            </Badge>
          )}
          {listing.isFeatured && (
            <Badge className="absolute right-3 top-3 bg-accent">
              Featured
            </Badge>
          )}
          <Button
            size="icon"
            variant="secondary"
            className="absolute bottom-3 right-3 h-9 w-9 rounded-full opacity-0 transition-opacity group-hover:opacity-100"
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart
              className={`h-4 w-4 ${isFavorite ? "fill-primary text-primary" : ""}`}
            />
          </Button>
        </div>
      </Link>

      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between">
          <div className="flex-1">
            <Link to={`/listing/${listing.slug}`}>
              <h3 className="line-clamp-1 text-lg font-semibold transition-colors hover:text-primary">
                {listing.title}
              </h3>
            </Link>
            <div className="mt-1 flex items-center space-x-1 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span className="line-clamp-1">{listing.location.city}, {listing.location.state}</span>
            </div>
          </div>
          <Badge variant="outline">{listing.category}</Badge>
        </div>

        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {listing.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-semibold">{listing.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({listing.reviewCount})
            </span>
          </div>
          <div className="text-lg font-bold text-primary">
            ${listing.price}
          </div>
        </div>

        {listing.phone && (
          <div className="mt-3 flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-3 w-3" />
            <span>{listing.phone}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
