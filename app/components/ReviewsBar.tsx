'use client'

import {useState} from "react"

export default function ReviewsBar() {
const [reviewsShown, setReviewsShown] = useState(3)

  const reviews = [

           {
  review: "Great atmosphere in the shop, everyone was welcoming and Beau made sure every detail was right before I left the chair.",
  name: "Phil H."
},
{
  review: "I've been to a lot of barbershops over the years, but Beau really stands out from the rest, super detail-oriented, patient, and consistent. You can tell he actually cares about his work.",
  name: "Mason F."
},
{
  review: "Beau has been cutting my hair for two years now and I won't go anywhere else. Every time I leave looking cleaner than I expected.",
  name: "Jake R."
},
{
  review: "Walked in as a first timer and felt comfortable right away. Showed him a reference and he nailed it. Booked my next appointment before I even left.",
  name: "Carlos M."
},
{
  review: "Best fade I've ever had, no question. He took his time and didn't rush even though the shop was busy. That says a lot about his character.",
  name: "Derek T."
},
{
  review: "Clean shop, good music, and Beau is just a genuinely cool guy. The haircut was sharp but the whole experience is what keeps me coming back.",
  name: "Ryan K."
},
{
  review: "My son is really particular about his hair and Beau was patient with him the whole time. He left the chair smiling. We'll definitely be back.",
  name: "Sandra L."
},
{
  review: "Beau is the only barber I trust with my hair. Consistent every single time, no matter how busy the shop is.",
  name: "Marcus W."
},
{
  review: "Came in for a simple cleanup and left looking completely different. Dude has a real eye for what suits you.",
  name: "Tony B."
},
              ]


    const updatedReviews = reviews.slice(reviewsShown, reviewsShown + 3)



    function handleNext(){
        if (reviewsShown + 3 < reviews.length){
          setReviewsShown(reviewsShown + 3)
        }
    }

    function handlePrevious(){
      if (reviewsShown - 3 >= 0){
        setReviewsShown(reviewsShown -3)
      }
    }

  return (
    <div className="bg-[#000000] py-16 px-10">

      <h2 className="text-center text-3xl font-bold tracking-widest text-amber-600  mb-14">
        WHAT MY CLIENTS SAY
      </h2>

      <div className="flex justify-between gap-10 text-center text-white">

          {updatedReviews.map((review) => {
            return (
              <div key={review.name} className="flex-1 ">
                <p className="text-sm leading-relaxed mb-4">"{review.review}"</p>
                <p className="font-bold">- {review.name}</p>
              </div>
            )
          })}
      </div>

        <div className="flex align-center justify-center gap-10 text-6xl mt-10 ">
          <button 
            onClick={handlePrevious}
            className="text-white bg-amber-600 rounded-full w-15">
            ←
          </button>
          <button 
          onClick={handleNext}
          className="text-white bg-amber-600 rounded-full w-15">
            →
          </button>
        </div>


    </div>
  )
}