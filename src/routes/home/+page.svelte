<script>
    import { Translate } from "../../service/Translate";
    import Header from "../../components/Header.svelte";
    import Navbar from "../../components/Navbar.svelte";
    import { auth, onAuthStateChange } from "../../service/firebase";
    import { isEgg } from "../../service/eggs";
    import {
        doc,
        getDoc,
        db,
        collection,
        setDoc,
    } from "../../service/messages";
    import { goto } from "$app/navigation";
    const mainColour = localStorage.getItem("colour");

    onAuthStateChange((user) => {
        if (!user) {
            localStorage.clear();
            goto("/");
        } else {
            localStorage.setItem("user", user.uid);
        }
    });

    let state;
    let text = "write something here";
    let trans = new Translate();
    let space = 0;
    let edtDiv;
    let isEasterEgg = false;
    let foundWall = localStorage.getItem("foundWall");

    function clearText() {
        if (text === "write something here") {
            text = "";
        }
    }

    function translateToMorse() {
        text = trans.toMorse(text);
    }

    function translateToEnglish() {
        text = trans.toEnglish(text);
    }

    function btn_state() {
        navigator.clipboard.writeText(text);
        if (state.textContent === "english") {
            (edtDiv.style.fontFamily = "VT323"), "monospace";
            edtDiv.style.fontSize = "1.5em";
            state.textContent = "morse";

            if (text === "") {
                text = "";
                edtDiv.setAttribute("contenteditable", false);
                return;
            }

            text = trans.checkDataEnglish(text);
            edtDiv.setAttribute("contenteditable", false);
            translateToMorse();
        } else {
            (edtDiv.style.fontFamily = "Sacramento"), "cursive";
            edtDiv.style.fontSize = "2.25rem";
            // edtDiv.style.color = "var(--main-accent-color)";
            if (text === "") {
                text = "";
                state.textContent = "english";
                edtDiv.setAttribute("contenteditable", true);
                return;
            }
            text = trans.checkDataMorse(text);
            state.textContent = "english";
            edtDiv.setAttribute("contenteditable", true);
            translateToEnglish();
        }
    }

    function enterMorse(element) {
        if (state.textContent === "morse") {
            if (element.target.textContent === "dot") {
                text += ".";
                space = 0;
            } else if (element.target.textContent === "dash") {
                text += "_";
                space = 0;
            } else if (element.target.textContent === "space") {
                if (space === 0) {
                    text += " ";
                    space = 1;
                } else if (space === 1) {
                    text += "/ ";
                    space = 0;
                }
            } else {
                text = text.slice(0, -1);
            }
        }
    }
    function keyInput(event) {
        if (state.textContent === "morse") {
            if (event.key === "f") {
                enterMorse({ target: { textContent: "dot" } });
            } else if (event.key === "j") {
                enterMorse({ target: { textContent: "dash" } });
            } else if (event.key === "g") {
                enterMorse({ target: { textContent: "space" } });
            } else if (event.key === "h") {
                enterMorse({ target: { textContent: "remove" } });
            }
        }
    }
    async function sendMessage() {
        navigator.clipboard.writeText(text);
        let message = text;

        if (message === "") return;

        const UserID = localStorage.getItem("user");

        if (state.textContent === "morse") {
            message = trans.checkDataMorse(message);
            message = trans.toEnglish(message);
        }

        await isEgg(message, UserID).then((res) => {
            isEasterEgg = res;
        });
        if (isEasterEgg) {
            // foundWall = "true";
            text = "";
            return;
        }
        message = trans.checkDataEnglish(message);

        const time = new Date().getTime();
        message = {
            message: message,
            Date: time,
        };

        if (localStorage.getItem("reciverID") === null) {
            const docRef = doc(db, "users", UserID);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                this.data = docSnap.data();
                localStorage.setItem("reciverID", this.data.rec);
            }
        }

        const reciverID = localStorage.getItem("reciverID");
        const collectionRef = collection(db, "users", reciverID, "messages");

        await setDoc(doc(collectionRef, String(time)), message);
        text = "";
    }
