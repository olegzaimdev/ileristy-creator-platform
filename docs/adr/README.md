# Architecture Decision Records

This directory records significant architectural decisions for the platform: what was decided, why, and what follows from it.

## Index

| ADR | Title | Status |
|-----|-------|--------|
| [0001](0001-modular-monolith.md) | Use a modular monolith | Accepted |
| [0002](0002-neon-postgresql.md) | Use Neon PostgreSQL in hosted environments | Accepted |
| [0003](0003-payment-webhook-source-of-truth.md) | Treat payment webhooks as the source of truth | Accepted |
| [0004](0004-telegram-access-model.md) | Model Telegram access as individual grants | Accepted |
| [0005](0005-ai-outside-critical-path.md) | Keep AI processing outside the critical path | Accepted |

## Adding a new ADR

1. Copy the structure of an existing ADR into `NNNN-short-title.md`, using the next free number.
2. Fill in the header and sections:

   ```markdown
   # ADR-NNNN: <Decision title>

   * **Status:** Proposed | Accepted | Deprecated | Superseded by ADR-XXXX
   * **Date:** YYYY-MM-DD

   ## Context
   ## Decision
   ## Consequences
   ```

3. Add a row to the index above.

ADRs are not edited once accepted. To change a decision, write a new ADR and mark the old one as `Superseded by ADR-XXXX`.
