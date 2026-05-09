let hp = 10;
let maxHp = 10;
let tempHp = 0;
let ep = 10;
let maxEp = 10;
let tempEp = 0;
let stamina = 0;
let maxStamina = 0;
let tempStamina = 0;
let mana = 0;
let maxMana = 0;
let tempMana = 0;
let block = 0;
let ward = 0;
let indomitable = 0;
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
let braceBlock = 2;
let braceWard = 2;

function updateMax() {
  hp = Number(document.getElementById("hp").value);
  maxHp = Number(document.getElementById("maxHp").value);
  ep = Number(document.getElementById("ep").value);
  maxEp = Number(document.getElementById("maxEp").value);
  mana = Number(document.getElementById("mana").value);
  maxMana = Number(document.getElementById("maxMana").value);
  stamina = Number(document.getElementById("stamina").value);
  maxStamina = Number(document.getElementById("maxStamina").value);

  if (hp > maxHp) {
    document.getElementById("maxHp").value = hp;
  }
  if (ep > maxEp) {
    document.getElementById("maxEp").value = ep;
  }
  if (mana > maxMana) {
    document.getElementById("maxMana").value = mana;
  }
  if (stamina > maxStamina) {
    document.getElementById("maxStamina").value = stamina;
  }
}

function submitStats() {
  hp = document.getElementById("hp").value;
  maxHp = document.getElementById("maxHp").value;
  tempHp = document.getElementById("tempHp").value;
  ep = document.getElementById("ep").value;
  maxEp = document.getElementById("maxEp").value;
  tempEp = document.getElementById("tempEp").value;
  stamina = document.getElementById("stamina").value;
  maxStamina = document.getElementById("maxStamina").value;
  tempStamina = document.getElementById("tempStamina").value;
  mana = document.getElementById("mana").value;
  maxMana = document.getElementById("maxMana").value;
  tempMana = document.getElementById("tempMana").value;
  block = document.getElementById("blockRange").value;
  ward = document.getElementById("wardRange").value;
  resImpact = document.getElementById("resImpact").value;
  resFire = document.getElementById("resFire").value;
  resFrost = document.getElementById("resFrost").value;
  resStorm = document.getElementById("resStorm").value;
  resAcid = document.getElementById("resAcid").value;
  resPoison = document.getElementById("resPoison").value;
  resFlux = document.getElementById("resFlux").value;
  resChaos = document.getElementById("resChaos").value;
  resHoly = document.getElementById("resHoly").value;
  resUnholy = document.getElementById("resUnholy").value;
  braceBlock = document.getElementById("braceBlock").value;
  braceWard = document.getElementById("braceWard").value;
  // Save data
  localStorage.setItem("hp", hp);
  localStorage.setItem("maxHp", maxHp);
  localStorage.setItem("tempHp", tempHp);
  localStorage.setItem("ep", ep);
  localStorage.setItem("maxEp", maxEp);
  localStorage.setItem("tempEp", tempEp);
  localStorage.setItem("stamina", stamina);
  localStorage.setItem("maxStamina", maxStamina);
  localStorage.setItem("tempStamina", tempStamina);
  localStorage.setItem("mana", mana);
  localStorage.setItem("maxMana", maxMana);
  localStorage.setItem("tempMana", tempMana);
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
  localStorage.setItem("braceBlock", braceBlock);
  localStorage.setItem("braceWard", braceWard);

  window.location.href="hpchange.html";
}

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
  tempStamina = Number(localStorage.getItem("tempStamina"));
  mana = Number(localStorage.getItem("mana"));
  maxMana = Number(localStorage.getItem("maxMana"));
  tempMana = Number(localStorage.getItem("tempMana"));
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
  braceBlock = Number(localStorage.getItem("braceBlock"));
  braceWard = Number(localStorage.getItem("braceWard"));

  document.getElementById("hp").value = hp;
  document.getElementById("maxHp").value = maxHp;
  document.getElementById("tempHp").value = tempHp;
  document.getElementById("ep").value = ep;
  document.getElementById("maxEp").value = maxEp;
  document.getElementById("tempEp").value = tempEp;
  document.getElementById("stamina").value = stamina;
  document.getElementById("maxStamina").value = maxStamina;
  document.getElementById("tempStamina").value = tempStamina;
  document.getElementById("mana").value = mana;
  document.getElementById("maxMana").value = maxMana;
  document.getElementById("tempMana").value = tempMana;
  document.getElementById("blockRange").value = block;
  document.getElementById("wardRange").value = ward;
  document.getElementById("resImpact").value = resImpact;
  document.getElementById("resFire").value = resFire;
  document.getElementById("resFrost").value = resFrost;
  document.getElementById("resStorm").value = resStorm;
  document.getElementById("resAcid").value = resAcid;
  document.getElementById("resPoison").value = resPoison;
  document.getElementById("resFlux").value = resFlux;
  document.getElementById("resChaos").value = resChaos;
  document.getElementById("resHoly").value = resHoly;
  document.getElementById("resUnholy").value = resUnholy;
  document.getElementById("braceBlock").value = braceBlock;
  document.getElementById("braceWard").value = braceWard;
}

loadStats();
