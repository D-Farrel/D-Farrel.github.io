const fs = require('fs');
let code = fs.readFileSync('C:/Users/Portotester/_parts/app.js', 'utf8');

const oldCode = `  const loader = $('#loader');
  const counterEl = $('#loaderCounter');
  
  function finishLoader(instant = false) {
    if (instant) {
      if(counterEl) counterEl.textContent = '100%';
      loader.style.transition = 'none';
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      loader.style.display = 'none';
    } else {
      loader.classList.add('done');
    }
    document.body.classList.remove('loading');
    observeReveals(document);
  }

  if (sessionStorage.getItem('portfolio-loaded') || reduceMotion) {
    finishLoader(true);
  } else {
    let start = null;
    const duration = 1200;
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
          finishLoader(false);
          sessionStorage.setItem('portfolio-loaded', 'true');
        }, 150);
      }
    }
    requestAnimationFrame(countUp);
  }`;

const newCode = `  const loader = $('#loader');
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
  }`;

if(code.includes(oldCode)) {
  code = code.replace(oldCode, newCode);
  fs.writeFileSync('C:/Users/Portotester/_parts/app.js', code);
  console.log("SUCCESS");
} else {
  console.log("NOT FOUND. Let me use regex.");
  // Regex approach
  code = code.replace(/const loader = \$\('#loader'\);[\s\S]*?requestAnimationFrame\(countUp\);\n  \}/, newCode);
  fs.writeFileSync('C:/Users/Portotester/_parts/app.js', code);
  console.log("SUCCESS WITH REGEX");
}
