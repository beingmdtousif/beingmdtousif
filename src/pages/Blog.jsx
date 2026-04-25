import React from 'react';
import { BookOpen } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends in web development, including server components, AI integration, and WebAssembly.',
    date: 'Oct 15, 2023',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Why Your Business Needs a Custom Web App',
    excerpt: 'Off-the-shelf solutions are great, but custom web applications can provide the exact functionality your business needs to scale.',
    date: 'Nov 02, 2023',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Optimizing React Performance',
    excerpt: 'Tips and tricks for making your React applications lightning fast, improving user experience and SEO.',
    date: 'Dec 10, 2023',
    readTime: '6 min read'
  }
];

const Blog = () => {
  return (
    <section id="blog" className="section">
      <div className="section-header glossy-card title-card">
        <h2 className="section-title"><BookOpen className="inline-icon text-cyan" /> Our Blog</h2>
      </div>

      <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card glossy-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3>{post.title}</h3>
            <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <p style={{ flex: 1 }}>{post.excerpt}</p>
            <button className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem' }}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
