document.getElementById("heartButton").addEventListener("click", function () {
  startHeartAnimation();
});

function startHeartAnimation() {
  setInterval(createHearts, 500);
}

function createHearts() {
  const heartContainer = document.getElementById("heartContainer");

  for (let i = 0; i < 5; i++) {
    // Reduced the number of hearts per interval for a more controlled flow
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.style.backgroundColor = getRandomColor();
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

function getRandomColor() {
  const colors = [
    "#e91e63",
    "#f06292",
    "#f8bbd0",
    "#ad1457",
    "#d81b60",
    "#ff4081",
    "#ff80ab",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
