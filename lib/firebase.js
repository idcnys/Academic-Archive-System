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
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

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
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
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

// Service Account Configuration (for server-side usage)
export const getServiceAccountConfig = () => {
  return {
    type: process.env.FIREBASE_SERVICE_ACCOUNT_TYPE,
    project_id: process.env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
    private_key_id: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY,
    client_email: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_ID,
    auth_uri: process.env.FIREBASE_SERVICE_ACCOUNT_AUTH_URI,
    token_uri: process.env.FIREBASE_SERVICE_ACCOUNT_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL,
    universe_domain: process.env.FIREBASE_SERVICE_ACCOUNT_UNIVERSE_DOMAIN,
  };
};

export default app;
