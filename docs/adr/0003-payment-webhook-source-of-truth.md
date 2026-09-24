# ADR-0003: Treat payment webhooks as the source of truth

* **Status:** Accepted
* **Date:** 2026-09-24

## Context

After Stripe Checkout, the customer can be redirected to a success page. However, a browser redirect does not prove that the payment was completed.

The customer may close the page, lose the network connection, manipulate the redirect URL, or reach the page while payment processing is still pending. Stripe may also retry the same webhook event multiple times.

## Decision

Only a verified Stripe webhook can confirm payment and trigger enrollment activation.

The backend will:

1. Verify the Stripe webhook signature.
2. Store or identify the Stripe event using its unique provider event ID.
3. Reject or safely ignore events that have already been processed.
4. Update the payment and order state inside a database transaction.
5. Create no more than one enrollment for the same order.
6. Return a successful response only after the event has been safely handled.

Database uniqueness constraints will provide the final protection against duplicate payment events and duplicate enrollments.

The success page may display the current order status, but it must not activate course access.

## Consequences

### Positive

* Payment confirmation does not depend on the customer’s browser
* Repeated webhook delivery is safe
* Course access is granted only after verified payment
* The payment workflow can recover from temporary application failures

### Negative

* Payment confirmation is eventually consistent
* The success page may temporarily show a processing state
* Webhook storage, signature verification, retries, and monitoring are required
* Developers need a way to test webhook delivery locally
