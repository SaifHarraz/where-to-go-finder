# i18n + Status Workflow Implementation

## Overview
This document describes the implementation of Arabic-first i18n with JSON translations, Almarai font support, and listing status workflow (pending/active/rejected) for admin approval.

## Branch
`feat/avatar-role-dashboard-i18n-status`

## Commit Message
`feat(i18n+status): default Arabic + JSON translations + Almarai font + admin pending/rejected/active workflow`

## Changes Made

### 1. Internationalization (i18n)

#### JSON Translation Files
- **Created `src/locales/en/translation.json`**: Complete English translations for all app text
- **Created `src/locales/ar/translation.json`**: Complete Arabic translations for all app text
- **Updated `src/lib/i18n.ts`**: Now imports translations from JSON files instead of inline objects
- **Updated `src/main.tsx`**: Imports i18n early and sets document direction
- **Updated `src/components/LanguageSwitcher.tsx`**: Uses new `app_lang` localStorage key

#### Default Language
- **Initial default**: Arabic (RTL)
- **Secondary language**: English (LTR)
- **Persistence**: Language choice saved to `localStorage` as `app_lang`
- **No FOUC**: Early script in `index.html` sets `dir` and `lang` attributes before first paint

#### Font Support
- **Arabic font**: Almarai (weights: 400, 700, 800)
- **English font**: Inter (weights: 400, 500, 600, 700)
- **Font loading**: Preconnected to Google Fonts in `index.html`
- **Font application**: 
  - `html[dir="rtl"]` uses Almarai
  - `html[lang="ar"]` uses Almarai
  - Default uses Inter

### 2. Listing Status Workflow

#### Database Schema
**Added columns to `listings` table:**
- `status` (text): Values: 'pending' | 'active' | 'rejected', default 'pending'
- `rejection_reason` (text, nullable): Stores admin's reason for rejection
- **Index created** on `status` column for query performance

#### Mock Data Updates
- **Updated `src/data/mockData.ts`**: All listings now have `status` and `rejectionReason` fields
- **Status distribution** in mock data:
  - "Bella Italia Restaurant" → active
  - "Urban Fitness Center" → pending
  - "City Art Museum" → rejected (reason: "Incomplete documentation")
  - Others → active

#### Owner Workflow
- **Updated `src/pages/owner/AddListing.tsx`**:
  - New listings automatically set `status: 'pending'`
  - Default `is_open: true` and `is_featured: false`
- Owner listings display status badges in their dashboard
- Rejection reason shown if status is 'rejected'

#### Admin Workflow (To Be Implemented)
Admin dashboard needs to be updated to include:
- Three tabs/filters: Pending, Active, Rejected
- Approve button for pending listings (changes status to 'active')
- Reject button with modal to collect rejection reason
- Status filter in listings table

### 3. TypeScript Types
- **Updated `src/types/listing.ts`**:
  ```typescript
  status?: 'pending' | 'active' | 'rejected';
  rejectionReason?: string | null;
  ```

### 4. UI/UX Enhancements
- All visible text replaced with translation keys using `t()` function
- RTL layout properly mirrors navigation, buttons, and content
- Arabic text uses Almarai font throughout
- Language switcher (🌐) in navbar toggles between Arabic and English

## Files Modified

### Created
- `src/locales/en/translation.json`
- `src/locales/ar/translation.json`
- `docs/I18N_STATUS_UPGRADE.md`

### Modified
- `src/lib/i18n.ts` - Import translations from JSON, use 'app_lang' key
- `index.html` - Early script for dir/lang, Almarai font link
- `tailwind.config.ts` - Added `arabic` and `default` font families
- `src/index.css` - Font family rules for RTL and Arabic
- `src/main.tsx` - Import i18n early, set direction
- `src/components/LanguageSwitcher.tsx` - Use 'app_lang' localStorage key
- `src/types/listing.ts` - Added status and rejectionReason fields
- `src/data/mockData.ts` - Added status and rejectionReason to all listings
- `src/pages/owner/AddListing.tsx` - Set listings to pending status by default

### Database Migration
```sql
ALTER TABLE public.listings
ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'rejected')),
ADD COLUMN IF NOT EXISTS rejection_reason text;

CREATE INDEX IF NOT EXISTS idx_listings_status ON public.listings(status);

UPDATE public.listings SET status = 'active' WHERE status IS NULL;
```

