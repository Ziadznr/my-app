export default function Intro() {
  return (
    <section className="pt-0 py-24">

      <div className="max-w-[1200px] mx-auto px-6">

{/* 🔥 TOP BIG TEXT (FULL WIDTH) */}
<div className="w-full pl-6 md:pl-12 lg:pl-20">

 <h2 className="text-[30px] md:text-[25px] lg:text-[45px] font-bold leading-[1.05] tracking-[-1.5px] text-black max-w-[800px]">
  Wij maken content die opvalt. Die 
  blijft hangen. Die jouw doelgroep 
  raakt en jouw merk in beweging
  brengt. Snel, krachtig en energiek.
</h2>

</div>

        <div className="mt-20 flex items-start justify-between gap-16 relative">

  {/* LEFT SIDE */}
  <div>

  {/* 🔹 Mobile Video (only mobile) */}
  <div className="block md:hidden mb-6 flex justify-center">
  <div className="w-[85%] max-w-[320px] rounded-2xl overflow-hidden 
    transform skew-x-[-6deg] skew-y-[3deg]">
    <video
      src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-[350px] object-cover"
    />
  </div>
</div>

  {/* 🔹 Main Layout */}
  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12">

    {/* IMAGE (hidden on mobile) */}
    <div className="hidden md:block w-[200px] h-[250px] rounded-2xl overflow-hidden shrink-0">
      <img
        src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
        alt=""
        className="w-full h-full object-cover"
      />
    </div>

    {/* TEXT */}
    <div className="max-w-[650px] pt-0 md:pt-12">
      <p className="text-[16px] md:text-[20px] font-medium text-black leading-[1.6]">
        We stoppen niet bij mooie plaatjes en <br className="hidden md:block" />
        vette beelden. We maken het meetbaar. <br className="hidden md:block" />
        Zo weet je precies wat werkt en wat niet. <br className="hidden md:block" />
        Nooit meer content zonder strategie. <br className="hidden md:block" />
        Nooit meer content zonder resultaat.
      </p>

      {/* BUTTON */}
      <div className="mt-6">
        <a href="#" className="group inline-block">
          <div className="relative flex items-center gap-3 px-4 h-[42px] 
          border border-black rounded-[8px] bg-white overflow-hidden
          transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          group-hover:skew-x-8 group-hover:-rotate-1 group-hover:scale-105">

            <div className="flex items-center gap-3 
            transition-all duration-500 
            group-hover:-skew-x-6">

              <span className="text-black">
                Leer ons kennen
              </span>

              <span className="w-7 h-7 flex items-center justify-center 
              rounded-[8px] bg-black text-white">
                →
              </span>

            </div>
          </div>
        </a>
      </div>
    </div>

  </div>
</div>

  {/* RIGHT ARROW */}
<div className="hidden md:flex items-center pt-50">
  <button className="group w-12 h-12 rounded-[8px] border border-black flex items-center justify-center overflow-hidden relative">

    {/* ARROW 1 (goes up & disappears) */}
    <span className="absolute text-orange-500 transition-all duration-300 
    group-hover:-translate-y-6 group-hover:opacity-0">
      ↓
    </span>

    {/* ARROW 2 (comes from bottom) */}
    <span className="absolute text-orange-500 transition-all duration-300 
    translate-y-6 opacity-0 
    group-hover:translate-y-0 group-hover:opacity-100">
      ↓
    </span>

  </button>
</div>

</div>

      </div>

    </section>
  );
}