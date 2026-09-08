import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-briefcase"></i> Track Record
          </span>
          <h2 className="section-title">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          {/* <p className="section-subtitle">
            Proven commercial experience delivering high-throughput APIs, data-driven report engines, 
            and collaborating with global engineering teams.
          </p> */}
        </div>

        <div className="timeline-container">
          {EXPERIENCE_DATA.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <div className="timeline-company">
                      <i className="fas fa-building"></i> {item.company}
                      <span
                        style={{
                          color: 'var(--text-muted)',
                          fontSize: '0.85rem',
                          fontWeight: 'normal',
                          marginLeft: '6px',
                        }}
                      >
                        • {item.location}
                      </span>
                    </div>
                  </div>
                  <span className="timeline-period-badge">
                    <i className="fas fa-calendar-alt"></i> {item.period}
                  </span>
                </div>

                <ul className="timeline-bullets">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
