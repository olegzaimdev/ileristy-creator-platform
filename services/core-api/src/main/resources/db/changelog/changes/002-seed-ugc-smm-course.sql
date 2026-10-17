--liquibase formatted sql

--changeset oleg:005-seed-ugc-smm-course context:!test
INSERT INTO course (slug, name, description)
VALUES ('ugc-smm', 'SMM & UGC', 'SMM & UGC course');

--rollback DELETE FROM course WHERE slug = 'ugc-smm';


--changeset oleg:006-seed-ugc-smm-course-packages context:!test
INSERT INTO course_package (course_id, code, name, price_amount_minor, currency, active)
SELECT c.id, p.code, p.name, p.price_amount_minor, 'EUR', TRUE
FROM course c
         CROSS JOIN (VALUES ('START', 'Start', 9900),
                            ('PRO', 'Pro', 19900),
                            ('PREMIUM', 'Premium', 49900)) AS p (code, name, price_amount_minor)
WHERE c.slug = 'ugc-smm';

--rollback DELETE FROM course_package WHERE course_id = (SELECT id FROM course WHERE slug = 'ugc-smm');


--changeset oleg:007-seed-ugc-smm-cohort context:!test
INSERT INTO cohort (course_id, starts_at, ends_at, capacity)
SELECT id, '2026-11-16 10:00:00+02', '2026-12-14 20:00:00+02', 20
FROM course
WHERE slug = 'ugc-smm';

--rollback DELETE FROM cohort WHERE course_id = (SELECT id FROM course WHERE slug = 'ugc-smm');
