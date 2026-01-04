if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("Service Worker registriert"))
    .catch(err => console.error("SW Fehler:", err));
}

const gesamtbetragEl = document.getElementById("gesamtbetrag");
const betragInput = document.getElementById("betragInput");
const hinzufuegenBtn = document.getElementById("hinzufuegenBtn");

let gesamtumsatz = 0;

// Beim Laden gespeicherten Wert holen
const gespeicherterUmsatz = localStorage.getItem("gesamtumsatz");
if (gespeicherterUmsatz !== null) {
  gesamtumsatz = parseFloat(gespeicherterUmsatz);
  gesamtbetragEl.textContent = gesamtumsatz.toFixed(2);
}

// Betrag hinzufügen
hinzufuegenBtn.addEventListener("click", () => {
  const betrag = parseFloat(betragInput.value);

  if (isNaN(betrag) || betrag <= 0) {
    alert("Bitte einen gültigen Betrag eingeben.");
    return;
  }

  gesamtumsatz += betrag;
  gesamtbetragEl.textContent = gesamtumsatz.toFixed(2);

  // dauerhaft speichern
  localStorage.setItem("gesamtumsatz", gesamtumsatz);

  betragInput.value = "";
});
