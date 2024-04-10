function getEnemyValue(basic, delta, round, maxRound = 9999) {
  return basic + delta * (Math.min(maxRound, round) - 1);
}

function getEnemyStats(basic, delta, round, maxRound = 9999) {
  return {
    HP: getEnemyValue(basic.HP, delta.HP, round, maxRound),
    ATK: getEnemyValue(basic.ATK, delta.ATK, round, maxRound),
    DEF: getEnemyValue(basic.DEF, delta.DEF, round, maxRound),
  }
}


function toFixed(value, digits=2) {
  return parseFloat(parseFloat(value).toFixed(digits))
}

export default {
  getEnemyStats,
  toFixed
}
