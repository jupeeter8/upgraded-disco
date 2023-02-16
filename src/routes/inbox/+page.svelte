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
    import { onAuthStateChange } from "../../service/firebase";

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
</script>

<div
    class="container"
    style="--main-accent-color: {mainColour}; --sec-a-color: {mainColour +
        '80'}; --main-grey: grey"
>
    <Header />
    <div class="msg-box-cnt">
        {#if messages.length === 0}
            <p>
                But to me nothing - the negative, the empty is exceedingly
                powerful.
            </p>
        {:else}
            <div class="message-box">
                {#each messages as message}
                    <Message {mode} {message} />
                {/each}
            </div>
        {/if}
    </div>
    <center
        ><button class="load" on:click={sex}>load</button>
        <button class="load" on:click={change}>change</button>
    </center>
    <Navbar />
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Port+Lligat+Slab&family=Sacramento&family=VT323&display=swap");

    :global(body) {
        margin: 0;
        padding: 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    }
    .message-box {
        display: flex;
        flex-direction: column;
        width: 58%;
        max-height: 70%;
        overflow: auto;
        border: 2px solid var(--main-accent-color);
        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
        margin-bottom: auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .msg-box-cnt {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 58%;
    }

    .msg-box-cnt p {
        font-family: "Sacramento", cursive;
        font-size: 3rem;
        letter-spacing: 0.05rem;
        width: 50%;
        text-align: center;
        color: var(--sec-a-color);
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
</style>
