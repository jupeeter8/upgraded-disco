<script>
    import { goto } from "$app/navigation";
    const navigate = () => goto("/account");
</script>

<div class="header" on:click={navigate}>
    <h1>UNNECESSARY BEEPS</h1>
    <p>.._ _. _.. . ._. ._.. .. _. .</p>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
    .header {
        font-family: "VT323", monospace;
        padding-left: 125px;
        padding-top: 3rem;
        font-size: 16px;
        color: var(--main-accent-color);
    }

    .header h1 {
        margin: 0px;
        margin-bottom: -14px;
        cursor: pointer;
    }

    .header p {
        margin: 0px;
        font-size: 0.79em;
        cursor: pointer;
    }
</style>
