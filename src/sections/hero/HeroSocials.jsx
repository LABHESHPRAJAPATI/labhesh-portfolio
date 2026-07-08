import { SocialLinks } from '@/components/common/SocialLinks';
import { socials } from '@/data/socials';

/**
 * Hero social links.
 */
export function HeroSocials() {
  return <SocialLinks socials={socials} />;
}
