import { useEffect, useState } from 'react';
import { siteContent } from './data/siteContent';

function SocialIconGlyph({ name }) {
  switch (name) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="3.9" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="17.3" cy="6.8" r="1.2" fill="currentColor" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <rect x="6" y="10" width="3" height="8" fill="currentColor" />
          <circle cx="7.5" cy="7.2" r="1.6" fill="currentColor" />
          <path d="M12 18v-4.4c0-1.8 1.1-2.4 2.1-2.4 1.2 0 1.9.7 1.9 2.3V18h3v-5.5c0-2.8-1.5-4.2-3.9-4.2-1.4 0-2.3.6-3 1.5V10h-0.1v8H12z" fill="currentColor" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M13.2 19v-6h2.1l.4-2.2h-2.5V9.2c0-.8.4-1.3 1.4-1.3h1.2V6h-2c-2.2 0-3.2 1.3-3.2 3v1.8H9v2.2h1.6v6h2.6z" fill="currentColor" />
        </svg>
      );
    case 'pinterest':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12.4 6.5c-3.1 0-4.8 2.2-4.8 4.5 0 1.3.5 2.5 1.5 2.9.2.1.3 0 .4-.2l.3-1.3c.1-.2 0-.3-.2-.5-.4-.4-.7-.9-.7-1.7 0-2.2 1.7-3.8 4.3-3.8 2.3 0 3.6 1.4 3.6 3.3 0 2.5-1.1 4.6-2.8 4.6-.9 0-1.6-.7-1.4-1.7.3-1.2.8-2.6.8-3.5 0-.8-.4-1.5-1.3-1.5-1 0-1.8 1-1.8 2.4 0 .9.3 1.5.3 1.5l-1.2 5c-.4 1.7-.1 3.8-.1 4 0 .1.2.2.3.1.1-.1 1.4-1.8 1.8-3.5l.5-1.9c.3.5 1.2 1 2.1 1 2.8 0 4.7-2.6 4.7-6 0-2.6-2.2-5-5.5-5z" fill="currentColor" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2.5" y="6.3" width="19" height="11.4" rx="3.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
          <path d="M10 9.2l5.5 2.5-5.5 2.5V9.2z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

function SocialIcons({ items, variant = 'default' }) {
  return (
    <div className={`social-icons ${variant === 'brand' ? 'brand' : ''}`}>
      {items.map((item) => (
        <a
          key={item.alt}
          href={item.href}
          aria-label={item.alt}
          target="_blank"
          rel="noreferrer"
          className={variant === 'brand' ? `brand-${item.name}` : ''}
        >
          <SocialIconGlyph name={item.name} />
        </a>
      ))}
    </div>
  );
}

