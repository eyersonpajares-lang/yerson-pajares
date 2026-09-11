-- Sets the real logo image for each personal project's cover, and updates
-- PROJEXA's website link to the login page.
-- Run once in Supabase Dashboard -> SQL Editor -> New query -> Run. Safe to re-run.

update projects set cover = '/images/projexa-logo.png', website_url = 'https://projexa-app.vercel.app/login' where slug = 'projexa';
update projects set cover = '/images/solarcytec-logo.jpg' where slug = 'solarcytec';
update projects set cover = '/images/san-roque-logo.png' where slug = 'san-roque';
