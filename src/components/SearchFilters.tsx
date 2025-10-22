import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useFilterStore } from "@/store/useFilterStore";
import { categories } from "@/data/mockData";

export function SearchFilters() {
  const [open, setOpen] = useState(false);
  const {
    search,
    categories: selectedCategories,
    priceRange,
    distance,
    setSearch,
    setCategories,
    setPriceRange,
    setDistance,
    resetFilters,
  } = useFilterStore();

  const handleCategoryToggle = (categorySlug: string) => {
    if (selectedCategories.includes(categorySlug)) {
      setCategories(selectedCategories.filter((c) => c !== categorySlug));
    } else {
      setCategories([...selectedCategories, categorySlug]);
    }
  };

  const activeFiltersCount =
    selectedCategories.length +
    (priceRange[0] !== 0 || priceRange[1] !== 500 ? 1 : 0) +
    (distance !== 50 ? 1 : 0);

  return (
    <div className="flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search places..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="relative">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-primary-foreground">
                {activeFiltersCount}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
            <SheetDescription>
              Refine your search with the options below
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {/* Categories */}
            <div>
              <Label className="mb-3 block text-base">Categories</Label>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.slug}
                      checked={selectedCategories.includes(category.slug)}
                      onCheckedChange={() => handleCategoryToggle(category.slug)}
                    />
                    <label
                      htmlFor={category.slug}
                      className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category.name} ({category.count})
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <Label className="mb-3 block text-base">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </Label>
              <Slider
                min={0}
                max={500}
                step={10}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as [number, number])}
                className="mt-2"
              />
            </div>

            {/* Distance */}
            <div>
              <Label className="mb-3 block text-base">
                Distance: {distance} km
              </Label>
              <Slider
                min={1}
                max={100}
                step={1}
                value={[distance]}
                onValueChange={(value) => setDistance(value[0])}
                className="mt-2"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  resetFilters();
                  setOpen(false);
                }}
              >
                <X className="mr-2 h-4 w-4" />
                Clear
              </Button>
              <Button className="flex-1" onClick={() => setOpen(false)}>
                Apply Filters
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
