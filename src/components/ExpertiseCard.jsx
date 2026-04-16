export default function ExpertiseCard() {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 relative overflow-hidden group">

      {/* 🔥 TOP */}
      <div className="flex justify-between items-start">

        {/* LEFT */}
        <div>
          <p className="text-sm text-gray-500">Expertise</p>
          <h2 className="text-2xl md:text-3xl font-semibold mt-1">
            Social strategy
          </h2>
        </div>

        {/* RIGHT NUMBER */}
        <div className="flex text-2xl md:text-3xl font-semibold">
          <span>0</span>
          <span>1</span>
        </div>

      </div>

      {/* 🔥 IMAGE / VIDEO */}
      <div className="mt-6 rounded-xl overflow-hidden">
        <video
          src="https://gethyped.b-cdn.net/MD/MD%20Loop%20Schaken.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[220px] object-cover"
        />
      </div>

      {/* 🔥 BOTTOM */}
      <div className="mt-6">

        <h3 className="text-lg font-semibold">
          Slimme strategie. Sterke start.
        </h3>

        <p className="mt-2 text-gray-600 text-sm md:text-base leading-relaxed">
          We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.
        </p>

        {/* BUTTON */}
        <div className="mt-4">
          <button className="group relative flex items-center gap-2 text-sm font-medium">

            {/* TEXT */}
            <span className="relative z-10">
              Meer over social strategie
            </span>

            {/* ICON */}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>

          </button>
        </div>

      </div>

      {/* 🔥 FULL CLICKABLE AREA */}
      <a
        href="#"
        className="absolute inset-0 z-20"
        aria-label="Expertise link"
      ></a>

    </div>
  );
}