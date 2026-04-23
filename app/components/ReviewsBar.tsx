export default function ReviewsBar() {
  return (
    <div className="bg-[#3a3a3a] py-16 px-10">

      <h2 className="text-center text-3xl font-bold tracking-widest text-yellow-600 mb-14">
        WHAT OUR CLIENTS SAY
      </h2>

      <div className="flex justify-between gap-10 text-center text-white">

        <div className="flex-1 flex flex-col items-center">
          <p className="text-sm leading-relaxed mb-4">
            "Great atmosphere in the shop, everyone was welcoming and Beau made sure every detail was right before I left the chair."
          </p>
          <p className="font-bold">- Phil H.</p>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <p className="text-sm leading-relaxed mb-4">
            "I've been to a lot of barbershops over the years, but Beau really stands out from the rest, super detail-oriented, patient, and consistent. You can tell he actually cares about his work."
          </p>
          <p className="font-bold">- Mason F.</p>
        </div>

        <div className="flex-1 flex flex-col items-center">
          <p className="text-sm leading-relaxed mb-4">
            "I've been to a lot of barbershops over the years, but Beau really stands out from the rest, super detail-oriented, patient, and consistent. You can tell he actually cares about his work."
          </p>
          <p className="font-bold">- Mason F.</p>
        </div>

      </div>
    </div>
  )
}