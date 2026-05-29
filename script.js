function randomTemp() {
  return Math.floor(Math.random() * 14) + 22;
}

function randomHumidity() {
  return Math.floor(Math.random() * 40) + 35;
}

function randomSatellite() {
  const status = [
    "Operacional",
    "Escaneando",
    "Transmitindo",
    "Online"
  ];

  return status[Math.floor(Math.random() * status.length)];
}

function updateDashboard() {

  const temp = randomTemp();
  const humidity = randomHumidity();

  document.getElementById("temp").innerText = temp + "°C";
  document.getElementById("humidity").innerText = humidity + "%";

  const fire = document.getElementById("fire");

  if(temp >= 33){
    fire.innerText = "Crítico";
  }
  else if(temp >= 29){
    fire.innerText = "Moderado";
  }
  else{
    fire.innerText = "Baixo";
  }

  const statusText = document.querySelector(".online");

  statusText.innerText = randomSatellite();

}

updateDashboard();

setInterval(updateDashboard, 3000);