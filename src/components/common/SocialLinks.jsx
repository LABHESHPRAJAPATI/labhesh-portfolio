import { Github, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';
import { SocialButton } from '@/components/ui/SocialButton';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
};

/**
 * Reusable social links row.
 * Only links with a URL are rendered.
 */
export function SocialLinks({ socials }) {
  const availableSocials = socials.filter((social) => Boolean(social.url));

  return (
    <div className="flex items-center gap-2" aria-label="Social links">
      {availableSocials.map((social) => {
        const Icon = iconMap[social.id];

        return (
          <SocialButton
            key={social.id}
            icon={Icon}
            href={social.url}
            label={social.label}
            variant="ghost"
          />
        );
      })}
    </div>
  );
}
