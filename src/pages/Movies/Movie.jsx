import Banner from "../../components/Banner/Banner.jsx";
import React from "react";
import MovieCard from "../../components/Movies/MovieCard.jsx";
import { useMovies } from "../../contexts/MoviesContext";

export default function Movie() {
    const { movies, loading, error, loadMoreMovies, toggleFavorite } = useMovies();

    return (
        <div className="w-full min-h-screen flex flex-col">
            <Banner/>
            <div className="flex-1 w-full max-w-full px-1 sm:px-4 py-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Browse All Movies</h2>

                {loading && movies.length === 0 ? (
                    <div className="text-center py-8">Loading movies...</div>
                ) : error ? (
                    <div className="text-center text-red-500 py-8">{error}</div>
                ) : (
                    <div className="
                        grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6
                        xl:grid-cols-8 px-4 gap-2 justify-items-center
                    ">
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie._id}
                                movie={movie}
                                isFavorite={movie.isFavorite || false}
                                onToggleFavorite={() => toggleFavorite(movie._id)}
                            />
                        ))}
                    </div>
                )}

                <div className="text-center mt-4 sm:mt-6">
                    <button
                        className="px-4 sm:px-6 py-2 bg-blue-600 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition"
                        onClick={loadMoreMovies}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Load More Movies"}
                    </button>
                </div>
            </div>
        </div>
    );
}
