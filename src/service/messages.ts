import { getFirestore, collection, getDoc, doc, setDoc } from "firebase/firestore"
import { app } from "./firebase"

export const db = getFirestore(app)

export { getDoc, collection, doc, setDoc }
