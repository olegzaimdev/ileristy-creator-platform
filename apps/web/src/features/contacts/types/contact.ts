export type CreateContactRequest = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    origin: string;
    marketingConsent: boolean;
};

export type ContactResponse = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    origin: string;
    marketingConsent: boolean;
    createdAt: string;
}
