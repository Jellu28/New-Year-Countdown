function updateCountdown() {
  const now = new Date();
  const currentYear = now.getFullYear() + 1;
  const newYear = new Date(`January 1, ${currentYear} 00:00:00`);

  const diff = newYear - now;

  //   year = 365 * 24 * 60 * 60 * 1000 = 31 536 000 000ms
  //   day = 24 * 60 * 60 * 1000 = 86 400 000ms
  //  hour = 60 * 60 * 1000 = 3 600 000ms
  //  minute = 60 * 1000 = 60 000ms

  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
