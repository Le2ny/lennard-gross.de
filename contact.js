// E-Mail-Adresse erst im Browser zusammensetzen (gegen Adress-Sammelprogramme)
// und auf Wunsch in die Zwischenablage kopieren.
(function () {
  var adresse = null;
  var els = document.querySelectorAll("[data-mail]");
  for (var i = 0; i < els.length; i++) {
    var p = els[i].getAttribute("data-mail").split("|");
    adresse = p[0] + "@" + p[1];
    var a = document.createElement("a");
    a.href = "mailto:" + adresse;
    a.textContent = adresse;
    els[i].textContent = "";
    els[i].appendChild(a);
  }
  var knopf = document.getElementById("mail-kopieren");
  var meldung = document.getElementById("kopiert");
  if (!knopf || !adresse) return;
  knopf.addEventListener("click", function () {
    if (!navigator.clipboard) { meldung.textContent = adresse; return; }
    navigator.clipboard.writeText(adresse).then(
      function () { meldung.textContent = "Kopiert: " + adresse; },
      function () { meldung.textContent = adresse; });
  });
})();
