import React, { createContext, useContext, useEffect } from 'react'
import {useState} from 'react'
import styles from '../styles/Home.module.css'

const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    switch (theme) {
      case "light": {
        document.documentElement.style.setProperty("--background-color", "#222222");
        document.documentElement.style.setProperty("--font-color", "#efefef");
        document.documentElement.style.setProperty("--border-top", "1px solid #eaeaea")
        break;
      }
      case "dark": {
        document.documentElement.style.setProperty("--background-color", "#efefef");
        document.documentElement.style.setProperty("--font-color", "#222222");
        document.documentElement.style.setProperty("--border-top", "1px solid #222222")
        break;
      }
    }
  },[theme]);

  const toggleTheme = () =>setTheme((prev) =>(prev === "light" ? "dark" : "light"));

  return toggleTheme
}

const themeContext = createContext<ReturnType<typeof useTheme>>(() => {})

export const ThemeProvider: React.FC = (props) => {
  const toggleTheme = useTheme()

  return (
    <themeContext.Provider value={toggleTheme}>
      {props.children}
    </themeContext.Provider>
  )
}

export const useToggleTheme = () => useContext(themeContext)

const Change = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.footer}></div>
      <button className={styles.toggle} onClick={useToggleTheme()}>テーマを切り替える</button>
    </div>
  );
}

export default Change