<script></script>

<div class="b1">🎈</div>
<!-- insert 3 ballons at random places -->

<!-- 
<div class="b2">🎈</div>
<div class="b3">🎈</div> -->
<style>
    /* .b3 {
        position: absolute;
        top: 5em;
        left: 1em;
        font-size: 5rem;
        color: var(--main-accent-color);
        animation: float 2s ease-in-out infinite;
    } */

    .b1 {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 10rem;
        color: var(--main-accent-color);
        animation: float 2s ease-in-out infinite;
    }

    /* .b2 {
        position: absolute;
        top: 2em;
        left: 10em;
        font-size: 5rem;
        color: var(--main-accent-color);
        animation: float 2s ease-in-out infinite;
    } */

    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(0);
        }
    }

    /* animation that makes ballon go from bottom to up and then disappear */
    @keyframes float2 {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
        100% {
            transform: translateY(-100vh);
        }
    }
</style>
