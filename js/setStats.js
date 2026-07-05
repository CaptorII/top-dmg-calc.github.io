import { stats, loadStats, changeStats, submitStats, swapStats } from "./save.js";
document.getElementById("setup").addEventListener("click", updateAndChangeStats);
document.getElementById("calculator").addEventListener("click", updateAndSubmitStats);
document.getElementById("swap").addEventListener("click", updateAndSwapStats);
document.getElementById("submit").addEventListener("click", updateAndSubmitStats);
document.getElementById("hp").addEventListener("change", updateMax);
document.getElementById("ep").addEventListener("change", updateMax);
document.getElementById("stamina").addEventListener("change", updateMax);
document.getElementById("mana").addEventListener("change", updateMax);

function updateMax() {
  stats.hp = Number(document.getElementById("hp").value);
  stats.maxHp = Number(document.getElementById("maxHp").value);
  stats.ep = Number(document.getElementById("ep").value);
  stats.maxEp = Number(document.getElementById("maxEp").value);
  stats.mana = Number(document.getElementById("mana").value);
  stats.maxMana = Number(document.getElementById("maxMana").value);
  stats.stamina = Number(document.getElementById("stamina").value);
  stats.maxStamina = Number(document.getElementById("maxStamina").value);

  if (stats.hp > stats.maxHp) {
    stats.maxHp = stats.hp;
    document.getElementById("maxHp").value = stats.hp;
  }
  if (stats.ep > stats.maxEp) {
    stats.maxEp = stats.ep;
    document.getElementById("maxEp").value = stats.ep;
  }
  if (stats.mana > stats.maxMana) {
    stats.maxMana = stats.mana;
    document.getElementById("maxMana").value = stats.mana;
  }
  if (stats.stamina > stats.maxStamina) {
    stats.maxStamina = stats.stamina;
    document.getElementById("maxStamina").value = stats.stamina;
  }
}

function updateAll() {
  stats.hp = Number(document.getElementById("hp").value);
  stats.maxHp = Number(document.getElementById("maxHp").value);
  stats.tempHp = Number(document.getElementById("tempHp").value);
  stats.ep = Number(document.getElementById("ep").value);
  stats.maxEp = Number(document.getElementById("maxEp").value);
  stats.tempEp = Number(document.getElementById("tempEp").value);
  stats.stamina = Number(document.getElementById("stamina").value);
  stats.maxStamina = Number(document.getElementById("maxStamina").value);
  stats.tempStamina = Number(document.getElementById("tempStamina").value);
  stats.mana = Number(document.getElementById("mana").value);
  stats.maxMana = Number(document.getElementById("maxMana").value);
  stats.tempMana = Number(document.getElementById("tempMana").value);
  stats.block = Number(document.getElementById("blockRange").value);
  stats.ward = Number(document.getElementById("wardRange").value);
  stats.resImpact = Number(document.getElementById("resImpact").value);
  stats.resFire = Number(document.getElementById("resFire").value);
  stats.resFrost = Number(document.getElementById("resFrost").value);
  stats.resStorm = Number(document.getElementById("resStorm").value);
  stats.resAcid = Number(document.getElementById("resAcid").value);
  stats.resPoison = Number(document.getElementById("resPoison").value);
  stats.resFlux = Number(document.getElementById("resFlux").value);
  stats.resChaos = Number(document.getElementById("resChaos").value);
  stats.resHoly = Number(document.getElementById("resHoly").value);
  stats.resUnholy = Number(document.getElementById("resUnholy").value);
  stats.braceBlock = Number(document.querySelector('input[name="physicalBrace"]:checked').value);
  stats.braceWard = Number(document.querySelector('input[name="essenceBrace"]:checked').value);
}

function populateStats() {
  document.getElementById("hp").value = stats.hp;
  document.getElementById("maxHp").value = stats.maxHp;
  document.getElementById("tempHp").value = stats.tempHp;
  document.getElementById("ep").value = stats.ep;
  document.getElementById("maxEp").value = stats.maxEp;
  document.getElementById("tempEp").value = stats.tempEp;
  document.getElementById("stamina").value = stats.stamina;
  document.getElementById("maxStamina").value = stats.maxStamina;
  document.getElementById("tempStamina").value = stats.tempStamina;
  document.getElementById("mana").value = stats.mana;
  document.getElementById("maxMana").value = stats.maxMana;
  document.getElementById("tempMana").value = stats.tempMana;
  document.getElementById("blockRange").value = stats.block;
  document.getElementById("wardRange").value = stats.ward;
  document.getElementById("resImpact").value = stats.resImpact;
  document.getElementById("resFire").value = stats.resFire;
  document.getElementById("resFrost").value = stats.resFrost;
  document.getElementById("resStorm").value = stats.resStorm;
  document.getElementById("resAcid").value = stats.resAcid;
  document.getElementById("resPoison").value = stats.resPoison;
  document.getElementById("resFlux").value = stats.resFlux;
  document.getElementById("resChaos").value = stats.resChaos;
  document.getElementById("resHoly").value = stats.resHoly;
  document.getElementById("resUnholy").value = stats.resUnholy;

  if (stats.braceBlock === 3) {
    document.getElementById("physicalBraceTwo").checked = true;
  } else if (stats.braceBlock === 4) {
    document.getElementById("physicalBraceThree").checked = true;
  } else {
    document.getElementById("physicalBraceOne").checked = true;
  }

  if (stats.braceWard === 3) {
    document.getElementById("essenceBraceTwo").checked = true;
  } else if (stats.braceWard === 4) {
    document.getElementById("essenceBraceThree").checked = true;
  } else {
    document.getElementById("essenceBraceOne").checked = true;
  }
}

function updateAndChangeStats() {
  updateAll();
  changeStats();
}

function updateAndSubmitStats() {
  updateAll();
  submitStats();
}

function updateAndSwapStats() {
  updateAll();
  swapStats();
}

loadStats();
populateStats();
