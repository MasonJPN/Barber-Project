'use client'

import {useState} from "react"

export default function FeatServices() {
 const [open, setOpen] = useState<string | null>(null)

 function handleOpen(service: string){
  setOpen(open === service ? null : service)
 }

  const services = [
     {
   name: "CLASSIC GENTLEMAN HAIRCUT",
   description: "Precision hair cut with hot lather & straight razor neck shave. Book Now "
 }, 
 {
  name: "BUZZ CUT",
  description: "One size clipper all over and straight razor neck shave. Book Now."
 },
 {
  name: "STRAIGHT RAZOR SHAVE",
   description: "A traditional hot towel straight razor shave. Book Now."
 }, 
 {
  name: "RAZOR BEARD TRIM",
  description: "Refreshing & Maintaining length, shape w/ straight razor lining. Book Now."
 }
]

  return (
    <div className="bg-black w-full min-h-160 py-25 flex justify-between px-20">
      <div className="px-10 w-1/2">
        <h2 className="text-amber-600 text-3xl mb-10 tracking-widest font-bold">
          FEATURED SERVICES
        </h2>

        <div className="flex flex-col">
          <ul className="text-white text-lg tracking-widest w-full">
            {services.map((service) => (
              <li
                key={service.name}
                onClick={() => handleOpen(service.name)}
                className="border-b border-gray-700 py-5 w-full cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <span>{service.name}</span>
                  <span className="text-xl">{open === service.name ? "-" : "+"}</span>
                </div>

                {open === service.name && (
                  <p className="text-white text-sm mt-3">
                    {service.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-white mt-20 text-sm leading-relaxed">
          *Cancellations or No-Shows within 24 hours of appointment time will result in 100% charge of service.
        </p>
      </div>

      <div className="flex items-start pr-25">
        <img
          className="h-120 w-72 object-cover "
          src="/FeatPhoto.png"
        />
      </div>
    </div>
  );
}