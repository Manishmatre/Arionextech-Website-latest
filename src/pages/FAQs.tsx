import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import PageHero from '../components/premium/PageHero';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What services does ArionexTech offer?',
          answer: 'We offer comprehensive technology solutions including web development, mobile app development, cloud solutions, AI/ML implementation, cybersecurity services, and DevOps consulting. We also develop custom software products for various industries.'
        },
        {
          question: 'How long has ArionexTech been in business?',
          answer: 'ArionexTech has been serving clients since 2018, with over 5 years of experience in delivering innovative software solutions. We have successfully completed 50+ projects for 40+ satisfied clients.'
        },
        {
          question: 'Where is ArionexTech located?',
          answer: 'We are based in Jabalpur, Madhya Pradesh, India. While our headquarters is in Jabalpur, we serve clients globally and have worked with businesses across 10+ countries.'
        }
      ]
    },
    {
      category: 'Services & Pricing',
      questions: [
        {
          question: 'What are your pricing models?',
          answer: 'We offer flexible pricing models including project-based pricing, monthly subscriptions for our SaaS products, and custom enterprise solutions. Our service packages start from ₹25,000 for basic websites and scale up based on complexity and requirements.'
        },
        {
          question: 'Do you offer ongoing support and maintenance?',
          answer: 'Yes, we provide comprehensive support and maintenance packages. Our Starter package includes 3 months support, Professional includes 6 months, and Enterprise includes 12 months. We also offer extended support contracts.'
        },
        {
          question: 'Can you work with existing systems and technologies?',
          answer: 'Absolutely! We have experience integrating with various existing systems, APIs, and technologies. We can modernize legacy systems, create APIs for integration, and ensure seamless connectivity with your current infrastructure.'
        },
        {
          question: 'Do you provide custom software development?',
          answer: 'Yes, custom software development is one of our core specialties. We develop tailored solutions for specific business needs, including CRM systems, inventory management, educational platforms, and industry-specific applications.'
        }
      ]
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What technologies do you work with?',
          answer: 'We work with modern technologies including React, Node.js, Python, TypeScript, cloud platforms (AWS, Azure, Google Cloud), databases (MongoDB, PostgreSQL, MySQL), and mobile frameworks (React Native, Flutter). We stay updated with the latest tech trends.'
        },
        {
          question: 'Do you provide cloud deployment and hosting?',
          answer: 'Yes, we offer complete cloud deployment services on major platforms like AWS, Azure, and Google Cloud. We handle everything from infrastructure setup to CI/CD pipelines, monitoring, and scaling.'
        },
        {
          question: 'How do you ensure data security and privacy?',
          answer: 'We implement industry-standard security practices including encryption, secure authentication, regular security audits, and compliance with data protection regulations. All our applications are built with security-first approach.'
        },
        {
          question: 'Do you offer API development and integration?',
          answer: 'Yes, we specialize in RESTful API development, GraphQL APIs, and third-party integrations. We can create APIs for your applications or integrate with existing services like payment gateways, CRMs, and other business tools.'
        }
      ]
    },
    {
      category: 'Process & Timeline',
      questions: [
        {
          question: 'What is your typical project timeline?',
          answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, complex web applications take 2-6 months, and enterprise solutions can take 6-12 months. We provide detailed timelines during project planning.'
        },
        {
          question: 'How do you handle project communication?',
          answer: 'We maintain transparent communication through regular updates, weekly progress reports, and dedicated project managers. We use tools like Slack, email, and video calls to ensure you are always informed about project status.'
        },
        {
          question: 'Do you provide project documentation?',
          answer: 'Yes, we provide comprehensive documentation including technical specifications, user manuals, API documentation, and deployment guides. Documentation is included in all our service packages.'
        },
        {
          question: 'What is your revision and feedback process?',
          answer: 'We follow an iterative development process with regular feedback cycles. We provide demos at key milestones and incorporate your feedback. Most packages include multiple revision rounds to ensure the final product meets your expectations.'
        }
      ]
    },
    {
      category: 'Products',
      questions: [
        {
          question: 'What software products do you offer?',
          answer: 'We offer several SaaS products including ArionexCRM for customer management, EduTrack Pro for educational institutions, CloudSync for file management, DataViz Analytics for business intelligence, and more. Check our Products page for details.'
        },
        {
          question: 'Can I customize your existing products?',
          answer: 'Yes, our products are designed to be customizable. We can add custom features, integrate with your existing systems, and modify the interface to match your brand and specific requirements.'
        },
        {
          question: 'Do you offer free trials for your products?',
          answer: 'Yes, most of our products offer free trials or demo versions. You can test the functionality and see if it fits your needs before making a purchase decision.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 1000 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#050508] min-h-screen">
      <PageHero
        badge="Support Center"
        title="Frequently Asked"
        highlight="Questions"
        description="Find answers to common questions about our services, products, and processes. Get the information you need to make informed decisions."
      />

      {/* FAQs Content */}
      <section className="py-20 bg-[#08080e]">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-primary">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = categoryIndex * 1000 + questionIndex;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div
                        key={questionIndex}
                        className="card-premium border border-white/10 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#08080e] transition-colors"
                        >
                          <span className="text-lg font-medium text-white pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUpIcon className="h-5 w-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-primary flex-shrink-0" />
                          )}
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: isOpen ? 'auto' : 0,
                            opacity: isOpen ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 text-slate-400 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 cta-section text-white">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-8 opacity-90">
              Can't find what you're looking for? Get in touch with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn btn-ghost"
              >
                Contact Us
              </a>
              <a
                href="mailto:info@arionextech.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-colors"
              >
                Email Support
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
