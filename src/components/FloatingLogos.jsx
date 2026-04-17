import { useEffect, useRef } from "react";
import { IoMailOutline } from "react-icons/io5";

function FloatingLogos() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const images = [
      "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg",
      "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg",
      "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg",
      "https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg",
    ];

    // preload
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    let index = 0;
    let last = 0;

    const handleMove = (e) => {
      const rect = container.getBoundingClientRect();

      const now = Date.now();
      if (now - last < 130) return; // 🔥 less amount
      last = now;

      const x = e.clientX - rect.left + (Math.random() * 20 - 10);
      const y = e.clientY - rect.top + (Math.random() * 20 - 10);

      const img = document.createElement("img");
      img.src = images[index % images.length];
      index++;

      img.style.position = "absolute";
      img.style.width = `${120 + Math.random() * 40}px`; // 🔥 bigger
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.style.pointerEvents = "none";
      img.style.transform = "translate(-50%, -50%)";
      img.style.transition = "all 1s cubic-bezier(0.22,1,0.36,1)";
      img.style.zIndex = "10";

      img.style.rotate = `${Math.random() * 40 - 20}deg`;
      img.style.scale = `${0.9 + Math.random() * 0.3}`;

      container.appendChild(img);

      requestAnimationFrame(() => {
        img.style.transform = "translate(-50%, -220%) scale(1.2)";
        img.style.opacity = "0";
        img.style.filter = "blur(3px)";
      });

      setTimeout(() => img.remove(), 1000);
    };

    container.addEventListener("pointermove", handleMove);

    return () => {
      container.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden py-0"
    ><div className="max-w-[1200px] mx-auto px-6 pt-28 pb-20 text-center relative z-20">
    <h2 className="text-[52px] md:text-[90px] font-bold leading-[1.05] tracking-tight">
      Let’s Get Hyped!
    </h2>

    <div className="mt-10 flex justify-center gap-4 flex-wrap">

  <a
  href="mailto:info@gethyped.nl"
  className="group relative flex items-center px-5 h-[44px] 
    rounded-[10px] bg-transparent border border-black overflow-hidden
    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    
    hover:skew-x-6 hover:-rotate-2 hover:scale-105"
>
  <div className="flex items-center gap-2 transition-all duration-500 group-hover:-skew-x-6">

    {/* TEXT */}
    <span>
      Mail ons direct
    </span>

    {/* ICON */}
    <span className="w-7 h-7 flex items-center justify-center rounded-[3px] text-[25px] bg-black text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-rotate-12">
      <IoMailOutline />
    </span>

  </div>
</a>

      <div className="hidden md:block">
  <a href="#" className="group inline-block">
    
    <div className="relative flex items-center px-5 h-[44px] 
    rounded-[10px] bg-[#fa5424] overflow-hidden
    transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
    
    group-hover:skew-x-6 group-hover:-rotate-2 group-hover:scale-105">

      {/* INNER CONTENT */}
      <div className="flex items-center gap-2 
      transition-all duration-500 
      group-hover:-skew-x-6">

        {/* TEXT */}
        <span className="text-black font-semibold">
          Get Results
        </span>

        {/* ICON */}
        <span className="flex items-center justify-center bg-white rounded-[6px] px-2 py-[3px] text-xs">
          🔥
        </span>

      </div>

    </div>
  </a>
</div>

    </div>
  </div></div>
  );
}

export default FloatingLogos;