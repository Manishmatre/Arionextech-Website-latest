import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ServerStackIcon,
  CloudArrowUpIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CommandLineIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const DevOps = () => {
  const technologies = [
    { name: 'Docker', category: 'Containerization', icon: '🐳' },
    { name: 'Kubernetes', category: 'Orchestration', icon: '☸️' },
    { name: 'Jenkins', category: 'CI/CD', icon: '🔧' },
    { name: 'GitLab CI', category: 'CI/CD', icon: '🦊' },
    { name: 'Terraform', category: 'Infrastructure', icon: '🏗️' },
    { name: 'Ansible', category: 'Automation', icon: '📋' },
    { name: 'Prometheus', category: 'Monitoring', icon: '📊' },
    { name: 'ELK Stack', category: 'Logging', icon: '🔍' }
  ];

  const features = [
    {
      icon: <RocketLaunchIcon className="h-8 w-8 text-primary" />,
      title: 'CI/CD Pipelines',
      description: 'Automated build, test, and deployment pipelines for faster releases.'
    },
    {
      icon: <CloudArrowUpIcon className="h-8 w-8 text-primary" />,
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure through code for consistency and scalability.'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
      title: 'Monitoring & Alerting',
      description: '24/7 monitoring with real-time alerts and performance metrics.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: 'Security Integration',
      description: 'Security scanning and compliance checks integrated into pipelines.'
    },
    {
      icon: <BoltIcon className="h-8 w-8 text-primary" />,
      title: 'Auto-scaling',
      description: 'Automatic scaling based on demand and performance metrics.'
    },
    {
      icon: <ArrowPathIcon className="h-8 w-8 text-primary" />,
      title: 'Backup & Recovery',
      description: 'Automated backup strategies and disaster recovery planning.'
    }
  ];


  const services = [
    {
      title: 'CI/CD Implementation',
      description: 'Automated build, test, and deployment workflows',
      icon: '🚀',
      benefits: ['Faster releases', 'Reduced errors', 'Automated testing', 'Quality gates']
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms',
      icon: '☁️',
      benefits: ['Zero downtime', 'Cost optimization', 'Scalability', 'Security']
    },
    {
      title: 'Container Orchestration',
      description: 'Docker and Kubernetes implementation',
      icon: '🐳',
      benefits: ['Resource efficiency', 'Easy scaling', 'Portability', 'Microservices']
    },
    {
      title: 'Infrastructure Automation',
      description: 'Infrastructure as Code with Terraform',
      icon: '🏗️',
      benefits: ['Consistency', 'Version control', 'Reproducibility', 'Cost control']
    }
  ];

  const testimonials = [
    {
      name: 'Kiran Patel',
      company: 'TechFlow Solutions',
      text: 'ArionexTech reduced our deployment time from hours to minutes with their DevOps implementation. Incredible efficiency gains!',
      rating: 5,
      image: 'KP'
    },
    {
      name: 'Neha Gupta',
      company: 'CloudFirst Technologies',
      text: 'Their DevOps expertise helped us achieve 99.9% uptime and 50% cost reduction. Outstanding results!',
      rating: 5,
      image: 'NG'
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
                <ServerStackIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white">DevOps Services</h1>
                <p className="text-lg text-slate-400">Streamlined development & operations</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Accelerate your software delivery with automated CI/CD pipelines, infrastructure as code, and comprehensive monitoring solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get DevOps Assessment
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <CommandLineIcon className="h-4 w-4 mr-2" />
                View Case Studies
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
              DevOps Tools & Technologies
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Industry-leading tools for building robust DevOps pipelines.
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
              DevOps Capabilities
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive DevOps services that transform your development workflow.
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
              DevOps Services We Offer
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              End-to-end DevOps solutions for modern software development.
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
              DevOps Success Stories
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
              Ready to Accelerate Your Development?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free DevOps assessment and roadmap for your development workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-ghost inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start DevOps Journey
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

export default DevOps;
