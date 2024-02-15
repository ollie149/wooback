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

const supabaseUrl = 'https://eooyufnslcvykkshcpoy.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvb3l1Zm5zbGN2eWtrc2hjcG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1ODIzNDEsImV4cCI6MjAyMDE1ODM0MX0.hFE_nZIzAsnBmW5K9eM3qjLNBvWVOYsIIvU9dtkMFnM';

const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);

async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Signup error', error.message);
  } else {
    console.log('Signup success', user);
  }
}

async function signIn(email, password) {
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Login error', error.message);
  } else {
    console.log('Login success', user);
  }
}

document.getElementById('signup-form').addEventListener('submit', async function(e) {
  e.preventDefault(); // Prevent the default form submission

  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Call the signUp function
  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    alert('Signup error: ' + error.message);
  } else {
    alert('Signup successful!');
  }
});

document.getElementById('login-form').addEventListener('submit', async function(e) {
  e.preventDefault(); // Prevent the default form submission

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Call the signIn function
  const { user, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });

  if (error) {
    alert('Login error: ' + error.message);
  } else {
    alert('Login successful!');
  }
});
