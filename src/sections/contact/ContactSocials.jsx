import { memo } from 'react';
import { Github, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';
import { SocialButton } from '@/components/ui/SocialButton';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  phone: Phone,
  whatsapp: MessageCircle,
};

const ContactSocialsComponent = function ContactSocials({ socials }) {
  const availableSocials = socials.filter((social) => Boolean(social.url));

  return (
    <div className="flex flex-wrap items-center gap-3" aria-label="Social links">
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
};

export const ContactSocials = memo(ContactSocialsComponent);
