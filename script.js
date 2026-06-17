let clockInterval;

function nextStep(stepNumber) {
  document
    .getElementById(`step${stepNumber}`)
    .classList.add("hidden");

  document
    .getElementById(`step${stepNumber + 1}`)
    .classList.remove("hidden");
}

function confuseUser() {
  const messages = [
    "Think harder.",
    "Time believes in you.",
    "Please consult a calendar.",
    "We'll assume that means yes."
  ];

  const random =
    messages[Math.floor(Math.random() * messages.length)];

  alert(random);
}

function showClock() {
  document
    .getElementById("step3")
    .classList.add("hidden");

  document
    .getElementById("clockScreen")
    .classList.remove("hidden");

  updateClock();

  clockInterval = setInterval(updateClock, 1000);
}

function updateClock() {

  const now = new Date();

  const time =
    now.toLocaleTimeString();

  const clock =
    document.getElementById("clock");

  clock.textContent = time;

  const x =
    Math.floor(Math.random() * 100) - 50;

  const y =
    Math.floor(Math.random() * 40) - 20;

  clock.style.transform =
    `translate(${x}px, ${y}px)`;

  const size =
    Math.floor(Math.random() * 40) + 40;

  clock.style.fontSize =
    size + "px";

  const colors = [
    "#ffb3ba",
    "#ffdfba",
    "#ffffba",
    "#baffc9",
    "#bae1ff",
    "#d5baff"
  ];

  document.body.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  const messages = [
    "Time is passing...",
    "You could be studying.",
    "Another second gone forever.",
    "Hope you're using this wisely.",
    "Are you sure you needed the time?",
    "Productivity not detected."
  ];

  document.getElementById("message").textContent =
    messages[Math.floor(Math.random() * messages.length)];
}

function restart() {

  clearInterval(clockInterval);

  document
    .getElementById("clockScreen")
    .classList.add("hidden");

  document
    .getElementById("step1")
    .classList.remove("hidden");
}
