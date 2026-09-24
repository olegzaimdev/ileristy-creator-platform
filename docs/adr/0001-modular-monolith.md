# ADR-0001: Use a modular monolith

* **Status:** Accepted
* **Date:** 2026-09-24

## Context

The platform is being developed as an MVP by a very small team, initially one developer. The product requirements and domain boundaries will continue to evolve during early development.

Starting with multiple microservices would introduce distributed communication, additional deployments, service discovery, observability, data-consistency challenges, and higher infrastructure costs before the product requires them.

## Decision

The Spring Boot backend will be implemented as a single deployable application divided into explicit internal modules:

* contacts;
* catalogue;
* orders;
* payments;
* enrollments;
* Telegram access;
* notifications.

Modules will be organized by business capability and communicate through explicit application interfaces and domain events where appropriate.

The modules will initially share one PostgreSQL database, but ownership of tables and domain logic will remain clear.

## Consequences

### Positive

* Simple local development and deployment
* Easier transactions and data consistency
* Lower infrastructure and operational overhead
* Faster MVP development
* Clear domain boundaries without distributed-system complexity

### Negative

* All modules are deployed and scaled together
* Poorly enforced boundaries could create a tightly coupled application
* A failure in one module can affect the entire backend process

Module boundaries should be protected through package visibility, architecture tests, and code review. A module may be extracted into a separate service later if independent scaling, ownership, deployment, or reliability requirements justify it.
