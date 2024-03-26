function updateDateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById("datetime");
    datetimeElement.innerHTML = now.toLocaleString();
}

// Call the function initially and then set it to update every second
updateDateTime();
setInterval(updateDateTime, 1000);
