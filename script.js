// GSAP animation for hero section
gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0 });
gsap.from(".hero p", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from(".cta-button", { duration: 1, scale: 0, opacity: 0, delay: 1 });

// Animate hero text
gsap.from(".hero-text", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
});

