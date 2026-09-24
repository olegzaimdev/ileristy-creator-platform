CREATE TABLE contact
(
    id                             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name                     VARCHAR(255) NOT NULL,
    last_name                      VARCHAR(255),
    email                          VARCHAR(255) NOT NULL,
    phone_number                   VARCHAR(255),
    origin                         VARCHAR(255) NOT NULL,
    marketing_consent              BOOLEAN      NOT NULL DEFAULT FALSE,
    marketing_consent_at           TIMESTAMPTZ,
    marketing_consent_withdrawn_at TIMESTAMPTZ,
    created_at                     TIMESTAMPTZ  NOT NULL DEFAULT now(),
    updated_at                     TIMESTAMPTZ  NOT NULL DEFAULT now(),

    CONSTRAINT chk_contact_marketing_consent
        CHECK (marketing_consent = FALSE OR marketing_consent_at IS NOT NULL)
);

CREATE UNIQUE INDEX uq_contact_email_lower
    ON contact (lower(email));

CREATE TABLE course
(
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    slug        VARCHAR(50)  NOT NULL,
    name        VARCHAR(255) NOT NULL,
    description TEXT         NOT NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX uq_slug
    ON course (lower(slug));

CREATE TABLE course_package
(
    id                 BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name               VARCHAR(255) NOT NULL,
    price_amount_minor BIGINT       NOT NULL CHECK (price_amount_minor > 0),
    currency           CHAR(3)      NOT NULL CHECK (currency ~ '^[A-Z]{3}$'),
    code               VARCHAR(50)  NOT NULL,
    course_id          BIGINT       NOT NULL REFERENCES course (id) ON DELETE RESTRICT,
    description        TEXT,
    active             BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at         TIMESTAMPTZ  NOT NULL DEFAULT now(),
    updated_at         TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX uq_course_package_course_code
    ON course_package (course_id, lower(code));

CREATE TABLE cohort
(
    id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    course_id  BIGINT      NOT NULL REFERENCES course (id) ON DELETE RESTRICT,
    starts_at  TIMESTAMPTZ NOT NULL,
    ends_at    TIMESTAMPTZ NOT NULL,
    capacity   INTEGER     NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT chk_cohort_dates
        CHECK (ends_at > starts_at),

    CONSTRAINT chk_cohort_capacity
        CHECK (capacity > 0)
);
