import React from 'react';
import { Youtube, Instagram, Facebook, Twitter, ExternalLink } from 'lucide-react';
import './Social.css';

const Social = () => {
  const socialLinks = [
    {
      platform: 'YouTube',
      icon: <Youtube size={32} />,
      desc: 'Watch our latest tutorials, case studies, and behind-the-scenes content.',
      link: '#',
      color: '#FF0000',
      followers: '125K+'
    },
    {
      platform: 'Instagram',
      icon: <Instagram size={32} />,
      desc: 'Follow us for daily design inspiration, UI/UX tips, and office culture.',
      link: '#',
      color: '#E1306C',
      followers: '85K+'
    },
    {
      platform: 'Twitter',
      icon: <Twitter size={32} />,
      desc: 'Join the conversation on tech trends, web development, and digital marketing.',
      link: '#',
      color: '#1DA1F2',
      followers: '45K+'
    },
    {
      platform: 'Facebook',
      icon: <Facebook size={32} />,
      desc: 'Connect with our community and stay updated on our latest company news and events.',
      link: '#',
      color: '#1877F2',
      followers: '110K+'
    }
  ];

  return (
    <div className="social-page pt-20">
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">Join Our <span className="accent glow-text">Community</span></h1>
            <p className="section-subtitle">Connect with us across our social platforms.</p>
          </div>

          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a href={social.link} key={index} className="social-card glass-card">
                <div className="social-card-header">
                  <div
                    className="social-platform-icon"
                    style={{
                      color: social.color,
                      background: `${social.color}15`,
                      boxShadow: `0 0 15px ${social.color}40`
                    }}
                  >
                    {social.icon}
                  </div>
                  <div className="social-stats">
                    <span className="followers">{social.followers}</span>
                    <span className="label">Followers</span>
                  </div>
                </div>

                <h3>{social.platform}</h3>
                <p>{social.desc}</p>

                <div className="social-link-btn" style={{ color: social.color }}>
                  Visit Profile <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Feed Preview (Visual Mockup) */}
      <section className="section-padding bg-navy-light">
        <div className="container">
          <div className="text-center mb-8">
            <h2>Latest <span className="accent">Updates</span></h2>
          </div>

          <div className="feed-preview">
            <div className="feed-item glass-card">
              <div className="feed-header">
                <Instagram size={20} color="#E1306C" />
                <span>@nexusdigital</span>
              </div>
              <div className="feed-img-placeholder">
                <span className="glow-text">New UI Kit Released</span>
              </div>
            </div>

            <div className="feed-item glass-card">
              <div className="feed-header">
                <Twitter size={20} color="#1DA1F2" />
                <span>@nexus_agency</span>
              </div>
              <div className="feed-text">
                <p>Just launched a new e-commerce platform for our client! Blazing fast performance using the latest modern stack. 🚀 #WebDev #UIUX</p>
              </div>
            </div>

            <div className="feed-item glass-card">
              <div className="feed-header">
                <Youtube size={20} color="#FF0000" />
                <span>Nexus TV</span>
              </div>
              <div className="feed-img-placeholder video">
                <div className="play-btn">▶</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Social;
