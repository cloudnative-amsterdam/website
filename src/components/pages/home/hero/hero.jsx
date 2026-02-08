import { StaticImage } from 'gatsby-plugin-image';
import { Calendar, MapPin, Users } from 'lucide-react';
import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="cancellation-banner">
        <p className="cancellation-banner-text">
          We regret to announce that <strong>Cloud Native Days Amsterdam 2026</strong> has been
          cancelled. We&apos;ll be back in 2027 — stay tuned!
        </p>
      </div>
      <section className="hero-section">
        <div className="hero-background-grid" />

        <div className="hero-content-container">
          <div className="hero-grid">
            {/* Left column - Content */}
            <div className="hero-left-column fade-in-up">
              <div className="hero-badge-container">
                <span className="hero-badge" style={{ textDecoration: 'line-through' }}>21-22 May 2026</span>
                <span className="hero-badge"><a href="https://wt.ls/cloudnative">Join the mailing list</a></span>
              </div>

              <h1 className="hero-title">
                Cloud Native Days Amsterdam<br></br>
                <span style={{ color: 'green' }}>AI & Sustainability</span>
              </h1>

              <p className="hero-description">
                In May 2026, the cloud native community will gather in Amsterdam. Come and join us!
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
                New name, same mission! Cloud Native Days Amsterdam is a technical community conferece run by the community, for the community. This year we are focusing on AI and Sustainability. We are looking for speakers, sponsors, and volunteers to help us make this event a success. If you are interested in getting involved, please <a href='mailto:info@cloudnative.amsterdam'>reach out to us!</a>
              </p>
              {/* CTA Buttons */}
              <div className="hero-cta-container">
                <button
                  type="button"
                  className="button"
                  style={{ cursor: 'pointer' }}
                  onClick={() => (window.location.href = '#tickets')}
                >
                  Get your ticket<br></br>
                </button>
                <button
                  type="button"
                  className="button"
                  style={{ cursor: 'pointer' }}
                  onClick={() => (window.location.href = '#tickets')}
                >
                  Become a Sponsor<br></br>
                </button>
                <button
                  type="button"
                  className="button"
                  style={{ cursor: 'pointer' }}
                  onClick={() => (window.location.href = '#tickets')}
                >
                  Submit a talk<br></br>
                </button>
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
