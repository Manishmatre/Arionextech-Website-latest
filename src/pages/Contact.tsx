import { useState } from 'react';
import PageHero from '../components/premium/PageHero';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import { submitContactForm } from '../lib/contactSubmit';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    number: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitNote, setSubmitNote] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitNote('');

    try {
      const result = await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.number,
        subject: formData.subject || 'Website inquiry',
        message: formData.message,
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        number: '',
      });

      if (result.emailSent && result.apiSaved) {
        setSubmitNote('Sent to our team email and saved to our system.');
      } else if (result.emailSent) {
        setSubmitNote('Sent to our team email.');
      } else if (result.apiSaved) {
        setSubmitNote('Saved to our system — we will get back to you soon.');
      }

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setSubmitNote('');
      }, 6000);
    } catch (error) {
      console.error('Form submission error:', error);
      const msg = error instanceof Error ? error.message : 'There was an error sending your message.';
      alert(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6 text-primary" />,
      title: 'Our Office',
      description: '43A, Vijay Nagar, Jabalpur, Raksha, Madhya Pradesh 482002',
    },
    {
      icon: <PhoneIcon className="h-6 w-6 text-primary" />,
      title: 'Phone',
      description: '+91 88170 88544',
    },
    {
      icon: <EnvelopeIcon className="h-6 w-6 text-primary" />,
      title: 'Email',
      description: 'arionextech@gmail.com',
    },
    {
      icon: <ClockIcon className="h-6 w-6 text-primary" />,
      title: 'Business Hours',
      description: 'Mon - Fri: 9:00 AM - 6:00 PM IST',
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="h-5 w-5" />, url: 'https://facebook.com/arionextech', name: 'Facebook' },
    { icon: <FaTwitter className="h-5 w-5" />, url: 'https://twitter.com/arionextech', name: 'Twitter' },
    { icon: <FaLinkedin className="h-5 w-5" />, url: 'https://linkedin.com/company/arionextech', name: 'LinkedIn' },
    { icon: <FaInstagram className="h-5 w-5" />, url: 'https://instagram.com/arionextech', name: 'Instagram' },
  ];

  return (
    <div className="min-h-screen section-surface-soft">
      <PageHero
        badge="Contact"
        title="Let's build"
        highlight="together"
        description="Have a project in mind? Tell us about your goals — we'll respond within 24 hours."
      />

      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-emerald-500/90 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 max-w-md"
        >
          <CheckCircleIcon className="h-6 w-6 shrink-0" />
          <div>
            <p className="font-medium">Message sent successfully!</p>
            {submitNote && <p className="text-sm text-emerald-100 mt-1">{submitNote}</p>}
          </div>
        </motion.div>
      )}

      <section className="section-pad pt-0">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-premium p-8"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">
                Send a <span className="text-gradient-accent">message</span>
              </h2>
              <form onSubmit={handleSubmit} className="dark-form space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={errors.name ? 'border-red-500' : ''}
                      placeholder="your name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={errors.email ? 'border-red-500' : ''}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="subject">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                    <option value="WordPress Development">WordPress Development</option>
                    {/* <option value="Cloud Solutions">Cloud Solutions</option> */}
                    {/* <option value="DevOps & Infrastructure">DevOps & Infrastructure</option> */}
                    {/* <option value="Cybersecurity">Cybersecurity</option> */}
                    {/* <option value="AI/ML Solutions">AI/ML Solutions</option> */}
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Support & Maintenance">Support & Maintenance</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Career Inquiry">Career Inquiry</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="number">Phone Number</label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label htmlFor="message">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={errors.message ? 'border-red-500' : ''}
                    placeholder="Tell us about your project..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="card-premium p-8">
                <h2 className="section-heading">
                  Contact <span className="highlight">Information</span>
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-white">{item.title}</h3>
                        <p className="text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-200"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="card-premium overflow-hidden">
                <div className="h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.5604687153836!2d79.90224957387176!3d23.18623671020354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1c5a3fe8201%3A0xb3e36a3abcb8225f!2sVijay%20Nagar%2C%20Jabalpur%2C%20Raksha%2C%20Madhya%20Pradesh%20482002!5e0!3m2!1sen!2sin!4v1757243455964!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ArionexTech Office Location"
                  ></iframe>
                </div>
                <div className="p-4 bg-[#08080e]">
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                    <p className="text-sm text-slate-400">43A, Vijay Nagar, Jabalpur, Raksha, Madhya Pradesh 482002</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
