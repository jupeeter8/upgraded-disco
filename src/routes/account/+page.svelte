<script>
    import { goto } from "$app/navigation";
    import { changeCollection, changeTheme, theme } from "../../service/theme";
    import { onAuthStateChange, auth } from "../../service/firebase";
    import { fade } from "svelte/transition";
    import Header from "../../components/Header.svelte";
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
    <div class="header" style="color:black">
        <Header />
    </div>
    <div class="img-holder">
        <img
            src={themeNow.path}
            alt="wow"
            on:click={navigate}
            on:keyup={() => {}}
        />
    </div>
    <a href={themeNow.link} target="_blank" rel="noreferrer">
        <p id="img-info">{themeNow.name} by {themeNow.artist}</p>
    </a>
</div>
<div class="btn-mobile">
    <div
        class="btns"
        style="--main-accent-color: {themeNow.color}; --sec-a-color: {themeNow.color +
            '80'}"
    >
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

    /* change properties of header component */

    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 10em);
        width: 100vw;
    }
    .header {
        margin-top: 3rem;
        margin-bottom: 2rem;
        width: fit-content;
        user-select: none;
        display: flex;
        font-size: 1.5em;
        padding-top: 1em;
        /* background-color: aqua; */
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
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        background: linear-gradient(var(--sec-a-color) 0 0) no-repeat;
        background-size: 0%;
        transition: all 0.4s cubic-bezier(0.58, 0, 0.48, 1.16);
        padding: 0.1em;
    }
    #img-info:hover {
        color: black;
        background-size: 100%;
        text-decoration: underline;
        /* background-color: grey; */
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
        cursor: pointer;
    }

    .btn:hover {
        background-color: var(--sec-a-color);
        color: black;
    }
    @media screen and (max-width: 600px) {
        :global(body) {
            margin: 0;
            padding: 0;
            background-color: #f2f2ed;
        }
        .body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-height: calc(100vh - 10em);
            width: 100vw;
            padding-left: 1em;
            padding-right: 1em;
            padding-top: 2em;
        }
        .header {
            margin-top: 0;
            width: auto;
            user-select: none;
            font-size: 1em;
            padding-top: 1em;
            margin-bottom: 2em;
            /* background-color: aqua; */
        }
        .img-holder {
            margin: 0;
            padding: 0;
            width: 75%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 0.5em;
        }
        .img-holder img {
            width: 100%;
            object-fit: cover;
            border-radius: 4px;
        }

        .btn-mobile {
            width: 100vw;
            padding-left: 1em;
            padding-right: 1em;
        }
        .btns {
            width: 100%;
            margin: 0;
            padding: 0;
            padding-top: 1em;
            padding-bottom: 1em;
        }
        .btn:focus {
            background-color: var(--sec-a-color);
            color: black;
        }
    }
</style>
