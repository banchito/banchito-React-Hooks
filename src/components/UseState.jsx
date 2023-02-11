import { useState, useContext } from 'react'
import BackButton from './BackButton'
import ThemeContext from '../context/ThemeContext'

const UseState = () => {
  const [count, setCount] = useState(0)
  const { darkTheme } = useContext(ThemeContext)
    
    const decrement = () => {
        // setCount(count - 1)
        setCount((prevState) => prevState - 1)
    }

    const increment = () => {
      // setCount(count + 1)
      setCount((prevState) => prevState + 1)
    }

  return (
    <div>
      <div style={{ margin: '1rem' }}>
        <BackButton url='/' />
      </div>

      <div>
        <button
          onClick={increment}
          className={darkTheme ? 'btn btn-dark ' : 'btn btn-primary'}
        >
          + count
        </button>

        <p style={{ margin: '1rem' }}>{count}</p>
        <button
          onClick={decrement}
          className={darkTheme ? 'btn btn-outline-dark ' : 'btn btn-primary'}
        >
          - count
        </button>
      </div>
    </div>
  )
}

export default UseState
