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
  "gift": "兌換碼",
  "unknown": "未知",
}

const basicValueDescription = {
  "ATK": {
    "name": "攻擊力",
    "description": "造成傷害的基礎屬性",
  },
  "DEF": {
    "name": "防禦力",
    "description": "抵禦傷害的基礎屬性",
  },
  "HP": {
    "name": "生命值",
    "description": "承受傷害的基礎屬性",
  },
  "Penetration": {
    "name": "穿透率",
    "description": "將部分攻擊值轉換為額外穿透傷害，不會低於0點",
  },
  "Durability": {
    "name": "忍耐率",
    "description": "將部分防禦值抵禦穿透傷害，不會低於0點",
  },
  "CRIT_Rate": {
    "name": "爆擊率",
    "description": "觸發爆擊傷害的機率",
  },
  "CRIT_DMG": {
    "name": "爆擊傷害",
    "description": "觸發爆擊傷害時的輸出效果",
  },
  "CRIT_Rate_RES": {
    "name": "爆擊率抵抗",
    "description": "抵禦被爆擊傷害的機率",
  },
  "CRIT_DMG_RES": {
    "name": "爆擊傷害抵抗",
    "description": "降低被爆擊時的傷害",
  },
  "Received_Healing_Boost": {
    "name": "受到治療提升",
    "description": "提升受到的治療效果",
  },
  "Received_Shield_Boost": {
    "name": "受到護盾提升",
    "description": "提升受到的護盾效果",
  },
  "Healing_Boost": {
    "name": "造成治療提升",
    "description": "提升施加的治療效果",
  },
  "Generated_Shield_Boost": {
    "name": "造成護盾提升",
    "description": "提升施加的護盾效果",
  },
  "Luck": {
    "name": "幸運",
    "description": "提升戰鬥中抽取到兩星技能牌的機率值",
  },
}

export default {
  rarity,
  attribute,
  particle,
  characterSource,
  basicValueDescription,
}
