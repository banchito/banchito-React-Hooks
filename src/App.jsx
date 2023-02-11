import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import UseContext from './components/UseContext'
import UseEffect from './components/UseEffect'
import UseState from './components/UseState'

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <div className='container mt-5'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/useState' element={<UseState />} />
              <Route path='/useEffect' element={<UseEffect />} />
              <Route path='/useContext' element={<UseContext />} />
            </Routes>
          </div>
        </Router>
        <ToastContainer />
      </ThemeProvider>
    </>
  )
}

export default App
