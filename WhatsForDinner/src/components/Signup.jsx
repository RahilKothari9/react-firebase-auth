import React, {useState, useRef} from 'react';
import { TextField, Button, Container, Stack, Alert } from '@mui/material';
import { Link } from "react-router-dom"
import { useAuth } from '../contexts/AuthContext';
import { AuthProvider } from '../contexts/AuthContext';
 
 
const Signup = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }
        
        try {
            setError(' ');
            setLoading(true);
            console.log(emailRef.current.value);
            console.log(passwordRef.current.value);
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError('Failed to create an account');
        }
        setLoading(false);
    }
 
    return (
        <AuthProvider>
            <React.Fragment>
            <h2>Register Form</h2>
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
            {/* <small>Already have an account? <Link to="/login">Login Here</Link></small> */}
     
        </React.Fragment>
        </AuthProvider>
        
    )
}
 
export default Signup;