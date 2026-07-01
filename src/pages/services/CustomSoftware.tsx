import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CogIcon,
  CodeBracketIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CloudIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const CustomSoftware = () => {
  const technologies = [
    { name: 'React/Next.js', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Python/Django', category: 'Backend', icon: '🐍' },
    { name: 'Java/Spring', category: 'Enterprise', icon: '☕' },
    { name: 'C#/.NET', category: 'Enterprise', icon: '🔷' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'MongoDB', category: 'Database', icon: '🍃' },
    { name: 'AWS/Azure', category: 'Cloud', icon: '☁️' }
  ];

  const features = [
    {
      icon: <CogIcon className="h-8 w-8 text-primary" />,
      title: 'Tailored Solutions',
      description: 'Custom-built software designed specifically for your business requirements and workflows.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, authentication, and compliance standards.'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
      title: 'Scalable Architecture',
      description: 'Built to grow with your business, handling increased users and data seamlessly.'
    },
    {
      icon: <CogIcon className="h-8 w-8 text-primary" />,
      title: 'Data Integration',
      description: 'Seamless integration with existing systems, databases, and third-party services.'
    },
    {
      icon: <CloudIcon className="h-8 w-8 text-primary" />,
      title: 'Cloud-Native',
      description: 'Modern cloud architecture for reliability, performance, and cost optimization.'
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-primary" />,
      title: 'Cross-Platform',
      description: 'Works across web, mobile, and desktop platforms for maximum accessibility.'
    }
  ];


  const solutionTypes = [
    {
      title: 'Business Management Systems',
      description: 'ERP, CRM, and workflow automation',
      icon: '📊',
      benefits: ['Process automation', 'Data centralization', 'Reporting dashboards', 'User management']
    },
    {
      title: 'E-commerce Platforms',
      description: 'Custom online stores and marketplaces',
      icon: '🛒',
      benefits: ['Payment integration', 'Inventory management', 'Order processing', 'Customer analytics']
    },
    {
      title: 'Healthcare Solutions',
      description: 'Medical practice and patient management',
      icon: '🏥',
      benefits: ['Patient records', 'Appointment scheduling', 'Billing systems', 'HIPAA compliance']
    },
    {
      title: 'Financial Applications',
      description: 'Banking, fintech, and accounting software',
      icon: '💰',
      benefits: ['Transaction processing', 'Risk management', 'Compliance reporting', 'Data security']
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Manufacturing Corp',
      text: 'ArionexTech built a comprehensive ERP system that transformed our operations. Productivity increased by 45% within 6 months!',
      rating: 5,
      image: 'RK'
    },
    {
      name: 'Dr. Priya Sharma',
      company: 'Healthcare Clinic',
      text: 'The custom patient management system streamlined our entire practice. The team understood our needs perfectly.',
      rating: 5,
      image: 'PS'
    }
  ];

  return (
    <div className="min-h-screen section-surface-soft">
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
                <CodeBracketIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Custom Software Development</h1>
                <p className="text-lg text-slate-400">Tailored solutions for your business</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Transform your business with custom software solutions designed specifically for your unique requirements and workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get Custom Quote
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <RocketLaunchIcon className="h-4 w-4 mr-2" />
                View Portfolio
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
              Technologies We Use
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Modern technology stack for building robust, scalable software solutions.
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
      <section className="py-20 section-surface">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">
              Why Choose Custom Software?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Benefits of custom software development over off-the-shelf solutions.
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

      {/* Solution Types Section */}
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
              Software Solutions We Build
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Industry-specific software solutions tailored to your business domain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionTypes.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{solution.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{solution.title}</h3>
                    <p className="text-slate-400 mb-4">{solution.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
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

      {/* Development Process Section */}
      <section className="py-20 section-surface">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">
              Our Development Process
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Structured approach ensuring quality delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Requirements Analysis', desc: 'Understanding your business needs and technical requirements' },
              { step: '02', title: 'Design & Planning', desc: 'Creating architecture, wireframes, and project roadmap' },
              { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous testing and feedback' },
              { step: '04', title: 'Deployment & Support', desc: 'Go-live support and ongoing maintenance services' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{process.title}</h3>
                <p className="text-slate-400 text-sm">{process.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 section-surface">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-heading">
              Client Success Stories
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
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create software that perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-ghost inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start Your Project
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

export default CustomSoftware;
