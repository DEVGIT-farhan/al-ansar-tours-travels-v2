create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  email text not null,
  phone text not null,
  destination text,
  package_name text,
  message text not null check (char_length(message) between 10 and 1000),
  status text not null default 'new'
    check (status in ('new', 'contacted', 'booked', 'closed')),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists enquiries_created_at_idx
  on public.enquiries (created_at desc);

create index if not exists enquiries_status_idx
  on public.enquiries (status);

alter table public.enquiries enable row level security;

grant insert on public.enquiries to anon, authenticated;
grant select, update on public.enquiries to authenticated;

create policy "Public can create enquiries"
on public.enquiries
for insert
to anon, authenticated
with check (true);

create policy "Authenticated users can view enquiries"
on public.enquiries
for select
to authenticated
using (true);

create policy "Authenticated users can update enquiries"
on public.enquiries
for update
to authenticated
using (true)
with check (true);

drop trigger if exists enquiries_updated_at on public.enquiries;

create trigger enquiries_updated_at
before update on public.enquiries
for each row
execute function public.handle_updated_at();
