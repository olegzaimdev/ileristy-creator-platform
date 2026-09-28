import type { ContactResponse, CreateContactRequest } from "../types/contact";

export class CreateContactError extends Error {
  constructor(readonly status?: number) {
    super(status ? `Failed to create contact (${status})` : "Failed to create contact");
    this.name = "CreateContactError";
  }

  /** The API answers 409 when a contact with this email already exists. */
  get isDuplicate() {
    return this.status === 409;
  }
}

export async function createContact(
  request: CreateContactRequest,
): Promise<ContactResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_API_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_CORE_API_URL is not configured");
  }

  let response: Response;
  try {
    response = await fetch(`${baseUrl}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
  } catch {
    throw new CreateContactError();
  }

  if (!response.ok) {
    throw new CreateContactError(response.status);
  }
  return response.json();
}
