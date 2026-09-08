import React from 'react';
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-award"></i> Credentials
          </span>
          <h2 className="section-title">
            Education &amp; <span className="text-gradient">Recognitions</span>
          </h2>
          <p className="section-subtitle">
            Strong academic foundations paired with competitive problem-solving milestones.
          </p>
        </div>

        <div className="edu-grid">
          {/* Education Card */}
          <div className="glass-card edu-card">
            <div>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--cyan-neon)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                <i className="fas fa-graduation-cap"></i> Undergraduate Degree
              </div>
              <h3 className="edu-institution">{EDUCATION_DATA.institution}</h3>
              <div className="edu-degree">{EDUCATION_DATA.degree}</div>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.88rem',
                  marginBottom: '20px',
                }}
              >
                <i className="fas fa-calendar"></i> {EDUCATION_DATA.period} • {EDUCATION_DATA.location}
              </p>
            </div>

            <div className="edu-metrics-badge">
              <i className="fas fa-medal"></i> Cumulative Grade: {EDUCATION_DATA.cgpa} CGPA
            </div>
          </div>

          {/* Achievements & Certifications List */}
          <div className="achieve-cert-list">
            {ACHIEVEMENTS_DATA.map((achieve, idx) => (
              <div key={idx} className="glass-card achieve-item">
                <div
                  className="achieve-icon-box"
                  style={{
                    background: `${achieve.color}20`,
                    color: achieve.color,
                  }}
                >
                  <i className={`fas ${achieve.icon}`}></i>
                </div>
                <div>
                  <h4 className="achieve-title">{achieve.title}</h4>
                  <div className="achieve-desc">
                    {achieve.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
