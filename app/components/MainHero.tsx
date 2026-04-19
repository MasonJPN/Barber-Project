export default function MainHero() {
  return (
    <div className="relative w-screen h-screen">
      
      <img
        src="/DefaultHero.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute bottom-10 left-10 text-white max-w-lg">
        <h1 className="text-5xl font-semibold mb-4">Look your best.</h1>
        <p className="text-sm text-gray-300 leading-relaxed mb-6">
          Highly skilled barbers. Modern and classic styling for men. Located in downtown Chicago.
        </p>
        <button className="bg-amber-500 text-white text-sm font-semibold px-6 py-3 rounded-full">
          Book a cut
        </button>
      </div>

    </div>
  )
}