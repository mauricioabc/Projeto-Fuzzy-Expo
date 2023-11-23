import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCbj-IthjyUsbHvMBIOvRVXMh4fVXFuhII",
  authDomain: "exemplo-8a2db.firebaseapp.com",
  projectId: "exemplo-8a2db",
  storageBucket: "exemplo-8a2db.appspot.com",
  messagingSenderId: "774922781904",
  appId: "1:774922781904:web:4483d424d810753eb34ad5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
