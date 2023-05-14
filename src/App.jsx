import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import Home from '../src/pages/home/Home'
import Signin from '../src/pages/signin/Signin'
import Signup from '../src/pages/signup/Signup'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
