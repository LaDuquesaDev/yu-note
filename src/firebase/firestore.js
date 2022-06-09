import { db } from "./firebaseConfig"
import { 
    collection, 
    addDoc, 
    // getDocs,
    // onSnapshot,
    // deleteDoc,
    // doc,
    // getDoc,
    // updateDocc
} from "firebase/firestore";

export const saveNotes = (title, content) => addDoc(collection(db, 'Notes'), {
    title, content
  });
