import { rarities, attributes, particles } from '@/common/icons'

const rarity = {
  R: {
    id: 0,
    name: 'R',
    color: 'blue',
    textColor: 'blue-lighten-4',
    icon: rarities.R,
  },
  SR: {
    id: 1,
    name: 'SR',
    color: 'deep-purple',
    textColor: 'deep-purple-lighten-4',
    icon: rarities.SR,
  },
  SSR: {
    id: 2,
    name: 'SSR',
    color: 'amber-accent-4',
    textColor: 'amber-accent-1',
    icon: rarities.SSR,
  },
}

const attribute = {
  red: {
    id: 0,
    icon: attributes.red,
    name: "紅色情緒",
  },
  green: {
    id: 1,
    icon: attributes.green,
    name: "綠色情緒",
  },
  blue: {
    id: 2,
    icon: attributes.blue,
    name: "藍色情緒",
  },
  light: {
    id: 3,
    icon: attributes.white,
    name: "白色情緒",
  },
  dark: {
    id: 4,
    icon: attributes.black,
    name: "黑色情緒",
  },
}

const particle = {
  circle: {
    id: 0,
    name: "圓振",
    icon: particles.circle,
  },
  triangle: {
    id: 1,
    name: "三相",
    icon: particles.triangle,
  },
  square: {
    id: 2,
    name: "方波",
    icon: particles.square,
  },
  star: {
    id: 3,
    name: "星流",
    icon: particles.star,
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
  rarity,
  attribute,
  particle,
  characterSource,
}
