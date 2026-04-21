const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx=0, my=0, rx=0, ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function animCursor(){
  cursor.style.left=mx+'px'; cursor.style.top=my+'px';
  rx+=(mx-rx)*.13; ry+=(my-ry)*.13;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animCursor);
})();

const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
function closeNav(){ navLinks.classList.remove('open'); }


const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H;

function resize(){
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor(){ this.reset(true); }
  reset(initial){
    this.x  = Math.random()*W;
    this.y  = initial ? Math.random()*H : (Math.random() < .5 ? -5 : H+5);
    this.vx = (Math.random()-.5)*.4;
    this.vy = (Math.random()-.5)*.4;
    this.r  = Math.random()*1.8+.4;
    this.a  = Math.random()*.5+.15;
    this.gold = Math.random() < .22;
  }
  update(){
    this.x+=this.vx; this.y+=this.vy;
    if(this.x<0||this.x>W||this.y<0||this.y>H) this.reset(false);
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
    ctx.fillStyle = this.gold
      ? `rgba(201,168,76,${this.a})`
      : `rgba(245,242,236,${this.a*.45})`;
    ctx.fill();
  }
}

class Blob {
  constructor(){
    this.x  = Math.random()*W;
    this.y  = Math.random()*H;
    this.vx = (Math.random()-.5)*.2;
    this.vy = (Math.random()-.5)*.2;
    this.r  = Math.random()*280+120;
    this.hue = [43,43,210,260,280][Math.floor(Math.random()*5)];
    this.a  = Math.random()*.06+.025;
  }
  update(){
    this.x+=this.vx; this.y+=this.vy;
    if(this.x<-this.r) this.x=W+this.r;
    if(this.x>W+this.r) this.x=-this.r;
    if(this.y<-this.r) this.y=H+this.r;
    if(this.y>H+this.r) this.y=-this.r;
  }
  draw(){
    const g=ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.r);
    g.addColorStop(0,`hsla(${this.hue},50%,45%,${this.a})`);
    g.addColorStop(1,'transparent');
    ctx.fillStyle=g;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
    ctx.fill();
  }
}

const particles = Array.from({length:120},()=>new Particle());
const blobs     = Array.from({length:8},()=>new Blob());

function drawLines(){
  const maxD=120;
  for(let i=0;i<particles.length;i++){
    for(let j=i+1;j<particles.length;j++){
      const dx=particles[i].x-particles[j].x, dy=particles[i].y-particles[j].y;
      const d=Math.hypot(dx,dy);
      if(d<maxD){
        ctx.beginPath();
        ctx.moveTo(particles[i].x,particles[i].y);
        ctx.lineTo(particles[j].x,particles[j].y);
        ctx.strokeStyle=`rgba(201,168,76,${(1-d/maxD)*.08})`;
        ctx.lineWidth=.5;
        ctx.stroke();
      }
    }
  }
}

function loop(){
  ctx.clearRect(0,0,W,H);
  blobs.forEach(b=>{b.update();b.draw();});
  drawLines();
  particles.forEach(p=>{p.update();p.draw();});
  requestAnimationFrame(loop);
}
loop();


const reveals = document.querySelectorAll('.reveal');
new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); }
  });
},{threshold:.1}).observe ? 
  reveals.forEach(el => new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); }});
  },{threshold:.1}).observe(el)) : null;