import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";

const contactData = [
  { icon: CiMail, title: "Email", value: "karansinggpatil@gmail.com" },
  { icon: FaPhoneAlt, title: "Phone", value: "+91 8530153694" },
  { icon: IoLocationSharp, title: "Location", value: "Aurangabad, India" },
];


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending.... Please wait..");

    const formData = new FormData(event.target);
    formData.append("access_key", "11732396-0874-4d3d-84a0-3ffb1425a007");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const confirmed = alert("Form Submitted Successfully");
    const data = await response.json();
    if (data.success) {
      setResult(`Form Submitted Successfully  `);
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (

    <div id='Contact' className='h-screen scroll-mt-17 '>
      <section className="min-h-screen px-4 sm:px-6 md:px-16 lg:px-24 py-10 pt-10 ">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Get In Touch
        </h1>

        {/* Main Container */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center lg:items-start max-w-6xl mx-auto">

          {/* Left Side */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl font-semibold">
              Contact Information
            </h2>

            <p className="text-gray-500 text-sm md:text-base">
              Feel free to reach out for opportunities, collaborations, or just a
              friendly hello 👋
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactData.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 border rounded-lg hover:shadow-md transition"
                  >
                    <Icon size={24} className="text-blue-500" />

                    <div className="text-center sm:text-left">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-white shadow-lg p-5 sm:p-6 rounded-xl w-full">

              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  maxLength="10"
                  onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, "") }}
                  placeholder="Enter your phone number"
                  className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Enter your message"
                  className="w-full mt-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
              <span className="text-sm text-gray-600">{result}</span>
            </form>
          </div>

        </div>
      </section>
    </div>

  )
}


export default Contact