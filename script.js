function updateDashboard(){

    const temperature = Math.floor(Math.random() * 15) + 20;
    const humidity = Math.floor(Math.random() * 40) + 40;

    const risks = [
        {
            text:"Baixo",
            class:"green",
            meter:"level-1",
            alert:"Seguro"
        },
        {
            text:"Moderado",
            class:"yellow",
            meter:"level-2",
            alert:"Alerta Médio"
        },
        {
            text:"Crítico",
            class:"red",
            meter:"level-3",
            alert:"Emergência"
        }
    ];

    const risk = risks[Math.floor(Math.random() * risks.length)];

    document.getElementById("temp").innerText =
        temperature + "°C";

    document.getElementById("humidity").innerText =
        humidity + "%";

    document.getElementById("fireRisk").innerText =
        risk.text;

    document.getElementById("fireStatus").innerText =
        risk.alert;

    document.getElementById("fireStatus").className =
        "status " + risk.class;

    document.getElementById("fireMeter").className =
        "meter " + risk.meter;

    const coverage =
        Math.floor(Math.random() * 30) + 70;

    document.getElementById("progressBar").style.width =
        coverage + "%";

    document.getElementById("coverageText").innerText =
        coverage + "% da área monitorada";

}

setInterval(updateDashboard, 4000);