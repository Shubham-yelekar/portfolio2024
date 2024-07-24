import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()  //context created

// created a custom hook to to use context that haae argument 'ThemeContext', which has all of aur theme related data
export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) =>{

  // usestate for handeling the dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  // a function to toggle the state
  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState)
  }

  //darkmode and light mode variables that to be added to the data atribute
  const theme = isDarkMode ? "dark" : "light";

  useEffect(()=>{
      document.documentElement.setAttribute('data-theme', theme);
  }, [isDarkMode])

  // exporting toggletheme and theme variable with the method

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>

}