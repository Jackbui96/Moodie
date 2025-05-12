import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup, signOut, setPersistence, browserLocalPersistence, GoogleAuthProvider } from "firebase/auth";
import { FirebaseClient } from "../clients/FirebaseClient.jsx";
import handleGoogleSignin from "../clients/ApaniClient.jsx";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authInstance, setAuthInstance] = useState(null);
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        const init = async () => {
            const app = await FirebaseClient();
            const auth = getAuth(app);
            await setPersistence(auth, browserLocalPersistence);
            const googleProvider = new GoogleAuthProvider();

            setAuthInstance(auth);
            setProvider(googleProvider);

            onAuthStateChanged(auth, setUser);
        };

        init();
    }, []);


    // TODO: Improve handleLogin not to store sensitive info
    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(authInstance, provider);
            const firebaseUser = result.user;

            const dbSaved = await handleGoogleSignin(firebaseUser);

            if (firebaseUser && dbSaved) {
                setUser(firebaseUser);
            } else {
                console.error("❌ Login or backend sign-in failed.");
            }
        } catch (e) {
            console.error("❌ Error during Google login flow:", e);
        }
    };

    const handleLogout = async () => {
        await signOut(authInstance);
        setUser(null);
    };

    const value = {
        user,
        handleLogin,
        handleLogout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthContext,
}
