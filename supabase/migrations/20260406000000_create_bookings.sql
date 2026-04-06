-- Bookings table for SailBorne contact/booking form submissions
create table if not exists public.bookings (
  id             uuid default gen_random_uuid() primary key,
  created_at     timestamptz default now() not null,
  first_name     text not null,
  last_name      text not null,
  email          text not null,
  phone          text,
  inquiry_type   text,
  location       text,
  vessel         text,
  duration       text,
  preferred_date text,
  guests         text,
  pr_destinations text[],
  addons         text[],
  message        text,
  status         text default 'new'
);

-- Enable Row Level Security
alter table public.bookings enable row level security;

-- Allow anyone (anon) to INSERT from the public booking form
create policy "Allow public inserts"
  on public.bookings for insert
  to anon
  with check (true);

-- Only authenticated users (admin) can read bookings
create policy "Allow authenticated reads"
  on public.bookings for select
  to authenticated
  using (true);
