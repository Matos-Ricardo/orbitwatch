function updateData() {

const temp = Math.floor(Math.random() * 10) + 25;
const humidity = Math.floor(Math.random() * 20) + 60;

document.getElementById("temp").innerText = temp + "°C";
document.getElementById("humidity").innerText = humidity + "%";

}

setInterval(updateData, 3000);
