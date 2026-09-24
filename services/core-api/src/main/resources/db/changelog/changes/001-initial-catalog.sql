create table contact
(
    id                bigint generated always as identity primary key,
    first_name        varchar(255) not null,
    last_name         varchar(255),
    email             varchar(255) not null,
    phone_number      varchar(255),
    origin            varchar(255) not null,
    marketing_consent boolean not null default false,
    marketing_consent_at timestamptz,
    marketing_consent_withdrawn_at timestamptz,
    created_at        timestamptz  not null DEFAULT now(),
    updated_at        timestamptz  not null DEFAULT now(),

    CONSTRAINT chk_contact_marketing_consent
        CHECK (
            marketing_consent = false
                OR marketing_consent_at IS NOT NULL
            )
);

CREATE UNIQUE INDEX uq_contact_email_lower
    ON contact (lower(email));

create table course
(
    id          bigint generated always as identity primary key,
    slug        varchar(50)  not null,
    name        varchar(255) not null,
    description text         not null,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX uq_slug
    ON course (lower(slug));

create table course_package
(
    id          bigint generated always as identity primary key,
    name        varchar(255) not null,
    price_amount_minor bigint NOT NULL CHECK (price_amount_minor > 0),
    currency    CHAR(3) not null check(currency~ '^[A-Z]{3}$'),
    code varchar(50) not null,
    course_id   bigint not null references course(id) on delete restrict,
    description text,
    active boolean NOT NULL DEFAULT true,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX uq_course_package_course_code
    ON course_package (course_id, lower(code));

create table cohort
(
    id         bigint generated always as identity primary key,
    course_id  bigint      NOT NULL REFERENCES course (id) ON DELETE RESTRICT,
    starts_at timestamptz not null,
    ends_at   timestamptz not null,
    capacity  integer     not null,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now(),
    CONSTRAINT chk_cohort_dates
        CHECK (ends_at > starts_at),

    CONSTRAINT chk_cohort_capacity
        CHECK (capacity > 0)
);