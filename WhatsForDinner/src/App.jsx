import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
    
  return (
    <>
      <div>
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<Dashboard/>}/>
              <Route path='/register' element={<Signup/>} />
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
      <h1>Hi</h1>
    </>
  )
}

export default App
