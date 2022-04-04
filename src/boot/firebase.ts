import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDDxhTMSDpiEK9i13UR1iQvC3hIPjjHod0',
  authDomain: 'giornale-f3695.firebaseapp.com',
  projectId: 'giornale-f3695',
  storageBucket: 'giornale-f3695.appspot.com',
  messagingSenderId: '962576508359',
  appId: '1:962576508359:web:e82a5a2dd818a794e165e2',
  measurementId: 'G-902EQEB38M',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
getAnalytics(app);

export { auth, db };

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
});
