import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate()

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Banner/>
            <div className="px-6 flex flex-col md:flex-row items-center justify-center py-16">
                <div className="md:w-1/2 mb-16 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Discover Your Next Favorite Movie
                    </h1>
                    <p className="text-xl mb-8 text-gray-300">
                        Moodie uses advanced AI to recommend movies based on your taste.
                        No more endless scrolling - find films you'll actually love.
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            className="px-8 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                            Get Started
                        </button>
                        <button
                            className="px-8 py-3 bg-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-600 transition">
                            How It Works
                        </button>
                        <button
                            onClick={() => navigate('/movies')}
                            className="px-8 py-3 bg-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
                            Browse All Movies
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-6">
                        <div className="text-blue-400 text-2xl mb-4">🎯</div>
                        <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
                        <p className="text-gray-400">Personalized suggestions based on your viewing history and
                            preferences.</p>
                    </div>
                    <div className="p-6">
                        <div className="text-blue-400 text-2xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold mb-2">Advanced Discovery</h3>
                        <p className="text-gray-400">Find hidden gems and new releases tailored to your taste.</p>
                    </div>
                    <div className="p-6">
                        <div className="text-blue-400 text-2xl mb-4">🎬</div>
                        <h3 className="text-xl font-semibold mb-2">Track Your Movies</h3>
                        <p className="text-gray-400">Build your watchlist and keep track of what you've seen.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
