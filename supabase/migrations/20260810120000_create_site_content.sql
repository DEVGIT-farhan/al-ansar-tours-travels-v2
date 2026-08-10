create table if not exists public.site_content (
  key text primary key,
  content jsonb not null default '{}'::jsonb
    check (jsonb_typeof(content) = 'object'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

create policy "Public can read site content"
on public.site_content
for select
using (true);

create policy "Authenticated users can insert site content"
on public.site_content
for insert
to authenticated
with check (true);

create policy "Authenticated users can update site content"
on public.site_content
for update
to authenticated
using (true)
with check (true);

insert into storage.buckets (id, name, public)
values ('website-assets', 'website-assets', true)
on conflict (id) do update set public = true;

create policy "Public can view website assets"
on storage.objects
for select
using (bucket_id = 'website-assets');

create policy "Authenticated users can manage website assets"
on storage.objects
for all
to authenticated
using (bucket_id = 'website-assets')
with check (bucket_id = 'website-assets');
