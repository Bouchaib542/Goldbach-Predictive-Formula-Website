function isPrime(n) {
  if (n < 2n) return false;
  if (n === 2n || n === 3n) return true;
  if (n % 2n === 0n) return false;
  for (let i = 3n; i * i <= n; i += 2n) {
    if (n % i === 0n) return false;
  }
  return true;
}

function calculerPQ() {
  const input = document.getElementById("inputNumber").value.trim();
  const E = BigInt(input);
  const resultDiv = document.getElementById("resultat");

  if (E < 4n || E % 2n !== 0n) {
    resultDiv.innerHTML = "Veuillez entrer un nombre pair ≥ 4.";
    return;
  }

  // Approximation de t : t ≈ √E · (log log E) / log E
  const ln = Math.log;
  const eFloat = parseFloat(E.toString());
  const sqrtE = Math.sqrt(eFloat);
  const tApprox = Math.round(sqrtE * ln(ln(eFloat)) / ln(eFloat));
  const t = BigInt(tApprox);

  const p = E / 2n - t;
  const q = E / 2n + t;

  if (isPrime(p) && isPrime(q)) {
    resultDiv.innerHTML = `✅ Décomposition trouvée : <strong>${E} = ${p} + ${q}</strong>`;
  } else {
    resultDiv.innerHTML = `❌ La prédiction (${p}, ${q}) ne donne pas deux nombres premiers.`;
  }
}
