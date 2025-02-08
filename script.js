function showMessage(response) {
  // Use an audioPlayed flag instead of videoPlayed
  let audioPlayed = false;
  
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set the button position to absolute
    noButton.style.position = "absolute";

    // Change the image source to "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generate random coordinates within the visible area
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Apply the new coordinates to the button
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update text content and hide the name message
    document.getElementById("question").textContent = "Choose wisely";
    document.getElementById("name").style.display = "none";

    // Add a mouseover event listener to the "No" button
    noButton.addEventListener("mouseover", () => {
      if (!audioPlayed) {
        // Create an audio element instead of a video element
        const audioElement = document.createElement("audio");
        audioElement.src = "./slow_motion.mp3"; // Replace with your audio source
        audioElement.autoplay = true;
        audioElement.controls = false;
        document.body.appendChild(audioElement);
        // Mark that the audio has been played so this runs only once
        audioPlayed = true;
      }

      // Generate new random coordinates when the button is hovered
      const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
      const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

      noButton.style.zIndex = "100";
      // Apply new coordinates to the button, causing it to move
      noButton.style.left = randomX + "px";
      noButton.style.top = randomY + "px";
    });
  }

  if (response === "Yes") {
    // Remove the name message and the "No" button
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Create an audio element to play the sound for a "Yes" response
    const audioElement = document.createElement("audio");
    audioElement.src = "./mera-yesu.mp3"; // Replace with your audio source
    audioElement.preload = "auto"; // Preload the audio
    audioElement.play()
      .catch(e => console.error("Audio playback failed:", e));

    // Update the text content, display the message, and change the image to "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "See you on the 14th mero maya!";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Remove the "Yes" button
    document.getElementById("yesButton").remove();
  }
}
