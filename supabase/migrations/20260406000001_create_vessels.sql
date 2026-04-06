-- ============================================================
--  Vessels table — all 32 boats across 4 destinations
-- ============================================================
create table if not exists public.vessels (
  id            uuid    default gen_random_uuid() primary key,
  created_at    timestamptz default now() not null,
  name          text    not null,
  type          text    not null,
  destination   text    not null,   -- 'fajardo' | 'parguera' | 'miami' | 'greece'
  length_ft     int,
  capacity      int,
  cabins        int,
  price_from    numeric,
  price_unit    text,               -- 'day' | 'week' | 'event'
  price_contact boolean default false,
  image_url     text,
  featured      boolean default false,
  display_order int     default 0
);

-- Public read access
alter table public.vessels enable row level security;

create policy "Public can read vessels"
  on public.vessels for select
  to anon
  using (true);

-- ============================================================
--  Seed: Puerto Rico — Fajardo (14 vessels)
-- ============================================================
insert into public.vessels (name, type, destination, length_ft, capacity, price_from, price_unit, price_contact, image_url, featured, display_order) values
  ('Bertram 74',                'Motor Yacht',   'fajardo', 74,  12, 6200,  'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238932920-E76FNBNEG4DW6NHSXAT8/Bertram+74+%246200.png', true,  1),
  ('Predator 82 Paradis',       'Motor Yacht',   'fajardo', 82,  16, 5800,  'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238932933-2OFD3X0PALLEZ9VK6PN4/wsxcvbnm%2C.png',          true,  2),
  ('Azimuth 68 Evolution Paradis','Motor Yacht', 'fajardo', 68,  12, null,  'day', true,  'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238932951-PKEOTLDFYK446QBQ7GBM/16.png',                   false, 3),
  ('Neptunos 60',               'Motor Yacht',   'fajardo', 60,  12, 3500,  'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238932967-5OQIZGTUT8PAK85GWBOC/pedro+yacht.png',          false, 4),
  ('Princess 58 Paradis',       'Motor Yacht',   'fajardo', 58,  12, 3000,  'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238932984-XZ89BNOK7OBT1V6F33QX/15.png',                   false, 5),
  ('Sunseeker 60 Paradis',      'Motor Yacht',   'fajardo', 60,  12, null,  'day', true,  'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238933001-LWES4OTISTJK4Y9TE5U9/17.png',                   false, 6),
  ('Fairline 65',               'Motor Yacht',   'fajardo', 65,  12, null,  'day', true,  'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238933014-K9H7HIJFECBTLNIU9OAB/Fairline+65%E2%80%99.png',  false, 7),
  ('Sea Ray 42',                'Sport Cruiser', 'fajardo', 42,   8, null,  'day', true,  'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238933027-F45BXBHUTQHK8DX85187/19.png',                   false, 8),
  ('Tiara 45',                  'Sport Cruiser', 'fajardo', 45,   8, null,  'day', true,  'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238933039-BCBCDN532DDB8UYFDVBT/Tiara+Yacht.png',          false, 9),
  ('Grady White 35',            'Sport Boat',    'fajardo', 35,   9, 2100,  'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238933048-AYQOHJTIBGXJXEITBI4I/Grady+White+35%27.png',     false, 10),
  ('Cruiser 36',                'Sport Cruiser', 'fajardo', 36,   8, 2000,  'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238933057-NGX7ZFRYKH572J38SBN2/Cruiser+36%27+price.png',  false, 11),
  ('Sea Fox 36 Paradis',        'Sport Boat',    'fajardo', 36,  12, 1700,  'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238933070-0D1Q2D78042K20YIOTJ5/13.png',                   false, 12),
  ('Wellcraft 30',              'Sport Boat',    'fajardo', 30,   7, 1300,  'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238933084-SEO6B8V4204V9HASAGIT/WELLCRAFT+30+Price.png',    false, 13),
  ('Boston Whaler 28 Paradis',  'Sport Boat',    'fajardo', 28,   6,  775,  'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238933099-B20SWHNDSCUKT0PTLBVF/18.png',                   false, 14);

