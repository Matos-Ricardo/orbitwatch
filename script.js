function atualizarDados() {

  const temperaturas = [24, 26, 28, 30, 32];
  const umidades = [40, 50, 65, 70, 80];
  const riscos = ["Baixo", "Moderado", "Alto"];

  const temp =
    temperaturas[Math.floor(Math.random() * temperaturas.length)];

  const humidity =
    umidades[Math.floor(Math.random() * umidades.length)];

  const fire =
    riscos[Math.floor(Math.random() * riscos.length)];

  document.getElementById("temp").innerText = temp + "°C";
  document.getElementById("humidity").innerText = humidity + "%";
  document.getElementById("fire").innerText = fire;
}

setInterval(atualizarDados, 4000);