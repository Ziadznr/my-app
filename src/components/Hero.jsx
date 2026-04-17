export default function Hero() {
  return (
    <section className="pl-0 pt-30 pb-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* TEXT */}
     <div className="w-full max-w-[1200px] p-0">

  <h1 className="text-[46px] md:text-[70px] lg:text-[80px] font-bold leading-[0.9] tracking-[-3px] text-black">
    Get Hyped.Get <br />
    Noticed.Get Results.
  </h1>

  <p className="mt-6 text-lg md:text-xl font-semibold text-black max-w-[420px] leading-snug">
    Klaar met gokken op content <br />
    die niets oplevert?
  </p>

</div>

        {/* CARDS */}
    <div className="mt-10 w-full px-6">
  <div className="flex w-full">

    {/* Card 1 */}
    <div className="group flex-1 min-h-[300px] bg-blue-500 text-white p-6 rounded-2xl shadow-xl
      rotate-[-6deg] transition-all duration-300
      hover:rotate-0 hover:scale-105 hover:z-20 hover:-translate-y-2"
      style={{ marginRight: "-6%" }}
    >
      <h2 className="text-3xl font-bold">10M+</h2>
      <p className="text-sm mt-2">Organische views</p>
      <div className="h-[1px] bg-white my-2 opacity-50"></div>
      <p className="text-xs">Groei door slimme content</p>
    </div>

    {/* Card 2 */}
    <div className="group flex-1 min-h-[300px] rounded-2xl overflow-hidden shadow-xl
      rotate-[8deg] transition-all duration-300
      hover:rotate-0 hover:scale-105 hover:z-20 hover:-translate-y-2"
      style={{ marginRight: "-6%" }}
    >
      <video
        src="https://gethyped.b-cdn.net/Salontopper/Loop%20Salontopper.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>

    {/* Card 3 */}
    <div className="group hidden md:block flex-1 min-h-[300px] bg-green-500 text-white p-6 rounded-2xl shadow-xl
      rotate-[3deg] transition-all duration-300
      hover:rotate-0 hover:scale-105 hover:z-20 hover:-translate-y-2"
      style={{ marginRight: "-6%" }}
    >
      <h2 className="text-3xl font-bold">30+</h2>
      <p className="text-sm mt-2">Merken geholpen</p>
      <div className="h-[1px] bg-white my-2 opacity-50"></div>
      <p className="text-xs">Van start-up tot multinational</p>
    </div>

    {/* Card 4 */}
    <div className="group hidden lg:block flex-1 min-h-[300px] rounded-2xl overflow-hidden shadow-xl
      rotate-[1deg] transition-all duration-300
      hover:rotate-0 hover:scale-105 hover:z-20 hover:-translate-y-2"
    >
      <video
        src="https://gethyped.b-cdn.net/Petrol%20Head/petrolhead-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>

      </div>
    </section>
  );
}