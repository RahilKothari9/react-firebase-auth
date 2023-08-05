import React, {useState, useRef} from 'react';
import { TextField, Button, Container, Stack, Alert } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext';
import { AuthProvider } from '../contexts/AuthContext';
import { signIn } from '../config/firebase';
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../config/firebase"

 
const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login, currentUser } = useAuth()
    const history = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        
       
        try {
            setError('');
            setLoading(true);
            await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            history('/')
            } catch (err) {
                setError('Failed to Login')
                //alert(err.message);
            }
            setLoading(false);
    }
 
    return (
        <AuthProvider>
            <React.Fragment>
            <h2>Login</h2>
            {currentUser.email}
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    
                    inputRef={emailRef}
                    
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    
                    inputRef={passwordRef}
                    
                    required
                    fullWidth
                    sx={{mb: 4}}
                />

                
                
                <Button disabled= {loading} variant="outlined" color="secondary" type="submit">Log In</Button>
            </form>
            <small>Need an account? <Link to="/register">Register Here</Link></small>
     
        </React.Fragment>
        </AuthProvider>
        
    )
}
 
export default Login;
