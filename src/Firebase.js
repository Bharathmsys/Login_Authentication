 import { initializeApp } from 'firebase/app' 
 import { getAuth } from "firebase/auth";
const firebaseConfig = {

    apiKey: "AIzaSyCZHuzpm8sAvhir2dyQR56THAfEUJn7Gsg",
  
    authDomain: "loginwithauthcard.firebaseapp.com",
  
    projectId: "loginwithauthcard",
  
    storageBucket: "loginwithauthcard.appspot.com",
  
    messagingSenderId: "431723920210",
  
    appId: "1:431723920210:web:2e73c513b0dc113894188b"
  
  };
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app;
 
