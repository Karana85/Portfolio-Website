import React from 'react'
import Htmlcssbootcamp from '../images/Htmlcssbootcamp.jpg'
import Appreciationletter from '../images/Appreciationletter.jpg'
import Gsacertificate from '../images/Gsacertificate.jpg'
import Reliancefrontend from '../images/Reliancefrontend.jpg'

const DataCertificate = [
  {
    id: 1,
    title: "HTML & CSS Bootcamp",
    issuer: "SkillEcted",
    date: "26 December 2024",
    type: "Participation",
    image: Htmlcssbootcamp,
    description:
      "Participated in a hands-on bootcamp focused on building responsive websites using HTML and CSS fundamentals."
  },
  {
    id: 2,
    title: "Letter of Appreciation",
    issuer: "Google Student Ambassador Program",
    date: "31 December 2025",
    type: "Appreciation",
    image: Appreciationletter,
    description:
      "Recognized for actively referring students and contributing to program growth, improving participation and overall impact."
  },
  {
    id: 3,
    title: "Google Student Ambassador ",
    issuer: "Google Gemini & PING Network",
    date: "31 December 2025",
    type: "Participation",
    image: Gsacertificate,
    description:
      "Awarded for active participation in the ambassador program, leadership collaboration, and learning enthusiasm."
  },
  {
    id: 4,
    title: "Front-end Web Development",
    issuer: "Reliance Foundation Skilling Academy",
    date: "05 July 2025",
    type: "Completion",
    image: Reliancefrontend,
    description:
      "Successfully completed a professional course in front-end web development covering modern web technologies and best practices."
  }
];

const Certificates = () => {
  return (

    <div id='Certificates' className='min-h-screen pb-10 scroll-mt-18  bg-gradient-to-br from-yellow-100 via-sky-100 to-indigo-100 dark:from-slate-950 dark:via-indigo-900 dark:to-amber-700'>
      <div className='flex md:justify-around items-center flex-wrap flex-col h-full md:flex-row  '>
        <h1 className='w-full text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-10 md:mt-20 dark:text-slate-50'>Certificates</h1>
        {DataCertificate.map((data) => {
          return (
            <div className='w-80 bg-white/90 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-700/70 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition mt-10  ' key={data.id}>
              <div className='bg-slate-100 dark:bg-slate-800 text-center py-3'>
                <h2 className='text-base md:text-xl font-semibold text-slate-900 dark:text-slate-100'>{data.title}</h2>
              </div>
              <img className='h-40 w-full object-cover' src={data.image} alt={data.title} />
              <div className='p-4 space-y-2 text-slate-700 dark:text-slate-300'>
                <p className='font-medium'>{data.issuer}</p>
                <p className='text-sm'>{data.date}</p>
                <p className='text-sm'>{data.description}</p>
              </div>
              <button onClick={() => window.open(data.image, '_blank')} className='w-full py-3 bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/30 transition dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:shadow-indigo-900/40'>
                View Certificate
              </button>
            </div>
          )
        })}
      </div>
    </div>
    

  )
}

export default Certificates




