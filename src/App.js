
import { Container } from 'react-bootstrap';
import './App.css';
import Navbarr from './components/Navbarr';
import MoviesLists from './components/MoviesLists';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieDetails from './components/MovieDetails';

function App() {

const [movies , setMovies] = useState([])
const [pageCount, setpageCount] = useState(0)

const getAllmoviex =async ()=> {
  const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=0dcfc9be0f1354092fba9f45f4497902&language=ar")

  setMovies(res.data.results);
  setpageCount(res.data.total_pages)

}


const getPage = async (page) => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0dcfc9be0f1354092fba9f45f4497902&language=ar&page=${page}`)
  setMovies(res.data.results)
  setpageCount(res.data.total_pages)
}


useEffect(() => {
 getAllmoviex();


 
}, [])

const search = async (word) => {
  if (word === "") {
    getAllmoviex();
  } else {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0dcfc9be0f1354092fba9f45f4497902&query=${word}&language=ar`)
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  }
}






  return (
    <div className="font color-body ">
    <Navbarr search={search}/>
    <Container>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MoviesLists movies={movies} getPage={getPage} pageCount={pageCount} />} />

      <Route path="/movie/:id" element={<MovieDetails />} />

    </Routes>
  </BrowserRouter>

   
  
    </Container>
    </div>
  );
}

export default App;
