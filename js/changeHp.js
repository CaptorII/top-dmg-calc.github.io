import { stats, loadStats, changeStats, submitStats, swapStats } from "./save.js";
document.getElementById("setup").addEventListener("click", updateAndChangeStats);
document.getElementById("calculator").addEventListener("click", updateAndSubmitStats);
document.getElementById("swap").addEventListener("click", updateAndSwapStats);
document.getElementById("return").addEventListener("click", updateAndChangeStats);
document.getElementById("indomitable").addEventListener("change", updateIndomitable);
document.getElementById("showLog").addEventListener("click", toggleLog);
document.getElementById("popout").addEventListener("click", popout);
document.getElementById("undo").addEventListener("click", undo);
document.getElementById("damage").addEventListener("click", damage);
document.getElementById("healHp").addEventListener("click", () => heal("hp"));
document.getElementById("healEp").addEventListener("click", () => heal("ep"));
document.getElementById("healFull").addEventListener("click", () => heal("full"));
let hpChange = 0;
let epChange = 0;
let damageType = "impact";
let outputLog;
let originalDamage = 0;
let logTimer = new Array();
let braceAmount = 0;

function populateStats() {
  document.getElementById("hp").value = stats.hp;
  document.getElementById("hp").max = stats.maxHp;
  document.getElementById("maxHp").value = stats.maxHp;
  document.getElementById("maxHp").disabled = true;
  document.getElementById("tempHp").value = stats.tempHp;
  document.getElementById("ep").value = stats.ep;
  document.getElementById("ep").max = stats.maxEp;
  document.getElementById("maxEp").value = stats.maxEp;
  document.getElementById("maxEp").disabled = true;
  document.getElementById("tempEp").value = stats.tempEp;
  document.getElementById("stamina").value = stats.stamina;
  document.getElementById("stamina").max = stats.maxStamina;
  document.getElementById("maxStamina").value = stats.maxStamina;
  document.getElementById("maxStamina").disabled = true;
  document.getElementById("tempStamina").value = stats.tempStamina;
  document.getElementById("mana").value = stats.mana;
  document.getElementById("mana").max = stats.maxMana;
  document.getElementById("maxMana").value = stats.maxMana;
  document.getElementById("maxMana").disabled = true;
  document.getElementById("tempMana").value = stats.tempMana;
  document.getElementById("block").value = stats.block;
  document.getElementById("block").disabled = true;
  document.getElementById("ward").value = stats.ward;
  document.getElementById("ward").disabled = true;
  document.getElementById("indomitable").value = stats.indomitable;
  document.getElementById("resImpact").value = stats.resImpact;
  document.getElementById("resImpact").disabled = true;
  document.getElementById("resFire").value = stats.resFire;
  document.getElementById("resFire").disabled = true;
  document.getElementById("resFrost").value = stats.resFrost;
  document.getElementById("resFrost").disabled = true;
  document.getElementById("resStorm").value = stats.resStorm;
  document.getElementById("resStorm").disabled = true;
  document.getElementById("resAcid").value = stats.resAcid;
  document.getElementById("resAcid").disabled = true;
  document.getElementById("resPoison").value = stats.resPoison;
  document.getElementById("resPoison").disabled = true;
  document.getElementById("resFlux").value = stats.resFlux;
  document.getElementById("resFlux").disabled = true;
  document.getElementById("resChaos").value = stats.resChaos;
  document.getElementById("resChaos").disabled = true;
  document.getElementById("resHoly").value = stats.resHoly;
  document.getElementById("resHoly").disabled = true;
  document.getElementById("resUnholy").value = stats.resUnholy;
  document.getElementById("resUnholy").disabled = true;
  document.getElementById("outputLog").hidden = true;
}

function damage() {
  damageType = document.querySelector('input[name="damType"]:checked').value;
  originalDamage = Number(document.getElementById("hpChange").value);
  if (damageType === "impact" || damageType === "fire" || damageType === "frost" || damageType === "storm" ||
      damageType === "acid" || damageType === "poison") {
    outputLog = blockDamage();
  } else {
    outputLog = wardDamage();
  }
  let logList = document.getElementById("outputLog");
  let logItem = document.createElement("li");
  logItem.textContent = "Reduced " + outputLog[1] + " by " + outputLog[0] + " from " + originalDamage + " "
      + damageType + " damage";
  logList.appendChild(logItem);
  showLog();
  logTimer.push(setTimeout(hideLog, 10000));
}

