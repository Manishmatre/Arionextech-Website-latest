import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/premium/PageHero';
import SectionHeader from '../components/premium/SectionHeader';
import { 
  CodeBracketIcon, 
  CloudArrowUpIcon, 
  CpuChipIcon, 
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ServerStackIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies for optimal performance and user experience.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/web-development',
      isTopService: true,
      badge: 'Most Popular'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth.',
      icon: <DevicePhoneMobileIcon className="h-10 w-10 text-primary" />,
      link: '/services/mobile-app-development',
      isTopService: true,
      badge: 'High Demand'
    },
    {
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your unique business requirements and workflows.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/custom-software',
      isTopService: true,
      badge: 'Trending'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure to optimize your business operations and reduce costs.',
      icon: <CloudArrowUpIcon className="h-10 w-10 text-primary" />,
      link: '/services/cloud-solutions',
    },
    {
      title: 'DevOps',
      description: 'Streamlined development and operations with continuous integration and deployment pipelines.',
      icon: <ServerStackIcon className="h-10 w-10 text-primary" />,
      link: '/services/devops',
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: <ShieldCheckIcon className="h-10 w-10 text-primary" />,
      link: '/services/cybersecurity',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create exceptional experiences and drive conversions.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/ui-ux-design',
    },
    {
      title: 'SEO & Backlinks',
      description: 'Boost your search rankings with proven SEO strategies and high-quality backlink building.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/seo-backlinks',
    },
    {
      title: 'Digital Marketing',
      description: 'Growth-driven marketing campaigns across all major platforms to expand your reach.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/digital-marketing',
    },
    {
      title: 'Graphic Design',
      description: 'Creative visual solutions that communicate your brand message effectively and professionally.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/graphic-design',
    },
    {
      title: 'WordPress Development',
      description: 'Custom WordPress websites and e-commerce solutions with responsive design and powerful functionality.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/wordpress-development',
    },
    {
      title: 'Staff Augmentation',
      description: 'Scale your team with pre-vetted, skilled professionals who integrate seamlessly with your workforce.',
      icon: <CodeBracketIcon className="h-10 w-10 text-primary" />,
      link: '/services/staff-augmentation',
    },
    {
      title: 'AI & ML',
      description: 'Intelligent solutions powered by artificial intelligence and machine learning to transform your business.',
      icon: <CpuChipIcon className="h-10 w-10 text-primary" />,
      link: '/services/ai-ml',
    },
  ];

  const engagementModels = [
    {
      icon: <RocketLaunchIcon className="h-8 w-8 text-primary" />,
      title: 'Project delivery',
      description: 'End-to-end builds with clear scope, milestones, and launch support — from MVPs to enterprise platforms.',
      points: ['Fixed scope & timeline', 'Weekly progress demos', 'Handover & documentation'],
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-primary" />,
      title: 'Team extension',
      description: 'Add senior developers, designers, or DevOps engineers to your squad without long hiring cycles.',
      points: ['Flexible team size', 'Your tools & workflows', 'Scale up or down anytime'],
      featured: true,
    },
    {
      icon: <ArrowPathIcon className="h-8 w-8 text-primary" />,
      title: 'Ongoing partnership',
      description: 'Post-launch support, optimization, security, and feature growth so your product keeps evolving.',
      points: ['Maintenance & updates', 'Performance monitoring', 'Priority support SLA'],
    },
  ];

  const guarantees = [
    { value: '100%', label: 'Transparent communication' },
    { value: 'NDA', label: 'Protected IP & data' },
    { value: 'Agile', label: 'Iterative delivery' },
    { value: '24/7', label: 'Critical issue response' },
  ];

  return (
    <div className="min-h-screen section-surface-soft">
      <PageHero
        badge="What We Offer"
        title="Our"
        highlight="Services"
        description="Comprehensive technology solutions tailored to your business needs. From web development to AI solutions, we deliver excellence."
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-premium">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card-premium p-8 hover:shadow-xl transition-all duration-300 group relative ${
                  service.isTopService ? 'ring-2 ring-primary/50 bg-indigo-500/5' : ''
                }`}
              >
                {/* Top Service Badge */}
                {service.isTopService && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-primary to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      ⭐ {service.badge}
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 transition-colors ${
                  service.isTopService 
                    ? 'bg-gradient-to-br from-primary/20 to-blue-600/20 group-hover:from-primary/30 group-hover:to-blue-600/30' 
                    : 'bg-primary/10 group-hover:bg-primary/20'
                }`}>
                  {service.icon}
                </div>
                
                <h3 className={`text-xl font-semibold mb-4 ${
                  service.isTopService ? 'text-primary' : 'text-white'
                }`}>
                  {service.title}
                </h3>
                
                <p className="text-slate-400 mb-6">{service.description}</p>
                
                <Link 
                  to={service.link}
                  className={`flex items-center font-medium transition-colors ${
                    service.isTopService 
                      ? 'text-primary hover:text-blue-600' 
                      : 'text-primary hover:text-primary-dark'
                  }`}
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20 section-surface">
        <div className="container-premium">
          <SectionHeader
            badge="Flexible engagement"
            title="Ways to"
            highlight="partner with us"
            description="Every business is different. We tailor how we work together — no one-size-fits-all packages, just solutions built around your goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card-premium p-8 flex flex-col h-full ${
                  model.featured ? 'ring-2 ring-primary/40 bg-indigo-500/5' : ''
                }`}
              >
                {model.featured && (
                  <span className="self-start text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                    Most flexible
                  </span>
                )}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  {model.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{model.description}</p>
                <ul className="space-y-2 mb-8">
                  {model.points.map((point) => (
                    <li key={point} className="flex items-center text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-outline w-full justify-center text-sm">
                  Discuss this model
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {guarantees.map((item) => (
              <div key={item.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient-accent mb-1">
                  {item.value}
                </div>
                <p className="text-xs md:text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
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
            <h2 className="section-heading text-white">
              Ready to start your <span className="highlight">project</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals with our custom solutions.
            </p>
            <Link
              to="/contact"
              className="btn btn-ghost inline-flex items-center justify-center"
            >
              Get in Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
