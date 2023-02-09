<script>
</script>

<body>
    <div class="header">
        <h1>MOORSEE</h1>
        <p>.._ _. _.. . ._. ._.. .. _. .</p>
    </div>
    <div class="spacer" />
    <div class="container">
        <div
            id="editor"
            contenteditable="true"
            default-text="true"
            oninput="checkPlaceholder()"
        />
        <div class="buttons">
            <div class="editor-btn">abc</div>
            <div class="editor-btn">dot</div>
            <div class="editor-btn">dash</div>
            <div class="editor-btn">change</div>
        </div>
    </div>

    <div class="nav">
        <div class="nav-btn">home</div>
        <div class="nav-btn">about</div>
        <div class="nav-btn">contact</div>
    </div>
</body>

<!-- <script>
    function checkPlaceholder() {
        // if (document.getElementById("editor").innerHTML === "") {
        //     document.getElementById("editor").innerHTML = "Placeholder Text";
        // }
        document.getElementById("editor").setAttribute("default-text", "false");
    }
    checkPlaceholder()
</script> -->
<style>
    @import url("https://fonts.googleapis.com/css2?family=Port+Lligat+Slab&family=Sacramento&family=VT323&display=swap");

    :root {
        --main-bg-color: #f2f2ed;
        --main-accent-color: #d43d7950;
        --secondary-tet-color: rgb(98, 98, 98);
        --test-colours: #dfdfdfc0;
    }

    body {
        background-color: var(--main-bg-color);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .header {
        font-family: "VT323", monospace;
        /* width: 100vw; */
        padding-left: 125px;
        padding-top: 3rem;
        font-size: 16px;
        /* background: var(--test-colours); */
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
        /* flex-grow: 1; */
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* height: 100vh; */
        width: 64vw;
        margin-left: auto;
        margin-right: auto;
        /* margin-top: auto; */
    }

    .buttons {
        display: flex;
        justify-content: space-around;
        width: 64%;
        margin-left: auto;
        margin-right: auto;
    }

    .editor-btn {
        /* margin-right: 1rem;
        margin-left: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem; */
        padding: 0.5rem;
        /* border: 1px solid var(--main-accent-color); */
        border-radius: 5px;
        /* background: var(--test-colours); */
        font-family: "VT323", monospace;
        font-size: 1.5em;
        color: var(--main-accent-color);
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
        font-size: 1.25em;
        border: 2px dashed black;
        border-radius: 0.5rem;
        outline: 0px;
    }

    #editor:hover {
        border: 2px dashed var(--main-accent-color);
    }
    #editor:focus {
        border: 2px dashed var(--main-accent-color);
    }
    .nav {
        display: flex;
        justify-content: space-around;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
    .spacer {
        height: 150px;
    }
</style>
