import { motion } from 'framer-motion';
import { LegalPageLayout } from '../components/premium/ContentPageShell';

const TermsOfService = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using ArionexTech\'s website and services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'These terms apply to all visitors, users, and others who access or use our services.'
      ]
    },
    {
      title: 'Description of Services',
      content: [
        'ArionexTech provides software development services including web development, mobile application development, cloud solutions, AI/ML implementation, and custom software products.',
        'We also offer SaaS products including CRM systems, educational management software, analytics platforms, and other business solutions.',
        'Our services are provided "as is" and we reserve the right to modify, suspend, or discontinue any aspect of our services at any time.',
        'We may impose limits on certain features or restrict access to parts or all of our services without notice or liability.'
      ]
    },
    {
      title: 'User Accounts and Registration',
      content: [
        'To access certain features of our services, you may be required to create an account and provide accurate, current, and complete information.',
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        'You agree to notify us immediately of any unauthorized use of your account or any other breach of security.',
        'We reserve the right to suspend or terminate accounts that violate these terms or are inactive for extended periods.',
        'You must be at least 18 years old to create an account and use our services.'
      ]
    },
    {
      title: 'Payment Terms',
      content: [
        'Payment terms vary by service type and are specified in individual service agreements or product subscriptions.',
        'For project-based services, payment schedules will be outlined in the project contract or statement of work.',
        'SaaS product subscriptions are billed monthly or annually as selected during signup.',
        'All fees are non-refundable unless otherwise specified in writing or required by applicable law.',
        'We reserve the right to change our pricing with 30 days\' notice for ongoing subscriptions.',
        'Failure to pay fees may result in suspension or termination of services.'
      ]
    },
    {
      title: 'Intellectual Property Rights',
      content: [
        'All content, features, and functionality of our services are owned by ArionexTech and are protected by copyright, trademark, and other intellectual property laws.',
        'For custom development projects, intellectual property ownership will be specified in the project agreement.',
        'You retain ownership of any content, data, or materials you provide to us.',
        'We grant you a limited, non-exclusive, non-transferable license to use our services in accordance with these terms.',
        'You may not reproduce, distribute, modify, or create derivative works of our services without explicit written permission.',
        'Our proprietary software, methodologies, and trade secrets remain our exclusive property.'
      ]
    },
    {
      title: 'User Conduct and Prohibited Uses',
      content: [
        'You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services.',
        'Prohibited activities include but are not limited to: attempting to gain unauthorized access to our systems, transmitting malicious code, engaging in fraudulent activities, or violating any applicable laws.',
        'You may not use our services to store, transmit, or distribute content that is illegal, harmful, threatening, abusive, or violates the rights of others.',
        'Commercial use of our services outside of intended business purposes requires explicit written permission.',
        'We reserve the right to investigate and take appropriate action against users who violate these terms.'
      ]
    },
    {
      title: 'Data Protection and Privacy',
      content: [
        'Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.',
        'You are responsible for ensuring that any data you provide to us complies with applicable data protection laws.',
        'For custom development projects, data handling and protection requirements will be specified in separate data processing agreements.',
        'We implement appropriate technical and organizational measures to protect your data, but cannot guarantee absolute security.',
        'You agree to promptly notify us of any suspected data breaches or security incidents.'
      ]
    },
    {
      title: 'Service Level and Availability',
      content: [
        'We strive to maintain high availability of our services but do not guarantee uninterrupted access.',
        'Scheduled maintenance will be performed with advance notice when possible.',
        'We are not liable for service interruptions due to factors beyond our reasonable control, including internet connectivity issues, third-party service failures, or force majeure events.',
        'Service level agreements for specific services will be detailed in separate agreements.',
        'We reserve the right to implement fair usage policies to ensure service quality for all users.'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'To the maximum extent permitted by law, ArionexTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
        'Our total liability for any claims arising from or related to our services shall not exceed the amount paid by you for the services in the 12 months preceding the claim.',
        'We do not warrant that our services will meet your specific requirements or that they will be error-free or uninterrupted.',
        'You acknowledge that you use our services at your own risk and that we cannot guarantee specific outcomes or results.',
        'Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so some of the above limitations may not apply to you.'
      ]
    },
    {
      title: 'Indemnification',
      content: [
        'You agree to indemnify and hold harmless ArionexTech, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these terms.',
        'This includes but is not limited to legal fees, court costs, and damages awarded against us.',
        'We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you.',
        'Your indemnification obligations will survive termination of these terms and your use of our services.'
      ]
    },
    {
      title: 'Termination',
      content: [
        'Either party may terminate these terms at any time with or without cause by providing written notice.',
        'We may immediately suspend or terminate your access to our services if you violate these terms.',
        'Upon termination, your right to use our services will cease immediately.',
        'Provisions that by their nature should survive termination will remain in effect, including payment obligations, intellectual property rights, and limitation of liability.',
        'We will provide reasonable assistance in data export upon termination, subject to our data retention policies.'
      ]
    }
  ];

  return (
    <LegalPageLayout
      title="Terms of Service"
      description="Please read these terms carefully before using our services."
      updated="January 1, 2024"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="legal-section space-y-4"
      >
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of ArionexTech&apos;s website, services, and products.
          These Terms constitute a legally binding agreement between you and ArionexTech Software Private Limited
          (&quot;ArionexTech,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        </p>
        <p>
          Please read these Terms carefully before accessing or using our services. By accessing or using any part of our services,
          you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access our services.
        </p>
      </motion.div>

      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="legal-section space-y-4"
        >
          <h2>
            {index + 1}. {section.title}
          </h2>
          {section.content.map((item) => (
            <p key={item.slice(0, 48)}>{item}</p>
          ))}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="legal-section space-y-4"
      >
        <h2>12. Governing Law and Dispute Resolution</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
        </p>
        <p>
          Any disputes arising from or relating to these Terms or our services shall be resolved through binding arbitration in Jabalpur, Madhya Pradesh, India, in accordance with the Arbitration and Conciliation Act, 2015.
        </p>
        <p>
          You agree to submit to the personal jurisdiction of the courts located in Jabalpur, Madhya Pradesh, India for any actions not subject to arbitration.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="legal-section space-y-4"
      >
        <h2>13. Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect.
        </p>
        <p>
          What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="legal-section"
      >
        <h2>14. Contact Information</h2>
        <div className="legal-contact-box mt-4 space-y-2">
          <p>If you have any questions about these Terms of Service, please contact us:</p>
          <p><strong>Email:</strong> legal@arionextech.com</p>
          <p><strong>Address:</strong> 43A, Vijay Nagar, Jabalpur, MP 482002, India</p>
          <p><strong>Phone:</strong> +91 88170 88544</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="legal-callout"
      >
        <h3>Acknowledgment</h3>
        <p className="mt-2">
          By using our services, you acknowledge that you have read these Terms of Service, understood them,
          and agree to be bound by them. If you are entering into these Terms on behalf of a company or other legal entity,
          you represent that you have the authority to bind such entity to these Terms.
        </p>
      </motion.div>
    </LegalPageLayout>
  );
};

export default TermsOfService;
