# Formule Prédictive de Goldbach

Ce site propose une méthode analytique pour **prédire une paire (p, q)** telle que **p + q = E**, avec E un nombre pair ≥ 4, selon la Conjecture forte de Goldbach.

---

## 🔍 Méthode

La prédiction repose sur la formule suivante :

```
δ(E) = √E × (log log E) / log E
```

À partir de cette valeur, on obtient une paire (p, q) prédictive :

```
p = E/2 − δ(E)
q = E/2 + δ(E)
```

⚠️ Ces p et q sont **proches** d'une vraie paire (p′, q′) de nombres premiers vérifiant **p′ + q′ = E**.

---

## 🎯 Objectif du site

Ce site sert à :

- Calculer une estimation rapide des paires (p, q) sans vérification de primalité.
- Mettre en évidence une **structure analytique autour de Goldbach**.
- Réduire la zone de recherche des vrais nombres premiers (p′, q′).

---

## ⚠️ Avertissements

- Les valeurs p et q ne sont **pas forcément des nombres premiers**.
- Aucune vérification de primalité n’est faite côté client.
- Il s'agit d'une **formule prédictive**, non d'une preuve de la conjecture.
- Les p′ et q′ réels se trouvent **très proches** des valeurs calculées.

---

## 👤 Auteur

Réalisé par **Bouchaib Bouchaib**, chercheur indépendant en mathématiques basé à Nantes, France.

Projet assisté par une intelligence artificielle dans un cadre collaboratif innovant.

---

## 🌐 Accès au site

👉 [Voir le site](https://bouchaib542.github.io/Goldbach-Predictive-Formula-Website/)

© 2025 Bouchaib Bouchaib — Tous droits réservés.
