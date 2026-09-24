# ADR-0005: Keep AI processing outside the critical path

* **Status:** Accepted
* **Date:** 2026-09-24

## Context

The platform may later provide AI-assisted feedback for UGC scripts and student homework.

AI providers can have variable latency, rate limits, temporary outages, unpredictable output, and changing costs. Payment, enrollment, and Telegram access must continue working when the AI functionality is slow or unavailable.

## Decision

AI processing will not be part of the synchronous payment or enrollment flow.

When AI feedback is introduced:

1. The core backend will store the student submission.
2. It will create an asynchronous AI processing job.
3. A separate Python worker will process the job.
4. The worker will validate the structured model response.
5. The result and model or prompt version will be stored.
6. The student will be notified when feedback is ready.

AI failures will use explicit job statuses and retry rules. They must never roll back a payment, order, enrollment, or Telegram access grant.

The AI worker and messaging infrastructure will be added only when the corresponding product functionality is implemented.

## Consequences

### Positive

* Core sales and access flows remain reliable
* AI workloads can be scaled and deployed independently
* Failed jobs can be retried
* Model providers and prompts can evolve without changing the transactional core
* Outputs can be evaluated and traced to a prompt version

### Negative

* AI feedback is eventually consistent
* The user interface must show processing and failure states
* A worker and eventually a queue introduce additional infrastructure
* Monitoring, retry limits, cost tracking, and evaluation tooling are required
