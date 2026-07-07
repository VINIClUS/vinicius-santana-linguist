import { useEffect, useMemo, useState } from 'react';

const CONTACT = {
  email: '[INSERT PROFESSIONAL EMAIL]',
  whatsapp: '[INSERT WHATSAPP LINK OR NUMBER]',
  linkedin: '[INSERT LINKEDIN LINK]',
  github: '[INSERT GITHUB OR TECHNICAL PORTFOLIO LINK]',
  languagePair: '[INSERT LANGUAGE PAIR]',
  availability: '[INSERT AVAILABILITY]',
  subdomain: 'linguist.vinisantana.com',
};

const content = {
  en: {
    langLabel: 'English',
    meta: {
      title: 'Vinicius Santana — Technical Translator & Localization Professional',
      description:
        'Independent Brazilian Portuguese translation and localization professional supporting clear, accurate and context-aware linguistic workflows.',
    },
    nav: {
      services: 'Services',
      expertise: 'Expertise',
      process: 'Process',
      about: 'About',
      contact: 'Contact',
    },
    menu: {
      open: 'Open navigation menu',
      close: 'Close navigation menu',
    },
    hero: {
      eyebrow: 'Independent professional profile for translation and localization services',
      location: `Brazil · UTC-3 · ${CONTACT.languagePair}`,
      headline: 'Technical Translator & Localization Professional',
      subheadline:
        'Independent linguist helping teams deliver clear, accurate and context-aware content in Brazilian Portuguese.',
      primaryCta: 'Contact for availability',
      secondaryCta: 'View services',
      profileLabel: 'Professional profile',
      profileText: 'Translator / Linguist / Localization Support',
      alt: 'Portrait of Vinicius Santana, translation and localization professional.',
      facts: [
        ['Language pair', CONTACT.languagePair],
        ['Availability', CONTACT.availability],
        ['Location', 'Brazil, UTC-3'],
      ],
    },
    trust: ['Translation & localization', 'Brazilian Portuguese', 'Technical and digital content', 'Confidential workflows'],
    sections: {
      services: {
        eyebrow: 'Services',
        title: 'Focused linguistic support for professional workflows',
        description:
          'Clear services with scope, terminology and delivery expectations aligned before work begins.',
      },
      expertise: {
        eyebrow: 'Expertise',
        title: 'Technical and digital content areas',
        description:
          'Specialization areas can be adjusted according to each project’s requirements.',
      },
      process: {
        eyebrow: 'Process',
        title: 'A simple workflow built around clarity and consistency',
        description:
          'A structured process helps reduce ambiguity, protect quality and keep communication straightforward.',
      },
      about: {
        eyebrow: 'About',
        title: 'Language work with technical awareness',
        description:
          'Vinicius Santana is a Brazil-based language professional focused on clear, consistent and context-aware translation work. His background in technology and structured information helps him approach linguistic tasks with attention to terminology, accuracy and workflow discipline.',
        noteTitle: 'Working principles',
        principles: ['Context first', 'Terminology consistency', 'Clear communication', 'Deadline awareness'],
        imageAlt: 'Close professional portrait of Vinicius Santana.',
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Contact and availability',
        description:
          'For translation, localization or linguistic support, use the links below. Replace placeholders with professional channels before publishing.',
        note:
          'Available for professional translation workflows, including RWS-related linguistic assignments when appropriate. This profile remains independent.',
      },
    },
    services: [
      {
        title: 'Translation',
        text: 'Clear, accurate translation adapted to context, audience and terminology.',
      },
      {
        title: 'Localization',
        text: 'Brazilian Portuguese adaptation for digital products, interfaces and content workflows.',
      },
      {
        title: 'Editing & Proofreading',
        text: 'Focused review for clarity, consistency and natural wording.',
      },
      {
        title: 'Linguistic QA',
        text: 'Checks for terminology, formatting, completeness and language quality.',
      },
      {
        title: 'Terminology consistency',
        text: 'Support for glossaries, recurring terms and project-specific style choices.',
      },
      {
        title: 'Technical content review',
        text: 'Linguistic review for software, technology, data and structured documentation.',
      },
    ],
    expertise: [
      'Technology',
      'Software and apps',
      'Data and AI content',
      'Business documentation',
      'Web content',
      'User interfaces',
      'Technical documentation',
      '[INSERT CAT TOOLS, IF APPLICABLE]',
    ],
    process: [
      {
        title: 'Briefing and scope',
        text: 'Confirm language pair, audience, source files, references, deadline and delivery format.',
      },
      {
        title: 'Translation/localization',
        text: 'Work through the content with attention to terminology, tone and functional context.',
      },
      {
        title: 'Review and terminology check',
        text: 'Review consistency, completeness, formatting and project-specific terminology.',
      },
      {
        title: 'Delivery and communication',
        text: 'Deliver files clearly and communicate any relevant notes, questions or limitations.',
      },
    ],
    contact: {
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub / technical portfolio',
      location: 'Location',
      availability: 'Availability',
      languagePair: 'Language pair',
      copy: 'Copy email',
      copied: 'Email copied',
      replaceEmail: 'Replace email placeholder',
      availabilityRequest: 'Send availability request',
      linkedinButton: 'Open LinkedIn',
      whatsappButton: 'Open WhatsApp',
      placeholderHint: 'Replace this placeholder before publishing.',
      mailSubject: 'Availability request — translation/localization project',
      mailBody:
        'Hello Vinicius,\n\nI would like to check your availability for a translation/localization project.\n\nLanguage pair:\nScope:\nDeadline:\nReference files or instructions:\n\nThank you.',
    },
    footer: {
      profile: 'Independent translation/localization profile',
      disclaimer: 'This is an independent professional profile and is not an official RWS website.',
    },
  },
  pt: {
    langLabel: 'Português brasileiro',
    meta: {
      title: 'Vinicius Santana — Tradutor Técnico & Profissional de Localização',
      description:
        'Perfil profissional independente de tradução e localização em português brasileiro, com apoio a fluxos linguísticos claros, precisos e atentos ao contexto.',
    },
    nav: {
      services: 'Serviços',
      expertise: 'Especialidades',
      process: 'Processo',
      about: 'Sobre',
      contact: 'Contato',
    },
    menu: {
      open: 'Abrir menu de navegação',
      close: 'Fechar menu de navegação',
    },
    hero: {
      eyebrow: 'Perfil profissional independente para tradução e localização',
      location: `Brasil · UTC-3 · ${CONTACT.languagePair}`,
      headline: 'Tradutor Técnico & Profissional de Localização',
      subheadline:
        'Linguista independente que ajuda equipes a entregar conteúdo claro, preciso e atento ao contexto em português brasileiro.',
      primaryCta: 'Consultar disponibilidade',
      secondaryCta: 'Ver serviços',
      profileLabel: 'Perfil profissional',
      profileText: 'Tradutor / Linguista / Suporte de Localização',
      alt: 'Retrato de Vinicius Santana, profissional de tradução e localização.',
      facts: [
        ['Par de idiomas', CONTACT.languagePair],
        ['Disponibilidade', CONTACT.availability],
        ['Localização', 'Brasil, UTC-3'],
      ],
    },
    trust: ['Tradução & localização', 'Português brasileiro', 'Conteúdo técnico e digital', 'Fluxos confidenciais'],
    sections: {
      services: {
        eyebrow: 'Serviços',
        title: 'Suporte linguístico focado em fluxos profissionais',
        description:
          'Serviços objetivos, com escopo, terminologia e expectativas de entrega alinhados antes do início do trabalho.',
      },
      expertise: {
        eyebrow: 'Especialidades',
        title: 'Áreas técnicas e digitais',
        description:
          'As áreas de especialização podem ser ajustadas conforme os requisitos de cada projeto.',
      },
      process: {
        eyebrow: 'Processo',
        title: 'Um fluxo simples com foco em clareza e consistência',
        description:
          'Um processo estruturado ajuda a reduzir ambiguidades, proteger a qualidade e manter uma comunicação objetiva.',
      },
      about: {
        eyebrow: 'Sobre',
        title: 'Trabalho linguístico com visão técnica',
        description:
          'Vinicius Santana é um profissional brasileiro de tradução e serviços linguísticos, com foco em clareza, consistência e adaptação contextual. Sua experiência com tecnologia e informação estruturada contribui para um trabalho atento à terminologia, precisão e organização do fluxo de entrega.',
        noteTitle: 'Princípios de trabalho',
        principles: ['Contexto em primeiro lugar', 'Consistência terminológica', 'Comunicação clara', 'Atenção a prazos'],
        imageAlt: 'Retrato profissional aproximado de Vinicius Santana.',
      },
      contact: {
        eyebrow: 'Contato',
        title: 'Contato e disponibilidade',
        description:
          'Para tradução, localização ou suporte linguístico, use os links abaixo. Substitua os placeholders pelos canais profissionais antes de publicar.',
        note:
          'Disponível para fluxos profissionais de tradução, incluindo demandas linguísticas relacionadas à RWS quando apropriado. Este perfil permanece independente.',
      },
    },
    services: [
      {
        title: 'Tradução',
        text: 'Tradução clara e precisa, adaptada ao contexto, ao público e à terminologia.',
      },
      {
        title: 'Localização',
        text: 'Adaptação para português brasileiro em produtos digitais, interfaces e fluxos de conteúdo.',
      },
      {
        title: 'Edição & Revisão',
        text: 'Revisão focada em clareza, consistência e naturalidade do texto.',
      },
      {
        title: 'QA linguístico',
        text: 'Verificação de terminologia, formatação, completude e qualidade linguística.',
      },
      {
        title: 'Consistência terminológica',
        text: 'Apoio a glossários, termos recorrentes e escolhas de estilo específicas do projeto.',
      },
      {
        title: 'Revisão de conteúdo técnico',
        text: 'Revisão linguística para software, tecnologia, dados e documentação estruturada.',
      },
    ],
    expertise: [
      'Tecnologia',
      'Software e aplicativos',
      'Conteúdo sobre dados e IA',
      'Documentação empresarial',
      'Conteúdo web',
      'Interfaces de usuário',
      'Documentação técnica',
      '[INSERIR FERRAMENTAS CAT, SE APLICÁVEL]',
    ],
    process: [
      {
        title: 'Briefing e escopo',
        text: 'Confirmar par de idiomas, público, arquivos-fonte, referências, prazo e formato de entrega.',
      },
      {
        title: 'Tradução/localização',
        text: 'Trabalhar o conteúdo com atenção à terminologia, ao tom e ao contexto funcional.',
      },
      {
        title: 'Revisão e checagem terminológica',
        text: 'Revisar consistência, completude, formatação e terminologia específica do projeto.',
      },
      {
        title: 'Entrega e comunicação',
        text: 'Entregar os arquivos com clareza e comunicar observações, perguntas ou limitações relevantes.',
      },
    ],
    contact: {
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
      github: 'GitHub / portfólio técnico',
      location: 'Localização',
      availability: 'Disponibilidade',
      languagePair: 'Par de idiomas',
      copy: 'Copiar e-mail',
      copied: 'E-mail copiado',
      replaceEmail: 'Substitua o placeholder do e-mail',
      availabilityRequest: 'Enviar consulta de disponibilidade',
      linkedinButton: 'Abrir LinkedIn',
      whatsappButton: 'Abrir WhatsApp',
      placeholderHint: 'Substitua este placeholder antes de publicar.',
      mailSubject: 'Consulta de disponibilidade — projeto de tradução/localização',
      mailBody:
        'Olá, Vinicius.\n\nGostaria de consultar sua disponibilidade para um projeto de tradução/localização.\n\nPar de idiomas:\nEscopo:\nPrazo:\nArquivos de referência ou instruções:\n\nObrigado(a).',
    },
    footer: {
      profile: 'Perfil independente de tradução/localização',
      disclaimer: 'This is an independent professional profile and is not an official RWS website.',
    },
  },
};

