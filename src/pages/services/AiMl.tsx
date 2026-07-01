import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ChartBarIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  BeakerIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AiMl = () => {
  const technologies = [
    { name: 'Python', category: 'Language', icon: '🐍' },
    { name: 'TensorFlow', category: 'Framework', icon: '🧠' },
    { name: 'PyTorch', category: 'Framework', icon: '🔥' },
    { name: 'OpenAI', category: 'API', icon: '🤖' },
    { name: 'Scikit-learn', category: 'Library', icon: '📊' },
    { name: 'Pandas', category: 'Data Analysis', icon: '🐼' },
    { name: 'AWS ML', category: 'Cloud', icon: '☁️' },
    { name: 'Azure AI', category: 'Cloud', icon: '🔷' }
  ];

  const features = [
    {
      icon: <ChartBarIcon className="h-8 w-8 text-primary" />,
      title: 'Predictive Analytics',
      description: 'Advanced algorithms to predict trends, customer behavior, and business outcomes.'
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-8 w-8 text-primary" />,
      title: 'Natural Language Processing',
      description: 'Text analysis, sentiment analysis, chatbots, and language understanding.'
    },
    {
      icon: <EyeIcon className="h-8 w-8 text-primary" />,
      title: 'Computer Vision',
      description: 'Image recognition, object detection, facial recognition, and visual analysis.'
    },
    {
      icon: <CpuChipIcon className="h-8 w-8 text-primary" />,
      title: 'Machine Learning Models',
      description: 'Custom ML models trained on your data for specific business needs.'
    },
    {
      icon: <BeakerIcon className="h-8 w-8 text-primary" />,
      title: 'Data Science',
      description: 'Data mining, statistical analysis, and insights extraction from big data.'
    },
    {
      icon: <LightBulbIcon className="h-8 w-8 text-primary" />,
      title: 'AI Automation',
      description: 'Intelligent process automation and decision-making systems.'
    }
  ];


  const useCases = [
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences',
      icon: '👥',
      benefits: ['Customer segmentation', 'Churn prediction', 'Personalization', 'Lifetime value']
    },
    {
      title: 'Process Automation',
      description: 'Automate repetitive tasks with AI',
      icon: '⚙️',
      benefits: ['Document processing', 'Quality control', 'Workflow optimization', 'Cost reduction']
    },
    {
      title: 'Fraud Detection',
      description: 'Identify suspicious activities and prevent fraud',
      icon: '🛡️',
      benefits: ['Real-time monitoring', 'Pattern recognition', 'Risk assessment', 'Alert systems']
    },
    {
      title: 'Recommendation Systems',
      description: 'Personalized recommendations for users',
      icon: '🎯',
      benefits: ['Product suggestions', 'Content filtering', 'User engagement', 'Sales increase']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Rajesh Mehta',
      company: 'MedTech Innovations',
      text: 'ArionexTech developed an AI diagnostic system that improved our accuracy by 35%. Outstanding technical expertise!',
      rating: 5,
      image: 'RM'
    },
    {
      name: 'Anita Sharma',
      company: 'RetailPro Analytics',
      text: 'Their customer behavior prediction model increased our sales by 28%. Excellent ROI on AI investment.',
      rating: 5,
      image: 'AS'
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
                <CpuChipIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white">AI & Machine Learning</h1>
                <p className="text-lg text-slate-400">Intelligent solutions for business transformation</p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto mb-8"
            >
              Harness the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn btn-primary inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Get AI Consultation
              </Link>
              <button className="btn btn-outline inline-flex items-center justify-center">
                <BeakerIcon className="h-4 w-4 mr-2" />
                View AI Demos
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
              <span className="highlight">AI Technologies</span> We Use
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Cutting-edge tools and frameworks for building intelligent solutions.
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
              <span className="highlight">AI Capabilities</span> We Deliver
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Comprehensive AI solutions that transform how your business operates.
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

      {/* Use Cases Section */}
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
              <span className="highlight">AI Use Cases</span> We Build
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Real-world applications that deliver measurable business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-4">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{useCase.title}</h3>
                    <p className="text-slate-400 mb-4">{useCase.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
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
              <span className="highlight">AI Success</span> Stories
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
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Get a free AI consultation and discover how machine learning can revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-ghost inline-flex items-center justify-center">
                <PhoneIcon className="h-4 w-4 mr-2" />
                Start AI Project
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

export default AiMl;
