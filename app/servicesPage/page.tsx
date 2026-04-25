
export default function ServicesPage() {
  const hairServices = [
    {
      name: "Bald Fade Cut",
      price: "$65",
      description: "The bald fade cuts hair down to the skin. Like other fades, the skin fade can be low, medium, or high."
    },
    {
      name: "Hair Cut",
      price: "$55",
      description: "Precision hair cut with hot lather & straight razor neck shave."
    },
    {
      name: "Buzz Cut",
      price: "$35",
      description: "One size clipper all over and straight razor neck shave."
    },
    {
      name: "Kids Haircut",
      price: "$45",
      description: "Kids under 13 years of age."
    },
    {
      name: "Senior Citizen Haircut",
      price: "$45",
      description: "65 years of age and wiser."
    },
  ]

  const shaveServices = [
    {
      name: "Straight Razor Shave",
      price: "$50",
      description: "Old-School straight razor shave w/ hot towel, pre and aftershave lotion."
    },
    {
      name: "Razor Beard Trim",
      price: "$50",
      description: "Refreshing & Maintaining length, and shape w/ straight razor lining."
    },
    {
      name: "Head Shave",
      price: "$55",
      description: "Straight Razor Precision Head Shave w/ Hot Towel, Pre Shave, and After Shave Treatment."
    },
  ]

  const otherServices = [
    {
      name: "Eyebrow Threading",
      price: "$20",
      description: ""
    },
    {
      name: "Beard Threading",
      price: "$25",
      description: "Facial cheeks only."
    },
    {
      name: "Nose Wax Hair Removal",
      price: "$15",
      description: ""
    },
  ]

  return (
    <main className="bg-black text-white">

     
      <section className="relative h-100">
        <img
          src="/DefaultHero.png"
          alt="Services"
          className="w-full h-100 object-cover brightness-40"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-20">
          <h1 className="text-6xl font-bold tracking-widest uppercase mb-4">Services</h1>
          <p className="text-gray-300 text-lg max-w-md font-light">
            Every service includes Beau's full attention and a clean finish.
          </p>
        </div>
      </section>

      
      <section className="py-20 px-20 border-b border-neutral-800">
        <h2 className="text-amber-600 text-2xl font-bold tracking-widest uppercase mb-12">
          Hair Services
        </h2>
        <div className="space-y-0">
          {hairServices.map((service) => (
            <div
              key={service.name}
              className="flex justify-between items-start border-b border-neutral-800 py-7"
            >
              <div className="max-w-lg">
                <p className="text-white text-lg tracking-wide font-semibold mb-1">{service.name}</p>
                {service.description && (
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                )}
              </div>
              <p className="text-amber-600 text-xl font-bold tracking-widest ml-10">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

      
        <section className="grid grid-cols-3 gap-8 px-20 py-16">
            <div className="h-85 w-85 rounded-full overflow-hidden mx-auto">
             <video src="/Haircut2.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>

            <div className="h-85 w-85 rounded-full overflow-hidden mx-auto">
             <video src="/Haircut1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>

            <div className="h-85 w-85 rounded-full overflow-hidden mx-auto">
              <video src="/Haircut3.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
        </section>

      
      <section className="py-20 px-20 border-b border-neutral-800">
        <h2 className="text-amber-600 text-2xl font-bold tracking-widest uppercase mb-12">
          Shave Services
        </h2>
        <div className="space-y-0">
          {shaveServices.map((service) => (
            <div
              key={service.name}
              className="flex justify-between items-start border-b border-neutral-800 py-7"
            >
              <div className="max-w-lg">
                <p className="text-white text-lg tracking-wide font-semibold mb-1">{service.name}</p>
                {service.description && (
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                )}
              </div>
              <p className="text-amber-600 text-xl font-bold tracking-widest ml-10">{service.price}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className="grid grid-cols-4 gap-0">
        <div className="h-75 bg-neutral-900">
          <img src="/Work4.png" alt="Haircut example" className="w-full h-full object-cover" />
        </div>
        <div className="h-75 bg-neutral-800">
          <img src="/Work5.png" alt="Haircut example" className="w-full h-full object-cover" />
        </div>
        <div className="h-75 bg-neutral-900">
          <img src="/Work6.png" alt="Haircut example" className="w-full h-full object-cover" />
        </div>
        <div className="h-75 bg-neutral-800">
          <img src="/Work7.png" alt="Haircut example" className="w-full h-full object-cover" />
        </div>
      </section>

      
      <section className="bg-neutral-950 py-24 px-20 text-center">
        <h2 className="text-4xl font-bold tracking-widest uppercase mb-8">
          Ready To Book?
        </h2>
        <button className="bg-amber-600 hover:bg-amber-700 text-black text-sm tracking-widest uppercase px-10 py-4 transition-colors duration-200 cursor-pointer font-bold">
          Book With Me
        </button>
      </section>

    </main>
  )
}