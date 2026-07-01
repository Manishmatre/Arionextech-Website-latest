export interface ProductDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  productType?: string;
  status: string;
  version?: string;
  features: string[];
  heroImage?: string;
  gallery: string[];
  demoUrl?: string;
  documentationUrl?: string;
  downloadUrl?: string;
  isFeatured?: boolean;
  isFromErp?: boolean;
  highlights?: string[];
}

export const PRODUCT_CATEGORY_LABELS: Record<string, string> = {
  Construction: 'Construction & Infrastructure',
  Dental: 'Dental & Healthcare',
  Hospital: 'Hospital Management',
  School: 'Education & Schools',
  ERP: 'Enterprise ERP',
  CRM: 'Customer Relationship',
  HRM: 'Human Resources',
  Billing: 'Billing & Finance',
  Inventory: 'Inventory Management',
  Library: 'Library Systems',
  Other: 'Industry Solutions',
};

export const CATEGORY_BENEFITS: Record<string, string[]> = {
  Construction: [
    'Track projects, BOQ, and site progress in one system',
    'GST-compliant billing and subcontractor management',
    'Real-time visibility for owners and site managers',
  ],
  Dental: [
    'Patient records, appointments, and billing unified',
    'Reduce no-shows with automated reminders',
    'Analytics to grow clinic revenue sustainably',
  ],
  School: [
    'Admissions, fees, and academics on one platform',
    'Parent and student portals for transparency',
    'Scales from single campus to multi-branch institutes',
  ],
  ERP: [
    'Modular architecture that grows with your business',
    'Role-based access across departments',
    'Integrations with accounting, HR, and operations',
  ],
};
