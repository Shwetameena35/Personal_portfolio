import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { key: 'all', label: 'All Skills' },
    { key: 'languages', label: 'Languages' },
    { key: 'backend', label: 'Backend & Architecture' },
    { key: 'database', label: 'Databases & Queues' },
    { key: 'frontend', label: 'Frontend & UI' },
    { key: 'tools', label: 'Cloud & DevOps' },
  ];

  const filteredCategories =
    activeFilter === 'all'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((cat) => cat.category === activeFilter);

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-code"></i> Capabilities &amp; Stack
          </span>
          <h2 className="section-title">
            Technical <span className="text-gradient">Toolkit</span>
          </h2>
          {/* <p className="section-subtitle">
            A comprehensive set of modern languages, server frameworks, database systems, 
            and developer tools I use to deliver end-to-end software.
          </p> */}
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter-nav">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              className={`filter-btn ${activeFilter === opt.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(opt.key)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-categories-grid">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="glass-card skill-category-card"
            >
              <div className="category-header">
                <div
                  className="category-icon"
                  style={{
                    background: `${category.color}20`,
                    color: category.color,
                  }}
                >
                  <i className={`fas ${category.icon}`}></i>
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skill-tags-cloud">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="skill-tag"
                    style={{ '--tag-color': skill.color }}
                  >
                    <i className={skill.icon}></i> {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
