<script>
    import { goto } from "$app/navigation";
    import { changeCollection, changeTheme, theme } from "../../service/theme";
    let themeVal;
    theme.subscribe((value) => {
        themeVal = value;
    });
    function change() {
        changeCollection();
        changeTheme();
        localStorage.setItem("colour", themeVal.color);
    }
    function changetheme() {
        changeTheme();
        localStorage.setItem("colour", themeVal.color);
    }

    const navigate = () => goto("/home");
</script>

<div
    class="body"
    style="--main-accent-color: {themeVal.color}; --sec-a-color: {themeVal.color +
        '80'}"
>
    <div class="header">
        <h1>MOORSEE</h1>
        <p>.._ _. _.. . ._. ._.. .. _. .</p>
    </div>
    <div class="img-holder">
        <img
            src={themeVal.path}
            alt="wow"
            on:click={navigate}
            on:keyup={() => {}}
        />
    </div>
    <a href={themeVal.link}>
        <p id="img-info">{themeVal.name} by {themeVal.artist}</p>
    </a>
    <button on:click={change}>Change</button>
    <button on:click={changetheme}>Change Theme</button>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: #f2f2ed;
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
        margin-top: 3rem;
        width: 100%;
        margin-bottom: 1rem;
        user-select: none;
    }

    .header h1 {
        margin: 0px;
        margin-bottom: -24px;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }

    .header p {
        margin: 0px;
        font-size: 0.5em;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    }
    .img-holder {
        height: 375px;
        width: 18%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0.5em;
    }

    .img-holder img {
        height: calc(100% - 5px);
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
    }

    .img-holder img:hover {
        cursor: pointer;
    }
    a {
        width: 100vw;
        /* remove underline */
        text-decoration: none;
    }
    #img-info {
        font-family: "Port Lligat Slab", serif;
        font-size: 0.8em;
        color: var(--sec-a-color);
        text-align: center;
        margin: 0px;
        width: 18%;
        margin-left: auto;
        margin-right: auto;
    }
</style>
