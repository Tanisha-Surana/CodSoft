// Smooth scrolling and mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
  // Mobile toggle
  const toggle = document.getElementById('mobile-toggle');
  const nav = document.getElementById('main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const isOpen = nav.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e)=>{
      if(!nav.classList.contains('open')) return;
      const target = e.target;
      if(!nav.contains(target) && !toggle.contains(target)){
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape' && nav.classList.contains('open')){
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href === '#' || href === '#!') return;
      if(href.startsWith('#')){
        const el = document.querySelector(href);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth',block:'start'});
          // close mobile menu
          if(nav && nav.classList.contains('open')) nav.classList.remove('open');
        }
      }
    });
  });
});
