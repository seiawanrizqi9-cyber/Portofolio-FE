import { type LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon?: LucideIcon | string;
}