function isPlaceholder(value) {
  return !value || /^\[.*\]$/.test(value.trim());
}

function externalHref(value) {
  if (isPlaceholder(value)) return null;
  if (/^https?:\/\//i.test(value)) return value;
  if (/^wa\.me\//i.test(value)) return `https://${value}`;
  return value;
}

function whatsappHref(value) {
  if (isPlaceholder(value)) return null;
  if (/^https?:\/\//i.test(value)) return value;
  const digits = value.replace(/\D/g, '');
  return digits ? `https://wa.me/${digits}` : null;
}

function mailtoHref(email, labels) {
  if (isPlaceholder(email)) return null;
  const subject = encodeURIComponent(labels.mailSubject);
  const body = encodeURIComponent(labels.mailBody);
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

function updateMeta(lang, t) {
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.title = t.meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', t.meta.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');

  if (ogTitle) ogTitle.setAttribute('content', t.meta.title);
  if (ogDescription) ogDescription.setAttribute('content', t.meta.description);
  if (ogLocale) ogLocale.setAttribute('content', lang === 'pt' ? 'pt_BR' : 'en_US');
  if (twitterTitle) twitterTitle.setAttribute('content', t.meta.title);
  if (twitterDescription) twitterDescription.setAttribute('content', t.meta.description);
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function PlaceholderHint({ value, label }) {
  if (!isPlaceholder(value)) return null;
  return <span className="placeholder-hint">{label}</span>;
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('preferred-language') || 'en');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copyState, setCopyState] = useState('idle');

  const t = content[lang] || content.en;
  const emailHref = useMemo(() => mailtoHref(CONTACT.email, t.contact), [t.contact]);
  const linkedInHref = externalHref(CONTACT.linkedin);
  const githubHref = externalHref(CONTACT.github);
  const whatsAppHref = whatsappHref(CONTACT.whatsapp);

  useEffect(() => {
    localStorage.setItem('preferred-language', lang);
    updateMeta(lang, t);
  }, [lang, t]);

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [lang]);

  async function handleCopyEmail() {
    if (isPlaceholder(CONTACT.email)) {
      setCopyState('placeholder');
      window.setTimeout(() => setCopyState('idle'), 2400);
      return;
    }

    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopyState('copied');
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = CONTACT.email;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'absolute';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopyState('copied');
    }

    window.setTimeout(() => setCopyState('idle'), 2400);
  }

  function handleLanguageChange(nextLang) {
    setLang(nextLang);
    setMenuOpen(false);
  }

  function handleNavClick() {
    setMenuOpen(false);
  }

  const navItems = [
    ['services', t.nav.services],
    ['expertise', t.nav.expertise],
    ['process', t.nav.process],
    ['about', t.nav.about],
    ['contact', t.nav.contact],
  ];

  return (
    <>
      <a className="skip-link" href="#main">
        {lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Vinicius Santana home">
            <span className="brand-mark" aria-hidden="true">
              VS
            </span>
            <span className="brand-text">Vinicius Santana</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t.menu.close : t.menu.open}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>

          <nav id="site-navigation" className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Primary navigation">
            <div className="nav-links">
              {navItems.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={handleNavClick}>
                  {label}
                </a>
              ))}
            </div>

            <div className="nav-actions" aria-label="Language selector">
              <div className="language-switcher">
                <button
                  type="button"
                  className={lang === 'en' ? 'active' : ''}
                  aria-pressed={lang === 'en'}
                  onClick={() => handleLanguageChange('en')}
                >
                  EN
                </button>
                <button
                  type="button"
                  className={lang === 'pt' ? 'active' : ''}
                  aria-pressed={lang === 'pt'}
                  onClick={() => handleLanguageChange('pt')}
                >
                  PT-BR
                </button>
              </div>
              <a className="button button-small button-outline" href="#contact" onClick={handleNavClick}>
                {t.nav.contact}
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="hero section-offset">
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <p className="hero-meta">{t.hero.location}</p>
              <h1>{t.hero.headline}</h1>
              <p className="hero-subheadline">{t.hero.subheadline}</p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={emailHref || '#contact'}
                  aria-disabled={!emailHref || undefined}
                >
                  {t.hero.primaryCta}
                </a>
                <a className="button button-ghost" href="#services">
                  {t.hero.secondaryCta}
                </a>
              </div>

              <dl className="hero-facts" aria-label="Professional details">
                {t.hero.facts.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="portrait-card">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="./assets/images/vinicius-santana-hero-sm.avif 540w, ./assets/images/vinicius-santana-hero.avif 900w"
                    sizes="(max-width: 720px) 88vw, 42vw"
                  />
                  <source
                    type="image/webp"
                    srcSet="./assets/images/vinicius-santana-hero-sm.webp 540w, ./assets/images/vinicius-santana-hero.webp 900w"
                    sizes="(max-width: 720px) 88vw, 42vw"
                  />
                  <img
                    src="./assets/images/vinicius-santana-hero.jpg"
                    srcSet="./assets/images/vinicius-santana-hero-sm.jpg 540w, ./assets/images/vinicius-santana-hero.jpg 900w"
                    sizes="(max-width: 720px) 88vw, 42vw"
                    width="900"
                    height="1125"
                    alt={t.hero.alt}
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
                <div className="portrait-caption">
                  <span>{t.hero.profileLabel}</span>
                  <strong>{t.hero.profileText}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Credibility highlights">
          <div className="container trust-grid">
            {t.trust.map((item) => (
              <div className="trust-item" key={item} data-reveal>
                <span aria-hidden="true"></span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="section section-offset">
          <div className="container">
            <SectionHeader {...t.sections.services} />
            <div className="card-grid services-grid">
              {t.services.map((service, index) => (
                <article className="service-card" key={service.title} data-reveal>
                  <span className="card-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="section section-muted section-offset">
          <div className="container expertise-layout">
            <SectionHeader {...t.sections.expertise} />
            <div className="tag-cloud" aria-label={t.sections.expertise.title} data-reveal>
              {t.expertise.map((item) => (
                <span className={item.startsWith('[') ? 'tag is-placeholder' : 'tag'} key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section section-offset">
          <div className="container">
            <SectionHeader {...t.sections.process} />
            <div className="process-grid">
              {t.process.map((step, index) => (
                <article className="process-step" key={step.title} data-reveal>
                  <span className="step-index" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section section-muted section-offset">
          <div className="container about-grid">
            <div className="about-image" data-reveal>
              <picture>
                <source
                  type="image/avif"
                  srcSet="./assets/images/vinicius-santana-about-sm.avif 420w, ./assets/images/vinicius-santana-about.avif 680w"
                  sizes="(max-width: 840px) 78vw, 32vw"
                />
                <source
                  type="image/webp"
                  srcSet="./assets/images/vinicius-santana-about-sm.webp 420w, ./assets/images/vinicius-santana-about.webp 680w"
                  sizes="(max-width: 840px) 78vw, 32vw"
                />
                <img
                  src="./assets/images/vinicius-santana-about.jpg"
                  srcSet="./assets/images/vinicius-santana-about-sm.jpg 420w, ./assets/images/vinicius-santana-about.jpg 680w"
                  sizes="(max-width: 840px) 78vw, 32vw"
                  width="680"
                  height="680"
                  alt={t.sections.about.imageAlt}
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="about-copy" data-reveal>
              <p className="eyebrow">{t.sections.about.eyebrow}</p>
              <h2>{t.sections.about.title}</h2>
              <p>{t.sections.about.description}</p>

              <div className="principles-card">
                <h3>{t.sections.about.noteTitle}</h3>
                <ul>
                  {t.sections.about.principles.map((principle) => (
                    <li key={principle}>{principle}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section section-offset">
          <div className="container contact-grid">
            <div className="contact-copy" data-reveal>
              <p className="eyebrow">{t.sections.contact.eyebrow}</p>
              <h2>{t.sections.contact.title}</h2>
              <p>{t.sections.contact.description}</p>
              <p className="independent-note">{t.sections.contact.note}</p>

              <div className="contact-actions">
                <button className="button button-primary" type="button" onClick={handleCopyEmail}>
                  {copyState === 'copied'
                    ? t.contact.copied
                    : copyState === 'placeholder'
                      ? t.contact.replaceEmail
                      : t.contact.copy}
                </button>
                <a
                  className="button button-outline"
                  href={emailHref || '#contact'}
                  aria-disabled={!emailHref || undefined}
                >
                  {t.contact.availabilityRequest}
                </a>
              </div>
            </div>

            <aside className="contact-card" aria-label="Contact details" data-reveal>
              <dl id="contact-details">
                <div>
                  <dt>{t.contact.email}</dt>
                  <dd>
                    {emailHref ? <a href={emailHref}>{CONTACT.email}</a> : CONTACT.email}
                    <PlaceholderHint value={CONTACT.email} label={t.contact.placeholderHint} />
                  </dd>
                </div>
                <div>
                  <dt>{t.contact.languagePair}</dt>
                  <dd>
                    {CONTACT.languagePair}
                    <PlaceholderHint value={CONTACT.languagePair} label={t.contact.placeholderHint} />
                  </dd>
                </div>
                <div>
                  <dt>{t.contact.availability}</dt>
                  <dd>
                    {CONTACT.availability}
                    <PlaceholderHint value={CONTACT.availability} label={t.contact.placeholderHint} />
                  </dd>
                </div>
                <div>
                  <dt>{t.contact.location}</dt>
                  <dd>Brazil, UTC-3</dd>
                </div>
                <div>
                  <dt>{t.contact.whatsapp}</dt>
                  <dd>
                    {whatsAppHref ? (
                      <a href={whatsAppHref} target="_blank" rel="noreferrer">
                        {t.contact.whatsappButton}
                      </a>
                    ) : (
                      CONTACT.whatsapp
                    )}
                    <PlaceholderHint value={CONTACT.whatsapp} label={t.contact.placeholderHint} />
                  </dd>
                </div>
                <div>
                  <dt>{t.contact.linkedin}</dt>
                  <dd>
                    {linkedInHref ? (
                      <a href={linkedInHref} target="_blank" rel="noreferrer">
                        {t.contact.linkedinButton}
                      </a>
                    ) : (
                      CONTACT.linkedin
                    )}
                    <PlaceholderHint value={CONTACT.linkedin} label={t.contact.placeholderHint} />
                  </dd>
                </div>
                <div>
                  <dt>{t.contact.github}</dt>
                  <dd>
                    {githubHref ? (
                      <a href={githubHref} target="_blank" rel="noreferrer">
                        {CONTACT.github}
                      </a>
                    ) : (
                      CONTACT.github
                    )}
                    <PlaceholderHint value={CONTACT.github} label={t.contact.placeholderHint} />
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Vinicius Santana</strong>
            <p>{t.footer.profile}</p>
          </div>
          <div className="footer-meta">
            <p>{CONTACT.subdomain}</p>
            <p>© {new Date().getFullYear()} Vinicius Santana</p>
            <p className="footer-disclaimer">{t.footer.disclaimer}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
