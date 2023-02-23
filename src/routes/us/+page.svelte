<script>
    import Header from "../../components/Header.svelte";
    import { goto } from "$app/navigation";
    const home = () => {
        goto("/home");
    };
</script>

<div class="container">
    <div class="h">
        <Header />
    </div>
    <p>Hardy Snadhu</p>
    <div class="us">
        <img src="/index.jpg" alt="us" on:click={home} />
    </div>
    <p>Hardy Snadhu</p>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Port+Lligat+Slab&family=Sacramento&family=VT323&display=swap");

    :global(body) {
        margin: 0%;
        padding: 0%;
        color: white;
    }
    .us {
        height: 20rem;
        width: 15rem;
    }
    .us img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(27, 27, 27);
        height: 100vh;
    }
    .h {
        margin-top: 6rem;
        margin-bottom: 1rem;
    }
    p {
        font-family: "VT323", monospace;
    }
</style>
