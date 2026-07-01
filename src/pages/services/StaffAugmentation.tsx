import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  UserGroupIcon,
  AcademicCapIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  PhoneIcon,
  BriefcaseIcon,
  CogIcon,
  GlobeAltIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const StaffAugmentation = () => {
  const skills = [
    { name: 'React Developers', category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js Developers', category: 'Backend', icon: '🟢' },
    { name: 'Python Developers', category: 'Backend', icon: '🐍' },
    { name: 'DevOps Engineers', category: 'Infrastructure', icon: '🔧' },
    { name: 'UI/UX Designers', category: 'Design', icon: '🎨' },
    { name: 'QA Engineers', category: 'Testing', icon: '🔍' },
    { name: 'Project Managers', category: 'Management', icon: '📊' },
    { name: 'Data Scientists', category: 'Analytics', icon: '📈' }
  ];

  const features = [
    {
      icon: <AcademicCapIcon className="h-8 w-8 text-primary" />,
      title: 'Skilled Professionals',
      description: 'Pre-vetted developers and specialists with proven expertise in latest technologies.'
    },
    {
      icon: <ClockIcon className="h-8 w-8 text-primary" />,
      title: 'Quick Onboarding',
      description: 'Fast deployment of resources within 1-2 weeks to meet your project deadlines.'
    },
    {
      icon: <CurrencyRupeeIcon className="h-8 w-8 text-primary" />,
      title: 'Cost Effective',
      description: 'Reduce hiring costs by up to 60% compared to traditional recruitment.'
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
      title: 'Quality Assurance',
      description: 'Rigorous screening process ensures only top-tier talent joins your team.'
    },
    {
      icon: <CogIcon className="h-8 w-8 text-primary" />,
      title: 'Flexible Engagement',
      description: 'Scale your team up or down based on project requirements and timelines.'
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-primary" />,
      title: 'Global Talent Pool',
      description: 'Access to international talent with diverse skills and experience.'
    }
  ];


  const roles = [
    {
      title: 'Frontend Developers',
      description: 'React, Angular, Vue.js specialists',
      icon: '💻',
      benefits: ['Modern frameworks', 'Responsive design', 'Performance optimization', 'Cross-browser compatibility']
    },
    {
      title: 'Backend Developers',
      description: 'Node.js, Python, Java experts',
      icon: '⚙️',
      benefits: ['API development', 'Database design', 'Microservices', 'Cloud integration']
    },
    {
      title: 'DevOps Engineers',
      description: 'CI/CD and infrastructure specialists',
      icon: '🚀',
      benefits: ['Automation', 'Cloud deployment', 'Monitoring', 'Security']
    },
    {
      title: 'Mobile Developers',
      description: 'iOS, Android, React Native experts',
      icon: '📱',
      benefits: ['Native development', 'Cross-platform', 'App store optimization', 'Performance tuning']
    }
  ];

  const testimonials = [
    {
      name: 'Amit Verma',
      company: 'TechStart Inc',
      text: 'ArionexTech provided us with excellent developers who integrated seamlessly with our team. Project delivery improved by 40%!',
      rating: 5,
      image: 'AV'
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Solutions',
      text: 'The staff augmentation service helped us scale quickly. The developers are highly skilled and professional.',
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
                <UserGroupIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white">Staff Augmentation</h1>
                <p className="text-lg text-slate-400">Scale your team with skilled professionals</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Expand your development team with pre-vetted, skilled professionals who integrate seamlessly with your existing workforce.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Find Developers
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                View Talent Pool
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Available <span className="highlight">Skills & Expertise</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Access to a diverse pool of skilled professionals across various technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6 text-center hover:shadow-lg transition-all duration-300 border border-white/10"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-slate-500">{skill.category}</p>
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
              Why Choose Our <span className="highlight">Staff Augmentation</span>?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Benefits that make us the preferred choice for team expansion.
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

      {/* Roles Section */}
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
              <span className="highlight">Popular Roles</span> We Fill
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Most in-demand technical roles for modern development teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{role.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{role.title}</h3>
                    <p className="text-slate-400 mb-4">{role.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {role.benefits.map((benefit, benefitIndex) => (
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
              <span className="highlight">Client Success</span> Stories
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
              Ready to <span className="text-gradient inline-block pb-1">Scale Your Team</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get access to skilled professionals who can start contributing from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-ghost inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Find Your Team
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

export default StaffAugmentation;
