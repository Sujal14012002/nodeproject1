import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route,useNavigate } from 'react-router-dom'
// import "./App.css"
function App() {
  return (
    <div>
      <button onClick={()=>{navigate(-1)}}>Back</button>
      <form>
        <input
          value={movieName}
          onChange={event => setMovieName(event.target.value)}
          name="movie-name"
          type="text"
          placeholder="Enter movie name" />

        <input
          value={movieDescription}
          onChange={event => setMovieDescription(event.target.value)}
          name="movie-description"
          type="text"
          placeholder="Enter movie description" />

        <input
          // value={image} 
          onChange={event => setImage(event.target.files)}
          name="image"
          type="file" />

        <input
          // value={video} 
          onChange={event => setVideo(event.target.files)}
          name="video"
          type="file" />
        <button onClick={submitMovieData} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;