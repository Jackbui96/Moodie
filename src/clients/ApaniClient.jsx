import axios from "axios";

const API_BASE = "https://api.a-pani.com";
const USER_AUTH_SERVICE = "http://localhost:5003"

export const handleGoogleSignin = async (user) => {
    try {
        const res = await axios.post(`${API_BASE}/v1/moodie/auth/google-signin`, {
            firebaseId: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return res.data;
    } catch (err) {
        console.error("🔒 Google sign-in failed:", err);
    }
};

export default handleGoogleSignin;
