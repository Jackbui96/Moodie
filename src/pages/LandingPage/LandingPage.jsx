import React from "react";
import Banner from "../../components/Banner/Banner.jsx";

export default function LandingPage() {
    return (
        <div className="min-w-screen min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <Banner />

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between py-16">
                <div className="md:w-1/2 mb-16 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Discover Your Next Favorite Movie
                    </h1>
                    <p className="text-xl mb-8 text-gray-300">
                        Moodie uses advanced AI to recommend movies based on your taste.
                        No more endless scrolling - find films you'll actually love.
                    </p>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-8 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                            Get Started
                        </button>
                        <button className="px-8 py-3 bg-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-600 transition">
                            How It Works
                        </button>
                        <button className="px-8 py-3 bg-purple-600 rounded-lg text-lg font-semibold hover:bg-purple-700 transition">
                            Browse All Movies
                        </button>
                    </div>
                </div>

                <div className="md:w-5/12 relative">
                    <div className="relative">
                        <div className="w-full h-full bg-gray-800 rounded-2xl p-2 shadow-2xl border border-gray-700">
                            <div className="relative rounded-xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-xl font-bold mb-2">Personalized For You</h3>
                                    <p className="text-gray-300 text-sm mb-4">Based on your unique preferences</p>
                                    <div className="flex space-x-2">
                                        <span className="px-2 py-1 bg-blue-600 rounded-full text-xs">Action</span>
                                        <span className="px-2 py-1 bg-purple-600 rounded-full text-xs">Sci-Fi</span>
                                        <span className="px-2 py-1 bg-green-600 rounded-full text-xs">Drama</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="p-6">
                        <div className="text-blue-400 text-2xl mb-4">🎯</div>
                        <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
                        <p className="text-gray-400">Personalized suggestions based on your viewing history and preferences.</p>
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

            <div className="container mx-auto px-6 py-10 border-t border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-8">Browse All Movies</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {/* Movie Item Skeletons */}
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <div className="h-48 bg-gray-700 animate-pulse"></div>
                            <div className="p-4">
                                <div className="h-4 bg-gray-700 rounded animate-pulse mb-2"></div>
                                <div className="h-3 bg-gray-700 rounded animate-pulse w-2/3"></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button className="px-6 py-2 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                        Load More Movies
                    </button>
                </div>
            </div>
        </div>
    );
}
