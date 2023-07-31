import {useEffect, useState} from "react";

import {ReactComponent as MoonIcon} from "assets/icon-moon.svg";
import {ReactComponent as SunIcon} from "assets/icon-sun.svg";

import styles from './ThemeSwitcher.module.scss';



export const ThemeSwitcher = () => {
    const initialDarkValue = localStorage.getItem('isDark') === 'true';
    const [isDark, setDark] = useState(initialDarkValue)
    const themeText = isDark ? "Light" : "Dark";
    const ThemeIcon = isDark ? SunIcon : MoonIcon

    useEffect(() => {
        localStorage.setItem('isDark', String(isDark));
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    return (
        <div className={styles.switcher} onClick={() => setDark(!isDark)}>
            <span>{themeText}</span>
            <ThemeIcon className={styles.icon}/>
        </div>
    );
}
