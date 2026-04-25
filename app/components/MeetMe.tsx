'use client'

export default function MeetBarber() {
 

  return (
    <section className="bg-neutral-100 w-full py-24 px-16">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-2">Est. 2020</p>
        <h2 className="text-4xl font-bold tracking-widest text-neutral-900 uppercase underline underline-offset-8 decoration-amber-700">
          Meet Your Barber
        </h2>
      </div>

      {/* Main two-column layout */}
      <div className="flex gap-16 max-w-6xl mx-auto items-center">

        {/* Left: Photo */}
        <div className="w-1/2 flex-shrink-0">
          <img
            src="/BeauPhoto.png"
            alt="Beau"
            className="w-full h-[600px] object-cover object-top"
          />
        </div>

        {/* Right: Info */}
        <div className="w-1/2 flex flex-col gap-6">

          <div>
            <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-1">Owner & Lead Barber</p>
            <h3 className="text-6xl font-bold tracking-widest text-neutral-900 uppercase">BEAU</h3>
          </div>

          <p className="text-neutral-600 text-base leading-relaxed">
            With over a decade behind the chair, Beau has built a reputation for precision cuts,
            clean fades, and a laid-back atmosphere that keeps clients coming back. His shop is
            more than a barbershop — it's a place where every client leaves looking and feeling
            their best.
          </p>

        

          {/* CTA */}
          <button className="mt-2 w-fit bg-amber-700 text-white text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-amber-800 transition-colors cursor-pointer">
            Book With Beau
          </button>

        </div>
      </div>
    </section>
  )
}