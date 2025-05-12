import { AuthProvider } from "./AuthContext.jsx";
import { MoviesProvider } from "./MoviesContext.jsx";

export const AppProviders = ({children}) => {
    return (
        <AuthProvider>
            <MoviesProvider>
                { children }
            </MoviesProvider>
        </AuthProvider>
    );
};
