const attack = [
  {
    name: "破裂傷害",
    description: "「破裂傷害」：對擁有增益的目標造成的傷害提升2倍",
    htmlDescription: "「破裂傷害」：對擁有<b style=\"color: skyblue\">增益</b>的目標造成的傷害提升2倍"
  },
  {
    name: "破滅傷害",
    description: "「破滅傷害」：對擁有減益的目標造成的傷害提升2.5倍",
    htmlDescription: "「破滅傷害」：對擁有<b style=\"color: skyblue\">減益</b>的目標造成的傷害提升2.5倍",
  },
  {
    name: "破盾傷害",
    description: "「破盾傷害」：對擁有護盾的目標的護盾部分造成的傷害提升至3.5倍",
    htmlDescription: "「破盾傷害」：對擁有<b style=\"color: skyblue\">護盾</b>的目標的護盾部分造成的傷害提升至3.5倍",
  },
  {
    name: "憤怒傷害",
    description: "「憤怒傷害」：對目標造成傷害時，自身每損失1%最大生命值，傷害提升1%",
  },
  {
    name: "暴烈傷害",
    description: "「暴烈傷害」：攻擊時按2倍爆擊率造成傷害",
    htmlDescription: "「暴烈傷害」：攻擊時按<b style=\"color: skyblue\">2倍爆擊率</b>造成傷害",
  },
  {
    name: "破碎傷害",
    description: "「破碎傷害」：攻擊時按2倍爆擊傷害造成傷害",
    htmlDescription: "「破碎傷害」：攻擊時按<b style=\"color: skyblue\">2倍爆擊傷害</b>造成傷害",
  },
  {
    name: "穿刺傷害",
    description: "「穿刺傷害」：攻擊時按2倍穿透率造成傷害",
    htmlDescription: "「穿刺傷害」：攻擊時按<b style=\"color: skyblue\">2倍穿透率</b>造成傷害",
  },
  {
    name: "蓄勢傷害",
    description: "「蓄勢傷害」：攻擊時每有1點奧義能量，傷害提升15%",
    htmlDescription: "「蓄勢傷害」：攻擊時<b style=\"color: skyblue\">每有1點奧義能量</b>，傷害提升15%",
  },

  {
    name: "穿透傷害",
    description: "「穿透傷害」：攻擊時無視目標忍耐率",
    htmlDescription: "「穿透傷害」：攻擊時無視目標<b style=\"color: skyblue\">忍耐率</b>",
  },
  {
    name: "真實傷害",
    description: "「真實傷害」：攻擊時無視目標防禦力",
    htmlDescription: "「真實傷害」：攻擊時無視目標<b style=\"color: skyblue\">防禦力</b>",
  },
  {
    name: "間接傷害",
    description: "「間接傷害」：只計算攻擊力和“間接傷害提升/降低”的固定值傷害",
  },

  {
    name: "追擊",
    description: "「追擊」：對隨機敵方目標造成指定卡牌的效果",
  },

]

const buff = [
  {
    name: "吸血",
    description: "「吸血」：攻擊時，按傷害量一定比例回復生命值",
  },
  {
    name: "漸愈",
    description: "「漸愈」：回合結束時恢復一定生命值",
  },
  {
    name: "冰盾",
    description: "「冰盾」：吸收傷害，當「冰盾」結束時，將剩餘的護盾值轉化為生命值",
  },
  {
    name: "蓮舞",
    description: "「蓮舞」：吸收傷害的護盾。攜帶者使用攻擊技能時，按「蓮舞」剩餘護盾量的40%造成一次純粹傷害",
  },
  {
    name: "共生",
    description: "「共生」：抵擋一次減益效果，生效後消失",
  },
  {
    name: "凝結",
    description: "「凝結」：奧義技能傷害提升10%，並且在釋放奧義技能後，轉化為1點奧義能量",
  },
  {
    name: "綻放",
    description: "「綻放」：攜帶者受到敵方攻擊技能牌的攻擊後，若生命值{{}}{{}}，則恢復攜帶者自身30%最大生命值，每回合至多觸發2次",
    argument: [
      {
        condition: {risingStar: [0, 1 , 2]},
        value: ["不高於", "25%"],
      },
      {
        condition: {risingStar: [3, 4, 5, 6]},
        value: ["低於", "40%"],
      },
    ],
  },
  {
    name: "花蕾",
    description: "「花蕾」：爆擊率提升{{}}",
    argument: [
      {
        condition: {rarity: [0]},
        value: ["15%"],
      },
      {
        condition: {rarity: [1]},
        value: ["20%"],
      },
      {
        condition: {rarity: [2]},
        value: ["30%"],
      },
    ]
  },
]

