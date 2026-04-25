export default function Map() {
  return (
    <div className="flex justify-between py-30 px-20 ">

      
      <div className="max-w-xs">
        <h2 className="text-xl font-bold text-amber-700 uppercase underline leading-tight mb-4">
          149 W Chicago Ave,<br />Chicago, IL 60654
        </h2>
        <p className="text-sm mb-6">
          Our barber shop is located on Chicago Ave. near La Salle St. conveniently located between the River North and Gold Coast neighborhoods.
        </p>
        <button className="bg-amber-700 text-white text-sm px-6 py-3">
          Get Directions
        </button>
      </div>

      
      <div>
        <h2 className="text-3xl font-bold mb-6">HOURS</h2>
        <ul className="text-sm space-y-2 font-bold">
          <li>Sunday: 9 AM - 7 PM</li>
          <li>Monday: 9 AM - 8 PM</li>
          <li>Tuesday: 9 AM - 8 PM</li>
          <li>Wednesday: 9 AM - 8 PM</li>
          <li>Thursday: 9 AM - 8 PM</li>
          <li>Friday: 9 AM - 8 PM</li>
          <li>Saturday: 9 AM - 7 PM</li>
        </ul>
      </div>

      
      <div className="w-96 h-64 bg-gray-200 flex items-center justify-center">
        map
      </div>

    </div>
  )
}