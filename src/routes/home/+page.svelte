<script>
    import { Translate } from "../../Translate";
    const mainColour = localStorage.getItem("colour");

    let state;
    let text = "";
    let trans = new Translate();

    function translateToMorse() {
        text = trans.toMorse(text);
    }

    function translateToEnglish() {
        text = trans.toEnglish(text);
    }

    function btn_state() {
        if (state.textContent === "._.") {
            if (text === "") {
                text = "";
                state.textContent = "abc";
                return;
            }
            text = trans.checkDataEnglish(text);
            translateToMorse();
            state.textContent = "abc";
        } else {
            if (text === "") {
                text = "";
                state.textContent = "._.";
                return;
            }
            state.textContent = "._.";
            text = trans.checkDataMorse(text);
            translateToEnglish();
        }
    }
    function handlKeypress(event) {
        if (state.textContent === "abc") {
            // check if space is pressed
            if (event.keyCode === 32) {
                console.log("space");
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
            contenteditable="true"
            on:keypress={handlKeypress}
            bind:textContent={text}
        />
        <div class="buttons">
            <button class="editor-btn" on:click={btn_state} bind:this={state}
                >._.</button
            >
            <button class="editor-btn">dot</button>
            <button class="editor-btn">dash</button>
            <button class="editor-btn">change</button>
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
        width: 64%;
        margin-left: auto;
        margin-right: auto;
    }

    .editor-btn {
        padding: 0.5rem;
        border-radius: 5px;
        font-family: "VT323", monospace;
        font-size: 1.5em;
        color: var(--main-accent-color);
        background: none;
    }

    #editor {
        display: flex;
        height: 150px;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        overflow-y: scroll;
        overflow-x: visible;
        word-wrap: break-word;
        margin-bottom: 1.5rem;
        font-family: "VT323", monospace;
        padding: 0.5rem;
        font-size: 1.5em;
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
