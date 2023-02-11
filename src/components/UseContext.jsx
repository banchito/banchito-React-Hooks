import { useContext, useState, useEffect } from 'react';
import BackButton from './BackButton';
import ThemeContext from '../context/ThemeContext';
import { toast } from 'react-toastify'


const UseContext = () => {
  const { darkTheme, dispatch, message } = useContext(ThemeContext);
  const [isDarkModeOn, setIsDarkModeOn] = useState(darkTheme)

  const toggleTheme = () => {
    setIsDarkModeOn((prevState) => !prevState)
    
  }

  useEffect(() => {
    if (isDarkModeOn) {
      dispatch({ type: 'DARK_MODE_ON'  })
    } else {
      dispatch({ type: 'DARK_MODE_OFF' })
    }
    
  }, [isDarkModeOn])
  
  useEffect(() => {
    toast.success(message)
  },[message])

    return (
      <div>
        <div style={{ margin: '1rem' }}>
          <BackButton url='/' />
        </div>
        <button
          onClick={toggleTheme}
          type='button'
          className={darkTheme ? 'btn btn-dark' : 'btn btn-primary'}
        >
          {darkTheme ? 'Switch to Light' : 'Switch to Dark'}
        </button>
      </div>
    )
}

export default UseContext;
