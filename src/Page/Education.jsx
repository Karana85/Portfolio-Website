import React from 'react'
import KCELOGO from '../images/KCELOGO.png'
import Bspadalkar from '../images/BSLogo.png'

const DataEducation = [
  {
    id: 1,
    institution: "Khandesh College Education Society's College of Engineering And Management Jalgaon",
    degree: "B.Tech in Electronics And Computer Engineering",
    year: "2022 - 2026",
    img: KCELOGO,
    Percentage: "7.25 CGPA",
    description: "Pursuing a Bachelor's degree in Electronics and Computer Engineering, focusing on the intersection of hardware and software technologies."
  },
  {
    id: 2,
    institution: "BS Padalkar Kanishta Mavavidyalay Aurangabad",
    degree: "Higher Secondary Education 12th Science",
    year: "2019 - 2021",
    img: Bspadalkar,
    Percentage: "86%",
    description: "Completed Higher Secondary Education with a focus on Science, laying a strong foundation for future studies in engineering."
  },
  {
    id: 3,
    institution: "Tanwani Vidya Mandir, Bajajnagar, Aurangabad",
    degree: "State Board of Maharashtra 10th",
    year: "2018 - 2019",
    img: `${KCELOGO}`,
    Percentage: "68.20%",
    description: "Completed Secondary Education with a strong academic record, demonstrating dedication and a commitment to learning."
  }
]

const Education = () => {
  return (
    <div id='Education' className='min-h-screen pb-10 scroll-mt-17 bg-gradient-to-br from-violet-100 via-rose-100 to-amber-50 dark:from-gray-900 dark:via-violet-900 dark:to-indigo-900'>
      <div className='pt-10'>
        <h1 className='w-full text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50'>Education</h1>
      </div>



      {DataEducation.map((data) => {
        return (
          <div className='flex justify-center mt-10' key={data.id}>
            <div className='max-w-3xl w-80 md:w-full bg-white/90 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-700/70 rounded-3xl p-6 shadow-lg'>
              <div className='flex flex-col md:flex-row items-center gap-6 '>
                <img src={data.img} alt={data.institution} className='h-24 w-24 rounded-full object-contain' />
                <div className='text-slate-700 dark:text-slate-300 space-y-2'>
                  <div className='text-base md:text-lg font-semibold text-slate-900 dark:text-slate-50'>{data.institution}</div>
                  <div className='text-sm'>{data.degree}</div>
                  <div className='text-sm'>{data.year}</div>
                  <div className='text-sm'>{data.Percentage}</div>
                </div>
              </div>
            </div>
          </div>
        )
      })}




    </div>
  )
}

export default Education