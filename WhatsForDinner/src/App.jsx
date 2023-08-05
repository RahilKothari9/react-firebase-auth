import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
    
  return (
    <>
      <div>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path='/register' element={<Signup/>} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
      <h1>Hi</h1>
    </>
  )
}

export default App
