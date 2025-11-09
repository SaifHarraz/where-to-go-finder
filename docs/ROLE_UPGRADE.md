# Role-Based Dashboard & Avatar Menu Implementation

## Overview
This document describes the implementation of role-based dashboards, avatar menu navigation, and standalone sign-out button added to the WhereToGo application.

## Changes Made

### 1. Avatar Component (`src/components/UserAvatar.tsx`)
- **New component**: Displays user avatar with fallback to initials
- **Dropdown menu** includes:
  - Large profile photo at top
  - User's full name and email
  - Role badge (Admin/Owner/User)
  - Navigation links: Dashboard (role-aware), Profile, Favorites, Sign Out
- **Keyboard accessible** with proper ARIA attributes
- **Role-aware Dashboard routing**:
  - Admin → `/dashboard`
  - Owner → `/owner/my-listings`
  - User → `/profile`

### 2. Standalone Sign Out Button (`src/components/SignOutButton.tsx`)
- **New component**: Persistent sign-out button in navbar
- Located at far-right end of navbar for logged-in users
- Icon + text on desktop (lg screens), icon-only on smaller screens
- Keyboard focusable with `aria-label`
- Uses same sign-out handler as dropdown menu

### 3. Profile Page (`src/pages/Profile.tsx`)
- **New page** for regular users
- Displays user information with avatar
- **Tabs** for:
  - **Favorites**: Grid view of saved listings with actions (view, unfavorite)
  - **History**: List view of visited places with timestamps
- Fully responsive design

### 4. Favorites Page (`src/pages/Favorites.tsx`)
- **New page** for managing favorite listings
- Grid layout of favorite places
- Quick actions: View listing, Remove from favorites
- Empty state with call-to-action

### 5. Header Updates (`src/components/layout/Header.tsx`)
- Replaced email dropdown with `UserAvatar` component
- Added `SignOutButton` at end of navbar
- Updated mobile menu to show avatar info
- Added RTL support with `rtl:` Tailwind directives

### 6. Routing Updates (`src/App.tsx`)
- Added protected routes for `/profile` and `/favorites`
- Dashboard route restricted to admins only
- Owner routes remain at `/owner/*`
- All routes properly guarded with `ProtectedRoute`

### 7. i18n Updates (`src/lib/i18n.ts`)
- Added translations for Profile, Favorites, and view actions
- Both English and Arabic translations included
- Default language set to Arabic (RTL)

### 8. HTML Direction (`index.html`)
- Set `lang="ar"` and `dir="rtl"` by default
- Ensures proper RTL rendering on initial load

### 9. Type Updates (`src/types/listing.ts`)
- Updated `User` type to include `'owner'` role
- Added optional `avatar` field support

## Testing the Implementation

### Testing Avatar Menu
1. **As logged-in user**:
   - Click avatar in navbar
   - Verify dropdown shows profile photo, name, email, role badge
   - Test keyboard navigation (Tab, Enter, Esc)
   - Click each menu item to verify navigation

2. **Avatar display**:
   - Users with avatar URL: background image shown
   - Users without avatar: initials displayed with primary color
   - Verify focus ring appears on Tab key

### Testing Sign Out Button
1. **Desktop view**: Button shows icon + "Sign Out" text
2. **Smaller screens**: Button shows icon only
3. **Keyboard access**: Tab to button, press Enter
4. **Sign out**: Redirects to `/signin` and clears session

### Testing Role-Based Routing

#### Admin User
1. Login as admin
2. Click "Dashboard" in avatar menu
3. Should navigate to `/dashboard` (Admin Dashboard)
4. Verify full CRUD access to Users, Listings, Categories

#### Owner User
1. Login as owner
2. Click "Dashboard" in avatar menu
3. Should navigate to `/owner/my-listings`
4. Verify "Add New Listing" button in navbar
5. Test creating/editing/deleting own listings
6. Verify cannot edit other users' listings

#### Regular User
1. Login as regular user
2. Click "Dashboard" in avatar menu
3. Should navigate to `/profile`
4. Verify Favorites and History tabs work
5. Test unfavoriting and removing from history

### Testing i18n
1. **Initial load**: App should render in Arabic (RTL)
2. **Language switch**: Click language switcher
3. **Toggle to English**: Layout switches to LTR
4. **Persistence**: Reload page, selected language should persist
5. **RTL layout**: Verify navbar, buttons, and content mirror correctly

