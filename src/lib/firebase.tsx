import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_FIREBASE_appId
};


const app = initializeApp(firebaseConfig);


const db = getFirestore();


const AddData = async (collectionName: string, data: any) => {
    try {
        const res = await addDoc(collection(db, collectionName), data);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export default AddData;
