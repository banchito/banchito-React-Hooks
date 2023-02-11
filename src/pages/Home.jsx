import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'

const Home = () => {
const { darkTheme } = useContext(ThemeContext)
  return (
    <>
      <h1 className='mb-3'>React Hooks</h1>{' '}
      <h5>
        Code examples from{' '}
        <a href='https://www.youtube.com/@WebDevSimplified' target='_blank'>
          Web Dev Simplified
        </a>{' '}
      </h5>
      <ul className='list-group  '>
        <Link
          className={
            darkTheme
              ? 'list-group-item list-group-item-dark'
              : 'list-group-item list-group-item-action'
          }
          to='/useState'
        >
          Use State
        </Link>
      </ul>
      <ul className='list-group'>
        <Link
          className={
            darkTheme
              ? 'list-group-item list-group-item-dark'
              : 'list-group-item list-group-item-action'
          }
          to='/useEffect'
        >
          Use Effect
        </Link>
      </ul>
      <ul className='list-group'>
        <Link
          className={
            darkTheme
              ? 'list-group-item list-group-item-dark'
              : 'list-group-item list-group-item-action'
          }
          to='/useContext'
        >
          Use Context
        </Link>
      </ul>
    </>
  )
}

export default Home
