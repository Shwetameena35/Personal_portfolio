import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-user-ninja"></i> Background &amp; Focus
          </span>
          <h2 className="section-title">
            About <span className="text-gradient">Shweta Meena</span>
          </h2>
          {/* <p className="section-subtitle">
            Engineering resilient backend infrastructures, crafting seamless developer tooling,
            and bridging systems with modern AI agents.
          </p> */}
        </div>

        <div className="about-bento-grid">
          {/* Main narrative card */}
          <div className="glass-card about-card-main">
            <div>
              <p className="about-lead">
                I am a full-stack software engineer with <strong>1.5+ years of experience</strong>, with a deep passion for low-latency server-side systems,
                clean data modeling, and robust API architecture.
              </p>
              <p className="about-paragraph">
                With hands-on experience developing enterprise features at <strong>Xalt Analytics</strong>
                and building report-driven solutions at <strong>TNGS.ES</strong> (Valencia, Spain), I specialize in
                architecting scalable microservices, relational database schemas, and unit/integration testing workflows.
              </p>
              <p className="about-paragraph">
                I thrive in collaborative, agile teams where reliability, clean domain-driven code,
                and data protection best practices are paramount. Currently, I am actively exploring
                local LLM orchestration (Ollama), event-driven queues (RabbitMQ), and cloud storage pipelines.
              </p>
            </div>

            <div className="about-pillars">
              <div className="pillar-item">
                <div className="pillar-icon" style={{ background: 'rgba(255, 106, 0, 0.14)', color: 'var(--sunset-orange)' }}>
                  <i className="fas fa-bolt"></i>
                </div>
                <div className="pillar-title">High Performance</div>
                <div className="pillar-desc">Optimized SQL queries, connection pooling, and sub-second response times.</div>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon" style={{ background: 'rgba(244, 63, 94, 0.14)', color: 'var(--sunset-rose)' }}>
                  <i className="fas fa-shield-halved"></i>
                </div>
                <div className="pillar-title">Security &amp; Auth</div>
                <div className="pillar-desc">JWT tokens, bcrypt password hashing, input validation, and RBAC policies.</div>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon" style={{ background: 'rgba(245, 158, 11, 0.14)', color: 'var(--sunset-amber)' }}>
                  <i className="fas fa-vial-circle-check"></i>
                </div>
                <div className="pillar-title">Production Quality</div>
                <div className="pillar-desc">Rigorous unit/integration testing, Git workflows, and defensive debugging.</div>
              </div>
            </div>
          </div>

          {/* Quick facts bento column */}
          <div className="about-side-cards">
            <div className="glass-card info-quick-card">
              <div className="info-quick-icon" style={{ background: 'rgba(244, 63, 94, 0.14)', color: 'var(--sunset-rose)' }}>
                <i className="fas fa-location-dot"></i>
              </div>
              <div>
                <div className="info-quick-label">Location</div>
                <div className="info-quick-val">Indore, Madhya Pradesh</div>
                <div className="info-quick-sub">Open to On-site, Hybrid &amp; Remote</div>
              </div>
            </div>

            <div className="glass-card info-quick-card">
              <div className="info-quick-icon" style={{ background: 'rgba(255, 106, 0, 0.14)', color: 'var(--sunset-orange)' }}>
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div>
                <div className="info-quick-label">Education</div>
                <div className="info-quick-val">B.Tech in Computer Science</div>
                <div className="info-quick-sub">PIEMR (CGPA: 8.58 / 10.0)</div>
              </div>
            </div>

            <div className="glass-card info-quick-card">
              <div className="info-quick-icon" style={{ background: 'rgba(168, 85, 247, 0.12)', color: 'var(--purple-neon)' }}>
                <i className="fas fa-briefcase"></i>
              </div>
              <div>
                <div className="info-quick-label">Industry Experience</div>
                <div className="info-quick-val">Software Developer &amp; Intern</div>
                <div className="info-quick-sub">Xalt Analytics &amp; TNGS.ES (Spain)</div>
              </div>
            </div>

            <div className="glass-card info-quick-card">
              <div className="info-quick-icon" style={{ background: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b' }}>
                <i className="fas fa-users-gear"></i>
              </div>
              <div>
                <div className="info-quick-label">Leadership</div>
                <div className="info-quick-val">GDSC Coordinator</div>
                <div className="info-quick-sub">Google Developer Student Club @ PIEMR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
