import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import { AuthProvider } from './contexts/AuthContext'

function App() {
    
  return (
    <>
      
      <AuthProvider>
          <Signup/>
      </AuthProvider>
        
        <Login/>
    </>
  )
}

export default App
