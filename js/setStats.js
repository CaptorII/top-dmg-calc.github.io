let hp = 10;
let maxHp = 10;
let tempHp = 0;
let ep = 10;
let maxEp = 10;
let tempEp = 0;
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

function updateMax() {
  hp = Number(document.getElementById("hp").value);
  maxHp = Number(document.getElementById("maxHp").value);
  ep = Number(document.getElementById("ep").value);
  maxEp = Number(document.getElementById("maxEp").value);

  if (hp > maxHp) {
    document.getElementById("maxHp").value = hp;
  }
  if (ep > maxEp) {
    document.getElementById("maxEp").value = ep;
  }
}

function submitStats() {
  hp = document.getElementById("hp").value;
  maxHp = document.getElementById("maxHp").value;
  tempHp = document.getElementById("tempHp").value;
  ep = document.getElementById("ep").value;
  maxEp = document.getElementById("maxEp").value;
  tempEp = document.getElementById("tempEp").value;
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
  // Save data
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
  document.getElementById("maxHp").value = maxHp;
  document.getElementById("tempHp").value = tempHp;
  document.getElementById("ep").value = ep;
  document.getElementById("maxEp").value = maxEp;
  document.getElementById("tempEp").value = tempEp;
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
}

loadStats();
