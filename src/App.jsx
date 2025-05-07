import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import Movie from "./pages/Movies/Movie.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={ <LandingPage/> }/>
            <Route path="/movies" element={ <Movie /> }/>
        </Routes>
    )
}

export default App
