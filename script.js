function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const sqrt = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function findNearestGoldbachPair(E, p_pred, q_pred) {
  const E_num = Number(E);

  // Search radius
  const maxShift = 100000; // Limit to avoid infinite loop
  for (let shift = 0; shift <= maxShift; shift++) {
    const p1 = p_pred - shift;
    const q1 = E_num - p1;
    if (p1 > 1 && isPrime(p1) && isPrime(q1)) return [p1, q1];

    const p2 = p_pred + shift;
    const q2 = E_num - p2;
    if (p2 > 1 && isPrime(p2) && isPrime(q2)) return [p2, q2];
  }
  return [null, null];
}

function calculer() {
  const input = document.getElementById("evenNumber").value.trim();
  const E = BigInt(input);
  const resultDiv = document.getElementById("result");

  // Vérification
  if (E < 4n || E % 2n !== 0n) {
    resultDiv.innerHTML = `<p style="color:red;"><strong>Veuillez entrer un nombre pair ≥ 4.</strong></p>`;
    return;
  }

  const ln = Math.log(Number(E));
  const lnln = Math.log(ln);
  const t = Math.floor(Math.sqrt(Number(E)) * (lnln / ln));

  const p_pred = Number(E / 2n) - t;
  const q_pred = Number(E / 2n) + t;

  // Trouver les vrais premiers proches
  const [p_prime, q_prime] = findNearestGoldbachPair(E, p_pred, q_pred);

  // Affichage
  resultDiv.innerHTML = `
    <p><strong>Résultat :</strong></p>
    <p>E = ${E}</p>
    <p>Formule prédictive :</p>
    <p>p (prévu) = ${p_pred}</p>
    <p>q (prévu) = ${q_pred}</p>
    <p>p + q = ${p_pred + q_pred === Number(E) ? "✓" : "✗"} (${p_pred + q_pred})</p>
    <hr>
    <p>Premiers proches :</p>
    <p>p (réel) = ${p_prime ?? "?"}</p>
    <p>q (réel) = ${q_prime ?? "?"}</p>
    <p>p + q = ${p_prime && q_prime ? p_prime + q_prime : "—"}</p>
    <p><em>Note : Seules les valeurs réelles p et q sont garanties premières.</em></p>
  `;
}
