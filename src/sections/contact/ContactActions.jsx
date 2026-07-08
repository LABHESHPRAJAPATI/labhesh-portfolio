import { Mail, Phone } from 'lucide-react';

/**
 * Contact CTA buttons.
 */
export function ContactActions({ email, phone, emailLabel, phoneLabel }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={`mailto:${email}`}
        className="btn btn-primary"
        aria-label="Send an email"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        {emailLabel}
      </a>
      <a
        href={`tel:${phone}`}
        className="btn btn-outline"
        aria-label="Make a phone call"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        {phoneLabel}
      </a>
    </div>
  );
}
