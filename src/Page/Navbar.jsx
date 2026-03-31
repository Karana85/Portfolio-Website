import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlinePlaylistRemove } from "react-icons/md";

function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("Home");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "Home",
        "Education",
        "Programming",
        "Certificates",
        "Contact",
      ];

      let current = "Home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top - 120 &&
            window.scrollY < top + height - 120
          ) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center h-[9vh] px-6 bg-white/80 backdrop-blur-md border-b border-indigo-200/50 dark:bg-slate-950/70 dark:border-indigo-500/20 fixed w-full top-0 z-50">

        <h1 className="font-bold text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-300 dark:to-fuchsia-300">My Portfolio</h1>

        <div className="hidden md:flex gap-9 text-lg font-semibold">
          {['Home', 'Education', 'Programming', 'Certificates', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={
                active === item
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1 dark:text-indigo-300 dark:border-indigo-400'
                  : 'text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-300'
              }
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center md:hidden text-slate-700 dark:text-slate-200" onClick={() => setMenu(!menu)}>
          {menu ? <MdOutlinePlaylistRemove /> : <IoMdMenu />}
        </div>


      </nav>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed  bottom-2 right-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/30 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:shadow-indigo-900/40"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
      {menu && (
        <div className="md:hidden fixed w-full top-[9vh] flex flex-col gap-4 p-4 bg-white dark:bg-slate-950 z-50">
          {['Home', 'Education', 'Programming', 'Certificates', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenu(false)}
              className={
                active === item
                  ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1 dark:text-indigo-300 dark:border-indigo-400'
                  : 'text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-300'
              }
            >
              {item}
            </a>))}
        </div>
      )}
    </>
  );
}

export default Navbar;



