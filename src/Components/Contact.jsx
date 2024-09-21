import React from 'react'
import Hello from '../assets/touch.png'

function Contact() {
  return (
    <div className='min-h-screen'>
      <div className='flex flex-col lg:flex-row items-center justify-center lg:my-40 md:my-20 sm:my-10 xs:my-20 space-y-10 lg:space-y-0 lg:space-x-10 px-4'>
        
        {/* Image Section */}
        <div className='lg:w-1/2 w-full'>
          <img src={Hello} alt="Heart" className="w-full h-auto max-h-96 lg:max-h-full object-contain animate-bounce" />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 sm:w-full flex justify-center lg:justify-end p-6">
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
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

      {/* Social Media Section */}
      <div className="mt-6 text-center p-8 h-auto w-full bg-slate-400 bg-opacity-15">
        <p className="text-white text-lg">Follow us on social media</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="#" className="bg-blue-500 p-3 rounded-full text-white hover:bg-blue-700 transition-opacity opacity-70 hover:opacity-100">
            FB
          </a>
          <a href="#" className="bg-pink-500 p-3 rounded-full text-white hover:bg-pink-700 transition-opacity opacity-70 hover:opacity-100">
            IG
          </a>
          <a href="#" className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-600 transition-opacity opacity-70 hover:opacity-100">
            TW
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
