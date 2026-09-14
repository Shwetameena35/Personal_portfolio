export const PERSONAL_INFO = {
  name: "Shweta Meena",
  title: "Full-Stack Software Engineer & Backend Architect",
  email: "shwetameena818@gmail.com",
  phone: "9754799620",
  formattedPhone: "+91 9754799620",
  location: "Indore, Madhya Pradesh - 452010",
  linkedin: "https://linkedin.com/in/shweta-meena-4b0ba4226",
  linkedinUser: "shweta-meena-4b0ba4226",
  github: "https://github.com/Shwetameena35",
  githubUser: "Shwetameena35",
  leetcode: "https://leetcode.com/u/shweta_35/",
  leetcodeUser: "shweta_35",
  resumePath: "/assets/resume.pdf",
  summary: `Full-stack software engineer focused on building scalable, low-latency server-side applications and reliable RESTful APIs. Experienced in backend development, SQL-based data modeling, API integration, unit/integration testing, debugging, and applying security and data protection best practices. Collaborative, agile team contributor who improves system performance and ensures production reliability while continuously learning.`
};

export const STATS = [
  {
    number: "8.63",
    label: "B.Tech CSE CGPA",
    icon: "fa-graduation-cap",
    gradient: "linear-gradient(135deg, #fbbf24, #f59e0b)",
    color: "#f59e0b"
  },
  {
    number: "10+",
    label: "Scalable RESTful APIs Built",
    icon: "fa-server",
    gradient: "linear-gradient(135deg, #ff6a00, #ff5e62)",
    color: "#ff6a00"
  },
  {
    number: "2+",
    label: "Flagship AI & Distributed Systems",
    icon: "fa-diagram-project",
    gradient: "linear-gradient(135deg, #f43f5e, #ec4899)",
    color: "#f43f5e"
  },
  {
    number: "3 ★",
    label: "HackerRank Problem Solving",
    icon: "fa-star",
    gradient: "linear-gradient(135deg, #ec4899, #9333ea)",
    color: "#ec4899"
  }
];

export const CODE_SNIPPETS = {
  "sql-agent": {
    filename: "ai_agent.service.ts",
    tabLabel: "ai_agent.ts",
    badge: "Ollama 7B • Sub-15ms",
    code: `// ⚡ AI Agent Synthesizer — Natural Language to PostgreSQL
@Injectable()
export class AiSqlAgent {
  private readonly model = "qwen2.5-coder:7b";
  private readonly engineer = "Shweta Meena";

  async processQuery(prompt: string, userId: string): Promise<QueryResult> {
    // 1. Guard against SQL injection via schema-aware AST parsing
    const safePrompt = await this.securityGuard.validate(prompt);

    // 2. Synthesize optimized SQL with local LLM
    const query = await this.ollama.synthesize({
      model: this.model,
      prompt: safePrompt,
      targetLatencyMs: 14.2
    });

    // 3. Return high-throughput visualized records
    return await this.prisma.$queryRawUnsafe(query);
  }
}`
  },
  "go-worker": {
    filename: "synqo_runner.go",
    tabLabel: "synqo_runner.go",
    badge: "Go 1.26 • Zero-CORS Proxy",
    code: `// ⚡ Synqo High-Performance Zero-CORS API Proxy Runner in Go
package runner

import (
    "net/http"
    "time"
    "github.com/gin-gonic/gin"
)

type ExecutionResult struct {
    StatusCode int           \`json:"status_code"\`
    DurationMs float64       \`json:"duration_ms"\`
    Headers    http.Header   \`json:"headers"\`
    Body       []byte        \`json:"body"\`
}

func ExecuteProxyRequest(c *gin.Context, targetReq *http.Request) (*ExecutionResult, error) {
    client := &http.Client{Timeout: 30 * time.Second}
    start := time.Now()

    resp, err := client.Do(targetReq)
    if err != nil {
        return nil, err
    }
    defer resp.Body.Close()

    duration := float64(time.Since(start).Microseconds()) / 1000.0
    return &ExecutionResult{
        StatusCode: resp.StatusCode,
        DurationMs: duration,
        Headers:    resp.Header,
    }, nil
}`
  },
  "hire-me": {
    filename: "hire_shweta.ts",
    tabLabel: "hire_shweta.ts",
    badge: "Recruiter Fast-Track 🚀",
    code: `// 🎯 Candidate Evaluation Engine — Automated Decision
interface CandidateEvaluation {
  candidate: string;
  verdict: "IMMEDIATE_HIRE" | "SCHEDULE_CALL";
  superpowers: string[];
}

export async function evaluateCandidate(): Promise<CandidateEvaluation> {
  return {
    candidate: "Shweta Meena",
    superpowers: [
      "Scalable RESTful APIs with sub-second latency",
      "GoLang, NestJS, Next.js & PostgreSQL architecture",
      "Event-driven microservices with RabbitMQ & AWS S3",
      "Pragmatic problem solver (3★ HackerRank & 8.63 CGPA)"
    ],
    verdict: "IMMEDIATE_HIRE"
  };
}`
  }
};

