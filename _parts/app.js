(function() {
  "use strict";
  const $ = (s, el = document) => (el || document).querySelector(s);
  const $$ = (s, el = document) => [...(el || document).querySelectorAll(s)];

  const ICONS = {
    github: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.8.5A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg>',
    external: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.3 18.3V10H5.7v8.3h2.6zM7 8.8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11.3 9.5v-4.6c0-2.4-1.3-3.6-3-3.6-1.4 0-2 .8-2.4 1.3V10h-2.6v8.3h2.6v-4.4c0-.2 0-.5.1-.7.2-.5.6-1 1.4-1 1 0 1.4.7 1.4 1.9v4.2h2.5z"/></svg>',
    tableau: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 2h1v3.5H16v1h-3.5V10h-1V6.5H8v-1h3.5V2zM5 8h1v2.5h2.5v1H6V14H5v-2.5H2.5v-1H5V8zm13 0h1v2.5h2.5v1H19V14h-1v-2.5h-2.5v-1H18V8zm-6.5 6h1v2.5H16v1h-3.5V20h-1v-2.5H8v-1h3.5V14z"/></svg>',
    instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    email: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.6 4.7-1.2A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.7.7-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.2 0-.3 0-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.2.7 3 .6.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.2-.2-.5-.4z"/></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>'
  };

  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Loader */
  const loader = $('#loader');
  const counterEl = $('#loaderCounter');
  
  function finishLoader() {
    loader.classList.add('done');
    document.body.classList.remove('loading');
    observeReveals(document);
  }

  if (reduceMotion) {
    loader.style.display = 'none';
    document.body.classList.remove('loading');
    observeReveals(document);
  } else {
    let start = null;
    const duration = 1500;
    function countUp(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * 100);
      if(counterEl) { counterEl.textContent = current + '%'; }
      
      if (progress < 1) {
        requestAnimationFrame(countUp);
      } else {
        setTimeout(() => {
          finishLoader();
        }, 150);
      }
    }
    requestAnimationFrame(countUp);
  }

  /* Render Data */
  if (typeof DATA !== 'undefined') {
    // Badge
    const badgeEl = $('#statusBadge');
    if (badgeEl) {
      if (!DATA.profile.available) badgeEl.style.display = 'none';
      else badgeEl.innerHTML = `<div class="dot"></div>${DATA.profile.availableText}`;
    }

    // Tech
    const techEl = $('#aboutTech');
    if (techEl) techEl.innerHTML = DATA.about.tech.map(t => `<li>${t}</li>`).join('');

    // Projects Carousel
    const catName = c => c.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    const projectHTML = (p) => {
      const links = p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${ICONS[l.icon] || ''} ${l.label}</a>`).join('');
      const tags = p.tags.map(t => `<span>${t}</span>`).join('');
      return `<article class="project" data-cat="${p.category}">
        <div class="p-media">${p.initial}</div>
        <div class="p-body">
          <div class="p-header">
            <h3 class="p-title">${p.title}</h3>
            <span class="p-cat">${catName(p.category)}</span>
          </div>
          <p class="p-summary">${p.summary}</p>
          <div class="p-tags">${tags}</div>
          <div class="p-links">${links}</div>
        </div>
      </article>`;
    };

    const listEl = $('#projectsList');
    if (listEl) {
      // Hanya tampilkan project yang 'featured' atau max 4 di Slide Utama
      const featuredProjects = DATA.projects.filter(p => p.featured || true).slice(0, 4);
      
      const viewAllCard = `
        <article class="project view-all-card" style="display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.02); border:1px dashed var(--border); cursor:pointer; min-width:320px; transition:0.3s;" onclick="location.hash='#/projects'">
          <div style="text-align:center; padding: 40px;">
            <div style="font-size:32px; margin-bottom:16px; color:var(--text-main); transition:transform 0.3s;" class="arrow">&rarr;</div>
            <h3 style="font-size:20px; color:var(--text-main); margin-bottom:8px;">View All Archive</h3>
            <p style="color:var(--text-muted); font-family:var(--font-mono); font-size:12px;">EXPLORE ALL DEPLOYMENTS</p>
          </div>
        </article>
      `;
      
      listEl.innerHTML = featuredProjects.map(projectHTML).join('') + viewAllCard;
      
      const spacer = document.createElement('div');
      spacer.style.minWidth = '5vw'; spacer.style.flexShrink = '0';
      listEl.appendChild(spacer);
      observeReveals(listEl);
    }

    // Skills Bento
    const bentoEl = $('#bento');
    if (bentoEl) {
      bentoEl.innerHTML = DATA.skills.map(s => {
        const cls = s.size === 'wide' ? 'tile wide' : 'tile';
        const items = `<div class="t-items">${s.items.map(i => `<span>${i}</span>`).join('')}</div>`;
        return `<div class="${cls}">
          <div class="t-cat">${s.cat}</div>
          ${items}
        </div>`;
      }).join('');
    }

    // Footer Socials
    const pf = DATA.profile;
    const social = [
      { icon: 'github', url: pf.github }, { icon: 'linkedin', url: pf.linkedin },
      { icon: 'tableau', url: pf.tableau }, { icon: 'instagram', url: pf.instagram },
      { icon: 'email', url: 'mailto:' + pf.email }
    ];
    const socialsHTML = social.map(s => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.icon}">${ICONS[s.icon]}</a>`).join('');
    $('#socials').innerHTML = socialsHTML;

    // Contact Page
    const telHref = 'tel:' + pf.phone.replace(/\s/g, '');
    const channels = [
      { 
        icon: 'email', 
        tag: 'DIRECT INBOX', 
        label: 'Email Dispatch', 
        value: pf.email, 
        sub: 'Best for internship inquiries, project proposals & formal correspondence.',
        url: 'mailto:' + pf.email,
        action: 'Send Email'
      },
      { 
        icon: 'whatsapp', 
        tag: 'FAST RESPONSE', 
        label: 'WhatsApp Chat', 
        value: pf.phone, 
        sub: 'Quick chats, direct networking & immediate discussions.',
        url: 'https://wa.me/' + pf.whatsapp,
        action: 'Open Chat'
      },
      { 
        icon: 'phone', 
        tag: 'VOICE LINE', 
        label: 'Direct Phone', 
        value: pf.phone, 
        sub: 'Available during business hours (UTC+7 / Jakarta WIB).',
        url: telHref,
        action: 'Call'
      }
    ];
    const contactChEl = $('#contactChannels');
    if (contactChEl) {
      contactChEl.innerHTML = channels.map(c => `
        <a href="${c.url}" target="_blank" rel="noopener" class="contact-channel-card">
          <div class="cc-icon-wrap">${ICONS[c.icon]}</div>
          <div class="cc-content">
            <div class="cc-header">
              <span class="cc-tag font-mono">${c.tag}</span>
              <span class="cc-action font-mono">${c.action} &nearr;</span>
            </div>
            <div class="cc-label">${c.label}</div>
            <div class="cc-value font-mono">${c.value}</div>
            <p class="cc-sub">${c.sub}</p>
          </div>
        </a>`).join('');
    }
    const cpSocials = $('#contactPageSocials');
    if (cpSocials) {
      const socialList = [
        { icon: 'linkedin', name: 'LinkedIn', handle: 'donbosco-farrel', url: pf.linkedin, desc: 'Professional Network' },
        { icon: 'github', name: 'GitHub', handle: 'D-Farrel', url: pf.github, desc: 'Source Code Repositories' },
        { icon: 'tableau', name: 'Tableau', handle: 'donbosco.farrel', url: pf.tableau, desc: 'Interactive Visualizations' },
        { icon: 'instagram', name: 'Instagram', handle: '@donboscofr', url: pf.instagram, desc: 'Personal Updates' }
      ];
      cpSocials.innerHTML = socialList.map(s => `
        <a href="${s.url}" target="_blank" rel="noopener" class="contact-social-item">
          <div class="cs-icon">${ICONS[s.icon]}</div>
          <div class="cs-info">
            <span class="cs-name">${s.name}</span>
            <span class="cs-handle font-mono">${s.handle}</span>
          </div>
          <span class="cs-arrow">&nearr;</span>
        </a>
      `).join('');
    }

    // Resume
    const rs = DATA.resume;
    const pdfBtn = rs.pdfUrl
      ? `<a class="btn-download-pdf" href="${rs.pdfUrl}" download>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          <span>Download PDF CV</span>
        </a>`
      : `<span class="btn-disabled-pdf">PDF Unavailable</span>`;
    
    const resumeEl = $('#resumeBody');
    if (resumeEl) {
      resumeEl.innerHTML = `
        <div class="resume-container">
          <!-- Top Back Bar -->
          <div class="resume-topbar">
            <a href="#" class="resume-back-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              <span>Back to Presentation</span>
            </a>
            ${pdfBtn}
          </div>

          <!-- Hero Identity Card -->
          <div class="resume-hero-card">
            <div class="rh-left">
              <div class="rh-badge"><span class="rh-dot"></span> Available for Data Engineering &amp; Analytics Roles</div>
              <h1 class="rh-name">${pf.name}</h1>
              <p class="rh-role">${rs.role} <span class="rh-sep">&bull;</span> ${rs.location}</p>
              <p class="rh-summary">${rs.summary}</p>
            </div>
            <div class="rh-contacts">
              <a href="mailto:${pf.email}" class="rh-contact-pill">
                ${ICONS.email}
                <span>${pf.email}</span>
              </a>
              <a href="https://linkedin.com/in/donbosco-farrel-81691b322" target="_blank" rel="noopener" class="rh-contact-pill">
                ${ICONS.linkedin}
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/D-Farrel" target="_blank" rel="noopener" class="rh-contact-pill">
                ${ICONS.github}
                <span>GitHub Archive</span>
              </a>
              <a href="https://public.tableau.com/app/profile/donbosco.farrel" target="_blank" rel="noopener" class="rh-contact-pill">
                ${ICONS.tableau}
                <span>Tableau Visualizations</span>
              </a>
            </div>
          </div>

          <!-- 2-Column Content Grid -->
          <div class="resume-layout-grid">
            <!-- Left Main Column (Experience & Education) -->
            <div class="resume-col-main">
              <!-- Section: Experience -->
              <section class="resume-card-block">
                <div class="rc-header">
                  <span class="rc-idx font-mono">01.</span>
                  <h2 class="rc-title">Experience &amp; Key Deployments</h2>
                </div>
                <div class="rc-timeline">
                  ${rs.experience.map(x => `
                    <div class="timeline-item">
                      <div class="timeline-dot"></div>
                      <div class="timeline-head">
                        <h3 class="timeline-role">${x.role}</h3>
                        <span class="timeline-period font-mono">${x.period}</span>
                      </div>
                      <p class="timeline-org font-mono">${x.org}</p>
                      <ul class="timeline-points">
                        ${x.points.map(p => `<li>${p}</li>`).join('')}
                      </ul>
                    </div>
                  `).join('')}
                </div>
              </section>

              <!-- Section: Education -->
              <section class="resume-card-block" style="margin-top: 28px;">
                <div class="rc-header">
                  <span class="rc-idx font-mono">02.</span>
                  <h2 class="rc-title">Education</h2>
                </div>
                <div class="rc-timeline">
                  ${rs.education.map(e => `
                    <div class="timeline-item">
                      <div class="timeline-dot"></div>
                      <div class="timeline-head">
                        <h3 class="timeline-role">${e.school}</h3>
                        <span class="timeline-period font-mono">${e.period}</span>
                      </div>
                      <p class="timeline-org font-mono" style="color:var(--text-main); font-weight:500;">${e.degree}</p>
                      <p class="timeline-note font-mono">${e.note}</p>
                    </div>
                  `).join('')}
                </div>
              </section>
            </div>

            <!-- Right Sidebar Column (Core Competencies & Stack) -->
            <div class="resume-col-side">
              <section class="resume-card-block">
                <div class="rc-header">
                  <span class="rc-idx font-mono">03.</span>
                  <h2 class="rc-title">Core Competencies</h2>
                </div>
                <div class="skills-stack-groups">
                  ${DATA.skills.map(s => `
                    <div class="skill-group">
                      <div class="skill-group-label font-mono">${s.cat}</div>
                      <div class="skill-pills">
                        ${s.items.map(i => `<span class="skill-pill font-mono">${i}</span>`).join('')}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </section>
            </div>
          </div>
        </div>
      `;
    }
  }

  /* Intersection Observer for Slide Navigation Dots */
  const slides = $$('.slide-section');
  const navDots = $$('.nav-dot');
  
  if(slides.length > 0 && navDots.length > 0) {
    const slideObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navDots.forEach(dot => dot.classList.remove('active'));
          const activeDot = $('#slideNav a[href="#' + entry.target.id + '"]');
          if (activeDot) activeDot.classList.add('active');
          $$('.top-nav-pill .nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { threshold: 0.5 }); // triggers when 50% of the slide is visible
    
    slides.forEach(slide => slideObserver.observe(slide));
  }

  /* Smooth scroll for top nav pill links */
  $$('.top-nav-pill a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && !targetId.startsWith('#/')) {
        e.preventDefault();
        const targetSection = $(targetId);
        if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* Smooth scroll for nav dots click */
  navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = dot.getAttribute('href');
      const targetSection = $(targetId);
      if(targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* View Router (Subpages) */
  const ptOverlay = $('#pageTransition');
  let transitioning = false;

  function runTransition(targetId) {
    if (transitioning) return; 
    transitioning = true;
    if (ptOverlay) ptOverlay.classList.add('active');
    
    setTimeout(() => {
      $$('.page-view').forEach(v => v.classList.remove('active'));
      const target = $(targetId);
      if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
      }
      
      // Control scroll snap based on view
      if (targetId === '#view-main') {
        document.documentElement.style.scrollSnapType = 'y mandatory';
        document.documentElement.style.overflowY = 'scroll';
        if ($('#slideNav')) $('#slideNav').style.display = 'flex';
        if ($('.top-nav')) $('.top-nav').style.display = 'flex';
      } else {
        document.documentElement.style.scrollSnapType = 'none';
        document.documentElement.style.overflowY = 'auto';
        if ($('#slideNav')) $('#slideNav').style.display = 'none';
        if ($('.top-nav')) $('.top-nav').style.display = 'none';
      }

      if (target) observeReveals(target);
      if (ptOverlay) ptOverlay.classList.remove('active'); 
      transitioning = false; 
    }, 350);

    setTimeout(() => { transitioning = false; }, 800);
  }

  function handleRoute() {
    const h = location.hash;
    if (h === '#/contact') runTransition('#view-contact');
    else if (h === '#/resume') runTransition('#view-resume');
    else {
      if (!$('#view-main').classList.contains('active')) runTransition('#view-main');
      else if (h.startsWith('#') && h.length > 1 && !h.startsWith('#/')) {
        const target = $(h);
        if (target) target.scrollIntoView({behavior:'smooth'});
      }
    }
  }
  
  window.addEventListener('hashchange', handleRoute);

  // Instant route on page load if hash exists
  if (location.hash) {
    setTimeout(handleRoute, 100);
  }

  // Intercept resume button and back button clicks
  document.addEventListener('click', (e) => {
    const resumeBtn = e.target.closest('a[href="#/resume"]');
    if (resumeBtn) {
      e.preventDefault();
      location.hash = '#/resume';
      runTransition('#view-resume');
      return;
    }
    const backBtn = e.target.closest('.resume-back-btn, .back-link, a[href="#"]');
    if (backBtn && !e.target.closest('.top-nav-pill')) {
      e.preventDefault();
      location.hash = '';
      runTransition('#view-main');
      return;
    }
  });

  /* Reveals */
  var io;
  function observeReveals(scope) {
    if (!('IntersectionObserver' in window)) { $$('.reveal', scope).forEach(e => e.classList.add('in')); return; }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
    }
    $$('.reveal', scope).forEach(e => io.observe(e));
  }

  /* Custom Cursor */
  if (finePointer && !reduceMotion) {
    const dot = $('.cursor-dot');
    let mx = innerWidth / 2, my = innerHeight / 2;
    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      if(dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
    }, { passive: true });
  }

})();