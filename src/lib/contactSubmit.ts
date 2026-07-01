import emailjs from '@emailjs/browser';
import { submitContact } from './publicApi';

export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export interface ContactSubmitResult {
  emailSent: boolean;
  apiSaved: boolean;
}

const DEFAULT_TO_EMAIL = 'arionextech@gmail.com';

async function sendContactEmail(payload: ContactFormPayload): Promise<boolean> {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  if (!publicKey) {
    console.warn('EmailJS not configured (VITE_EMAILJS_PUBLIC_KEY missing)');
    return false;
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_2comkqc';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_giacn2x';
  const toEmail = import.meta.env.VITE_CONTACT_EMAIL || DEFAULT_TO_EMAIL;

  const templateParams = {
    name: payload.name,
    email: payload.email,
    subject: payload.subject || 'Website inquiry',
    message: payload.message,
    number: payload.phone || '',
    phone: payload.phone || '',
    to_email: toEmail,
  };

  await emailjs.send(serviceId, templateId, templateParams, publicKey);
  return true;
}

async function saveContactToApi(payload: ContactFormPayload): Promise<boolean> {
  try {
    await submitContact({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      subject: payload.subject || 'Website inquiry',
      message: payload.message,
    });
    return true;
  } catch {
    return false;
  }
}

/**
 * Sends contact form to EmailJS and/or backend API.
 * - Backend down → email only (if EmailJS configured)
 * - Backend up → both email and API
 * Succeeds if at least one channel works.
 */
export async function submitContactForm(payload: ContactFormPayload): Promise<ContactSubmitResult> {
  const [emailResult, apiResult] = await Promise.allSettled([
    sendContactEmail(payload),
    saveContactToApi(payload),
  ]);

  const emailSent =
    emailResult.status === 'fulfilled' && emailResult.value === true;
  const apiSaved = apiResult.status === 'fulfilled' && apiResult.value === true;

  if (!emailSent && !apiSaved) {
    const emailErr =
      emailResult.status === 'rejected'
        ? emailResult.reason
        : !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          ? 'Email not configured'
          : 'Email failed';
    throw new Error(
      `Unable to send your message (${emailErr}). Please call us or email ${import.meta.env.VITE_CONTACT_EMAIL || DEFAULT_TO_EMAIL} directly.`,
    );
  }

  return { emailSent, apiSaved };
}
