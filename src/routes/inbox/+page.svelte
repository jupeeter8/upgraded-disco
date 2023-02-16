<script>
    import Header from "../../components/Header.svelte";
    import Navbar from "../../components/Navbar.svelte";
    import Message from "../../components/message.svelte";
    import { goto } from "$app/navigation";
    import {
        db,
        collection,
        getDocs,
        query,
        orderBy,
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

    const userID = localStorage.getItem("user");
    const q = query(
        collection(db, "users", userID, "messages"),
        orderBy("Date", "desc")
    );

    const getAllMessages = async () => {
        const querySnapshot = await getDocs(q);
        const messages = [];
        querySnapshot.forEach((doc) => {
            const date = new Date(doc.data().Date);
            let data = {
                text: doc.data().message,
                date: date.toLocaleDateString(),
            };
            messages.push(data);
        });
        return messages;
    };
    let messages = [];
    getAllMessages().then((data) => {
        messages = data;
    });
</script>

<div class="container" style="--main-accent-color: {mainColour}">
    <Header />
    <div class="msg-box-cnt">
        <div class="message-box">
            {#each messages as message}
                <Message {message} />
            {/each}
        </div>
    </div>
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
        justify-content: center;
        align-items: center;
        height: 58%;
    }
</style>
