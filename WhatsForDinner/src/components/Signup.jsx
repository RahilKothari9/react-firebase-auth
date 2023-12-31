import React, {useState, useRef} from 'react';
import { TextField, Button, Container, Stack, Alert } from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext';
import { AuthProvider } from '../contexts/AuthContext';

import {createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../config/firebase"

 
const Signup = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }
        if(passwordRef.current.value.length < 6) {
            return setError('Passwords must be 6 or more characters');
        }
        
        try {
            setError('');
            setLoading(true);
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            history('/')
          } catch (err) {
            
            setError('Failed to Register')
            
          }
        // try {
        //     setError(' ');
        //     setLoading(true);
            
        //     await signup(emailRef.current.value, passwordRef.current.value);
        // } catch {
        //     setError('Failed to create an account');
        // }
        setLoading(false);
    }
 
    return (
        <AuthProvider>
            <React.Fragment>
            <h2>Register</h2>
            {/* {JSON.stringify({currentUser})} */}
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

                <TextField
                    type="password"
                    variant='outlined'
                    color='secondary'
                    label="Password Confirmation"
                    inputRef={passwordConfirmRef}
                    
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                
                <Button disabled= {loading} variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
            <small>Already have an account? <Link to="/login">Login Here</Link></small>
     
        </React.Fragment>
        </AuthProvider>
        
    )
}
 
export default Signup;