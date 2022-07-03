import { db } from "./firebaseConfig"
import { 
    collection, 
    addDoc, 
    getDocs,
    // query,
    // onSnapshot,
    deleteDoc,
    doc,
    getDoc
    // updateDoc
} from "firebase/firestore";

export const saveNotes = async (title, content) => {
    const newNote = await addDoc(collection(db, 'Notes'), {
    title, content
  });
  return newNote;
};

export const getNotesList = async () => {
    const notes = []
    const querySnapshot = await getDocs(collection(db, 'Notes'));
    querySnapshot.forEach(doc => {
        // console.log('DOCDATAID', {...doc.data(), id: doc.id});
        notes.push({content: doc.data().content, title: doc.data().title, id: doc.id});
    })
    return notes;
};

export const deleteNote = async (id) => {
    console.log(id, 'ID');
    await deleteDoc(doc(db, 'Notes', id))
};

export const getOnePost = async(id) => {
    await getDoc(doc(db, "posts-collection", id))
};