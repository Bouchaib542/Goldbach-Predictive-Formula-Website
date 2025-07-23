// script.js – Goldbach Predictive Decomposition using formula-based estimation

// Fonction pour vérifier si un BigInt est premier function isPrime(n) { if (n < 2n) return false; if (n === 2n || n === 3n) return true; if (n % 2n === 0n || n % 3n === 0n) return false; const sqrtN = BigInt(Math.floor(Math.sqrt(Number(n)))); for (let i = 5n; i <= sqrtN; i += 6n) { if (n % i === 0n || n % (i + 2n) === 0n) return false; } return true; }

// Fonction de prédiction de t selon notre formule function predictT(E) { const lnE = Math.log(Number(E)); const lnlnE = Math.log(lnE); const delta = Math.sqrt(Number(E)) * (lnlnE / lnE); return Math.round(delta); }

// Fonction principale function computeGoldbachPair() { const input = document.getElementById("evenNumber").value.trim(); const resultDiv = document.getElementById("result"); resultDiv.innerHTML = "";

try { const E = BigInt(input); if (E % 2n !== 0n || E < 4n) { resultDiv.innerHTML = "<p style='color:red;'>E must be an even number ≥ 4.</p>"; return; }

const t = BigInt(predictT(E));
const half = E / 2n;
const p = half - t;
const q = E - p;

let display = `<p><strong>Predicted t:</strong> ${t.toString()}<br>` +
              `<strong>Predicted p:</strong> ${p.toString()}<br>` +
              `<strong>Predicted q:</strong> ${q.toString()}</p>`;

if (isPrime(p) && isPrime(q)) {
  display += `<p style='color:green;'>✔ Both p and q are prime. Success!</p>`;
} else {
  display += `<p style='color:orange;'>⚠ Predicted p and/or q are not prime.</p>`;
}

resultDiv.innerHTML = display;

} catch (e) { resultDiv.innerHTML = "<p style='color:red;'>Invalid input. Please enter a valid even number.</p>"; } }

