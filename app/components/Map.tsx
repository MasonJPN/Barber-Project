




export default function map(){
    return (
        <div className="flex">
            <div>
                <h2 className="text-3xl">149 W Chicago Ave, Chicago, IL 60654</h2>
                <p>Our barber shop is located on Chicago Ave. near La Salle St. conveniently located between the River North and Gold Coast neighborhoods</p>
                <button className="border border-amber-300 h-20 w-40">Get Directions</button>
            </div>

            <div>
                <h2 className="text-3xl">HOURS</h2>
                
                 <ul className="text-xl space-y-2">
                    <li className="text-yellow-400 hover:text-white cursor-pointer transition-colors duration-150">Home</li>
                    <li className="text-yellow-400 hover:text-white cursor-pointer transition-colors duration-150">About Me</li>
                    <li className="text-yellow-400 hover:text-white cursor-pointer transition-colors duration-150">Services</li>
                    <li className="text-yellow-400 hover:text-white cursor-pointer transition-colors duration-150">Book Now</li>
                 </ul>
            </div>

            <div>
                map
            </div>

        </div>
    )
}