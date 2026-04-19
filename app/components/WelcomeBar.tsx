


export default function WelcomeBar(){

    return (
        <div className="flex px-10 py-10 gap-20">
            <div className="flex flex-col gap-4 justify-center">
                <h2 className="mb-10 text-4xl font-semibold">WELCOME TO MY SHOP</h2>
                <h3 className="text-xl">Stylish and modern haircuts, here you can get a clean, classic look.</h3>
                <p className="text-xl">Hair is our passion, and our passion shows on every client that walks out of our doors. Through ongoing education, our Chicago stylists stay up to date on the latest hairstyles for men and styles and techniques to bring you the looks you want.</p>
            </div>

            <div className="">
                <img 
                    className="h-90 w-300"
                    src="/DefaultHero.png"/>
            </div>
        </div>
    )
}