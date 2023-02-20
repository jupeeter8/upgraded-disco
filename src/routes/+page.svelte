<script>
    import { goto } from "$app/navigation";
    import { fade } from "svelte/transition";
    import { emailLogin, onAuthStateChange } from "../service/firebase";
    import { changeCollection, changeTheme, theme } from "../service/theme";
    import { doc, getDoc, db } from "../service/messages";

    let username = "";
    let password = "";

    let themeVal;

    theme.subscribe((value) => {
        themeVal = value;
    });

    changeCollection();
    changeTheme();

    onAuthStateChange((user) => {
        if (user) {
            goto("/home");
        } else {
            console.log("No User");
        }
    });
    const login = async () => {
        const user = await emailLogin(username + "@example.com", password);
        if (user) {
            localStorage.clear();
            localStorage.setItem("user", user.uid);
            localStorage.setItem("loginTime", Date.now());
            localStorage.setItem("colour", themeVal.color);
            localStorage.setItem("theme", JSON.stringify(themeVal));
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            localStorage.setItem("foundWall", docSnap.data().wall);
            goto("/home");
        } else {
            console.error("Login failed");
        }
    };
</script>

<body style="--main-accent-color: {themeVal.color}" transition:fade>
    <div class="layout">
        <div class="header">
            <h1>MOORSEE</h1>
            <p>.._ _. _.. . ._. ._.. .. _. .</p>
        </div>
        <div class="landing">
            <div class="info">
                <p id="fact-txt">
                    85% of plant life is found in oceans. You only have 15% to
                    take care of.
                </p>
                <p id="cringe-txt">Made with ❤️ By Anirudh</p>
                <div class="input-field">
                    <input
                        class="inp-f"
                        type="text"
                        name="name-field"
                        id="name-field"
                        placeholder="Name"
                        bind:value={username}
                    />
                    <input
                        class="inp-f"
                        type="password"
                        name="secret-field"
                        id="secret-field"
                        placeholder="Secret"
                        bind:value={password}
                    />
                </div>
            </div>
            <div class="img-holder">
                <img
                    src={themeVal.path}
                    alt="pink"
                    on:click={login}
                    on:keypress={() => {}}
                />

                <center
                    ><a href={themeVal.link} target="_blank"
                        ><p>{themeVal.name} by {themeVal.artist}</p></a
                    ></center
                >
            </div>
        </div>
    </div>
</body>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Port+Lligat+Slab&family=Sacramento&family=VT323&display=swap");

    :root {
        --main-bg-color: #f2f2ed;
        /* --main-accent-color: #ffffff; */
        --secondary-tet-color: rgb(98, 98, 98);
    }

    :global(body) {
        margin: 0;
        padding: 0;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--main-bg-color);
    }

    .layout {
        /* margin-top: 4rem; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 16rem;
        margin-right: 16rem;
        height: 100vh;
    }

    .header {
        margin-bottom: 3rem;
        font-size: 62px;
    }

    .header p {
        font-family: "VT323", monospace;
        font-size: 0.25em;
    }

    .header h1 {
        font-family: "VT323", monospace;
        margin: 0px;
        font-size: 1em;
        margin-bottom: -20px;
    }

    .landing {
        display: flex;
        height: 400px;
    }

    .info {
        width: 70%;
        height: auto;
        margin-top: 4rem;
        margin-bottom: 4rem;
        padding-right: 6rem;
        margin-right: auto;
    }

    #fact-txt {
        font-family: "Sacramento", cursive;
        font-size: 2.5em;
        margin-bottom: 0.5rem;
        color: var(--main-accent-color);
    }

    #cringe-txt {
        font-family: "VT323", monospace;
        font-size: 1em;
        margin-bottom: 3rem;
        color: var(--secondary-tet-color);
        width: 50%;
    }

    .img-holder {
        height: 375px;
        width: 25%;
    }

    .img-holder img {
        height: calc(100% - 20px);
        /* height: 100%; */
        width: 100%;
        object-fit: cover;
        border-radius: 4px;
    }

    .img-holder img:hover {
        cursor: pointer;
    }

    .img-holder p {
        font-family: "Port Lligat Slab", serif;
        font-size: 1em;
        color: var(--secondary-tet-color);
        /* align this to the center of .img-holder */
        width: 66%;
        text-align: center;
    }

    .input-field {
        display: flex;
    }

    .inp-f {
        background: none;
        color: var(--main-accent-color);
        font-family: "VT323", monospace;
        font-size: 1em;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        border: 3px dashed black;
        margin-right: 2rem;
        cursor: pointer;
        text-align: center;
    }

    .inp-f::placeholder {
        color: #000000;
        font-family: "VT323", monospace;
        font-size: 1em;
    }

    .inp-f:hover {
        border: 3px solid var(--main-accent-color);
    }

    .inp-f:focus {
        outline: none;
        border: 3px solid var(--main-accent-color);
    }
    /* open links in new tab */
    a {
        color: var(--secondary-tet-color);
        text-decoration: none;
    }
</style>
