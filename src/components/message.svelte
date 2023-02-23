<script>
    import { fade } from "svelte/transition";
    export let message;
    export let mode;
    import { Howl, Howler } from "howler";
    let play = true;
    let shown = false;
    let msg;
    let date;
    let modalBody;
    let dot = new Howl({
        src: ["sounds/dot.wav"],
    });
    let dash = new Howl({
        src: ["sounds/dash.wav"],
    });
    function showModal() {
        if (!shown) {
            shown = true;
            if (mode) {
                modalBody = "font-Family: Sacramento, cursive; font-size: 2rem";
            } else {
                modalBody = "VT323, monospace; font-size: 1.5rem";
            }
        } else {
            shown = false;
            play = false;
        }
    }
    function showdata() {
        showModal();
    }
    async function playMorse() {
        if (mode) {
            return;
        }
        let morse = msg.innerHTML;
        for (let i = 0; i < morse.length; i++) {
            if (play === false) {
                console.log("play");
                break;
            }
            if (morse[i] === ".") {
                dot.play();
                await new Promise((r) => setTimeout(r, 200));
            } else if (morse[i] === "_") {
                dash.play();
                await new Promise((r) => setTimeout(r, 400));
            } else if (morse[i] === " ") {
                await new Promise((r) => setTimeout(r, 100));
            } else if (morse[i] === "/") {
                await new Promise((r) => setTimeout(r, 300));
            }

            await new Promise((r) => setTimeout(r, 100));
        }
        play = true;
    }
</script>

{#if shown === true}
    <div
        class="modal-bg"
        on:click={showModal}
        transition:fade
        on:keypress={() => {}}
    />
    <div class="modal" transition:fade>
        <p id="modal-date">
            Date: {date.innerHTML}
        </p>
        <p style={modalBody} id="modal-msg">
            {msg.innerHTML}
        </p>
        <span
            class="material-symbols-outlined"
            on:click={playMorse}
            on:keyup={() => {}}
        >
            play_arrow
        </span>
    </div>
{:else}<div />{/if}
<div class="msg-f" on:click={showdata} on:keypress={() => {}}>
    <div class="icn" />
    {#if mode === false}
        <div
            class="msg-content"
            style="font-Family: VT323, monospace; font-size: 1rem;"
        >
            <p bind:this={msg}>{message.text}</p>
        </div>
    {:else}
        <div
            class="msg-content"
            style="font-Family: Sacramento, cursive; font-size: 2rem;"
        >
            <p bind:this={msg}>{message.text}</p>
        </div>
    {/if}
    <div class="icn-sq" />
    <div class="date" bind:this={date}>{message.date}</div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");
    .msg-f {
        display: flex;
        margin: 0%;
        align-items: center;
        justify-content: space-around;
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 0.5em;
        margin-bottom: 0.5em;
    }
    .msg-content {
        font-size: 2.3rem;
        width: 70%;
    }

    .msg-content p {
        margin-top: 0px;
        margin-bottom: 0px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        user-select: none;
    }
    .icn {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        font-weight: bold;
        background-color: var(--main-accent-color);
    }
    .icn-sq {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 2px;
        background-color: black;
        font-weight: bold;
    }
    .date {
        font-family: "VT323", monospace;
        font-size: 1.2rem;
    }
    .msg-f:hover {
        color: var(--main-accent-color);
        cursor: pointer;
    }
    .modal-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }

    .modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--main-accent-color);
        font-family: "VT323", monospace;
        font-size: 1.5rem;
        position: absolute;
        left: 50%;
        top: 50%;
        width: calc(100vw - 0.5em);
        max-width: 32em;
        max-height: calc(100vh - 4em);
        overflow-x: hidden;
        word-wrap: break-word;
        transform: translate(-50%, -50%);
        padding: 0.5em;
        /* border-radius: 0.2em; */
        background: white;
    }
    #modal-date {
        color: black;
        margin: 0;
        text-align: center;
        padding: 0.5em;
        font-size: 1em;
    }

    #modal-date:hover {
        background-color: var(--sec-a-color);
    }
    #modal-msg {
        padding-left: 2em;
        padding-right: 2em;
        text-align: center;
        margin: 0;
        margin-top: 1.5em;
        margin-bottom: 2em;
    }

    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
    }
    .material-symbols-outlined:hover {
        cursor: pointer;
    }
</style>
