import { useEffect, useRef } from "react";
import gsap from "gsap";

const logos = [
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/69241146b4df63c4ca966552_Bullit%20Digital.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c194e6d1b186563459b107_morssinkhof.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d88f755388cc2c74ecff_salontopper.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d880bed5996600cbc586_seesing-flex.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d86cd6ba384af3c14e58_graafschap-college.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d85341bf0d7476e56a8c_fides.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d838fc5735f090bd9843_SRHK.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/6849d81e72e08110e3fd1a17_knltb.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684b062ebc242028ca4b3ea1_tho.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/684c05642bf8f5cea7384403_de-talententuin.svg",
  "https://cdn.prod.website-files.com/6848603da8e6ac95794b74a9/68c1952f22281ee50d3620b5_zclv.svg",
];

export default function ClientsMarqueeSection() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;

    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: -totalWidth,
      duration: 30, // smoother slower
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section className=" overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6">

        {/* TITLE */}
        <div className="mb-16 max-w-[640px]">
  <h1 className="text-[50px] md:text-[50px] font-semibold leading-[1.1]">
    These brands <br /> got hyped.
  </h1>
</div>

      </div>

      {/* MARQUEE */}
      <div className="overflow-hidden">

        <div
          ref={marqueeRef}
          className="flex gap-8 w-max select-none"
        >

          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                w-[260px] h-[250px]
                
                rounded-[18px]
                border border-[#cfc7bd]
                shrink-0
              "
            >
              <img
                src={logo}
                alt="client"
                className="
                  max-h-[300px]
                  max-w-[300px]
                  object-contain
                "
                draggable={false}
              />
            </div>
          ))}

        </div>

      </div>

      {/* DIVIDER */}
      <div className="max-w-[1200px] mx-auto px-6 mt-20">
        <div className="w-full h-[1px] bg-[#dcd6cd]" />
      </div>

    </section>
  );
}