export const SKILLS_DATA = [
  {
    category: "languages",
    title: "Programming Languages",
    icon: "fa-terminal",
    color: "#00f2fe",
    skills: [
      { name: "TypeScript", icon: "fab fa-js", color: "#3178c6" },
      { name: "JavaScript (ES6+)", icon: "fab fa-js-square", color: "#f7df1e" },
      { name: "Go (Golang)", icon: "fab fa-golang", color: "#00add8" },
      { name: "C++", icon: "fas fa-code", color: "#659ad2" },
      { name: "SQL", icon: "fas fa-database", color: "#e38c00" },
      { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "#1572b6" }
    ]
  },
  {
    category: "backend",
    title: "Backend & Architecture",
    icon: "fa-server",
    color: "#a855f7",
    skills: [
      { name: "Nest.js", icon: "fas fa-cubes", color: "#e0234e" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "Express.js", icon: "fas fa-network-wired", color: "#828282" },
      { name: "REST API Design", icon: "fas fa-route", color: "#00f2fe" },
      { name: "Microservices", icon: "fas fa-diagram-project", color: "#a855f7" },
      { name: "JWT Authentication", icon: "fas fa-key", color: "#d63aff" },
      { name: "bcrypt Security", icon: "fas fa-shield-halved", color: "#10b981" }
    ]
  },
  {
    category: "database",
    title: "Databases & Queues",
    icon: "fa-database",
    color: "#10b981",
    skills: [
      { name: "PostgreSQL", icon: "fas fa-table", color: "#336791" },
      { name: "MongoDB", icon: "fas fa-leaf", color: "#47a248" },
      { name: "Prisma ORM", icon: "fas fa-layer-group", color: "#2d3748" },
      { name: "TypeORM", icon: "fas fa-cubes", color: "#fe0803" },
      { name: "RabbitMQ", icon: "fas fa-envelope-open-text", color: "#ff6600" },
      { name: "SQL Data Modeling", icon: "fas fa-sliders", color: "#00f2fe" }
    ]
  },
  {
    category: "frontend",
    title: "Frontend & UI",
    icon: "fa-desktop",
    color: "#ec4899",
    skills: [
      { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
      { name: "Next.js", icon: "fas fa-bolt", color: "#000000" },
      { name: "Tabular Data UI", icon: "fas fa-table-columns", color: "#ec4899" },
      { name: "Responsive UI/UX", icon: "fas fa-mobile-screen", color: "#8b5cf6" },
      { name: "Modern CSS / Glassmorphism", icon: "fas fa-palette", color: "#06b6d4" }
    ]
  },
  {
    category: "tools",
    title: "Cloud, AI & DevOps",
    icon: "fa-cloud-arrow-up",
    color: "#f59e0b",
    skills: [
      { name: "AWS S3", icon: "fab fa-aws", color: "#ff9900" },
      { name: "Ollama (Qwen2.5-Coder 7B)", icon: "fas fa-brain", color: "#a855f7" },
      { name: "Git", icon: "fab fa-git-alt", color: "#f05032" },
      { name: "GitHub", icon: "fab fa-github", color: "#24292e" },
      { name: "Postman", icon: "fas fa-paper-plane", color: "#ff6c37" },
      { name: "Unit & Integration Testing", icon: "fas fa-check-double", color: "#10b981" },
      { name: "Debugging & Profiling", icon: "fas fa-bug", color: "#ef4444" }
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: "synqo",
    title: "Synqo — All-in-One API Development Platform",
    badge: "GO & REACT 19 • HIGH-PERFORMANCE",
    badgeType: "go",
    timeline: "01/2026 – Present",
    pipeline: [
      "React 19 + TS UI",
      "Go Gin Gateway",
      "Zero-CORS Cloud Proxy",
      "Dynamic Mock Engine",
      "Gorilla WebSockets"
    ],
    highlights: [
      "Architected an all-in-one API development platform unifying Postman-style request execution, dynamic mock servers with latency simulation, OpenAPI docs, multi-language SDK generator (Go, TS, Python, Java), and real-time telemetry.",
      "Engineered a dual-mode test runner with zero-CORS Go cloud proxy and browser-direct execution featuring millisecond latency timers, visual assertions, and inline dynamic variable inspection with secret masking.",
      "Implemented dynamic mock endpoints with WebSocket-driven live traffic streaming, role-based collaboration (Editor/Viewer), and live telemetry monitoring (P50/P95/P99 latency percentiles & throughput charts)."
    ],
    stack: [
      "Go (Golang)",
      "Gin",
      "Gorilla WebSocket",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "GORM",
      "PostgreSQL",
      "Docker",
      "Render"
    ],
    githubUrl: "https://github.com/Shwetameena35/Synqo",
    liveUrl: "https://synqo-frontend.onrender.com/index.html",
    isProprietary: false
  },
  {
    id: "ai-sql-agent",
    title: "AI SQL Agent",
    badge: "AI / LLM & FULL-STACK",
    badgeType: "ai",
    timeline: "06/2026 – 07/2026",
    pipeline: [
      "Natural Language Prompt",
      "Ollama (Qwen2.5-Coder 7B)",
      "NestJS Guard",
      "PostgreSQL Engine",
      "Next.js UI"
    ],
    highlights: [
      "Developed a full-stack AI-powered SQL Agent using Next.js and NestJS that converts natural language into secure PostgreSQL queries using Ollama (Qwen2.5-Coder 7B).",
      "Built a responsive Next.js frontend with authentication, database connection management, query interface, and tabular result visualization.",
      "Implemented JWT-based authentication and a multi-user architecture, enabling users to securely connect and query their own PostgreSQL databases."
    ],
    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Ollama (Qwen2.5 7B)",
      "JWT",
      "bcrypt",
      "REST APIs"
    ],
    githubUrl: "https://github.com/Shwetameena35/sql-agent",
    isProprietary: false
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "Software Developer",
    company: "Xalt Analytics",
    location: "Indore, Madhya Pradesh",
    period: "01/2025 – 08/2026",
    bullets: [
      "Collaborated within an agile, cross-functional development team of 5+ members to deliver high-quality features, writing unit/integration tests to improve code reliability and ensuring adherence to best engineering practices.",
      "Planned and created 10+ scalable RESTful APIs, integrated third-party services to expand system capabilities, and optimized backend database operations—resulting in improved performance, higher reliability, and enhanced user experience.",
      "Integrated third-party services and APIs to enhance application capabilities and streamline business operations."
    ]
  },
  {
    role: "Project Intern",
    company: "TNGS.ES",
    location: "Valencia, Spain (Remote)",
    period: "04/2024 – 09/2024",
    bullets: [
      "Collaborated with cross-functional teams to develop and optimize the “Generate Reports-Based Project” by analyzing functional requirements and delivering efficient solutions.",
      "Assisted in requirement analysis, report generation, data organization, and quality assurance to ensure high-quality deliverables.",
      "Designed and maintained structured, data-driven report templates to improve reporting accuracy, readability, and alignment with project specifications.",
      "Applied problem-solving and analytical skills to enhance report formatting, consistency, and overall user experience."
    ]
  },
  {
    role: "Coordinator",
    company: "Google Developer Student Club (GDSC) — PIEMR",
    location: "Indore, Madhya Pradesh",
    period: "Leadership Role",
    bullets: [
      "Organized placement and student engagement activities while coordinating directly with students, faculty members, and industry professionals.",
      "Mentored junior peers in developer tooling, Git collaboration, problem-solving, and web development fundamentals."
    ]
  }
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Technology in Computer Science and Engineering",
  institution: "Prestige Institute of Engineering Management and Research",
  period: "07/2021 – 05/2025",
  location: "Indore, Madhya Pradesh",
  cgpa: "8.63 / 10.0"
};

export const ACHIEVEMENTS_DATA = [
  {
    title: "HackerRank 3-Star Rating",
    issuer: "HackerRank",
    description: "Demonstrated strong problem-solving and algorithmic coding skills through consistent performance on HackerRank.",
    icon: "fa-star",
    color: "#f59e0b"
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Infosys Springboard",
    date: "03/2022",
    description: "Certified foundation in cloud computing principles, virtualization, cloud services models (IaaS/PaaS/SaaS), and distributed architectures.",
    icon: "fa-cloud",
    color: "#00f2fe"
  },
  {
    title: "GDSC Campus Leadership",
    issuer: "PIEMR Student Chapter",
    date: "PIEMR",
    description: "Led technical initiatives, hosted hands-on workshops, and organized placement prep activities for engineering students.",
    icon: "fa-users-gear",
    color: "#a855f7"
  }
];
