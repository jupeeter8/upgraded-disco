<script>
    import { goto } from "$app/navigation";
    const navigate = () => goto("/account");
</script>

<div class="header" on:click={navigate}>
    <h1>MOORSEE</h1>
    <p>.._ _. _.. . ._. ._.. .. _. .</p>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
    .header {
        font-family: "VT323", monospace;
        padding-left: 125px;
        padding-top: 3rem;
        font-size: 16px;
    }

    .header h1 {
        margin: 0px;
        margin-bottom: -12px;
        cursor: pointer;
    }

    .header p {
        margin: 0px;
        font-size: 0.5em;
        cursor: pointer;
    }
</style>
