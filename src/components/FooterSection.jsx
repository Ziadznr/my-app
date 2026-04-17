import React from "react";
import Logo from "./Logo";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden m-0 p-0">

  {/* ================= STICKER ================= */}
<div className="relative">

  {/* ================= MASKED FOOTER ================= */}
 <div
  className="relative z-20"
  style={{
    WebkitMaskImage: "url('/mask.svg')",
    WebkitMaskSize: "calc(100% - 20px) 315%", // 👈 reduce width
    WebkitMaskPosition: "center top",         // 👈 center horizontally
    WebkitMaskRepeat: "no-repeat",

    maskImage: "url('/mask.svg')",
    maskSize: "calc(100% - 20px) 315%",
    maskPosition: "center top",
    maskRepeat: "no-repeat",

    backgroundColor: "#EAE4D8",
  }}
>
   

    {/* ================= LEFT LOGO ================= */}
    <div className="relative">

      <div className="absolute left-20 bottom-10 translate-y-1/4 md:translate-y-1/3 z-30 scale-125 md:scale-150">
        <Logo />
      </div>

      {/* CONTENT */}
      <div className="w-full flex justify-end">
        <div className="w-full max-w-[700px] px-10">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-24">

            {/* LEFT COLUMN */}
            <div className="md:col-span-4 flex flex-col gap-10 pt-60">

              {/* NAV */}
              <div className="hidden md:flex">
                <div className="bg-white px-2 py-1 rounded-[6px] flex gap-1 text-xs font-medium">
                  {["Expertises", "Work", "About", "Contact"].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="group relative h-[28px] px-3 overflow-hidden rounded-[6px] flex items-center justify-center bg-white"
                    >
                      <span className="inline-flex h-[28px] items-center justify-center text-neutral-900 transition duration-500 group-hover:-translate-y-[140%]">
                        {item}
                      </span>

                      <span className="absolute inset-0 flex items-center justify-center text-white translate-y-[100%] transition duration-500 group-hover:translate-y-0">
                        <span className="absolute inset-0 translate-y-full -skew-y-12 scale-y-0 bg-black origin-bottom-right transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                        <span className="relative z-10">{item}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* SOCIAL */}
              <div className="flex items-center justify-between">
                <p className="uppercase text-xs font-bold">
                  Follow us
                </p>

                <div className="flex gap-3">
                  {[FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
                    <div
                      key={i}
                     className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-black/10 transition-transform duration-300 hover:scale-120 cursor-pointer"
                    >
                      <Icon size={14} />
                    </div>
                  ))}
                </div>
              </div>

              {/* BOTTOM */}
              <div className="pb-5 pl-0 text-[10px] opacity-60 flex justify-between">
                <div>© {year} Get Hyped</div>
                <div>© Design by Ziad</div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="md:col-span-8 flex flex-col gap-10 pt-50">

              {/* CONTACT */}
              <div>
                <p className="uppercase text-sm opacity-60 mb-4 font-bold">
                  Contact
                </p>
                <a href="mailto:info@gethyped.nl" className="block">
                  info@gethyped.nl
                </a>
                <a href="tel:+31615337496" className="block">
                  +31 6 1533 7496
                </a>
              </div>

              {/* ADDRESS */}
              <div>
                <p className="uppercase text-sm opacity-60 mb-4 font-bold">
                  Adres
                </p>
                <p>
                  Beltrumsestraat 6 <br />
                  7141 AL Groenlo
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  </div>

  {/* 🔹 OUTSIDE STICKER (visible half) */}
  <div className="absolute top-25 right-25 translate-x-[40%] -translate-y-[40%] rotate-[18deg] z-30">
  <div className="w-[90px] h-[90px] relative">
    
    {/* SVG circular text */}
    <svg viewBox="0 0 100 100" className="absolute inset-0">
      <defs>
        <path
          id="circlePath"
          d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
        />
      </defs>

      <text fontSize="10" fontWeight="600" letterSpacing="2">
        <textPath href="#circlePath" startOffset="0%">
          GET HYPED • GET RESULTS • GET MOTIVATED •
        </textPath>
      </text>
    </svg>

    {/* Center circle */}
    <div className="w-full h-full rounded-full bg-pink-300 flex items-center justify-center font-bold shadow-md">
      GH
    </div>

  </div>
</div>

</div>
</footer>
  );
}

/* ================= ICON ================= */

const Icon = ({ children }) => (
  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border hover:bg-black hover:text-white transition">
    {children}
  </div>
);