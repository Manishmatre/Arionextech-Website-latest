import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MagnifyingGlassIcon,
  ChartBarIcon,
  LinkIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  CursorArrowRaysIcon
} from '@heroicons/react/24/outline';

const SeoBacklinks = () => {
  const tools = [
    { name: 'Google Analytics', category: 'Analytics', icon: '📊' },
    { name: 'SEMrush', category: 'SEO Tool', icon: '🔍' },
    { name: 'Ahrefs', category: 'Backlinks', icon: '🔗' },
    { name: 'Moz', category: 'SEO Analysis', icon: '📈' },
    { name: 'Google Search Console', category: 'Monitoring', icon: '🔧' },
    { name: 'Screaming Frog', category: 'Crawling', icon: '🕷️' },
    { name: 'Majestic', category: 'Link Analysis', icon: '👑' },
    { name: 'BuzzSumo', category: 'Content Research', icon: '💡' }
  ];

  const features = [
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8 text-primary" />,
      title: 'Keyword Research',
      description: 'Comprehensive keyword analysis to target high-value search terms.'
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8 text-primary" />,
      title: 'Content Optimization',
      description: 'SEO-optimized content that ranks higher and engages users.'
    },
    {
      icon: <LinkIcon className="h-8 w-8 text-primary" />,
      title: 'Quality Backlinks',
      description: 'High-authority backlinks from relevant and trusted websites.'
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
      title: 'Performance Tracking',
      description: 'Detailed analytics and reporting on SEO performance metrics.'
    },
    {
      icon: <CursorArrowRaysIcon className="h-8 w-8 text-primary" />,
      title: 'Technical SEO',
      description: 'Website optimization for better search engine crawling and indexing.'
    },
    {
      icon: <ArrowTrendingUpIcon className="h-8 w-8 text-primary" />,
      title: 'Local SEO',
      description: 'Optimize for local search results and Google My Business.'
    }
  ];


  const services = [
    {
      title: 'On-Page SEO',
      description: 'Optimize website content and structure',
      icon: '📝',
      benefits: ['Title optimization', 'Meta descriptions', 'Header tags', 'Internal linking']
    },
    {
      title: 'Link Building',
      description: 'High-quality backlink acquisition',
      icon: '🔗',
      benefits: ['Guest posting', 'Directory submissions', 'Resource pages', 'Broken link building']
    },
    {
      title: 'Technical SEO',
      description: 'Website technical optimization',
      icon: '⚙️',
      benefits: ['Site speed', 'Mobile optimization', 'Schema markup', 'XML sitemaps']
    },
    {
      title: 'Local SEO',
      description: 'Local search optimization',
      icon: '📍',
      benefits: ['Google My Business', 'Local citations', 'Review management', 'Local keywords']
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Agarwal',
      company: 'Digital Marketing Pro',
      text: 'ArionexTech improved our search rankings from page 3 to page 1 for 15 keywords. Our organic traffic increased by 250%!',
      rating: 5,
      image: 'RA'
    },
    {
      name: 'Kavya Iyer',
      company: 'Local Business Hub',
      text: 'Their local SEO strategy helped us dominate local search results. We now get 5x more local customers through Google.',
      rating: 5,
      image: 'KI'
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
                <MagnifyingGlassIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white">SEO & Backlinks</h1>
                <p className="text-lg text-slate-400">Dominate search engine rankings</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Boost your online visibility with proven SEO strategies and high-quality backlinks that drive organic traffic and improve search rankings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get SEO Audit
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <ChartBarIcon className="h-4 w-4 mr-2" />
                View Rankings Report
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
              <span className="highlight">SEO Tools</span> We Use
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Professional SEO tools for comprehensive analysis and optimization.
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
              SEO Services We Provide
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Complete SEO solutions to improve your search engine visibility.
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
              Specialized SEO Services
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Targeted SEO strategies for different aspects of search optimization.
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
              <span className="highlight">SEO Success</span> Stories
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
              Ready to <span className="text-gradient inline-block pb-1">Boost Your Rankings</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and discover how to improve your search rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-ghost inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start SEO Campaign
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

export default SeoBacklinks;
