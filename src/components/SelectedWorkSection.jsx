import { useRef } from "react";

const works = [
  {
    title: "Van nul naar vol, binnen 3 weken",
    brand: "Bullit",
    video: "https://gethyped.b-cdn.net/Bullit/Bullit%20%7C%20Loop.mp4",
    color: "bg-red-500",
    border: "border-red-500",
  },
  {
    title: "Zacht in smaak, sterk in beeld",
    brand: "Roasta",
    video: "https://gethyped.b-cdn.net/Roasta/roasta-loop.mp4",
    color: "bg-blue-500",
    border: "border-blue-500",
  },
  {
    title: "Content die écht smaakt (en raakt)",
    brand: "Loco",
    video: "https://gethyped.b-cdn.net/Loco/loco-bites-loop.mp4",
    color: "bg-green-500",
    border: "border-green-500",
  },
];

export default function SelectedWorkSection() {
  return (
   <section className="pt-0 pb-36 md:py-24 px-5 md:px-16 lg:px-32">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="max-w-[600px] mb-12 md:mb-16">
          <h2 className="text-[50px] md:text-[60px] lg:text-[70px] font-bold leading-tight text-[#161616]">
    Content <br />
    dat scoort.
  </h2>

          <p className="mt-4 text-[18px] md:text-[20px] lg:text-[21px] text-[#161616] leading-[1.6] font-medium">
  Wij vertellen jouw verhaal. Op <br />
  een manier die écht past bij jouw <br />
  doelgroep. Met creatieve content <br />
  die werkt en het verschil maakt.
</p>

          {/* BUTTON */}
          <button className="group mt-4 inline-block">
  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-[8px] 
  text-[13px] bg-white text-black border border-black overflow-hidden
  transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
  group-hover:skew-x-4 group-hover:-rotate-1 group-hover:scale-105 
  group-hover:bg-black group-hover:text-white">

    <div className="flex items-center gap-2 transition-all duration-500 group-hover:-skew-x-4">

      {/* TEXT */}
      <span className="font-medium">
        Bekijk al ons werk
      </span>

      {/* ICON */}
      <span className="w-6 h-6 flex items-center justify-center 
      rounded-[6px] text-[14px] bg-black text-white 
      transition-all duration-300 group-hover:bg-white group-hover:text-black">
        →
      </span>

    </div>

  </div>
</button>
        </div>

        {/* CARDS */}
     <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-10">

  {works.map((item, i) => {
  let positionClass = "";
  let skewClass = "";

  // Desktop stagger (only lg)
  if (i === 0) {
    positionClass = "lg:translate-y-12 lg:-rotate-2";
  } else if (i === 1) {
    positionClass = "lg:-translate-y-4 lg:rotate-1";
  } else if (i === 2) {
    positionClass = "lg:-translate-y-12 lg:-rotate-1";
  }

  // Mobile alternating skew
  if (i % 2 === 0) {
  skewClass = "skew-x-[2deg] skew-y-[1deg] ml-3";
} else {
  skewClass = "skew-x-[-2deg] skew-y-[-1deg] mr-3";
}

  return (
    <div
  key={i}
  className={`
    w-[80%] h-[300px] 
    sm:w-[60%] sm:h-[360px]
    md:w-auto md:h-auto md:flex-1
    min-w-0

    mb-14 sm:mb-16   /* more vertical spacing */

    transform ${skewClass}
    md:skew-x-0 md:skew-y-0 md:ml-0 md:mr-0

    ${positionClass}
  `}
>
      <WorkCard item={item} />
    </div>
  );
})}
</div>

      </div>
    </section>
  );
}

function WorkCard({ item }) {
  const videoRef = useRef(null);

  return (
    <div
  className={`relative w-full h-[360px] md:h-[420px] rounded-[28px] overflow-hidden border-[6px] ${item.border} shadow-[0_20px_60px_rgba(0,0,0,0.15)]`}
  onMouseEnter={() => {
    if (window.innerWidth >= 768) {
      videoRef.current?.play();
    }
  }}
  onMouseLeave={() => {
    if (window.innerWidth >= 768) {
      videoRef.current?.pause();
    }
  }}
>
  {/* VIDEO */}
  <video
    ref={videoRef}
    muted
    loop
    playsInline
    autoPlay   // ✅ important for mobile
    className="w-full h-full object-cover"
    src={item.video}
  />

      {/* OVERLAY */}
      <div className="absolute bottom-5 left-5 right-5 z-10">
        <div className="group relative cursor-pointer">

          <div
  className={`${item.color} rounded-[24px] px-5 md:px-6 pt-16 md:pt-20 pb-6 md:pb-7 shadow-xl relative overflow-hidden transition-all duration-300 ease-out group-hover:shadow-2xl`}
  style={{
    WebkitMaskImage: "url('/mask.svg')",
    WebkitMaskSize: "100% 100%",
    WebkitMaskRepeat: "no-repeat",
    maskImage: "url('/mask.svg')",
    maskSize: "100% 100%",
    maskRepeat: "no-repeat",
  }}
>

            {/* TEXT */}
            <h3 className="text-white text-[18px] md:text-[22px] font-bold leading-tight max-w-[85%]">
              {item.title}
            </h3>

            <div className="mt-3 md:mt-4 inline-block px-3 py-1.5 text-xs font-medium text-white bg-white/30 backdrop-blur-sm rounded-lg">
              {item.brand}
            </div>

            {/* ARROW */}
            <div className="absolute top-[18px] md:top-[25px] right-[10px] md:right-[14px] w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">

              <span className="absolute text-black text-lg md:text-xl font-bold transition-all duration-300 ease-out group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0">
                ↗
              </span>

              <span className="absolute text-black text-lg md:text-xl font-bold transition-all duration-300 ease-out -translate-x-4 translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                ↗
              </span>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}