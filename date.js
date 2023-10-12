function formatTime(date) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  return date.toLocaleDateString(undefined, options);
}

function updateTime() {
  const now = new Date();
  const formattedTime = formatTime(now);
  document.getElementById('dateTime').textContent = formattedTime;
}
updateTime();
setInterval(updateTime, 1000);