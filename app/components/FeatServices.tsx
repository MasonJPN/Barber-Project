export default function FeatServices() {
  return (
    <div className="bg-black w-full min-h-160 py-25 flex  justify-between px-16">

      <div className="px-35 max-w-xl">
        <h2 className="text-yellow-300 text-3xl mb-10">
          FEATURED SERVICES
        </h2>

        <ul className="text-white text-2xl underline underline-offset-8 space-y-4">
          <li className="flex justify-between">
            <span>Classic Gentleman Cut</span>
            <span>+</span>
          </li>
          <li className="flex justify-between">
            <span>Buzz Cut</span>
            <span>+</span>
          </li>
          <li className="flex justify-between">
            <span>Straight Razor Shave</span>
            <span>+</span>
          </li>
          <li className="flex justify-between">
            <span>Razor Beard Trim</span>
            <span>+</span>
          </li>
        </ul>

        <p className="text-white mt-20 text-lg">
          *Cancellations or No-Shows within 24 hours of appointment time will result in 100% charge of service.
        </p>
      </div>

      <div>
        <img
          className="h-80 w-80 object-cover"
          src="/DefaultHero.png"
        />
      </div>

    </div>
  );
}
