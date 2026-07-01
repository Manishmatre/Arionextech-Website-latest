import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DevicePhoneMobileIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  PlayIcon,
  CogIcon,
  BoltIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const MobileAppDevelopment = () => {
  const platforms = [
    { name: 'iOS', icon: '🍎', description: 'Native iOS apps using Swift' },
    { name: 'Android', icon: '🤖', description: 'Native Android apps using Kotlin' },
    { name: 'React Native', icon: '⚛️', description: 'Cross-platform development' },
    { name: 'Flutter', icon: '💙', description: 'Google\'s UI toolkit' }
  ];

  const features = [
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-primary" />,
      title: 'Native Performance',
      description: 'Optimized for each platform to deliver the best user experience and performance.'
    },
    {
      icon: <BoltIcon className="h-8 w-8 text-primary" />,
      title: 'Offline Functionality',
      description: 'Apps that work seamlessly even without internet connectivity.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: 'Secure & Compliant',
      description: 'Built with security best practices and compliance standards.'
    },
    {
      icon: <CloudArrowUpIcon className="h-8 w-8 text-primary" />,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud services and real-time sync.'
    },
    {
      icon: <CogIcon className="h-8 w-8 text-primary" />,
      title: 'Push Notifications',
      description: 'Engage users with targeted push notifications and messaging.'
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-primary" />,
      title: 'API Integration',
      description: 'Connect with third-party services and existing business systems.'
    }
  ];


  const appTypes = [
    {
      title: 'E-commerce Apps',
      description: 'Online shopping apps with payment integration',
      icon: '🛒',
      features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Order tracking']
    },
    {
      title: 'Business Apps',
      description: 'Internal tools and productivity applications',
      icon: '💼',
      features: ['Employee management', 'Task tracking', 'Reporting', 'Communication']
    },
    {
      title: 'Social Apps',
      description: 'Community and social networking platforms',
      icon: '👥',
      features: ['User profiles', 'Messaging', 'Content sharing', 'Social features']
    },
    {
      title: 'Educational Apps',
      description: 'Learning and training applications',
      icon: '📚',
      features: ['Course content', 'Progress tracking', 'Assessments', 'Certificates']
    }
  ];

  const testimonials = [
    {
      name: 'Amit Patel',
      company: 'RetailMax Solutions',
      text: 'Our e-commerce app developed by ArionexTech increased our mobile sales by 300%. Excellent work!',
      rating: 5,
      image: 'AP'
    },
    {
      name: 'Sarah Johnson',
      company: 'FitLife Wellness',
      text: 'The fitness tracking app they built is intuitive and performs flawlessly. Our users love it!',
      rating: 5,
      image: 'SJ'
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
                <DevicePhoneMobileIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Mobile App Development</h1>
                <p className="text-lg text-slate-400">iOS & Android applications</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Create powerful mobile applications that engage users and drive business growth across iOS and Android platforms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get Free Quote
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <PlayIcon className="h-4 w-4 mr-2" />
                View Demo Apps
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
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
              Platforms We Support
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We develop for all major mobile platforms using the latest technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6 text-center hover:shadow-lg transition-all duration-300 border border-white/10"
              >
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="font-semibold text-white mb-2">{platform.name}</h3>
                <p className="text-sm text-slate-400">{platform.description}</p>
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
              App Features We Deliver
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive mobile app features that enhance user experience and business value.
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

      {/* App Types Section */}
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
              Types of Apps We Build
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From simple utility apps to complex enterprise solutions, we cover all categories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
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
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
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
              Success Stories
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
              Ready to Launch Your Mobile App?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free app consultation and detailed development roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-ghost inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start Your App Project
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

export default MobileAppDevelopment;
