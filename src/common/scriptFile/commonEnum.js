const level = {
  R: {
    id: 0,
    name: 'R',
    color: 'blue'
  },
  SR: {
    id: 1,
    name: 'SR',
    color: 'pruple'
  },
  SSR: {
    id: 2,
    name: 'SSR',
    color: 'yellow'
  },
}

const cardLevel = {
  R: {
    id: 0,
    color: 'grey-darken-3'
  },
  SR: {
    id: 1,
    color: 'deep-purple'
  },
  SSR: {
    id: 2,
    color: 'amber-accent-4'
  },
}

const attribute = {
  red: {
    id: 0,
    color: "red",
    name: "紅色情緒",
  },
  green: {
    id: 1,
    color: "green",
    name: "綠色情緒",
  },
  blue: {
    id: 2,
    color: "blue",
    name: "藍色情緒",
  },
  light: {
    id: 3,
    color: "yellow",
    name: "白色情緒",
  },
  dark: {
    id: 4,
    color: "black",
    name: "黑色情緒",
  },
}

const particle = {
  circle: {
    id: 0,
    name: "圓振",
    icon: "mdi-circle-outline"
  },
  triangle: {
    id: 1,
    name: "三相",
    icon: "mdi-triangle-outline",
  },
  square: {
    id: 2,
    name: "方波",
    icon: "mdi-square-outline"
  },
  star: {
    id: 3,
    name: "星流",
    icon: "mdi-star-outline"
  },
}

const characterSource = {
  "summon": "常駐/活動召喚",
  "specialSummon": "活動召喚",
  "money": "課金",
  "signin": "限時簽到",
  "event": "限時活動",
  "store": "商店",
  "gift": "兌換碼"
}

export default {
  level,
  cardLevel,
  attribute,
  particle,
  characterSource
}
