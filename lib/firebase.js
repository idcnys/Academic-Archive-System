import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  signInWithCustomToken,
  signOut,
  signInAnonymously,
} from "firebase/auth";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Environment-based Firebase configuration (always available)


//#######################################

// Database where data is getting stored

const firebaseConfig = {
  apiKey: "AIzaSyAxYKHVjzLyTmtg-wnR361JfNbRN8_z8Lo",
  authDomain: "archive-model.firebaseapp.com",
  databaseURL: "https://archive-model-default-rtdb.firebaseio.com",
  projectId: "archive-model",
  storageBucket: "archive-model.firebasestorage.app",
  messagingSenderId: "323913216953",
  appId: "1:323913216953:web:9690a1863bac0b15e23c68",
  measurementId: "G-1VWNN1PSJ5"
};


//#############################################

// Initialize Firebase
let app;
let db;
let auth;

if (typeof window !== "undefined") {
  // Client-side initialization
  try {
    app = initializeApp(firebaseConfig);

    // Initialize App Check
    const appCheck = initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(
        "6LcaL8wrAAAAANm1-f3A7gTQvcu_KtHW_SLMCOvo"
      ),
      isTokenAutoRefreshEnabled: true,
    });

    db = getDatabase(app);
    auth = getAuth(app);

    // Optional anonymous authentication for enhanced features
    // Public features work without authentication
    signInAnonymously(auth).catch((error) => {
      console.log(
        "Anonymous auth not required for public features:",
        error.message
      );
    });

    console.log(
      "🔥 Firebase initialized successfully with App Check and public access"
    );

    
  } catch (error) {
    console.error("Failed to initialize Firebase:", error);
    throw error;
  }
} else {
  // Server-side: Create placeholder objects to prevent import errors
  console.log("Firebase initialization skipped on server-side");
}



// Firebase Authentication utilities
export const firebaseAuth = {
  // Sign in anonymously
  signInAnonymously: async () => {
    if (!auth) {
      throw new Error("Firebase Auth not initialized");
    }
    try {
      const userCredential = await signInAnonymously(auth);
      return userCredential.user;
    } catch (error) {
      console.error("Anonymous auth error:", error);
      throw error;
    }
  },

  // Sign in with custom token (for your existing user system)
  signInWithToken: async (customToken) => {
    if (!auth) {
      throw new Error("Firebase Auth not initialized");
    }
    try {
      const userCredential = await signInWithCustomToken(auth, customToken);
      return userCredential.user;
    } catch (error) {
      console.error("Firebase auth error:", error);
      throw error;
    }
  },

  // Sign out
  signOut: async () => {
    if (!auth) {
      throw new Error("Firebase Auth not initialized");
    }
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Firebase sign out error:", error);
      throw error;
    }
  },

  // Get current user
  getCurrentUser: () => {
    if (!auth) return null;
    return auth.currentUser;
  },

  // Listen to auth state changes
  onAuthStateChanged: (callback) => {
    if (!auth) {
      console.warn("Firebase Auth not initialized");
      return () => {};
    }
    return auth.onAuthStateChanged(callback);
  },
};

// Export database and auth with safety checks
export { db, auth };
export default app;
