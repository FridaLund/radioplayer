// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

fetch("https://api.sr.se/api/v2/channels/?format=json")
  .then((response) => response.json())
  .then((data) => {
    const channels = data.channels;

    const channelsElement = document.getElementById("channels");
    channels.forEach((channel) => {
      if (channel.liveaudio.url) {
        const channelDiv = document.createElement("div");
        channelDiv.classList.add("channel");
        channelDiv.style.backgroundColor = `#${channel.color}`;

        const channelName = document.createElement("h2");
        channelName.textContent = channel.name;

        const channelImage = document.createElement("img");
        channelImage.src = channel.image;

        const audio = document.createElement("audio");
        audio.controls = true;

        const source = document.createElement("source");
        source.src = channel.liveaudio.url;
        source.type = "audio/mpeg";

        audio.appendChild(source);

        channelDiv.appendChild(channelName);
        channelDiv.appendChild(channelImage);
        channelDiv.appendChild(audio);

        channelsElement.appendChild(channelDiv);
      }
    });
  });
