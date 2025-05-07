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
        <div className="w-[240px] bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
            <Link to={ `/movies/${ movie._id }` }>
                <img
                    src={ `https://image.tmdb.org/t/p/w500/${ movie.posterUrl }` || '/placeholder-poster.jpg' }
                    alt={ movie.title }
                    className="h-48 w-full object-cover rounded-t-lg"
                />
            </Link>

            <div className="p-3">
                <div className="flex items-center gap-2">
                    <Link to={ `/movies/${ movie._id }` } className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white truncate flex-1 mr-2 overflow-hidden relative group">
                            <span
                                ref={titleRef}
                                className={`block whitespace-nowrap ${isTruncated ? 'group-hover:animate-scroll-text' : ''}`}
                            >
                                { movie.title }
                            </span>
                        </h3>
                    </Link>

                    { user && (
                        <button
                            onClick={ () => onFavoriteToggle(movie._id) }
                            className="text-red-500 text-lg flex-shrink-0 hover:cursor-pointer"
                        >
                            { isFavorite ? <FaHeart/> : <FaRegHeart/> }
                        </button>
                    ) }
                </div>

                <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>{ movie.releaseYear }</span>
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs">
                        { movie.rating.toFixed(1) }
                    </span>
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
