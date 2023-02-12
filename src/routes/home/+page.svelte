<script>
    import { Translate } from "../../Translate";
    const mainColour = localStorage.getItem("colour");

    let state;
    let text = "";
    let trans = new Translate();
    let space = 0;
    let edtDiv;

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
            edtDiv.style.fontSize = "2em";
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
</script>

<div
    class="body"
    style="--main-accent-color: {mainColour}; --sec-accent-color: {mainColour +
        '80'};"
>
    <div class="header">
        <h1>MOORSEE</h1>
        <p>.._ _. _.. . ._. ._.. .. _. .</p>
    </div>
    <div class="spacer" />
    <div class="container">
        <div
            id="editor"
            contenteditable
            bind:innerHTML={text}
            bind:this={edtDiv}
        />
        <div class="buttons">
            <button class="editor-btn" on:click={btn_state} bind:this={state}
                >english</button
            >
            <button class="editor-btn" on:click={enterMorse}>dot</button>
            <button class="editor-btn" on:click={enterMorse}>dash</button>
            <button class="editor-btn" on:click={enterMorse}>space</button>
            <button class="editor-btn" on:click={enterMorse}>remove</button>
        </div>
    </div>

    <div class="nav">
        <div class="nav-btn">
            <span class="material-symbols-outlined">
                radio_button_checked
            </span>
        </div>
        <div class="nav-btn">
            <span class="material-symbols-outlined"> view_kanban </span>
        </div>
        <div class="nav-btn">
            <span class="material-symbols-outlined"> inbox </span>
        </div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Port+Lligat+Slab&family=Sacramento&family=VT323&display=swap&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");

    .body {
        background-color: var(--main-bg-color);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        margin: 0px;
    }

    .header {
        font-family: "VT323", monospace;
        padding-left: 125px;
        padding-top: 3rem;
        font-size: 16px;
    }

    .header h1 {
        font-family: "VT323", monospace;
        margin: 0px;
        margin-bottom: -12px;
    }

    .header p {
        font-family: "VT323", monospace;
        margin: 0px;
        font-size: 0.5em;
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
        font-family: "VT323", monospace;
        font-size: 1.5em;
        color: var(--main-accent-color);
        background: none;
    }

    .editor-btn:hover {
        background-color: var(--sec-accent-color);
        color: white;
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
        margin-bottom: 1.5rem;
        font-family: "Sacramento", cursive;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        /* font-size: 1.5em; */
        font-size: 2em;
        border: 2.5px dashed black;
        border-radius: 0.5rem;
        outline: 0px;
    }

    #editor:hover {
        border: 2.5px dashed var(--main-accent-color);
    }
    #editor:focus {
        border: 2.5px dashed var(--main-accent-color);
    }
    .nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 40%;
        padding-top: 1.5rem;
        margin-left: auto;
        margin-right: auto;
        flex-grow: 1;
        color: var(--sec-accent-color);
    }
    .spacer {
        height: 150px;
    }

    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
        color: var(--sec-accent-color);
    }
</style>
