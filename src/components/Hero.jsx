import React, { useState } from 'react';
import { PERSONAL_INFO, CODE_SNIPPETS } from '../data/portfolioData';

// Lightweight, vibrant syntax highlighter for terminal code
function renderHighlightedCode(rawCode) {
  const lines = rawCode.split('\n');
  return lines.map((line, lineIdx) => {
    if (line.trim().startsWith('//')) {
      return (
        <div key={lineIdx} style={{ color: '#94a3b8', fontStyle: 'italic' }}>
          {line}
        </div>
      );
    }

    const tokenRegex = /(\/\/[^\n]*|`[^`]*`|"[^"]*"|'[^']*'|@[A-Za-z0-9_]+|\b(?:export|class|async|await|return|package|import|type|interface|func|for|range|go|const|readonly|private|struct|defer|if|nil)\b|\b(?:AiSqlAgent|EventWorker|CandidateEvaluation|Promise|QueryResult|AdEvent|ExecutionResult|Context|Request|Header|Client|Time|Duration|string|int|float64|error|chan|byte)\b|\b(?:processQuery|synthesize|validate|StartCampaignDispatch|PublishToSocialChannels|evaluateCandidate|ExecuteProxyRequest|Microseconds|Do|Close|Now|Since|Println|queryRawUnsafe)\b|\b\d+(?:\.\d+)?\b|[{}()[\].,;:+\-*/=<>!&|]+|[^\s{}()[\].,;:+\-*/=<>!&|]+|\s+)/g;

    const tokens = line.match(tokenRegex) || [line];

    return (
      <div key={lineIdx}>
        {tokens.map((token, tIdx) => {
          if (token.startsWith('//')) {
            return (
              <span key={tIdx} style={{ color: '#94a3b8', fontStyle: 'italic' }}>
                {token}
              </span>
            );
          }
          if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
            return (
              <span key={tIdx} style={{ color: '#34d399' }}>
                {token}
              </span>
            );
          }
          if (token.startsWith('@')) {
            return (
              <span key={tIdx} style={{ color: '#ec4899', fontWeight: 600 }}>
                {token}
              </span>
            );
          }
          if (/^(?:export|class|async|await|return|package|import|type|interface|func|for|range|go|const|readonly|private|struct|defer|if|nil)$/.test(token)) {
            return (
              <span key={tIdx} style={{ color: '#f43f5e', fontWeight: 600 }}>
                {token}
              </span>
            );
          }
          if (/^(?:AiSqlAgent|EventWorker|CandidateEvaluation|Promise|QueryResult|AdEvent|ExecutionResult|Context|Request|Header|Client|Time|Duration|string|int|float64|error|chan|byte)$/.test(token)) {
            return (
              <span key={tIdx} style={{ color: '#38bdf8' }}>
                {token}
              </span>
            );
          }
          if (/^(?:processQuery|synthesize|validate|StartCampaignDispatch|PublishToSocialChannels|evaluateCandidate|ExecuteProxyRequest|Microseconds|Do|Close|Now|Since|Println|queryRawUnsafe)$/.test(token)) {
            return (
              <span key={tIdx} style={{ color: '#fbbf24' }}>
                {token}
              </span>
            );
          }
          if (/^\d+(?:\.\d+)?$/.test(token)) {
            return (
              <span key={tIdx} style={{ color: '#c084fc' }}>
                {token}
              </span>
            );
          }
          return <span key={tIdx}>{token}</span>;
        })}
      </div>
    );
  });
}

export default function Hero() {
  const [activeSnippet, setActiveSnippet] = useState('sql-agent');

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-indicator-dot"></span>
            <span>Available for Full-Stack &amp; Backend Roles</span>
          </div>

          <p className="hero-greeting">
            <i className="fas fa-terminal"></i> Hello World, I'm
          </p>

          <h1 className="hero-title">
            Shweta <span className="text-gradient">Meena</span>
          </h1>

          <div className="hero-role">
            Full-Stack Software Engineer &amp; Backend Architect
          </div>

          <p className="hero-summary">
            Specializing in high-performance server-side architectures, scalable RESTful APIs,
            and intelligent AI-driven applications. Experienced with <strong>GoLang, NestJS, Next.js,
              PostgreSQL, Microservices, and LLM Agents</strong> to deliver low-latency, production-ready systems.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-rocket"></i> View Featured Projects
            </a>
            <a
              href={PERSONAL_INFO.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              download="Shweta_Meena_Resume.pdf"
            >
              <i className="fas fa-file-pdf"></i> Download CV
            </a>
          </div>

          <div className="hero-social-links">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-link"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin" style={{ color: '#0077b5' }}></i> LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-link"
              aria-label="GitHub Workspace"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-link"
              aria-label="LeetCode Profile"
            >
              <i className="fas fa-code" style={{ color: '#f59e0b' }}></i> LeetCode
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="social-pill-link"
              aria-label="Send Email"
            >
              <i className="fas fa-envelope" style={{ color: 'var(--sunset-orange)' }}></i> Email
            </a>
          </div>
        </div>

        {/* Hero Code Visual / Terminal Simulator */}
        <div className="hero-code-visual">
          <div className="code-terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot dot-red"></span>
                <span className="terminal-dot dot-yellow"></span>
                <span className="terminal-dot dot-green"></span>
              </div>
              <div className="terminal-tab-group">
                <button
                  className={`terminal-tab-btn ${activeSnippet === 'sql-agent' ? 'active' : ''}`}
                  onClick={() => setActiveSnippet('sql-agent')}
                >
                  {CODE_SNIPPETS['sql-agent'].tabLabel}
                </button>
                <button
                  className={`terminal-tab-btn ${activeSnippet === 'go-worker' ? 'active' : ''}`}
                  onClick={() => setActiveSnippet('go-worker')}
                >
                  {CODE_SNIPPETS['go-worker'].tabLabel}
                </button>
                <button
                  className={`terminal-tab-btn ${activeSnippet === 'hire-me' ? 'active' : ''}`}
                  onClick={() => setActiveSnippet('hire-me')}
                >
                  {CODE_SNIPPETS['hire-me'].tabLabel}
                </button>
              </div>
            </div>

            <pre className="terminal-body">
              <code>{renderHighlightedCode(CODE_SNIPPETS[activeSnippet].code)}</code>
            </pre>

            <div className="terminal-footer-metrics">
              <span className="metric-badge">
                <i className="fas fa-circle-check"></i> {CODE_SNIPPETS[activeSnippet].badge}
              </span>
              <span>⚡ Latency: 14.2ms</span>
            </div>
          </div>

          {/* Floating Decorative Tech Badges */}
          <div className="floating-tech-badge badge-pos-1">
            <i className="fas fa-network-wired text-gradient-amber"></i>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>ARCHITECTURE</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>GoLang &amp; Microservices</div>
            </div>
          </div>

          <div className="floating-tech-badge badge-pos-2">
            <i className="fas fa-robot text-gradient-coral"></i>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>AI INTEGRATION</div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>Agentic AI &amp; Ollama 7B</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
