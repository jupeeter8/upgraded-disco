<script>
    import { goto } from "$app/navigation";
    import { changeCollection, changeTheme, theme } from "../../service/theme";
    import { onAuthStateChange, auth } from "../../service/firebase";
    import { fade } from "svelte/transition";
    let themeVal;
    theme.subscribe((value) => {
        themeVal = value;
    });
    let themeNow = JSON.parse(localStorage.getItem("theme"));

    onAuthStateChange((user) => {
        if (!user) {
            localStorage.clear();
            goto("/");
        } else {
            localStorage.setItem("user", user.uid);
        }
    });
    function change() {
        changeCollection();
        changeTheme();
        localStorage.setItem("colour", themeVal.color);
        localStorage.setItem("theme", JSON.stringify(themeVal));
        themeNow = themeVal;
    }
    function changetheme() {
        changeTheme();
        localStorage.setItem("colour", themeVal.color);
        localStorage.setItem("theme", JSON.stringify(themeVal));
        themeNow = themeVal;
    }

    const navigate = () => goto("/home");
    const signOut = () => {
        auth.signOut();
    };
</script>

<div
    transition:fade
    class="body"
    style="--main-accent-color: {themeNow.color}; --sec-a-color: {themeNow.color +
        '80'}"
>
    <div class="header">
        <h1>MOORSEE</h1>
        <p>.._ _. _.. . ._. ._.. .. _. .</p>
    </div>
    <div class="img-holder">
        <img
            src={themeNow.path}
            alt="wow"
            on:click={navigate}
            on:keyup={() => {}}
        />
    </div>
    <a href={themeNow.link} target="_blank">
        <p id="img-info">{themeNow.name} by {themeNow.artist}</p>
    </a>
    <div class="btns">
        <button class="btn" on:click={change}>collection</button>
        <button class="btn" on:click={changetheme}>theme</button>
        <button class="btn" on:click={signOut}>sign out</button>
    </div>
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
        height: 40px;
        /* remove underline */
        text-decoration: none;
    }
    #img-info {
        font-family: "Port Lligat Slab", serif;
        font-size: 0.8em;
        color: grey;
        text-align: center;
        margin: 0px;
        width: 18%;
        margin-left: auto;
        margin-right: auto;
    }
    .btns {
        display: flex;
        justify-content: space-around;
        margin-left: auto;
        margin-right: auto;
        width: 38%;
        border: 2px dashed var(--sec-a-color);
        margin-top: 1em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        border-radius: 5px;
    }
    .btn {
        /* padding: 0.5rem; */
        width: fit-content;
        border-radius: 5px;
        border: none;
        font-family: "VT323", monospace;
        font-size: 1.5em;
        color: grey;
        background: none;
    }

    .btn:hover {
        background-color: var(--sec-a-color);
        color: black;
        cursor: pointer;
    }
</style>
