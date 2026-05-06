let hp = 10;
let hpChange = 0;
let maxHp = 10;
let tempHp = 0;
let ep = 10;
let epChange = 0;
let maxEp = 10;
let tempEp = 0;
let block = 0;
let ward = 0;
let indomitable = 0;
let damageType = "impact";
let resImpact = 0;
let resFire = 0;
let resFrost = 0;
let resStorm = 0;
let resAcid = 0;
let resPoison = 0;
let resFlux = 0;
let resChaos = 0;
let resHoly = 0;
let resUnholy = 0;
let mana = 0;
let maxMana = 0;
let stamina = 0;
let maxStamina = 0;

function loadStats() {
  // Get saved data
  hp = Number(localStorage.getItem("hp"));
  maxHp = Number(localStorage.getItem("maxHp"));
  tempHp = Number(localStorage.getItem("tempHp"));
  ep = Number(localStorage.getItem("ep"));
  maxEp = Number(localStorage.getItem("maxEp"));
  tempEp = Number(localStorage.getItem("tempEp"));
  stamina = Number(localStorage.getItem("stamina"));
  maxStamina = Number(localStorage.getItem("maxStamina"));
  mana = Number(localStorage.getItem("mana"));
  maxMana = Number(localStorage.getItem("maxMana"));
  block = Number(localStorage.getItem("block"));
  ward = Number(localStorage.getItem("ward"));
  indomitable = Number(localStorage.getItem("indomitable"));
  resImpact = Number(localStorage.getItem("resImpact"));
  resFire = Number(localStorage.getItem("resFire"));
  resFrost = Number(localStorage.getItem("resFrost"));
  resStorm = Number(localStorage.getItem("resStorm"));
  resAcid = Number(localStorage.getItem("resAcid"));
  resPoison = Number(localStorage.getItem("resPoison"));
  resFlux = Number(localStorage.getItem("resFlux"));
  resChaos = Number(localStorage.getItem("resChaos"));
  resHoly = Number(localStorage.getItem("resHoly"));
  resUnholy = Number(localStorage.getItem("resUnholy"));
  document.getElementById("hp").value = hp;
  document.getElementById("hp").max = maxHp;
  document.getElementById("maxHp").value = maxHp;
  document.getElementById("maxHp").disabled = true;
  document.getElementById("tempHp").value = tempHp;
  document.getElementById("ep").value = ep;
  document.getElementById("ep").max = maxEp;
  document.getElementById("maxEp").value = maxEp;
  document.getElementById("maxEp").disabled = true;
  document.getElementById("tempEp").value = tempEp;
  document.getElementById("stamina").value = stamina;
  document.getElementById("stamina").max = maxStamina;
  document.getElementById("maxStamina").value = maxStamina;
  document.getElementById("maxStamina").disabled = true;
  document.getElementById("mana").value = mana;
  document.getElementById("mana").max = maxMana;
  document.getElementById("maxMana").value = maxMana;
  document.getElementById("maxMana").disabled = true;
  document.getElementById("block").value = block;
  document.getElementById("block").disabled = true;
  document.getElementById("ward").value = ward;
  document.getElementById("ward").disabled = true;
  document.getElementById("indomitable").value = indomitable;
  document.getElementById("resImpact").value = resImpact;
  document.getElementById("resImpact").disabled = true;
  document.getElementById("resFire").value = resFire;
  document.getElementById("resFire").disabled = true;
  document.getElementById("resFrost").value = resFrost;
  document.getElementById("resFrost").disabled = true;
  document.getElementById("resStorm").value = resStorm;
  document.getElementById("resStorm").disabled = true;
  document.getElementById("resAcid").value = resAcid;
  document.getElementById("resAcid").disabled = true;
  document.getElementById("resPoison").value = resPoison;
  document.getElementById("resPoison").disabled = true;
  document.getElementById("resFlux").value = resFlux;
  document.getElementById("resFlux").disabled = true;
  document.getElementById("resChaos").value = resChaos;
  document.getElementById("resChaos").disabled = true;
  document.getElementById("resHoly").value = resHoly;
  document.getElementById("resHoly").disabled = true;
  document.getElementById("resUnholy").value = resUnholy;
  document.getElementById("resUnholy").disabled = true;
}

loadStats();

function damage() {
  damageType = document.querySelector('input[name="damType"]:checked').value;
  if (damageType === "impact" || damageType === "fire" || damageType === "frost" || damageType === "storm" ||
      damageType === "acid" || damageType === "poison") {
    blockDamage();
  } else {
    wardDamage();
  }
}

