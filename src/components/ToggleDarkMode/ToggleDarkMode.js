import React, { useState, useEffect } from 'react';
import './Toggle.css';

export const ToggleDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.querySelector("#root > div > div > div > div").className = theme;
    }, [theme]);
    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>THEME</button>

        </div>
    )
}
