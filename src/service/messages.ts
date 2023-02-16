import { getFirestore, collection, getDoc, doc, setDoc, getDocs, query, orderBy } from "firebase/firestore"
import { app } from "./firebase"

export const db = getFirestore(app)

export { getDoc, collection, doc, setDoc, getDocs, query, orderBy }
