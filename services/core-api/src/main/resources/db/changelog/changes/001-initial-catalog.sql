--liquibase formatted sql

--changeset oleg:001-create-contact
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

--rollback DROP TABLE contact;


--changeset oleg:002-create-course
CREATE TABLE course
(
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    slug        VARCHAR(50)  NOT NULL,
    name        VARCHAR(255) NOT NULL,
    description TEXT         NOT NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX uq_course_slug_lower
    ON course (lower(slug));

--rollback DROP TABLE course;


--changeset oleg:003-create-course-package
CREATE TABLE course_package
(
    id                  BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name                VARCHAR(255) NOT NULL,
    price_amount_minor  BIGINT       NOT NULL,
    currency            VARCHAR(3)   NOT NULL,
    code                VARCHAR(50)  NOT NULL,
    course_id           BIGINT       NOT NULL,
    description         TEXT,
    active              BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ  NOT NULL DEFAULT now(),
    updated_at          TIMESTAMPTZ  NOT NULL DEFAULT now(),

    CONSTRAINT fk_course_package_course
        FOREIGN KEY (course_id)
            REFERENCES course (id)
            ON DELETE RESTRICT,

    CONSTRAINT chk_course_package_price_positive
        CHECK (price_amount_minor > 0),

    CONSTRAINT chk_course_package_currency
        CHECK (currency ~ '^[A-Z]{3}$')
    );

CREATE UNIQUE INDEX uq_course_package_course_code_lower
    ON course_package (course_id, lower(code));

--rollback DROP TABLE course_package;


--changeset oleg:004-create-cohort
CREATE TABLE cohort
(
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    course_id   BIGINT      NOT NULL,
    starts_at   TIMESTAMPTZ NOT NULL,
    ends_at     TIMESTAMPTZ NOT NULL,
    capacity    INTEGER     NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT fk_cohort_course
        FOREIGN KEY (course_id)
            REFERENCES course (id)
            ON DELETE RESTRICT,

    CONSTRAINT chk_cohort_dates
        CHECK (ends_at > starts_at),

    CONSTRAINT chk_cohort_capacity
        CHECK (capacity > 0)
);

CREATE INDEX idx_cohort_course_id
    ON cohort (course_id);

--rollback DROP TABLE cohort;