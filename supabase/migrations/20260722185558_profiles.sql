create table public.profiles (
    id uuid primary key references auth.users(id) on delete cascade,

    full_name text not null,

    role text not null default 'super_admin'
        check (role in ('super_admin', 'admin', 'editor')),

    avatar_url text,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

create trigger profiles_updated_at
before update on public.profiles
for each row
execute function public.handle_updated_at();