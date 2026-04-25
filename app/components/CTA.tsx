

export default function CTA() {
  return (
    <div className="relative h-120 ">
      <img
        src="/DefaultHero.png"
        className="w-full h-120 object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-20">
        <h1 className="text-5xl font-bold tracking-wide mb-4">Book Your Next Appointment</h1>
        <h2 className="text-lg max-w-xl mb-8 font-light">
          Our barber shop uses BookedBy to allow you to conveniently schedule your next appointment.
        </h2>
        <button className="border border-amber-600 bg-amber-600 px-8 py-3 text-sm tracking-widest  hover:text-black transition-colors duration-200">
          BOOK YOUR APPOINTMENT
        </button>
      </div>
    </div>
  )
}