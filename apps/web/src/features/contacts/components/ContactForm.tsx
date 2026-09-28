"use client";

import { useId, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Button, Checkbox, Input } from "@/components/ui";
import { CreateContactError, createContact } from "../api/createContact";
import type {
  ContactFormDictionary,
  CreateContactRequest,
} from "../types/contact";

type SubmissionState = "idle" | "submitting" | "success" | "duplicate" | "error";

/* Mirrors the @Size(max = 255) constraints on the API's CreateContactRequest. */
const MAX_LENGTH = 255;

const initialForm: CreateContactRequest = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  origin: "DIRECT",
  marketingConsent: false,
};

export function ContactForm({ t }: { t: ContactFormDictionary }) {
  const id = useId();
  const [form, setForm] = useState<CreateContactRequest>(initialForm);
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  const submitting = submissionState === "submitting";

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (submissionState === "error") setSubmissionState("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setSubmissionState("submitting");

    try {
      await createContact(form);
      setSubmissionState("success");
    } catch (error) {
      setSubmissionState(
        error instanceof CreateContactError && error.isDuplicate
          ? "duplicate"
          : "error",
      );
    }
  }

  if (submissionState === "success" || submissionState === "duplicate") {
    return (
      <p className="contact-form__status contact-form__status--success" role="status">
        {submissionState === "success" ? t.success : t.duplicate}
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={submitting}>
      <fieldset className="contact-form__fields" disabled={submitting}>
        <div className="contact-form__row">
          <Input
            label={t.firstName}
            id={`${id}-firstName`}
            name="firstName"
            type="text"
            autoComplete="given-name"
            maxLength={MAX_LENGTH}
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <Input
            label={t.lastName}
            id={`${id}-lastName`}
            name="lastName"
            type="text"
            autoComplete="family-name"
            maxLength={MAX_LENGTH}
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <Input
          label={t.email}
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          maxLength={MAX_LENGTH}
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          label={t.phoneNumber}
          id={`${id}-phoneNumber`}
          name="phoneNumber"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={MAX_LENGTH}
          value={form.phoneNumber}
          onChange={handleChange}
          required
        />
        <Checkbox
          label={t.marketingConsent}
          id={`${id}-marketingConsent`}
          name="marketingConsent"
          checked={form.marketingConsent}
          onChange={handleChange}
        />
      </fieldset>

      {submissionState === "error" && (
        <p className="contact-form__status contact-form__status--error" role="alert">
          {t.error}
        </p>
      )}

      <Button type="submit" block arrow disabled={submitting}>
        {submitting ? t.submitting : t.submit}
      </Button>
    </form>
  );
}
