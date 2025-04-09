import { StaticImage } from 'gatsby-plugin-image';
import { Calendar, MapPin, Users } from 'lucide-react';
import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <section className="hero-section">
        <div className="hero-background-grid" />

        <div className="hero-content-container">
          <div className="hero-grid">
            {/* Left column - Content */}
            <div className="hero-left-column fade-in-up">
              <span className="hero-badge">October 16th – 17th, 2025 (provisional)</span>

              <h1 className="hero-title">
                Cloud Native Days Amsterdam<br></br>
                <span style={{ color: 'green' }}>AI & Sustainability</span>
              </h1>

              <p className="hero-description">
                In October 2025, the cloud native community will gather in Amsterdam. Come and join us!
              </p>

              {/* Feature List */}
              <ul className="hero-feature-list">
                <li className="hero-feature-item">
                  <Calendar className="hero-icon" />
                  <span>Two-day technical event</span>
                </li>
                <li className="hero-feature-item">
                  <MapPin className="hero-icon" />
                  <span>Amsterdam, The Netherlands</span>
                </li>
                <li className="hero-feature-item">
                  <Users className="hero-icon" />
                  <span>Developers, Platform Engineers, and IT Professionals</span>
                </li>
              </ul>

              <p className="hero-description">
                New name. Same mission! Cloud Native Community Days Amsterdam is run by the community for the community!
              </p>
              {/* CTA Buttons */}
              <div className="hero-cta-container">
                <button
                  type="button"
                  className="button"
                  style={{ cursor: 'pointer' }}
                  onClick={() => (window.location.href = '#tickets')}
                >
                  Get your Ticket<br></br> (not opened yet)
                </button>
                {
                  <button
                    type="button"
                    className="hero-cta-secondary"
                    onClick={() => (window.location.href = '#sponsors')}
                  >
                    Become a Sponsor
                  </button>
                }
                {
                  <button
                    type="button"
                    className="hero-cta-secondary"
                    onClick={() => (window.location.href = '#proposal')}
                  >
                    Submit a Talk
                  </button>
                }
              </div>
            </div>

            <div className="hero-right-column fade-in-scale">
              <div className="hero-illustration-container">
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '1',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                  }}
                >
                  <StaticImage
                    src="./images/hero.png"
                    alt="Hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
