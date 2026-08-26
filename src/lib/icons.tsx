import {
  Code2,
  ShieldCheck,
  GitBranch,
  Database,
  Mail,
  MapPin,
  Phone,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Link,
  type LucideProps,
} from 'lucide-react';
import type { FC } from 'react';

const iconMap: Record<string, FC<LucideProps>> = {
  Code2,
  ShieldCheck,
  GitBranch,
  Database,
  Mail,
  MapPin,
  Phone,
  Globe,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Link,
};

export function getIcon(name: string, props?: LucideProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
