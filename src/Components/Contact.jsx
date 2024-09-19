import React from 'react'
import Hello from '../assets/touch.png'
function Contact() {
  return (
<div>
<div className='h-full w-full my-60 lg:flex md:block sm:block xs:block grid grid-cols-2 gap-4'>
<div className='w-1/2 h-1/2'>
<img src={Hello} alt="Heart" className="h-full w-full animate-bounce" />
</div>
<div className="h-full w-1/2 sm:w-full xs:w-full flex place-items-end justify-end p-6">
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md ">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Your Message"
                    rows="4"
                ></textarea>
            </div>
            <div className="flex items-center justify-center">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Send Message
                </button>
            </div>
        </form>
    </div>
</div>
    

</div>
<div className="mt-6 text-center p-20 h-[40vh] w-full bg-slate-400 bg-opacity-15">
            <p className="text-white text-lg">Follow us on social media</p>
            <div className="flex justify-center space-x-4 mt-3">
                <a href="#" className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-700 transition-opacity opacity-70 hover:opacity-100">
                    {/* Replace with actual icon */}
                    <i className="fab fa-facebook-f">FB</i>
                </a>
                <a href="#" className="bg-pink-500 p-2 rounded-full text-white hover:bg-pink-700 transition-opacity opacity-70 hover:opacity-100">
                    {/* Replace with actual icon */}
                    <i className="fab fa-instagram">IG</i>
                </a>
                <a href="#" className="bg-blue-400 p-2 rounded-full text-white hover:bg-blue-600 transition-opacity opacity-70 hover:opacity-100">
                    {/* Replace with actual icon */}
                    <i className="fab fa-twitter">TW</i>
                </a>
            </div>
        </div>
</div>
  )
}

export default Contact