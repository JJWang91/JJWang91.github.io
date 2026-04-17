const i=[{id:"pulsing-gradient-orb",title:"Pulsing Gradient Orb",description:"An animated radial gradient orb that pulses and glows.",htmlCode:'<div class="orb"></div>',cssCode:`body {
  background: #0a0a0f;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.orb {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #a78bfa, #7c3aed 40%, #4c1d95 70%, #1e0a3c);
  box-shadow:
    0 0 40px #7c3aed88,
    0 0 80px #7c3aed44,
    0 0 120px #7c3aed22;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 40px #7c3aed88, 0 0 80px #7c3aed44, 0 0 120px #7c3aed22;
  }
  50% {
    transform: scale(1.08);
    box-shadow: 0 0 60px #a78bfaaa, 0 0 120px #7c3aed66, 0 0 180px #7c3aed33;
  }
}`,author:{name:"CSS Wizard"},likeCount:128,viewCount:1024},{id:"neon-glow-text",title:"Neon Glow Text",description:"CSS neon flickering text effect with colorful glow.",htmlCode:'<div class="neon-container"><h1 class="neon">CSS<br>TOY</h1></div>',cssCode:`body {
  background: #050505;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.neon-container {
  text-align: center;
}

.neon {
  font-family: 'Arial Black', sans-serif;
  font-size: 72px;
  font-weight: 900;
  color: #fff;
  text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #fff,
    0 0 42px #f97316,
    0 0 82px #f97316,
    0 0 92px #f97316;
  animation: flicker 3s infinite alternate;
  line-height: 1;
  letter-spacing: 0.1em;
}

@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #f97316,
      0 0 82px #f97316,
      0 0 92px #f97316;
  }
  20%, 24%, 55% {
    text-shadow: none;
    color: #999;
  }
}`,author:{name:"Neon Master"},likeCount:256,viewCount:2048},{id:"aurora-borealis",title:"Aurora Borealis",description:"Dreamy animated aurora borealis gradient background.",htmlCode:'<div class="aurora"><div class="band b1"></div><div class="band b2"></div><div class="band b3"></div></div>',cssCode:`body {
  background: #020b14;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.aurora {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.band {
  position: absolute;
  width: 200%;
  height: 300px;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  mix-blend-mode: screen;
}

.b1 {
  background: linear-gradient(90deg, transparent, #00ff88, #00ddff, transparent);
  top: 10%;
  left: -50%;
  animation: drift 8s ease-in-out infinite alternate;
}

.b2 {
  background: linear-gradient(90deg, transparent, #7c3aed, #06b6d4, transparent);
  top: 25%;
  left: -30%;
  animation: drift 11s ease-in-out infinite alternate-reverse;
}

.b3 {
  background: linear-gradient(90deg, transparent, #059669, #818cf8, transparent);
  top: 40%;
  left: -40%;
  animation: drift 14s ease-in-out infinite alternate;
}

@keyframes drift {
  from { transform: translateX(0) scaleY(1) rotate(-3deg); }
  to   { transform: translateX(30%) scaleY(1.4) rotate(3deg); }
}`,author:{name:"Nature Coder"},likeCount:512,viewCount:4096},{id:"ripple-loader",title:"Ripple Loader",description:"Animated concentric ripple circles loader.",htmlCode:'<div class="loader"><div></div><div></div><div></div><div></div></div>',cssCode:`body {
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.loader {
  position: relative;
  width: 80px;
  height: 80px;
}

.loader div {
  position: absolute;
  border: 3px solid #f97316;
  border-radius: 50%;
  animation: ripple 1.6s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  opacity: 0;
}

.loader div:nth-child(1) { animation-delay: 0s; }
.loader div:nth-child(2) { animation-delay: -0.4s; }
.loader div:nth-child(3) { animation-delay: -0.8s; }
.loader div:nth-child(4) { animation-delay: -1.2s; }

@keyframes ripple {
  0% {
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  100% {
    top: 50%;
    left: 50%;
    width: 120px;
    height: 120px;
    opacity: 0;
    transform: translate(-50%, -50%);
  }
}`,author:{name:"Loader Dev"},likeCount:64,viewCount:512},{id:"floating-bubbles",title:"Floating Bubbles",description:"Beautiful animated floating bubbles rising effect.",htmlCode:'<div class="bubbles"><span></span><span></span><span></span><span></span><span></span></div>',cssCode:`body {
  background: #0a192f;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.bubbles {
  position: relative;
  width: 100%;
  height: 100vh;
}

.bubbles span {
  position: absolute;
  bottom: -80px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.3);
  animation: rise 6s infinite;
}

.bubbles span:nth-child(1) { width: 20px;  height: 20px;  left: 10%; animation-duration: 8s;  animation-delay: 0s; }
.bubbles span:nth-child(2) { width: 30px;  height: 30px;  left: 20%; animation-duration: 5s;  animation-delay: 1s; }
.bubbles span:nth-child(3) { width: 15px;  height: 15px;  left: 35%; animation-duration: 7s;  animation-delay: 2s; }
.bubbles span:nth-child(4) { width: 40px;  height: 40px;  left: 50%; animation-duration: 6s;  animation-delay: 0.5s; }
.bubbles span:nth-child(5) { width: 25px;  height: 25px;  left: 70%; animation-duration: 9s;  animation-delay: 3s; }

@keyframes rise {
  0%   { bottom: -80px; transform: translateX(0) scaleY(1); opacity: 0.8; }
  50%  { transform: translateX(30px) scaleY(1.05); opacity: 0.6; }
  100% { bottom: 110%; transform: translateX(-20px) scaleY(0.8); opacity: 0; }
}`,author:{name:"Bubble Artist"},likeCount:96,viewCount:768},{id:"matrix-rain",title:"Matrix Rain",description:"Classic Matrix digital rain effect with falling characters.",htmlCode:'<div class="matrix"><div class="drop"></div><div class="drop"></div><div class="drop"></div><div class="drop"></div><div class="drop"></div><div class="drop"></div><div class="drop"></div><div class="drop"></div></div>',cssCode:`body {
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.matrix {
  position: relative;
  display: flex;
  gap: 30px;
}

.drop {
  width: 20px;
  height: 120px;
  background: linear-gradient(to bottom, transparent, #0f0);
  animation: fall 1.5s linear infinite;
  border-radius: 5px;
  box-shadow: 0 0 10px #0f0;
}

.drop:nth-child(1) { animation-delay: 0s; }
.drop:nth-child(2) { animation-delay: 0.2s; }
.drop:nth-child(3) { animation-delay: 0.4s; }
.drop:nth-child(4) { animation-delay: 0.6s; }
.drop:nth-child(5) { animation-delay: 0.8s; }
.drop:nth-child(6) { animation-delay: 1s; }
.drop:nth-child(7) { animation-delay: 1.2s; }
.drop:nth-child(8) { animation-delay: 1.4s; }

@keyframes fall {
  0% { transform: translateY(-120px); opacity: 1; }
  100% { transform: translateY(100px); opacity: 0.2; }
}`,author:{name:"Matrix Fan"},likeCount:320,viewCount:2560},{id:"3d-rotating-cube",title:"3D Rotating Cube",description:"Pure CSS 3D cube with colored faces rotating in space.",htmlCode:'<div class="scene"><div class="cube"><div class="face front"></div><div class="face back"></div><div class="face right"></div><div class="face left"></div><div class="face top"></div><div class="face bottom"></div></div></div>',cssCode:`body {
  background: #111827;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  perspective: 600px;
}

.scene {
  width: 120px;
  height: 120px;
  perspective: 600px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 6s linear infinite;
}

.face {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 2px solid rgba(255,255,255,0.2);
  opacity: 0.9;
}

.front  { background: rgba(249, 115, 22, 0.5); transform: translateZ(60px); }
.back   { background: rgba(99, 102, 241, 0.5); transform: rotateY(180deg) translateZ(60px); }
.right  { background: rgba(16, 185, 129, 0.5); transform: rotateY(90deg) translateZ(60px); }
.left   { background: rgba(236, 72, 153, 0.5); transform: rotateY(-90deg) translateZ(60px); }
.top    { background: rgba(245, 158, 11, 0.5); transform: rotateX(90deg) translateZ(60px); }
.bottom { background: rgba(139, 92, 246, 0.5); transform: rotateX(-90deg) translateZ(60px); }

@keyframes rotate {
  from { transform: rotateX(-20deg) rotateY(0deg); }
  to   { transform: rotateX(-20deg) rotateY(360deg); }
}`,author:{name:"3D Artist"},likeCount:200,viewCount:1500},{id:"morphing-blob",title:"Morphing Blob",description:"A gradient blob that continuously morphs its shape using border-radius animation.",htmlCode:'<div class="blob"></div>',cssCode:`body {
  background: #0d0d1a;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.blob {
  width: 220px;
  height: 220px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  box-shadow:
    0 0 60px #764ba288,
    0 0 120px #667eea44;
  animation: morph 8s ease-in-out infinite;
}

@keyframes morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25%       { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50%       { border-radius: 50% 60% 30% 60% / 40% 30% 70% 50%; }
  75%       { border-radius: 60% 40% 70% 30% / 70% 50% 30% 40%; }
}`,author:{name:"Blob Master"},likeCount:180,viewCount:1200},{id:"glitch-text-effect",title:"Glitch Text Effect",description:"RGB color-split glitch animation using CSS pseudo-elements and clip-path.",htmlCode:'<div class="stage"><span class="glitch" data-text="GLITCH">GLITCH</span></div>',cssCode:`body {
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.glitch {
  font-size: 80px;
  font-weight: 900;
  font-family: 'Arial Black', sans-serif;
  color: #fff;
  position: relative;
  letter-spacing: 0.1em;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
}

.glitch::before {
  color: #ff2d55;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
  animation: glitch-top 2.5s infinite;
}

.glitch::after {
  color: #00ffea;
  clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
  animation: glitch-bot 2.5s infinite;
}

@keyframes glitch-top {
  0%, 80%, 100% { transform: translate(0); }
  82% { transform: translate(-6px, 2px); }
  84% { transform: translate(6px, -2px); }
  86% { transform: translate(-3px, 1px); }
}

@keyframes glitch-bot {
  0%, 80%, 100% { transform: translate(0); }
  82% { transform: translate(6px, -2px); }
  84% { transform: translate(-6px, 2px); }
  86% { transform: translate(3px, -1px); }
}`,author:{name:"Glitch Wizard"},likeCount:240,viewCount:1800},{id:"spinning-rings",title:"Spinning Rings",description:"Concentric neon rings spinning in alternating directions.",htmlCode:'<div class="rings"><div class="ring"></div><div class="ring"></div><div class="ring"></div><div class="ring"></div></div>',cssCode:`body {
  background: #070714;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.rings {
  position: relative;
  width: 160px;
  height: 160px;
}

.ring {
  position: absolute;
  border-radius: 50%;
  border: 3px solid transparent;
  animation: spin linear infinite;
}

.ring:nth-child(1) {
  inset: 0;
  border-top-color: #f97316;
  animation-duration: 1.5s;
}

.ring:nth-child(2) {
  inset: 18px;
  border-right-color: #a78bfa;
  animation-duration: 2s;
  animation-direction: reverse;
}

.ring:nth-child(3) {
  inset: 36px;
  border-bottom-color: #34d399;
  animation-duration: 2.8s;
}

.ring:nth-child(4) {
  inset: 54px;
  border-left-color: #f472b6;
  animation-duration: 3.5s;
  animation-direction: reverse;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`,author:{name:"Ring Master"},likeCount:160,viewCount:1100},{id:"galaxy-nebula",title:"Galaxy Nebula",description:"A mesmerizing cosmic galaxy with swirling nebula clouds and twinkling stars.",htmlCode:'<div class="galaxy"><div class="stars s1"></div><div class="stars s2"></div><div class="stars s3"></div><div class="core"></div><div class="arm a1"></div><div class="arm a2"></div><div class="arm a3"></div></div>',cssCode:`body {
  background: radial-gradient(ellipse at center, #0a0015 0%, #000005 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.galaxy {
  position: relative;
  width: 300px;
  height: 500px;
  animation: galaxy-rotate 30s linear infinite;
}

.stars {
  position: absolute;
  border-radius: 50%;
  background: #fff;
}

.s1 { width: 2px; height: 2px; top: 20%; left: 30%; animation: twinkle 2s ease-in-out infinite; box-shadow: 50px 100px 0 #fff, 80px 200px 0 #fff, 120px 50px 0 #fff, 200px 150px 0 #fff, 180px 300px 0 #fff, 20px 250px 0 #fff; }
.s2 { width: 3px; height: 3px; top: 40%; left: 60%; animation: twinkle 3s ease-in-out infinite 0.5s; box-shadow: 30px 80px 0 #fff, 100px 180px 0 #fff, 60px 280px 0 #fff, 150px 50px 0 #fff, 90px 350px 0 #fff; }
.s3 { width: 1px; height: 1px; top: 60%; left: 45%; animation: twinkle 2.5s ease-in-out infinite 1s; box-shadow: 40px 60px 0 #fff, 70px 160px 0 #fff, 110px 260px 0 #fff, 160px 360px 0 #fff, 25px 320px 0 #fff; }

.core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, #fffef0 0%, #ffd700 30%, #ff6b35 60%, #c41e3a 100%);
  border-radius: 50%;
  box-shadow: 0 0 60px #ffd700, 0 0 120px #ff6b35, 0 0 200px #c41e3a;
  animation: core-pulse 4s ease-in-out infinite;
}

.arm {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140px;
  height: 280px;
  border-radius: 50%;
  transform-origin: center top;
}

.a1 {
  background: linear-gradient(180deg, rgba(138, 43, 226, 0.8) 0%, rgba(75, 0, 130, 0.4) 50%, transparent 100%);
  transform: translate(-50%, 0) rotate(-30deg) scaleY(0.6);
  animation: arm-spiral 20s ease-in-out infinite;
}

.a2 {
  background: linear-gradient(180deg, rgba(0, 191, 255, 0.7) 0%, rgba(0, 0, 139, 0.3) 50%, transparent 100%);
  transform: translate(-50%, 0) rotate(30deg) scaleY(0.7);
  animation: arm-spiral 25s ease-in-out infinite reverse;
}

.a3 {
  background: linear-gradient(180deg, rgba(255, 105, 180, 0.6) 0%, rgba(139, 0, 139, 0.3) 50%, transparent 100%);
  transform: translate(-50%, 0) rotate(150deg) scaleY(0.5);
  animation: arm-spiral 22s ease-in-out infinite;
}

@keyframes galaxy-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes core-pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 60px #ffd700, 0 0 120px #ff6b35, 0 0 200px #c41e3a; }
  50% { transform: translate(-50%, -50%) scale(1.1); box-shadow: 0 0 80px #ffd700, 0 0 160px #ff6b35, 0 0 260px #c41e3a; }
}

@keyframes arm-spiral {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

@keyframes twinkle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}`,author:{name:"Cosmic Coder"},likeCount:450,viewCount:3200}];function e(t){return i.find(a=>a.id===t)}export{e as g,i as s};
