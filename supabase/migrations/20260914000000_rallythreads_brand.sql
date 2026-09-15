update public.store_settings
set brand_name = 'RallyThreads',
    tagline = 'Your story, stitched to last.',
    announcement = 'Custom embroidery, made for the moments worth rallying around.',
    return_address = jsonb_set(return_address, '{name}', '"RallyThreads"'::jsonb, true)
where id = 'store'
  and brand_name = 'Thread & Form';
