import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DevicePhoneMobileIcon,
  EyeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  SparklesIcon,
  SwatchIcon,
  CursorArrowRaysIcon,
  UserGroupIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

const UiUxDesign = () => {
  const tools = [
    { name: 'Figma', category: 'Design Tool', icon: '🎨' },
    { name: 'Adobe XD', category: 'Prototyping', icon: '🔷' },
    { name: 'Sketch', category: 'UI Design', icon: '💎' },
    { name: 'InVision', category: 'Collaboration', icon: '🔗' },
    { name: 'Principle', category: 'Animation', icon: '⚡' },
    { name: 'Zeplin', category: 'Handoff', icon: '📐' },
    { name: 'Miro', category: 'Wireframing', icon: '🗂️' },
    { name: 'Hotjar', category: 'Analytics', icon: '📊' }
  ];

  const features = [
    {
      icon: <EyeIcon className="h-8 w-8 text-primary" />,
      title: 'User Research',
      description: 'In-depth user research and persona development for targeted design.'
    },
    {
      icon: <SwatchIcon className="h-8 w-8 text-primary" />,
      title: 'Visual Design',
      description: 'Beautiful, modern interfaces that align with your brand identity.'
    },
    {
      icon: <CursorArrowRaysIcon className="h-8 w-8 text-primary" />,
      title: 'Interactive Prototypes',
      description: 'Clickable prototypes to test and validate design concepts.'
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-primary" />,
      title: 'Responsive Design',
      description: 'Designs that work perfectly across all devices and screen sizes.'
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-primary" />,
      title: 'Usability Testing',
      description: 'User testing to ensure optimal user experience and satisfaction.'
    },
    {
      icon: <PresentationChartLineIcon className="h-8 w-8 text-primary" />,
      title: 'Design Systems',
      description: 'Scalable design systems for consistent brand experience.'
    }
  ];


  const designTypes = [
    {
      title: 'Web Design',
      description: 'Modern, responsive website designs',
      icon: '🌐',
      benefits: ['Landing pages', 'E-commerce sites', 'Corporate websites', 'Web applications']
    },
    {
      title: 'Mobile App Design',
      description: 'Native and cross-platform app interfaces',
      icon: '📱',
      benefits: ['iOS design', 'Android design', 'Cross-platform UI', 'App store assets']
    },
    {
      title: 'Dashboard Design',
      description: 'Data visualization and admin interfaces',
      icon: '📊',
      benefits: ['Analytics dashboards', 'Admin panels', 'CRM interfaces', 'Data visualization']
    },
    {
      title: 'Brand Identity',
      description: 'Complete brand design and guidelines',
      icon: '🎯',
      benefits: ['Logo design', 'Brand guidelines', 'Marketing materials', 'Brand strategy']
    }
  ];

  const testimonials = [
    {
      name: 'Arjun Kapoor',
      company: 'StartupHub India',
      text: 'ArionexTech transformed our app design completely. User engagement increased by 60% after the redesign. Amazing work!',
      rating: 5,
      image: 'AK'
    },
    {
      name: 'Sneha Reddy',
      company: 'EduTech Solutions',
      text: 'Their UX research and design process is thorough. The final design exceeded our expectations and user feedback is excellent.',
      rating: 5,
      image: 'SR'
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
                <SwatchIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white">UI/UX Design</h1>
                <p className="text-lg text-slate-400">User-centered design solutions</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Create exceptional user experiences with research-driven design that converts visitors into customers and delights users.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get Design Quote
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <SparklesIcon className="h-4 w-4 mr-2" />
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
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
              <span className="highlight">Design Tools</span> We Master
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Professional design tools for creating exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6 text-center hover:shadow-lg transition-all duration-300 border border-white/10"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="font-semibold text-white mb-1">{tool.name}</h3>
                <p className="text-sm text-slate-500">{tool.category}</p>
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
              Our <span className="highlight">Design</span> Process
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive design services that put users at the center of everything.
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

      {/* Design Types Section */}
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
              <span className="highlight">Design Services</span> We Offer
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive design solutions for all your digital needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{type.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{type.title}</h3>
                    <p className="text-slate-400 mb-4">{type.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {type.benefits.map((benefit, benefitIndex) => (
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
              <span className="highlight">Design Success</span> Stories
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
              Ready to Create <span className="text-gradient inline-block pb-1">Amazing Designs</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your design needs and create experiences that your users will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-ghost inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start Design Project
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

export default UiUxDesign;
