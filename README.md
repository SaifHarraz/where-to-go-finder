# WhereToGo - Local Business Directory

A modern, full-featured listing directory application built with React, TypeScript, and Tailwind CSS. Discover and connect with great local businesses including restaurants, hotels, shops, and more.

## 🚀 Features

- **Advanced Search & Filters**: Search by keyword, category, price range, and distance
- **Interactive Map Integration**: Ready for Leaflet/Mapbox integration
- **Responsive Design**: Mobile-first, pixel-perfect UI matching ListyGo design system
- **Category Browsing**: Browse listings by 8+ categories
- **Listing Detail Pages**: Comprehensive information including hours, amenities, contact details
- **Dashboard**: Admin interface for managing listings, users, and categories
- **Favorites System**: Save favorite listings (client-side)
- **Rating & Reviews**: Display ratings and review counts
- **Contact Form**: Built with react-hook-form and validation

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Zustand for filters
- **Data Fetching**: React Query (TanStack Query)
- **Forms**: react-hook-form + zod validation
- **Routing**: React Router v6
- **Icons**: lucide-react
- **Maps**: Leaflet (react-leaflet)
- **Animations**: Framer Motion

## 📦 Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd wheretogo

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Map Configuration (optional - for future map integration)
VITE_MAPBOX_TOKEN=your_mapbox_token_here
# OR
VITE_LEAFLET_TILE_LAYER=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

# API Configuration (for future backend)
VITE_API_URL=http://localhost:3000/api
```

### Mock Data

The application currently uses mock data located in `src/data/mockData.ts`. This includes:
- 8 sample listings across various categories
- 2 sample users (admin and regular user)
- 8 categories

To modify or add more mock data, edit this file.

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Main navigation header
│   │   └── Footer.tsx          # Footer with links
│   ├── ui/                     # shadcn/ui components
│   ├── CategoryCard.tsx        # Category display card
│   ├── ListingCard.tsx         # Listing display card
│   └── SearchFilters.tsx       # Filter panel component
├── data/
│   └── mockData.ts            # Mock listings, categories, users
├── pages/
│   ├── Home.tsx               # Landing page
│   ├── Listings.tsx           # Listings grid with filters
│   ├── ListingDetail.tsx      # Individual listing page
│   ├── Contact.tsx            # Contact form
│   ├── Dashboard.tsx          # Admin dashboard
│   └── NotFound.tsx           # 404 page
├── store/
│   └── useFilterStore.ts      # Zustand store for filters
├── types/
│   └── listing.ts             # TypeScript interfaces
├── utils/
│   └── distance.ts            # Haversine distance calculation
├── App.tsx                    # Main app component with routes
└── index.css                  # Global styles & design system
```

## 🎨 Design System

The application uses a comprehensive design system defined in `src/index.css`:

- **Primary Color**: Coral Red (#EF4444)
- **Accent Color**: Orange (#F97316)
- **Success**: Green (#10B981)
- **Typography**: Clean, modern sans-serif
- **Components**: All using semantic tokens from the design system

## 🗺️ Map Integration

The app is ready for map integration. To enable maps:

1. **Using Mapbox**:
   - Sign up at [mapbox.com](https://mapbox.com)
   - Get your public access token
   - Add token to `.env` as `VITE_MAPBOX_TOKEN`
   - Uncomment map component in `src/pages/Listings.tsx`

2. **Using Leaflet (OpenStreetMap)**:
   - Already installed via react-leaflet
   - Import CSS: `import 'leaflet/dist/leaflet.css'`
   - Use the MapContainer component from react-leaflet

## 🔌 Backend Integration

Currently using mock data. To integrate with a real backend:

1. **Mock API Server** (Quick Start):
   ```bash
   npm install -g json-server
   json-server --watch db.json --port 3000
   ```

2. **Real Backend**:
   - Update API endpoints in `src/services/` (create API service files)
   - Replace mock data imports with React Query hooks
   - Update types if needed

3. **Suggested Backend Structure**:
   - Authentication (JWT or session-based)
   - REST or GraphQL API
   - Database (PostgreSQL, MongoDB, etc.)
   - File storage for listing images

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🧪 Testing

To add tests:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Example test locations:
- `src/utils/distance.test.ts` - Distance calculation tests
- `src/components/ListingCard.test.tsx` - Component tests

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🎯 Future Enhancements

- [ ] User authentication and profiles
- [ ] Real-time map with markers and clustering
- [ ] Reviews and ratings system
- [ ] Booking/reservation system
- [ ] Image upload for listings
- [ ] Advanced search with geolocation
- [ ] Email notifications
- [ ] Social sharing
- [ ] Analytics dashboard
- [ ] Payment integration (Stripe)

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For support, email hello@wheretogo.com or open an issue on GitHub.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
