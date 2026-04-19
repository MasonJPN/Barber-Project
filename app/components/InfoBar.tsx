


export default function InfoBar(){
    return(
        <div className=" absolute bg-gray-700 py-15 px-10 flex gap-20 border border-">
            <div className="flex flex-col align-center items-center gap-3 ">
                <img 
                    src="/scissors.png"
                    className="h-15 w-15 text-center items-center"
                    />
                <h2 className="text-center">Expert Barber</h2>
                <p className="text-center">Masterfully trained professional with years of experience.</p>
            </div>
            
            <div className="flex flex-col align-center items-center gap-3">
                <img
                    src="/doubleStars.png"
                    className="h-15 w-15 items-center"
                    />
                <h2 className="text-center">Premium Products</h2>
                <p className="text-center">We use only top-tier grooming products for the best results.</p>
            </div>

            <div className="flex flex-col align-center items-center gap-3">
                <img
                    src="/clock.png"
                    className="h-15 w-15"
                    />
                <h2 className="text-center">Easy Booking</h2>
                <p className="text-center">Book your appointment online in seconds. No Waiting.</p>
            </div>

        </div>
    )
}