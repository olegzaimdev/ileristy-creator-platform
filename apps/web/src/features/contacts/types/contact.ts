export type ContactFormDictionary = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
};

export type CreateContactRequest = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  origin: string;
  marketingConsent: boolean;
};

export type ContactResponse = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  origin: string;
  marketingConsent: boolean;
  createdAt: string;
};
