create policy "Public can read settings"
on public.settings
for select
using (true);

create policy "Authenticated users can update settings"
on public.settings
for update
to authenticated
using (true)
with check (true);

create policy "Authenticated users can insert settings"
on public.settings
for insert
to authenticated
with check (true);