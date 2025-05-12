import React from "react";
import Banner from "../../components/Banner/Banner.jsx";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../components/PageContainer.jsx";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        // Full page background with dark navy color
        <div className="min-h-screen flex flex-col bg-[#111827] text-white">
            {/* Banner with matching dark color */}
            <Banner />

            {/* Main content */}
            <main className="flex-1 flex flex-col justify-center">
                <PageContainer>
                    {/* Hero section */}
                    <div className="flex flex-col items-center text-center py-16">
                        <div className="max-w-2xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                                Discover Your Next Favorite Movie
                            </h1>
                            <p className="text-xl mb-8 text-gray-300">
                                Moodie uses advanced AI to recommend movies based on your taste.
                                No more endless scrolling - find films you'll actually love.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                                <button className="px-8 py-3 bg-gray-800 rounded-lg text-lg font-semibold hover:bg-gray-700 transition">
                                    Get Started
                                </button>
                                <button className="px-8 py-3 bg-gray-800 rounded-lg text-lg font-semibold hover:bg-gray-700 transition">
                                    How It Works
                                </button>
                                <button
                                    onClick={() => navigate('/movies')}
                                    className="px-8 py-3 bg-gray-800 rounded-lg text-lg font-semibold hover:bg-gray-700 transition">
                                    Browse All Movies
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Features section with row-based layout */}
                    <div className="py-10 max-w-4xl mx-auto">
                        {/* Icons row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
                            <div className="flex justify-center">
                                <div className="text-3xl">🎯</div>
                            </div>
                            <div className="flex justify-center">
                                <div className="text-3xl">🔍</div>
                            </div>
                            <div className="flex justify-center">
                                <div className="text-3xl">🎬</div>
                            </div>
                        </div>

                        {/* Headings row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">Smart Recommendations</h3>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">Advanced Discovery</h3>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold">Track Your Movies</h3>
                            </div>
                        </div>

                        {/* Paragraphs row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <p className="text-gray-400">Personalized suggestions based on your viewing history and preferences.</p>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-400">Find hidden gems and new releases tailored to your taste.</p>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-400">Build your watchlist and keep track of what you've seen.</p>
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </main>
        </div>
    );
}
