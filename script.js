let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

cancelBtn.onclick = hideNavMenu;

let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// --- Stars Background Animation ---
const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 150;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5;
    this.speedY = Math.random() * 0.3 + 0.1;
    this.speedX = (Math.random() - 0.5) * 0.1;
    // Dark color since we are using light gradient from the component
    this.color = "rgba(0, 0, 0, 0.6)"; 
  }
  update() {
    this.y -= this.speedY; // Stars moving up conceptually
    this.x += this.speedX;
    if (this.y < 0) {
      this.y = canvas.height;
      this.x = Math.random() * canvas.width;
    }
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

for (let i = 0; i < numStars; i++) {
  stars.push(new Star());
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    star.update();
    star.draw();
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// Function to download resume files
function downloadResume() {
  // File 1: AI/ML Resume
  const link1 = document.createElement('a');
  link1.href = 'resume AIML.pdf';
  link1.download = 'Prasanth_Resume_AIML.pdf';
  document.body.appendChild(link1);
  link1.click();
  document.body.removeChild(link1);

  // Small delay before second download to ensure both trigger
  setTimeout(() => {
    // File 2: Data Analytics Resume
    const link2 = document.createElement('a');
    link2.href = 'resume DA.pdf';
    link2.download = 'Prasanth_Resume_DA.pdf';
    document.body.appendChild(link2);
    link2.click();
    document.body.removeChild(link2);
  }, 100); // 100ms delay
}