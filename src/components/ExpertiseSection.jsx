import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Social strategy",
    number: "01",
    subtitle: "Slimme strategie. Sterke start.",
    desc: "We duiken diep in jouw merk, doelgroep en doelen.",
    video: "https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4",
    bg: "bg-white",
  },
  {
    title: "Content creation",
    number: "02",
    subtitle: "Content die opvalt en raakt.",
    desc: "We maken content die opvalt en blijft hangen.",
    video: "https://gethyped.b-cdn.net/Expertises/Loop%20BTS%20comp.mp4",
    bg: "bg-[#fcb8fa]", // brighter pink
  },
  {
    title: "Activation",
    number: "03",
    subtitle: "Zichtbaar waar het telt.",
    desc: "We verspreiden content waar jouw doelgroep is.",
    video: "https://gethyped.b-cdn.net/Over%20de%20Top/overdetop-loop.mp4",
    bg: "bg-[#4ac287]", // brighter green
  },
  {
    title: "Data",
    number: "04",
    subtitle: "Inzichten die impact maken.",
    desc: "We duiken in cijfers om te optimaliseren.",
    video: "https://gethyped.b-cdn.net/Expertises/Data%20comp.mp4",
    bg: "bg-[#4287f5]", // brighter blue
  },
];

export default function ExpertiseSection() {
  const containerRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const cards = gsap.utils.toArray(".card");

    // ✅ INITIAL STATE
    gsap.set(cards, {
      yPercent: 100,
      opacity: 0,
      scale: 0.98,
    });

    gsap.set(cards[0], {
      yPercent: 0,
      opacity: 1,
      scale: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 120}%`, // shorter + tighter
        scrub: 1.5, // smoother scroll sync
        pin: true,
        pinSpacing: true,
      },
    });

    cards.forEach((card, i) => {
      if (i === 0) return;

      // 👉 Incoming card
      tl.fromTo(
        card,
        {
          yPercent: 100,
          scale: 0.98,
          opacity: 0,
        },
        {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power4.out", // smoother entrance
        }
      );

      // 👉 Outgoing card (previous)
      tl.to(
        cards[i - 1],
        {
          yPercent: -10,     // less aggressive
          scale: 0.94,       // softer shrink
          opacity: 0,
          filter: "blur(6px)", // ✨ premium depth
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
    });
  }, containerRef);

  return () => ctx.revert();
}, []);

  return (
    <section ref={containerRef} className="overflow-hidden min-h-screen">
      <div className="relative w-full min-h-screen">
        {data.map((item, i) => (
          <div
  key={i}
  className="card absolute inset-0 flex items-center justify-center"
  style={{ zIndex: i }}
>
  <div className={`w-full max-w-[1200px] mx-auto rounded-[32px] 
px-[64px] py-[56px] 
flex flex-col md:flex-row items-start justify-between gap-[80px] 
${item.bg} shadow-[0_20px_80px_rgba(0,0,0,0.08)]`}>

    {/* LEFT */}
    <div className="max-w-[520px]">

  {/* Badge */}
  <div
  className={`inline-block text-black px-4 py-1 rounded-[8px] text-[15px] mb-[28px]
  ${i === 0 ? "bg-[#e9e4dc]" : "bg-white border border-black/10"}`}
>
    Expertise
  </div>

{/* Title */}
  <h2 className="text-[64px] md:text-[80px] font-bold leading-[1.02] tracking-[-2px]">
    {item.title}
  </h2>

<div className="pt-50">
  

  {/* Subtitle */}
  <h3 className="mt-[32px] text-[20px] font-semibold">
    {item.subtitle}
  </h3>

  {/* Description */}
  <p className="mt-[12px] text-gray-700 text-[16px] leading-[1.6] max-w-[420px]">
    {item.desc}
  </p>
</div>
  
  {/* Button */}
  <button className="group mt-[20px] inline-block">
  <div
    className={`relative flex items-center gap-2 px-4 py-2 rounded-[8px] overflow-hidden
    text-[13px]
    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    
    group-hover:skew-x-4 group-hover:-rotate-1 group-hover:scale-105
    
    ${i === 0 
      ? "bg-[#ff4d1c] text-white" 
      : "bg-white text-black border border-black"
    }`}
  >

    {/* INNER */}
    <div className="flex items-center gap-2 transition-all duration-500 group-hover:-skew-x-4">

      {/* TEXT */}
      <span>
        Meer over {item.title.toLowerCase()}
      </span>

      {/* ICON */}
      <span
        className={`w-5 h-5 flex items-center justify-center rounded-[6px] text-[10px]
        transition-all duration-300
        ${i === 0 
          ? "bg-white text-black" 
          : "bg-black text-white"
        }`}
      >
        →
      </span>

    </div>

  </div>
</button>

</div>

  <div className="flex flex-col items-end gap-6">

  {/* NUMBER (top) */}
  <div className="text-[100px] font-bold text-black/15 leading-none select-none">
    {item.number}
  </div>

  {/* VIDEO FRAME (below) */}
  <div
    className={`w-[360px] h-[400px] rounded-[24px] overflow-hidden rotate-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-[6px] ${
      i === 0 ? "border-orange-500" : "border-white"
    }`}
  >
    <video
      src={item.video}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  </div>

</div>
  </div>
</div>
        ))}
      </div>
    </section>
  );
}