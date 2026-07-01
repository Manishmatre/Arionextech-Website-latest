import type { ProductDetail } from '../types/product';

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80';

export const STATIC_PRODUCTS: ProductDetail[] = [
  {
    id: 'static-construction-erp',
    slug: 'complete-construction-erp',
    title: 'Complete Construction ERP',
    shortDescription: 'End-to-end ERP for builders, contractors, and infrastructure companies.',
    description:
      'A comprehensive construction management platform covering project planning, BOQ, procurement, site progress, subcontractor billing, GST compliance, and executive dashboards. Built for Indian construction workflows with multi-project and multi-company support.',
    category: 'Construction',
    productType: 'Industry Solution',
    status: 'Active',
    version: '2.0',
    features: [
      'Project & site management',
      'BOQ and material tracking',
      'GST billing & invoicing',
      'Subcontractor & labour management',
      'Purchase orders & inventory',
      'Financial reports & dashboards',
      'Document management',
      'Mobile-friendly site updates',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    highlights: [
      'Purpose-built for construction companies in India',
      'Reduces manual spreadsheets and duplicate data entry',
      'Deployed on secure cloud infrastructure',
    ],
  },
  {
    id: 'static-dental-clinic',
    slug: 'dental-clinic-management',
    title: 'Dental Clinic Management',
    shortDescription: 'Practice management software for modern dental clinics.',
    description:
      'DentalOs-style clinic management covering patient EMR, appointment scheduling, treatment plans, billing, insurance workflows, and practice analytics. Designed for single-chair clinics scaling to multi-location practices.',
    category: 'Dental',
    productType: 'SaaS Platform',
    status: 'Active',
    version: '1.5',
    features: [
      'Patient EMR & treatment history',
      'Appointment scheduling',
      'Billing & payment tracking',
      'Prescription & lab orders',
      'Staff & doctor dashboards',
      'SMS/email reminders',
      'Revenue & patient analytics',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1629909613654-28e396c87be0?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    highlights: [
      'Faster patient check-in and checkout',
      'HIPAA-minded data security practices',
      'Customizable for your clinic workflow',
    ],
  },
  {
    id: 'static-school-erp',
    slug: 'school-management-erp',
    title: 'School Management ERP',
    shortDescription: 'All-in-one platform for schools and educational institutes.',
    description:
      'Manage admissions, fee collection, attendance, exams, timetables, parent communication, and academic reporting from a single cloud platform. Trusted by institutes from K-12 to paramedical colleges.',
    category: 'School',
    productType: 'Industry Solution',
    status: 'Active',
    version: '3.1',
    features: [
      'Online admissions portal',
      'Fee management & receipts',
      'Student & parent portals',
      'Attendance & exam management',
      'Timetable & faculty scheduling',
      'SMS/email notifications',
      'Report cards & analytics',
    ],
    heroImage:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    gallery: [],
    highlights: [
      'Reduces admin workload for school staff',
      'Improves parent engagement and transparency',
      'Multi-branch and multi-academic-year support',
    ],
  },
];

export function getDefaultProductImage(category: string): string {
  const map: Record<string, string> = {
    Construction:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
    Dental:
      'https://images.unsplash.com/photo-1629909613654-28e396c87be0?auto=format&fit=crop&w=1200&q=80',
    School:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    Hospital:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    ERP: DEFAULT_IMG,
  };
  return map[category] || DEFAULT_IMG;
}
