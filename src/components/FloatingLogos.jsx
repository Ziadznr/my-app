import { useEffect, useRef } from "react";

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
      className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
    />
  );
}

export default FloatingLogos;