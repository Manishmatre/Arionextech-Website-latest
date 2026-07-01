import { motion } from 'framer-motion';
import { BuildingOfficeIcon, LightBulbIcon, UserGroupIcon, ClockIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import Logo from '@/assets/arionextech_Logo.png';
import SEO from '../components/SEO';
import PageHero from '../components/premium/PageHero';

const About = () => {

  const stats = [
    { label: 'Years Experience', value: '5+', icon: ClockIcon },
    { label: 'Projects Completed', value: '50+', icon: BuildingOfficeIcon },
    { label: 'Happy Clients', value: '40+', icon: UserGroupIcon },
    { label: 'Global Reach', value: '10+', icon: GlobeAltIcon },
  ];

  const values = [
    {
      name: 'Innovation',
      description: 'We embrace change and constantly seek new ways to solve problems.',
      icon: LightBulbIcon,
    },
    {
      name: 'Excellence',
      description: 'We are committed to delivering the highest quality in everything we do.',
      icon: BuildingOfficeIcon,
    },
    {
      name: 'Collaboration',
      description: 'We believe in the power of teamwork and strong partnerships.',
      icon: UserGroupIcon,
    },
  ];

  return (
    <div className="bg-[#050508] min-h-screen">
      <SEO 
        title="About ArionexTech - Leading Software Development Company | Our Story & Team"
        description="Learn about ArionexTech, a premier software development company with 5+ years of experience. Meet our expert team and discover our mission to transform businesses through innovative technology solutions."
        keywords="about ArionexTech, software development company, our team, company story, technology experts, software solutions, IT company India"
        url="/about"
      />
      <PageHero
        badge="Our Story"
        title="About"
        highlight="ArionexTech"
        description="Empowering businesses through innovative technology solutions. We combine 5+ years of expertise, innovation, and dedication to deliver exceptional results."
      />

      {/* Stats Section */}
      <section className="py-12 bg-[#08080e]">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-slate-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
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
              Our <span className="highlight">Story</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              From humble beginnings to industry leaders - discover how we've grown and evolved.
            </p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4 text-slate-400">
                <p>
                  ArionexTech is a dynamic technology company built on 5+ years of combined industry experience. We started with a vision to create 
                  innovative software solutions that make a real difference for businesses worldwide.
                </p>
                <p>
                  As a full-service technology company, we help businesses of all sizes 
                  transform their ideas into reality through cutting-edge technology and exceptional service. Our team brings together 
                  years of expertise from various tech domains to deliver outstanding results.
                </p>
                <p>
                  Our commitment to quality, innovation, and customer satisfaction drives everything we do. We believe in building 
                  long-term partnerships with our clients and delivering solutions that exceed expectations.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 bg-white/5 rounded-xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 h-80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent"></div>
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/30 rounded-full"></div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-cyan-400/20 rounded-full"></div>
                <div className="absolute bottom-6 left-8 w-20 h-20 bg-primary/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/40 rounded-full"></div>
                <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
                  <img
                    src={Logo}
                    alt="ArionexTech Logo"
                    className="h-32 w-auto mb-4 select-none"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="text-sm text-primary/70 mt-2">Innovation • Excellence • Growth</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#08080e]">
        <div className="container-premium">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">
              Our <span className="highlight">Values</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              The principles that guide our work and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.name}</h3>
                  <p className="text-slate-400">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-premium">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">
              Meet Our <span className="highlight">Team</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Passionate individuals dedicated to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[
              { 
                name: 'Manish Matre', 
                role: 'CEO & Founder', 
                image: 'CEO',
                description: 'Visionary leader driving ArionexTech\'s growth and innovation in software development.',
                social: {
                  linkedin: 'https://linkedin.com/in/manishmatre',
                  twitter: 'https://twitter.com/manishmatre',
                  github: 'https://github.com/manishmatre'
                },
                isFounder: true
              },
              { 
                name: 'Nidhi Sharma', 
                role: 'Business Development Executive', 
                image: 'BDE',
                description: 'Expert in client relations and business growth, connecting businesses with perfect tech solutions.',
                social: {
                  linkedin: '#',
                  twitter: '#',
                  instagram: '#'
                },
                isFounder: false
              },
              { 
                name: 'Arjun Kumar', 
                role: 'Chief Technology Officer', 
                image: 'CTO',
                description: 'Technical mastermind overseeing all development projects and ensuring cutting-edge solutions.',
                social: {
                  linkedin: '#',
                  github: '#',
                  twitter: '#'
                },
                isFounder: false
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium overflow-hidden"
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">{member.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-slate-400 text-sm mb-4">{member.description}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-start space-x-3">
                    {member.social.linkedin && (
                      <a
                        href={member.isFounder ? member.social.linkedin : '#'}
                        target={member.isFounder ? "_blank" : "_self"}
                        rel={member.isFounder ? "noopener noreferrer" : ""}
                        onClick={!member.isFounder ? (e) => e.preventDefault() : undefined}
                        className={`w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors duration-300 ${!member.isFounder ? 'cursor-default opacity-60' : 'cursor-pointer'}`}
                      >
                        <FaLinkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.isFounder ? member.social.twitter : '#'}
                        target={member.isFounder ? "_blank" : "_self"}
                        rel={member.isFounder ? "noopener noreferrer" : ""}
                        onClick={!member.isFounder ? (e) => e.preventDefault() : undefined}
                        className={`w-8 h-8 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-colors duration-300 ${!member.isFounder ? 'cursor-default opacity-60' : 'cursor-pointer'}`}
                      >
                        <FaTwitter className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.isFounder ? member.social.github : '#'}
                        target={member.isFounder ? "_blank" : "_self"}
                        rel={member.isFounder ? "noopener noreferrer" : ""}
                        onClick={!member.isFounder ? (e) => e.preventDefault() : undefined}
                        className={`w-8 h-8 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-colors duration-300 ${!member.isFounder ? 'cursor-default opacity-60' : 'cursor-pointer'}`}
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.isFounder ? member.social.instagram : '#'}
                        target={member.isFounder ? "_blank" : "_self"}
                        rel={member.isFounder ? "noopener noreferrer" : ""}
                        onClick={!member.isFounder ? (e) => e.preventDefault() : undefined}
                        className={`w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-colors duration-300 ${!member.isFounder ? 'cursor-default opacity-60' : 'cursor-pointer'}`}
                      >
                        <FaInstagram className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
