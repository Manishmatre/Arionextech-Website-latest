import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../components/premium/PageHero';
import {
  CodeBracketIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const WordPressDevelopment = () => {
  const features = [
    {
      icon: <CodeBracketIcon className="h-8 w-8 text-primary" />,
      title: 'Custom WordPress Development',
      description: 'Tailored WordPress solutions built from scratch to meet your specific business requirements.'
    },
    {
      icon: <ShoppingCartIcon className="h-8 w-8 text-primary" />,
      title: 'E-commerce Integration',
      description: 'WooCommerce and custom e-commerce solutions with payment gateways and inventory management.'
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-primary" />,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.'
    },
    {
      icon: <PaintBrushIcon className="h-8 w-8 text-primary" />,
      title: 'Custom Themes & Plugins',
      description: 'Bespoke themes and plugins developed specifically for your brand and functionality needs.'
    },
    {
      icon: <RocketLaunchIcon className="h-8 w-8 text-primary" />,
      title: 'Performance Optimization',
      description: 'Speed optimization, caching, and performance tuning for lightning-fast loading times.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: 'Security & Maintenance',
      description: 'Regular updates, security monitoring, and ongoing maintenance to keep your site secure.'
    }
  ];

  const services = [
    'WordPress Website Development',
    'WooCommerce E-commerce Stores',
    'Custom Theme Development',
    'Plugin Development & Customization',
    'WordPress Migration & Hosting',
    'SEO Optimization',
    'Performance Optimization',
    'Security Hardening',
    'Maintenance & Support',
    'Content Management Training'
  ];


  return (
    <div className="min-h-screen section-surface-soft">
      <PageHero
        badge="WordPress"
        title="Professional"
        highlight="WordPress solutions"
        description="Custom WordPress websites and e-commerce solutions that combine powerful functionality with stunning design to grow your business online."
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="btn-primary">Start your project</Link>
        </div>
      </PageHero>

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
              Why Choose Our <span className="highlight">WordPress Services</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We deliver WordPress solutions that are fast, secure, and tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
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
              Our <span className="highlight">WordPress Services</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive WordPress development services to meet all your website needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center card-premium p-4 hover:shadow-md transition-shadow"
              >
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-slate-300 font-medium">{service}</span>
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
              Ready to Build Your <span className="text-gradient inline-block pb-1">WordPress Website</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create a powerful WordPress solution that drives your business forward.
            </p>
            <a
              href="/contact"
              className="btn btn-ghost inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WordPressDevelopment;
