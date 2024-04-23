import React from "react";
import { useState, useEffect,  } from "react";
import { Box, Card, CardContent, CardMedia, Grid, Button } from "@mui/material";
import netflix from "../images/netflix.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/setup";
import { signOut } from "firebase/auth";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {

  const logOut = async () => {
    try {
    await signOut(auth)
    toast.success('Logged out successfully', {
      theme: 'dark',
    })
  }
    catch (error) {
      console.log(error)
    }
    
  }
  const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

  const getMovie =  () => {
    try {
       fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=824cd7fe0126902395b9fe320180c886") // Fixed endpoint
        .then((response) => response.json())
        .then((json) => setMovies(json.results));
    } catch (error) {
      console.log(error);
    }
  };

  const signInClick = () => {
    navigate('/signin')

  }

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movies[0])

    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://image.tmdb.org/t/p/original${movies[8]?.poster_path})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '600px', width: '100%'}}>
           <ToastContainer autoClose={2000}/>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
            <img  style ={{width: '140px'}} src={netflix}/>
            <div>
            {auth.currentUser?.emailVerified ? <Button onClick= {logOut} color= 'error' variant="contained" sx={{height: '40px', marginLeft: '10px'}}>Logout</Button> 
            :<Button onClick= {signInClick} color= 'error' variant="contained" sx={{height: '40px'}}>SignIn</Button>
            }

            </div>

                </div> 
                <div style={{padding: '20px', color: '#f1f1f1'}}>
                  <h1 style={{color: '#f1f1f1', fontSize: '70px', fontFamily:`initial`}}>{movies[8]?.original_title}</h1>
                  <h3 style={{color: '#f1f1f1'}}>{movies[8]?.overview}</h3>
                  <Button variant="contained" sx={{color: "black", bgcolor: "white", fontWeight: 'bold'}}>Play Trailer</Button>

                </div>
           
        </div>
    )
}

export {Navbar}