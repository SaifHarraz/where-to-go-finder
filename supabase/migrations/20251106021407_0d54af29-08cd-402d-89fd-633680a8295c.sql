-- Add status and rejection_reason columns to listings table
ALTER TABLE public.listings
ADD COLUMN IF NOT EXISTS status text DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'rejected')),
ADD COLUMN IF NOT EXISTS rejection_reason text;

-- Create index for status queries
CREATE INDEX IF NOT EXISTS idx_listings_status ON public.listings(status);

-- Update existing listings to have 'active' status
UPDATE public.listings SET status = 'active' WHERE status IS NULL;