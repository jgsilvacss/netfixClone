import React from "react";
import {Main} from "./components/Main";
import {Route, Routes} from "react-router-dom";
import SignIn from "./components/Signin";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/movieDetails" element={<MovieDetails/>} />
      </Routes>
    </div>
  )
}

export default App;
