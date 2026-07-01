import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  UserGroupIcon,
  HeartIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  CalendarDaysIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import PageHero from '../components/premium/PageHero';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const jobOpenings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Jabalpur, MP',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-15 LPA',
      description: 'Join our engineering team to build scalable web applications using React, Node.js, and cloud technologies.',
      requirements: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'TypeScript'],
      posted: '2 days ago'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Jabalpur, MP / Remote',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6-10 LPA',
      description: 'Create beautiful and intuitive user experiences for our products and client projects.',
      requirements: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Design Systems'],
      posted: '1 week ago'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Jabalpur, MP',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹7-12 LPA',
      description: 'Manage our cloud infrastructure and implement CI/CD pipelines for seamless deployments.',
      requirements: ['AWS/Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      posted: '3 days ago'
    },
    {
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Jabalpur, MP',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹5-8 LPA + Incentives',
      description: 'Drive business growth by identifying new opportunities and building client relationships.',
      requirements: ['B2B Sales', 'Client Management', 'Market Research', 'Communication', 'CRM Tools'],
      posted: '5 days ago'
    },
    {
      title: 'Data Scientist',
      department: 'Engineering',
      location: 'Jabalpur, MP / Remote',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹9-16 LPA',
      description: 'Analyze complex data sets and build machine learning models to drive business insights.',
      requirements: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'Statistics'],
      posted: '1 week ago'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Jabalpur, MP / Remote',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹4-7 LPA',
      description: 'Develop and execute digital marketing strategies to increase brand awareness and lead generation.',
      requirements: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Google Analytics', 'Email Marketing'],
      posted: '4 days ago'
    }
  ];

  const departments = ['All', 'Engineering', 'Design', 'Sales', 'Marketing'];

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance for you and your family',
      icon: <HeartIcon className="h-8 w-8 text-primary" />
    },
    {
      title: 'Learning & Development',
      description: 'Annual learning budget and conference attendance',
      icon: <AcademicCapIcon className="h-8 w-8 text-primary" />
    },
    {
      title: 'Flexible Work',
      description: 'Hybrid work model with flexible hours',
      icon: <ClockIcon className="h-8 w-8 text-primary" />
    },
    {
      title: 'Competitive Salary',
      description: 'Market-competitive compensation packages',
      icon: <CurrencyRupeeIcon className="h-8 w-8 text-primary" />
    },
    {
      title: 'Team Events',
      description: 'Regular team outings and company celebrations',
      icon: <UserGroupIcon className="h-8 w-8 text-primary" />
    },
    {
      title: 'Modern Office',
      description: 'State-of-the-art workspace in the heart of Jabalpur',
      icon: <BuildingOfficeIcon className="h-8 w-8 text-primary" />
    }
  ];

  const cultureValues = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.',
      icon: <LightBulbIcon className="h-12 w-12 text-primary" />
    },
    {
      title: 'Growth Mindset',
      description: 'Continuous learning and personal development are at the core of our culture.',
      icon: <RocketLaunchIcon className="h-12 w-12 text-primary" />
    },
    {
      title: 'Global Impact',
      description: 'Our work reaches clients worldwide, making a meaningful difference in their businesses.',
      icon: <GlobeAltIcon className="h-12 w-12 text-primary" />
    },
    {
      title: 'Work-Life Balance',
      description: 'We believe in maintaining a healthy balance between professional and personal life.',
      icon: <ShieldCheckIcon className="h-12 w-12 text-primary" />
    }
  ];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen section-surface-soft">
      <PageHero
        badge="Join Our Team"
        title="Build Your"
        highlight="Career"
        description="Build the future of technology with us. We're looking for passionate individuals who want to make a difference."
      >
        <div className="flex flex-wrap gap-8 text-sm text-slate-400 mt-8">
          <div className="flex items-center">
            <UserGroupIcon className="h-5 w-5 mr-2 text-indigo-400" />
            50+ Team Members
          </div>
          <div className="flex items-center">
            <MapPinIcon className="h-5 w-5 mr-2 text-indigo-400" />
            Jabalpur, India
          </div>
          <div className="flex items-center">
            <GlobeAltIcon className="h-5 w-5 mr-2 text-indigo-400" />
            Remote Friendly
          </div>
        </div>
      </PageHero>

      {/* Company Culture */}
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
              Our Culture & <span className="highlight">Values</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We foster an environment where innovation thrives and every team member can grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Work With <span className="highlight">Us?</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We offer comprehensive benefits and perks to ensure our team members thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
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
              Open <span className="highlight">Positions</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
              Explore our current job openings and find your perfect role.
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedDepartment === dept
                      ? 'bg-primary text-white'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-premium p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold text-white mr-3">{job.title}</h3>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                      <div className="flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <CurrencyRupeeIcon className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">
                        <CalendarDaysIcon className="h-4 w-4 mr-1" />
                        {job.posted}
                      </div>
                    </div>
                    <p className="text-slate-400 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req, reqIndex) => (
                        <span
                          key={reqIndex}
                          className="bg-white/5 text-slate-300 px-3 py-1 rounded-full text-sm"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="btn btn-primary w-full lg:w-auto flex items-center justify-center">
                      Apply Now
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-slate-500 text-lg">No positions available in {selectedDepartment} department.</p>
              <p className="text-slate-500 mt-2">Check back soon or explore other departments.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Process */}
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
              Our Hiring <span className="highlight">Process</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We've designed a transparent and efficient hiring process to find the best talent.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Application',
                  description: 'Submit your resume and cover letter through our careers portal.'
                },
                {
                  step: '02',
                  title: 'Screening',
                  description: 'Our HR team reviews your application and conducts an initial screening call.'
                },
                {
                  step: '03',
                  title: 'Interview',
                  description: 'Technical and cultural fit interviews with our team members.'
                },
                {
                  step: '04',
                  title: 'Offer',
                  description: 'Successful candidates receive a competitive offer and welcome package.'
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{process.title}</h3>
                  <p className="text-slate-400 text-sm">{process.description}</p>
                </motion.div>
              ))}
            </div>
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
              Don't See Your Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-ghost">
                Send Resume
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-white hover:text-primary">
                Join Our Talent Pool
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
