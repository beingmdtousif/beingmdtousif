import React from 'react';
import { Instagram as InstaIcon } from 'lucide-react';

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    link: '#'
  },
  {
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
    link: '#'
  }
];

const Instagram = () => {
  return (
    <section id="instagram" className="section">
      <div className="section-header glossy-card title-card">
        <h2 className="section-title"><InstaIcon className="inline-icon text-pink" /> Instagram Updates</h2>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Follow Me</a>
      </div>

      <div className="insta-grid">
        {posts.map((post, index) => (
          <a href={post.link} key={index} className="insta-card glossy-card">
            <img src={post.image} alt="Instagram post" className="insta-image" />
            <div className="insta-overlay">
              <span>View on Instagram</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Instagram;
