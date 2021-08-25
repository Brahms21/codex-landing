const timeline = gsap.timeline({ defaults: { duration: 1.5 } });

timeline
  .from(".header", { x: "-100%", ease: "power1" })
  .from(".vision", { x: "-120%", ease: "slow" })
  .from(".vision-text", { duration: 4, opacity: 0 })
  .from(".who-we-need", { x: "120%", ease: "slow" }, 6)
  .from(".who-text", { duration: 4, opacity: 0 }, 8);
