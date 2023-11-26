import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { ReactNativeAsyncStorage } from "@react-native-async-storage/async-storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbj-IthjyUsbHvMBIOvRVXMh4fVXFuhII",
  authDomain: "exemplo-8a2db.firebaseapp.com",
  projectId: "exemplo-8a2db",
  storageBucket: "exemplo-8a2db.appspot.com",
  messagingSenderId: "774922781904",
  appId: "1:774922781904:web:4483d424d810753eb34ad5"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const db = getFirestore(app);

export { auth, db };
