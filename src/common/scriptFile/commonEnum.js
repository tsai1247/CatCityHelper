const level = {
  R: {
    id: 0,
    name: 'R',
    color: 'blue',
    textColor: 'blue-lighten-4'
  },
  SR: {
    id: 1,
    name: 'SR',
    color: 'deep-purple-darken-4',
    textColor: 'deep-purple-lighten-4'
  },
  SSR: {
    id: 2,
    name: 'SSR',
    color: 'amber-accent-4',
    textColor: 'amber-accent-1'
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
    color: "yellow-darken-3",
    name: "白色情緒",
  },
  dark: {
    id: 4,
    color: "grey-darken-4",
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
    icon: "mdi-rhombus-outline"
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

const skillDescription = [
  {
    name: "破裂傷害",
    description: "「破裂傷害」：對擁有<b style=\"color: skyblue\">增益</b>的目標造成的傷害提升2倍"
  },
  {
    name: "破滅傷害",
    description: "「破滅傷害」：對擁有<b style=\"color: skyblue\">減益</b>的目標造成的傷害提升2.5倍"
  },
  {
    name: "破盾傷害",
    description: "「破盾傷害」：對擁有<b style=\"color: skyblue\">護盾</b>的目標的護盾部分造成的傷害提升至3.5倍"
  },


  {
    name: "憤怒傷害",
    description: "「憤怒傷害」：對目標造成傷害時，自身每損失1%最大生命值，傷害提升1%"
  },
  {
    name: "暴烈傷害",
    description: "「暴烈傷害」：攻擊時按<b style=\"color: skyblue\">2倍爆擊率</b>造成傷害"
  },
  {
    name: "破碎傷害",
    description: "「破碎傷害」：攻擊時按<b style=\"color: skyblue\">2倍爆擊傷害</b>造成傷害"
  },
  {
    name: "穿刺傷害",
    description: "「穿刺傷害」：攻擊時按<b style=\"color: skyblue\">2倍穿透率</b>造成傷害"
  },


  {
    name: "穿透傷害",
    description: "「穿透傷害」：攻擊時無視目標<b style=\"color: skyblue\">忍耐率</b>"
  },
  {
    name: "真實傷害",
    description: "「真實傷害」：攻擊時無視目標<b style=\"color: skyblue\">防禦力</b>"
  },
  {
    name: "間接傷害",
    description: "「間接傷害」：只計算攻擊力和“間接傷害提升/降低”的固定值傷害"
  },


  {
    name: "毒",
    description: "「毒」：回合結束時，按施法者50%攻擊力造成傷害（可疊加，最多8層）"
  },
  {
    name: "吸血",
    description: "「吸血」：攻擊時，按傷害量一定比例回復生命值"
  },
  {
    name: "易傷",
    description: "「易傷」：提升目標10%受到傷害（可疊加，最高10層）"
  },
  {
    name: "挑釁",
    description: "「挑釁」：挑釁敵方後，敵方只能攻擊自己"
  },
  {
    name: "恐懼",
    description: "「恐懼」：無法使用進攻技能"
  },
  {
    name: "嘲諷",
    description: "「嘲諷」：使敵方的所有單體進攻和單體減益效果指向自己"
  },
  {
    name: "餘震",
    description: "「餘震」：回合結束時，造成傷害量45%的傷害"
  },
  {
    name: "冰封",
    description: "「冰封」：無法行動，受到攻擊會提前中斷效果並造成額外傷害"
  },
  {
    name: "漸愈",
    description: "「漸愈」：回合結束時恢復一定生命值"
  },
  {
    name: "沉默",
    description: "「沉默」：無法使用奧義技能"
  },
  {
    name: "點燃",
    description: "「點燃」：回合結束時，造成傷害量45%的傷害"
  },
  {
    name: "流血",
    description: "「流血」：回合結束時，造成傷害量45%的傷害"
  },
  {
    name: "詛咒",
    description: "「詛咒」：回合結束時，按目標20%最大生命值造成傷害，傷害量不超過施法者120%攻擊力"
  },
  {
    name: "寒生",
    description: "「寒生」：當我方任一單位受到致死傷害時，免疫本次傷害並消耗1層「寒生」效果，同時獲得「竭力」效果，持續2回合，期間無法再次觸發「寒生」效果"
  },
  {
    name: "竭力",
    description: "「竭力」：效果期間無法再次觸發「寒生」效果"
  },
  {
    name: "冰盾",
    description: "「冰盾」：吸收傷害，當「冰盾」結束時，將剩餘的護盾值轉化為生命值"
  },


  {
    name: "圓振",
    description: `<i class="${particle.circle} mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true"></i>`
  },
  {
    name: "三相",
    description: `<i class="${particle.triangle} mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true"></i>`
  },
  {
    name: "方波",
    description: `<i class="${particle.square} mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true"></i>`
  },
  {
    name: "星流",
    description: `<i class="${particle.star} mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true"></i>`
  },
]

export default {
  level,
  cardLevel,
  attribute,
  particle,
  characterSource,
  skillDescription,
}
