import { initializeApp, getApps, getApp } from 'firebase/app';
import axios from 'axios';

let firebaseApp = null;

export const FirebaseClient = async () => {
    if (getApps().length > 0) {
        return getApp(); // return existing initialized app
    }

    try {
        const res = await axios.get("https://api.a-pani.com/v1/config/moodie/firebase");
        const firebaseConfig = res.data;
        firebaseApp = initializeApp(firebaseConfig);
        return firebaseApp;
    } catch (e) {
        console.error("Failed to load Firebase config", e);
        throw e;
    }
}
