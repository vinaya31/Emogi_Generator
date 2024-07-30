const emojis = [ "😀","😄","😁","😆","🥹","😅","😅","😂","🤣","🥲","😊","😇","🙂","🙃","😉","😌","😍","🥰",
    "😘","😗","😙","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸","🤩","🥳","😏","😒","😞","😔","😟",
    "😕","🙁","😣","😖","☹️","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","🥵","🥶",
    "😶‍🌫️","😱","😨","😰","😥","😓","🤗","🫣","🤭","🤔","🫡","🤫","🤠","🤗","🫣","🤭","🫠","🤫","🤡","👻",
    "😺","😸","😹","😻","😼","😽","🙀","😿","😾"
];

const generateBtn = document.getElementById("emojiGenerateBtn");
const emoji = document.querySelector(".emoji");

//generator random number
generateRandomNumber = () => {
    return Math.floor(Math.random()*emojis.length);
}

//generate random color
generateBtn.addEventListener("click", () => {
    emoji.textContent = emojis[generateRandomNumber()];
})