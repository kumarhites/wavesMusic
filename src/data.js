import {
    v4 as uuidv4
} from "uuid";

function chillHop() {
    return [{
            name: "LA BOHÈME",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg",
            artist: "C Y G N",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=31591",
            id: uuidv4(),
            active: true,
        },
        {
            name: "Blessed",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
            artist: "Moods, Yasper",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=32860",
            id: uuidv4(),
            active: false,
        },
        {
            name: "Summer in Cotuit",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/87fc7eed9ec0459ce68555bde53e65b02be5acf5-1024x1024.png",
            artist: "Teddy Roxpin",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=35355",
            id: uuidv4(),
            active: false,
        }
    ]
}

export default chillHop;