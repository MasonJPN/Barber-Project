


export default function NavBar(){

    return (
        <div className="flex justify-between align-center bg-amber-300 align-center gap-12">
            <div>
                <img alt="beauBlendz logo"/>
                
            </div>


            <div className="flex flex-row">
                <ul className="flex flex-row justify-between align-center gap-12 px-10 py-10">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Services</li>
                    <li>
                        <Link href="/">Contact Me</Link></li>
                    <li>Book Now</li>
                </ul>
            </div>
        </div>
    )
}