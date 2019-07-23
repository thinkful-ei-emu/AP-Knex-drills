TRUNCATE blogful_articles;
insert into blogful_articles
(title, date_published, content)
values
  ('Blogful', '2016-01-16 12:00:00',       'Blog About blogful'),
  ('Facebook ',  '2016-05-01 15:00:00',       'Blog About blogful'),
  ('Google',     '2017-02-22 12:00:00',       'Blog About blogful'),
  ('Twitter',      '2017-04-04 08:00:00',       'Blog About blogful'),
  ('Eagles ',  '2017-04-23 15:00:00',       'Blog About blogful'),
  ('Sixers', '2017-08-11 13:00:00',       'Blog About blogful'),
  ('Philles ',  '2017-12-09 17:00:00',       'Blog About blogful'),
  ('Trust the Process',     '2018-01-24 19:00:00',       'Blog About blogful'),
  ('FEF',      '2018-01-29 11:00:00',       'Blog About blogful'),
  ('Takeya', '2018-02-13 05:00:00',       'Blog About blogful'),
  ('Tortillas ',  '2018-03-13 09:00:00',       'Blog About blogful'),
  ('Corn',     '2018-03-31 13:00:00',       'Blog About blogful'),
  ('Slim Jims', '2019-04-03 07:00:00',       'Blog About blogful'),
  ('Goku',      '2019-05-05 21:00:00',       'Blog About blogful'),
  ('West',      now() - '29 days'::INTERVAL, 'Man''s not torrid'),
  ('Northeast', now() - '29 days'::INTERVAL, 'Despotato'),
  ('Midwest ',  now() - '29 days'::INTERVAL, 'Cats that teach SQL'),
  ('Northeast', now() - '29 days'::INTERVAL, 'UpTown Monk'),
  ('Midwest ',  now() - '29 days'::INTERVAL, 'Despotato'),
  ('West', now() - '29 days'::INTERVAL, 'Shape of Pooh');