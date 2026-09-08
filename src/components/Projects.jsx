import React from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-laptop-code"></i> Engineering Work
          </span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          {/* <p className="section-subtitle">
            Deep dive into flagship production architectures, AI agent systems, and distributed marketing automation.
          </p> */}
        </div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <article key={project.id} className="glass-card project-card">
              <div className="project-card-header">
                <div>
                  <span
                    className={`project-badge-pill ${project.badgeType === 'ai' ? 'badge-ai' : 'badge-enterprise'
                      }`}
                  >
                    <i
                      className={`fas ${project.badgeType === 'ai' ? 'fa-robot' : 'fa-cloud'
                        }`}
                    ></i>{' '}
                    {project.badge}
                  </span>
                </div>
                <div className="project-timeline-date">{project.timeline}</div>
              </div>

              <div className="project-card-body">
                <h3 className="project-title">
                  <span>{project.title}</span>
                </h3>

                {/* Architecture Pipeline Flow Box */}
                <div className="arch-highlight-box">
                  <div className="arch-box-title">
                    <i className="fas fa-diagram-project"></i> Pipeline Architecture
                  </div>
                  <div className="arch-flow-tags">
                    {project.pipeline.map((step, idx) => (
                      <React.Fragment key={idx}>
                        <span className="arch-flow-step">{step}</span>
                        {idx < project.pipeline.length - 1 && (
                          <span className="arch-arrow">➔</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Bullet Highlights */}
                <ul className="project-desc-list">
                  {project.highlights.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>

                {/* Stack Tags */}
                <div className="project-stack-tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="stack-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                {/* AI SQL Agent has GitHub button; digiAd.AI has proprietary note */}
                {project.githubUrl ? (
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </a>
                  </div>
                ) : (
                  <div className="proprietary-notice">
                    <i className="fas fa-lock"></i> Proprietary &amp; Enterprise Project
                  </div>
                )}

                <div
                  className="font-mono"
                  style={{
                    fontSize: '0.8rem',
                    color: project.isProprietary ? 'var(--purple-neon)' : 'var(--cyan-neon)',
                  }}
                >
                  <i
                    className={`fas ${project.isProprietary ? 'fa-bolt' : 'fa-circle-check'
                      }`}
                  ></i>{' '}
                  {project.isProprietary ? 'Multi-Tenant System' : 'Production Ready'}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
