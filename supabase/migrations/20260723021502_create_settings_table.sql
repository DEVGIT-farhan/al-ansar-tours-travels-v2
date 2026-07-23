create table if not exists public.settings (
    id uuid primary key default gen_random_uuid(),

    company_name text not null,
    tagline text,

    email text,
    phone text,
    whatsapp text,

    address text,
    google_maps_url text,

    logo_url text,
    favicon_url text,

    facebook_url text,
    instagram_url text,
    youtube_url text,
    twitter_url text,

    seo_title text,
    seo_description text,
    seo_keywords text,

    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

alter table public.settings
enable row level security;