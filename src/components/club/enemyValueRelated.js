function getEnemyValue(basic, delta, round) {
  return basic + delta * (round - 1);
}

function toFixed(value, digits=2) {
  return parseFloat(parseFloat(value).toFixed(digits))
}

export default {
  getEnemyValue,
  toFixed
}
