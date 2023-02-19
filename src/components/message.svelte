<script>
    import { fade } from "svelte/transition";
    export let message;
    export let mode;
    let shown = false;
    let msg;
    let date;
    let modalBody;
    function showModal() {
        if (!shown) {
            shown = true;
            if (mode) {
                modalBody = "font-Family: Sacramento, cursive; font-size: 2rem";
            } else {
                modalBody = "VT323, monospace; font-size: 1rem";
            }
        } else {
            shown = false;
        }
    }
    function showdata() {
        showModal();
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
        margin-bottom: 0.5em;
        text-align: center;
        padding: 0.5em;
        font-size: 0.7em;
    }

    #modal-date:hover {
        background-color: var(--sec-a-color);
    }
    #modal-msg {
        padding-left: 2em;
        padding-right: 2em;
        text-align: center;
        margin: 0;
        margin-bottom: 0.5em;
    }
</style>