### Testing Protected Routes
1. **Not logged in**:
   - Try accessing `/profile` → Redirects to `/signin`
   - Try accessing `/dashboard` → Redirects to `/signin`
   - Try accessing `/owner/my-listings` → Redirects to `/signin`

2. **Logged in as User**:
   - Can access `/profile` ✓
   - Cannot access `/dashboard` → Redirects to `/`
   - Cannot access `/owner/*` → Redirects to `/`

3. **Logged in as Owner**:
   - Can access `/profile` ✓
   - Can access `/owner/*` ✓
   - Cannot access `/dashboard` → Redirects to `/`

4. **Logged in as Admin**:
   - Can access all routes ✓

## Files Modified
- `src/components/UserAvatar.tsx` (new)
- `src/components/SignOutButton.tsx` (new)
- `src/components/layout/Header.tsx` (updated)
- `src/pages/Profile.tsx` (new)
- `src/pages/Favorites.tsx` (new)
- `src/App.tsx` (updated)
- `src/lib/i18n.ts` (updated)
- `src/types/listing.ts` (updated)
- `index.html` (updated)

## Design Decisions

### Why Separate Sign Out Button?
- Provides quick access to sign out without opening dropdown
- Meets accessibility requirement for persistent logout control
- Common pattern in modern applications

### Why Role-Aware Dashboard Links?
- Improves UX by directing users to their relevant dashboard
- Reduces confusion about where to manage their content
- Maintains clear separation of admin/owner/user capabilities

### Why Default to Arabic?
- Primary user base preference
- Proper RTL support from initial render
- No flash of incorrect direction

## Admin Workflow & Real-Time Features

### Admin Dashboard Enhancements (`src/pages/Dashboard.tsx`)
- **Listing Status Management**:
  - Admins can approve or reject pending listings
  - Status badges show: Pending (yellow), Active (green), Rejected (red)
  - Reject action includes optional rejection reason
  - Actions update listing status in real-time

### Owner Listing Management (`src/pages/owner/MyListings.tsx`)
- **Status Badges**: Visual indicators for listing status
- **Real-Time Notifications**: 
  - Toast notifications when listing status changes
  - Notifications appear when admin approves/rejects listings
  - Automatic page refresh on status updates
- **Status-Based UI**:
  - Pending: "Waiting for approval" message
  - Active: Normal display with edit/delete actions
  - Rejected: Shows rejection reason with resubmit option

### Public Listings Filtering
- **Home Page (`src/pages/Home.tsx`)**:
  - Only displays active listings
  - Filters out pending and rejected listings
  - Real-time updates when listings become active

- **Listings Page (`src/pages/Listings.tsx`)**:
  - Only shows active listings
  - Automatic refresh when new listings are approved
  - Real-time subscription to listing changes

### Real-Time Implementation
- **Database Configuration**:
  - Enabled `REPLICA IDENTITY FULL` on listings table
  - Added listings table to `supabase_realtime` publication
  - Supports real-time status change notifications

- **Listing Mapper (`src/utils/listingMapper.ts`)**:
  - Maps database snake_case fields to camelCase TypeScript types
  - Ensures consistent data format across application
  - Handles all listing properties including status

### Testing Admin Workflow

#### As Admin
1. Navigate to Admin Dashboard
2. Review pending listings
3. Click "Approve" or "Reject" on a listing
4. For rejection, optionally add a reason
5. Verify status badge updates immediately
6. Check owner receives real-time notification

#### As Owner
1. Create a new listing
2. Verify status shows as "Pending"
3. Wait for admin to approve/reject
4. Receive toast notification when status changes
5. If rejected, view rejection reason
6. Edit and resubmit if needed

#### Public Users
1. Browse home page and listings page
2. Verify only active listings are visible
3. Confirm pending/rejected listings are hidden
4. Test real-time updates when new listings are approved

### Translations Added
- **English (`src/locales/en/translation.json`)**:
  - `listing.status.notification.approved`
  - `listing.status.notification.rejected`
  - `listing.status.notification.changed`

- **Arabic (`src/locales/ar/translation.json`)**:
  - Status notification messages in Arabic
  - RTL-compatible notification display

## Known Limitations
- Avatar URLs use Dicebear placeholders
- Role changes require re-login to take effect

## Future Enhancements
- Email notifications for status changes
- Bulk approval/rejection of listings
- Advanced filtering for admin dashboard
- Avatar upload functionality
- Advanced profile editing