function blockDamage() {
  // for hpChange that is more than double block, reduce hp by hpChange minus block
  // for hpChange that is less than double block, reduce hp by half of hpChange rounded down
  // damage is reduced by block, then by resistance, then reduces indomitable, then reduces tempHp, before reducing hp
  hp = Number(document.getElementById("hp").value);
  tempHp = Number(document.getElementById("tempHp").value);
  hpChange = Number(document.getElementById("hpChange").value);
  damageType = document.querySelector('input[name="damType"]:checked').value;
  indomitable = Number(document.getElementById("indomitable").value);
  if (hpChange > (block * 2)) {
    hpChange -= block;
  } else {
    hpChange = hpChange / 2;
    if (hpChange % 1 !== 0) {
      hpChange += 0.5;
    }
  }
  if (damageType === "impact") {
    hpChange -= resImpact;
  } else if (damageType === "fire") {
    hpChange -= resFire;
  } else if (damageType === "frost") {
    hpChange -= resFrost;
  } else if (damageType === "storm") {
    hpChange -= resStorm;
  } else if (damageType === "acid") {
    hpChange -= resAcid;
  } else if (damageType === "poison") {
    hpChange -= resPoison;
  }
  if (hpChange > 0) {
    if (hpChange <= indomitable) {
      indomitable -= hpChange;
      document.getElementById("indomitable").value = indomitable;
      return;
    }
    if (hpChange < tempHp) {
      tempHp -= hpChange;
      document.getElementById("tempHp").value = tempHp;
      return;
    }
    hpChange -= tempHp;
    tempHp = 0;
    document.getElementById("tempHp").value = tempHp;
    hp -= hpChange;
  }
  document.getElementById("hp").value = hp;
}

function wardDamage() {
  ep = Number(document.getElementById("ep").value);
  tempEp = Number(document.getElementById("tempEp").value);
  epChange = Number(document.getElementById("hpChange").value);
  damageType = document.querySelector('input[name="damType"]:checked').value;
  indomitable = Number(document.getElementById("indomitable").value);
  if (epChange > (ward * 2)) {
    epChange = epChange - ward;
  } else {
    epChange = epChange / 2;
    if (epChange % 1 !== 0) {
      epChange = epChange + 0.5;
    }
  }
  if (damageType === "flux") {
    epChange -= resFlux;
  } else if (damageType === "chaos") {
    epChange -= resChaos;
  } else if (damageType === "holy") {
    epChange -= resHoly;
  } else if (damageType === "unholy") {
    epChange -= resUnholy;
  }
  if (epChange > 0) {
    if (epChange <= indomitable) {
      indomitable -= epChange;
      document.getElementById("indomitable").value = indomitable;
      return;
    }
    if (epChange < tempEp) {
      tempEp -= epChange;
      document.getElementById("tempEp").value = tempEp;
      return;
    }
    epChange -= tempEp;
    tempEp = 0;
    document.getElementById("tempEp").value = tempEp;
    ep -= epChange;
  }
  document.getElementById("ep").value = ep;
}

function healHp() {
  hpChange = Number(document.getElementById("healAmount").value);
  if (hpChange > 0) {
    if ((hp + hpChange) < maxHp) {
      hp += hpChange;
    } else {
      hp = maxHp;
    }
    document.getElementById("hp").value = hp;
  }
}

function healEp() {
  epChange = Number(document.getElementById("healAmount").value);
  if (epChange > 0) {
    if ((ep + epChange) < maxEp) {
      ep += epChange;
    } else {
      ep = maxEp;
    }
    document.getElementById("ep").value = ep;
  }
}

function heal() {
  hp = maxHp;
  document.getElementById("hp").value = hp;
  ep = maxEp;
  document.getElementById("ep").value = ep;
}

function updateIndomitable() {
  indomitable = Number(document.getElementById("indomitable").value);
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

function changeStats() {
  localStorage.setItem("hp", hp);
  localStorage.setItem("maxHp", maxHp);
  localStorage.setItem("tempHp", tempHp);
  localStorage.setItem("ep", ep);
  localStorage.setItem("maxEp", maxEp);
  localStorage.setItem("tempEp", tempEp);
  localStorage.setItem("block", block);
  localStorage.setItem("ward", ward);
  localStorage.setItem("indomitable", indomitable);
  localStorage.setItem("resImpact", resImpact);
  localStorage.setItem("resFire", resFire);
  localStorage.setItem("resFrost", resFrost);
  localStorage.setItem("resStorm", resStorm);
  localStorage.setItem("resAcid", resAcid);
  localStorage.setItem("resPoison", resPoison);
  localStorage.setItem("resFlux", resFlux);
  localStorage.setItem("resChaos", resChaos);
  localStorage.setItem("resHoly", resHoly);
  localStorage.setItem("resUnholy", resUnholy);
  localStorage.setItem("stamina", stamina);
  localStorage.setItem("maxStamina", maxStamina);
  localStorage.setItem("mana", mana);
  localStorage.setItem("maxMana", maxMana);

  window.location.href="index.html";
}
