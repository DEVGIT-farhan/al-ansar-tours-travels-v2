-- =====================================================
-- Package Images
-- =====================================================

create table if not exists public.package_images (
    id uuid primary key default gen_random_uuid(),

    package_id uuid not null
        references public.packages(id)
        on delete cascade,

    image_url text not null,

    alt_text text,

    media_type text not null default 'image'
        check (media_type in ('image', 'video')),

    sort_order integer not null default 0,

    created_at timestamptz not null default now()
);

-- =====================================================
-- Indexes
-- =====================================================

create index if not exists idx_package_images_package
on public.package_images(package_id);

create index if not exists idx_package_images_sort
on public.package_images(package_id, sort_order);

-- =====================================================
-- Enable RLS
-- =====================================================

alter table public.package_images
enable row level security;

-- =====================================================
-- Policies
-- =====================================================

create policy "Public can view package images"
on public.package_images
for select
using (true);

create policy "Authenticated can insert package images"
on public.package_images
for insert
to authenticated
with check (true);

create policy "Authenticated can update package images"
on public.package_images
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated can delete package images"
on public.package_images
for delete
to authenticated
using (true);