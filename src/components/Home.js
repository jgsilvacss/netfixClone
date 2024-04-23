import React, { useEffect, useState } from "react";
import { Box, Card, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";


function Home() {
  const [movies, setMovies] = useState([]);

  const getMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=824cd7fe0126902395b9fe320180c886"
      ); // Fixed endpoint
      const json = await response.json();
      setMovies(json.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div style={{backgroundColor: '#181818',}}>
      <Grid container spacing={2} style={{ paddingTop: "20px", paddingRight: "20px", paddingLeft: "20px"}}>
        {movies.map((movie) => {
          return (
            <Grid item xs={3}>
              <Box>
                <Link to="/movieDetails" state={{movie: movie}}>
                <Card>
                    <CardMedia
                      component="img"
                      height="400px"
                      image={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                    />
                </Card>
                </Link>
                
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export { Home }; // Export correctly
