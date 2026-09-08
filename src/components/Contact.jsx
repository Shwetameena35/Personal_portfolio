import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [copiedKey, setCopiedKey] = useState(null);

  const copyToClipboard = (text, key, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      if (onShowToast) {
        onShowToast(`Copied ${label} to clipboard!`);
      }
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  const contactItems = [
    {
      key: 'email',
      label: 'Email Address',
      value: PERSONAL_INFO.email,
      icon: <i className="fas fa-envelope"></i>,
      iconBg: 'rgba(255, 106, 0, 0.14)',
      iconColor: 'var(--sunset-orange)',
      actionType: 'copy',
      copyValue: PERSONAL_INFO.email,
      actionTitle: 'Copy Email Address'
    },
    {
      key: 'linkedin',
      label: 'LinkedIn Profile',
      value: PERSONAL_INFO.linkedinUser,
      icon: <i className="fab fa-linkedin"></i>,
      iconBg: 'rgba(251, 191, 36, 0.14)',
      iconColor: 'var(--sunset-amber)',
      actionType: 'link',
      url: PERSONAL_INFO.linkedin,
      actionTitle: 'Open LinkedIn Profile'
    },
    {
      key: 'github',
      label: 'GitHub Workspace',
      value: PERSONAL_INFO.githubUser,
      icon: <i className="fab fa-github"></i>,
      iconBg: 'rgba(236, 72, 153, 0.14)',
      iconColor: 'var(--sunset-pink)',
      actionType: 'link',
      url: PERSONAL_INFO.github,
      actionTitle: 'Open GitHub Profile'
    },
    {
      key: 'leetcode',
      label: 'LeetCode Profile',
      value: PERSONAL_INFO.leetcodeUser,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ display: 'inline-block' }}>
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.818 3.535 5.856 5.856 0 0 0 2.21-.194l4.025-1.127a1.385 1.385 0 0 0 .977-1.705 1.384 1.384 0 0 0-1.707-.977l-4.024 1.127a3.176 3.176 0 0 1-1.196.105 3.226 3.226 0 0 1-2.617-1.921 3.235 3.235 0 0 1-.192-.553 3.018 3.018 0 0 1-.034-1.284 3.003 3.003 0 0 1 .687-1.196l3.854-4.125 5.405-5.787a1.381 1.381 0 0 0-.977-2.359zM19.467 9.873a1.376 1.376 0 0 0-1.376 1.376v2.752a1.376 1.376 0 1 0 2.752 0v-2.752a1.376 1.376 0 0 0-1.376-1.376zm-3.237 4.957a1.376 1.376 0 0 0-1.376 1.376v.006a1.376 1.376 0 1 0 2.752 0v-.006a1.376 1.376 0 0 0-1.376-1.376z"/>
        </svg>
      ),
      iconBg: 'rgba(255, 94, 98, 0.14)',
      iconColor: 'var(--sunset-coral)',
      actionType: 'link',
      url: PERSONAL_INFO.leetcode,
      actionTitle: 'Open LeetCode Profile'
    }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <i className="fas fa-paper-plane"></i> Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Have an open role, an exciting project, or want to connect? 
            Reach out via email or explore my developer profiles below.
          </p>
        </div>

        {/* Centered 4-Card Connect Grid */}
        <div className="contact-cards-container">
          <div className="contact-cards-grid">
            {contactItems.map((item) => (
              <div key={item.key} className="glass-card contact-direct-card">
                <div className="contact-meta">
                  <div
                    className="contact-icon-circle"
                    style={{ background: item.iconBg, color: item.iconColor }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </div>

                {item.actionType === 'copy' ? (
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard(item.copyValue, item.key, item.label)}
                    title={item.actionTitle}
                    aria-label={item.actionTitle}
                  >
                    <i className={copiedKey === item.key ? 'fas fa-check' : 'fas fa-copy'}></i>
                  </button>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="copy-btn"
                    title={item.actionTitle}
                    aria-label={item.actionTitle}
                  >
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
