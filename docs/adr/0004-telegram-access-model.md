# ADR-0004: Model Telegram access as individual grants

* **Status:** Accepted
* **Date:** 2026-09-24

## Context

A student may need access to more than one Telegram chat for the same course enrollment:

* a content channel for lessons and announcements;
* a community group for discussions, homework, and feedback.

Access to either chat may be granted, expired, or revoked independently. A single boolean field on the enrollment cannot represent this lifecycle reliably.

## Decision

Each Telegram chat permission will be represented as a separate access grant.

A grant connects:

* an enrollment;
* a linked Telegram identity;
* a Telegram chat;
* a chat type;
* an access status.

Supported chat types initially include:

* `CONTENT_CHANNEL`;
* `COMMUNITY_GROUP`.

The grant lifecycle may include:

* `PENDING`;
* `INVITED`;
* `JOINED`;
* `REVOKED`;
* `EXPIRED`.

The backend database remains the source of truth for intended access. Telegram operations are external side effects and may be retried independently.

Revoking access to one chat must not automatically revoke other grants unless required by an explicit business rule.

## Consequences

### Positive

* Channel and group access can be managed independently
* Access history and failures can be audited
* The model supports future courses with different Telegram spaces
* Telegram operations can be retried without changing enrollment state

### Negative

* Enrollment activation may create multiple access grants
* Database state and actual Telegram membership can temporarily differ
* Reconciliation and retry logic will eventually be required
* The Telegram bot must have sufficient administrative permissions
