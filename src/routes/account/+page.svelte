<script>
    import Header from "../../components/Header.svelte";
    import { goto } from "$app/navigation";

    const navigate = () => goto("/home");
</script>

<div class="body">
    <div class="header" on:click={navigate} on:keyup={() => {}}>
        <h1>MOORSEE</h1>
        <p>.._ _. _.. . ._. ._.. .. _. .</p>
    </div>
    <div class="img" />
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
    :global(body) {
        margin: 0;
        padding: 0;
    }
    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
        width: 100vw;
    }
    .header {
        font-family: "VT323", monospace;
        font-size: 32px;
        width: fit-content;
        margin-top: 3rem;
    }

    .header h1 {
        margin: 0px;
        margin-bottom: -24px;
        cursor: pointer;
    }

    .header p {
        margin: 0px;
        font-size: 0.5em;
        cursor: pointer;
    }
</style>
