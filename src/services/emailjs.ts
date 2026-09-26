import emailjs from '@emailjs/browser';

/**
 * Standardized EmailJS Configuration for Elite Mobile Auto Detailing.
 * Used across all inquiry and booking forms.
 */
export const EMAILJS_CONFIG = {
  publicKey: '_WsgUGe1vhyjMunB3',
  serviceId: 'service_jm3hieq',
  templateId: 'template_mruxeig',
  recipientEmail: 'elitemobileautodetailing8@gmail.com',
} as const;

/**
 * Sends customer inquiry form directly via EmailJS sendForm.
 * This guarantees the exact HTML form field `name` attributes map 1:1 to the EmailJS template variables.
 *
 * Variables:
 * - name: Full Name
 * - phone: Phone Number
 * - email: Email Address (also used as Reply-To and Auto-Reply target: {{email}})
 * - vehicle_make: Vehicle Make
 * - vehicle_model: Vehicle Model
 * - service_needed: Service Needed
 * - service_address: Service Address / Location
 * - zip_code: ZIP Code
 * - preferred_date: Preferred Date
 * - preferred_time: Preferred Time
 * - notes: Special Requests / Notes
 */
export const sendInquiryForm = async (formElement: HTMLFormElement) => {
  return emailjs.sendForm(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    formElement,
    EMAILJS_CONFIG.publicKey
  );
};
