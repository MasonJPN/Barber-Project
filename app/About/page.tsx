export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* Hero */}
      <section className="relative h-[600px]">
        <img
          src="/AboutHero.png"
          alt="Beau in the shop"
          className="w-full h-[600px] object-cover object-top brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-20">
          <h1 className="text-6xl font-bold tracking-widest uppercase mb-4">About Me</h1>
          <p className="text-gray-300 text-lg max-w-md font-light">
            Chicago barber. One chair. Every cut done right.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="flex">
        <div className="w-1/2">
          <img
            src="/BeauShop.png"
            alt="Beau at work"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 bg-neutral-950 flex flex-col justify-center px-16 py-20">
          <h2 className="text-3xl font-bold tracking-widest uppercase mb-8 text-amber-600">
            My Story
          </h2>
          <div className="space-y-5 text-gray-300 text-base leading-relaxed">
            <p>
              I started cutting hair in 2021 and it quickly became more than just a skill — it became my thing. I opened up my own spot in Chicago and haven't looked back since.
            </p>
            <p>
              It's just me and my chair. No big team, no nonsense. When you come in, you get my full attention and I make sure you leave looking exactly how you want.
            </p>
            <p>
              I take pride in being consistent. Whether it's your first visit or your tenth, the standard stays the same.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-900 py-16 px-20">
        <div className="flex justify-around">
          <div className="text-center">
            <p className="text-5xl font-bold text-amber-600 mb-2">2021</p>
            <p className="text-gray-400 text-sm tracking-widest uppercase">Started Cutting</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-amber-600 mb-2">3+</p>
            <p className="text-gray-400 text-sm tracking-widest uppercase">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-amber-600 mb-2">500+</p>
            <p className="text-gray-400 text-sm tracking-widest uppercase">Clients Served</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-amber-600 mb-2">1</p>
            <p className="text-gray-400 text-sm tracking-widest uppercase">Chair. All For You.</p>
          </div>
        </div>
      </section>

      {/* Shop Info */}
      <section className="flex">
        <div className="w-1/2 bg-black flex flex-col justify-center px-16 py-20">
          <h2 className="text-3xl font-bold tracking-widest uppercase mb-10 text-amber-600">
            The Shop
          </h2>
          <div className="space-y-6 text-gray-300 text-sm">
            <div>
              <p className="text-white text-xs tracking-widest uppercase mb-2">Address</p>
              <p>149 West Chicago Avenue</p>
              <p>Chicago, Illinois</p>
            </div>
            <div>
              <p className="text-white text-xs tracking-widest uppercase mb-2">Phone</p>
              <p className="text-amber-600">(312) 500-5003</p>
            </div>
            <div>
              <p className="text-white text-xs tracking-widest uppercase mb-2">Hours</p>
              <p>Mon – Fri: 9 AM – 8 PM</p>
              <p>Sat – Sun: 9 AM – 7 PM</p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="/ShopExterior.png"
            alt="The shop"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 py-24 px-20 text-center">
        <h2 className="text-4xl font-bold tracking-widest uppercase mb-8">
          Ready For A Fresh Cut?
        </h2>
        <button className="bg-amber-600 hover:bg-amber-700 text-black text-sm tracking-widest uppercase px-10 py-4 transition-colors duration-200 cursor-pointer font-bold">
          Book With Beau
        </button>
      </section>

    </main>
  )
}