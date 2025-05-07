import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SearchBar({ movies }) {
    const [query, setQuery] = useState('');
    const [filtered, setFiltered] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (query.trim() === '') {
            setFiltered([]);
        } else {
            const q = query.toLowerCase();
            const results = movies.filter(
                (movie) =>
                    movie.title.toLowerCase().includes(q) ||
                    movie.genre.join(' ').toLowerCase().includes(q)
            );
            setFiltered(results);
        }
    }, [query, movies]);

    return (
        <div className="w-full max-w-xl mx-auto mt-6 text-white">
            <input
                type="text"
                placeholder="Search movies..."
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search movies by title or genre"
            />

            {filtered.length > 0 && (
                <ul className="mt-2 bg-gray-900 rounded shadow-lg divide-y divide-gray-700">
                    {filtered.map((movie) => (
                        <li key={movie._id} className="p-3 hover:bg-gray-800">
                            <Link
                                to={`/movies/${movie._id}`}
                                className="block text-blue-400 hover:underline"
                                title={`Go to details for ${movie.title}`}
                            >
                                <h3 className="font-bold">{movie.title}</h3>
                                <p className="text-sm text-gray-400">
                                    {movie.releaseYear} &middot; {movie.genre.join(', ')}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            {/* SEO-friendly metadata */}
            {query && (
                <link
                    rel="canonical"
                    href={`${window.location.origin}${location.pathname}?q=${encodeURIComponent(query)}`}
                />
            )}
        </div>
    );
}
