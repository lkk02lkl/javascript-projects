const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");


const emoji = [];

async function getEmoji() {
  let response = await fetch("https://emoji-api.com/emojis?access_key=6fcbf044a87e67cc17238b899745b9f312b18888");

  const data = await response.json();
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNumber].emojiName;
  emojiNameEl.innerText = emoji[randomNumber].emojiCode;
});