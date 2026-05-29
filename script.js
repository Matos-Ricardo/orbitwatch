function randomTemp() {
  return Math.floor(Math.random() * 12) + 24;
}

function randomHumidity() {
  return Math.floor(Math.random() * 30) + 40;
}

function updateDashboard() {

  const temp = randomTemp();
  const humidity = randomHumidity();

  document.getElementById("temp").innerText = temp + "°C";
  document.getElementById("humidity").innerText = humidity + "%";

  const fire = document.getElementById("fire");

  if(temp >= 32){
    fire.innerText = "Alto";
  } else if(temp >= 28){
    fire.innerText = "Moderado";
  } else {
    fire.innerText = "Baixo";
  }

}

setInterval(updateDashboard, 4000);