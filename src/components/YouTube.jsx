import React from 'react';
import { Youtube, Play } from 'lucide-react';

const videos = [
  {
    title: 'How I built my Portfolio Website',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    views: '12K views',
    date: '2 weeks ago',
    link: '#'
  },
  {
    title: '10 React Tips for Beginners',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80',
    views: '45K views',
    date: '1 month ago',
    link: '#'
  },
  {
    title: 'A Day in the Life of a Software Engineer',
    thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    views: '100K views',
    date: '3 months ago',
    link: '#'
  }
];

const YouTube = () => {
  return (
    <section id="youtube" className="section">
      <div className="section-header glossy-card title-card">
        <h2 className="section-title"><Youtube className="inline-icon text-red" /> Latest Videos</h2>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Subscribe</a>
      </div>

      <div className="video-grid">
        {videos.map((video, index) => (
          <a href={video.link} key={index} className="video-card glossy-card">
            <div className="video-thumbnail-container">
              <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
              <div className="play-overlay">
                <Play size={40} className="play-icon" />
              </div>
            </div>
            <div className="video-info">
              <h4>{video.title}</h4>
              <p className="video-stats">{video.views} • {video.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default YouTube;
