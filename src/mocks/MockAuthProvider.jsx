import React from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const MockAuthProvider = ({ children }) => {
    const fakeUser = {
        id: 'user123',
        email: 'test@example.com',
        displayName: 'Test User',
        photoURL: 'https://gravatar.com/avatar/c811e54595eb5bbd3027dae190a65baf?s=400&d=robohash&r=x'
    };

    return (
        <AuthContext.Provider value={{ user: fakeUser }}>
            {children}
        </AuthContext.Provider>
    );
};
