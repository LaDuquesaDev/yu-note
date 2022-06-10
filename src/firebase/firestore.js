import { db } from "./firebaseConfig"
import { 
    collection, 
    addDoc, 
    getDocs,
    query,
    // onSnapshot,
    // deleteDoc,
    // doc,
    // getDoc,
    // updateDoc
} from "firebase/firestore";

export const saveNotes = async (title, content) => {
    addDoc(collection(db, 'Notes'), {
    title, content
  });
}

export const getNoteList = async () => {
    const notes = []
    const querySnapshot = await getDocs(collection(db, 'Notes'));
    querySnapshot.forEach(doc => {
        notes.push(doc.data())
    })
    return notes;
}

export const paintNoteList = () => {
    const paint = query(collection(db, 'Notes'));
    return paint;
  };