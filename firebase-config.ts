import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBpAxYOPLWBBeH_C4Ue7Cak58SUbDt-Xm0",
  authDomain: "goohdars.firebaseapp.com",
  projectId: "goohdars",
  storageBucket: "goohdars.appspot.com",
  messagingSenderId: "1024993184882",
  appId: "1:1024993184882:web:8ea6f96d4e6412ee8d46eb",
  measurementId: "G-9H7G7730BB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
