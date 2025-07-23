function calculer() {
  const input = document.getElementById("inputE");
  const output = document.getElementById("resultat");
  const valeur = input.value.trim();

  // Vérification de l'entrée
  if (!valeur || isNaN(valeur)) {
    output.innerText = "Veuillez entrer un nombre pair valide.";
    return;
  }

  const E = BigInt(valeur);

  if (E < 4n || E % 2n !== 0n) {
    output.innerText = "E doit être un nombre pair supérieur ou égal à 4.";
    return;
  }

  // Formule prédictive : δ(E) = sqrt(E) * (log log E) / log E
  const ln = x => Math.log(Number(x));
  const sqrtE = BigInt(Math.floor(Math.sqrt(Number(E))));
  const logE = ln(E);
  const loglogE = Math.log(logE);
  const delta = BigInt(Math.round(Number(sqrtE) * (loglogE / logE)));

  const p = E / 2n - delta;
  const q = E / 2n + delta;

  output.innerHTML = `
    <p><strong>Résultat :</strong></p>
    <p>E = ${E.toString()}</p>
    <p>p = ${p.toString()}</p>
    <p>q = ${q.toString()}</p>
    <p>p + q = ${p + q === E ? "✓" : "✗"} (${(p + q).toString()})</p>
    <p><em>Note : Ces valeurs sont issues de la formule prédictive, mais ne garantissent pas que p et q soient premiers.</em></p>
  `;
}
