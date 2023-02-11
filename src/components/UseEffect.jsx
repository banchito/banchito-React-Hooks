import { useState, useEffect, useContext } from 'react'
import BackButton from './BackButton';

import ThemeContext from '../context/ThemeContext';

const UseEffect = () => {
  const { darkTheme } = useContext(ThemeContext)

    const [resourceType, setResourceType] = useState('users')
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response  => response.json())
            .then(json => setItems(json))
        
        // return (() => {
        //     setResourceType('posts')
        // })
    }, [resourceType])

    return (
      <>
        <div style={{ margin: '1rem' }}>
          <BackButton url='/' />
        </div>
        <h1> Use Effect</h1>
        <div
          className='btn-group'
          role='group'
          aria-label='Basic outlined example'
        >
          <button
            onClick={() => setResourceType('posts')}
            type='button'
            className={darkTheme ? 'btn btn-dark' : 'btn btn-outline-primary'}
          >
            Posts
          </button>
          <button
            onClick={() => setResourceType('users')}
            type='button'
            className={darkTheme ? 'btn btn-dark' : 'btn btn-outline-primary'}
          >
            Users
          </button>
          <button
            onClick={() => setResourceType('comments')}
            type='button'
            className={darkTheme ? 'btn btn-dark' : 'btn btn-outline-primary'}
          >
            Comments
          </button>
        </div>
        <h1>{resourceType}</h1>
        {items.map((item) => (
          <pre key={item.id}>{JSON.stringify(item)}</pre>
        ))}
      </>
    )
}

export default UseEffect;
