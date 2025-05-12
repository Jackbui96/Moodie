import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the context
const MoviesContext = createContext();

// Create a custom hook to use the context
export const useMovies = () => useContext(MoviesContext);

// Create provider component
export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            // Check if movies exist in sessionStorage
            const sessionMovies = sessionStorage.getItem('movies');

            if (sessionMovies) {
                // Use movies from sessionStorage if available
                setMovies(JSON.parse(sessionMovies));
                setLoading(false);
                return;
            }

            // Otherwise fetch from API
            try {
                setLoading(true);
                const response = await axios.post("https://api.a-pani.com/v1/movies/graphql", {
                    query: `
                        query RandomMovies {
                            randomMovies {
                                id
                                title
                                overview
                                releaseDate
                                voteAverage
                                voteCount
                                popularity
                                genreIds
                                posterPath
                            }
                        }
                    `
                });

                // Transform the data to match MovieCard expected format
                const transformedMovies = response.data.data.randomMovies.map(movie => ({
                    _id: movie.id,
                    title: movie.title,
                    posterUrl: movie.posterPath?.replace(/^\//, ''), // Remove leading slash if present
                    releaseYear: new Date(movie.releaseDate).getFullYear(),
                    rating: movie.voteAverage,
                    genre: []
                }));

                // Save to state and sessionStorage
                setMovies(transformedMovies);
                sessionStorage.setItem('movies', JSON.stringify(transformedMovies));
                setLoading(false);
            } catch (err) {
                console.error("Error fetching movies:", err);
                setError("Failed to fetch movies. Please try again later.");
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    // Function to load more movies
    const loadMoreMovies = async () => {
        try {
            setLoading(true);
            let batchSize = 10;
            let uniqueNewMovies = [];
            let attempts = 0;
            const maxAttempts = 3; // Limit API calls to prevent infinite loops

            // Get existing movie IDs for quick lookup
            const existingMovieIds = new Set(movies.map(movie => movie._id));

            // Keep fetching until we have enough unique movies or reach max attempts
            while (uniqueNewMovies.length < batchSize && attempts < maxAttempts) {
                console.log("Hello")
                attempts++;

                const response = await axios.post("https://api.a-pani.com/v1/movies/graphql", {
                    query: `
                        query RandomMovies {
                            randomMovies {
                                id
                                title
                                overview
                                releaseDate
                                voteAverage
                                voteCount
                                popularity
                                genreIds
                                posterPath
                            }
                        }
                    `
                });

                // Transform and filter out duplicates
                const fetchedMovies = response.data.data.randomMovies;

                for (const movie of fetchedMovies) {
                    // Skip if we already have enough movies
                    if (uniqueNewMovies.length >= batchSize) break;

                    // Skip if this movie already exists in our current collection
                    if (existingMovieIds.has(movie.id)) {
                        console.log(`Skipping duplicate movie: ${movie.id} - ${movie.title}`);
                        continue;
                    }

                    // Skip if this movie is already in our new batch
                    if (uniqueNewMovies.some(m => m._id === movie.id)) {
                        console.log(`Skipping duplicate in new batch: ${movie.id} - ${movie.title}`);
                        continue;
                    }

                    // Add to our unique new movies
                    uniqueNewMovies.push({
                        _id: movie.id,
                        title: movie.title,
                        posterUrl: movie.posterPath?.replace(/^\//, ''),
                        releaseYear: new Date(movie.releaseDate).getFullYear(),
                        rating: movie.voteAverage,
                        genre: []
                    });

                    // Also add to our lookup set
                    existingMovieIds.add(movie.id);
                }
            }

            // If we didn't get any new unique movies after all attempts
            if (uniqueNewMovies.length === 0) {
                setError("Couldn't find any new unique movies. Try again later.");
                setLoading(false);
                return;
            }

            // Combine with existing movies
            const updatedMovies = [...movies, ...uniqueNewMovies];

            // Update state and sessionStorage
            setMovies(updatedMovies);
            sessionStorage.setItem('movies', JSON.stringify(updatedMovies));
            setLoading(false);
        } catch (err) {
            console.error("Error loading more movies:", err);
            setError("Failed to load more movies. Please try again later.");
            setLoading(false);
        }
    };

    // Function to toggle favorite status
    const toggleFavorite = (movieId) => {
        const updatedMovies = movies.map(movie =>
            movie._id === movieId
                ? { ...movie, isFavorite: !movie.isFavorite }
                : movie
        );

        setMovies(updatedMovies);
        sessionStorage.setItem('movies', JSON.stringify(updatedMovies));
    };

    // Value to be provided to consumers
    const value = {
        movies,
        loading,
        error,
        loadMoreMovies,
        toggleFavorite
    };

    return (
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContext;
