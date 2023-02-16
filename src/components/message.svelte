<script>
    export let message;
    export let mode;
</script>

<div class="msg-f">
    <div class="icn" />
    {#if mode === false}
        <div
            class="msg-content"
            style="font-Family: VT323, monospace; font-size: 1rem;"
        >
            <p>{message.text}</p>
        </div>
    {:else}
        <div
            class="msg-content"
            style="font-Family: Sacramento, cursive; font-size: 2rem;"
        >
            <p>{message.text}</p>
        </div>
    {/if}
    <div class="icn-sq" />
    <div class="date">{message.date}</div>
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
        /* height: 3em; */
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
</style>
