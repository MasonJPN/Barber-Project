'use client'

import { useState } from "react"

export default function Contact() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [phone, setPhone] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const formData = { firstName, lastName, email, message, phone }
    setSubmitted(true)
    console.log(formData)
  }

  return (
    <div className="flex items-center">
      <div className="w-1/2 shrink-0 p-28">
        <h1 className="text-5xl mb-10">CONTACT US</h1>
        <p className="text-xl">
          We'd love to hear from you! Whether you're ready to book your next haircut, have
          questions about our services, or want to learn more about The Men's Room Barbershop,
          we're here to help. Conveniently located in the heart of North Halsted, our
          pride-driven barbershop and retail shop are easy to find and always welcoming.
        </p>
      </div>

      <div className="w-1/2 shrink-0 flex flex-col justify-center items-center p-20">
        {submitted ? (
          <h2>Your Message was Sent!</h2>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded- w-155 h-100 flex flex-col items-center justify-center bg-white"
          >
            <div className="grid grid-cols-2 items-center gap-5">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
                className="border bg-gray-200 border-gray-200 h-11 w-70 px-2"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
                className="border bg-gray-200 border-gray-200 h-11 w-70 px-2"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="border bg-gray-200 border-gray-200 h-11 w-70 px-2"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="border bg-gray-200 border-gray-200 h-11 w-70 px-2"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
                required
                className="col-span-2 border bg-gray-200 border-gray-200 resize-none px-2 h-20 w-150"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white w-20 h-8 mt-6"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  )
}