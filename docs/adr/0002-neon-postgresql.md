# ADR-0002: Use Neon PostgreSQL in hosted environments

* **Status:** Accepted
* **Date:** 2026-09-24

## Context

The project requires a relational database with support for transactions, constraints, indexing, JSON data, and mature Java integration.

The initial team should not spend significant time managing database servers, backups, updates, and infrastructure. At the same time, local development and automated integration tests must remain reproducible and independent from the hosted database.

## Decision

The project will use PostgreSQL in all environments:

* **Hosted staging and production:** Neon PostgreSQL
* **Local development:** PostgreSQL running through Docker Compose
* **Integration tests:** disposable PostgreSQL containers managed by Testcontainers

Neon is selected because it provides managed PostgreSQL, simple environment provisioning, elastic compute options, backups, and reduced operational overhead for a small team.

Runtime database connections may use a pooled Neon connection. Database migrations must use a direct connection when required by the migration tooling.

## Consequences

### Positive

* PostgreSQL behaviour remains consistent across environments
* No production database server administration is required
* Developers can start the local database reproducibly
* Integration tests run against a real PostgreSQL instance instead of mocks
* Test databases are isolated and automatically removed

### Negative

* The application depends on an external database provider
* Network latency is higher than with a database on the same host
* Connection limits, pooling, cold starts, and provider pricing must be monitored
* Provider-specific configuration must not leak into the domain model

Testcontainers increases test execution time but provides substantially higher confidence in SQL, constraints, Liquibase migrations, and JPA mappings.