function blockDamage() {
  // for hpChange that is more than double block, reduce hp by hpChange minus block
  // for hpChange that is less than double block, reduce hp by half of hpChange rounded down
  // damage is reduced by block, then by resistance, then reduces indomitable, then reduces tempHp, before reducing hp
  stats.hp = Number(document.getElementById("hp").value);
  stats.tempHp = Number(document.getElementById("tempHp").value);
  hpChange = Number(document.getElementById("hpChange").value);
  damageType = document.querySelector('input[name="damType"]:checked').value;
  stats.indomitable = Number(document.getElementById("indomitable").value);
  braceAmount = Number(document.querySelectorAll('input[name="braceAmount"]:checked').length);
  if (!document.getElementById("unmitigated").checked) {
    if (hpChange > (stats.block * 2)) {
      hpChange -= stats.block;
    } else {
      hpChange = hpChange / 2;
      if (hpChange % 1 !== 0) {
        hpChange += 0.5;
      }
    }
    if (damageType === "impact") {
      hpChange -= stats.resImpact;
    } else if (damageType === "fire") {
      hpChange -= stats.resFire;
    } else if (damageType === "frost") {
      hpChange -= stats.resFrost;
    } else if (damageType === "storm") {
      hpChange -= stats.resStorm;
    } else if (damageType === "acid") {
      hpChange -= stats.resAcid;
    } else if (damageType === "poison") {
      hpChange -= stats.resPoison;
    }
    if (hpChange > 0 && braceAmount > 0) {
      hpChange -= stats.braceBlock * braceAmount;
    }
    if (hpChange > 0 && hpChange <= stats.indomitable) {
      stats.indomitable -= hpChange;
      document.getElementById("indomitable").value = stats.indomitable;
      return [hpChange, "indomitable"];
    }
  }
  if (hpChange > 0) {
    if (hpChange < stats.tempHp) {
      stats.tempHp -= hpChange;
      document.getElementById("tempHp").value = stats.tempHp;
      return [hpChange, "temp HP"];
    }
    hpChange -= stats.tempHp;
    stats.tempHp = 0;
    document.getElementById("tempHp").value = stats.tempHp;
    stats.hp -= hpChange;
    document.getElementById("hp").value = stats.hp;
    return [hpChange, "HP"];
  }
  return [0, "HP"];
}

function wardDamage() {
  stats.ep = Number(document.getElementById("ep").value);
  stats.tempEp = Number(document.getElementById("tempEp").value);
  epChange = Number(document.getElementById("hpChange").value);
  damageType = document.querySelector('input[name="damType"]:checked').value;
  stats.indomitable = Number(document.getElementById("indomitable").value);
  braceAmount = Number(document.querySelectorAll('input[name="braceAmount"]:checked').length);
  if (!document.getElementById("unmitigated").checked) {
    if (epChange > (stats.ward * 2)) {
      epChange = epChange - stats.ward;
    } else {
      epChange = epChange / 2;
      if (epChange % 1 !== 0) {
        epChange = epChange + 0.5;
      }
    }
    if (damageType === "flux") {
      epChange -= stats.resFlux;
    } else if (damageType === "chaos") {
      epChange -= stats.resChaos;
    } else if (damageType === "holy") {
      epChange -= stats.resHoly;
    } else if (damageType === "unholy") {
      epChange -= stats.resUnholy;
    }
    if (epChange > 0 && braceAmount > 0) {
      epChange -= stats.braceWard * braceAmount;
    }
    if (epChange > 0 && epChange <= stats.indomitable) {
      stats.indomitable -= epChange;
      document.getElementById("indomitable").value = stats.indomitable;
      return [epChange, "indomitable"];
    }
  }
  if (epChange > 0) {
    if (epChange < stats.tempEp) {
      stats.tempEp -= epChange;
      document.getElementById("tempEp").value = stats.tempEp;
      return [epChange, "temp EP"];
    }
    epChange -= stats.tempEp;
    stats.tempEp = 0;
    document.getElementById("tempEp").value = stats.tempEp;
    stats.ep -= epChange;
    document.getElementById("ep").value = stats.ep;
    return [epChange, "EP"];
  }
  return [0, "EP"];
}

function heal(healType) {
  let logList = document.getElementById("outputLog");
  let logItem = document.createElement("li");
  if (healType === "hp") {
    outputLog = healHp();
    logItem.textContent = "Healed " + outputLog[0] + " " + outputLog[1];
  } else if (healType === "ep") {
    outputLog = healEp();
    logItem.textContent = "Healed " + outputLog[0] + " " + outputLog[1];
  } else if (healType === "full") {
    outputLog = healToFull();
    logItem.textContent = "Healed HP/EP to full";
  }
  logList.appendChild(logItem);
  showLog();
  logTimer.push(setTimeout(hideLog, 10000));
}

