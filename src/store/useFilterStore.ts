import { create } from 'zustand';
import { FilterState } from '@/types/listing';

interface FilterStore extends FilterState {
  setSearch: (search: string) => void;
  setCategories: (categories: string[]) => void;
  setPriceRange: (range: [number, number]) => void;
  setDistance: (distance: number) => void;
  setSortBy: (sortBy: string) => void;
  setLocation: (location: FilterState['location']) => void;
  resetFilters: () => void;
}

const defaultFilters: FilterState = {
  search: '',
  categories: [],
  priceRange: [0, 500],
  distance: 50,
  sortBy: 'nearest',
  location: undefined,
};

export const useFilterStore = create<FilterStore>((set) => ({
  ...defaultFilters,
  setSearch: (search) => set({ search }),
  setCategories: (categories) => set({ categories }),
  setPriceRange: (priceRange) => set({ priceRange }),
  setDistance: (distance) => set({ distance }),
  setSortBy: (sortBy) => set({ sortBy }),
  setLocation: (location) => set({ location }),
  resetFilters: () => set(defaultFilters),
}));