</script>

<div
    on:keypress={keyInput}
    class="body"
    style="--main-accent-color: {mainColour}; --sec-accent-color: {mainColour +
        '80'}; --main-grey: grey;"
>
    <div class="header-layout">
        <Header />
    </div>
    <div class="spacer" />
    <div class="container">
        <div
            id="editor"
            contenteditable
            on:click={clearText}
            bind:innerHTML={text}
            bind:this={edtDiv}
            on:keyup={() => {}}
        />
        <div class="buttons">
            <button class="editor-btn" on:click={btn_state} bind:this={state}
                >english</button
            >
            <button class="editor-btn" on:click={enterMorse}>dot</button>
            <button class="editor-btn" on:click={enterMorse}>dash</button>
            <button class="editor-btn" on:click={enterMorse}>space</button>
            <button class="editor-btn" on:click={enterMorse}>remove</button>
            <button class="editor-btn" on:click={sendMessage}>send</button>
        </div>
    </div>

    <Navbar {foundWall} />
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Port+Lligat+Slab&family=Sacramento&family=VT323&display=swap&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
    :global(body) {
        margin: 0;
        padding: 0;
    }

    .body {
        background-color: var(--main-bg-color);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0px;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 64vw;
        margin-left: auto;
        margin-right: auto;
    }

    .buttons {
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }

    .editor-btn {
        /* padding: 0.5rem; */
        width: 98px;
        border-radius: 5px;
        border: none;
        font-family: "VT323", monospace;
        font-size: 1.5em;
        color: var(--main-grey);
        background: none;
    }

    .editor-btn:hover {
        background-color: var(--sec-accent-color);
        color: black;
        cursor: pointer;
    }

    #editor {
        display: flex;
        height: 146px;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        overflow-y: scroll;
        overflow-x: visible;
        word-wrap: break-word;
        margin-bottom: 2.25rem;
        font-family: "Sacramento", cursive;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        /* font-size: 1.5em; */
        font-size: 2.25rem;
        /* border: 0.5px dashed var(--main-grey); */
        border-radius: 0.5rem;
    }

    #editor:hover {
        outline: 2.5px dashed var(--sec-accent-color);
    }
    #editor:focus {
        outline: 2.5px dashed var(--main-accent-color);
    }

    .spacer {
        height: 100px;
    }
    .header-layout {
        margin-top: 3em;
        margin-left: 10em;
    }

    @media screen and (max-width: 768px) {
        :global(body) {
            margin: 0;
            padding: 0;
        }
        .body {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            width: 100vw;
            padding-left: 1em;
            padding-right: 1em;
            padding-top: 2em;
        }
        .header-layout {
            margin: 0px;
            width: 100%;
            font-size: 1em;
            margin-top: 2em;
        }
        .container {
            margin: 0px;
            width: 100%;
            margin-bottom: 10em;
        }

        .spacer {
            height: 10em;
        }
        #editor {
            display: flex;
            height: 2em;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            overflow-y: scroll;
            overflow-x: visible;
            word-wrap: break-word;
            margin-bottom: 2.25rem;
            font-family: "Sacramento", cursive;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            padding-top: 2rem;
            padding-bottom: 2rem;
            font-size: 2.25rem;
            border-radius: 0.5rem;
            outline: 2px dashed var(--sec-accent-color);
        }

        #editor:focus {
            outline: 2px solid var(--main-accent-color);
        }

        .buttons {
            display: flex;
            justify-content: space-evenly;
            width: 100%;
        }
        .editor-btn {
            /* padding: 0.5rem; */
            width: fit-content;
            border-radius: 5px;
            border: 2px solid var(--sec-accent-color);
            font-family: "VT323", monospace;
            font-size: 1em;
            color: var(--main-grey);
            background: none;
        }
        .editor-btn:focus {
            background-color: var(--sec-accent-color);
            color: black;
            cursor: pointer;
        }
    }
</style>
