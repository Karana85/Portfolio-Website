import React from 'react'




const skills = [
  { name: "JavaScript (ES6+)", category: "Programming Languages", level: 80 },
  { name: "HTML5", category: "Programming Languages", level: 90 },
  { name: "CSS3", category: "Programming Languages", level: 85 },
  { name: "React.js", category: "Frameworks & Libraries", level: 75 },
  { name: "Tailwind CSS", category: "Frameworks & Libraries", level: 85 },
  { name: "VS Code", category: "Tools", level: 80 },
  { name: "Git", category: "Tools", level: 70 },
  { name: "GitHub", category: "Tools", level: 75 },
  { name: "Figma", category: "Tools", level: 65 },
  { name: "Cursor", category: "Tools", level: 90 }
]

const languages = skills.filter(s => s.category === "Programming Languages");
const tools = skills.filter(s => s.category === "Tools");
const frameworks = skills.filter(s => s.category === "Frameworks & Libraries");

const levelWidths = {
  60: 'w-3/5',
  65: 'w-[65%]',
  70: 'w-7/10',
  75: 'w-3/4',
  80: 'w-4/5',
  85: 'w-[85%]',
  90: 'w-[90%]',
};

const getWidthClass = (level) => levelWidths[level] ?? 'w-0';

const Programming = () => {
  return (
    <div id='Programming' className='min-h-screen scroll-mt-17 pb-12 bg-gradient-to-br from-sky-100 via-cyan-100 to-teal-100 dark:from-slate-900 dark:via-sky-900 dark:to-teal-900'>
      <div className='pt-10'>
        <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50'>Programming</h1>
      </div>
      <div className='max-w-7xl mx-auto mt-10 px-6'>
        <div className='grid gap-6 lg:grid-cols-3 items-start'>
          <div className='rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-700/70 p-6 shadow-lg'>
            <h2 className='text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6'>Programming Languages</h2>
            <div className='space-y-5 text-slate-700 dark:text-slate-300'>
              {languages.map((skill) => (
                <div key={skill.name} className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <p className='font-medium'>{skill.name}</p>
                    {skill.level && <span className='text-sm text-slate-500 dark:text-slate-400'>{skill.level}%</span>}
                  </div>
                  {skill.level && (
                    <div className='h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden'>
                      <div className={`h-full rounded-full bg-indigo-600 dark:bg-indigo-500 ${getWidthClass(skill.level)}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className='rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-700/70 p-6 shadow-lg'>
            <h2 className='text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6'>Frameworks & Libraries</h2>
            <div className='space-y-5 text-slate-700 dark:text-slate-300'>
              {frameworks.map((skill) => (
                <div key={skill.name} className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <p className='font-medium'>{skill.name}</p>
                    {skill.level && <span className='text-sm text-slate-500 dark:text-slate-400'>{skill.level}%</span>}
                  </div>
                  {skill.level && (
                    <div className='h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden'>
                      <div className={`h-full rounded-full bg-indigo-600 dark:bg-indigo-500 ${getWidthClass(skill.level)}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className='rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-700/70 p-6 shadow-lg'>
            <h2 className='text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6'>Tools</h2>
            <div className='space-y-5 text-slate-700 dark:text-slate-300'>
              {tools.map((skill) => (
                <div key={skill.name} className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <p className='font-medium'>{skill.name}</p>
                    {skill.level && <span className='text-sm text-slate-500 dark:text-slate-400'>{skill.level}%</span>}
                  </div>
                  {skill.level && (
                    <div className='h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden'>
                      <div className={`h-full rounded-full bg-indigo-600 dark:bg-indigo-500 ${getWidthClass(skill.level)}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programming