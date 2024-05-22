import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyBCY2__Ck1eipBlZTGAYF20KtV8d-xePRk",
  authDomain: "my-petsproject.firebaseapp.com",
  projectId: "my-petsproject",
  storageBucket: "my-petsproject.appspot.com",
  messagingSenderId: "220888624389",
  appId: "1:220888624389:web:aa80255f1b9cf6023a9b6c"
};
const app = initializeApp(firebaseConfig);

export default app;