import type { ContactResponse, CreateContactRequest } from "../types/contact";

export async function createContact(
  request: CreateContactRequest,
): Promise<ContactResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CORE_API_URL}/api/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    },
  );
  if (!response.ok) {
    throw new Error("Failed to create contact");
  }
  return response.json();
}
