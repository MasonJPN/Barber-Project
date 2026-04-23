import Link from "next/link"

export default function NavBar() {
  return (
    <div className="relative flex items-center justify-between bg-black px-10 h-24">
      
      <div>
        <img alt="beauBlendz logo" />
      </div>

      <ul className="absolute left-1/2 -translate-x-1/2 flex flex-row gap-10 text-white text-sm">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Me</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/Contact">Contact</Link></li>
      </ul>

      <div className="flex items-center">
        <button className="w-36 h-10 text-base font-semibold rounded-full text-white bg-amber-500">
          Book Now
        </button>
      </div>

    </div>
  )
}