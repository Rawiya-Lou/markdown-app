import React, { useEffect, useState } from 'react'

export const ToggleTheme = () => {
    const [isDark, setIsDark] = useState(() => {
        try{
            if(typeof window !== 'undefined'){
                let theme = localStorage.getItem('theme')
                if (theme) {
                    return theme = 'dark'
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches; 
            }
            return false
        }catch(error){console.error(error)}
    });

    useEffect(()=>{
        const root = window.document.documentElement;
        if(isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        }else{
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light');
        }
    },[isDark])
  return (
    <button onClick={()=> setIsDark(!isDark)} className='p-2 rounded-lg bg-slate dark:bg-slate-800 hover:ring-2 ring-blue-500 transition-all cursor-pointer'>
        {isDark ? '🌙': '🌞'}
    </button>
  )
}
