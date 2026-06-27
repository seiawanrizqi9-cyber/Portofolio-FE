import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'IntiFinance',
    description:
      'Multi tenant finance management application with authentication and role based access.',
    technologies: [
      'NestJS',
      'MongoDB',
      'JWT',
      'TypeScript',
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce Lite',
    description: 'Modern React E-Commerce Platform.',
    technologies: [
      'React',
      'Tailwind CSS',
      'Typescript'
    ],
    featured: true,
  },
  {
    id: 3,
    title: 'Habbit Forge Backend',
    description: 'Habit Tracker Application with gamification.',
    technologies: [
      'Node.js',
      'Typescript',
      'MongoDB'
    ],
    featured: true,
  },
  {
    id: 4,
    title: 'Kinerjahub Backend', 
    description: 'Performance Assessment Management System.',
    technologies: [
      'NestJS',
      'PostgreSql',
      'Typescript'
    ],
    featured: true,
  }
];