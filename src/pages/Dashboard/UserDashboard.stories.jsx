import React from 'react';
import UserDashboard from './UserDashboard';
import { MockAuthProvider } from "../../mocks/MockAuthProvider.jsx";
import { MemoryRouter } from "react-router-dom";

// Default export required by Storybook
export default {
    title: 'Pages/UserDashboard',
    component: UserDashboard,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <MockAuthProvider>
                    <Story/>
                </MockAuthProvider>
            </MemoryRouter>
        ),
    ],
};

// Mock movies (same shape as your real ones)
const mockMovies = [
    {
        _id: '1',
        title: 'Inception',
        posterUrl: '/api/placeholder/250/375',
        releaseYear: 2010,
        rating: 8.8,
        genre: ['Sci-Fi', 'Action', 'Thriller'],
        description: 'A thief who steals corporate secrets using dream-sharing tech.',
    },
    {
        _id: '2',
        title: 'The Matrix',
        posterUrl: '/api/placeholder/250/375',
        releaseYear: 1999,
        rating: 8.7,
        genre: ['Action', 'Sci-Fi'],
        description: 'A hacker discovers the world is a simulation.',
    },
    // Add more mock items as needed
];

// 👇️ Story 1: Default Dashboard View
export const Default = () => {
    // Overwrite window.alert to avoid real alert popups
    window.alert = (msg) => console.log('[Mock Alert]', msg);

    return <UserDashboard/>;
};

// 👇️ Story 2: Filled Favorites
export const WithFavorites = () => {
    const [favorites, setFavorites] = React.useState(['1', '2']);

    // Modify CompactMovieCard to accept props for mock
    return (
        <div className="bg-gray-900 p-4 min-h-screen text-white">
            <h1 className="text-xl font-bold mb-4">Mock Favorites Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                { mockMovies.map((movie) => (
                    <div key={ movie._id } className="bg-gray-800 rounded-lg p-4">
                        <p className="font-bold">{ movie.title }</p>
                        <p className="text-sm text-gray-400">⭐ { movie.rating }</p>
                        <p className="text-xs mt-2">
                            { favorites.includes(movie._id) ? '❤️ In Favorites' : 'Not Favorite' }
                        </p>
                    </div>
                )) }
            </div>
        </div>
    );
};
