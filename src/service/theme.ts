const data = {
    "candles": [
        {
            "path": "assets/candles/hotcandle.jpg",
            "artist": "Raspopova Marina",
            "name": "Picture",
            "color": "#737061",
            "link": "https://unsplash.com/photos/bWMlE4paoQM"
        },
        {
            "path": "assets/candles/scentedcandle.jpg",
            "artist": "Hanna Balan",
            "name": "Picture",
            "color": "#1570BF",
            "link": "https://unsplash.com/photos/YasQvzPbGOQ"
        },
        {
            "path": "assets/candles/orange.jpg",
            "artist": "No Revisions",
            "name": "Picture",
            "color": "#D93D04",
            "link": "https://unsplash.com/photos/CU8ujrbkvCM"
        }
    ],
    "christmas": [
        {
            "path": "assets/christmas/santa.jpg",
            "artist": "CHUTTERSNAP",
            "name": "Picture",
            "color": "#A6032F",
            "link": "https://unsplash.com/photos/omK7llSL3o0"
        },
        {
            "path": "assets/christmas/yoda.jpg",
            "artist": "Charlie Robert",
            "name": "Picture",
            "color": "#A60303",
            "link": "https://unsplash.com/photos/cj2PerxOzWU"
        },
        {
            "path": "assets/christmas/hearts.jpg",
            "artist": "Unnamed",
            "name": "Picture",
            "color": "#F2B5A7",
            "link": "https://unsplash.com/photos/r_oV6smBBYk"
        }
    ],
    "plant": [
        {
            "path": "assets/plants/fern.jpg",
            "artist": "Mike Erskine",
            "name": "Picture",
            "color": "#02732A",
            "link": "https://unsplash.com/photos/K20boRWBDso"
        },
        {
            "path": "assets/plants/hawai.jpg",
            "artist": "Ren Ran",
            "name": "Picture",
            "color": "#7BA69A",
            "link": "https://unsplash.com/photos/bBiuSdck8tU"
        },
        {
            "path": "assets/plants/fav.jpg",
            "artist": "cleo stracuzza",
            "name": "Picture",
            "color": "#7BA69A",
            "link": "https://unsplash.com/photos/avA-YuEe2ZA"
        }
    ],
    "paintings": [
        {
            "path": "assets/paintings/ship.jpg",
            "artist": "Henry Ossawa Tanner",
            "name": "The Miraculous Haul of Fishes",
            "color": "#9FA66F",
            "link": "https://artsandculture.google.com/asset/the-miraculous-haul-of-fishes-henry-ossawa-tanner/LAHsSESclImgWA"
        },
        {
            "path": "assets/paintings/rabindra.png",
            "artist": "Rabindranath Tagore",
            "name": "Woman's Face",
            "color": "#592B02",
            "link": "https://artsandculture.google.com/asset/woman-s-face-rabindranath-tagore/0QGSmyTkDbRNXw"
        },
        {
            "path": "assets/paintings/lisa.png",
            "artist": "Lisa Fattah",
            "name": "Before Becoming Paralyzed",
            "color": "#038C8C",
            "link": "https://artsandculture.google.com/asset/before-becoming-paralyzed-lisa-fattah/TAF4uWc0XH8arQ"
        },
        {
            "path": "assets/paintings/ville.png",
            "artist": "Assadour Bezdikian",
            "name": "La Ville",
            "color": "#BF6576",
            "link": "https://artsandculture.google.com/asset/la-ville-assadour-bezdikian/zAGCgrb3hKxD0Q"
        },
        {
            "path": "assets/paintings/animal.png",
            "artist": "Akira Ikezoe",
            "name": "Somersault",
            "color": "#D9A0AB",
            "link": "https://artsandculture.google.com/asset/somersault-akira-ikezoe/ZQElyxn2Wk96ow"
        },
        {
            "path": "assets/paintings/monk.png",
            "artist": "Caspar David Friedrich",
            "name": "Monk by the Sea",
            "color": "#183327",
            "link": "https://artsandculture.google.com/asset/monk-by-the-sea-caspar-david-friedrich/KwEv_TMiJhn5kA"
        },
        {
            "path": "assets/paintings/tree.png",
            "artist": "Vincent van Gogh",
            "name": "Almond Blossom",
            "color": "#AFBF73",
            "link": "https://artsandculture.google.com/asset/almond-blossom-vincent-van-gogh/dAFXSL9sZ1ulDw"
        },
        {
            "path": "assets/paintings/woman.png",
            "artist": "Claude Monet",
            "name": "Woman with a Parasol - Madame Monet and Her Son",
            "color": "#A68F1C",
            "link": "https://artsandculture.google.com/asset/woman-with-a-parasol-madame-monet-and-her-son-claude-monet/EwHxeymQQnprMg"
        }
    ]
}

let selector = {
    1: "candles",
    2: "christmas",
    3: "plant",
    4: "paintings"
}

export let collection = 0

export let collArray = []
export let theme: object;

export function changeCollection() {
    collection = selector[Math.floor(Math.random() * 4) + 1]
    collArray = data[collection]
}

export function changeTheme() {
    theme = collArray[Math.floor(Math.random() * collArray.length)]
}



