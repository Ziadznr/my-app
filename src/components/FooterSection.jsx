import React from "react";

/**
 * FooterSection Component
 * A faithful React reproduction of the Webflow footer structure.
 */
export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Expertises", href: "/expertises" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#eae4d8]">
      {/* ================= TOP CTA SECTION ================= */}
      <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-20 text-center relative z-20">
        <h2 className="text-[56px] md:text-[92px] font-bold leading-[1.02] tracking-tight">
          Let’s Get Hyped!
        </h2>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {/* Email Button */}
          <a
            href="mailto:info@gethyped.nl"
            className="flex items-center gap-2 border border-black px-6 py-3 rounded-xl bg-[#eae4d8] hover:bg-black hover:text-white transition-all duration-300 group"
          >
            Mail ons direct
            <span className="bg-black text-white group-hover:bg-white group-hover:text-black rounded-md px-2 py-1 text-xs transition-colors">
              →
            </span>
          </a>

          {/* Results Button */}
          <button className="flex items-center gap-2 bg-[#ff5a2f] text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300">
            Get Results
            <span className="bg-white text-[#ff5a2f] rounded-md px-2 py-1 text-xs">
              🔥
            </span>
          </button>
        </div>
      </div>

      {/* ================= LOGO & BACKGROUND WRAPPER ================= */}
      <div className="footer-bg relative">
        <div className="padding-global">
          <div className="footer-bg-wrap relative flex justify-center">
            <BackgroundSVG />
            <div className="footer-logo absolute bottom-0 w-full max-w-[80%] flex justify-center">
              <LogoSVG />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN INFO SECTION ================= */}
      <div className="cs-footer-info-wrapper bg-white py-16">
        <div className="padding-global">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              
              {/* Sitemap Links */}
              <div className="md:col-span-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.label} 
                    href={link.href} 
                    className="text-2xl font-bold hover:text-[#ff5a2f] transition-colors w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Socials & Contact Wrapper */}
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Social Column */}
                <div className="footer-col">
                  <p className="font-bold uppercase tracking-wider mb-4 opacity-50 text-sm">Follow us</p>
                  <div className="flex gap-4">
                    <SocialIcon href="https://linkedin.com" iconType="linkedin" />
                    <SocialIcon href="https://tiktok.com" iconType="tiktok" />
                    <SocialIcon href="https://instagram.com" iconType="instagram" />
                  </div>
                </div>

                {/* Contact Column */}
                <div className="footer-col flex flex-col gap-2">
                  <p className="font-bold uppercase tracking-wider mb-2 opacity-50 text-sm">Contact</p>
                  <a href="mailto:info@gethyped.nl" className="hover:underline">info@gethyped.nl</a>
                  <a href="tel:+31615337496" className="hover:underline">+31 6 1533 7496</a>
                </div>

                {/* Address Column */}
                <div className="footer-col flex flex-col gap-2">
                  <p className="font-bold uppercase tracking-wider mb-2 opacity-50 text-sm">Adres</p>
                  <address className="not-italic opacity-80">
                    Beltrumsestraat 6, <br />
                    7141 AL Groenlo
                  </address>
                </div>
              </div>
            </div>

            {/* Bottom Credits */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-4 text-sm opacity-60">
              <div>© {currentYear} Get Hyped</div>
              <a 
                href="https://dylanbrouwer.design/" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-black transition-colors"
              >
                Design by Dylan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- SUB-COMPONENTS ---

const SocialIcon = ({ href, iconType }) => {
  // Logic to handle different SVG paths based on the type
  const getPath = () => {
    switch (iconType) {
      case 'linkedin':
        return "M27.5 0h-24C1.57 0 0 1.57 0 3.5v23c0 1.93 1.57 3.5 3.5 3.5h24c1.93 0 3.5-1.57 3.5-3.5v-23c0-1.93-1.57-3.5-3.5-3.5zM9.5 24.5h-4v-13h4v13zM7.5 9.8c-1.28 0-2.31-1.03-2.31-2.3 0-1.27 1.03-2.3 2.31-2.3s2.31 1.03 2.31 2.3c0 1.27-1.03 2.3-2.31 2.3zm17 14.7h-4v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.69-2.49 3.44v6.61h-4v-13h3.84v1.78h.05c.53-.94 1.71-1.94 3.54-1.94 3.79 0 4.49 2.5 4.49 5.74v7.42z";
      case 'instagram':
        return "M15.5 2.7c4 0 4.48.02 6.06.09 1.46.07 2.26.31 2.78.52.7.27 1.19.59 1.72 1.11.52.53.84 1.02 1.11 1.72.2.52.45 1.32.52 2.78.07 1.58.09 2.06.09 6.06s-.02 4.48-.09 6.06c-.07 1.46-.31 2.26-.52 2.78-.27.7-.59 1.19-1.11 1.72-.53.52-1.02.84-1.72 1.11-.52.2-1.32.45-2.78.52-1.58.07-2.06.09-6.06.09s-4.48-.02-6.06-.09c-1.46-.07-2.26-.31-2.78-.52-.7-.27-1.19-.59-1.72-1.11-.52-.53-.84-1.02-1.11-1.72-.2-.52-.45-1.32-.52-2.78-.07-1.58-.09-2.06-.09-6.06s.02-4.48.09-6.06c.07-1.46.31-2.26.52-2.78.27-.7.59-1.19 1.11-1.72.53-.52 1.02-.84 1.72-1.11.52-.2 1.32-.45 2.78-.52 1.58-.07 2.06-.09 6.06-.09zM15.5 0C11.43 0 10.92.02 9.32.09c-1.6.07-2.69.33-3.64.7-1 .39-1.84.9-2.68 1.74-.84.84-1.35 1.68-1.74 2.68-.37.95-.63 2.04-.7 3.64C.52 10.47.5 10.98.5 15.05s.02 4.58.09 6.18c.07 1.6.33 2.69.7 3.64.39 1 1.01 1.84 1.85 2.68.84.84 1.68 1.35 2.68 1.74.95.37 2.04.63 3.64.7 1.6.07 2.11.09 6.18.09s4.58-.02 6.18-.09c1.6-.07 2.69-.33 3.64-.7 1-.39 1.84-.9 2.68-1.74.84-.84 1.35-1.68 1.74-2.68.37-.95.63-2.04.7-3.64.07-1.6.09-2.11.09-6.18s-.02-4.58-.09-6.18c-.07-1.6-.33-2.69-.7-3.64-.39-1-.9-1.84-1.74-2.68-.84-.84-1.68-1.35-2.68-1.74-.95-.37-2.04-.63-3.64-.7C20.18.02 19.67 0 15.6 0zM15.6 7.33a7.72 7.72 0 100 15.44 7.72 7.72 0 000-15.44zm0 12.74a5.02 5.02 0 110-10.04 5.02 5.02 0 010 10.04zm8.03-14.58a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6z";
      default:
        return ""; // Add TikTok or others as needed
    }
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer" 
      className="p-2 border border-black/10 rounded-lg hover:bg-black hover:text-white transition-all"
    >
      <svg width="20" height="20" viewBox="0 0 31 30" fill="currentColor">
        <path d={getPath()} />
      </svg>
    </a>
  );
};

const BackgroundSVG = () => (
  <svg width="100%" viewBox="0 0 1860 386" fill="none" className="footer-bg-svg">
    <path 
      d="M1859.06 34.8264V349.463C1859.06 365.199 1846.3 377.962 1830.56 377.962H28.5C12.7635 377.962 0 365.199 0 349.463V34.8264C0 19.0899 12.7635 6.32642 28.5 6.32642H1830.56C1846.3 6.32642 1859.06 19.0899 1859.06 34.8264Z" 
      fill="#EAE4D8" 
    />
  </svg>
);

const LogoSVG = () => (
  <svg width="100%" viewBox="0 0 374 142" fill="none" className="footer-logo_svg">
    {/* Background/Shadow Path */}
    <path d="M346.695 141.574H98.1443V39.7663H346.695V141.574Z" fill="black" />
    {/* Note: In your actual app, paste all the <path> elements for the letters here */}
  </svg>
);