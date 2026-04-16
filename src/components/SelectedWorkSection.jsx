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
    <section className="py-20 md:py-24 px-5 md:px-16 lg:px-32">
      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <div className="max-w-[600px] mb-12 md:mb-16">
          <h2 className="text-[40px] md:text-[60px] lg:text-[70px] font-bold leading-tight">
            <strong>
              Content <br />dat scoort.
            </strong>
          </h2>

          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            <b>
              Wij vertellen jouw verhaal. Op <br />
              een manier die écht past bij jouw <br />
              doelgroep. Met creatieve content <br />
              die werkt en het verschil maakt.
            </b>
          </p>

          {/* BUTTON */}
          <button className="group mt-6 inline-block">
            <div className="relative flex items-center gap-2 px-5 py-3 rounded-[8px] overflow-hidden text-[14px] bg-white text-black border border-black transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:skew-x-4 group-hover:-rotate-1 group-hover:scale-105 group-hover:bg-black group-hover:text-white">
              
              <div className="flex items-center gap-2 transition-all duration-500 group-hover:-skew-x-4">
                <span><b>Bekijk al ons werk</b></span>

                <span className="w-5 h-5 flex items-center justify-center rounded-[6px] text-[10px] bg-black text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  →
                </span>
              </div>

            </div>
          </button>
        </div>

        {/* CARDS */}
     <div className="flex flex-row items-end justify-between gap-4 md:gap-10">

  {works.map((item, i) => {
    let positionClass = "";

    if (i === 0) {
      positionClass = "translate-y-6 md:translate-y-12 -rotate-2";
    } else if (i === 1) {
      positionClass = "-translate-y-2 md:-translate-y-4 rotate-1";
    } else if (i === 2) {
      positionClass = "-translate-y-6 md:-translate-y-12 -rotate-1";
    }

    return (
      <div
        key={i}
        className={`flex-1 min-w-0 ${positionClass}`}
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
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        src={item.video}
      />

      {/* OVERLAY */}
      <div className="absolute bottom-5 left-5 right-5 z-10">
        <div className="group relative cursor-pointer">

          <div
            className={`${item.color} rounded-[24px] px-5 md:px-6 pt-16 md:pt-20 pb-6 md:pb-7 shadow-xl relative overflow-hidden transition-all duration-300 ease-out group-hover:shadow-2xl`}
            style={{
              clipPath: "polygon(0 35%, 100% 8%, 100% 100%, 0% 100%)"
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
            <div className="absolute top-[18px] md:top-[25px] right-[12px] md:right-[14px] w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">

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