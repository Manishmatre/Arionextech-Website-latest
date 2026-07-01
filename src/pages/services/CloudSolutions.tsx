import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CloudArrowUpIcon,
  ServerIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const CloudSolutions = () => {
  const cloudServices = [
    { name: 'AWS', icon: '☁️', description: 'Amazon Web Services' },
    { name: 'Azure', icon: '🔷', description: 'Microsoft Azure Cloud' },
    { name: 'Google Cloud', icon: '🌐', description: 'Google Cloud Platform' },
    { name: 'Digital Ocean', icon: '🌊', description: 'Simple cloud hosting' }
  ];

  const features = [
    {
      icon: <ServerIcon className="h-8 w-8 text-primary" />,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling solutions that grow with your business demands and traffic.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: 'Enterprise Security',
      description: 'Advanced security measures including encryption, firewalls, and compliance.'
    },
    {
      icon: <ArrowPathIcon className="h-8 w-8 text-primary" />,
      title: 'Automated Backups',
      description: 'Regular automated backups with disaster recovery and data protection.'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
      title: 'Performance Monitoring',
      description: '24/7 monitoring with real-time alerts and performance optimization.'
    },
    {
      icon: <CogIcon className="h-8 w-8 text-primary" />,
      title: 'DevOps Integration',
      description: 'CI/CD pipelines and automated deployment workflows.'
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-primary" />,
      title: 'Global CDN',
      description: 'Content delivery network for faster global access and performance.'
    }
  ];


  const solutions = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration from on-premise to cloud',
      icon: '🚀',
      benefits: ['Zero downtime', 'Data integrity', 'Cost optimization', 'Performance boost']
    },
    {
      title: 'Cloud Storage',
      description: 'Secure and scalable data storage solutions',
      icon: '💾',
      benefits: ['Unlimited capacity', 'Global access', 'Auto-sync', 'Version control']
    },
    {
      title: 'Cloud Hosting',
      description: 'Reliable hosting for websites and applications',
      icon: '🌐',
      benefits: ['99.9% uptime', 'Auto-scaling', 'SSL included', 'CDN integration']
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive backup and recovery solutions',
      icon: '🛡️',
      benefits: ['Automated backups', 'Quick recovery', 'Data protection', 'Business continuity']
    }
  ];

  const testimonials = [
    {
      name: 'Vikram Singh',
      company: 'TechCorp Industries',
      text: 'ArionexTech migrated our entire infrastructure to the cloud seamlessly. Our performance improved by 40% and costs reduced by 30%.',
      rating: 5,
      image: 'VS'
    },
    {
      name: 'Meera Gupta',
      company: 'DataFlow Solutions',
      text: 'Their cloud monitoring and support is exceptional. We have had zero downtime since the migration 18 months ago.',
      rating: 5,
      image: 'MG'
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
                <CloudArrowUpIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Cloud Solutions</h1>
                <p className="text-lg text-slate-400">Scalable & secure cloud infrastructure</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Transform your business with secure, scalable, and cost-effective cloud infrastructure solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get Cloud Assessment
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <ChartBarIcon className="h-4 w-4 mr-2" />
                View Case Studies
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
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
              Cloud Platforms We Work With
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We are certified partners with leading cloud service providers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cloudServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6 text-center hover:shadow-lg transition-all duration-300 border border-white/10"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-sm text-slate-400">{service.description}</p>
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
              Cloud Infrastructure Features
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade features that ensure reliability, security, and performance.
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

      {/* Solutions Section */}
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
              Cloud Solutions We Offer
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive cloud services to meet all your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
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
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free cloud assessment and migration strategy tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-ghost inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start Cloud Migration
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

export default CloudSolutions;
