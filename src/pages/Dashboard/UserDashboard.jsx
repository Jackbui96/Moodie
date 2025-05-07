import React, { useState, useEffect } from 'react';
import {
    FaHeart, FaRegHeart, FaChevronDown, FaChevronUp,
    FaUser, FaFilm, FaList, FaCog, FaSignOutAlt
} from 'react-icons/fa';
import MovieCard from "../../components/Movies/MovieCard.jsx";
import Banner from "../../components/Banner/Banner.jsx";

const allMovies = [
    {
        _id: '1',
        title: 'Inception',
        posterUrl: 'ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg',
        releaseYear: 2010,
        rating: 8.8,
        genre: ['Sci-Fi', 'Action', 'Thriller'],
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
    },
    {
        _id: '2',
        title: 'The Shawshank Redemption',
        posterUrl: '9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
        releaseYear: 1994,
        rating: 9.3,
        genre: ['Drama', 'Crime'],
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
        _id: '3',
        title: 'The Dark Knight',
        posterUrl: 'qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        releaseYear: 2008,
        rating: 9.0,
        genre: ['Action', 'Crime', 'Drama'],
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
    },
    {
        _id: '4',
        title: 'Pulp Fiction',
        posterUrl: 'vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg',
        releaseYear: 1994,
        rating: 8.9,
        genre: ['Crime', 'Drama'],
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
    },
    {
        _id: '5',
        title: 'The Lord of the Rings: The Return of the King',
        posterUrl: 'rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
        releaseYear: 2003,
        rating: 8.9,
        genre: ['Adventure', 'Drama', 'Fantasy'],
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.'
    },
    {
        _id: '6',
        title: 'Forrest Gump',
        posterUrl: 'arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
        releaseYear: 1994,
        rating: 8.8,
        genre: ['Drama', 'Romance'],
        description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.'
    },
    {
        _id: '7',
        title: 'The Matrix',
        posterUrl: 'dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg',
        releaseYear: 1999,
        rating: 8.7,
        genre: ['Action', 'Sci-Fi'],
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
    },
    {
        _id: '8',
        title: 'Goodfellas',
        posterUrl: '/api/placeholder/250/375',
        releaseYear: 1990,
        rating: 8.7,
        genre: ['Biography', 'Crime', 'Drama'],
        description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.'
    },
    {
        _id: '9',
        title: 'Fight Club',
        posterUrl: 'pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        releaseYear: 1999,
        rating: 8.8,
        genre: ['Drama'],
        description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.'
    },
    {
        _id: '10',
        title: 'The Silence of the Lambs',
        posterUrl: 'uS9m8OBk1A8eM9I042bx8XXpqAq.jpg',
        releaseYear: 1991,
        rating: 8.6,
        genre: ['Crime', 'Drama', 'Thriller'],
        description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.'
    }
];

export default function UserDashboard() {
    const [favorites, setFavorites] = useState([]);
    const [randomMovies, setRandomMovies] = useState([]);
    const [username] = useState('John Doe');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const getRandomMovies = () => {
        return [...allMovies].sort(() => 0.5 - Math.random()).slice(0, 5);
    };

    useEffect(() => {
        setRandomMovies(getRandomMovies());
    }, []);

    const handleFavoriteToggle = (movieId) => {
        setFavorites((prev) =>
            prev.includes(movieId)
                ? prev.filter((id) => id !== movieId)
                : [...prev, movieId]
        );
    };

    const refreshMovies = () => {
        setRandomMovies(getRandomMovies());
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <Banner />
            <main className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
                {sidebarOpen && (
                    <aside className="md:w-64 w-full bg-gray-800 p-4 rounded-lg space-y-2">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                        {[
                            { label: 'Profile', icon: FaUser },
                            { label: 'My Movies', icon: FaFilm },
                            { label: 'Favorites', icon: FaHeart },
                            { label: 'Watchlist', icon: FaList },
                            { label: 'Settings', icon: FaCog },
                            { label: 'Logout', icon: FaSignOutAlt, color: 'hover:text-red-400' },
                        ].map(({ label, icon: Icon, color }, i) => (
                            <a
                                key={i}
                                href="#"
                                className={`flex items-center px-4 py-2 rounded hover:bg-gray-700 text-gray-300 hover:text-blue-400 ${color}`}
                            >
                                <Icon className="mr-3" /> {label}
                            </a>
                        ))}
                    </aside>
                )}

                <section className="flex-grow">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold">Recommended For You</h1>
                        <button
                            onClick={refreshMovies}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                        >
                            Refresh
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {randomMovies.map((movie) => (
                            <MovieCard
                                key={movie._id}
                                movie={movie}
                                isFavorite={favorites.includes(movie._id)}
                                onFavoriteToggle={handleFavoriteToggle}
                            />
                        ))}
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Your Stats</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { label: 'Movies Watched', value: 28 },
                                { label: 'Favorites', value: favorites.length },
                                { label: 'Watchlist', value: 12 },
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-gray-800 p-4 rounded-lg">
                                    <h3 className="text-gray-400 text-sm">{stat.label}</h3>
                                    <p className="text-2xl font-bold">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
