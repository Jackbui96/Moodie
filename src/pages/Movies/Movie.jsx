import Banner from "../../components/Banner/Banner.jsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../../components/Movies/MovieCard.jsx";

export default function Movie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
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
                })

                console.log(`test for response: ${ response }`)

                // Transform the data to match MovieCard expected format
                const transformedMovies = response.data.data.randomMovies.map(movie => ({
                    _id: movie.id,
                    title: movie.title,
                    posterUrl: movie.posterPath?.replace(/^\//, ''), // Remove leading slash if present
                    releaseYear: new Date(movie.releaseDate).getFullYear(),
                    rating: movie.voteAverage,
                    genre: []
                }));

                setMovies(transformedMovies)
            } catch (err) {
                console.error("Error fetching movies:", err)
            }
        }
        fetchMovies();
    }, [])

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Banner/>
            <div className="flex-1 w-full max-w-full px-1 sm:px-4 py-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Browse All Movies</h2>
                <div className="
                    grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6
                    xl:grid-cols-8 2xl:grid-cols-10 px-4 gap-2 justify-items-center
                ">
                    { movies.map((movie) => (
                        <MovieCard
                            key={ movie._id }
                            movie={ movie }
                            isFavorite={ true }
                        />
                    )) }
                </div>
                <div className="text-center mt-4 sm:mt-6">
                    <button
                        className="px-4 sm:px-6 py-2 bg-blue-600 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition">
                        Load More Movies
                    </button>
                </div>
            </div>
        </div>
    )
}
