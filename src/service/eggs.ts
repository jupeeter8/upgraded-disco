import { doc, db, updateDoc } from "./messages"
let eggs = { "6049sex57~`shit": "wall", "rdr": true, }


export async function isEgg(egg: string, UserID: string) {
    egg = egg.toLowerCase()
    egg = egg.replace(/<div>/g, '').replace(/<\/div>/g, ' ');
    egg = egg.toLowerCase();
    egg = egg.replace(/&lt;br&gt;/g, '');
    egg = egg.replace(/<br>/g, '');
    if (eggs[egg] === "wall") {

        const docRef = doc(db, "users", UserID)
        await updateDoc(docRef, { wall: true })
        localStorage.setItem("foundWall", "true")
        return true
    }
    if (eggs[egg] === true) {
        window.open("https://www.youtube.com/watch?v=hAdZPnxINQw", "_blank")
        return true
    }
    if (egg.includes("breakup")) {
        window.open("https://www.youtube.com/watch?v=WoxFRRf9DJM", "_blank")
        return true
    }
    if (egg === "algae") {
        window.open("https://en.wikipedia.org/wiki/Algae", "_blank")
        return true
    }
    if (egg === "us") {
        window.open("https://www.upgraded-disco.vercel.app/us")
        return true
    }
}