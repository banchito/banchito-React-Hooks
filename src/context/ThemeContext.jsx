import { createContext , useReducer } from 'react'
import themeReducer from './ThemeReducer'
const ThemeContext = createContext()

export const  ThemeProvider = ({ children }) => {
  const initialState = {
    darkTheme: false,
    
  }

  const [state, dispatch] = useReducer(themeReducer, initialState)

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}
 
export default ThemeContext