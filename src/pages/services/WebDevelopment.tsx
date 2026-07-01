import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  GlobeAltIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const WebDevelopment = () => {
  const technologies = [
    { name: 'React.js', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', category: 'Backend', icon: '🟢' },
    { name: 'Next.js', category: 'Framework', icon: '▲' },
    { name: 'TypeScript', category: 'Language', icon: '🔷' },
    { name: 'MongoDB', category: 'Database', icon: '🍃' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'AWS', category: 'Cloud', icon: '☁️' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' }
  ];

  const features = [
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-primary" />,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect display across all devices and screen sizes.'
    },
    {
      icon: <RocketLaunchIcon className="h-8 w-8 text-primary" />,
      title: 'High Performance',
      description: 'Optimized code and modern techniques for lightning-fast loading speeds.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: 'Security First',
      description: 'Built-in security measures to protect your application from threats.'
    },
    {
      icon: <CloudArrowUpIcon className="h-8 w-8 text-primary" />,
      title: 'Scalable Architecture',
      description: 'Designed to grow with your business and handle increasing traffic.'
    },
    {
      icon: <CogIcon className="h-8 w-8 text-primary" />,
      title: 'API Integration',
      description: 'Seamless integration with third-party services and existing systems.'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
      title: 'Analytics Ready',
      description: 'Built-in analytics tracking and performance monitoring capabilities.'
    }
  ];


  const process = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'We analyze your business needs and create detailed specifications.',
      duration: '2-3 days'
    },
    {
      step: '02',
      title: 'Design & Wireframing',
      description: 'Create wireframes and design mockups for your approval.',
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your website using modern technologies and best practices.',
      duration: '2-8 weeks'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing, deployment, and post-launch support.',
      duration: '3-5 days'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'TechStart Solutions',
      text: 'ArionexTech delivered an exceptional website that perfectly represents our brand. The performance and user experience are outstanding.',
      rating: 5,
      image: 'RK'
    },
    {
      name: 'Priya Sharma',
      company: 'EduVision Institute',
      text: 'Professional team with excellent technical skills. They understood our requirements and delivered beyond expectations.',
      rating: 5,
      image: 'PS'
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
              className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
                <CodeBracketIcon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Web Development
                </h1>
                <p className="text-base sm:text-lg text-slate-400 mt-1">Custom websites & web applications</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0 leading-relaxed"
            >
              Build powerful, scalable web applications that drive business growth. From simple websites to complex enterprise solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center text-sm sm:text-base py-3 px-6">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get Free Quote
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center text-sm sm:text-base py-3 px-6">
                <GlobeAltIcon className="h-4 w-4 mr-2" />
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              What Makes Our <span className="highlight">Web Development</span> Special?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results.
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

      {/* Technologies Section */}
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
              <span className="highlight">Technologies</span> We Use
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We work with the latest and most reliable technologies to ensure your project's success.
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
                className="card-premium p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-sm text-slate-500">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="highlight">Development</span> Process
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              A proven methodology that ensures quality delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{step.description}</p>
                <div className="inline-flex items-center text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  {step.duration}
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
              What Our <span className="highlight">Clients</span> Say
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
              Ready to Build Your <span className="text-gradient inline-block pb-1">Dream Website</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free consultation and detailed project proposal within 24 hours.
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

export default WebDevelopment;
