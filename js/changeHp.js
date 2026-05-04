let hp = 10;
let hpChange = 0;
let maxHp = 10;
let ep = 10;
let epChange = 0;
let maxEp = 10;
let block = 0;
let ward = 0;
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

function loadStats() {
  // Get saved data
  hp = Number(localStorage.getItem("hp"));
  maxHp = Number(localStorage.getItem("maxHp"));
  ep = Number(localStorage.getItem("ep"));
  maxEp = Number(localStorage.getItem("maxEp"));
  block = Number(localStorage.getItem("block"));
  ward = Number(localStorage.getItem("ward"));
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
  document.getElementById("hp").innerText = hp;
  document.getElementById("maxHp").innerText = maxHp;
  document.getElementById("ep").innerText = ep;
  document.getElementById("maxEp").innerText = maxEp;
  document.getElementById("block").value = block;
  document.getElementById("block").disabled = true;
  document.getElementById("ward").value = ward;
  document.getElementById("ward").disabled = true;
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

function blockDamage() {
  // for hpChange that is more than double block, reduce hp by hpChange minus block
  // for hpChange that is less than double block, reduce hp by half of hpChange rounded down
  hpChange = Number(document.getElementById("hpChange").value);
  damageType = Number(document.querySelector('input[name="damType"]:checked').value);
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
  if (hpChange > 0) { hp -= hpChange; }
  document.getElementById("hp").innerText = hp;
}

function wardDamage() {
  epChange = Number(document.getElementById("hpChange").value);
  damageType = Number(document.querySelector('input[name="menDamType"]:checked').value);
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
  if (epChange > 0) { ep -= epChange; }
  document.getElementById("ep").innerText = ep;
}

function healHp() {
  hpChange = Number(document.getElementById("healAmount").value);
  if (hpChange > 0) {
    if ((hp + hpChange) < maxHp) {
      hp += hpChange;
    } else {
      hp = maxHp;
    }
    document.getElementById("hp").innerText = hp;
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
    document.getElementById("ep").innerText = ep;
  }
}

function heal() {
  hp = maxHp;
  document.getElementById("hp").innerText = hp;
  ep = maxEp;
  document.getElementById("ep").innerText = ep;
}

function changeStats() {
  localStorage.setItem("hp", hp);
  localStorage.setItem("maxHp", maxHp);
  localStorage.setItem("ep", ep);
  localStorage.setItem("maxEp", maxEp);
  localStorage.setItem("block", block);
  localStorage.setItem("ward", ward);
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

  window.location.href="index.html";
}
