export default function Footer() {
  return (
    <div className="flex justify-between py-14 px-16 bg-black">

      <div>
        <h2 className="mb-6 text-2xl font-bold tracking-wide text-white">Beau Blendz Shop</h2>
        <p className="text-yellow-400 font-medium mb-1">(312) 500-5003</p>
        <p className="text-gray-300 text-sm">149 West Chicago Avenue</p>
        <p className="text-gray-300 text-sm">Chicago, Illinois</p>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="mb-6 text-2xl font-bold tracking-wide text-white">Hours</h2>
        <ul className="text-gray-300 text-sm space-y-1 text-center">
          <li>Sunday: 9 AM – 7 PM</li>
          <li>Monday: 9 AM – 8 PM</li>
          <li>Tuesday: 9 AM – 8 PM</li>
          <li>Wednesday: 9 AM – 8 PM</li>
          <li>Thursday: 9 AM – 8 PM</li>
          <li>Friday: 9 AM – 8 PM</li>
          <li>Saturday: 9 AM – 7 PM</li>
        </ul>
      </div>

      <div className="flex flex-col justify-center">
        <ul className="text-xl space-y-2">
          <li className="text-yellow-400 hover:text-white cursor-pointer transition-colors duration-150">Home</li>
          <li className="text-yellow-400 hover:text-white cursor-pointer transition-colors duration-150">About Me</li>
          <li className="text-yellow-400 hover:text-white cursor-pointer transition-colors duration-150">Services</li>
          <li className="text-yellow-400 hover:text-white cursor-pointer transition-colors duration-150">Book Now</li>
        </ul>
      </div>

      <div className="flex flex-col justify-center">
        <ul className="text-lg space-y-2">
          <li className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-150">Facebook</li>
          <li className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-150">Instagram</li>
          <li className="text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-150">Gmail</li>
        </ul>
      </div>

    </div>
  )
}