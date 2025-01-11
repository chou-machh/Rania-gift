onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const messages = [
      "Rania, your amber eyes light up even the darkest night, 🌟",
      "Like tulips and roses, you bring elegance and delight, 🌷🌹",
      "You are the heartbeat of magic, making everything feel right. ✨❤️"
    ];

    const titleElement = document.getElementById("title");
    let index = 0;

    function showMessage() {
      if (index < messages.length) {
        const span = document.createElement("span");
        span.className = "title-line";
        span.style.opacity = "0";
        span.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        span.style.transform = "translateY(20px)";
        span.innerText = messages[index];
        titleElement.appendChild(span);

        // Trigger animation
        setTimeout(() => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
        }, 50);

        index++;
        setTimeout(showMessage, 3000); // Delay before showing the next message
      }
    }

    showMessage();
    clearTimeout(c);
  }, 1000);
};
