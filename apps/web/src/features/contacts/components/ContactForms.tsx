"use client";

import { useId, useState } from "react";
import { Button, Input } from "@/components/ui";
import { createContact } from "../api/createContact";
import type {
  ContactFormDictionary,
  CreateContactRequest,
} from "../types/contact";
import type { FormEvent } from "react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ t }: { t: ContactFormDictionary }) {
  const id = useId();
  const [form, setForm] = useState<CreateContactRequest>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    origin: "DIRECT",
    marketingConsent: false,
  });

  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmissionState("submitting");

    try {
      await createContact(form);
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <Input
        label={t.firstName}
        id={`${id}-firstName`}
        name="firstName"
        type="text"
        autoComplete="given-name"
        value={form.firstName}
        onChange={(event) =>
          setForm((currentForm) => ({
            ...currentForm,
            firstName: event.target.value,
          }))
        }
        required
      />
      <Input
        label={t.lastName}
        id={`${id}-lastName`}
        name="lastName"
        type="text"
        autoComplete="family-name"
        value={form.lastName}
        onChange={(event) =>
          setForm((currentForm) => ({
            ...currentForm,
            lastName: event.target.value,
          }))
        }
      />
      <Input
        label={t.email}
        id={`${id}-email`}
        name="email"
        type="email"
        autoComplete="email"
        value={form.email}
        onChange={(event) =>
          setForm((currentForm) => ({
            ...currentForm,
            email: event.target.value,
          }))
        }
        required
      />
      <Input
        label={t.phoneNumber}
        id={`${id}-phoneNumber`}
        name="phoneNumber"
        type="phoneNumber"
        autoComplete="phoneNumber"
        value={form.phoneNumber}
        onChange={(event) =>
          setForm((currentForm) => ({
            ...currentForm,
            phoneNumber: event.target.value,
          }))
        }
        required
      />
      <Button
        type="submit"
        block
        disabled={
          submissionState === "submitting" || submissionState === "success"
        }
      >
        {submissionState === "submitting" ? t.submitting : t.submit}
      </Button>

      {submissionState === "success" && <p role="status">{t.success}</p>}

      {submissionState === "error" && <p role="alert">{t.error}</p>}
    </form>
  );
}
