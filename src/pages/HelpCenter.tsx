import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  QuestionMarkCircleIcon,
  VideoCameraIcon,
  AcademicCapIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import PageHero from '../components/premium/PageHero';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const supportCategories = [
    {
      title: 'Getting Started',
      description: 'Learn the basics and set up your account',
      icon: <AcademicCapIcon className="h-8 w-8 text-primary" />,
      articles: [
        'How to create your account',
        'Setting up your first project',
        'Understanding the dashboard',
        'Basic navigation guide'
      ]
    },
    {
      title: 'Product Documentation',
      description: 'Detailed guides for all our products',
      icon: <DocumentTextIcon className="h-8 w-8 text-primary" />,
      articles: [
        'ArionexCRM User Manual',
        'EduTrack Pro Setup Guide',
        'RetailFlow Configuration',
        'DataViz Analytics Tutorial'
      ]
    },
    {
      title: 'API Reference',
      description: 'Technical documentation for developers',
      icon: <CodeBracketIcon className="h-8 w-8 text-primary" />,
      articles: [
        'REST API Documentation',
        'Authentication Guide',
        'SDK Installation',
        'Code Examples'
      ]
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: <VideoCameraIcon className="h-8 w-8 text-primary" />,
      articles: [
        'Product Overview Videos',
        'Feature Walkthroughs',
        'Best Practices',
        'Advanced Techniques'
      ]
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      icon: <QuestionMarkCircleIcon className="h-8 w-8 text-primary" />,
      articles: [
        'Login Problems',
        'Performance Issues',
        'Data Sync Errors',
        'Browser Compatibility'
      ]
    },
    {
      title: 'Billing & Pricing',
      description: 'Payment and subscription help',
      icon: <CheckCircleIcon className="h-8 w-8 text-primary" />,
      articles: [
        'Subscription Plans',
        'Payment Methods',
        'Invoice Management',
        'Refund Policy'
      ]
    }
  ];

  const contactOptions = [
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary" />,
      availability: 'Mon-Fri, 9 AM - 6 PM IST',
      action: 'Start Chat',
      primary: true
    },
    {
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: <EnvelopeIcon className="h-6 w-6 text-primary" />,
      availability: 'Response within 24 hours',
      action: 'Send Email',
      link: 'mailto:support@arionextech.com'
    },
    {
      title: 'Phone Support',
      description: 'Call our support hotline',
      icon: <PhoneIcon className="h-6 w-6 text-primary" />,
      availability: 'Mon-Fri, 10 AM - 5 PM IST',
      action: 'Call Now',
      link: 'tel:+919876543210'
    }
  ];

  const popularArticles = [
    {
      title: 'How to Reset Your Password',
      category: 'Account Management',
      readTime: '2 min read',
      views: '1.2k views'
    },
    {
      title: 'Setting Up Two-Factor Authentication',
      category: 'Security',
      readTime: '3 min read',
      views: '890 views'
    },
    {
      title: 'Integrating with Third-Party Tools',
      category: 'Integrations',
      readTime: '5 min read',
      views: '756 views'
    },
    {
      title: 'Understanding Your Dashboard Analytics',
      category: 'Analytics',
      readTime: '4 min read',
      views: '623 views'
    },
    {
      title: 'Mobile App Installation Guide',
      category: 'Mobile',
      readTime: '3 min read',
      views: '534 views'
    }
  ];

  const filteredCategories = supportCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.articles.some(article => 
      article.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="bg-[#050508] min-h-screen">
      <PageHero
        badge="Support & Documentation"
        title="Help"
        highlight="Center"
        description="Find answers, get support, and learn how to make the most of our products."
      >
        <div className="relative max-w-2xl mt-8">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search for help articles, guides, or tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent text-lg bg-white/5 backdrop-blur-sm text-white placeholder:text-slate-500"
          />
        </div>
      </PageHero>

      {/* Support Categories */}
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
              Browse by <span className="highlight">Category</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Find the help you need organized by topic and product area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{category.title}</h3>
                <p className="text-slate-400 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.slice(0, 3).map((article, articleIndex) => (
                    <li key={articleIndex} className="flex items-center text-sm text-slate-500">
                      <BookOpenIcon className="h-4 w-4 mr-2 text-primary" />
                      {article}
                    </li>
                  ))}
                  {category.articles.length > 3 && (
                    <li className="text-sm text-primary font-medium">
                      +{category.articles.length - 3} more articles
                    </li>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
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
              Popular <span className="highlight">Articles</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Most viewed help articles and guides from our community.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6 mb-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                      <span>{article.views}</span>
                    </div>
                  </div>
                  <BookOpenIcon className="h-5 w-5 text-slate-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
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
              Still Need <span className="highlight">Help?</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card-premium p-8 text-center hover:shadow-xl transition-all duration-300 ${
                  option.primary ? 'ring-2 ring-primary ring-opacity-20' : ''
                }`}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{option.title}</h3>
                <p className="text-slate-400 mb-4">{option.description}</p>
                <div className="flex items-center justify-center text-sm text-slate-500 mb-6">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {option.availability}
                </div>
                {option.link ? (
                  <a
                    href={option.link}
                    className={`btn ${option.primary ? 'btn-primary' : 'btn-outline'} w-full`}
                  >
                    {option.action}
                  </a>
                ) : (
                  <button className={`btn ${option.primary ? 'btn-primary' : 'btn-outline'} w-full`}>
                    {option.action}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-[#08080e]">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-heading">
              Quick <span className="highlight">Links</span>
            </h2>
            <p className="text-lg text-slate-400">
              Jump to commonly accessed resources and pages.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'FAQs', path: '/faqs' },
              { name: 'Contact Us', path: '/contact' },
              { name: 'System Status', path: '/status' },
              { name: 'Feature Requests', path: '/features' },
              { name: 'Bug Reports', path: '/bugs' },
              { name: 'Community Forum', path: '/forum' },
              { name: 'Developer Portal', path: '/developers' },
              { name: 'Training Resources', path: '/training' }
            ].map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  className="block card-premium p-4 text-center hover:shadow-lg hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="text-sm font-medium text-white">{link.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;
