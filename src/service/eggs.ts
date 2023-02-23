import { doc, db, updateDoc } from "./messages"
let eggs = { "6049sex57~`shit": "wall", "rdr": true, "alge": "alge", }


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
    if (egg.includes("last")) {
        window.open("https://www.youtube.com/watch?v=WoxFRRf9DJM", "_blank")
        return true
    }
    if (egg === "algae") {
        window.open("https://en.wikipedia.org/wiki/Algae", "_blank")
        return true
    }
    if (egg === "nice") {
        console.log(process.env.nice)
    }
}