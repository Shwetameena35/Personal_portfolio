import React from 'react';
import { STATS } from '../data/portfolioData';

export default function Stats() {
  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="stat-item glass-card"
              style={{ '--stat-gradient': stat.gradient }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                <i className={`fas ${stat.icon}`}></i>
              </div>
              <div className="stat-number" style={{ color: stat.color }}>
                {stat.number}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
