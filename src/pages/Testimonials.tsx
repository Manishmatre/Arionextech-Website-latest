import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserCircleIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import PageHero from '../components/premium/PageHero';

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'CEO',
      company: 'TechVision Solutions',
      location: 'Mumbai, India',
      category: 'Web Development',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'ArionexTech delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise helped us increase our online sales by 300% within the first quarter.',
      project: 'E-commerce Platform Development',
      results: ['300% increase in online sales', 'Improved user experience', 'Mobile-responsive design'],
      date: 'December 2023'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'Global Retail Inc.',
      location: 'New York, USA',
      category: 'Mobile App',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'The mobile app developed by ArionexTech has revolutionized how our customers interact with our brand. The user interface is intuitive, and the performance is outstanding across all devices.',
      project: 'Customer Engagement Mobile App',
      results: ['50% increase in customer engagement', 'Cross-platform compatibility', '4.8 App Store rating'],
      date: 'November 2023'
    },
    {
      id: 3,
      name: 'Ahmed Al-Rashid',
      position: 'CTO',
      company: 'FinanceFlow',
      location: 'Dubai, UAE',
      category: 'Cloud Solutions',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'ArionexTech migrated our entire infrastructure to the cloud seamlessly. Their expertise in AWS and security protocols gave us confidence throughout the process. Our system performance improved by 40%.',
      project: 'Cloud Migration & Infrastructure',
      results: ['40% performance improvement', 'Enhanced security', '60% cost reduction'],
      date: 'October 2023'
    },
    {
      id: 4,
      name: 'Maria Rodriguez',
      position: 'Operations Manager',
      company: 'Healthcare Plus',
      location: 'Barcelona, Spain',
      category: 'AI/ML',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'The AI-powered analytics solution has transformed our patient care management. We can now predict patient needs more accurately and optimize our resources effectively.',
      project: 'AI-Powered Healthcare Analytics',
      results: ['25% improvement in patient care', 'Predictive analytics', 'Resource optimization'],
      date: 'September 2023'
    },
    {
      id: 5,
      name: 'David Chen',
      position: 'Founder',
      company: 'EduTech Innovations',
      location: 'Singapore',
      category: 'Web Development',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'ArionexTech built our online learning platform from scratch. The scalable architecture handles thousands of concurrent users effortlessly, and the interactive features keep students engaged.',
      project: 'Online Learning Platform',
      results: ['10,000+ active users', 'Scalable architecture', 'Interactive learning tools'],
      date: 'August 2023'
    },
    {
      id: 6,
      name: 'Jennifer Smith',
      position: 'IT Director',
      company: 'Manufacturing Corp',
      location: 'Toronto, Canada',
      category: 'Cybersecurity',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'Their cybersecurity audit and implementation of security protocols have significantly strengthened our digital infrastructure. We feel much more secure about our data protection.',
      project: 'Cybersecurity Implementation',
      results: ['Zero security breaches', 'Compliance achieved', 'Employee training completed'],
      date: 'July 2023'
    },
    {
      id: 7,
      name: 'Priya Sharma',
      position: 'Product Manager',
      company: 'RetailTech Solutions',
      location: 'Bangalore, India',
      category: 'Mobile App',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'The inventory management app has streamlined our operations completely. Real-time tracking and automated alerts have reduced our inventory costs by 35%.',
      project: 'Inventory Management Mobile App',
      results: ['35% cost reduction', 'Real-time tracking', 'Automated workflows'],
      date: 'June 2023'
    },
    {
      id: 8,
      name: 'Michael Brown',
      position: 'VP Technology',
      company: 'LogiFlow Systems',
      location: 'London, UK',
      category: 'DevOps',
      rating: 5,
      image: '/api/placeholder/80/80',
      testimonial: 'ArionexTech implemented a robust CI/CD pipeline that has accelerated our deployment process by 70%. Their DevOps expertise is truly world-class.',
      project: 'DevOps Pipeline Implementation',
      results: ['70% faster deployments', 'Automated testing', 'Zero-downtime releases'],
      date: 'May 2023'
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'Cloud Solutions', 'AI/ML', 'Cybersecurity', 'DevOps'];

  const serviceIcons = {
    'Web Development': <GlobeAltIcon className="h-6 w-6" />,
    'Mobile App': <DevicePhoneMobileIcon className="h-6 w-6" />,
    'Cloud Solutions': <CloudIcon className="h-6 w-6" />,
    'AI/ML': <CpuChipIcon className="h-6 w-6" />,
    'Cybersecurity': <ShieldCheckIcon className="h-6 w-6" />,
    'DevOps': <ChartBarIcon className="h-6 w-6" />
  };

  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIconSolid
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const stats = [
    { label: 'Happy Clients', value: '150+', icon: <UserCircleIcon className="h-8 w-8" /> },
    { label: 'Projects Completed', value: '200+', icon: <CheckBadgeIcon className="h-8 w-8" /> },
    { label: 'Countries Served', value: '25+', icon: <GlobeAltIcon className="h-8 w-8" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <StarIconSolid className="h-8 w-8" /> }
  ];

  return (
    <div className="min-h-screen section-surface-soft">
      <PageHero
        badge="Client Testimonials"
        title="What Our"
        highlight="Clients Say"
        description="Discover how we've helped businesses worldwide achieve their digital transformation goals through innovative technology solutions."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mt-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-2 text-indigo-400">
                {stat.icon}
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Featured Testimonial Carousel */}
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
              Featured <span className="highlight">Success Stories</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Explore detailed testimonials from our satisfied clients across different industries and services.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentTestimonial(0);
                }}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category !== 'All' && serviceIcons[category as keyof typeof serviceIcons] && (
                  <span className="mr-2">{serviceIcons[category as keyof typeof serviceIcons]}</span>
                )}
                {category}
              </button>
            ))}
          </div>

          {/* Testimonial Carousel */}
          {filteredTestimonials.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="card-premium p-8 md:p-12"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center">
                    <ChatBubbleLeftRightIcon className="h-12 w-12 text-primary/20 mr-4" />
                    <div className="flex">
                      {renderStars(filteredTestimonials[currentTestimonial].rating)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500">{filteredTestimonials[currentTestimonial].date}</div>
                    <div className="flex items-center text-primary text-sm font-medium mt-1">
                      {serviceIcons[filteredTestimonials[currentTestimonial].category as keyof typeof serviceIcons]}
                      <span className="ml-1">{filteredTestimonials[currentTestimonial].category}</span>
                    </div>
                  </div>
                </div>

                <blockquote className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                  "{filteredTestimonials[currentTestimonial].testimonial}"
                </blockquote>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mr-4">
                      <UserCircleIcon className="h-10 w-10 text-slate-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{filteredTestimonials[currentTestimonial].name}</div>
                      <div className="text-slate-400">{filteredTestimonials[currentTestimonial].position}</div>
                      <div className="flex items-center text-sm text-slate-500 mt-1">
                        <BuildingOfficeIcon className="h-4 w-4 mr-1" />
                        {filteredTestimonials[currentTestimonial].company}
                      </div>
                      <div className="text-sm text-slate-500">{filteredTestimonials[currentTestimonial].location}</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Project: {filteredTestimonials[currentTestimonial].project}</h4>
                    <div className="space-y-2">
                      {filteredTestimonials[currentTestimonial].results.map((result, index) => (
                        <div key={index} className="flex items-center text-sm text-slate-400">
                          <CheckBadgeIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-center mt-8 space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full card-premium hover:shadow-xl transition-all duration-200 text-slate-400 hover:text-primary"
                  disabled={filteredTestimonials.length <= 1}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                
                <div className="flex space-x-2">
                  {filteredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full card-premium hover:shadow-xl transition-all duration-200 text-slate-400 hover:text-primary"
                  disabled={filteredTestimonials.length <= 1}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Testimonials Grid */}
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
              All Client <span className="highlight">Reviews</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Browse through all our client testimonials and see the impact we've made across different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {serviceIcons[testimonial.category as keyof typeof serviceIcons] && (
                      <div className="p-2 bg-primary/10 rounded-lg mr-3">
                        <div className="text-primary">
                          {serviceIcons[testimonial.category as keyof typeof serviceIcons]}
                        </div>
                      </div>
                    )}
                    <span className="text-sm font-medium text-primary">{testimonial.category}</span>
                  </div>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                <blockquote className="text-slate-300 mb-6 line-clamp-4">
                  "{testimonial.testimonial}"
                </blockquote>

                <div className="border-t pt-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-3">
                      <UserCircleIcon className="h-8 w-8 text-slate-500" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                      <div className="text-slate-400 text-sm">{testimonial.position}</div>
                      <div className="text-slate-500 text-xs">{testimonial.company}</div>
                    </div>
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
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-ghost">
                Start Your Project
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
                View Our Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
