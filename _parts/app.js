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
    const telHref = 'tel:' + pf.phone.replace(/\\s/g, '');
    const channels = [
      { icon: 'email', label: 'Email', value: pf.email, url: 'mailto:' + pf.email },
      { icon: 'whatsapp', label: 'WhatsApp', value: pf.phone, url: 'https://wa.me/' + pf.whatsapp },
      { icon: 'phone', label: 'Phone', value: pf.phone, url: telHref }
    ];
    const contactChEl = $('#contactChannels');
    if (contactChEl) {
      contactChEl.innerHTML = channels.map(c => `
        <a href="${c.url}" target="_blank" rel="noopener" style="display:flex; align-items:center; gap:24px; color:var(--text-main); padding:24px; border:1px solid var(--border); border-radius:4px; text-decoration:none; transition:0.3s; background:var(--surface);">
          <div style="color:var(--text-main);">${ICONS[c.icon]}</div>
          <div>
            <div style="font-size:12px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; font-family:var(--font-mono); margin-bottom:4px;">${c.label}</div>
            <div style="font-size:18px; font-weight:500;">${c.value}</div>
          </div>
        </a>`).join('');
    }
    const cpSocials = $('#contactPageSocials');
    if (cpSocials) cpSocials.innerHTML = socialsHTML;

    // Resume
    const rs = DATA.resume;
    const pdfBtn = rs.pdfUrl
      ? `<a class="btn-primary" href="${rs.pdfUrl}" download>Download PDF</a>`
      : `<span style="color:var(--text-muted); font-size:13px; border:1px dashed var(--border); padding:8px 16px; border-radius:2px;">PDF Unavailable</span>`;
    
    const resumeEl = $('#resumeBody');
    if (resumeEl) {
      resumeEl.innerHTML = `
        <a href="#" class="back-link">&larr; Return to Presentation</a>
        <div class="resume-head">
          <div>
            <h1 style="font-size:clamp(32px, 5vw, 64px); font-weight:700; color:var(--text-main); margin-bottom:4px; letter-spacing:-0.03em;">${pf.name}</h1>
            <p class="resume-role">${rs.role} • ${rs.location}</p>
          </div>
          ${pdfBtn}
        </div>
        <div class="resume-grid">
          <div class="resume-main">
            <h3 class="resume-sec">Experience</h3>
            ${rs.experience.map(x => `<div class="r-item">
              <div class="r-item-head"><h4>${x.role}</h4><span>${x.period}</span></div>
              <p class="r-org">${x.org}</p>
              <ul>${x.points.map(p => `<li>${p}</li>`).join('')}</ul>
            </div>`).join('')}
            
            <h3 class="resume-sec" style="margin-top:64px;">Education</h3>
            ${rs.education.map(e => `<div class="r-item">
              <div class="r-item-head"><h4>${e.school}</h4><span>${e.period}</span></div>
              <p class="r-org">${e.degree}</p>
              <p style="color:var(--text-muted); font-size:15px; margin-top:12px;">${e.note}</p>
            </div>`).join('')}
          </div>
          <aside class="resume-aside">
            <h3 class="resume-sec">Skills</h3>
            <div style="display:flex; flex-direction:column; gap:32px;">
              ${DATA.skills.map(s => `<div>
                <div style="font-size:12px; font-family:var(--font-mono); text-transform:uppercase; letter-spacing:1px; font-weight:500; color:var(--text-muted); margin-bottom:12px;">${s.cat}</div>
                <div style="display:flex; flex-wrap:wrap; gap:12px;">
                  ${s.items.map(i => `<span style="font-size:14px; font-weight:300; color:var(--text-main);">${i}</span>`).join('')}
                </div>
              </div>`).join('')}
            </div>
          </aside>
        </div>`;
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
        }
      });
    }, { threshold: 0.5 }); // triggers when 50% of the slide is visible
    
    slides.forEach(slide => slideObserver.observe(slide));
  }

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
    if (transitioning) return; transitioning = true;
    ptOverlay.classList.add('active');
    
    setTimeout(() => {
      $$('.page-view').forEach(v => v.classList.remove('active'));
      $(targetId).classList.add('active');
      window.scrollTo(0, 0);
      
      // Control scroll snap based on view
      if (targetId === '#view-main') {
        document.documentElement.style.scrollSnapType = 'y mandatory';
        document.documentElement.style.overflowY = 'scroll';
        $('#slideNav').style.display = 'flex';
        $('.top-nav').style.display = 'flex';
      } else {
        document.documentElement.style.scrollSnapType = 'none';
        document.documentElement.style.overflowY = 'auto';
        $('#slideNav').style.display = 'none';
        $('.top-nav').style.display = 'none';
      }

      observeReveals($(targetId));
      ptOverlay.classList.remove('active'); 
      transitioning = false; 
    }, 500);
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