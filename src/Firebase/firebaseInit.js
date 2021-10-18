import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';


const firebaseAuthInit = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthInit;