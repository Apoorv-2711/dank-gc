'use client';
import React, { useEffect, useState } from 'react'
import {FaSun, FaMoon} from 'react-icons/fa'

export default function ThemeToggleButton() {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        const t = theme === 'light' ? 'dark' : 'light';
        setTheme(t)
    }
    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'light') {
            root.classList.remove('dark')
        } else {
            root.classList.add('dark')
        }
    },[theme])
  return (
    <button type="button" onClick={toggleTheme} title='Theme toggle' className='grid place-items-center w-10 h-10 rounded-full bg-gray-600 '>
        {theme === 'light' ? <FaSun className='text-yellow-400' /> : <FaMoon className='text-yellow-400' />}
    </button>
  )
}
