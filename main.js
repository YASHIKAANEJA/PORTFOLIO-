const menu=document.querySelector('.menu'),links=document.querySelector('.navlinks');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));
const path=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.navlinks a').forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const cursor=document.querySelector('.cursor');
if(cursor){window.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});document.querySelectorAll('a,button,.project').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('big'));el.addEventListener('mouseleave',()=>cursor.classList.remove('big'))})}
const filterButtons=document.querySelectorAll('[data-filter]');
if(filterButtons.length){filterButtons.forEach(btn=>btn.addEventListener('click',()=>{filterButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.project[data-type]').forEach(p=>p.style.display=(f==='all'||p.dataset.type===f)?'block':'none')}))}
const year=document.querySelector('#year');if(year)year.textContent=new Date().getFullYear();
