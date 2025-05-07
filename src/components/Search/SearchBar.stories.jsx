import React from 'react';
import SearchBar from './SearchBar.jsx';
import { MemoryRouter } from 'react-router-dom';

const mockMovies = [
    {
        _id: '1',
        title: 'Inception',
        releaseYear: 2010,
        genre: ['Sci-Fi', 'Action'],
    },
    {
        _id: '2',
        title: 'The Shawshank Redemption',
        releaseYear: 1994,
        genre: ['Drama', 'Crime'],
    },
    {
        _id: '3',
        title: 'Interstellar',
        releaseYear: 2014,
        genre: ['Adventure', 'Drama', 'Sci-Fi'],
    },
];

export default {
    title: 'Components/SmartSearch',
    component: SearchBar,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <div className="bg-gray-900 min-h-screen p-6">
                    <Story />
                </div>
            </MemoryRouter>
        ),
    ],
};

// ✅ Default story
export const Default = () => <SearchBar movies={mockMovies} />;
