<script>
    import { goto } from "$app/navigation";
    const inbox = () => goto("/inbox");
    const navHome = () => goto("/home");
    export let foundWall;
</script>

<div class="nav">
    <div class="nav-border">
        <div class="nav-btn">
            <span
                class="material-symbols-outlined"
                on:click={navHome}
                on:keypress={() => {}}
            >
                radio_button_checked
            </span>
        </div>
        {#if foundWall === "true"}
            <div class="nav-btn">
                <span class="material-symbols-outlined" on:keypress={() => {}}>
                    view_kanban
                </span>
            </div>
        {:else}{/if}
        <div class="nav-btn">
            <span
                class="material-symbols-outlined"
                on:click={inbox}
                on:keypress={() => {}}
            >
                inbox
            </span>
        </div>
    </div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Port+Lligat+Slab&family=Sacramento&family=VT323&display=swap&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");
    .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
        padding-top: 1.5rem;
        margin-left: auto;
        margin-right: auto;
        flex-grow: 1;
        user-select: none;
    }
    .nav-border {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 68%;
        padding-top: 0.5rem;
        padding-bottom: 0.25rem;
        border-radius: 20px;
        border: 2px solid var(--main-accent-color);
        /* margin-left: auto;
        margin-right: auto; */
        user-select: none;
    }
    .material-symbols-outlined {
        font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
        color: black;
    }
    .nav-btn:hover {
        cursor: pointer;
    }
</style>