function healHp() {
  stats.hp = Number(document.getElementById("hp").value);
  hpChange = Number(document.getElementById("healAmount").value);
  if (hpChange > 0) {
    if ((stats.hp + hpChange) > stats.maxHp) {
      hpChange = stats.maxHp - stats.hp;
    }
    stats.hp += hpChange;
    document.getElementById("hp").value = stats.hp;
    return [hpChange, "HP", "heal"];
  }
}

function healEp() {
  stats.ep = Number(document.getElementById("ep").value);
  epChange = Number(document.getElementById("healAmount").value);
  if (epChange > 0) {
    if ((stats.ep + epChange) > stats.maxEp) {
      epChange = stats.maxEp - stats.ep;
    }
    stats.ep += epChange;
    document.getElementById("ep").value = stats.ep;
    return [epChange, "EP", "heal"];
  }
}

function healToFull() {
  hpChange = stats.maxHp - stats.hp;
  stats.hp = stats.maxHp;
  document.getElementById("hp").value = stats.hp;
  epChange = stats.maxEp - stats.ep;
  stats.ep = stats.maxEp;
  document.getElementById("ep").value = stats.ep;
  return [-1, "full", "heal"];
}

function updateIndomitable() {
  stats.indomitable = Number(document.getElementById("indomitable").value);
}

function popout() {
  if (document.getElementById("popout").innerText === "<") {
    document.getElementById("popout").innerText = ">";
  } else {
    document.getElementById("popout").innerText = "<";
  }
  let popupElements = document.getElementsByClassName("resistances");
  for (let i = 0; i < popupElements.length; i++) {
    popupElements[i].hidden = !popupElements[i].hidden;
  }
}

function toggleLog() {
  if (document.getElementById("outputLog").hidden) {
    showLog();
  } else {
    hideLog();
  }
}

function hideLog() {
  document.getElementById("outputLog").hidden = true;
  document.getElementById("showLog").innerText = "Show Log";
  for (let i = 0; i < logTimer.length; i++) {
    clearTimeout(logTimer[i]);
  }
}

function showLog() {
  document.getElementById("outputLog").hidden = false;
  document.getElementById("showLog").innerText = "Hide Log";
  let logItems = document.querySelectorAll("#outputLog li");
  logItems[logItems.length - 1].scrollIntoView();
}

function undo() {
  let logList = document.getElementById("outputLog");
  let logItem = document.createElement("li");
  if (outputLog[0] === -1) {
    stats.hp -= hpChange;
    stats.ep -= epChange;
    document.getElementById("hp").value = stats.hp;
    document.getElementById("ep").value = stats.ep;
    logItem.textContent = "Undid full heal: Removed " + hpChange + " HP and " + epChange + " EP";
  } else if (outputLog[0] === 0) {
    logItem.textContent = "Nothing to undo";
  } else {
    if (outputLog[2] === "heal") {
      outputLog[0] = -outputLog[0];
    }
    if (outputLog[1] === "indomitable") {
      stats.indomitable += outputLog[0];
    } else if (outputLog[1] === "temp HP") {
      stats.tempHp += outputLog[0];
    } else if (outputLog[1] === "HP") {
      stats.hp += outputLog[0];
    } else if (outputLog[1] === "temp EP") {
      stats.tempEp += outputLog[0];
    } else if (outputLog[1] === "EP") {
      stats.ep += outputLog[0];
    }
    document.getElementById("indomitable").value = stats.indomitable;
    document.getElementById("tempHp").value = stats.tempHp;
    document.getElementById("hp").value = stats.hp;
    document.getElementById("tempEp").value = stats.tempEp;
    document.getElementById("ep").value = stats.ep;
    logItem.textContent = "Undid last action: " + outputLog[0] + " " + outputLog[1];
  }
  logList.appendChild(logItem);
  showLog();
  logTimer.push(setTimeout(hideLog, 10000));
  outputLog = [0, "none", "none"];
}

function updateAll() {
  stats.hp = Number(document.getElementById("hp").value);
  stats.tempHp = Number(document.getElementById("tempHp").value);
  stats.ep = Number(document.getElementById("ep").value);
  stats.tempEp = Number(document.getElementById("tempEp").value);
  stats.stamina = Number(document.getElementById("stamina").value);
  stats.tempStamina = Number(document.getElementById("tempStamina").value);
  stats.mana = Number(document.getElementById("mana").value);
  stats.tempMana = Number(document.getElementById("tempMana").value);
  stats.indomitable = Number(document.getElementById("indomitable").value);
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
