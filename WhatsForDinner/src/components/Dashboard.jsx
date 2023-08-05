import React, {useState} from 'react'
import { Button, Alert } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history('/login')
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <div>Dashboard
      {error && <Alert variant="danger">{error}</Alert>}
    <Button variant="contained" onClick={handleLogout}>Logout</Button>
    </div>
  )
}
