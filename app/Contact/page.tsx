'use client'
import {useState} from "react"


export default function Contact(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setSubmitted] = useState(false)

    function HandleSubmit(e:any ){
        e.preventDefault()

        const formData = {
            firstName,
            lastName,
            email,
            message
        }
        setSubmitted(true)
        console.log(formData)

    }



    return(
 <div className="flex justify-center items-center p-20">



        {submitted ? (<h2>Your Message was Sent ! </h2>): (
            <form 
                onSubmit={HandleSubmit}
                className="  border border-2-black rounded-lg w-155 h-100 flex flex-col  items-center justify-center bg-white">
                <h2 
                    className=" text-4xl flex  p-4">
                    Contact Us
                </h2>



            <div className="flex items-center gap-5">
                <label className="font-semibold text-2xl">First Name: </label>
                <input
                value={firstName}
                onChange={((e) => setFirstName(e.target.value))}
                placeholder="John"
                className="border rounded-sm h-9 w-40 px-2"
                />


                <label className="font-semibold text-2xl">Last Name: </label>
                <input
                value={lastName}
                onChange={((e) => setLastName(e.target.value))}
                placeholder="Smith"
                className="border rounded-sm h-9 w-40 px-2"
                />
            </div>


            <div className="flex flex-col">
              <div className="flex items-center gap-5">
                <label>Email: </label>
                <input
                value={email}
                onChange={((e) => setEmail(e.target.value))}
                className="border rounded-sm h-9 w-40 px-2"
                />
             </div>

                <label>Write a Message</label>
                <textarea 
                value={message}
                onChange={((e) => setMessage(e.target.value))}
                className="border rounded-sm resize-none px-2"

                >
                </textarea>
            </div>

                <button 
                className="bg-black text-white w-20 h-8 rounded-full"
                type="submit"
                >
                 Submit
                </button>
            </form>
        )}


</div>
    )
}