function ImageRail({ images, reverse = false }) {
  const doubled = [...images, ...images];
  return (
    <div className={`image-rail ${reverse ? 'reverse' : ''}`}>
      <div className="image-rail-track">
        {doubled.map((item, index) => (
          <figure key={`${item.alt}-${index}`} className="rail-card">
            <img src={item.src} alt={item.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}

function LogoMarquee({ logos }) {
  const doubled = [...logos, ...logos];
  return (
    <div className="logo-marquee" aria-label="Compatible press brands logos">
      <div className="logo-track">
        {doubled.map((item, index) => (
          <div key={`${item.alt}-logo-${index}`} className="logo-item" style={{ '--logo-scale': item.scale ?? 1 }}>
            <img src={item.src} alt={item.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatVisual({ type }) {
  if (type === 'roi') {
    return (
      <div className="stat-visual roi" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    );
  }
  if (type === 'savings') {
    return (
      <div className="stat-visual savings" aria-hidden="true">
        <svg viewBox="0 0 80 40">
          <path d="M4 32c12-14 20-6 31-18 11-12 18-9 41-12" />
        </svg>
      </div>
    );
  }
  if (type === 'years') {
    return (
      <div className="stat-visual years" aria-hidden="true">
        <div className="ring" />
      </div>
    );
  }
  return (
    <div className="stat-visual global" aria-hidden="true">
      <svg viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="20" />
        <path d="M12 32h40M32 12c7 7 7 33 0 40M32 12c-7 7-7 33 0 40" />
      </svg>
    </div>
  );
}

function StatsSection({ stats }) {
  return (
    <section className="section section-stats">
      <div className="container stat-grid">
        {stats.map((item) => (
          <article key={item.label}>
            <div className="stat-top">
              <h2>{item.value}</h2>
              <StatVisual type={item.key} />
            </div>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TeamFinalSection({ teamSection }) {
  const doubled = [...teamSection.images, ...teamSection.images];
  return (
    <section className="section section-team-final">
      <div className="container">
        <div className="team-final-head">
          <h2>{teamSection.title}</h2>
          <p>{teamSection.subtitle}</p>
        </div>
      </div>
      <div className="team-final-carousel" aria-label="Team showcase">
        <div className="team-final-track">
          {doubled.map((item, index) => (
            <figure key={`${item.alt}-final-${index}`} className="team-final-card">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function getLoopyReply(message) {
  const text = message.toLowerCase();

  if (text.includes('roi') || text.includes('return') || text.includes('savings') || text.includes('econom')) {
    return {
      text: 'ColorLoop usually delivers ROI in 3 to 11 months, with make-ready savings up to 60% depending on press setup.',
      links: [{ label: 'See Products', href: siteContent.pages.find((item) => item.label === 'Products')?.href }],
    };
  }

  if (text.includes('brand') || text.includes('compatible') || text.includes('press')) {
    return {
      text: 'ColorLoop supports major press brands including Heidelberg, Ryobi, KBA, Goss, Komori, Koenig & Bauer, Mitsubishi and more.',
      links: [{ label: 'How it works', href: siteContent.pages.find((item) => item.label === 'How it works')?.href }],
    };
  }

  if (text.includes('support') || text.includes('help') || text.includes('problem') || text.includes('issue')) {
    return {
      text: 'You can contact Rutherford support directly. I can send you to the support page now.',
      links: [{ label: 'Open Support', href: siteContent.ctas.secondary.href }],
    };
  }

  if (text.includes('price') || text.includes('shop') || text.includes('buy') || text.includes('upgrade')) {
    return {
      text: 'You can access upgrades and products from the Rutherford eShop.',
      links: [{ label: 'Open eShop', href: siteContent.ctas.tertiary.href }],
    };
  }

  if (text.includes('video') || text.includes('demo')) {
    return {
      text: 'You can browse demos and case videos on the Videos page.',
      links: [{ label: 'Watch Videos', href: siteContent.pages.find((item) => item.label === 'Videos')?.href }],
    };
  }

  if (text.includes('what is') || text.includes('colorloop') || text.includes('rutherford')) {
    return {
      text: 'ColorLoop by Rutherford automates preset + closed-loop color control for offset presses to reduce waste and stabilize print quality.',
      links: [{ label: 'Open Home', href: siteContent.pages.find((item) => item.label === 'Home')?.href }],
    };
  }

  return {
    text: 'I can help with ROI, compatibility, support, products, videos, and deployment questions about Rutherford and ColorLoop.',
    links: [
      { label: 'Support', href: siteContent.ctas.secondary.href },
      { label: 'Products', href: siteContent.pages.find((item) => item.label === 'Products')?.href },
    ],
  };
}

function LoopyChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'bot',
      text: 'Hi, I am Loopy. I can answer your questions about Rutherford and ColorLoop.',
      links: [{ label: 'Console Validation', href: siteContent.ctas.primary.href }],
    },
  ]);

  const prompts = ['What is ColorLoop?', 'How fast is ROI?', 'Which press brands are supported?', 'I need support'];

  const sendMessage = (raw) => {
    const text = raw.trim();
    if (!text || typing) return;

    const userMessage = { id: `u-${Date.now()}`, role: 'user', text };
    const reply = getLoopyReply(text);

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setTyping(true);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { id: `b-${Date.now()}`, role: 'bot', text: reply.text, links: reply.links }]);
      setTyping(false);
    }, 560);
  };

  return (
    <div className="loopy-widget">
      {open ? (
        <section className="loopy-panel" aria-label="Loopy chatbot">
          <header className="loopy-header">
            <div className="loopy-identity">
              {!avatarError ? (
                <img src="/images/loopy.png" alt="Loopy" onError={() => setAvatarError(true)} />
              ) : (
                <span className="loopy-avatar-fallback">L</span>
              )}
              <div>
                <strong>Loopy</strong>
                <p>Rutherford Assistant</p>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close Loopy chat">
              Close
            </button>
          </header>

          <div className="loopy-messages">
            {messages.map((message) => (
              <article key={message.id} className={`loopy-msg ${message.role}`}>
                <p>{message.text}</p>
                {message.links?.length ? (
                  <div className="loopy-links">
                    {message.links
                      .filter((link) => Boolean(link?.href))
                      .map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      ))}
                  </div>
                ) : null}
              </article>
            ))}
            {typing ? <p className="loopy-typing">Loopy is typing...</p> : null}
          </div>

          <div className="loopy-prompts">
            {prompts.map((prompt) => (
              <button key={prompt} type="button" onClick={() => sendMessage(prompt)}>
                {prompt}
              </button>
            ))}
          </div>

          <form
            className="loopy-input"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(input);
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask Loopy about Rutherford..."
            />
            <button type="submit">Send</button>
          </form>
        </section>
      ) : null}

      <button type="button" className="loopy-fab" onClick={() => setOpen((v) => !v)} aria-label="Open Loopy chatbot">
        {!avatarError ? <img src="/images/loopy.png" alt="Loopy avatar" onError={() => setAvatarError(true)} /> : <span>L</span>}
      </button>
    </div>
  );
}

export default function App() {
  const codeGlyphs = ['const', '</>', '{}', 'deltaE', 'CIP3', 'if ()', '=>', 'inkKey'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [codeTrail, setCodeTrail] = useState([]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const closeMenu = () => {
      if (window.innerWidth > 1080) setIsMenuOpen(false);
    };
    window.addEventListener('resize', closeMenu);
    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  const handleMouseMove = (event) => {
    const trailId = `${Date.now()}-${Math.random()}`;
    const glyph = codeGlyphs[Math.floor(Math.random() * codeGlyphs.length)];
    const nextTrail = {
      id: trailId,
      x: event.clientX,
      y: event.clientY,
      dx: Math.random() * 34 - 17,
      dy: -14 - Math.random() * 24,
      glyph,
    };

    setCodeTrail((prev) => [...prev.slice(-16), nextTrail]);
    window.setTimeout(() => {
      setCodeTrail((prev) => prev.filter((item) => item.id !== trailId));
    }, 760);
  };

  return (
    <div className="openai-inspired theme-light" onMouseMove={handleMouseMove}>
      <header className="minimal-header">
        <div className="container header-inner">
          <a href={siteContent.pages[0].href} className="wordmark" target="_blank" rel="noreferrer">
            <img src={siteContent.header.colorBallLogo} alt="Color Ball" />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Main">
            {siteContent.pages.slice(0, 6).map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="header-nav-cta" href={siteContent.ctas.primary.href} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
              {siteContent.ctas.primary.label}
            </a>
          </nav>
          <a className="header-cta" href={siteContent.ctas.primary.href} target="_blank" rel="noreferrer">
            {siteContent.ctas.primary.label}
          </a>
        </div>
      </header>

      <main>
        <section className="hero-intro">
          <div className="container hero-intro-inner">
            <h1>{siteContent.hero.title}</h1>
            <p className="hero-subtitle">{siteContent.hero.subtitle}</p>
            <p className="hero-copy">{siteContent.hero.description}</p>
            <div className="hero-buttons">
              <a className="btn btn-solid" href={siteContent.ctas.upgrade.href} target="_blank" rel="noreferrer">
                {siteContent.ctas.upgrade.label}
              </a>
              <a className="btn btn-ghost" href={siteContent.ctas.secondary.href} target="_blank" rel="noreferrer">
                {siteContent.ctas.secondary.label}
              </a>
            </div>
          </div>

          <div className="intro-animation" aria-label="Animation ColorLoop">
            <ImageRail images={siteContent.introImages} />
          </div>
        </section>

        <StatsSection stats={siteContent.stats} />

        <section className="section section-focus">
          <div className="container split">
            <div>
              <h2>Built for modern pressrooms</h2>
              <p>
                ColorLoop combines presetting and closed-loop correction to deliver faster, cleaner, and more repeatable print
                production.
              </p>
            </div>
            <div className="focus-list">
              {siteContent.focus.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-brands">
          <div className="container">
            <h2 className="brands-title">Compatible press brands</h2>
            <LogoMarquee logos={siteContent.pressBrands} />
          </div>
        </section>

        <section className="section section-mission">
          <div className="container mission-layout">
            <div>
              <h2>{siteContent.mission.title}</h2>
              <p>{siteContent.mission.intro}</p>
            </div>
            <ol>
              {siteContent.mission.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ol>
          </div>
        </section>

        {siteContent.teamSection ? <TeamFinalSection teamSection={siteContent.teamSection} /> : null}

        <section className="section section-social section-social-bottom">
          <div className="container social-wrap">
            <h2>Follow Rutherford.fr</h2>
            <SocialIcons items={siteContent.social} variant="brand" />
          </div>
        </section>
      </main>

      <div className="code-trail-layer" aria-hidden="true">
        {codeTrail.map((item) => (
          <span
            key={item.id}
            className="code-trail"
            style={{
              '--x': `${item.x}px`,
              '--y': `${item.y}px`,
              '--dx': `${item.dx}px`,
              '--dy': `${item.dy}px`,
            }}
          >
            {item.glyph}
          </span>
        ))}
      </div>

      <footer className="site-footer">
        <div className="container site-footer-grid">
          <div className="footer-brand">
            <img src={siteContent.header.colorBallLogo} alt="Rutherford.fr" />
            <p>{siteContent.footer.poweredBy}</p>
          </div>

          <div className="footer-col">
            <h3>Site map</h3>
            <div className="footer-links">
              {siteContent.pages.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h3>Solutions</h3>
            <div className="footer-links">
              {siteContent.focus.map((item) => (
                <p key={item.title}>{item.title}</p>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h3>Access</h3>
            <div className="footer-links">
              <a href={siteContent.ctas.primary.href} target="_blank" rel="noreferrer">
                Console Validation
              </a>
              <a href={siteContent.ctas.secondary.href} target="_blank" rel="noreferrer">
                Support
              </a>
              <a href={siteContent.ctas.tertiary.href} target="_blank" rel="noreferrer">
                eShop
              </a>
            </div>
          </div>
        </div>

        <div className="container site-footer-bottom">
          <SocialIcons items={siteContent.social} variant="brand" />
          <small>{siteContent.footer.copyright}</small>
        </div>
      </footer>

      <LoopyChat />
    </div>
  );
}
