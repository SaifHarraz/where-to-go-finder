import { Link } from "react-router-dom";
import { Category } from "@/types/listing";
import * as Icons from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = (Icons[category.icon as keyof typeof Icons] as LucideIcon) || Icons.MapPin;

  return (
    <Link to={`/listings?category=${category.slug}`}>
      <Card className="group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary">
            <Icon className="h-8 w-8 text-primary transition-colors group-hover:text-primary-foreground" />
          </div>
          <h3 className="text-lg font-semibold">{category.name}</h3>
          <p className="text-sm text-muted-foreground">({category.count})</p>
        </CardContent>
      </Card>
    </Link>
  );
}
