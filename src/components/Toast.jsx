import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className={`toast-notice ${message ? 'show' : ''}`} id="toastNotice">
      <i className="fas fa-check-circle" style={{ color: 'var(--cyan-neon)' }}></i>
      <span id="toastText">{message}</span>
    </div>
  );
}
