import { db } from "./firebaseConfig"
import { 
    collection, 
    addDoc, 
    getDocs,
    query,
    onSnapshot,
    // deleteDoc,
    // doc,
    // getDoc,
    // updateDoc
} from "firebase/firestore";

export const saveNotes = async (title, content) => {
    const newNote = await addDoc(collection(db, 'Notes'), {
    title, content
  });
  console.log(newNote.id);
  return newNote;
};

export const getNotesList = async () => {
    const notes = []
    const querySnapshot = await getDocs(collection(db, 'Notes'));
    querySnapshot.forEach(doc => {
        notes.push(doc.data())
    })
    return notes;
};

export const paintNotesList = () => {
    const paint = query(collection(db, 'Notes'));
    return paint;
};

export const onGetNote = (callback) => onSnapshot(collection(db, "Notes"), (callback));