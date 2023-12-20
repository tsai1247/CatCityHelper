const level = {
  R: 0,
  SR: 1,
  SSR: 2,
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
  attribute,
  characterSource
}
