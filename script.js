function calculer() {
  const input = document.getElementById("evenNumber");
  const resultDiv = document.getElementById("result");
  let E;

  try {
    E = BigInt(input.value);
  } catch {
    resultDiv.innerHTML = "Veuillez entrer un nombre valide.";
    return;
  }

  if (E < 4n || E % 2n !== 0n) {
    resultDiv.innerHTML = "Veuillez entrer un nombre pair ≥ 4.";
    return;
  }

  const sqrtE = Math.sqrt(Number(E));
  const logE = Math.log(Number(E));
  const loglogE = Math.log(logE);
  const delta = BigInt(Math.floor(sqrtE * loglogE / logE));

  const p = E / 2n - delta;
  const q = E - p;

  const output = `
    <strong>Résultat :</strong><br>
    E = ${E}<br>
    p = ${p}<br>
    q = ${q}<br>
    p + q = ${p + q === E ? "✓" : "✗"} (${p + q})<br>
    <em>Note : Ces valeurs sont issues de la formule prédictive, mais ne garantissent pas que p et q soient premiers.</em>
  `;

  resultDiv.innerHTML = output;
}
