import React from 'react';
import MovieCard from './MovieCard';
import { MemoryRouter } from 'react-router-dom';
import { MockAuthProvider } from '../../mocks/MockAuthProvider.jsx';

export default {
  title: 'Components/MovieCard',
  component: MovieCard,
  decorators: [
    (Story) => (
        <MemoryRouter>
          <MockAuthProvider>
            <Story />
          </MockAuthProvider>
        </MemoryRouter>
    ),
  ],
};

const mockMovie = {
  _id: '123',
  title: 'Inception',
  releaseYear: 2010,
  rating: 8.4,
  posterUrl: 'https://image.tmdb.org/t/p/w500//ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg',
  genre: ['Action', 'Sci-Fi', 'Thriller'],
};

const Template = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  movie: mockMovie,
  isFavorite: false,
  onFavoriteToggle: (id) => alert(`Toggled favorite for movie ID: ${id}`),
};

export const Favorited = Template.bind({});
Favorited.args = {
  ...Default.args,
  isFavorite: true,
};
