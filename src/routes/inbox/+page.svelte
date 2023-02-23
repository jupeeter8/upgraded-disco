<script>
    import Header from "../../components/Header.svelte";
    import Navbar from "../../components/Navbar.svelte";
    import Message from "../../components/message.svelte";
    import { Translate } from "../../service/Translate";
    import { goto } from "$app/navigation";
    import {
        db,
        collection,
        getDocs,
        query,
        orderBy,
        onSnapshot,
    } from "../../service/messages";
    import { auth, onAuthStateChange } from "../../service/firebase";

    const mainColour = localStorage.getItem("colour");

    onAuthStateChange((user) => {
        if (!user) {
            localStorage.clear();
            goto("/");
        } else {
            localStorage.setItem("user", user.uid);
        }
    });
    let trans = new Translate();
    let mode = false;
    let messages = [];
    let foundWall = localStorage.getItem("foundWall");
    const userID = localStorage.getItem("user");
    const q = query(
        collection(db, "users", userID, "messages"),
        orderBy("Date", "desc")
    );

    // onSnapshot()

    const getAllMessages = async () => {
        let messages = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const date = new Date(doc.data().Date);
            let data = {
                text: doc.data().message,
                // date: "112",
                date: date.toLocaleDateString(),
            };
            messages.push(data);
        });
        for (let i = 0; i < messages.length; i++) {
            messages[i].text = trans.toMorse(messages[i].text);
        }
        return messages;
    };
    // I can't think of a better name because of the monstrosity of
    // javascript. Nothing makes sense
    function sex() {
        getAllMessages().then((data) => {
            messages = data;
        });

        mode = false;
    }

    function change() {
        if (mode) {
            mode = false;
            for (let i = 0; i < messages.length; i++) {
                messages[i].text = trans.toMorse(messages[i].text);
            }
        } else {
            mode = true;
            for (let i = 0; i < messages.length; i++) {
                messages[i].text = trans.toEnglish(messages[i].text);
            }
        }
    }

    function lastLogin() {
        const now = Date.now();
        const loginTime = localStorage.getItem("loginTime");
        console.log(loginTime);
        if (loginTime) {
            const diff = now - loginTime;
            if (diff > 60000) {
                localStorage.clear();
                auth.signOut();
                goto("/");
            }
        }
    }
</script>

<div
    class="container"
    style="--main-accent-color: {mainColour}; --sec-a-color: {mainColour +
        '80'}; --main-grey: grey"
>
    <div class="header-layout">
        <Header />
    </div>
    {#if messages.length === 0}
        <div class="quote">
            <p>
                But to me nothing - the negative, the empty is exceedingly
                powerful.
            </p>
        </div>
    {:else}
        <div class="message-box">
            {#each messages as message}
                <Message {mode} {message} />
            {/each}
        </div>
    {/if}
    <center
        ><button class="load" on:click={sex}>load</button>
        <button class="load" on:click={change}>change</button>
    </center>
    <Navbar {foundWall} />
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Port+Lligat+Slab&family=Sacramento&family=VT323&display=swap");

    :global(body) {
        margin: 0;
        padding: 0;
    }
    :root {
        --main-bg-color: #f2f2ed;
        /* --main-accent-color: #ffffff; */
        --secondary-tet-color: rgb(98, 98, 98);
    }
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        background-color: var(--main-bg-color);
    }
    .message-box {
        display: flex;
        flex-direction: column;
        width: 50%;
        max-height: 20%;
        overflow: auto;
        /* border: 2px solid var(--main-accent-color); */
        margin-left: auto;
        margin-right: auto;
        margin-top: 5em;
        margin-bottom: 2.5em;
        padding-top: 1rem;
        padding-bottom: 1rem;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    .message-box::-webkit-scrollbar {
        width: 0.5rem;
    }

    .message-box:hover {
        outline: 2px dashed var(--sec-a-color);
    }

    .quote {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 58%;
    }

    .quote p {
        font-family: "Sacramento", cursive;
        font-size: 3rem;
        letter-spacing: 0.05rem;
        width: 50%;
        text-align: center;
        color: var(--sec-a-color);
        margin: 0;
    }

    .load {
        /* padding: 0.5rem; */
        width: 98px;
        border-radius: 5px;
        border: none;
        font-family: "VT323", monospace;
        font-size: 1.5em;
        color: var(--main-grey);
        background: none;
    }
    .load:hover {
        background-color: var(--sec-a-color);
        color: black;
        cursor: pointer;
    }
    .header-layout {
        margin-top: 3em;
        margin-left: 10em;
    }

    @media only screen and (max-width: 768px) {
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            /* min-height: 100vh; */
            width: 100vw;
            background-color: var(--main-bg-color);
            padding-left: 1em;
            padding-right: 1em;
            padding-top: 2em;
        }
        .header-layout {
            margin: 0px;
            width: 100%;
            font-size: 1em;
            margin-top: 2em;
            margin-bottom: 8em;
            text-align: center;
        }
        .quote {
            height: fit-content;
            margin-bottom: 4em;
        }
        .quote p {
            font-size: 2rem;
            width: 90%;
        }

        .message-box {
            width: calc(100vw - 2em);

            border: 1px solid var(--main-accent-color);
        }
    }
</style>
