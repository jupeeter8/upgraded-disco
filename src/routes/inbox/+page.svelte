<script>
    import Header from "../../components/Header.svelte";
    import Navbar from "../../components/Navbar.svelte";
    import Message from "../../components/message.svelte";
    const mainColour = localStorage.getItem("colour");
    let messages = [
        {
            text: "Lorem Ipsum nice guchi hello amoug us",
            date: "Feb 12 23",
        },
        {
            text: "Another message here",
            date: "Feb 13 23",
        },

        {
            text: "All that we see or seem is but a dream within a dream said by Edgar Allan Poe is the best poem ever written in the history of the world",
            date: "Feb 14 23",
        },
        {
            text: "Lorem Ipsum nice guchi hello amoug us",
            date: "Feb 12 23",
        },
        {
            text: "Another message here",
            date: "Feb 13 23",
        },

        {
            text: "All that we see or seem is but a dream within a dream said by Edgar Allan Poe is the best poem ever written in the history of the world",
            date: "Feb 14 23",
        },
    ];
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
