const stats = {
  hp: 10,
  maxHp: 10,
  tempHp: 0,
  ep: 10,
  maxEp: 10,
  tempEp: 0,
  stamina: 0,
  maxStamina: 0,
  tempStamina: 0,
  mana: 0,
  maxMana: 0,
  tempMana: 0,
  block: 0,
  ward: 0,
  indomitable: 0,
  resImpact: 0,
  resFire: 0,
  resFrost: 0,
  resStorm: 0,
  resAcid: 0,
  resPoison: 0,
  resFlux: 0,
  resChaos: 0,
  resHoly: 0,
  resUnholy: 0,
  braceBlock: 2,
  braceWard: 2
};

function loadStats() {
  for (const key in stats) {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
      stats[key] = Number(savedValue);
    }
  }
}

function save() {
  for (const key in stats) {
    localStorage.setItem(key, stats[key]);
  }
}

function changeStats() {
  save();
  window.location.href = "index.html";
}

function submitStats() {
  save();
  window.location.href = "hpchange.html";
}

function swapStats() {
  save();
  window.location.href = "swapsave.html";
}

export { stats, loadStats, save, changeStats, submitStats, swapStats };
