// 🎶 Background Music & Fireworks
const music = document.getElementById("bgMusic");
const fireSound = document.getElementById("fireSound");
document.getElementById("start").onclick = () => {
  music.play();
  fireSound.play();
};

// ⏳ Countdown Function
function countdown(target, element) {
  setInterval(() => {
    const now = new Date();
    const diff = target - now;
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor(diff / (1000*60*60) % 24);
    const m = Math.floor(diff / (1000*60) % 60);
    const s = Math.floor(diff / 1000 % 60);
    document.getElementById(element).innerText = `${d} Days : ${h} Hrs : ${m} Min : ${s} Sec`;
  }, 1000);
}

countdown(new Date("December 25,2025 00:00:00"), "christmas");
countdown(new Date("January 1,2026 00:00:00"), "newyear");

// 🎆 Fireworks Animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

setInterval(() => {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let i=0;i<50;i++){
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 3, 0, Math.PI*2);
    ctx.fillStyle = `hsl(${Math.random()*360}, 100%, 50%)`;
    ctx.fill();
  }
}, 800);

// Sparkles creation
const sparklesContainer = document.querySelector('.sparkles');
for(let i=0; i<20; i++){
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.setProperty('--i', Math.random());
  sparkle.style.left = `${Math.random()*100}%`;
  sparklesContainer.appendChild(sparkle);
}

// Confetti effect on Start button
document.getElementById("start").addEventListener("click", ()=>{
  for(let i=0;i<100;i++){
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
    confetti.style.left = `${Math.random()*100}vw`;
    confetti.style.top = `-20px`;
    document.body.appendChild(confetti);
    
    // Animate confetti
    const fall = setInterval(()=>{
      let top = parseFloat(confetti.style.top);
      if(top < window.innerHeight + 20){
        confetti.style.top = top + 5 + 'px';
        confetti.style.transform = `rotate(${top*5}deg)`;
      }else{
        confetti.remove();
        clearInterval(fall);
      }
    },16);
  }
});
