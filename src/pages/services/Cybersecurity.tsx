import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  BugAntIcon,
  FingerPrintIcon,
  DocumentMagnifyingGlassIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const Cybersecurity = () => {
  const technologies = [
    { name: 'Penetration Testing', category: 'Security Testing', icon: '🔍' },
    { name: 'SIEM', category: 'Monitoring', icon: '📊' },
    { name: 'Firewall', category: 'Network Security', icon: '🛡️' },
    { name: 'Encryption', category: 'Data Protection', icon: '🔐' },
    { name: 'Multi-Factor Auth', category: 'Access Control', icon: '🔑' },
    { name: 'Vulnerability Scan', category: 'Assessment', icon: '🔎' },
    { name: 'Incident Response', category: 'Emergency', icon: '🚨' },
    { name: 'Compliance', category: 'Governance', icon: '📋' }
  ];

  const features = [
    {
      icon: <BugAntIcon className="h-8 w-8 text-primary" />,
      title: 'Vulnerability Assessment',
      description: 'Comprehensive security testing to identify and fix vulnerabilities.'
    },
    {
      icon: <FingerPrintIcon className="h-8 w-8 text-primary" />,
      title: 'Identity Management',
      description: 'Secure user authentication and access control systems.'
    },
    {
      icon: <DocumentMagnifyingGlassIcon className="h-8 w-8 text-primary" />,
      title: 'Security Audits',
      description: 'Regular security assessments and compliance audits.'
    },
    {
      icon: <ServerIcon className="h-8 w-8 text-primary" />,
      title: 'Network Security',
      description: 'Firewall configuration and network monitoring solutions.'
    },
    {
      icon: <LockClosedIcon className="h-8 w-8 text-primary" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for sensitive data protection.'
    },
    {
      icon: <ExclamationTriangleIcon className="h-8 w-8 text-primary" />,
      title: 'Incident Response',
      description: '24/7 monitoring and rapid response to security incidents.'
    }
  ];


  const services = [
    {
      title: 'Penetration Testing',
      description: 'Ethical hacking to find security weaknesses',
      icon: '🔍',
      benefits: ['Vulnerability discovery', 'Risk assessment', 'Security validation', 'Compliance']
    },
    {
      title: 'Security Monitoring',
      description: '24/7 monitoring and threat detection',
      icon: '👁️',
      benefits: ['Real-time alerts', 'Threat intelligence', 'Incident response', 'Log analysis']
    },
    {
      title: 'Compliance Management',
      description: 'GDPR, ISO 27001, and other compliance',
      icon: '📋',
      benefits: ['Regulatory compliance', 'Audit support', 'Policy development', 'Risk management']
    },
    {
      title: 'Security Training',
      description: 'Employee security awareness programs',
      icon: '🎓',
      benefits: ['Phishing awareness', 'Security best practices', 'Incident reporting', 'Policy training']
    }
  ];

  const testimonials = [
    {
      name: 'Rohit Sharma',
      company: 'SecureBank Ltd',
      text: 'ArionexTech identified critical vulnerabilities we missed and helped us achieve ISO 27001 compliance. Excellent security expertise!',
      rating: 5,
      image: 'RS'
    },
    {
      name: 'Priya Nair',
      company: 'HealthTech Solutions',
      text: 'Their cybersecurity implementation protected us from 3 major attacks this year. Outstanding proactive security!',
      rating: 5,
      image: 'PN'
    }
  ];

  return (
    <div className="bg-[#050508] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden mesh-bg border-b border-white/8">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <ShieldCheckIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Cybersecurity</h1>
                <p className="text-lg text-slate-400">Comprehensive security solutions</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Protect your business with enterprise-grade cybersecurity solutions, threat detection, and compliance management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get Security Assessment
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <DocumentMagnifyingGlassIcon className="h-4 w-4 mr-2" />
                View Security Reports
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">
              Security Technologies & Tools
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Advanced security tools and methodologies to protect your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6 text-center hover:shadow-lg transition-all duration-300 border border-white/10"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-sm text-slate-500">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#08080e]">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">
              Security Services We Provide
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Complete cybersecurity solutions to protect your digital assets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">
              Specialized Security Services
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Tailored security solutions for different business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                    <p className="text-slate-400 mb-4">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-slate-400">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">
              Security Success Stories
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-400 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold">{testimonial.image}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cta-section text-white">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free security assessment and protect your business from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-ghost inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start Security Assessment
              </Link>
              <Link to="/services" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary inline-flex items-center justify-center">
                View All Services
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Cybersecurity;
