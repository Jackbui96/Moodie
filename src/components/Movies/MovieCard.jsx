import React, { useContext, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export default function MovieCard({movie, isFavorite, onFavoriteToggle}) {
    const {user} = useContext(AuthContext);
    const titleRef = useRef(null);
    const [isTruncated, setIsTruncated] = useState(false);

    useEffect(() => {
        const checkIfTruncated = () => {
            const element = titleRef.current;
            if (element) {
                setIsTruncated(element.scrollWidth > element.clientWidth);
            }
        };

        checkIfTruncated();
        // Recheck when window is resized
        window.addEventListener('resize', checkIfTruncated);

        return () => {
            window.removeEventListener('resize', checkIfTruncated);
        };
    }, [movie.title]);

    return (
        <div className="
            w-full aspect-2/3 flex flex-col
            bg-gray-800 rounded-lg shadow-md
            hover:scale-105 transition-transform duration-300
        ">
            <div className="relative">
                <Link to={ `/movies/${ movie._id }` } className="block w-full">
                    <img
                        src={ `https://image.tmdb.org/t/p/w500/${ movie.posterUrl }` || '/placeholder-poster.jpg' }
                        alt={ movie.title }
                        className="w-full object-cover rounded-t-lg"
                    />
                </Link>

                { user && (
                    <button
                        onClick={ () => onFavoriteToggle(movie._id) }
                        className="absolute top-2 right-2 bg-black bg-opacity-50 p-2 rounded-full text-red-500 hover:bg-opacity-70 transition-colors"
                        aria-label={ isFavorite ? "Remove from favorites" : "Add to favorites" }
                    >
                        { isFavorite ? <FaHeart/> : <FaRegHeart/> }
                    </button>
                ) }

                <div className="absolute bottom-0 right-0 m-2">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded font-medium">
                        { movie.rating.toFixed(1) }
                    </span>
                </div>
            </div>

            <div className="p-3 flex-grow flex flex-col">
                <Link to={ `/movies/${ movie._id }` } className="block">
                    <h3 className="text-base font-semibold text-white overflow-hidden relative group">
                        <span
                            ref={ titleRef }
                            className={ `block ${ isTruncated ? 'truncate group-hover:animate-scroll-text' : '' }` }
                        >
                            { movie.title }
                        </span>
                    </h3>
                </Link>

                <div className="flex justify-between items-center mt-1 text-sm text-gray-400">
                    <span>{ movie.releaseYear }</span>
                </div>

                <div className="mt-2 flex gap-1 flex-wrap">
                    { movie.genre.slice(0, 2).map((genre, idx) => (
                        <span
                            key={ idx }
                            className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded"
                        >
                            { genre }
                        </span>
                    )) }
                </div>
            </div>
        </div>
    );
}
