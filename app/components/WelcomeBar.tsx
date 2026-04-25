


export default function WelcomeBar(){

    return (
        <div className="flex px-10 py-10 gap-10">
            <div className="flex flex-col gap-4 justify-center">
                <h2 className="mb-5 text-4xl font-semibold text-amber-600">WELCOME TO MY BARBER SHOP</h2>
                <h3 className="text-xl">Stylish and modern haircuts, here you can get a clean, classic look.</h3>
                <p className="text-xl">Hair is our passion, and our passion shows on every client that walks out of our doors. Through ongoing education, our Chicago stylists stay up to date on the latest hairstyles for men and styles and techniques to bring you the looks you want.</p>
            </div>

            <div className="">
                <img 
                    className="h-80 w-500"
                    src="/DefaultHero.png"/>
            </div>
        </div>
    )
}