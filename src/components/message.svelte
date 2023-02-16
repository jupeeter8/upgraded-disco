<script>
    export let message;
    export let mode;
</script>

<div class="msg-f">
    <div class="icn" />
    {#if mode === false}
        <div class="msg-content" style="font-Family: VT323, monospace">
            <p>{message.text}</p>
        </div>
    {:else}
        <div class="msg-content" style="font-Family: Sacramento, cursive">
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
        padding-left: 1em;
        padding-right: 1em;
        padding-top: 0.5em;
        margin-bottom: 0.5em;
    }
    .msg-content {
        padding-left: 0.2em;
        /* padding-right: 0.2em; */
        /* font-family: "Sacramento", cursive; */
        font-size: 1.75rem;
        margin-right: 10px;
        width: 60%;
    }

    .msg-content p {
        margin-top: 0px;
        margin-bottom: 0px;
        height: 1.5em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .icn {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        margin-right: 0.75em;
        font-weight: bold;
        margin-left: 2em;
        background-color: var(--main-accent-color);
    }
    .icn-sq {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 2px;
        background-color: black;
        margin-left: 4.5em;
        margin-right: 0.8em;
        font-weight: bold;
    }
    .date {
        font-family: "VT323", monospace;
        font-size: 1.5rem;
    }
</style>
