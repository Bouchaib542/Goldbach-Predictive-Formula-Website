function estPremier(n) {
  if (n < 2n) return false;
  if (n === 2n) return true;
  if (n % 2n === 0n) return false;
  const racine = BigInt(Math.floor(Math.sqrt(Number(n))));
  for (let i = 3n; i <= racine; i += 2n) {
    if (n % i === 0n) return false;
  }
  return true;
}

function calculerPQ() {
  const input = document.getElementById("inputNumber").value.trim();
  const E = BigInt(input);

  if (E % 2n !== 0n || E <= 2n) {
    document.getElementById("resultat").innerText = "Veuillez entrer un nombre pair supérieur à 2.";
    return;
  }

  const lnE = Math.log(Number(E));
  const lnlnE = Math.log(lnE);
  const delta = BigInt(Math.round(Math.sqrt(Number(E)) * (lnlnE / lnE)));

  const p1 = E / 2n - delta;
  const q1 = E - p1;

  const p2 = E / 2n + delta;
  const q2 = E - p2;

  let message = `Formule prédictive : t ≈ √E × log log(E) / log(E)\n`;
  message += `Essais autour de E/2 ± t :\n`;

  if (estPremier(p1) && estPremier(q1)) {
    message += `→ (p, q) = (${p1}, ${q1}) ✅\n`;
  } else if (estPremier(p2) && estPremier(q2)) {
    message += `→ (p, q) = (${p2}, ${q2}) ✅\n`;
  } else {
    message += `❌ Aucun couple premier trouvé avec t prédictif.`;
  }

  document.getElementById("resultat").innerText = message;
}
