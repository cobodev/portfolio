import { useEffect, useState } from "react";
import { LightOffIcon, LightOnIcon } from "../icons";

function Header() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(userPrefersDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <div className='flex justify-between h-[5vh]'>
      <div>
        { theme === 'light' && <LightOffIcon className="w-[1.8rem] h-[1.8rem] m-2" onClick={toggleTheme} /> }
        { theme === 'dark' && <LightOnIcon className="w-[1.8rem] h-[1.8rem] m-2" onClick={toggleTheme} /> }
      </div>
      <div className='text-lg font-bold tracking-widest my-2 mx-3'>
        <span className=''>cobo</span>
        <span className=''>.dev</span>
      </div>
    </div>
  )
}

export default Header;
