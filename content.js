const observer = new MutationObserver(() => {
  if (document.body) {
      observer.disconnect(); // Stop observing once the body exists
      showOverlay(); // Call your overlay function
  }
});

observer.observe(document.documentElement, { childList: true, subtree: true });

function showOverlay() {
  // Your overlay code here
  const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100vw";
overlay.style.height = "100vh";
overlay.style.backdropFilter = "blur(15px)"; // Stronger blur for a dreamy effect
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // Soft pastel pink overlay
overlay.style.color = "#5a5a5a";
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.flexDirection = "column";
overlay.style.fontSize = "24px";
overlay.style.fontFamily = "'Poppins', sans-serif";
overlay.style.zIndex = "9999";
document.body.appendChild(overlay);

let countdown = 5;
const countdownText = document.createElement("div");
countdownText.innerText = countdown;
countdownText.style.fontSize = "36px";
countdownText.style.fontWeight = "bold";
countdownText.style.color = "#6b5b95"; // Soft muted purple
overlay.appendChild(countdownText);
 
const interval = setInterval(() => {
  countdown--;
  countdownText.innerText = countdown;
  if (countdown === 0) {
    clearInterval(interval);
    showPrompt();
  }
}, 1000);

function showPrompt() {
  countdownText.innerText = "Do you really want to doomscroll again?";
  countdownText.style.fontSize = "28px";
  countdownText.style.textAlign = "center";
  countdownText.style.color = "#ff6b6b"; // Soft coral red

  const buttonContainer = document.createElement("div");
  buttonContainer.style.marginTop = "20px";
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "15px";

  const buttonStyle = `
    padding: 12px 24px;
    font-size: 18px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
  `;

  const yesButton = document.createElement("button");
  yesButton.innerText = "Yes";
  yesButton.style.cssText = buttonStyle + "background-color: #ffadad; color: #5a5a5a;";
  yesButton.onmouseover = () => (yesButton.style.backgroundColor = "#ff8585");
  yesButton.onmouseout = () => (yesButton.style.backgroundColor = "#ffadad");
  yesButton.onclick = () => overlay.remove();

  const noButton = document.createElement("button");
  noButton.innerText = "No";
  noButton.style.cssText = buttonStyle + "background-color: #a2d2ff; color: #5a5a5a;";
  noButton.onmouseover = () => (noButton.style.backgroundColor = "#8ac6ff");
  noButton.onmouseout = () => (noButton.style.backgroundColor = "#a2d2ff");
  noButton.onclick = () => {
    buttonContainer.remove();
    countdownText.innerText = "Good decision, you can close the tab now.";
    countdownText.style.color = "#4caf50"; // Soft green for a positive tone
  };

  buttonContainer.appendChild(yesButton);
  buttonContainer.appendChild(noButton);
  overlay.appendChild(buttonContainer);
}

}
