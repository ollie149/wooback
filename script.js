const sexyTitleElement = document.getElementById("sexyTitle");
        const playPauseSoundButton = document.getElementById("playPauseSoundButton");
        const audio = document.getElementById("audio");
            audio.volume = 0.3;
        const gifContainer = document.querySelector(".gif-container");

        let isPlaying = false;
        playPauseSoundButton.textContent = "Play that shit";

        // Function to add GIFs one at a time in a spiral pattern
        function addGifsSpiral() {
            let numGifs = 8; // Number of GIFs to add
            let angleIncrement = (2 * Math.PI) / numGifs; // Angle increment for each GIF
            const delay = 500; // Delay between GIF appearances in milliseconds
            const radius = 100; // Radius of the circle around the button

            function addGifWithDelay(i) {
                setTimeout(() => {
                    const gif = document.createElement("img");
                    gif.src = "your-gif-file.gif";
                    gif.classList.add("spiral-gif");

                    let angle = angleIncrement * i; // Calculate the angle for each GIF
                    let x = radius * Math.cos(angle); // Calculate x position
                    let y = radius * Math.sin(angle); // Calculate y position

                    // Set position and rotation
                    gif.style.position = 'absolute';
                    gif.style.left = `50%`;
                    gif.style.top = `50%`;
                    gif.style.transform = `translate(${x-29}px, ${y-29}px) rotate(${angle}rad)`;

                    gifContainer.appendChild(gif);
                }, i * delay);
            }

            for (let i = 0; i < numGifs; i++) {
                addGifWithDelay(i);
            }
            }



// Function to toggle play/pause and add GIFs
function togglePlayPauseAndGifAnimation() {
    if (isPlaying) {
        // Pause the audio when the button is clicked
        audio.pause();
        playPauseSoundButton.textContent = "Keep playin that shit";
    } else {
        // Play the audio when the button is clicked
        audio.play();
        playPauseSoundButton.textContent = "Pause";
        addGifsSpiral();
    }
    isPlaying = !isPlaying; // Toggle the play state
}

playPauseSoundButton.addEventListener("click", () => {
    togglePlayPauseAndGifAnimation(); // Toggle play/pause and GIF animation
});

        audio.addEventListener("ended", () => {
    playPauseSoundButton.textContent = "Play Sound"; // Change the button text when audio ends
    isPlaying = false; // Reset the play state
});

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    const currentDay = daysOfWeek[currentDate.getDay()];

    if (currentDay === "Wednesday") {
        sexyTitleElement.textContent = "IT'S WOOBACK WEDNESDAY BABY!!";
    } else {
        sexyTitleElement.textContent = "WOOOOO!!";
    }