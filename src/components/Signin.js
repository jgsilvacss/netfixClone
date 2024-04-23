import React from "react";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { Button } from "@mui/material";
import netflix from "../images/netflix.png";
import {auth, googleAuth} from "../firebase/setup";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignIn() {

    const navigate = useNavigate();

    const googleSIgnin =  async() => {
        try {
            await signInWithPopup(auth, googleAuth);
            setTimeout(() => {
                auth.currentUser?.emailVerified && navigate('/')
            }, 2000)
            toast.success('Signed in successfully')
          
        } catch (error) {
            console.log(error)
        }
    }


       

    return (
        <div style={{backgroundColor: "#181818", height: "100vh", padding: "20px"}}>
            <ToastContainer autoClose={2000}/>
            <img style ={{width: '100px', height: '100px'}} src={netflix}/>
            <div style={{position: "fixed", left: "45%", top: "35%"}}>
            <Button variant="contained"  color ="error" onClick={googleSIgnin}>SignIn with Google</Button>
            <br></br>
            <h2 style={{color: "white"}}>Let's Start <br/> to Explore Movies <br/>from Here.</h2>
            </div>
        </div>
    );
}

export default SignIn