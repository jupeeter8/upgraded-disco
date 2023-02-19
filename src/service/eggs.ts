import { doc, db, updateDoc } from "./messages"
let eggs = { "6049sex57~`shit": "wall" }


export async function isEgg(egg: string, UserID: string) {
    egg = egg.toLowerCase()
    egg = egg.replace(/<div>/g, '').replace(/<\/div>/g, ' ');
    egg = egg.toLowerCase();
    egg = egg.replace(/&lt;br&gt;/g, '');
    egg = egg.replace(/<br>/g, '');
    console.log(egg)
    if (eggs[egg] === "wall") {

        const docRef = doc(db, "users", UserID)
        await updateDoc(docRef, { wall: true })
        localStorage.setItem("foundWall", "true")
    }
    return true
}