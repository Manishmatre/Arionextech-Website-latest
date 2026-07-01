import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import PageHero from '../components/premium/PageHero';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the latest web development trends including AI integration, serverless architecture, and progressive web apps that are shaping the industry.',
    content: 'Full blog content here...',
    author: 'ArionexTech Team',
    publishDate: '2025-01-08',
    readTime: '8 min read',
    category: 'Web Development',
    tags: ['React', 'AI', 'Serverless', 'PWA'],
    image: '/src/assets/blog/web-dev-trends-2025.jpg',
    slug: 'future-web-development-trends-2025'
  },
  {
    id: '2',
    title: 'Mobile App Development: Native vs Cross-Platform in 2025',
    excerpt: 'Compare the pros and cons of native and cross-platform mobile development approaches to make the best choice for your project.',
    content: 'Full blog content here...',
    author: 'ArionexTech Team',
    publishDate: '2025-01-05',
    readTime: '6 min read',
    category: 'Mobile Development',
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    image: '/src/assets/blog/native-vs-cross-platform.jpg',
    slug: 'native-vs-cross-platform-mobile-development'
  },
  {
    id: '3',
    title: 'AI and Machine Learning Integration in Modern Software',
    excerpt: 'Learn how AI and ML are transforming software development and how your business can leverage these technologies for competitive advantage.',
    content: 'Full blog content here...',
    author: 'ArionexTech Team',
    publishDate: '2025-01-03',
    readTime: '10 min read',
    category: 'AI & Machine Learning',
    tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
    image: '/src/assets/blog/ai-ml-integration.jpg',
    slug: 'ai-machine-learning-integration-software'
  },
  {
    id: '4',
    title: 'Cloud Migration Strategy: A Complete Guide for Businesses',
    excerpt: 'Step-by-step guide to successfully migrate your business to the cloud with minimal downtime and maximum efficiency.',
    content: 'Full blog content here...',
    author: 'ArionexTech Team',
    publishDate: '2025-01-01',
    readTime: '12 min read',
    category: 'Cloud Solutions',
    tags: ['AWS', 'Azure', 'Cloud Migration', 'DevOps'],
    image: '/src/assets/blog/cloud-migration-guide.jpg',
    slug: 'cloud-migration-strategy-complete-guide'
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen section-surface-soft">
      <PageHero
        badge="Tech Insights"
        title="Latest"
        highlight="Blog Posts"
        description="Stay ahead with the latest trends, insights, and best practices in software development, technology, and digital transformation."
      />

      {/* Blog Posts Grid */}
      <section className="py-20 section-surface">
        <div className="container-premium">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeInUp}
                className="card-premium overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-slate-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-slate-500">
                      <UserIcon className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    
                    <button className="text-primary hover:text-blue-600 font-medium transition-colors">
                      Read More →
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 text-slate-400 text-xs rounded-md flex items-center"
                      >
                        <TagIcon className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20">
        <div className="container-premium">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Tech Trends
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights, tutorials, and industry updates 
              delivered straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="btn btn-ghost">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