-- ============================================================
--  Seed: Puerto Rico — La Parguera (5 floating experiences)
-- ============================================================
insert into public.vessels (name, type, destination, capacity, price_from, price_unit, price_contact, image_url, featured, display_order) values
  ('La Barra Salada II', 'Floating Bar & Grill',  'parguera', 50, 450,  'event', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1762104105488-J1QUMYXN976VRUMZ6HHQ/unsplash-image---CLmo9GA60.jpg', true,  1),
  ('La Rumba Salada',    'Floating Experience',   'parguera', 40, null, 'event', true,  'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1762104105488-J1QUMYXN976VRUMZ6HHQ/unsplash-image---CLmo9GA60.jpg', false, 2),
  ('El Paraíso Salado',  'Floating Experience',   'parguera', 40, null, 'event', true,  'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1762104105488-J1QUMYXN976VRUMZ6HHQ/unsplash-image---CLmo9GA60.jpg', false, 3),
  ('La Barra Salada',    'Floating Bar',          'parguera', 30, null, 'event', true,  'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1762104105488-J1QUMYXN976VRUMZ6HHQ/unsplash-image---CLmo9GA60.jpg', false, 4),
  ('La Mesa Salada',     'Floating Dining',       'parguera', 20, null, 'event', true,  'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1762104105488-J1QUMYXN976VRUMZ6HHQ/unsplash-image---CLmo9GA60.jpg', false, 5);

-- ============================================================
--  Seed: Miami (8 vessels)
-- ============================================================
insert into public.vessels (name, type, destination, length_ft, capacity, price_from, price_unit, price_contact, image_url, featured, display_order) values
  ('Azimut 100',         'Luxury Motor Yacht', 'miami', 100, 13, 8000, 'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238953044-NYG1OTIC7OW8S2B2AJJ4/23.png',                   true,  1),
  ('Princess 62',        'Motor Yacht',        'miami',  62, 12, 2450, 'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238953060-1N78FSRB4SLX94AXX7KC/Princes+62%27.png',          false, 2),
  ('Azimut 60 Miami',    'Motor Yacht',        'miami',  60, 12, 2450, 'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238953073-120VVCXLG7H44NS2MDZ1/Azimut+60%27+Miami.png',     false, 3),
  ('Azimut 60 Sport',    'Motor Yacht',        'miami',  60, 12, 2400, 'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238953086-J9SRH3AUU12WFUB30JP4/24.png',                   false, 4),
  ('Maxum 50 Paradis',   'Sport Cruiser',      'miami',  50, 12, 1299, 'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238953103-3J0C683LTISGWLRG1ZG8/20.png',                   false, 5),
  ('Maxum 45',           'Sport Cruiser',      'miami',  45, 12, 1199, 'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238953120-OXMFA13H7E7L62KP72B1/21.png',                   false, 6),
  ('Sea Ray 37 Miami',   'Sport Boat',         'miami',  37,  8, null, 'day', true,  'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238953133-JZI6XR265KKOTFSA00P2/Sea+Ray+37%27+Miami.png',   false, 7),
  ('Sea Ray 42 Miami',   'Sport Cruiser',      'miami',  42,  8,  899, 'day', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238953147-II8VIFW5CN9SIOKHUF0O/22.png',                   false, 8);

-- ============================================================
--  Seed: Greece (5 catamarans)
-- ============================================================
insert into public.vessels (name, type, destination, length_ft, capacity, cabins, price_from, price_unit, price_contact, image_url, featured, display_order) values
  ('Lagoon 51 Kentavros', 'Catamaran', 'greece', 51, 8, 4, 12704, 'week', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238906328-N6IUW2XV9DYAENWEW8YG/28.png', true,  1),
  ('Lagoon 50 Icarus',    'Catamaran', 'greece', 50, 8, 4, 11533, 'week', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238906338-LCT1REXK2YQPSZ237RS2/26.png', false, 2),
  ('Bali 4.8 Romar III',  'Catamaran', 'greece', 48, 8, 4,  null, 'week', true,  'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238906346-MG9BBFIVUVTARCD8CUWG/30.png', false, 3),
  ('Lagoon 50 Orion',     'Catamaran', 'greece', 50, 8, 4, 11533, 'week', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238906356-Z5VT7BKPDMZ26I65X5BA/27.png', false, 4),
  ('Bali 4.6 Enma',       'Catamaran', 'greece', 46, 8, 4,  6180, 'week', false, 'https://images.squarespace-cdn.com/content/v1/68fa5f75db7505691566b033/1761238906367-7P9J93KG52X0A8JU83WC/29.png', false, 5);
