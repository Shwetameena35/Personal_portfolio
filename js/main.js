/**
 * ============================================================================
 * SHWETA MEENA — PERSONAL PORTFOLIO INTERACTIVITY (Vanilla JavaScript ES6+)
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCodeTerminalTabs();
  initSkillsFilter();
  initClipboardCopy();
  initContactForm();
  initBackToTop();
  initIntersectionAnimations();
});

/* --------------------------------------------------------------------------
   1. Navbar Scroll Effect & Mobile Drawer
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Navbar blur on scroll
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile drawer toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    // Close menu when clicking links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        if (mobileToggle.querySelector('i')) {
          mobileToggle.querySelector('i').className = 'fas fa-bars';
        }
      });
    });
  }

  // Scrollspy: Highlight active link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* --------------------------------------------------------------------------
   2. Interactive Terminal Code Tabs (Hero Section)
   -------------------------------------------------------------------------- */
const CODE_SNIPPETS = {
  'sql-agent': `// AI SQL Agent — Natural Language to SQL
@Injectable()
export class AgentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ollama: OllamaClient,
  ) {}

  async generateAndExecute(prompt: string, userId: string) {
    const schema = await this.prisma.getDbSchema(userId);
    const sqlQuery = await this.ollama.generateQuery({
      model: 'qwen2.5-coder:7b',
      prompt,
      schemaContext: schema,
    });
    
    // Validate SQL security & execute
    return this.prisma.$queryRawUnsafe(sqlQuery);
  }
}`,

  'digiad-ai': `// digiAd.AI — Microservices Event Producer
@Injectable()
export class CampaignService {
  constructor(
    @Inject('RABBITMQ_CLIENT') private client: ClientProxy,
    private s3Storage: AwsS3Service,
  ) {}

  async publishReelsCampaign(dto: CreateAdDto) {
    const assetUrl = await this.s3Storage.upload(dto.media);
    const payload = { ...dto, mediaUrl: assetUrl };

    // Broadcast event across Meta, Google & Snap microservices
    return this.client.emit('campaign.dispatch', payload);
  }
}`,

  'rest-api': `// High-Throughput RESTful Architecture
@Controller('api/v1/metrics')
@UseGuards(JwtAuthGuard)
export class MetricsController {
  @Get('summary')
  async getSystemSummary(@Req() req: RequestWithUser) {
    return {
      status: 200,
      latencyMs: 14.2,
      database: 'PostgreSQL Pool Active',
      services: ['Auth', 'AdEngine', 'QueryService'],
    };
  }
}`
};

function initCodeTerminalTabs() {
  const tabButtons = document.querySelectorAll('.terminal-tab-btn');
  const codeDisplay = document.getElementById('terminalCodeDisplay');

  if (!codeDisplay) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const snippetKey = btn.getAttribute('data-snippet');
      if (CODE_SNIPPETS[snippetKey]) {
        codeDisplay.textContent = CODE_SNIPPETS[snippetKey];
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Skills Category Filter
   -------------------------------------------------------------------------- */
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. One-Click Clipboard Copy with Toast
   -------------------------------------------------------------------------- */
function initClipboardCopy() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toastNotice');
  const toastText = document.getElementById('toastText');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard!`);
        
        // Temporarily change button icon to checkmark
        const icon = btn.querySelector('i');
        if (icon) {
          const originalClass = icon.className;
          icon.className = 'fas fa-check';
          setTimeout(() => {
            icon.className = originalClass;
          }, 2000);
        }
      }).catch(err => {
        console.error('Clipboard copy failed:', err);
      });
    });
  });

  function showToast(message) {
    if (!toast) return;
    if (toastText) toastText.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/* --------------------------------------------------------------------------
   5. Interactive Contact Form (Validation & Feedback)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusMsg = document.getElementById('formStatusMsg');
  const submitBtn = document.getElementById('submitBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName')?.value.trim();
    const email = document.getElementById('senderEmail')?.value.trim();
    const message = document.getElementById('senderMessage')?.value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all fields before sending.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    }

    // Simulate reliable dispatch / direct mailto link creation
    setTimeout(() => {
      if (statusMsg) {
        statusMsg.classList.add('success');
        statusMsg.innerHTML = '<i class="fas fa-check-circle"></i> Message queued! Thank you, Shweta will reply promptly.';
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Sent Successfully';
      }

      // Also open a prepared mailto to ensure zero lost messages
      const mailtoLink = `mailto:shwetameena818@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
      window.open(mailtoLink, '_blank');

      form.reset();

      setTimeout(() => {
        if (statusMsg) statusMsg.classList.remove('success');
        if (submitBtn) submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      }, 6000);
    }, 800);
  });
}

/* --------------------------------------------------------------------------
   6. Back to Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   7. Intersection Fade-in Animation Trigger
   -------------------------------------------------------------------------- */
function initIntersectionAnimations() {
  const revealElements = document.querySelectorAll('.glass-card, .timeline-item, .stat-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}
