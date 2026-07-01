import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  SwatchIcon,
  PhotoIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  SparklesIcon,
  PaintBrushIcon,
  EyeIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

const GraphicDesign = () => {
  const tools = [
    { name: 'Adobe Photoshop', category: 'Photo Editing', icon: '🎨' },
    { name: 'Adobe Illustrator', category: 'Vector Design', icon: '🖊️' },
    { name: 'Adobe InDesign', category: 'Layout Design', icon: '📄' },
    { name: 'Figma', category: 'UI Design', icon: '🔷' },
    { name: 'Canva Pro', category: 'Quick Design', icon: '✨' },
    { name: 'Adobe After Effects', category: 'Motion Graphics', icon: '🎬' },
    { name: 'CorelDRAW', category: 'Vector Graphics', icon: '🎯' },
    { name: 'Sketch', category: 'Digital Design', icon: '💎' }
  ];

  const features = [
    {
      icon: <SwatchIcon className="h-8 w-8 text-primary" />,
      title: 'Brand Identity Design',
      description: 'Complete brand identity including logos, color schemes, and brand guidelines.'
    },
    {
      icon: <DocumentTextIcon className="h-8 w-8 text-primary" />,
      title: 'Print Design',
      description: 'Professional print materials including brochures, flyers, and business cards.'
    },
    {
      icon: <PhotoIcon className="h-8 w-8 text-primary" />,
      title: 'Digital Graphics',
      description: 'Web graphics, social media posts, banners, and digital advertisements.'
    },
    {
      icon: <PresentationChartBarIcon className="h-8 w-8 text-primary" />,
      title: 'Presentation Design',
      description: 'Professional presentations and pitch decks that captivate audiences.'
    },
    {
      icon: <CubeIcon className="h-8 w-8 text-primary" />,
      title: 'Packaging Design',
      description: 'Eye-catching product packaging that stands out on shelves.'
    },
    {
      icon: <EyeIcon className="h-8 w-8 text-primary" />,
      title: 'Visual Branding',
      description: 'Consistent visual elements across all marketing materials.'
    }
  ];


  const designTypes = [
    {
      title: 'Logo & Branding',
      description: 'Professional brand identity design',
      icon: '🎯',
      benefits: ['Logo design', 'Brand guidelines', 'Color palette', 'Typography']
    },
    {
      title: 'Print Materials',
      description: 'High-quality print design services',
      icon: '📄',
      benefits: ['Brochures', 'Flyers', 'Business cards', 'Posters']
    },
    {
      title: 'Digital Graphics',
      description: 'Online and digital design assets',
      icon: '💻',
      benefits: ['Social media posts', 'Web banners', 'Email templates', 'Digital ads']
    },
    {
      title: 'Marketing Materials',
      description: 'Complete marketing design suite',
      icon: '📊',
      benefits: ['Presentations', 'Infographics', 'Catalogs', 'Annual reports']
    }
  ];

  const testimonials = [
    {
      name: 'Ravi Sharma',
      company: 'Creative Solutions Ltd',
      text: 'ArionexTech created a stunning brand identity for our company. The logo and marketing materials exceeded our expectations!',
      rating: 5,
      image: 'RS'
    },
    {
      name: 'Pooja Mehta',
      company: 'Fashion Boutique',
      text: 'Their graphic design work helped us establish a strong visual presence. Our sales increased after the rebranding!',
      rating: 5,
      image: 'PM'
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
                <PaintBrushIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Graphic Design</h1>
                <p className="text-lg text-slate-400">Creative visual solutions</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Create stunning visual designs that communicate your brand message effectively and leave lasting impressions on your audience.
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
              Professional design software for creating exceptional visual content.
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
              <span className="highlight">Design Services</span> We Offer
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive graphic design solutions for all your visual needs.
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
              <span className="highlight">Design</span> Categories
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Specialized design services for different business needs.
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
              Ready to Create Stunning Designs?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's bring your brand vision to life with professional graphic design.
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

export default GraphicDesign;
