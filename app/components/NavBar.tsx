import Link from "next/link"

export default function NavBar() {
  return (
    <div className="relative flex items-center justify-between bg-black px-10 h-24">
      
      <div>
        <img alt="beauBlendz logo" />
      </div>

      <ul className="absolute left-1/2 -translate-x-1/2 flex flex-row gap-5 text-lg text-white  ">
        <li className="hover:text-amber-600"><Link href="/">HOME</Link></li>
        <li className="hover:text-amber-600"><Link href="/About">ABOUT</Link></li>
        <li className="hover:text-amber-600"><Link href="/servicesPage">SERVICES</Link></li>
        <li className="hover:text-amber-600"><Link href="/Contact">CONTACT</Link></li>
      </ul>

      <div className="flex items-center">
        <button className="w-36 h-15 text-base font-semibold  text-white bg-amber-600">
          Book Now
        </button>
      </div>

    </div>
  )
}