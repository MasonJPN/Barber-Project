


export default function Footer(){

    return (
        <div className=" flex justify-between py-9 px-9 bg-black">

            <div className="">
                <h2 className="mb-10 text-3xl text-white">Beau Blendz Shop</h2>
                <p className="text-yellow-300">(312) 500-5003</p>
                <p className="text-white">149 West Chicago Avenue Chicago, IL 60654</p>
            </div>

            <div className="flex flex-col items-center ">
                <h2 className="mb-10 text-3xl text-white">Hours</h2>
                <ul className="text-white">
                    <li>Sunday: 9 AM - 7 PM</li>
                    <li>Monday: 9 AM - 8 PM </li> 
                    <li> Tuesday: 9 AM - 8 PM </li> 
                    <li>Wednesday: 9 AM - 8 PM </li> 
                     <li>Thursday: 9 AM - 8 PM </li> 
                    <li>Friday: 9 AM - 8 PM </li> 
                   <li> Saturday: 9 AM - 7 PM </li> 
                </ul>
            </div>


            <div className="">
                <ul className="underline text-yellow-300">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Services</li>
                    <li>Book Now</li>
                </ul>
            </div>

            <div className="">
                <ul className="text-3xl text-white">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Gmail</li>
                </ul>
            </div>

        </div>
    )
}