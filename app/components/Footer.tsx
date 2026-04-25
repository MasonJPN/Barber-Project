export default function Footer() {
  return (
    <footer className="bg-black text-white">

      {/* Main footer content */}
      <div className="flex justify-between py-16 px-16 border-b border-neutral-800">

        {/* Brand */}
        <div className="max-w-xs">
          <h2 className="text-2xl font-bold tracking-widest text-white uppercase mb-2">Beau Blendz</h2>
          <p className="text-amber-600 text-xs tracking-widest uppercase mb-6">Indy's Premier Barbershop</p>
          <p className="text-amber-500 font-medium mb-1">(312) 500-5003</p>
          <p className="text-gray-400 text-sm">149 West Chicago Avenue</p>
          <p className="text-gray-400 text-sm">Chicago, Illinois</p>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-xs tracking-widest uppercase text-amber-600 mb-6">Hours</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li className="flex justify-between gap-8"><span>Sunday</span><span>9 AM – 7 PM</span></li>
            <li className="flex justify-between gap-8"><span>Monday</span><span>9 AM – 8 PM</span></li>
            <li className="flex justify-between gap-8"><span>Tuesday</span><span>9 AM – 8 PM</span></li>
            <li className="flex justify-between gap-8"><span>Wednesday</span><span>9 AM – 8 PM</span></li>
            <li className="flex justify-between gap-8"><span>Thursday</span><span>9 AM – 8 PM</span></li>
            <li className="flex justify-between gap-8"><span>Friday</span><span>9 AM – 8 PM</span></li>
            <li className="flex justify-between gap-8"><span>Saturday</span><span>9 AM – 7 PM</span></li>
          </ul>
        </div>

        {/* Nav */}
        <div>
          <h3 className="text-xs tracking-widest uppercase text-amber-600 mb-6">Navigate</h3>
          <ul className="space-y-3">
            {["Home", "About Me", "Services", "Book Now"].map((link) => (
              <li key={link}>
                <a className="text-gray-400 hover:text-amber-600 transition-colors duration-150 text-sm tracking-widest uppercase cursor-pointer">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xs tracking-widest uppercase text-amber-600 mb-6">Follow</h3>
          <ul className="space-y-3">
            {["Facebook", "Instagram", "Gmail"].map((platform) => (
              <li key={platform}>
                <a className="text-gray-400 hover:text-amber-600 transition-colors duration-150 text-sm tracking-widest uppercase cursor-pointer">
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center px-16 py-5">
        <p className="text-gray-600 text-xs tracking-widest">© 2024 BEAU BLENDZ. ALL RIGHTS RESERVED.</p>
        <p className="text-gray-600 text-xs tracking-widest">INDIANAPOLIS, IN</p>
      </div>

    </footer>
  )
}