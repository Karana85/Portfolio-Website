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
      <section className="min-h-screen px-4 sm:px-6 md:px-16 lg:px-24 py-10 pt-10 bg-gradient-to-br from-indigo-100 via-fuchsia-100 to-pink-100 dark:from-slate-950 dark:via-indigo-950 dark:to-fuchsia-900">


        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-slate-900 dark:text-slate-50">
          Get In Touch
        </h1>

        {/* Main Container */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center lg:items-start max-w-6xl mx-auto">

          {/* Left Side */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100">
              Contact Information
            </h2>

            <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base">
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
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-3 p-4 border border-slate-200/80 dark:border-slate-700/80 rounded-lg bg-white/80 dark:bg-slate-900/80 hover:shadow-lg transition"
                  >
                    <Icon size={24} className="text-indigo-600 dark:text-indigo-300" />

                    <div className="text-center sm:text-left">
                      <h3 className="font-medium text-slate-800 dark:text-slate-200">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-white/90 dark:bg-slate-950/80 shadow-lg shadow-slate-900/10 dark:shadow-black/30 p-5 sm:p-6 rounded-xl w-full">

              <div>
                <label className="text-sm font-medium text-slate-800 dark:text-slate-200">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full mt-1 p-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-800 dark:text-slate-200">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full mt-1 p-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-800 dark:text-slate-200">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  maxLength="10"
                  onInput={(e) => { e.target.value = e.target.value.replace(/\D/g, "") }}
                  placeholder="Enter your phone number"
                  className="w-full mt-1 p-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-800 dark:text-slate-200">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Enter your message"
                  className="w-full mt-1 p-2 border border-slate-300 dark:border-slate-700 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 shadow-md shadow-indigo-500/30 transition"
              >
                Send Message
              </button>
              <span className="text-sm text-slate-600 dark:text-slate-400">{result}</span>
            </form>
          </div>

        </div>
      </section>
    </div>

  )
}


export default Contact