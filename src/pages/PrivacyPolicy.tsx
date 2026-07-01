import { motion } from 'framer-motion';
import { LegalPageLayout } from '../components/premium/ContentPageShell';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal Information: When you use our services, we may collect personal information such as your name, email address, phone number, company name, and billing information.',
        'Usage Data: We automatically collect information about how you interact with our website and services, including IP addresses, browser type, pages visited, and time spent on our site.',
        'Cookies and Tracking: We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.',
        'Communication Data: When you contact us, we collect the information you provide in your communications with our support team.'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Service Delivery: To provide, maintain, and improve our software development services and products.',
        'Communication: To respond to your inquiries, provide customer support, and send important updates about our services.',
        'Billing and Payments: To process payments, send invoices, and manage your account.',
        'Marketing: To send you promotional materials about our services (with your consent), which you can opt out of at any time.',
        'Legal Compliance: To comply with applicable laws, regulations, and legal processes.',
        'Security: To protect our services, prevent fraud, and ensure the security of our systems and your data.'
      ]
    },
    {
      title: 'Information Sharing and Disclosure',
      content: [
        'Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services, such as payment processors, hosting providers, and analytics services.',
        'Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.',
        'Legal Requirements: We may disclose your information when required by law, court order, or government request.',
        'Consent: We may share your information with your explicit consent for specific purposes not covered in this policy.',
        'We do not sell, rent, or trade your personal information to third parties for their marketing purposes.'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'Encryption: We use industry-standard encryption to protect your data both in transit and at rest.',
        'Access Controls: We implement strict access controls to ensure only authorized personnel can access your information.',
        'Regular Audits: We conduct regular security audits and assessments to identify and address potential vulnerabilities.',
        'Secure Infrastructure: Our systems are hosted on secure, regularly updated infrastructure with multiple layers of protection.',
        'Employee Training: Our team is trained on data protection best practices and confidentiality requirements.',
        'While we implement robust security measures, no system is 100% secure. We continuously work to improve our security practices.'
      ]
    },
    {
      title: 'Data Retention',
      content: [
        'Service Data: We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy.',
        'Legal Requirements: Some information may be retained longer to comply with legal obligations, resolve disputes, or enforce our agreements.',
        'Account Deletion: When you request account deletion, we will delete or anonymize your personal information, except where retention is required by law.',
        'Backup Systems: Information may persist in backup systems for a limited time after deletion for disaster recovery purposes.'
      ]
    },
    {
      title: 'Your Rights and Choices',
      content: [
        'Access: You have the right to request access to the personal information we hold about you.',
        'Correction: You can request correction of inaccurate or incomplete personal information.',
        'Deletion: You may request deletion of your personal information, subject to legal and contractual obligations.',
        'Portability: You have the right to request a copy of your data in a structured, machine-readable format.',
        'Opt-out: You can opt out of marketing communications at any time by following the unsubscribe instructions in our emails.',
        'Cookies: You can control cookie preferences through your browser settings.',
        'To exercise these rights, please contact us at privacy@arionextech.com.'
      ]
    },
    {
      title: 'International Data Transfers',
      content: [
        'Global Services: As we serve clients globally, your information may be transferred to and processed in countries other than your country of residence.',
        'Adequate Protection: We ensure that international transfers are protected by appropriate safeguards, such as standard contractual clauses or adequacy decisions.',
        'Data Processing Agreements: We enter into data processing agreements with our service providers to ensure your data is protected according to applicable privacy laws.'
      ]
    },
    {
      title: 'Children\'s Privacy',
      content: [
        'Age Restriction: Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.',
        'Parental Consent: If we become aware that we have collected information from a child under 13 without parental consent, we will take steps to delete that information.',
        'Educational Products: For our educational software products used in schools, we comply with applicable laws regarding student data privacy, including FERPA where applicable.'
      ]
    }
  ];

  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="Your privacy is important to us. This policy explains how we collect, use, and protect your information."
      updated="January 1, 2024"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="legal-section space-y-4"
      >
        <p>
          ArionexTech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and ensuring the security of your personal information.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website,
          use our services, or interact with our software products.
        </p>
        <p>
          By using our services, you agree to the collection and use of information in accordance with this policy.
          If you do not agree with our policies and practices, please do not use our services.
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
          <h2>{index + 1}. {section.title}</h2>
          {section.content.map((item) => (
            <p key={item.slice(0, 48)}>{item}</p>
          ))}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="legal-section"
      >
        <h2>9. Contact Us</h2>
        <div className="legal-contact-box mt-4 space-y-2">
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <p><strong>Email:</strong> privacy@arionextech.com</p>
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
        <h3>Policy Updates</h3>
        <p className="mt-2">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy
          periodically for any changes.
        </p>
      </motion.div>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
