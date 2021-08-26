gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline({ defaults: { duration: 1.5 } });

timeline
  .from(".header", { x: "-100%", ease: "power1" })
  .from(".vision", { x: "-120%", ease: "slow" })
  .from(".vision-text", { duration: 4, opacity: 0 });

const tl = gsap.timeline({
  scrollTrigger: { trigger: ".who-we-need", start: "top center" },
});
tl.from(".who-we-need", { duration: 1.5, x: "120%", ease: "slow" })
  .from(".who-text", { duration: 4, opacity: 0 })
  .from(".footer", { duration: 1.5, x: "120%", ease: "power1" });

