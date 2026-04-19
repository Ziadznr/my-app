import Logo from "./LogoFooter";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function MobileFooter() {
  return (
    <footer className="px-2 py-8">

  <div
    className="w-full px-6 pt-14 pb-10 text-center bg-[#f3ede4] 
               max-w-[500px] mx-auto"   // 🔥 controls width
    style={{
      WebkitMaskImage: "url('/mask.svg')",
      WebkitMaskSize: "100% 100%",
      WebkitMaskPosition: "top",
      WebkitMaskRepeat: "no-repeat",

      maskImage: "url('/mask.svg')",
      maskSize: "100% 100%",
      maskPosition: "top",
      maskRepeat: "no-repeat",
    }}
  >

    {/* LOGO */}
    <div className="mb-5 flex justify-center pt-10">
  <div className="w-[100vw] max-w-[1000px] -rotate-2">
    <Logo />
  </div>
</div>

    {/* CTA */}
    <div className="mb-5 flex justify-center">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold shadow-md">
        Get Hyped! Neem contact op
        <span className="bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center text-xs">
          🔥
        </span>
      </button>
    </div>

    {/* NAV */}
    <div className="flex flex-wrap justify-center gap-1 mb-5 text-xs font-medium">
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

    {/* SOCIAL */}
    <div className="flex gap-3 justify-center mb-5">
      {[FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube].map((Icon, i) => (
        <div
          key={i}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-black/10 transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
          <Icon size={14} />
        </div>
      ))}
    </div>

    {/* CONTACT */}
    <div className="text-sm text-black space-y-1.5 mb-5">
      <p>info@gethyped.nl</p>
      <p>+31 6 1533 7496</p>
      <p>
        Beltrumse straat 6,<br />
        7141 AL Groenlo
      </p>
    </div>

    {/* FOOTER TEXT */}
    <div className="text-xs text-gray-500 space-y-1">
      <p>Privacyvoorwaarden</p>
      <p>© 2025 Get Hyped</p>
      <p>© Design by Ziad</p>
    </div>

  </div>
</footer>
  );
}