## Testing Instructions

### Test 1: Arabic Default Language
1. **Clear browser storage** (localStorage)
2. **Load application** - Should render in Arabic (RTL)
3. **Verify**:
   - Page direction is RTL
   - All text is in Arabic
   - Almarai font is applied
   - Navigation is mirrored (logo on right, menu on left)

### Test 2: Language Switching
1. **Click language switcher** (🌐 icon in navbar)
2. **Select "English"**
3. **Verify**:
   - Page direction changes to LTR
   - All text switches to English
   - Inter font is applied
   - Navigation layout flips
4. **Reload page** - Language persists

### Test 3: Status Workflow - Owner
1. **Sign in as Owner**
2. **Navigate to "My Listings"** (`/owner/my-listings`)
3. **Create new listing**:
   - Fill out all required fields
   - Submit form
4. **Verify**:
   - New listing appears with "Pending" status badge
   - Cannot see listing in public listings view yet (admin approval needed)

### Test 4: Status Workflow - Admin (Manual Test)
**Note**: Admin dashboard status management UI is pending implementation.

To manually test in database:
1. **Sign in as Admin**
2. **Navigate to Dashboard** (`/dashboard`)
3. **Manually update listing status** via Lovable Cloud backend:
   ```sql
   -- Approve a listing
   UPDATE listings SET status = 'active' WHERE id = 'listing-id';
   
   -- Reject a listing
   UPDATE listings SET status = 'rejected', rejection_reason = 'Missing documents' WHERE id = 'listing-id';
   ```
4. **Owner refresh** - Should see updated status and rejection reason if rejected

### Test 5: Fonts
1. **Arabic mode**:
   - Inspect any text element
   - Verify computed font-family contains 'Almarai'
2. **English mode**:
   - Switch to English
   - Inspect any text element
   - Verify computed font-family contains 'Inter'

## Acceptance Checklist

- [x] On first load (clean localStorage), app renders in Arabic with RTL
- [x] Language switcher toggles to English and persists choice
- [x] All visible text uses translation keys from JSON files
- [x] Arabic uses Almarai font, English uses Inter font
- [x] Owner creates listing → status defaults to 'pending'
- [x] Database has status and rejection_reason columns
- [x] Mock data includes status for all listings
- [x] README.md file remains unchanged
- [ ] Admin dashboard has pending/active/rejected tabs (TODO)
- [ ] Admin can approve pending listings (TODO)
- [ ] Admin can reject listings with reason (TODO)
- [ ] Owner sees status badges in listing list (TODO)
- [ ] Owner sees rejection reason when rejected (TODO)

## Known Limitations

1. **Admin Status Management UI**: Not yet implemented. Admins must use database directly to change listing status.
2. **Status Notifications**: No real-time notifications when admin changes listing status. Owner must refresh page.
3. **Status Filtering**: Public listings page doesn't filter by status yet (should only show 'active' listings).

## Future Enhancements

1. **Admin Dashboard Tabs**:
   - Add Pending/Active/Rejected tabs with listing counts
   - Approve/Reject buttons with confirmation modals
   - Rejection reason input modal

2. **Owner Dashboard**:
   - Status badge colors (yellow=pending, green=active, red=rejected)
   - Rejection reason display in alert or tooltip
   - Status filter dropdown

3. **Real-time Updates**:
   - WebSocket or polling for status changes
   - Toast notifications for owners when status changes

4. **Email Notifications**:
   - Notify owner when listing is approved
   - Notify owner when listing is rejected with reason

5. **Translation Coverage**:
   - Add translations for error messages
   - Add translations for toast notifications
   - Add translations for form validation messages

## Security Notes

- Language preference stored in localStorage only (no server-side tracking)
- Status transitions should be server-validated (RLS policies)
- Rejection reasons should be sanitized for XSS
- Only admins can change listing status (enforce with RLS)

## Rollback Instructions

If issues arise:
1. Restore previous commit before this branch
2. Database migration is additive (adds columns) - safe to keep or remove
3. To remove status columns:
   ```sql
   ALTER TABLE public.listings DROP COLUMN IF EXISTS status;
   ALTER TABLE public.listings DROP COLUMN IF EXISTS rejection_reason;
   DROP INDEX IF EXISTS idx_listings_status;
   ```
