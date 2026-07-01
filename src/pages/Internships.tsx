import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../components/premium/PageHero';
import {
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  StarIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  MegaphoneIcon,
  LanguageIcon,
  ServerIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const Internships: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Programs', count: 7 },
    { id: 'development', name: 'Development', count: 5, icon: <CodeBracketIcon className="h-4 w-4" /> },
    { id: 'marketing', name: 'Marketing', count: 1, icon: <MegaphoneIcon className="h-4 w-4" /> },
    { id: 'language', name: 'Language', count: 1, icon: <LanguageIcon className="h-4 w-4" /> }
  ];

  const programs = [
    {
      id: 1,
      title: 'Full Stack Development',
      category: 'development',
      duration: '6 months',
      level: 'Intermediate',
      description: 'Comprehensive full-stack development program covering frontend and backend technologies with hands-on projects.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML/CSS'],
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: <CodeBracketIcon className="h-8 w-8" />,
      students: '150+ enrolled',
      rating: 4.9,
      features: ['Live Projects', 'Mentorship', 'Job Assistance', 'Certificate'],
      curriculum: [
        'Frontend Development (React, HTML, CSS, JavaScript)',
        'Backend Development (Node.js, Express)',
        'Database Management (MongoDB, MySQL)',
        'API Development & Integration',
        'Version Control (Git)',
        'Deployment & DevOps Basics'
      ],
      outcomes: {
        placement: '85% placement rate',
        salary: 'Average ₹4.5L CTC',
        projects: '5+ live projects'
      }
    },
    {
      id: 2,
      title: 'LARAVEL MVC Development',
      category: 'development',
      duration: '4 months',
      level: 'Intermediate',
      description: 'Master PHP Laravel framework with MVC architecture, building scalable web applications and APIs.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Eloquent ORM', 'Composer'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: <ServerIcon className="h-8 w-8" />,
      students: '120+ enrolled',
      rating: 4.8,
      features: ['Real Projects', 'Industry Mentors', 'Job Support', 'Certification'],
      curriculum: [
        'PHP Fundamentals & OOP',
        'Laravel Framework Architecture',
        'MVC Pattern Implementation',
        'Database Design & Eloquent ORM',
        'Authentication & Authorization',
        'API Development & Testing'
      ],
      outcomes: {
        placement: '80% placement rate',
        salary: 'Average ₹4L CTC',
        projects: '4+ web applications'
      }
    },
    {
      id: 3,
      title: 'MERN Stack Development',
      category: 'development',
      duration: '5 months',
      level: 'Advanced',
      description: 'Complete MERN stack mastery with MongoDB, Express.js, React, and Node.js for modern web applications.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux', 'JWT'],
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: <CpuChipIcon className="h-8 w-8" />,
      students: '200+ enrolled',
      rating: 4.9,
      features: ['Industry Projects', 'Expert Mentorship', 'Placement Support', 'Portfolio Building'],
      curriculum: [
        'MongoDB Database Design',
        'Express.js Server Development',
        'React Frontend Development',
        'Node.js Backend Programming',
        'State Management with Redux',
        'Authentication & Security'
      ],
      outcomes: {
        placement: '90% placement rate',
        salary: 'Average ₹5.5L CTC',
        projects: '6+ full-stack projects'
      }
    },
    {
      id: 4,
      title: 'Hybrid App Development',
      category: 'development',
      duration: '4 months',
      level: 'Intermediate',
      description: 'Build cross-platform mobile applications using React Native and Flutter frameworks.',
      technologies: ['React Native', 'Flutter', 'Dart', 'Firebase', 'API Integration'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      students: '100+ enrolled',
      rating: 4.7,
      features: ['Mobile Projects', 'App Store Deployment', 'Mentorship', 'Job Assistance'],
      curriculum: [
        'Mobile App Development Fundamentals',
        'React Native Development',
        'Flutter & Dart Programming',
        'UI/UX for Mobile Apps',
        'API Integration & State Management',
        'App Store Deployment'
      ],
      outcomes: {
        placement: '75% placement rate',
        salary: 'Average ₹4.2L CTC',
        projects: '3+ mobile apps'
      }
    },
    {
      id: 5,
      title: 'Android App Development',
      category: 'development',
      duration: '4 months',
      level: 'Beginner to Intermediate',
      description: 'Native Android development using Java/Kotlin with modern Android development practices.',
      technologies: ['Java', 'Kotlin', 'Android Studio', 'SQLite', 'Firebase', 'Material Design'],
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
      students: '80+ enrolled',
      rating: 4.6,
      features: ['Native Development', 'Play Store Publishing', 'Industry Mentors', 'Certificate'],
      curriculum: [
        'Java/Kotlin Programming',
        'Android Studio & Development Tools',
        'UI Design & Material Components',
        'Data Storage & SQLite',
        'API Integration & Networking',
        'App Publishing & Monetization'
      ],
      outcomes: {
        placement: '70% placement rate',
        salary: 'Average ₹3.8L CTC',
        projects: '4+ Android apps'
      }
    },
    {
      id: 6,
      title: 'Digital Marketing',
      category: 'marketing',
      duration: '3 months',
      level: 'Beginner to Advanced',
      description: 'Complete digital marketing program covering SEO, SEM, social media, content marketing, and analytics.',
      technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEO Tools', 'Content Management'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: <MegaphoneIcon className="h-8 w-8" />,
      students: '180+ enrolled',
      rating: 4.8,
      features: ['Live Campaigns', 'Google Certification', 'Industry Projects', 'Job Support'],
      curriculum: [
        'Digital Marketing Fundamentals',
        'Search Engine Optimization (SEO)',
        'Search Engine Marketing (SEM)',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Analytics & Performance Tracking'
      ],
      outcomes: {
        placement: '85% placement rate',
        salary: 'Average ₹3.5L CTC',
        projects: '10+ marketing campaigns'
      }
    },
    {
      id: 7,
      title: 'Language Training',
      category: 'language',
      duration: '6 months',
      level: 'All Levels',
      description: 'Professional language training programs for English, Hindi, and regional languages for career advancement.',
      technologies: ['Communication Skills', 'Business English', 'Presentation Skills', 'Writing Skills'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: <LanguageIcon className="h-8 w-8" />,
      students: '250+ enrolled',
      rating: 4.7,
      features: ['Personalized Learning', 'Speaking Practice', 'Business Communication', 'Certification'],
      curriculum: [
        'Grammar & Vocabulary Building',
        'Speaking & Pronunciation',
        'Business Communication',
        'Presentation Skills',
        'Written Communication',
        'Interview Preparation'
      ],
      outcomes: {
        improvement: '90% fluency improvement',
        confidence: '95% confidence boost',
        career: 'Better career opportunities'
      }
    }
  ];

  const stats = [
    {
      number: '500+',
      label: 'Students Trained',
      icon: <UserGroupIcon className="h-8 w-8" />
    },
    {
      number: '7',
      label: 'Programs Available',
      icon: <AcademicCapIcon className="h-8 w-8" />
    },
    {
      number: '85%',
      label: 'Average Placement Rate',
      icon: <CheckCircleIcon className="h-8 w-8" />
    },
    {
      number: '4.8',
      label: 'Average Rating',
      icon: <StarIcon className="h-8 w-8" />
    }
  ];

  const filteredPrograms = programs.filter(program => {
    return activeFilter === 'all' || program.category === activeFilter;
  });

  return (
    <div className="min-h-screen section-surface-soft">
      <PageHero
        badge="Professional Training Programs"
        title="Internship"
        highlight="Programs"
        description="Launch your tech career with our comprehensive internship programs. Get hands-on experience, industry mentorship, and job placement support."
      />

      {/* Stats Section */}
      <section className="py-16 border-b border-white/8">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-white/10">
        <div className="container-premium">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <div className="text-primary">
                      {program.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {program.level}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {program.category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <StarIcon className="h-4 w-4 fill-current" />
                      <span className="text-sm ml-1">{program.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-slate-400 mb-4 line-clamp-2">{program.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-slate-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center text-slate-500">
                      <UserGroupIcon className="h-4 w-4 mr-1" />
                      <span className="text-sm">{program.students}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-white/5 text-slate-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {program.technologies.length > 3 && (
                      <span className="text-xs text-slate-500">
                        +{program.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-slate-400">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full btn bg-primary text-white hover:bg-primary-dark"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 cta-section">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who launched their careers with our internship programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn btn-ghost"
              >
                Apply Today
              </Link>
              <Link
                to="/about"
                className="btn border-white text-white hover:bg-white hover:text-primary"
              >
                Download Brochure
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Internships;
