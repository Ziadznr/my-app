import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // small threshold to prevent jitter
    if (Math.abs(currentScrollY - lastScrollY) < 10) return;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setShow(false); // scrolling down
    } else {
      setShow(true); // scrolling up
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  return (
    <nav
  className={`fixed top-0 left-0 w-full pt-7 py-2 px-6 z-50 transition-transform duration-300 ${
    show ? "translate-y-0" : "-translate-y-full"
  }`}
>
      <div className="max-w-[1200px] h-[40px] mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="-rotate-2">
          <Logo />
        </div>

        {/* Center Menu (Desktop) */}
   <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
  <div className="bg-white px-2 py-1 rounded-[6px] flex gap-1 text-xs font-medium">

    {["Expertises", "Work", "About", "Contact"].map((item, i) => (
      <a
        key={i}
        href="#"
        className="group relative h-[28px] px-3 overflow-hidden rounded-[6px] flex items-center justify-center bg-white"
      >

        {/* TOP TEXT */}
        <span className="inline-flex h-[28px] items-center justify-center text-neutral-900 transition duration-500 group-hover:-translate-y-[140%]">
          {item}
        </span>

        {/* HOVER LAYER */}
        <span className="absolute inset-0 flex items-center justify-center text-white translate-y-[100%] transition duration-500 group-hover:translate-y-0">

          {/* background fill */}
          <span className="absolute inset-0 translate-y-full -skew-y-12 scale-y-0 bg-black origin-bottom-right transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>

          {/* text */}
          <span className="relative z-10">
            {item}
          </span>

        </span>

      </a>
    ))}

  </div>
</div>

        {/* Right CTA */}
    <div className="hidden md:block">
  <a href="#" className="group inline-block">
    
    <div className="relative flex items-center px-5 h-[40px] 
    rounded-[10px] bg-[#fcb8fa] overflow-hidden
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

        {/* Mobile Button */}
        <button
  className="md:hidden z-50 w-10 h-10 bg-pink-300 flex items-center justify-center relative rounded"
  onClick={() => setOpen(!open)}
>
  {/* top line */}
  <span className="absolute w-6 h-[2px] bg-black transform -translate-y-[4px]"></span>

  {/* bottom line */}
  <span className="absolute w-6 h-[2px] bg-black transform translate-y-[4px]"></span>
</button>
      </div>

      {/* Mobile Fullscreen Menu (IMPORTANT FIX) */}
     <div
  className={`fixed top-0 left-0 w-full h-screen bg-[#fcb8fa] 
  flex flex-col justify-between
  transition-all duration-300 ${
    open ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
>

  {/* TOP SPACING (optional for breathing room) */}
 <div className="h-[80px]" />

{/* MENU LINKS (center area) */}
<div className="flex flex-col items-center gap-4">

  {["Expertises", "Work", "About", "Contact"].map((item, i) => (
    <a
      key={i}
      href="#"
      onClick={() => setOpen(false)}
      className="group relative overflow-hidden px-6 h-[48px] 
      rounded-[10px] flex items-center justify-center text-lg font-medium bg-white"
    >

      {/* TOP TEXT */}
      <span className="inline-flex h-[48px] items-center justify-center text-neutral-900 transition duration-500 group-hover:-translate-y-[150%]">
        {item}
      </span>

      {/* HOVER LAYER */}
      <span className="absolute inset-0 flex items-center justify-center text-white translate-y-[100%] transition duration-500 group-hover:translate-y-0">

        {/* background fill from bottom-right */}
        <span className="absolute inset-0 translate-y-full -skew-y-12 scale-y-0 bg-black origin-bottom-right transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>

        {/* text */}
        <span className="relative z-10">
          {item}
        </span>

      </span>

    </a>
  ))}

</div>

  {/* CTA BUTTON (BOTTOM) */}
  <div className="flex justify-center pb-8">
    <a
      href="#"
      className="group inline-block"
      onClick={() => setOpen(false)}
    >
      <div className="relative flex items-center px-6 h-[50px] 
      rounded-[10px] bg-black overflow-hidden
      transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
      
      group-hover:skew-x-6 group-hover:-rotate-2 group-hover:scale-105">

        <div className="flex items-center gap-2 
        transition-all duration-500 
        group-hover:-skew-x-6">

          <span className="text-white font-semibold text-lg">
            Get Results
          </span>

          <span className="flex items-center justify-center bg-white rounded-[6px] px-2 py-[3px] text-xs">
            🔥
          </span>

        </div>

      </div>
    </a>
  </div>

</div>
    </nav>
  );
}