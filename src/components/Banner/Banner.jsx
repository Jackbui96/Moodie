import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const getInitial = (name) => {
    if (!name) return "?";
    const [first, last] = name.trim().split(" ");
    return ((first?.[0] || "") + (last?.[0] || "")).toUpperCase();
}

export default function Banner() {
    const {user, handleLogin, handleLogout} = useAuth();

    const [imgError, setImgError] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="bg-gray-900 text-white border-b border-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div
                        onClick={() => navigate('/')}
                        className="text-2xl font-bold text-blue-400 cursor-pointer"
                    >
                        Moodie
                    </div>

                    {/* Right side menu */ }
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={ user ? handleLogout : handleLogin }
                            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
                        >
                            { !user ?
                                "Sign In With Google" :
                                (<span className="flex items-center gap-2">
                                    { user.displayName }
                                    { !imgError && user.photoURL ?
                                        (<img
                                            src={ user.photoURL }
                                            alt="Profile"
                                            onError={() => { setImgError(true) }}
                                            className="w-8 h-8 rounded-full"/>) :
                                        (<div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm font-bold">
                                            {getInitial(user.displayName)}
                                        </div>)}
                                </span>)
                            }
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}
