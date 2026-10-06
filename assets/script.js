document.querySelector('[data-menu]')?.addEventListener('click',()=>document.body.classList.toggle('mobile-open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('mobile-open')));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());