const control = [
  {
    name: "恐懼",
    description: "「恐懼」：無法使用進攻技能",
  },

  {
    name: "冰封",
    description: "「冰封」：無法行動，受到攻擊會提前中斷效果並造成額外傷害",
  },
  {
    name: "沉默",
    description: "「沉默」：無法使用奧義技能",
  },

  {
    name: "失明",
    description: `無法使用治療技能`,
  },
  {
    name: "封印",
    description: `無法使用增益技能`,
  },
]

const debuff = [
  {
    name: "傷害擴散",
    description: `自身受到的部分傷害會被二次施加給場上的其他角色，後續入場的角色不受影響`,
  },
  {
    name: "毒",
    description: "「毒」：回合結束時，按施法者50%攻擊力造成傷害（可疊加，最多8層）",
  },
  {
    name: "易傷",
    description: "「易傷」：提升目標10%受到傷害（可疊加，最高10層）",
  },
  {
    name: "挑釁",
    description: "「挑釁」：挑釁敵方後，敵方只能攻擊自己",
  },
  {
    name: "餘震",
    description: "「餘震」：回合結束時，造成傷害量45%的傷害",
  },
  {
    name: "感染",
    description: "「感染」：無法獲得治療",
  },
  {
    name: "點燃",
    description: "「點燃」：回合結束時，造成傷害量45%的傷害",
  },
  {
    name: "流血",
    description: "「流血」：回合結束時，造成傷害量45%的傷害",
  },
  {
    name: "詛咒",
    description: "「詛咒」：回合結束時，按目標20%最大生命值造成傷害，傷害量不超過施法者120%攻擊力",
  },
  {
    name: "竭力",
    description: "「竭力」：效果期間無法再次觸發「寒生」效果",
  },
  {
    name: "暴露",
    description: "「暴露」：持續期間內，不再受友方的嘲諷類效果保護",
  },
  {
    name: "通緝",
    description: "「通緝」：觸發「被動：凌人之勢」額外傷害的標記，可疊加4層",
  },
  {
    name: "花枝",
    description: "「花枝」：受到敵方攻擊技能牌的攻擊後，若技能觸發爆擊，受擊者獲得1層受到最終傷害提升7%，持續3回合，可疊加6層。每回合至多觸發2次",
  },
  ...control,
]

const neutral = [
  {
    name: "嘲諷",
    description: "「嘲諷」：使敵方的所有單體進攻和單體減益效果指向自己",
  },
  {
    name: "寒生",
    description: "「寒生」：當我方任一單位受到致死傷害時，免疫本次傷害並消耗1層「寒生」效果，同時獲得「竭力」效果，持續2回合，期間無法再次觸發「寒生」效果",
  },
  {
    name: "強化子彈",
    description: "「強化子彈」：存在時，「花影舞」變為強化技能，每次釋放強化技能後消耗1層。可疊加，最高5層",
  },
]

const catoEffect = [
  {
    name: "神秘學",
    description: "「神秘學」：回合結束時，按自身最大生命值的一定比例回復生命值",
    htmlDescription: "「神秘學」：回合結束時，按自身最大生命值的一定比例回復生命值",
  },
  {
    name: "箬葉之護",
    description: "「箬葉之護」：回合結束時恢復一定生命值",
    htmlDescription: "「箬葉之護」：回合結束時恢復一定生命值",
  },
  {
    name: "傷害傳遞",
    description: "「傷害傳遞」：將受到的部分傷害傳遞給其他擁有「傷害傳遞」的目標",
    htmlDescription: "「傷害傳遞」：將受到的部分傷害傳遞給其他擁有「傷害傳遞」的目標",
  },
  {
    name: "傷害擴散",
    description: "「傷害擴散」：自身受到的部分傷害會被二次施加給場上的其他角色，後續入場的角色不受影響",
    htmlDescription: "「傷害擴散」：自身受到的部分傷害會被二次施加給場上的其他角色，後續入場的角色不受影響",
  },
  {
    name: "純粹傷害",
    description: "「純粹傷害」：只計算攻擊力的固定值傷害",
    htmlDescription: "「純粹傷害」：只計算攻擊力的固定值傷害",
  },
  {
    name: "真實傷害",
    description: "「真實傷害」：攻擊時無視目標防禦力",
    htmlDescription: "「真實傷害」：攻擊時無視目標<b style=\"color: skyblue\">防禦力</b>",
  },
]

const skillDescription = [
  ...attack,
  ...buff,
  ...debuff,
  ...neutral
]

export default {
  skillDescription,
  catoEffect
}
