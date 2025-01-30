import enumList from "./commonEnum";
const { rarity, attribute, particle } = enumList;
const { characterSource } = enumList;

({
  name: "",
  subname: "",
  rarity: rarity.SSR,
  attribute: attribute.green,
  particle: particle.triangle,
  source: [characterSource.specialSummon],
  basic: {
    ATK: "",
    DEF: "",
    HP: "",
    Penetration: "0%",
    Durability: "0%",
    CRIT_Rate: "0%",
    CRIT_DMG: "120%",
    CRIT_Rate_RES: "0%",
    CRIT_DMG_RES: "0%",
    Received_Healing_Boost: "0%",
    Received_Shield_Boost: "0%",
    Healing_Boost: "0%",
    Generated_Shield_Boost: "0%",
    Luck: "0%"
  },
  skills: {
    Sp: {
      name: "",
      description: "",
      arguments: [
        ["%"],
        ["%"],
        ["%"],
        ["%"],
      ]
    },
    A: {
      name: "",
      description: "",
      arguments: [
        ["%"],
        ["%"],
        ["%"],
      ]
    },
    B: {
      name: "",
      description: "",
      arguments: [
        ["%"],
        ["%"],
        ["%"],
      ]
    },
    Passive: {
      name: "",
      description: "",
      arguments: [
        ["%"],
        ["%"],
        ["%"],
        ["%"],
      ]
    },
    risingStar: [
      "",
      "",
      "",
      "",
      "",
      "",
    ]
  },
  supporters: [

  ]
})

const characterList = [
  // newer characters (remember -8 HP)
  {
    name: "金闕",
    subname: "金雀台",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.square,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "157",
      DEF: "61",
      HP: "366",
      Penetration: "14%",
      Durability: "0%",
      CRIT_Rate: "5%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "遮天",
        description: "按{{}}攻擊力，對敵方全體造成「穿透傷害」，並獲得5層「多寶」",
        arguments: [
          ["227%"],
          ["258%"],
          ["292%"],
          ["323%"],
        ]
      },
      A: {
        name: "鏡光",
        description: "按{{}}攻擊力，對敵方全體造成傷害，每命中一個目標，自身獲得一層「多寶」，可疊加，最高14層",
        arguments: [
          ["108%"],
          ["135%"],
          ["180%"],
        ]
      },
      B: {
        name: "藏兵",
        description: "分2段，每段按{{}}攻擊力，對隨機敵方單體造成「穿刺傷害」(每次對重複目標造成的傷害降低35%，最多降低70%)，自身每擁有14層「多寶」，技能額外增加2段",
        arguments: [
          ["90%"],
          ["113%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "每擁有2層「多寶」，穿透率提升{{}}",
        description: "",
        arguments: [
          ["4%"],
          ["4.5%"],
          ["5%"],
          ["6%"],
        ]
      },
      risingStar: [
        "使用「藏兵」時，每造成1段傷害，自身獲得1層「多寶」",
        "",
        "",
        "「多寶」層數上限提升至28層",
        "",
        "當「多寶」達到15層時，「遮天」額外按目標30%已損失生命值，對敵方全體造成一段傷害，不超過自身攻擊力的500%",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "雙生俠影",
    rarity: rarity.SSR,
    attribute: attribute.light,
    particle: particle.square,
    source: [characterSource.event],
    basic: {
      ATK: "176",
      DEF: "59",
      HP: "410",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "7%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "化身連擊",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」",
        arguments: [
          ["113%"],
          ["128%"],
          ["145%"],
          ["160%"],
        ]
      },
      A: {
        name: "兩儀流轉",
        description: "按{{}}攻擊力，對敵方單體造成傷害<br>白色情緒下：按{{}}當前生命值，對友方全體施加2回合護盾<br>黑色情緒下：消耗自身{{}}當前生命值，額外對目標造成一段{{}}的「穿刺傷害」",
        arguments: [
          ["72%", "25%", "5%", "97%"],
          ["90%", "40%", "4%", "125%"],
          ["120%", "50%", "3%", "153%"],
        ]
      },
      B: {
        name: "陰陽化生",
        description: "「吞噬」，並按120%攻擊力，對敵方單體造成傷害<br>白色情緒下：使友方全體下一次攻擊附帶{{}}吸血效果<br>黑色情緒下：當自身擁有護盾時，消耗自身護盾量的{{}}，按我方全體{{}}護盾值對目標造成一次額外傷害（不超過自身攻擊力的400%）",
        arguments: [
          ["20%", "10%", "30%"],
          ["30%", "8%", "40%"],
          ["40%", "5%", "45%"],
        ]
      },
      Passive: {
        name: "萬物歸一",
        description: "\"雙生俠影\"的奧義能量上限降低至2點，使用「化身連擊」時會將自身情緒顏色在黑、白之間進行切換，使用基礎技能時會獲得2層「陰陽合和」，可疊加，最高15層<br>白色情緒下：每層「陰陽合和」提供{{}}生命值，{{}}忍耐率加成<br>黑色情緒下：每層「陰陽合和」提供{{}}攻擊力，{{}}穿透率加成",
        arguments: [
          ["3%", "4%", "3%", "2%"],
          ["3.5%", "5%", "3.5%", "2.5%"],
          ["4%", "6%", "4%", "3%"],
          ["5%", "8%", "5%", "4%"],
        ]
      },
      risingStar: [
        "奧義能量上限降低至1點，使用「化身連擊」後獲得1點奧義能量",
        "",
        "",
        "友方全體攻擊或受到攻擊時，屬性克制效果提升15%，使用基礎技能時額外獲得1層「陰陽合和」",
        "",
        "「陰陽合和」達到滿層時，額外獲得6層「陰陽合和」，且「萬物歸一」同時提供所有屬性加成",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "望舒",
    subname: "守月歌",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.square,
    source: [characterSource.summon],
    basic: {
      ATK: "117",
      DEF: "86",
      HP: "519",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "3%",
      Generated_Shield_Boost: "7%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "星月變",
        description: "使友方全體獲得「星月相生」<br>「星月相生」：按守月歌最大生命值的{{}}提升最大生命值，並且受到治療量、受到護盾量提升{{}}",
        arguments: [
          ["61%", "15%"],
          ["69%", "17%"],
          ["78%", "19%"],
          ["87%", "21%"],
        ]
      },
      A: {
        name: "凝輝",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並按{{}}生命值，回復生命值百分比最低的1名友方",
        arguments: [
          ["102%", "25%"],
          ["120%", "35%"],
          ["150%", "45%"],
        ]
      },
      B: {
        name: "月華",
        description: "按{{}}最大生命值，對友方單體施加護盾2回合",
        arguments: [
          ["33%"],
          ["50%"],
          ["67%"],
        ]
      },
      Passive: {
        name: "星月同輝",
        description: "場上每有1名紅色友方，自身造成護盾效果提升{{}}",
        arguments: [
          ["6%"],
          ["7.3%"],
          ["8.7%"],
          ["10%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，獲得2點奧義能量",
        "",
        "攜帶「星月相生」的友方受到的傷害均攤（此次傷害視為對我方全體釋放進攻技能）",
        "",
        "對友方治療或施加護盾時，使目標獲得30%攻擊力提升，持續3回合",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "霧非",
    subname: "雲天外",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.square,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "146",
      DEF: "65",
      HP: "458",
      Penetration: "0%",
      Durability: "7%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "7%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "耀世聖光",
        description: "按{{}}攻擊力治療友方全體，並使自身獲得2層「永恆」",
        arguments: [
          ["154%"],
          ["175%"],
          ["197%"],
          ["218%"],
        ]
      },
      A: {
        name: "聖光·擊",
        description: "按{{}}攻擊力，對敵方全體造成「穿刺傷害」",
        arguments: [
          ["72%"],
          ["90%"],
          ["120%"],
        ]
      },
      B: {
        name: "聖光·沐",
        description: "對友方全體施加{{}}層「交織」，並使自身獲得{{}}層「永恆」",
        arguments: [
          ["1", "2"],
          ["2", "3"],
          ["4", "4"],
        ]
      },
      Passive: {
        name: "時之梭",
        description: "所有紅色情緒友方攻擊力提升{{}}",
        arguments: [
          ["7%"],
          ["8.7%"],
          ["10.3%"],
          ["12%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，獲得2層「永恆」",
        "",
        "",
        "「交織」層數上限提升至16層<br>使用「聖光·擊」使攜帶「交織」的友方再次獲得一層「交織」",
        "",
        "攜帶「交織」的友方額外獲得15%攻擊力",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "辭青",
    subname: "破陣曲",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.square,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "164",
      DEF: "57",
      HP: "369",
      Penetration: "14%",
      Durability: "0%",
      CRIT_Rate: "5%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "龍嘯九天",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」，並進入「招架」狀態2回合，持續期間內受到傷害降低30%",
        arguments: [
          ["172%"],
          ["196%"],
          ["221%"],
          ["245%"],
        ]
      },
      A: {
        name: "伏龍斬雪",
        description: "按80%攻擊力，對敵方單體造成傷害，並獲得{{}}層4%穿透率提升效果3回合，可疊加，最高10層",
        arguments: [
          ["2"],
          ["3"],
          ["4"],
        ]
      },
      B: {
        name: "守禦八方",
        description: "「挑釁」敵方單體{{}}回合，自身進入「招架」狀態{{}}回合，持續期間受到傷害降低{{}}",
        arguments: [
          ["1", "1", "25%"],
          ["1", "2", "35%"],
          ["2", "2", "40%"],
        ]
      },
      Passive: {
        name: "潛龍",
        description: "處於「招架」狀態下，每次受到敵方攻擊，使自身造成傷害提升{{}}，可疊加，最高10層，當我方增益效果總層數達到20層時，自身獲得「龍焰」，成功「招架」攜帶自身施加「挑釁」的敵方攻擊時，按「招架」敵方傷害的80%，對目標使用「追剿」（無法爆擊，不算做使用進攻技能），每叵合最多觸發3次",
        arguments: [
          ["4%"],
          ["4.5%"],
          ["5%"],
          ["6%"],
        ]
      },
      risingStar: [
        "\"辭青\"的「追剿」無視目標40%防禦力，並按傷害量的25%回復自身生命值",
        "",
        "",
        "戰鬥開始時，獲得「龍焰」，「追剿」對被施加「挑釁」以外的目標也生效",
        "",
        "「追剿」改為按照受到目標造成總傷害量的50%造成傷害",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "菲菲",
    subname: "森嶼漁歌",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "149",
      DEF: "59",
      HP: "387",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "140%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "靈影獵襲",
        description: "按{{}}攻擊力，對敵方單位造成「破碎傷害」，並搶奪目標20%攻擊力2回合(不超過自身基礎攻擊力的35%)",
        arguments: [
          ["188%"],
          ["214%"],
          ["242%"],
          ["268%"],
        ]
      },
      A: {
        name: "森獵撲殺",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並施加「爪痕」，持續3回合，菲菲對攜帶「爪痕」的敵方造成的傷害提高20%，受到來自攜帶「爪痕」的敵方造成的傷害降低15%，場上只有一個敵方擁有「爪痕」",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "疾影漁獵",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」，並對目標施加1層受到破碎傷害提升5%效果，可疊加，最高8層",
        arguments: [
          ["85%"],
          ["100%"],
          ["133.3%"],
        ]
      },
      Passive: {
        name: "協力痛擊",
        description: "所有紅色情緒友方爆擊傷害提升{{}}",
        arguments: [
          ["14%"],
          ["17.4%"],
          ["20.6%"],
          ["24%"],
        ]
      },
      risingStar: [
        "「靈影獵襲」改為先搶奪攻擊力，再造成「破碎傷害」",
        "",
        "",
        "對攜帶「爪痕」的敵方造成的傷害額外擁有40%爆擊傷害",
        "",
        "當自身當前生命值大於50%時，造成最終傷害提升20%",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "羅寇",
    subname: "惡兆之影",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "159",
      DEF: "59",
      HP: "387",
      Penetration: "0%",
      Durability: "7%",
      CRIT_Rate: "0%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "罪欲爆發",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並使目標身上所有「詛咒」立即產生相當於原傷害150%的傷害，造成傷害後目標身上的「詛咒」持續時間減少1回合",
        arguments: [
          ["204%"],
          ["232%"],
          ["262%"],
          ["290%"],
        ]
      },
      A: {
        name: "欲念縛魂",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並延長自身「詛咒」{{}}回合",
        arguments: [
          ["85%", "1"],
          ["100%", "1"],
          ["133.3%", "2"],
        ]
      },
      B: {
        name: "孽魂負影",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並將自身所有「詛咒」<轉移>給目標單體<br><轉移>:刪除原擁有者身上的效果，保留效果的持續回合數和疊加層數將其施加給目標",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "罪罰之身",
        description: "自身每損失1%最大生命值，造成間接傷害提升{{}}，最多提升{{}}，每個回合開始時，如果自身攜帶「詛咒」數量不超過3個，獲得1層「詛咒」，持續2回合，回合結束時自身受到的持續傷害至多將自身生命值消耗至1點",
        arguments: [
          ["0.5%", "33%"],
          ["0.6%", "36%"],
          ["0.7%", "39%"],
          ["0.8%", "42%"],
        ]
      },
      risingStar: [
        "其他友方施加「詛咒」時，自身獲得1層「詛咒」，持續2回合，每個回合至多生效1次",
        "",
        "",
        "自身施加的「詛咒」對敵方造成傷害後，攻擊力提升10%，持續2回合，並在下回合將造成總傷害的45%轉換為1回合護盾，不超過自身最大生命值的50%",
        "",
        "「罪欲爆發」使目標身上「詛咒」產生原傷害180%的傷害",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "梅娜塔",
    subname: "衍罪之淵",
    rarity: rarity.SSR,
    attribute: attribute.dark,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "168",
      DEF: "59",
      HP: "377",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "5%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "深淵復甦",
        description: "「吞噬」補充1張隨機1星技能牌，並降低1點奧義能量上限，進入【魔主】狀態，無法獲得奧義能量，且使用技能牌會消耗1點奧義能量，自身每有1%爆擊率，造成傷害提升1%，最多提升80%<br>當奧義能量為0時，按{{}}攻擊力，對敵方全體造成「破碎傷害」並回到【潛淵】狀態",
        arguments: [
          ["204%"],
          ["232%"],
          ["262%"],
          ["290%"],
        ]
      },
      A: {
        name: "痛苦之犁",
        description: "{{}}按{{}}攻擊力，對敵方單體造成{{}}",
        arguments: [
          ["", "96%", "傷害"],
          ["", "120%", "傷害"],
          ["", "160%", "傷害"],
        ],
        reinforce: [
          ["【魔主】狀態下", "96%", "「破碎傷害」，自身每有1點奧義能量，基礎傷害提升10%"],
          ["【魔主】狀態下", "120%", "「破碎傷害」，自身每有1點奧義能量，基礎傷害提升10%"],
          ["【魔主】狀態下", "160%", "「破碎傷害」，自身每有1點奧義能量，基礎傷害提升10%"],
        ]
      },
      B: {
        name: "靈魂穿刺",
        description: "{{}}按{{}}，對敵方單體造成{{}}",
        arguments: [
          ["", "96%", "傷害，並獲得20%爆擊傷害提升，持續3回合"],
          ["", "120%", "傷害，並獲得20%爆擊傷害提升，持續3回合"],
          ["", "160%", "傷害，並獲得20%爆擊傷害提升，持續3回合"],
        ],
        reinforce: [
          ["【魔主】狀態下", "96%", "「破碎傷害」，並按傷害量的50%對相鄰敵方造成傷害"],
          ["【魔主】狀態下", "120%", "「破碎傷害」，並按傷害量的50%對相鄰敵方造成傷害"],
          ["【魔主】狀態下", "160%", "「破碎傷害」，並按傷害量的50%對相鄰敵方造成傷害"],
        ]
      },
      Passive: {
        name: "衍罪",
        description: "自身爆擊率提升{{}}，戰鬥開始時進入【潛淵】狀態，使用技能牌額外獲得1點奧義能量",
        arguments: [
          ["10%"],
          ["13%"],
          ["16%"],
          ["19%"],
        ]
      },
      risingStar: [
        "【魔主】狀態結束時額外獲得1點奧義能量",
        "",
        "",
        "戰鬥開始時，獲得2點奧義能量；使用技能前，獲得5%攻擊力提升效果，可疊加，最高4層",
        "",
        "當自身生命值高於75%時，造成傷害提升25%，低於50%時，受到傷害降低20%",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "黛蕾拉",
    subname: "多情演繹",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "158",
      DEF: "57",
      HP: "362",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "10%",
      CRIT_DMG: "130%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "銘心之刻",
        description: "按{{}}攻擊力，對敵方單體造成「增幅傷害」，當自身增益層數不低於10層時，本次傷害額外獲得20%爆擊傷害",
        arguments: [
          ["178%"],
          ["203%"],
          ["229%"],
          ["253%"],
        ]
      },
      A: {
        name: "迫近射擊",
        description: "按{{}}攻擊力，對敵方單體造成「增幅傷害」",
        arguments: [
          ["76%"],
          ["90%"],
          ["120%"],
        ]
      },
      B: {
        name: "心意連擊",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並獲得一層「勘破」，持續4回合",
        arguments: [
          ["96%"],
          ["120%"],
          ["160%"],
        ]
      },
      Passive: {
        name: "魅力加成",
        description: "所有綠色情緒友方爆擊率提升{{}}%",
        arguments: [
          ["7%"],
          ["9%"],
          ["10%"],
          ["12%"],
        ]
      },
      risingStar: [
        "使用「迫近射擊」前獲得1層「勘破」",
        "",
        "",
        "回合結束時，如果友方攜帶的增益效果總層數不低於10層，自身攻擊力提升5%，持續2回合，可疊加，最高3層",
        "",
        "使用「銘心之刻」提供的額外爆擊傷害提升至40%，且該效果作為增益效果持續至戰鬥結束",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "凱菲爾",
    subname: "爆破藝術",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "158",
      DEF: "57",
      HP: "391",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "140%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "閃電爆雷",
        description: "按{{}}攻擊力，對敵方單體造成「增幅傷害」",
        arguments: [
          ["178%"],
          ["203%"],
          ["229%"],
          ["253%"],
        ]
      },
      A: {
        name: "定點爆破",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["81.6%"],
          ["96%"],
          ["120%"],
        ]
      },
      B: {
        name: "電磁爆破",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並施加1層「暗雷」，持續1回合，攻擊攜帶「暗雷」的目標後使攻擊者獲得1層「勘破」",
        arguments: [
          ["81.6%"],
          ["96%"],
          ["120%"],
        ]
      },
      Passive: {
        name: "隔爆",
        description: "綠色友方單位每攜帶1層增益效果，攻擊力提升{{}}，最高計算4層",
        arguments: [
          ["2%"],
          ["2.3%"],
          ["2.6%"],
          ["3%"],
        ]
      },
      risingStar: [
        "「定點爆破」傷害類型變更為「增幅傷害」",
        "",
        "",
        "「暗雷」持續回合數+1",
        "",
        "使用「閃電暴雷」前對所有友方施加「勘破」",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "莉莉",
    subname: "天使心",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "120",
      DEF: "71",
      HP: "478",
      Penetration: "0%",
      Durability: "7%",
      CRIT_Rate: "10%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "8%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "守護大家?",
        description: "按{{}}攻擊力治療友方全體，並對治療產生爆擊的目標施加「動力滿滿」，並驅散目標3層減益效果",
        arguments: [
          ["153%"],
          ["174%"],
          ["196%"],
          ["217%"],
        ]
      },
      A: {
        name: "發現壞蛋!",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "不哭不哭",
        description: "按{{}}攻擊力治療友方全體，並提升目標5%忍耐率，持續2回合，可疊加，最高4層",
        arguments: [
          ["58%"],
          ["73%"],
          ["97%"],
        ]
      },
      Passive: {
        name: "愛心滿滿",
        description: "自身造成的治療可以爆擊，自身爆擊率提升{{}}，溢出治療量的50%轉化為等量護盾值",
        arguments: [
          ["6%"],
          ["7.8%"],
          ["9.3%"],
          ["10.8%"],
        ]
      },
      risingStar: [
        "除自己外友方使用奧義技能後，自身造成治療效果提升5%，可疊加，最多3層",
        "",
        "自身所有治療爆擊時都會對目標施加20%防禦力提升效果，持續2回合，不可疊加",
        "",
        "「動力滿滿」提升至攻擊力提升20%，且該效果持續至戰鬥結束",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "赤沼蓮",
    subname: "繪空事",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "148",
      DEF: "63",
      HP: "490",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "3%",
      CRIT_DMG: "130%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "罪與罰",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」，若攻擊時目標身上攜帶「業火」，自身在奧義技能結束後恢復1點奧義能量",
        arguments: [
          ["192%"],
          ["219%"],
          ["247%"],
          ["274%"],
        ]
      },
      A: {
        name: "無間業火",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並對敵方全體施加1層「業火」",
        arguments: [
          ["73%"],
          ["86%"],
          ["108%"],
        ]
      },
      B: {
        name: "透骨連斬",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加1層防禦力降低10%，可疊加3層，持續3回合，該技能不會消耗目標身上的「業火」",
        arguments: [
          ["102%"],
          ["120%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "處刑人",
        description: "所有粒子形態「三相」的友方爆擊傷害提升{{}}",
        arguments: [
          ["14%"],
          ["16.3%"],
          ["18.6%"],
          ["21%"],
        ]
      },
      risingStar: [
        "\"繪空事\"的奧義技能不再消耗目標身上的「業火」",
        "",
        "",
        "對攜帶「業火」的敵方釋放單體技能後，自身攻擊力提升7%，可疊加3層",
        "",
        "釋放單體技能攻擊攜帶「業火」的敵方時，額外按敵方目標30%最大生命值造成1次純粹傷害，不超過\"繪空事\"當前攻擊力的120%，每回合至多觸發1次",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "瑪莉娜",
    subname: "星月夜",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "157",
      DEF: "60",
      HP: "373",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "10%",
      CRIT_DMG: "130%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "爆裂蒼穹",
        description: "按{{}}攻擊力，對敵方全體造成傷害，自身「星芒」達到2/4/6/8層時，基礎傷害提升50%/60%/70%/75%，技能結束時清除全部「星芒」",
        arguments: [
          ["173%"],
          ["197%"],
          ["222%"],
          ["246%"],
        ]
      },
      A: {
        name: "星火衝擊",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並獲得{{}}層「星芒」",
        arguments: [
          ["102%", "1"],
          ["120%", "2"],
          ["150%", "4"],
        ]
      },
      B: {
        name: "星隕破夜",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並獲得1層造成最終傷害提升10%，持續3回合，可疊加3層",
        arguments: [
          ["90%"],
          ["114%"],
          ["154%"],
        ]
      },
      Passive: {
        name: "狂戰",
        description: "每次獲得「星芒」時，攻擊力提升{{}}(可疊加，每個技能最多疊加1層，最高5層)",
        arguments: [
          ["2.6%"],
          ["2.8%"],
          ["3%"],
          ["3.2%"],
        ]
      },
      risingStar: [
        "釋放「星隕破夜」後，獲得1層「星芒」",
        "",
        "",
        "除\"星月夜\"以外，其他粒子型態為「三相」的藍色友方釋放攻擊技能牌後，\"星月夜\"獲得1層「星芒」，每回合至多通過此方式獲得2層「星芒」，回合結束時，若「星芒」層數達到6層，自身回復1點奧義能量",
        "",
        "釋放技能時，自身每有1層「星芒」，此次技能爆擊率提升2%，爆擊傷害提升3%",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "識",
    subname: "風物詩",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "125",
      DEF: "73",
      HP: "535",
      Penetration: "0%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "魚之眼",
        description: "清除敵方全體2層增益效果，並按{{}}最大生命值，對目標造成傷害",
        arguments: [
          ["51%"],
          ["58%"],
          ["65%"],
          ["72%"],
        ]
      },
      A: {
        name: "水中舞",
        description: "按{{}}當前最大生命值，對敵方單體造成傷害，並按目標生命變更量的60%治療友方全體",
        arguments: [
          ["25%"],
          ["32%"],
          ["41%"],
        ]
      },
      B: {
        name: "水上曲",
        description: "按20%戰前最大生命值，提升友方全體最大生命值2回合，提升量不超過目標最大生命值的35%{{}}",
        arguments: [
          [""],
          ["，並驅散目標2層減益效果"],
          ["，並驅散目標4層減益效果"],
        ]
      },
      Passive: {
        name: "乙姬的禮物",
        description: "所有粒子型態為「三相」的友方最大生命值提升{{}}，使用「魚之眼」後，下一次「水中舞」變更為群體傷害",
        arguments: [
          ["12%"],
          ["15%"],
          ["18%"],
          ["20%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，所有藍色友方獲得2回合受到最終傷害降低25%",
        "",
        "",
        "使用「魚之眼」後，每有1個敵方目標被清除增益效果，友方全體獲得1層造成最終傷害提升7%，可疊加4層，持續2回合",
        "",
        "戰鬥開始時，額外獲得1點奧義能量，釋放奧義技能後恢復1點奧義能量，並對我方全體施加造成群體傷害提升20%效果，持續2回合",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "南彌生",
    subname: "浪花約會",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "125",
      DEF: "92",
      HP: "491",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "攜鳥乘空",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加「感染」2回合",
        arguments: [
          ["280%"],
          ["319%"],
          ["360%"],
          ["398%"],
        ]
      },
      A: {
        name: "泡影束縛",
        description: "清除敵方單體{{}}層增益效果{{}}",
        arguments: [
          ["3", ""],
          ["3", "，並對目標施加2回合「泡影」"],
          ["4", "，並對目標施加2回合「泡影」"],
        ]
      },
      B: {
        name: "水波折射",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」",
        arguments: [
          ["95%"],
          ["125%"],
          ["167%"],
        ]
      },
      Passive: {
        name: "浪壁",
        description: "所有藍色情緒友方防禦力提升{{}}",
        arguments: [
          ["12%"],
          ["15%"],
          ["18%"],
          ["20%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，獲得2點奧義能量",
        "",
        "戰鬥開始時，隨機1張「泡影束縛」升1星",
        "",
        "「攜鳥乘空」不會解除「泡影」，並重置「泡影」的持續回合數",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "塞琪",
    subname: "愈者療心",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "113",
      DEF: "89",
      HP: "519",
      Penetration: "0%",
      Durability: "7%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "5%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "生命壁壘",
        description: "按{{}}最大生命值治療自身",
        arguments: [
          ["49%"],
          ["56%"],
          ["64%"],
          ["71%"],
        ]
      },
      A: {
        name: "出診",
        description: "{{}}按{{}}攻擊力{{}}",
        arguments: [
          ["", "120%", "，對敵方單體造成傷害"],
          ["", "150%", "，對敵方單體造成傷害"],
          ["", "200%", "，對敵方單體造成傷害"],
        ],
        reinforce: [
          ["「看診」狀態下釋放: ", "96%", "，對敵方全體造成傷害"],
          ["「看診」狀態下釋放: ", "120%", "，對敵方全體造成傷害"],
          ["「看診」狀態下釋放: ", "160%", "，對敵方全體造成傷害"],
        ]
      },
      B: {
        name: "因人制宜",
        description: "{{}}{{}}",
        arguments: [
          ["", "受到傷害降低30%並進入「看診」狀態，持續3回合"],
          ["", "受到傷害降低30%並進入「看診」狀態，持續3回合"],
          ["", "受到傷害降低30%並進入「看診」狀態，持續3回合"],
        ],
        reinforce: [
          ["「看診」狀態下釋放: ", "按20%最大生命值治療友方全體"],
          ["「看診」狀態下釋放: ", "按28%最大生命值治療友方全體"],
          ["「看診」狀態下釋放: ", "按36%最大生命值治療友方全體"],
        ]
      },
      Passive: {
        name: "仁心仁術",
        description: "自身生命相關能力提升{{}}，上陣戰鬥員都是綠色情緒時，效果額外提升2%",
        arguments: [
          ["8%"],
          ["11%"],
          ["14%"],
          ["17%"],
        ]
      },
      risingStar: [
        "使用奧義技能後，「看診」延長1回合，可以超過最大回合數",
        "",
        "",
        "戰鬥開始時，釋放1張2星「因人制宜」",
        "",
        "「看診」替友方承受的傷害減免20%",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "薇奧拉",
    subname: "十二夜中人",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "143",
      DEF: "64",
      HP: "486",
      Penetration: "0%",
      Durability: "7%",
      CRIT_Rate: "0%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "命運前夜",
        description: "按{{}}攻擊力，對友方全體施加「漸愈」3回合",
        arguments: [
          ["112%"],
          ["127%"],
          ["144%"],
          ["159%"],
        ]
      },
      A: {
        name: "瘋樹根",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加{{}}層防禦力降低10%效果，可疊加3層，持續3回合",
        arguments: [
          ["115%", "1"],
          ["150%", "1"],
          ["190%", "2"],
        ]
      },
      B: {
        name: "愛懶花",
        description: "按自身{{}}爆擊傷害，對友方施加2回合爆擊傷害提升效果(提升量不超過目標爆擊傷害的70%)並補充1張目標的隨機{{}}星技能牌",
        arguments: [
          ["15%", "1"],
          ["20%", "1"],
          ["20%", "2"],
        ]
      },
      Passive: {
        name: "常春藤",
        description: "上陣戰鬥員都是綠色情緒時，友方全體受到治療效果提升{{}}，且受到治療溢出的80%轉化為護盾，持續2回合",
        arguments: [
          ["9.5%"],
          ["11.7%"],
          ["13.9%"],
          ["16.2%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，使一張「愛懶花」升2星",
        "",
        "當爆擊傷害高於200%時，使用「愛懶花」對目標施加的爆擊傷害提升效果額外提升5%",
        "",
        "敵方對我方使用攻擊技能時，友方全體獲得1層10%爆擊率提升效果，持續2回合，可疊加，最高2層",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "埃爾芙",
    subname: "理性邊界",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "157",
      DEF: "59",
      HP: "391",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "雷霆突襲",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」，目標身上每有1層屬性改變類減益效果，基礎傷害提升2%，至多計算5個減益效果",
        arguments: [
          ["182%"],
          ["207%"],
          ["234%"],
          ["259%"],
        ]
      },
      A: {
        name: "空襲先鋒",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並使敵方牌庫隨機1張技能牌星級-1(僅PVP生效)<br>被「吞噬」後，使我方隨機1張技能牌星級+1",
        arguments: [
          ["90%"],
          ["120%"],
          ["170%"],
        ]
      },
      B: {
        name: "精准智控",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並施加{{}}層「洞察」",
        arguments: [
          ["87%", "1"],
          ["105%", "2"],
          ["135%", "2"],
        ]
      },
      Passive: {
        name: "無死角",
        description: "上陣戰鬥員都是綠色情緒時，友方攻擊力提升{{}}，攜帶「洞察」的敵方使用攻擊技能後，使目標「洞察」層數+1，每回合至多觸發3次",
        arguments: [
          ["7%"],
          ["8.7%"],
          ["10.3%"],
          ["12%"],
        ]
      },
      risingStar: [
        "敵方使用攻擊技能後，按原傷害的30%對隨機敵方釋放1次1星「精准智控」，每回合至多觸發1次",
        "",
        "",
        "使用「精准智控」後，額外對敵方全體施加1層「洞察」",
        "",
        "使用「雷霆突襲」時，基礎傷害提升效果提升至5%，且至多計算10個減益效果",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "阿芙羅",
    subname: "掌上淑女",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "164",
      DEF: "59",
      HP: "379",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "3%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "戰術合擊",
        description: "按{{}}攻擊力，對敵方單體造成傷害，選擇1張卡進行「吞噬」，吞噬的卡每有1星，基礎傷害提升2%，並在技能釋放時和下回合開始時獲得2層「警覺」",
        arguments: [
          ["204%"],
          ["231%"],
          ["262%"],
          ["290%"],
        ]
      },
      A: {
        name: "攻擊示警",
        description: "按{{}}攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          ["120%"],
          ["120%", "，並使自身獲得1點奧義能量"],
          ["120%", "，並使自身獲得2點奧義能量"],
        ]
      },
      B: {
        name: "撲擊擒拿",
        description: "按{{}}攻擊力，對敵方全體造成「破滅傷害」，牌庫中每有一張攻擊技能牌，基礎傷害提升4%，最高提升12%",
        arguments: [
          ["64.3%"],
          ["74.8%"],
          ["99.7%"],
        ]
      },
      Passive: {
        name: "團體作戰",
        description: "上陣戰鬥員都是綠色情緒時，自身攻擊力提升{{}}<br>除自身外友方受到攻擊後，獲得1層「警覺」，每個技能至多觸發1次<br>當敵方對我方使用進攻技能時，若阿芙蘿擁有5層「警覺」，立即觸發反擊，按原傷害的80%釋放1張1星「撲擊擒拿」(每回合至多觸發1次)，並在回合結束時清除全部「警覺」",
        arguments: [
          ["8%"],
          ["11%"],
          ["13.5%"],
          ["15%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，獲得3層「警覺」",
        "",
        "",
        "反擊釋放的「撲擊擒拿」也能獲得奧義能量，並使觸發反擊所需的「警覺」層數降低至4層",
        "",
        "反擊改為按原傷害的120%釋放「撲擊擒拿」",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "鯨語海鳴",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "168",
      DEF: "59",
      HP: "368",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "汐語鯨躍",
        description: "按{{}}攻擊力，對敵方單體造成「巨人傷害」",
        arguments: [
          ["192%"],
          ["219%"],
          ["247%"],
          ["274%"],
        ]
      },
      A: {
        name: "浮鯨",
        description: "按{{}}攻擊力，對敵方全體造成「破盾傷害」",
        arguments: [
          ["90%"],
          ["108%"],
          ["144%"],
        ]
      },
      B: {
        name: "海之頌",
        description: "2回合內爆擊傷害提升30%{{}}，並獲得{{}}回合「流溢」",
        arguments: [
          ["", "1"],
          ["，爆擊率提升20%", "2"],
          ["，爆擊率提升30%", "2"],
        ]
      },
      Passive: {
        name: "蓄潮",
        description: "每次行動後，攻擊力提升{{}}，可疊加{{}}層，每回合首次行動後，額外獲得1點奧義能量",
        arguments: [
          ["3%", "4"],
          ["3.3%", "4"],
          ["3.6%", "6"],
          ["4%", "6"],
        ]
      },
      risingStar: [
        "釋放攻擊技能後，若擊破敵方護盾，則額外再獲得1層「蓄潮」的攻擊力提升效果",
        "",
        "",
        "\"鯨語海鳴\"以外的友方釋放攻擊技能擊破敵方護盾後，\"鯨語海鳴\"也可獲得1層「蓄潮」的攻擊力提升效果，並且疊加上限提升至6層",
        "",
        "每次奧義能量回復滿後，驅散自身3層減益效果；每次釋放奧義技能後，後續奧義技能造成最終傷害提升10%，可疊加3層",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "非天",
    subname: "企鵝冰山",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.square,
    source: [characterSource.summon],
    basic: {
      ATK: "160",
      DEF: "59",
      HP: "387",
      Penetration: "0%",
      Durability: "7%",
      CRIT_Rate: "0%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "企鵝衝鋒",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」，若成功擊破敵方護盾，自身回復1點奧義能量",
        arguments: [
          ["224%"],
          ["255%"],
          ["288%"],
          ["319%"],
        ]
      },
      A: {
        name: "企鵝號令",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      B: {
        name: "深海湧潮",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並對目標施加3回合「海蝕」",
        arguments: [
          ["96%"],
          ["120%"],
          ["160%"],
        ]
      },
      Passive: {
        name: "浪擊",
        description: "對攜帶護盾的敵方目標釋放攻擊技能時，攻擊力提升{{}}",
        arguments: [
          ["8%"],
          ["10%"],
          ["12%"],
          ["14%"],
        ]
      },
      risingStar: [
        "「企鵝號令」和「企鵝衝鋒」造成最終傷害提升20%",
        "",
        "攜帶「海蝕」的敵方目標被擊破護盾後，扣除1點奧義能量，並且在2回合內基礎能力值降低10%，每回合至多觸發1次",
        "",
        "每次對攜帶「海蝕」的敵方目標釋放單體攻擊技能後，穿透率提升10%，可疊加4層",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "激潮之夏",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "157",
      DEF: "59",
      HP: "416",
      Penetration: "0%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "潮湧之刻",
        description: "無視免疫對目標施加30%「傷害擴散」2回合，並按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["224%"],
          ["255%"],
          ["288%"],
          ["319%"],
        ]
      },
      A: {
        name: "湧動炮",
        description: "按{{}}攻擊力，對敵方單體造成「暴烈傷害」",
        arguments: [
          ["90%"],
          ["100%"],
          ["124%"],
        ]
      },
      B: {
        name: "水動力",
        description: "觸發<「發現」({{}})>效果，並按自身{{}}基礎攻擊力，提升友方全體攻擊力{{}}回合",
        arguments: [
          ["1", "10%", "2"],
          ["2", "15%", "2"],
          ["3", "20%", "3"],
        ]
      },
      Passive: {
        name: "沖刷",
        description: "戰鬥開始時，敵方全體受到護盾和治療降低{{}}",
        arguments: [
          ["20%"],
          ["23%"],
          ["26%"],
          ["30%"],
        ]
      },
      risingStar: [
        "戰鬥開始時獲得2點奧義能量",
        "",
        "",
        "釋放奧義技能後，自身隨機1張技能牌升星1次，並回復1點奧義能量",
        "",
        "釋放「水動力」後，為友方全體施加2回合「滲透」",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "南彌生",
    subname: "破浪逐潮",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.star,
    source: [characterSource.event],
    basic: {
      ATK: "94",
      DEF: "54",
      HP: "374",
      Penetration: "0%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "深海怒濤",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對受到傷害的目標施加「餘震」3回合",
        arguments: [
          ["215%"],
          ["228%"],
          ["248%"],
          ["268%"],
        ]
      },
      A: {
        name: "浪影突襲",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」",
        arguments: [
          ["90%"],
          ["100%"],
          ["124%"],
        ]
      },
      B: {
        name: "浪花噴射",
        description: "按{{}}攻擊力，對敵方全體造成「穿透傷害」",
        arguments: [
          ["95%"],
          ["125%"],
          ["167%"],
        ]
      },
      Passive: {
        name: "海嘯",
        description: "上陣戰鬥員都是藍色情緒時，自身爆擊傷害提升{{}}",
        arguments: [
          ["20%"],
          ["24%"],
          ["28%"],
          ["32%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升6%",
        "",
        "戰鬥開始時，爆擊率提升6%，爆擊傷害提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "場外焦點",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "128",
      DEF: "73",
      HP: "509",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "全力應援",
        description: "對友方全體施加2回合受到最終傷害降低{{}}，並使自身獲得2回合「凝聚力」",
        arguments: [
          ["15%"],
          ["17%"],
          ["19%"],
          ["21%"],
        ]
      },
      A: {
        name: "愛心鼓舞",
        description: "按{{}}攻擊力治療友方全體，並對友方全體施加2回合爆擊傷害提升15%",
        arguments: [
          ["60%"],
          ["76%"],
          ["103%"],
        ]
      },
      B: {
        name: "雀躍不已",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "振奮人心",
        description: "所有紅色情緒友方爆擊率提升{{}}",
        arguments: [
          ["7%"],
          ["8.4%"],
          ["9.8%"],
          ["11.2%"],
        ]
      },
      risingStar: [
        "所有紅色情緒友方生命值每降低1%，受到治療提升0.5%",
        "",
        "釋放「愛心鼓舞」時，溢出治療量的100%轉化為1回合護盾",
        "",
        "所有紅色情緒友方攜帶護盾時，造成最終傷害提升20%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "絲卡蕾特",
    subname: "架刑罪贖",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "151",
      DEF: "60",
      HP: "384",
      Penetration: "14%",
      Durability: "0%",
      CRIT_Rate: "3%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "當守聖安息",
        description: "按{{}}攻擊力，對敵方全體造成「穿刺傷害」",
        arguments: [
          ["172%"],
          ["196%"],
          ["221%"],
          ["245%"],
        ]
      },
      A: {
        name: "不可妄悖",
        description: "按{{}}攻擊力，對敵方全體造成「穿刺傷害」",
        arguments: [
          ["72%"],
          ["90%"],
          ["120%"],
        ]
      },
      B: {
        name: "不可肆行",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加{{}}層忍耐率降低12%，持續3回合，可疊加5層",
        arguments: [
          ["102%", "1"],
          ["120%", "1"],
          ["150%", "2"],
        ]
      },
      Passive: {
        name: "罪贖",
        description: "戰鬥開始時，按自身戰前穿透率的{{}}，提升友方全體穿透率",
        arguments: [
          ["20%"],
          ["26%"],
          ["32%"],
          ["38%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，獲得2點奧義能量",
        "",
        "",
        "釋放奧義技能後，自身穿透率提升20%，可疊加2層",
        "",
        "所有藍色情緒友方主動釋放1/2/3星單體攻擊技能時，先對目標施加防禦力降低15%/18%/20%，效果持續至技能結束",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "巧克力",
    subname: "香甜滿溢",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "157",
      DEF: "60",
      HP: "387",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "140%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "禮儀教導",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並獲得3回合30%爆擊率提升",
        arguments: [
          ["280%"],
          ["319%"],
          ["360%"],
          ["398%"],
        ]
      },
      A: {
        name: "不可以浪費",
        description: "按{{}}攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          ["120%", ""],
          ["150%", "，並使自身獲得1點奧義能量"],
          ["200%", "，並使自身獲得2點奧義能量"],
        ]
      },
      B: {
        name: "乖乖吃飯",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」，自身每有1個屬性增益效果，基礎傷害提升8%，至多提升{{}}",
        arguments: [
          ["85%", "24%"],
          ["100%", "32%"],
          ["133%", "40%"],
        ]
      },
      Passive: {
        name: "一起上吧",
        description: "隊伍中每有一名藍色情緒友方，自身爆擊傷害提升{{}}，可疊加4層<br>「專屬效果：親友的力量」：戰鬥開始時，若隊伍中存在\"香甜滿溢\"以外的其他貓娘樂園卡牌，自身獲得2點奧義能量",
        arguments: [
          ["5.5%"],
          ["6.5%"],
          ["7.5%"],
          ["8.5%"],
        ]
      },
      risingStar: [
        "釋放奧義技能後，自身獲得1層造成最終傷害提升10%，至多疊加2層",
        "",
        "",
        "釋放奧義技能後，自身隨機2張技能牌升星1次",
        "",
        "戰鬥開始時，自身1張「不可以浪費」升星1次，每次釋放3星「乖乖吃飯」後，再追擊1張2星「乖乖吃飯」，每回合至多觸發1次追擊",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "香草",
    subname: "喵星電波",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "128",
      DEF: "73",
      HP: "509",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "喵喵大助攻",
        description: "提升友方全體{{}}攻擊力2回合，並驅散友方全體3層減益效果",
        arguments: [
          ["18%"],
          ["20%"],
          ["23%"],
          ["26%"],
        ]
      },
      A: {
        name: "喵星的守護",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加{{}}回合「治癒貓爪」",
        arguments: [
          ["120%", "1"],
          ["150%", "2"],
          ["200%", "2"],
        ]
      },
      B: {
        name: "喵星的祝福",
        description: "觸發<「發現」({{}})>效果，並且對友方單體隨機施加「親密陪伴」中的{{}}個增益效果",
        arguments: [
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
        ]
      },
      Passive: {
        name: "電波共振",
        description: "所有藍色情緒友方爆擊率提升{{}}<br>「專屬效果：親友的愈療」：戰鬥開始時，若隊伍中存在\"喵星電波\"以外的其他貓娘樂園卡牌，友方全體受到治療提升12%",
        arguments: [
          ["7%"],
          ["8.4%"],
          ["9.8%"],
          ["11.2%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，自身1張「喵星的祝福」升星1次",
        "",
        "",
        "\"喵星電波\"以外的其他友方釋放3星技能牌後，\"喵星電波\"對友方全體隨機添加「親密陪伴」中的1個增益效果，並驅散友方全體身上2層減益效果，每回合至多觸發1次",
        "",
        "每回合開始時，對友方全體隨機添加「親密陪伴」中的1個增益效果，優先添加未獲得的效果",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "可可",
    subname: "懵懂精靈",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.event],
    basic: {
      ATK: "117",
      DEF: "44",
      HP: "295",
      Penetration: "7%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "飛天頭槌",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加1層「易傷」3回合",
        arguments: [
          ["169%"],
          ["179%"],
          ["195%"],
          ["211%"],
        ]
      },
      A: {
        name: "貓咪頭槌",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加1層「易傷」3回合",
        arguments: [
          ["102%"],
          ["120%"],
          ["150%"],
        ]
      },
      B: {
        name: "貓爪連擊",
        description: "按{{}}攻擊力，對敵方單體造成「穿透傷害」",
        arguments: [
          ["90%"],
          ["113%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "爪痕",
        description: "戰鬥開始時，按自身戰前爆擊率的{{}}，降低敵方全體爆擊率抵抗",
        arguments: [
          ["15%"],
          ["20%"],
          ["25%"],
          ["30%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，爆擊率提升6%",
        "",
        "戰鬥開始時，攻擊力提升6%，爆擊率提升6%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "斯泰茜",
    subname: "旋風初成",
    rarity: rarity.SSR,
    attribute: attribute.light,
    particle: particle.circle,
    source: [characterSource.signin],
    basic: {
      ATK: "135",
      DEF: "73",
      HP: "535",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "全力以赴",
        description: "對友方全體施加2回合穿透率提升{{}}和2回合爆擊率提升20%",
        arguments: [
          ["20%"],
          ["23%"],
          ["26%"],
          ["28%"],
        ]
      },
      A: {
        name: "榮耀衝鋒",
        description: "按{{}}攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          ["120%", ""],
          ["120%", "，並對目標施加「恐懼」1回合"],
          ["120%", "，並對目標施加「恐懼」2回合"],
        ]
      },
      B: {
        name: "勇氣加冕",
        description: "驅散友方單體{{}}層減益效果，並對友方單體施加{{}}回合造成最終傷害提升15%",
        arguments: [
          ["3", "2"],
          ["4", "2"],
          ["5", "3"],
        ]
      },
      Passive: {
        name: "家族傳承",
        description: "友方全體攻擊力提升{{}}。在社團特訓模式中，友方全體額外獲得與\"旋風初成\"戰鬥員星級相對應的攻擊力提升，分別為8% / 10.5% / 12% / 13.5% / 16% / 17.5% / 19%",
        arguments: [
          ["5%"],
          ["6%"],
          ["7%"],
          ["8%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，獲得2點奧義能量",
        "",
        "",
        "釋放奧義技能後恢復1點奧義能量，並驅散友方全體2層減益效果",
        "",
        "回合開始時，友方全體防禦力和生命值提升4%，可疊加5層",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "鈴",
    subname: "鈴鈴彌音",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "128",
      DEF: "73",
      HP: "509",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "溢彩進行時",
        description: "提升自身{{}}最大生命值3回合，並獲得3回合「幸運福袋」",
        arguments: [
          ["30%"],
          ["34%"],
          ["39%"],
          ["43%"],
        ]
      },
      A: {
        name: "聚光燈下",
        description: "按{{}}最大生命值，對敵方單體造成傷害{{}}",
        arguments: [
          ["33%", ""],
          ["45%", "，並對目標施加2回合受到護盾降低30%"],
          ["50%", "，並對目標施加3回合受到護盾降低45%"],
        ]
      },
      B: {
        name: "喵喵愛心波",
        description: "按{{}}最大生命值，對友方全體施加{{}}回合護盾",
        arguments: [
          ["25%", "1"],
          ["33%", "2"],
          ["40%", "2"],
        ]
      },
      Passive: {
        name: "直播助力",
        description: "所有藍色情緒友方生命值提升{{}}，並且在攜帶護盾時爆擊抵抗提升{{}}",
        arguments: [
          ["7.5%", "15%"],
          ["9%", "18%"],
          ["10.5%", "21%"],
          ["12%", "24%"],
        ]
      },
      risingStar: [
        "戰鬥開始時自身獲得2點奧義能量",
        "",
        "自身處於「幸運福袋」狀態下時，其他友方每次主動釋放1/2/3星技能牌時，\"鈴鈴彌音\"獲得1/2/5層「直播保鏢」。",
        "",
        "每次對友方施加護盾「人氣加成」時，自身獲得1點奧義能量，每回合至多觸發1次；自身釋放奧義技能後，友方攻擊力最高的單位在接下來的兩個回合開始時掉落的技能牌必定為2星技能牌",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "千術",
    subname: "千術之王",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "164",
      DEF: "60",
      HP: "394",
      Penetration: "0%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "皇家同花順",
        description: "按{{}}攻擊力，分5段攻擊隨機敵方目標，每段攻擊使目標身上1個「詛咒」延長一回合",
        arguments: [
          ["200%"],
          ["228%"],
          ["258%"],
          ["285%"],
        ]
      },
      A: {
        name: "瘋狂下注",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並使目標身上{{}}個「詛咒」延長1回合",
        arguments: [
          ["102%", "2"],
          ["120%", "3"],
          ["150%", "4"],
        ]
      },
      B: {
        name: "博弈選擇",
        description: "從兩張衍生技能牌中選擇一張打出：<br>&emsp;<瓦解>：對敵方全體施加3回合受到治療降低{{}}<br>&emsp;<鞏固>：對友方全體施加2回合「邊池」",
        arguments: [
          ["30%"],
          ["35%"],
          ["40%"],
        ]
      },
      Passive: {
        name: "連勝紀錄",
        description: "上陣戰鬥員都是紅色情緒時，友方全體造成間接傷害提升{{}}",
        arguments: [
          ["10%"],
          ["11.7%"],
          ["13.3%"],
          ["15%"],
        ]
      },
      risingStar: [
        "釋放奧義技能時，每段攻擊對目標施加1層受到間接傷害提升8%，可疊加3層，持續3回合",
        "",
        "",
        "戰鬥開始時，我方全體獲得2回合「邊池」，效果等同於1星技能牌；並且在每回合結束時，按50%攻擊力治療所有攜帶「邊池」的友方",
        "",
        "回合結束時，使每個敵方目標身上至多2個「詛咒」延長1回合",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "千術",
    subname: "黑桃A",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "115",
      DEF: "44",
      HP: "298",
      Penetration: "7%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "貓膩",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並對受到傷害的目標施加「流血」4回合",
        arguments: [
          ["165%"],
          ["175%"],
          ["190%"],
          ["206%"],
        ]
      },
      A: {
        name: "骰子",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並使目標受到間接傷害提升20%，持續1回合",
        arguments: [
          ["86%"],
          ["96%"],
          ["128%"],
        ]
      },
      B: {
        name: "順子",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["96%"],
          ["120%"],
          ["160%"],
        ]
      },
      Passive: {
        name: "萬能牌",
        description: "友方粒子型態均為「星流」時，自身爆擊傷害提升{{}}",
        arguments: [
          ["10%"],
          ["12%"],
          ["14%"],
          ["16%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，穿透率提升8%",
        "",
        "戰鬥開始時，攻擊力提升6%，生命值提升4.5%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "非天",
    subname: "茂林餘音",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.square,
    source: [characterSource.summon],
    basic: {
      ATK: "148",
      DEF: "66",
      HP: "423",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "竹風吟",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並使友方全體爆擊率和攻擊力提升2回合，提升數額分別相當於“茂林餘音”爆擊率的30%攻擊力的12%",
        arguments: [
          ["172%"],
          ["196%"],
          ["221%"],
          ["245%"],
        ]
      },
      A: {
        name: "滌塵",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對敵方全體施加20%「傷害傳遞」，受到1張攻擊技能牌後清除",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "澄心",
        description: "按65%攻擊力，治療友方全體，並使友方全體受到的下一個技能的傷害不超過該友方自身{{}}最大生命值",
        arguments: [
          ["33%"],
          ["25%"],
          ["20%"],
        ]
      },
      Passive: {
        name: "天音破",
        description: "綠色情緒友方釋放攻擊技能牌時，若生命百分比高於目標，此次技能造成最終傷害提升{{}}",
        arguments: [
          ["10%"],
          ["12%"],
          ["14%"],
          ["16%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，選定攻擊力最高的友方單位，每次行動後，按30%攻擊力治療該單位，每場戰鬥至多觸發6次",
        "",
        "“茂林餘音”以外的友方獲得治療效果時，若生命值高於35%，則該友方爆擊傷害提升35%，持續至下次技能結束",
        "",
        "敵方單位死亡後，恢復所有綠色情緒友方1點奧義能量",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "南彌生",
    subname: "靈棰驚竹",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "161",
      DEF: "60",
      HP: "379",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "140%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "穿林打葉",
        description: "無視嘲諷，按{{}}攻擊力，對敵方單體造成傷害，自身每有1層「竹影‧強襲」，技能係數提升100%",
        arguments: [
          ["275%"],
          ["313%"],
          ["353%"],
          ["391%"],
        ]
      },
      A: {
        name: "竹影鞭",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "竹酒沁",
        description: "{{}}回合內受到最終傷害降低50%，並匿入「竹影」3回合，若釋放技能時身上沒有「竹影」，則額外獲得1層「竹影‧強襲」",
        arguments: [
          ["1"],
          ["2"],
          ["3"],
        ]
      },
      Passive: {
        name: "同根生",
        description: "上陣戰鬥員都是綠色情緒時，自身爆擊傷害提升{{}}",
        arguments: [
          ["20%"],
          ["24%"],
          ["28%"],
          ["32%"],
        ]
      },
      risingStar: [
        "技能擊殺目標時，對敵方生命百分比最低的目標追擊2星「竹影鞭」，每回合至多觸發1次",
        "",
        "",
        "釋放進攻技能時，若目標生命值低於60%，則技能造成最終傷害提升20%；擊殺追擊上限提升至每回合2次，每次觸發擊殺追擊時，獲得3層「竹影‧強襲」",
        "",
        "戰鬥開始時獲得1點奧義能量；爆擊時每溢出1%爆擊率，轉化為1.5%爆擊傷害；並且每次釋放技能「竹酒沁」後，額外獲得1層「竹影‧強襲」",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "山明箬影",
    rarity: rarity.SR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.event],
    basic: {
      ATK: "85",
      DEF: "54",
      HP: "326",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "10%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "爆發定格",
        description: "按{{}}攻擊力，對敵方單體造成「暴烈傷害」",
        arguments: [
          ["191%"],
          ["202%"],
          ["220%"],
          ["237%"],
        ]
      },
      A: {
        name: "光影之佑",
        description: "按{{}}最大生命值，對友方全體施加1回合護盾。護盾存在時，攜帶者生命相關能力提升15%",
        arguments: [
          ["33%"],
          ["50%"],
          ["67%"],
        ]
      },
      B: {
        name: "精准對焦",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "竹韌",
        description: "所有綠色情緒友方忍耐率提升{{}}",
        arguments: [
          ["5%"],
          ["6%"],
          ["7%"],
          ["8%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，最大生命值提升15%",
        "",
        "",
        "戰鬥開始時，最大生命值提升15%，造成護盾提升11%",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "幽篁月韻",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "157",
      DEF: "60",
      HP: "416",
      Penetration: "7%",
      Durability: "7%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "竹風繚亂",
        description: "按{{}}攻擊力，對敵方全體造成「湮滅傷害」",
        arguments: [
          ["153%"],
          ["173%"],
          ["196%"],
          ["217%"],
        ]
      },
      A: {
        name: "烈風旋",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加「烈風」，攜帶「烈風」的目標受到單體攻擊時，觸發“幽篁月韻”的追擊",
        arguments: [
          ["80%"],
          ["93%"],
          ["125%"],
        ]
      },
      B: {
        name: "踏竹風",
        description: "按{{}}攻擊力，對敵方全體造成「湮滅傷害」",
        arguments: [
          ["75%"],
          ["80%"],
          ["90%"],
        ]
      },
      Passive: {
        name: "月華流照",
        description: "每上陣一名綠色情緒友方，自身攻擊力提升{{}}，可疊加，最高4層；攜帶「烈風」的敵方目標受到單體攻擊後，追擊一張1星「踏竹風」，每回合至多觸發1次",
        arguments: [
          ["3%"],
          ["4%"],
          ["5%"],
          ["5.5%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，對敵方攻擊力最高的單位施加1層「烈風」",
        "",
        "",
        "追擊的「踏竹風」提升至2星技能牌",
        "",
        "首回合進入戰鬥階段後，在其他角色出手前，先釋放1張1星「踏竹風」",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "祈",
    subname: "離夢蝶",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.square,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "131",
      DEF: "73",
      HP: "499",
      Penetration: "0%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "如夢令",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並對釋放技能前被選為首要目標的敵方單位施加「鎖能」2回合",
        arguments: [
          ["191%"],
          ["218%"],
          ["246%"],
          ["272%"],
        ]
      },
      A: {
        name: "蝶影閃",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並使目標降低{{}}點奧義能量",
        arguments: [
          ["80%", "1"],
          ["100%", "1"],
          ["120%", "3"],
        ]
      },
      B: {
        name: "夢蝶縛",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加「恐懼」{{}}回合",
        arguments: [
          ["102%", "1"],
          ["120%", "1"],
          ["150%", "2"],
        ]
      },
      Passive: {
        name: "蝶舞之華",
        description: "友方全體奧義技能造成最終傷害提升{{}}。在社團大亂鬥模式中，友方全體額外獲得與\"離夢蝶\"戰鬥員星級相對應的基礎能力值提升，分別為10%/11%/12%/13%/14%/15%/16%",
        arguments: [
          ["14%"],
          ["16%"],
          ["18%"],
          ["20%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，獲得2點奧義能量",
        "",
        "奧義技能施加的「鎖能」持續回合數+1",
        "",
        "敵方單位身上的「鎖能」提前結束時，轉化為1層「夢魘」",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "法夕黛",
    subname: "指尖芳菲",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "131",
      DEF: "73",
      HP: "499",
      Penetration: "0%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "大地回春",
        description: "按{{}}攻擊力治療友方全體，並對友方全體施加2回合「綻放」",
        arguments: [
          ["165%"],
          ["187%"],
          ["212%"],
          ["234%"],
        ]
      },
      A: {
        name: "翠葉光華",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加2回合「花枝」",
        arguments: [
          ["80%"],
          ["100%"],
          ["120%"],
        ]
      },
      B: {
        name: "春蕾生息",
        description: "對友方單體施加2回合「花蕾」",
        arguments: [
          [],
          [],
          [],
        ]
      },
      Passive: {
        name: "綻放",
        description: "所有紅色情緒友方攻擊力提升{{}}",
        arguments: [
          ["8.4%"],
          ["10.3%"],
          ["12.4%"],
          ["14.4%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，對攻擊力最高的友方單位施加2回合「花蕾」，效果等同於1星「春蕾生息」技能牌",
        "",
        "「綻放」效果提升為：受到敵方攻擊技能牌的攻擊後，若生命值低於40%，則恢復自身30%最大生命值，每回合至多觸發2次",
        "",
        "攜帶「花蕾」的友方單位，爆擊傷害提升45%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "米飯",
    subname: "清平樂",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "119",
      DEF: "77",
      HP: "474",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "10%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "穗愈之歌",
        description: "對友方全體施加爆擊傷害提升{{}}，持續2回合，並按20%最大生命值對友方全體施加3回合「漸愈」",
        arguments: [
          ["25%"],
          ["28%"],
          ["32%"],
          ["36%"],
        ]
      },
      A: {
        name: "麥浪衝擊",
        description: "按{{}}最大生命值，攻擊敵方單體，並對敵方攻擊力最高的單位施加2回合「暴露」",
        arguments: [
          ["28%"],
          ["35%"],
          ["45%"],
        ]
      },
      B: {
        name: "麥色守護",
        description: "先驅散目標{{}}層減益效果，再按{{}}最大生命值，治療友方單體",
        arguments: [
          ["2", "25%"],
          ["2", "35%"],
          ["3", "45%"],
        ]
      },
      Passive: {
        name: "無微不至",
        description: "上陣戰鬥員都是紅色情緒時，友方全體每次獲得治療效果，造成最終傷害提升{{}}（可疊加，每個技能最多疊加1層，最高10層）<br>該效果觸發時，友方\"醉紅塵\"獲得的造成最終傷害提升效果每層額外+1%",
        arguments: [
          ["1%"],
          ["1.3%"],
          ["1.6%"],
          ["1.9%"],
        ]
      },
      risingStar: [
        "每次行動後，依15%最大生命值，治療生命百分比最低的1名友方單位，並驅散目標身上2層減益效果",
        "",
        "",
        "紅色情緒友方每次對「暴露」目標釋放單體攻擊技能後，獲得其自身50%攻擊力的治療效果",
        "",
        "戰鬥開始時，提升友方全體15%爆擊傷害，持續2回合，並按14%最大生命值對友方全體施加3回合「漸愈」",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "紅茶",
    subname: "醉紅塵",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "157",
      DEF: "60",
      HP: "387",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "140%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "落花無痕",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」，獲得1層「強化子彈」",
        arguments: [
          ["183%"],
          ["208%"],
          ["235%"],
          ["261%"],
        ]
      },
      A: {
        name: "花散盡",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並獲得1層「強化子彈」",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "花影舞",
        description: "{{}}按{{}}攻擊力，對敵方單體造成「破碎傷害」{{}}",
        arguments: [
          ["", "85%"],
          ["", "100%"],
          ["", "133%"],
        ],
        reinforce: [
          ["強化: ", "95%", "，並對目標施加1層「通緝」"],
          ["強化: ", "112%", "，並對目標施加1層「通緝」"],
          ["強化: ", "149%", "，並對目標施加1層「通緝」"],
        ]
      },
      Passive: {
        name: "凌人之勢",
        description: "每上陣一名紅色情緒友方，自身攻擊力提升{{}}，可疊加，最高4層；釋放奧義技能後，按130%攻擊力，對所有攜帶「通緝」的目標造成一次額外傷害，並消耗目標身上所有「通緝」，目標每有1層「通緝」，傷害提升{{}}",
        arguments: [
          ["3%", "20%"],
          ["4%", "20%"],
          ["5%", "40%"],
          ["5.5%", "40%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，獲得2層「強化子彈」",
        "",
        "",
        "除“醉紅塵”以外的其他紅色友方，釋放單體攻擊技能後，對目標施加1層「通緝」，每回合至多通過這種方式施加2層「通緝」",
        "",
        "每回合首次行動後，按60%攻擊力，對所有攜帶「通緝」的目標造成一次額外傷害",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "紅茶",
    subname: "花間意",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.event],
    basic: {
      ATK: "87",
      DEF: "61",
      HP: "374",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "槍林彈雨",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」，並對目標施加1層受到最終傷害提升15%",
        arguments: [
          ["179%"],
          ["190%"],
          ["206%"],
          ["223%"],
        ]
      },
      A: {
        name: "精準射擊",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      B: {
        name: "槍火洗禮",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並對目標施加1層受到護盾降低20%",
        arguments: [
          ["82%"],
          ["96%"],
          ["120%"],
        ]
      },
      Passive: {
        name: "重振旗鼓",
        description: "僅在PvP模式之外生效，所有粒子型態為「圓振」的友方攻擊力提升{{}}",
        arguments: [
          ["7%"],
          ["8.6%"],
          ["10.3%"],
          ["12%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，爆擊率提升6%，穿透率提升4.5%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "小曼",
    subname: "心動季節",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "128",
      DEF: "73",
      HP: "509",
      Penetration: "0%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "正義天降",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加「恐懼」2回合",
        arguments: [
          ["163%"],
          ["185%"],
          ["209%"],
          ["231%"],
        ]
      },
      A: {
        name: "心動神迷",
        description: "清除敵方{{}}層增益效果，並使目標攻擊力降低{{}}，持續2回合",
        arguments: [
          ["2", "10%"],
          ["2", "10%"],
          ["3", "15%"],
        ]
      },
      B: {
        name: "心動守護",
        description: "按{{}}攻擊力，對友方全體施加2回合護盾",
        arguments: [
          ["80%"],
          ["120%"],
          ["160%"],
        ]
      },
      Passive: {
        name: "鼓舞之心",
        description: "上陣戰鬥員都是綠色情緒時，友方全體最終傷害提升{{}}",
        arguments: [
          ["7%"],
          ["8.6%"],
          ["10.3%"],
          ["12%"],
        ]
      },
      risingStar: [
        "友方單位的護盾被敵方擊破時，該友方會在敵方技能結束後回復自身10%最大生命值",
        "",
        "綠色情緒友方每次獲得護盾效果時，攻擊力提升7.5%，可疊加2層，持續3回合",
        "",
        "敵方單位身上的增益效果提前結束時，該敵方單位獲得1層最終傷害降低8%，可疊加3層，持續2回合",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "望舒",
    subname: "月朧吟",
    rarity: rarity.SSR,
    attribute: attribute.dark,
    particle: particle.square,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "168",
      DEF: "63",
      HP: "460",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "5%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "月下逢",
        description: "按{{}}攻擊力，對敵方全體造成「蓄勢傷害」",
        arguments: [
          ["154%"],
          ["175%"],
          ["197%"],
          ["218%"],
        ]
      },
      A: {
        name: "緋月絕",
        description: "獲得{{}}層造成最終傷害提升5%，持續3回合；本回合內，任意友方單位釋放技能後，望舒有{{}}機率回復1點奧義能量，至多回復2點，每名友方單位至多觸發1次",
        arguments: [
          ["1", "50%"],
          ["1", "75%"],
          ["2", "100%"],
        ]
      },
      B: {
        name: "流光溢彩",
        description: "按{{}}攻擊力，對敵方全體造成「蓄勢傷害」",
        arguments: [
          ["72%"],
          ["90%"],
          ["120%"],
        ]
      },
      Passive: {
        name: "萬華鏡",
        description: "每有1點奧義能量，爆擊傷害提升{{}}，滿奧義能量時，爆擊率額外提升20%",
        arguments: [
          ["4%"],
          ["5.5%"],
          ["7%"],
          ["8%"],
        ]
      },
      risingStar: [
        "釋放技能「緋月絕」時，補進一張1星「流光溢彩」技能牌",
        "",
        "",
        "釋放非奧義技能時，若奧義能量已滿，則獲得1個「凝結」，至多持有兩個「凝結」",
        "",
        "釋放奧義技能後，獲得1層造成最終傷害提升10%（可疊加，最高3層）",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "雲沛",
    subname: "並蒂蓮",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.square,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "128",
      DEF: "73",
      HP: "509",
      Penetration: "0%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "飛花訣",
        description: "對友方全體施加2回合受到最終傷害降低{{}}",
        arguments: [
          ["17%"],
          ["19%"],
          ["22%"],
          ["24%"],
        ]
      },
      A: {
        name: "落花別",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["96%"],
          ["120%"],
          ["160%"],
        ]
      },
      B: {
        name: "幽蓮守",
        description: "先消耗目標15%當前生命值，再按{{}}自身攻擊力+{{}}目標已損失生命值，對友方全體施加2回合「蓮舞」",
        arguments: [
          ["35%", "45%"],
          ["40%", "50%"],
          ["45%", "55%"],
        ]
      },
      Passive: {
        name: "菡萏同心",
        description: "所有藍色情緒友方受到護盾提升{{}}；戰鬥開始時，若隊伍中存在“雲燦”，自身獲得1點奧義能量",
        arguments: [
          ["7%"],
          ["8.6%"],
          ["10.3%"],
          ["12%"],
        ]
      },
      risingStar: [
        "每上陣1名藍色情緒戰鬥員，“並蒂蓮”造成護盾提升3%（可疊加，最高4層）",
        "",
        "",
        "每回合開始時，對生命值低於65%的友方單位施加1層穿透率提升5%（可疊加，最高4層）",
        "",
        "釋放技能「幽蓮守」時，對友方全體施加1層2回合「共生」（可疊加，最高2層）",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "雲燦",
    subname: "菡萏曲",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.square,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "158",
      DEF: "57",
      HP: "377",
      Penetration: "14%",
      Durability: "0%",
      CRIT_Rate: "5%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "落紅蓮",
        description: "消耗自身10%當前生命值，按{{}}攻擊力，對敵方全體造成「穿刺傷害」",
        arguments: [
          ["172%"],
          ["196%"],
          ["221%"],
          ["245%"],
        ]
      },
      A: {
        name: "逍遙遊",
        description: "按{{}}攻擊力，對敵方單體造成傷害，若釋放技能時生命值高於30%，則先消耗10%當前生命值",
        arguments: [
          ["102%"],
          ["120%"],
          ["150%"],
        ]
      },
      B: {
        name: "蓮影徊",
        description: "按{{}}攻擊力，對敵方全體造成「穿刺傷害」",
        arguments: [
          ["72%"],
          ["90%"],
          ["120%"],
        ]
      },
      Passive: {
        name: "萬物生",
        description: "自身每損失1%最大生命值，穿透率提升{{}}，至多提升{{}}；戰鬥開始時，若隊伍中存在“雲沛”，自身獲得1點奧義能量",
        arguments: [
          ["0.8%", "56%"],
          ["0.95%", "66.5%"],
          ["1.05%", "73.5%"],
          ["1.2%", "84%"],
        ]
      },
      risingStar: [
        "生命值低於85%時，爆擊率提升20%",
        "",
        "",
        "戰鬥開始時，將25%當前生命值轉化為3回合護盾，並獲得攻擊力提升12%，持續3回合",
        "",
        "技能結束時，若生命值不高於75%，則獲得1層造成最終傷害提升4%（可疊加，最高4層）；若生命值不高於45%，則額外再獲得1層受到最終傷害降低4%（可疊加，最高4層）",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "伊德",
    subname: "詭夜霧行",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.star,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "161",
      DEF: "60",
      HP: "340",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "140%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "刀光未名",
        description: "按{{}}攻擊力，對敵方單體造成「真實傷害」",
        arguments: [
          ["216%"],
          ["245%"],
          ["277%"],
          ["307%"],
        ]
      },
      A: {
        name: "隱霧斬",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並使自身造成最終傷害提升10%，持續3回合",
        arguments: [
          ["90%"],
          ["113%"],
          ["150%"],
        ]
      },
      B: {
        name: "詭步連刃",
        description: "按{{}}攻擊力，對敵方單體造成「真實傷害」",
        arguments: [
          ["87%"],
          ["114%"],
          ["144%"],
        ]
      },
      Passive: {
        name: "循勢而行",
        description: "每次行動後，爆擊傷害提升{{}}（可疊加，最高10層）；一回合內，其他友方每釋放兩張攻擊技能牌，“詭夜霧行”對隨機敵方目標「追擊」1張1星「詭步連刃」，每回合至多追擊2次",
        arguments: [
          ["2%"],
          ["3%"],
          ["3.5%"],
          ["4%"],
        ]
      },
      risingStar: [
        "追擊的「詭步連刃」最終傷害提升20%",
        "",
        "",
        "“詭夜霧行”的攻擊技能牌也可觸發「追擊」效果",
        "",
        "每回合最大追擊次數+1",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "內特",
    subname: "碎夜疾霆",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.event],
    basic: {
      ATK: "115",
      DEF: "44",
      HP: "266",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "130%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "雷霆躍沖",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["191%"],
          ["202%"],
          ["20%"],
          ["237%"],
        ]
      },
      A: {
        name: "閃電沖拳",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "霹靂雙打",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "正義加護",
        description: "自身攻擊力提升{{}}",
        arguments: [
          ["12%"],
          ["14.7%"],
          ["17.3%"],
          ["20%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，爆擊傷害提升24%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "小音",
    subname: "耀夜之星",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.signin],
    basic: {
      ATK: "161",
      DEF: "56",
      HP: "380",
      Penetration: "14%",
      Durability: "0%",
      CRIT_Rate: "5%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "罪念湮滅",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並無視免疫對目標施加35%「傷害擴散」1回合",
        arguments: [
          ["216%"],
          ["245%"],
          ["277%"],
          ["307%"],
        ]
      },
      A: {
        name: "星芒爆閃",
        description: "按{{}}攻擊力，對敵方單體造成「真實傷害」",
        arguments: [
          ["61%"],
          ["80%"],
          ["101%"],
        ]
      },
      B: {
        name: "電磁空域",
        description: "提升友方單體{{}}攻擊力2回合",
        arguments: [
          ["15%"],
          ["20%"],
          ["30%"],
        ]
      },
      Passive: {
        name: "貓貓快援團",
        description: "首次釋放奧義技能時，造成最終傷害提升{{}}",
        arguments: [
          ["20%"],
          ["25%"],
          ["30%"],
          ["35%"],
        ]
      },
      risingStar: [
        "戰鬥開始時，獲得2點奧義能量",
        "",
        "奧義技能施加的「傷害擴散」持續回合數+1",
        "",
        "首次釋放奧義技能後，回復友方全體1點奧義能量",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "米婭",
    subname: "冬季奇遇",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "154",
      DEF: "57",
      HP: "432",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "5%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "白熊圓舞曲",
        description: "提升友方全體{{}}攻擊力2回合",
        arguments: [
          ["18%"],
          ["20%"],
          ["23%"],
          ["26%"],
        ]
      },
      A: {
        name: "熊跡追冰",
        description: "按{{}}攻擊力，對敵方單體造成「破裂傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      B: {
        name: "奇遇之光",
        description: "按{{}}攻擊力治療友方全體",
        arguments: [
          ["65%"],
          ["81%"],
          ["108%"],
        ]
      },
      Passive: {
        name: "雪之庇佑",
        description: "所有藍色情緒友方攻擊力提升{{}}（僅存活時生效）",
        arguments: [
          ["7%"],
          ["8.7%"],
          ["10.3%"],
          ["12%"],
        ]
      },
      risingStar: [
        "釋放技能「奇遇之光」後，按33%攻擊力，對友方全體施加2回合「漸愈」",
        "",
        "",
        "釋放奧義技能後，每有1個藍色情緒友方存活，“冬季奇遇”對友方全體施加1層造成最終傷害提升7%（可疊加，最高4層），持續1回合",
        "",
        "每回合開始時，都可觸發1次4星效果",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "艾琳娜",
    subname: "白瑰綺晶",
    rarity: rarity.SSR,
    attribute: attribute.light,
    particle: particle.square,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "131",
      DEF: "66",
      HP: "456",
      Penetration: "0%",
      Durability: "27%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "5%",
      CRIT_DMG_RES: "15%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "冰霜主宰",
        description: "對敵方全體造成攻擊力{{}}的傷害，同時給自身添加1層「寒生」標記，最多疊加1層，不可被驅散",
        arguments: [
          ["208%"],
          ["236%"],
          ["267%"],
          ["295%"],
        ]
      },
      A: {
        name: "冰之誡",
        description: "對敵方全體造成{{}}的傷害，並使目標攻擊力降低{{}}，最多疊加2層，持續2回合",
        arguments: [
          ["90%", "10%"],
          ["113%", "10%"],
          ["150%", "15%"],
        ]
      },
      B: {
        name: "霜之爪",
        description: "對目標單體造成攻擊力{{}}的傷害，同時為友方生命值最低的單位施加白瑰綺晶生命值{{}}的「冰盾」，效果持續1回合",
        arguments: [
          ["102%", "20%"],
          ["120%", "28%"],
          ["150%", "36%"],
        ]
      },
      Passive: {
        name: "萬物凝結",
        description: "{{}}，友方全體獲得寒冰之力效果，攻擊力提升{{}}，爆擊率提升{{}}，爆擊傷害提升{{}}，若友方為白色情緒和黑色情緒，則該效果在原有的基礎上額外提升30%",
        arguments: [
          ["第二回合開始時", "9%", "9%", "9%"],
          ["第二回合開始時", "12%", "12%", "12%"],
          ["進入戰鬥時", "12%", "12%", "12%"],
          ["進入戰鬥時", "15%", "15%", "15%"],
        ]
      },
      risingStar: [
        "釋放「霜之爪」時，施加的「冰盾」對友方全體生效",
        "",
        "",
        "當友方觸發「寒生」效果時，額外獲得白瑰綺晶生命值28%的「冰盾」，持續1回合",
        "",
        "進入戰鬥時，獲得1層「寒生」；「竭力」效果持續時間降低1回合",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "絲薇蒂",
    subname: "致聖雪夜",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "161",
      DEF: "57",
      HP: "387",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "140%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "告罪審判",
        description: "按{{}}攻擊力，對敵方單體造成傷害，造成傷害時目標每攜帶1個減益效果，額外造成1次「間接傷害」，每次額外傷害效果依次提升20%，首次傷害為100%攻擊力，至多造成{{}}次額外傷害。",
        arguments: [
          ["204%", "3"],
          ["231%", "3"],
          ["262%", "4"],
          ["290%", "4"],
        ]
      },
      A: {
        name: "刀俎之刑",
        description: "按120%攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          [""],
          ["，並使自身獲得1點奧義能量"],
          ["，並使自身獲得2點奧義能量"],
        ]
      },
      B: {
        name: "欲念戒斷",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並使目標受到的間接傷害提升至{{}}，持續3回合；若攻擊時目標攜帶此類效果，則對目標施加1層「詛咒」{{}}回合",
        arguments: [
          ["102%", "15%", "1"],
          ["120%", "20%", "2"],
          ["150%", "25%", "3"],
        ]
      },
      Passive: {
        name: "惡魔之友",
        description: "敵方獲得減益效果時，自身攻擊力提升{{}}（可疊加，最高6層）",
        arguments: [
          ["3%"],
          ["3.5%"],
          ["4%"],
          ["4.5%"],
        ]
      },
      risingStar: [
        "首次釋放奧義技能後，後續奧義技能造成最終傷害提升15%",
        "",
        "",
        "釋放非奧義技能時，若目標身上存在減益狀態，則回復1點奧義能量，每回合至多觸發2次",
        "",
        "釋放奧義技能前，先對目標施加爆擊率抵抗降低20%和爆擊傷害抵抗降低20%，奧義技能結束後效果清除",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "絲薇蒂",
    subname: "狂想花骸",
    rarity: rarity.SR,
    attribute: attribute.green,
    particle: particle.square,
    source: [characterSource.event],
    basic: {
      ATK: "108",
      DEF: "43",
      HP: "264",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "10%",
      CRIT_DMG: "130%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "縱意血光",
        description: "清除敵方單體所有增益效果，並按{{}}攻擊力，對目標造成傷害",
        arguments: [
          ["229%"],
          ["243%"],
          ["264%"],
          ["285%"],
        ]
      },
      A: {
        name: "貫注",
        description: "按{{}}攻擊力，對敵方單體造成「真實傷害」",
        arguments: [
          ["87%"],
          ["114%"],
          ["144%"],
        ]
      },
      B: {
        name: "蹁躚",
        description: "按120%攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          [""],
          ["，並使自身獲得1點奧義能量"],
          ["，並使自身獲得2點奧義能量"],
        ]
      },
      Passive: {
        name: "花骸洗塵",
        description: "每次奧義能量恢復滿時，驅散自身3層減益效果{{}}",
        arguments: [
          [""],
          ["，並且在戰鬥開始時，攻擊力提升3%"],
          ["，並且在戰鬥開始時，攻擊力提升6%"],
          ["，並且在戰鬥開始時，攻擊力提升9%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，爆擊率提升6%，穿透率提升4.5%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "多洛茜",
    subname: "囚鳥綺願",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "148",
      DEF: "62",
      HP: "431",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "20%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "怨靈之裁",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並使目標身上所有「詛咒」立即產生相當於原傷害150%的傷害{{}}",
        arguments: [
          ["193%", "，造成傷害後目標身上的「詛咒」持續時間減少1回合"],
          ["220%", "，造成傷害後目標身上的「詛咒」持續時間減少1回合"],
          ["248%", "，造成傷害後目標身上的「詛咒」持續時間減少1回合"],
          ["275%", ""],
        ]
      },
      A: {
        name: "薔薇之舞",
        description: "按{{}}攻擊力，對敵方單體造成「間接傷害」",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "骨影之咒",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並對目標施加1層「詛咒」{{}}回合",
        arguments: [
          ["96%", "1"],
          ["110%", "2"],
          ["120%", "3"],
        ]
      },
      Passive: {
        name: "血色荊棘",
        description: "當上陣戰鬥員的屬性均為紅色時，自身造成間接傷害提升{{}}",
        arguments: [
          ["12%"],
          ["14.7%"],
          ["17.3%"],
          ["20%"],
        ]
      },
      risingStar: [
        "釋放「薔薇之舞」後，對目標施加1回合「詛咒」",
        "",
        "釋放奧義技能後，回復2點奧義能量",
        "",
        "",
        "釋放奧義技能後，使目標身上所有「詛咒」立即再產生1次相當於原傷害40%的傷害",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "小白",
    subname: "滌蕩者",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    basic: {
      ATK: "162",
      DEF: "58",
      HP: "387",
      Penetration: "10%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "蓄能滌蕩",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["198%"],
          ["226%"],
          ["255%"],
          ["282%"],
        ]
      },
      A: {
        name: "暴力清掃",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["80%"],
          ["93%"],
          ["125%"],
        ]
      },
      B: {
        name: "雙能進擊",
        description: "按{{}}攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          ["102%", ""],
          ["120%", "，並對目標施加1層「易傷」3回合"],
          ["150%", "，並對目標施加2層「易傷」3回合"],
        ]
      },
      Passive: {
        name: "力場加固",
        description: "{{}}，自身造成最終傷害提升{{}}{{}}",
        arguments: [
          ["當上陣戰鬥員的粒子形態均為「三相」時", "8%", ""],
          ["當上陣戰鬥員的粒子形態均為「三相」時", "12%", ""],
          ["除自己以外，每有1名上陣戰鬥員的粒子形態為「三相」", "12%", "（可疊加，最高3層）"],
          ["除自己以外，每有1名上陣戰鬥員的粒子形態為「三相」", "15%", "（可疊加，最高3層）"],
        ]
      },
      risingStar: [
        "釋放1星「雙能進擊」時，對目標施加1層「易傷」3回合",
        "",
        "",
        "「力場加固」效果改變為：除自己以外，每有1名上陣戰鬥員的粒子形態為「三相」，自身造成最終傷害提升12%（可疊加，最高3層）",
        "",
        "「力場加固」最終傷害提升效果提升至15%",
      ]
    },
    supporters: [

    ]
  },

  // common characters
  {
    name: "非天",
    subname: "塗鴉戰爭",
    rarity: rarity.R,
    attribute: attribute.blue,
    particle: particle.square,
    source: [characterSource.summon],
    basic: {
      ATK: "93",
      DEF: "34",
      HP: "206",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "15%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "制勝一擊",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加1層「易傷」3回合",
        arguments: [
          ["219%"],
          ["231%"],
          ["243%"],
          ["255%"],
        ]
      },
      A: {
        name: "孤勇",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加1層「易傷」3回合",
        arguments: [
          ["102%"],
          ["120%"],
          ["150%"],
        ]
      },
      B: {
        name: "無畏",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "戰意高昂",
        description: "所有藍色情緒友方防禦力提升{{}}",
        arguments: [
          ["13.5%"],
          ["16.5%"],
          ["19.5%"],
          ["22.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升5%",
        "",
        "戰鬥開始時，爆傷抵抗提升16%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "非天",
    subname: "自由輪滑",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.square,
    source: [characterSource.summon],
    basic: {
      ATK: "114",
      DEF: "44",
      HP: "269",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "5%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "滑空一閃",
        description: "按{{}}攻擊力，對敵方單體造成「暴烈傷害」",
        arguments: [
          ["213%"],
          ["226%"],
          ["246%"],
          ["265%"],
        ]
      },
      A: {
        name: "圓舞",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      B: {
        name: "凜落",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加1層「易傷」3回合",
        arguments: [
          ["102%"],
          ["120%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "加速輪滑",
        description: "如果自身本回合沒有受到攻擊，下回合爆擊率提升{{}}",
        arguments: [
          ["16%"],
          ["19.3%"],
          ["22.7%"],
          ["26%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，爆擊率提升6%，暴擊傷害提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "非天",
    subname: "森林守護者",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.square,
    source: [characterSource.summon],
    basic: {
      ATK: "154",
      DEF: "61",
      HP: "366",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "3%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "惡狼追蹤",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」",
        arguments: [
          ["226%"],
          ["257%"],
          ["290%"],
          ["321%"],
        ]
      },
      A: {
        name: "弱點狙擊",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」",
        arguments: [
          ["88%"],
          ["103%"],
          ["137%"],
        ]
      },
      B: {
        name: "抵近突襲",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加1層「易傷」3回合",
        arguments: [
          ["102%"],
          ["120%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "槍火",
        description: "每回合開始時，自身爆擊率提升{{}}（可疊加，最高10層）",
        arguments: [
          ["6%"],
          ["7.3%"],
          ["8.7%"],
          ["10%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若僅有1名敵方單位存活，則本回合穿透率提升20%",
        "",
        "爆擊時，每溢出1%爆擊率，轉化為2.5%爆擊傷害",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "星之願",
    rarity: rarity.R,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon, characterSource.gift],
    basic: {
      ATK: "85",
      DEF: "34",
      HP: "206",
      Penetration: "14%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "升級軌道炮",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["258%"],
          ["272%"],
          ["286%"],
          ["299%"],
        ]
      },
      A: {
        name: "飛星",
        description: "按{{}}攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          ["100%", ""],
          ["100%", "，並使目標降低1點奧義能量"],
          ["150%", "，並使目標降低1點奧義能量"],
        ]
      },
      B: {
        name: "鐳射鎖定",
        description: "按{{}}攻擊力，對敵方單體造成「暴烈傷害」",
        arguments: [
          ["95%"],
          ["100%"],
          ["125%"],
        ]
      },
      Passive: {
        name: "星星炮",
        description: "所有粒子型態均為「三相」的友方基礎能力提升{{}}",
        arguments: [
          ["3.5%"],
          ["4.2%"],
          ["4.8%"],
          ["5.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升5%",
        "",
        "戰鬥開始時，爆擊率提升8%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "電音騎士",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "149",
      DEF: "61",
      HP: "369",
      Penetration: "14%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "1%"
    },
    skills: {
      Sp: {
        name: "靈魂震顫",
        description: "按{{}}攻擊力，對敵方單體造成「暴烈傷害」",
        arguments: [
          ["222%"],
          ["252%"],
          ["285%"],
          ["316%"],
        ]
      },
      A: {
        name: "掃輪",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並使目標降低{{}}點奧義能量",
        arguments: [
          ["72%", "1"],
          ["90%", "1"],
          ["120%", "3"],
        ]
      },
      B: {
        name: "聲援",
        description: "提升友方單體{{}}爆擊傷害2回合",
        arguments: [
          ["20%"],
          ["30%"],
          ["50%"],
        ]
      },
      Passive: {
        name: "伊萊克聲援",
        description: "所有紅色情緒友方穿透率提升{{}}（死亡後也生效）",
        arguments: [
          ["6%"],
          ["7.3%"],
          ["8.7%"],
          ["10%"],
        ]
      },
      risingStar: [
        "",
        "",
        "每回合首次釋放技能後，敵方全體本回合忍耐率降低12%",
        "",
        "釋放技能「掃輪」後，若目標奧義能量少於3點，則自身攻擊力提升15%，持續2回合",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "機械助理",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "105",
      DEF: "44",
      HP: "266",
      Penetration: "14%",
      Durability: "14%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "過熱暴走",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並使目標降低3點奧義能量",
        arguments: [
          ["161%"],
          ["171%"],
          ["186%"],
          ["201%"],
        ]
      },
      A: {
        name: "光學加農",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["90%"],
          ["112%"],
          ["150%"],
        ]
      },
      B: {
        name: "電子結構",
        description: "提升友方單體{{}}爆擊傷害{{}}回合",
        arguments: [
          ["10%", "2"],
          ["15%", "2"],
          ["25%", "3"],
        ]
      },
      Passive: {
        name: "機械秘術",
        description: "除PVP模式和協力戰模式外，我方全體造成最終傷害提升{{}}",
        arguments: [
          ["8%"],
          ["9.3%"],
          ["10.7%"],
          ["12%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，防禦力提升15%",
        "",
        "戰鬥開始時，穿透率提升9%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "鳐搖心情",
    rarity: rarity.SSR,
    attribute: attribute.light,
    particle: particle.triangle,
    source: [characterSource.store],
    basic: {
      ATK: "126",
      DEF: "76",
      HP: "460",
      Penetration: "14%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "3%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "危險鳐魚",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並使目標降低3點奧義能量",
        arguments: [
          ["168%"],
          ["191%"],
          ["216%"],
          ["239%"],
        ]
      },
      A: {
        name: "搖鳐拍",
        description: "清除敵方單體{{}}層增益效果，並按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["1", "102%"],
          ["2", "120%"],
          ["4", "150%"],
        ]
      },
      B: {
        name: "鰩搖雨",
        description: "按{{}}攻擊力，對友方單體施加護盾2回合",
        arguments: [
          ["100%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "護衛",
        description: "僅PVP模式戰中，友方全體防禦相關能力提升{{}}",
        arguments: [
          ["9%"],
          ["10%"],
          ["11%"],
          ["12%"],
        ]
      },
      risingStar: [
        "對友方施加護盾效果時，驅散目標2層減益狀態",
        "",
        "回合開始時，若存在生命值低於50%的友方，則自身本回合內造成護盾提升15%",
        "",
        "戰鬥開始時，按150%攻擊力對友方全體施加1回合護盾",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "完美效勞",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.money],
    basic: {
      ATK: "145",
      DEF: "60",
      HP: "373",
      Penetration: "14%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "雙子爆彈",
        description: "按{{}}攻擊力，對敵方全體造成「穿刺傷害」",
        arguments: [
          ["177%"],
          ["201%"],
          ["227%"],
          ["252%"],
        ]
      },
      A: {
        name: "定點清洗",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」",
        arguments: [
          ["95%"],
          ["113%"],
          ["151%"],
        ]
      },
      B: {
        name: "自動除汙",
        description: "按{{}}攻擊力，對敵方全體造成「破裂傷害」",
        arguments: [
          ["71%"],
          ["85%"],
          ["112%"],
        ]
      },
      Passive: {
        name: "貼身服務",
        description: "如果本回合沒有受到傷害，下回合基礎能力提升{{}}（可疊加，最高2層，受到傷害後重置）",
        arguments: [
          ["6%"],
          ["7.3%"],
          ["8.7%"],
          ["10%"],
        ]
      },
      risingStar: [
        "",
        "",
        "釋放群體進攻技能時，若技能目標數大於2，則此次行動穿透率提升12%",
        "",
        "釋放群體進攻技能時，每有1個存在增益的目標，本次技能爆擊傷害提升15%，可疊加3層",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "純真拜訪者",
    rarity: rarity.SR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "109",
      DEF: "42",
      HP: "312",
      Penetration: "7%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "意外底牌",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["215%"],
          ["228%"],
          ["248%"],
          ["268%"],
        ]
      },
      A: {
        name: "飛葉",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "香氣席捲",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["90%"],
          ["112%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "秘境仙鈴",
        description: "戰鬥開始時，按自身戰前爆擊率抵抗的{{}}，提升自身爆擊率",
        arguments: [
          ["50%"],
          ["58.3%"],
          ["66.7%"],
          ["75%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，最大生命值提升15%",
        "",
        "戰鬥開始時，爆擊率抵抗提升6%，爆擊傷害抵抗12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "瘋人院",
    rarity: rarity.SSR,
    attribute: attribute.dark,
    particle: particle.triangle,
    source: [characterSource.money],
    basic: {
      ATK: "158",
      DEF: "60",
      HP: "359",
      Penetration: "3%",
      Durability: "0%",
      CRIT_Rate: "5%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "猩紅終結",
        description: "消耗自身30%當前生命值，按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["300%"],
          ["342%"],
          ["386%"],
          ["427%"],
        ]
      },
      A: {
        name: "緋紅旋刃",
        description: "按120%攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          [""],
          ["，並使自身獲得1點奧義能量"],
          ["，並使自身獲得2點奧義能量"],
        ]
      },
      B: {
        name: "赤紅連襲",
        description: "按{{}}攻擊力，對敵方單體造成「憤怒傷害」",
        arguments: [
          ["98%"],
          ["120%"],
          ["160%"],
        ]
      },
      Passive: {
        name: "斷罪",
        description: "每回合開始時，自身所有能力提升{{}}（僅生效三次）",
        arguments: [
          ["3.5%"],
          ["4.2%"],
          ["4.8%"],
          ["5.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若僅有1名敵方單位存活，則本回合穿透率提升20%",
        "",
        "每損失1%生命值，爆擊傷害提升1.2%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "浮世謠",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.store],
    basic: {
      ATK: "157",
      DEF: "56",
      HP: "437",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "5%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "5%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "森羅門扉",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」",
        arguments: [
          ["219%"],
          ["249%"],
          ["281%"],
          ["311%"],
        ]
      },
      A: {
        name: "弦音流轉",
        description: "驅散友方單體3層減益效果，並提升目標{{}}防禦力2回合",
        arguments: [
          ["10%"],
          ["20%"],
          ["30%"],
        ]
      },
      B: {
        name: "喚靈謠",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "春日歌",
        description: "所有紅色情緒友方造成的間接傷害提升{{}}",
        arguments: [
          ["10%"],
          ["11.7%"],
          ["13.3%"],
          ["15%"],
        ]
      },
      risingStar: [
        "",
        "",
        "每回合首次釋放技能後，友方全體本回合穿透率提升12%",
        "",
        "釋放進攻技能時，若目標帶有護盾，則本次進攻穿透率提升15%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "恬靜時刻",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "94",
      DEF: "50",
      HP: "347",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "7%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "時間洪流",
        description: "按{{}}自身最大生命值治療友方全體",
        arguments: [
          ["45%"],
          ["47%"],
          ["51%"],
          ["56%"],
        ]
      },
      A: {
        name: "優雅轉身",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "撥轉指針",
        description: "按{{}}自身最大生命值治療友方單體，並驅散目標{{}}層減益效果",
        arguments: [
          ["18%", "1"],
          ["25%", "2"],
          ["32%", "4"],
        ]
      },
      Passive: {
        name: "雨後初晴",
        description: "所有藍色情緒友方生命值提升{{}}",
        arguments: [
          ["13.5%"],
          ["16.5%"],
          ["19.5%"],
          ["22.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，最大生命值提升15%",
        "",
        "戰鬥開始時，忍耐率提升9%，造成治療提升8%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "枕邊童話",
    rarity: rarity.R,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "68",
      DEF: "41",
      HP: "305",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "4%"
    },
    skills: {
      Sp: {
        name: "紙中城堡",
        description: "按{{}}攻擊力，對敵方單體造成「暴烈傷害」",
        arguments: [
          ["204%"],
          ["215%"],
          ["226%"],
          ["237%"],
        ]
      },
      A: {
        name: "催夢",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["90%"],
          ["112%"],
          ["150%"],
        ]
      },
      B: {
        name: "眠境引力",
        description: "驅散友方全體{{}}層減益效果",
        arguments: [
          ["1"],
          ["2"],
          ["4"],
        ]
      },
      Passive: {
        name: "囈語",
        description: "當奧義能量滿時，友方全體防禦相關能力提升{{}}（僅生效一次）",
        arguments: [
          ["10%"],
          ["11.7%"],
          ["13.3%"],
          ["15%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，最大生命值提升10%",
        "",
        "戰鬥開始時，爆擊傷害提升16%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "心動療癒",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon, characterSource.money],
    basic: {
      ATK: "144",
      DEF: "63",
      HP: "477",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "7%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "心動四連拍",
        description: "按{{}}攻擊力，對敵方單體造成「破裂傷害」",
        arguments: [
          ["219%"],
          ["249%"],
          ["281%"],
          ["311%"],
        ]
      },
      A: {
        name: "潮愈",
        description: "驅散友方全體{{}}層減益效果",
        arguments: [
          ["2"],
          ["3"],
          ["5"],
        ]
      },
      B: {
        name: "鯨療",
        description: "按{{}}攻擊力治療友方全體",
        arguments: [
          ["65%"],
          ["81%"],
          ["108%"],
        ]
      },
      Passive: {
        name: "暖心服侍",
        description: "所有綠色情緒友方攻擊力提升{{}}（死亡後也生效）",
        arguments: [
          ["7%"],
          ["8.7%"],
          ["10.3%"],
          ["12%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若存在生命值低於50%的友方，則自身本回合內造成治療提升15%",
        "",
        "釋放技能「潮愈」時，對友方全體施加攻擊力提升15%，持續1回合",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "南彌生",
    subname: "緋紅武士",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "128",
      DEF: "83",
      HP: "509",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "3%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "不滅紅蓮",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["198%"],
          ["226%"],
          ["255%"],
          ["282%"],
        ]
      },
      A: {
        name: "燼滅",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並降低目標{{}}攻擊相關能力{{}}回合",
        arguments: [
          ["102%", "15%", "1"],
          ["120%", "25%", "1"],
          ["150%", "40%", "2"],
        ]
      },
      B: {
        name: "炎刃連斬",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並獲得「嘲諷」2回合",
        arguments: [
          ["72%"],
          ["90%"],
          ["120%"],
        ]
      },
      Passive: {
        name: "無燼",
        description: "自身每損失1%最大生命值，攻擊力提升{{}}",
        arguments: [
          ["0.3%"],
          ["0.35%"],
          ["0.4%"],
          ["0.45%"],
        ]
      },
      risingStar: [
        "",
        "",
        "受到攻擊時，本回合忍耐率提升6%，可疊加3層",
        "",
        "每損失1%生命值，傷害減免提升0.8%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "南彌生",
    subname: "封面女郎",
    rarity: rarity.SR,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "84",
      DEF: "54",
      HP: "385",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "7%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "激雷破",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並提升自身50%防禦力2回合",
        arguments: [
          ["229%"],
          ["243%"],
          ["264%"],
          ["285%"],
        ]
      },
      A: {
        name: "劈落",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並獲得「嘲諷」{{}}回合",
        arguments: [
          ["72%", "1"],
          ["90%", "1"],
          ["120%", "2"],
        ]
      },
      B: {
        name: "旋掃",
        description: "按{{}}攻擊力，對敵方單體造成「穿透傷害」",
        arguments: [
          ["95%"],
          ["125%"],
          ["167%"],
        ]
      },
      Passive: {
        name: "徒手格鬥",
        description: "每回合開始時，受到治療提升{{}}（可疊加，最高5層）",
        arguments: [
          ["9%"],
          ["11%"],
          ["13%"],
          ["15%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，防禦力提升15%",
        "",
        "戰鬥開始時，忍耐率提升9%，受到護盾提升8%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "南彌生",
    subname: "高級特工",
    rarity: rarity.R,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "66",
      DEF: "42",
      HP: "305",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "謝幕",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並獲得「嘲諷」2回合",
        arguments: [
          ["155%"],
          ["163%"],
          ["171%"],
          ["179%"],
        ]
      },
      A: {
        name: "快速拔槍",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」",
        arguments: [
          ["95%"],
          ["113%"],
          ["151%"],
        ]
      },
      B: {
        name: "亂射",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["90%"],
          ["112%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "午時將至",
        description: "所有粒子型態為「星流」的友方防禦力提升{{}}",
        arguments: [
          ["9%"],
          ["10.5%"],
          ["12%"],
          ["13.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，最大生命值提升10%",
        "",
        "戰鬥開始時，忍耐率提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "南彌生",
    subname: "夜間執勤",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "85",
      DEF: "53",
      HP: "385",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "暴亂手術",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並提升自身30%最大生命值2回合",
        arguments: [
          ["229%"],
          ["243%"],
          ["264%"],
          ["285%"],
        ]
      },
      A: {
        name: "麻痺處方",
        description: "按{{}}攻擊力，對敵方單體造成「穿透傷害」",
        arguments: [
          ["95%"],
          ["125%"],
          ["167%"],
        ]
      },
      B: {
        name: "重分解液",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並獲得「嘲諷」{{}}回合",
        arguments: [
          ["72%", "1"],
          ["90%", "1"],
          ["120%", "2"],
        ]
      },
      Passive: {
        name: "醫檢",
        description: "每有一點奧義能量，自身忍耐率提升{{}}",
        arguments: [
          ["6.6%"],
          ["7.4%"],
          ["8.2%"],
          ["9%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，最大生命值提升15%",
        "",
        "戰鬥開始時，忍耐率提升9%，受到治療提升8%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "內特",
    subname: "障礙破壞",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "118",
      DEF: "42",
      HP: "304",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "5%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "赤封淬煉",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["269%"],
          ["286%"],
          ["310%"],
          ["335%"],
        ]
      },
      A: {
        name: "火熾決心",
        description: "提升自身{{}}基礎能力2回合",
        arguments: [
          ["10%"],
          ["15%"],
          ["20%"],
        ]
      },
      B: {
        name: "粉碎打擊",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["80%"],
          ["93%"],
          ["125%"],
        ]
      },
      Passive: {
        name: "勃然奮勵",
        description: "每使用一次技能，自身爆擊率提升{{}}（可疊加，最高10層）",
        arguments: [
          ["2.5%"],
          ["3.67%"],
          ["4.83%"],
          ["6%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，爆擊率提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "內特",
    subname: "紀律監督",
    rarity: rarity.R,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "92",
      DEF: "34",
      HP: "208",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "幽明有儀",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["183%"],
          ["193%"],
          ["202%"],
          ["212%"],
        ]
      },
      A: {
        name: "正義撻擊",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "咒術渦旋",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "糾察有方",
        description: "僅PVP模式戰中，友方全體造成最終傷害提升{{}}",
        arguments: [
          ["9%"],
          ["10.5%"],
          ["12%"],
          ["13.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升5%",
        "",
        "戰鬥開始時，忍耐率提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "內特",
    subname: "海灘冒險",
    rarity: rarity.SR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "116",
      DEF: "43",
      HP: "269",
      Penetration: "10%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "旋風波紋斬",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["191%"],
          ["202%"],
          ["220%"],
          ["237%"],
        ]
      },
      A: {
        name: "海之螺旋",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」",
        arguments: [
          ["95%"],
          ["113%"],
          ["151%"],
        ]
      },
      B: {
        name: "踏海逐浪",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "海上冒險者",
        description: "釋放技能時，若目標沒有奧義能量，此次技能穿透率提升{{}}",
        arguments: [
          ["10%"],
          ["11.7%"],
          ["13.3%"],
          ["15%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，穿透率提升9%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "內特",
    subname: "英雄憧憬",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "161",
      DEF: "60",
      HP: "359",
      Penetration: "7%",
      Durability: "7%",
      CRIT_Rate: "0%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "正義降臨",
        description: "按{{}}攻擊力，對敵方單體造成「破裂傷害」",
        arguments: [
          ["219%"],
          ["249%"],
          ["281%"],
          ["311%"],
        ]
      },
      A: {
        name: "邪惡退散",
        description: "按{{}}攻擊力，對敵方單體造成「破裂傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      B: {
        name: "英雄潛行",
        description: "按{{}}攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          ["96%", ""],
          ["113%", "，並對目標施加1層「易傷」3回合"],
          ["150%", "，並對目標施加2層「易傷」3回合"],
        ]
      },
      Passive: {
        name: "暗流",
        description: "當友方全體存活時，自身爆擊傷害提升{{}}",
        arguments: [
          ["25%"],
          ["32%"],
          ["38%"],
          ["45%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若僅有1名敵方單位存活，則本回合穿透率提升20%",
        "",
        "攻擊帶有減益效果的目標時，忽略目標20%防禦力",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "小音",
    subname: "搬運工",
    rarity: rarity.R,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "68",
      DEF: "51",
      HP: "253",
      Penetration: "0%",
      Durability: "27%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "噗噗超壓擊",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["258%"],
          ["272%"],
          ["286%"],
          ["299%"],
        ]
      },
      A: {
        name: "噗噗攻擊",
        description: "「挑釁」敵方單體{{}}回合",
        arguments: [
          ["1"],
          ["2"],
          ["3"],
        ]
      },
      B: {
        name: "噗噗大迴旋",
        description: "按120%攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          [""],
          ["，並對目標施加「恐懼」1回合"],
          ["，並對目標施加「恐懼」2回合"],
        ]
      },
      Passive: {
        name: "大吃一斤",
        description: "每回合開始時，恢復自身{{}}最大生命值",
        arguments: [
          ["3%"],
          ["3.5%"],
          ["4%"],
          ["4.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，防禦力提升10%",
        "",
        "戰鬥開始時，忍耐率提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "小音",
    subname: "幽靈社團",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "119",
      DEF: "71",
      HP: "501",
      Penetration: "0%",
      Durability: "15%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "5%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "3%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "急急律令",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["280%"],
          ["319%"],
          ["360%"],
          ["398%"],
        ]
      },
      A: {
        name: "護法零食",
        description: "「挑釁」敵方單體，並降低自身{{}}受到的傷害，持續2回合",
        arguments: [
          ["15%"],
          ["25%"],
          ["40%"],
        ]
      },
      B: {
        name: "雷火靈符",
        description: "按90%攻擊力，對敵方全體造成傷害{{}}",
        arguments: [
          [""],
          ["，並對目標施加「恐懼」1回合"],
          ["，並對目標施加「恐懼」2回合"],
        ]
      },
      Passive: {
        name: "百寶",
        description: "除協力戰模式外，自身釋放完奧義技能後，友方全體攻擊力提升{{}}，持續2回合",
        arguments: [
          ["16%"],
          ["19%"],
          ["22%"],
          ["25%"],
        ]
      },
      risingStar: [
        "",
        "",
        "每回合首次釋放技能後，敵方全體本回合忍耐率降低12%",
        "",
        "釋放奧義技能後，降低目標40%攻擊力2回合",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "小音",
    subname: "橘色純真",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "86",
      DEF: "53",
      HP: "368",
      Penetration: "0%",
      Durability: "27%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "7%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "一起吃吧！",
        description: "使自身獲得「嘲諷」2回合，並提升自身{{}}防禦力2回合",
        arguments: [
          ["98%"],
          ["104%"],
          ["112%"],
          ["122%"],
        ]
      },
      A: {
        name: "零食時間",
        description: "降低自身{{}}受到傷害2回合",
        arguments: [
          ["15%"],
          ["25%"],
          ["40%"],
        ]
      },
      B: {
        name: "愛物分享",
        description: "按{{}}最大生命值，對敵方單體造成傷害",
        arguments: [
          ["25%"],
          ["35%"],
          ["45%"],
        ]
      },
      Passive: {
        name: "純真心願",
        description: "生命值低於50%時，自身忍耐率提升{{}}",
        arguments: [
          ["15%"],
          ["20%"],
          ["25%"],
          ["30%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，最大生命值提升15%",
        "",
        "戰鬥開始時，忍耐率提升9%，受到護盾提升8%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "小音",
    subname: "不思議鴨鴨",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "85",
      DEF: "54",
      HP: "368",
      Penetration: "0%",
      Durability: "27%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "鴨鴨衝鋒",
        description: "按{{}}防禦力，對敵方單體造成傷害，並對目標施加「恐懼」2回合",
        arguments: [
          ["314%"],
          ["333%"],
          ["362%"],
          ["391%"],
        ]
      },
      A: {
        name: "鴨鴨水炮",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並降低目標{{}}攻擊力{{}}回合",
        arguments: [
          ["102%", "20%", "1"],
          ["120%", "30%", "1"],
          ["150%", "40%", "2"],
        ]
      },
      B: {
        name: "鴨鴨漣漪",
        description: "按{{}}防禦力，對敵方全體造成傷害",
        arguments: [
          ["144%"],
          ["184%"],
          ["240%"],
        ]
      },
      Passive: {
        name: "鴨鴨的嘲笑",
        description: "戰鬥開始時嘲諷敵方全體1回合{{}}",
        arguments: [
          [""],
          ["，並且生命值提升5%"],
          ["，並且生命值提升9%"],
          ["，並且生命值提升15%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，防禦力提升15%",
        "",
        "戰鬥開始時，忍耐率提升9%，爆擊傷害抵抗提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "伊德",
    subname: "烈火戰線",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "157",
      DEF: "60",
      HP: "359",
      Penetration: "7%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "140%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "5%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "七號冰模效",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」",
        arguments: [
          ["226%"],
          ["257%"],
          ["290%"],
          ["321%"],
        ]
      },
      A: {
        name: "部署",
        description: "按{{}}攻擊力，對敵方單體造成傷害，此次傷害額外獲得{{}}「吸血」效果",
        arguments: [
          ["90%", "20%"],
          ["122%", "30%"],
          ["182%", "40%"],
        ]
      },
      B: {
        name: "斬滅",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」",
        arguments: [
          ["88%"],
          ["103%"],
          ["137%"],
        ]
      },
      Passive: {
        name: "開拓",
        description: "每次使用技能時，自身爆擊傷害提升{{}}（可疊加，最高10層）",
        arguments: [
          ["5%"],
          ["6%"],
          ["7%"],
          ["8%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若僅有1名敵方單位存活，則本回合穿透率提升20%",
        "",
        "被動技能疊加至10層時，攻擊力提升30%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "伊德",
    subname: "雪地奔馳",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "96",
      DEF: "53",
      HP: "323",
      Penetration: "0%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "140%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "飛躍風雪",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」",
        arguments: [
          ["217%"],
          ["230%"],
          ["250%"],
          ["270%"],
        ]
      },
      A: {
        name: "預熱",
        description: "獲得{{}}「吸血」效果2回合",
        arguments: [
          ["15%"],
          ["25%"],
          ["35%"],
        ]
      },
      B: {
        name: "板擊",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "雪地護具",
        description: "僅協力戰模式中，友方全體生命相關能力提升{{}}",
        arguments: [
          ["9%"],
          ["11%"],
          ["13%"],
          ["15%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，最大生命值提升15%",
        "",
        "戰鬥開始時，爆擊傷害提升24%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "伊德",
    subname: "繼承者",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "107",
      DEF: "43",
      HP: "266",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "140%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "7%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "情緒奪取",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」",
        arguments: [
          ["217%"],
          ["230%"],
          ["250%"],
          ["270%"],
        ]
      },
      A: {
        name: "靜默子彈",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "暗夜疾行",
        description: "按{{}}攻擊力，對敵方單體造成「暴烈傷害」",
        arguments: [
          ["95%"],
          ["100%"],
          ["125%"],
        ]
      },
      Passive: {
        name: "等候時機",
        description: "所有粒子型態為「三相」的友方攻擊力提升{{}}",
        arguments: [
          ["6.5%"],
          ["8.2%"],
          ["9.8%"],
          ["11.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，爆擊率提升6%，爆擊傷害提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "小白",
    subname: "戰略潛艇",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "161",
      DEF: "58",
      HP: "406",
      Penetration: "0%",
      Durability: "7%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "指令：銷毀",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["198%"],
          ["226%"],
          ["255%"],
          ["282%"],
        ]
      },
      A: {
        name: "指令：衝鋒",
        description: "按{{}}攻擊力，對敵方單體造成「破裂傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      B: {
        name: "指令：維護",
        description: "提升自身{{}}攻擊相關能力{{}}回合",
        arguments: [
          ["15%", "2"],
          ["20%", "2"],
          ["25%", "3"],
        ]
      },
      Passive: {
        name: "自主運算",
        description: "每有1點奧義能量，自身攻擊力提升{{}}",
        arguments: [
          ["2.5%"],
          ["4%"],
          ["5.5%"],
          ["7%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若僅有1名敵方單位存活，則本回合穿透率提升20%",
        "",
        "回合開始時，若奧義能量已滿，則爆擊傷害提升30%，持續2回合",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "小白",
    subname: "棋盤遊戲",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "121",
      DEF: "42",
      HP: "295",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "決勝之念",
        description: "按{{}}攻擊力，對敵方全體造成「穿透傷害」",
        arguments: [
          ["170%"],
          ["180%"],
          ["196%"],
          ["212%"],
        ]
      },
      A: {
        name: "厄念破除",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["80%"],
          ["93%"],
          ["125%"],
        ]
      },
      B: {
        name: "幸運執掌",
        description: "提升自身{{}}攻擊力{{}}回合",
        arguments: [
          ["15%", "1"],
          ["20%", "1"],
          ["30%", "2"],
        ]
      },
      Passive: {
        name: "真理眷顧",
        description: "僅協力戰模式中，友方全體攻擊相關能力提升{{}}",
        arguments: [
          ["3.5%"],
          ["4.2%"],
          ["4.8%"],
          ["5.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，忍耐率提升9%，爆擊率抵抗提升6%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "小白",
    subname: "AI助理",
    rarity: rarity.R,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "94",
      DEF: "34",
      HP: "232",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "全體清掃",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["183%"],
          ["193%"],
          ["202%"],
          ["212%"],
        ]
      },
      A: {
        name: "攻擊指令",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」",
        arguments: [
          ["95%"],
          ["113%"],
          ["151%"],
        ]
      },
      B: {
        name: "飛彈追蹤",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "弱點定位",
        description: "所有綠色情緒友方穿透率提升{{}}",
        arguments: [
          ["9%"],
          ["10.5%"],
          ["12%"],
          ["13.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升5%",
        "",
        "戰鬥開始時，爆擊率提升8%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "艾琳娜",
    subname: "致命音符",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "145",
      DEF: "61",
      HP: "359",
      Penetration: "14%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "15%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "熾熱樂章",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加「恐懼」2回合",
        arguments: [
          ["178%"],
          ["202%"],
          ["229%"],
          ["253%"],
        ]
      },
      A: {
        name: "閃光獨奏",
        description: "按{{}}攻擊力，對敵方單體造成「穿透傷害」",
        arguments: [
          ["95%"],
          ["125%"],
          ["167%"],
        ]
      },
      B: {
        name: "爆烈節拍",
        description: "按{{}}攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          ["120%", ""],
          ["120%", "，並對目標施加「封印」1回合"],
          ["150%", "，並對目標施加「封印」2回合"],
        ]
      },
      Passive: {
        name: "和聲",
        description: "所有粒子型態為「三相」的友方攻擊力提升{{}}（死亡後也生效）",
        arguments: [
          ["7%"],
          ["8.7%"],
          ["10.3%"],
          ["12%"],
        ]
      },
      risingStar: [
        "",
        "",
        "每回合首次釋放技能後，敵方全體本回合忍耐率降低12%",
        "",
        "攻擊生命值大於50%的目標時，穿透率提升25%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "可可",
    subname: "秘密調查",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "154",
      DEF: "60",
      HP: "363",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "10%",
      CRIT_DMG: "130%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "3%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "終末強襲",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對受到傷害的目標施加「餘震」3回合",
        arguments: [
          ["224%"],
          ["255%"],
          ["288%"],
          ["319%"],
        ]
      },
      A: {
        name: "碎影",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對受到傷害的目標施加「餘震」3回合",
        arguments: [
          ["96%"],
          ["120%"],
          ["160%"],
        ]
      },
      B: {
        name: "流光",
        description: "提升自身{{}}攻擊相關能力{{}}回合",
        arguments: [
          ["15%", "2"],
          ["20%", "2"],
          ["25%", "3"],
        ]
      },
      Passive: {
        name: "生存法則",
        description: "釋放技能時，若目標生命值小於最大生命值的60%，此次技能攻擊力提升{{}}",
        arguments: [
          ["12%"],
          ["14%"],
          ["16%"],
          ["18%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若僅有1名敵方單位存活，則本回合穿透率提升20%",
        "",
        "釋放奧義技能時，先對目標施加2層「易傷」，持續3回合",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "安雅",
    subname: "長夜冰冕",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon, characterSource.signin],
    basic: {
      ATK: "129",
      DEF: "66",
      HP: "471",
      Penetration: "0%",
      Durability: "7%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "5%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "10%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "凜夜極冰",
        description: "提升自身{{}}最大生命值1回合，並承擔除自身以外所有友方40%受到傷害",
        arguments: [
          ["51%"],
          ["57%"],
          ["65%"],
          ["72%"],
        ]
      },
      A: {
        name: "霜刃",
        description: "按120%攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          [""],
          ["，並對目標施加「冰封」1回合"],
          ["，並對目標施加「冰封」2回合"],
        ]
      },
      B: {
        name: "雪之擁",
        description: "按自身{{}}最大生命值，對友方單體施加護盾2回合",
        arguments: [
          ["33%"],
          ["50%"],
          ["67%"],
        ]
      },
      Passive: {
        name: "霜凍",
        description: "所有綠色情緒友方生命值提升{{}}（死亡後也生效）",
        arguments: [
          ["15%"],
          ["18.3%"],
          ["21.7%"],
          ["25%"],
        ]
      },
      risingStar: [
        "",
        "",
        "釋放技能「雪之擁」時，按“長夜冰冕”最大生命值的20%，對目標以外的友方施加1回合護盾",
        "",
        "",
        "釋放技能「雪之擁」時，對目標以外的友方施加的護盾效果提升至“長夜冰冕”最大生命值的33%，持續時間增加至2回合",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "安雅",
    subname: "鏡光旖夢",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "96",
      DEF: "48",
      HP: "347",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "7%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "折光逐影",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」",
        arguments: [
          ["217%"],
          ["230%"],
          ["250%"],
          ["270%"],
        ]
      },
      A: {
        name: "鏡刃",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "鏡反",
        description: "按自身{{}}最大生命值治療友方單體",
        arguments: [
          ["25%"],
          ["35%"],
          ["45%"],
        ]
      },
      Passive: {
        name: "暗局",
        description: "所有紅色情緒友方生命值提升{{}}",
        arguments: [
          ["13.5%"],
          ["16.5%"],
          ["19.5%"],
          ["22.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，最大生命值提升15%",
        "",
        "戰鬥開始時，忍耐率提升9%，造成治療提升8%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "米婭",
    subname: "愛心妝點",
    rarity: rarity.SR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "96",
      DEF: "48",
      HP: "347",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "8%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "7%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "暴走助理",
        description: "按{{}}攻擊力對友方全體施加護盾1回合",
        arguments: [
          ["179%"],
          ["190%"],
          ["206%"],
          ["223%"],
        ]
      },
      A: {
        name: "靈感乍現",
        description: "按{{}}基礎攻擊力，提升友方單體攻擊力2回合",
        arguments: [
          ["20%"],
          ["30%"],
          ["40%"],
        ]
      },
      B: {
        name: "美麗魔法",
        description: "按{{}}攻擊力對友方單體施加護盾2回合",
        arguments: [
          ["100%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "光彩重現",
        description: "友方死亡時，自身攻擊力提升{{}}（僅生效一次）",
        arguments: [
          ["16%"],
          ["19%"],
          ["22%"],
          ["25%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，防禦力提升15%",
        "",
        "戰鬥開始時，造成護盾提升16%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "雲燦",
    subname: "火樹流光",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "157",
      DEF: "60",
      HP: "359",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "10%",
      CRIT_DMG: "125%",
      CRIT_Rate_RES: "5%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "赤焰沖宵",
        description: "按{{}}攻擊力，對敵方單體造成「暴烈傷害」",
        arguments: [
          ["222%"],
          ["252%"],
          ["285%"],
          ["316%"],
        ]
      },
      A: {
        name: "挑燈撥火",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      B: {
        name: "天火墜",
        description: "對敵方全體施加1層「詛咒」{{}}回合",
        arguments: [
          ["1"],
          ["2"],
          ["3"],
        ]
      },
      Passive: {
        name: "灼心",
        description: "所有粒子型態為「星流」的友方基礎能力提升{{}}（死亡後也生效）",
        arguments: [
          ["4%"],
          ["4.7%"],
          ["5.3%"],
          ["6%"],
        ]
      },
      risingStar: [
        "",
        "",
        "每回合首次釋放技能後，敵方全體本回合忍耐率降低12%",
        "",
        "從第二回合開始，每回合開始時對敵方全體施加1回合「詛咒」",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "雲燦",
    subname: "銀鉤墨舞",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "115",
      DEF: "43",
      HP: "269",
      Penetration: "7%",
      Durability: "0%",
      CRIT_Rate: "10%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "揮毫潑墨",
        description: "按{{}}攻擊力，對敵方單體造成「暴烈傷害」",
        arguments: [
          ["213%"],
          ["226%"],
          ["246%"],
          ["265%"],
        ]
      },
      A: {
        name: "力透紙背",
        description: "按{{}}攻擊力，對敵方單體造成「暴烈傷害」",
        arguments: [
          ["95%"],
          ["100%"],
          ["125%"],
        ]
      },
      B: {
        name: "龍蛇飛影",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "點染",
        description: "當友方存在“雲沛”時，自身爆擊傷害提升{{}}",
        arguments: [
          ["25%"],
          ["32%"],
          ["38%"],
          ["45%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，穿透率提升9%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "雲沛",
    subname: "夕雪晚照",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "157",
      DEF: "60",
      HP: "366",
      Penetration: "10%",
      Durability: "0%",
      CRIT_Rate: "3%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "7%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "傘舞縈回",
        description: "按{{}}攻擊力，對敵方單體造成「穿透傷害」",
        arguments: [
          ["222%"],
          ["252%"],
          ["285%"],
          ["316%"],
        ]
      },
      A: {
        name: "綺繡凜風",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並使目標受到的間接傷害提升{{}}，持續{{}}回合",
        arguments: [
          ["86%", "20%", "1"],
          ["96%", "20%", "2"],
          ["128%", "30%", "2"],
        ]
      },
      B: {
        name: "飛影煌煌",
        description: "按{{}}攻擊力，對敵方單體造成「穿透傷害」",
        arguments: [
          ["95%"],
          ["125%"],
          ["167%"],
        ]
      },
      Passive: {
        name: "覆雪",
        description: "每有1點奧義能量，自身穿透率提升{{}}",
        arguments: [
          ["2%"],
          ["3.4%"],
          ["4.8%"],
          ["6.2%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若僅有1名敵方單位存活，則本回合穿透率提升20%",
        "",
        "釋放奧義技能時，先對自身施加攻擊能力提升15%，持續2回合",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "雲沛",
    subname: "墨蘊尋真",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon, characterSource.signin],
    basic: {
      ATK: "93",
      DEF: "48",
      HP: "357",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "7%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "化雲煙",
        description: "提升友方單體{{}}爆擊傷害1回合",
        arguments: [
          ["40%"],
          ["42%"],
          ["46%"],
          ["50%"],
        ]
      },
      A: {
        name: "纏青枝",
        description: "按{{}}最大生命值，對友方全體施加「漸愈」3回合",
        arguments: [
          ["14%"],
          ["17%"],
          ["21%"],
        ]
      },
      B: {
        name: "沐甘霖",
        description: "提升友方單體{{}}攻擊力2回合",
        arguments: [
          ["15%"],
          ["20%"],
          ["30%"],
        ]
      },
      Passive: {
        name: "逐真",
        description: "戰鬥開始時，按自身戰前最大生命值的{{}}為攻擊力最高的友方提升攻擊力",
        arguments: [
          ["2%"],
          ["2.2%"],
          ["2.6%"],
          ["3%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，最大生命值提升15%",
        "",
        "戰鬥開始時，忍耐率提升18%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "奧爾嘉",
    subname: "除障者",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "157",
      DEF: "67",
      HP: "366",
      Penetration: "10%",
      Durability: "0%",
      CRIT_Rate: "3%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "湮宇重火",
        description: "按{{}}攻擊力，對敵方單體造成「穿透傷害」",
        arguments: [
          ["222%"],
          ["252%"],
          ["285%"],
          ["316%"],
        ]
      },
      A: {
        name: "警告",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "指示",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並清除目標{{}}層增益效果",
        arguments: [
          ["102%", "1"],
          ["120%", "2"],
          ["150%", "4"],
        ]
      },
      Passive: {
        name: "無畏",
        description: "回合開始時，驅散自身2層減益效果{{}}",
        arguments: [
          [""],
          ["，並且在戰鬥開始時，攻擊力提升3%"],
          ["，並且在戰鬥開始時，攻擊力提升6%"],
          ["，並且在戰鬥開始時，攻擊力提升9%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若僅有1名敵方單位存活，則本回合穿透率提升20%",
        "",
        "釋放奧義技能時，清除目標4層增益效果",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "司諾",
    subname: "極寒朔風",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.square,
    source: [characterSource.summon],
    basic: {
      ATK: "116",
      DEF: "73",
      HP: "519",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "5%",
      CRIT_DMG_RES: "5%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "不墜誓約",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並回復20%最大生命值",
        arguments: [
          ["224%"],
          ["255%"],
          ["288%"],
          ["319%"],
        ]
      },
      A: {
        name: "寒霜刺骨",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "一以當千",
        description: "使自身獲得「嘲諷」2回合，並提升自身{{}}防禦力{{}}回合",
        arguments: [
          ["20%", "1"],
          ["20%", "2"],
          ["35%", "2"],
        ]
      },
      Passive: {
        name: "雪之祝禱",
        description: "當上陣戰鬥員的屬性均為藍色時，自身受到治療提升{{}}",
        arguments: [
          ["15%"],
          ["16.7%"],
          ["18.3%"],
          ["20%"],
        ]
      },
      risingStar: [
        "",
        "",
        "受到攻擊時，本回合忍耐率提升6%，可疊加3層",
        "",
        "「嘲諷」狀態下受到攻擊時，觸發反擊效果，釋放2星「寒霜刺骨」攻擊隨機敵方單體，反擊效果每回合至多觸發2次",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "娜芙瑞特",
    subname: "秘域訪客",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    basic: {
      ATK: "162",
      DEF: "56",
      HP: "385",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "沙蛇狂舞",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並對受到傷害的目標施加「流血」4回合",
        arguments: [
          ["172%"],
          ["196%"],
          ["221%"],
          ["245%"],
        ]
      },
      A: {
        name: "回刃",
        description: "按{{}}攻擊力，對敵方單體造成傷害，此次傷害額外獲得{{}}「吸血」效果",
        arguments: [
          ["90%", "20%"],
          ["122%", "30%"],
          ["182%", "40%"],
        ]
      },
      B: {
        name: "落血斬",
        description: "按{{}}攻擊力，對敵方單體造成「真實傷害」",
        arguments: [
          ["87%"],
          ["114%"],
          ["144%"],
        ]
      },
      Passive: {
        name: "命運之佑",
        description: "每次獲得治療效果，自身攻擊力提升{{}}（可疊加，每個技能最多疊加1層，最高10層）",
        arguments: [
          ["2.5%"],
          ["3%"],
          ["3.5%"],
          ["4%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若僅有1名敵方單位存活，則本回合穿透率提升20%",
        "",
        "釋放基礎技能後，對目標施加1回合「流血」，每回合至多觸發1次",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "海蕾",
    subname: "清道夫之夜",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "161",
      DEF: "60",
      HP: "359",
      Penetration: "10%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "130%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "地脈撼動",
        description: "按{{}}攻擊力，對敵方全體造成「穿刺傷害」",
        arguments: [
          ["177%"],
          ["201%"],
          ["227%"],
          ["252%"],
        ]
      },
      A: {
        name: "追風之矢",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」",
        arguments: [
          ["95%"],
          ["113%"],
          ["151%"],
        ]
      },
      B: {
        name: "終末之鋒",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "恥辱",
        description: "戰鬥開始時自身獲得2點奧義能量{{}}",
        arguments: [
          [""],
          ["，並且額外獲得攻擊力提升3%"],
          ["，並且額外獲得攻擊力提升6%"],
          ["，並且額外獲得攻擊力提升9%"],
        ]
      },
      risingStar: [
        "",
        "",
        "釋放群體進攻技能時，若技能目標數大於2，則此次行動穿透率提升12%",
        "",
        "釋放奧義技能時，自身穿透率提升25%，技能結束後清除",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "祈",
    subname: "碧魂燈",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.square,
    source: [characterSource.summon],
    basic: {
      ATK: "154",
      DEF: "56",
      HP: "414",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "125%",
      CRIT_Rate_RES: "10%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "攝魂奪魄",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並搶奪目標25%攻擊力2回合（不超過自身基礎攻擊力的25%）",
        arguments: [
          ["238%"],
          ["271%"],
          ["306%"],
          ["339%"],
        ]
      },
      A: {
        name: "勾魂",
        description: "按120%攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          [""],
          ["，並對目標施加「沉默」1回合"],
          ["，並對目標施加「沉默」2回合"],
        ]
      },
      B: {
        name: "媚吻",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "靈能共振",
        description: "當奧義能量滿時，友方全體攻擊力提升{{}}（僅生效一次）",
        arguments: [
          ["9%"],
          ["11%"],
          ["13%"],
          ["15%"],
        ]
      },
      risingStar: [
        "",
        "",
        "每回合首次釋放技能後，敵方全體本回合忍耐率降低12%",
        "",
        "釋放奧義技能後，獲得15%「吸血」2回合",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "達妮卡",
    subname: "暗巷星火",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.star,
    source: [characterSource.summon],
    basic: {
      ATK: "154",
      DEF: "60",
      HP: "363",
      Penetration: "14%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "3%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "叫大聲點",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["198%"],
          ["226%"],
          ["255%"],
          ["282%"],
        ]
      },
      A: {
        name: "惡劣誘導",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "貧民窟法則",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」",
        arguments: [
          ["95%"],
          ["113%"],
          ["151%"],
        ]
      },
      Passive: {
        name: "底城主場",
        description: "戰鬥開始時自身獲得2點奧義能量{{}}",
        arguments: [
          [""],
          ["，並且攻擊力提升3%"],
          ["，並且攻擊力提升6%"],
          ["，並且攻擊力提升9%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若僅有1名敵方單位存活，則本回合穿透率提升20%",
        "",
        "釋放技能「惡劣誘導」時，對目標施加2回合防禦力降低25%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "依蓮娜",
    subname: "粉紅風暴",
    rarity: rarity.SSR,
    attribute: attribute.green,
    particle: particle.square,
    source: [characterSource.summon],
    basic: {
      ATK: "161",
      DEF: "56",
      HP: "388",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "終極兔兔連發彈",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」",
        arguments: [
          ["226%"],
          ["257%"],
          ["290%"],
          ["321%"],
        ]
      },
      A: {
        name: "兔兔連發彈",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」",
        arguments: [
          ["88%"],
          ["103%"],
          ["137%"],
        ]
      },
      B: {
        name: "兔兔震撼彈",
        description: "降低敵方全體{{}}爆擊率抵抗{{}}2回合",
        arguments: [
          ["15%", ""],
          ["15%", "和30%爆擊傷害抵抗"],
          ["25%", "和50%爆擊傷害抵抗"],
        ]
      },
      Passive: {
        name: "血月之夜",
        description: "所有粒子型態為「方波」的友方基礎能力提升{{}}（死亡後也生效）",
        arguments: [
          ["4%"],
          ["4.7%"],
          ["5.3%"],
          ["6%"],
        ]
      },
      risingStar: [
        "",
        "",
        "每回合首次釋放技能後，敵方全體本回合忍耐率降低12%",
        "",
        "友方粒子型態均為「方波」時，自身爆擊率提升25%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "真心",
    subname: "青之迴旋",
    rarity: rarity.SSR,
    attribute: attribute.red,
    particle: particle.square,
    source: [characterSource.summon],
    basic: {
      ATK: "153",
      DEF: "63",
      HP: "469",
      Penetration: "7%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "倒鉤射門",
        description: "按{{}}攻擊力，對敵方單體造成「穿透傷害」",
        arguments: [
          ["222%"],
          ["252%"],
          ["285%"],
          ["316%"],
        ]
      },
      A: {
        name: "長傳沖吊",
        description: "按{{}}攻擊力，對敵方全體造成「穿透傷害」",
        arguments: [
          ["71%"],
          ["94%"],
          ["125%"],
        ]
      },
      B: {
        name: "凌空抽射",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對受到傷害的目標施加「點燃」3回合",
        arguments: [
          ["96%"],
          ["120%"],
          ["160%"],
        ]
      },
      Passive: {
        name: "帽子戲法",
        description: "僅協力戰中，每回合開始時，友方全體造成最終傷害提升{{}}（可疊加，最高4層）",
        arguments: [
          ["4%"],
          ["5.3%"],
          ["6.7%"],
          ["8%"],
        ]
      },
      risingStar: [
        "",
        "",
        "回合開始時，若僅有1名敵方單位存活，則本回合穿透率提升20%",
        "",
        "釋放技能「長傳沖吊」時，對敵方全體施加「點燃」3回合",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "瑪拉",
    subname: "憎惡鬥者",
    rarity: rarity.R,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "91",
      DEF: "34",
      HP: "210",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "10%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "噩夢來襲",
        description: "按{{}}攻擊力，對敵方單體造成「破滅傷害」",
        arguments: [
          ["183%"],
          ["193%"],
          ["202%"],
          ["212%"],
        ]
      },
      A: {
        name: "毒氣爆破",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加1層「毒」3回合",
        arguments: [
          ["96%"],
          ["120%"],
          ["160%"],
        ]
      },
      B: {
        name: "穢雜潮汐",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "興奮毒素",
        description: "僅協力戰模式中，友方全體造成最終傷害提升{{}}",
        arguments: [
          ["10%"],
          ["11.7%"],
          ["13.3%"],
          ["15%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升5%",
        "",
        "戰鬥開始時，爆擊率提升8%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "通夜",
    subname: "守夜人",
    rarity: rarity.R,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "83",
      DEF: "34",
      HP: "210",
      Penetration: "14%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "拔刀相向",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["206%"],
          ["217%"],
          ["228%"],
          ["239%"],
        ]
      },
      A: {
        name: "加害",
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      B: {
        name: "妄斷",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "感同身受",
        description: "僅PVP模式戰中，友方全體傷害減免提升{{}}",
        arguments: [
          ["6%"],
          ["7%"],
          ["8%"],
          ["9%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升5%",
        "",
        "戰鬥開始時，穿透率提升6%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "刀客",
    subname: "修習者",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "113",
      DEF: "44",
      HP: "266",
      Penetration: "14%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "追魂索命",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並清除目標3層增益效果",
        arguments: [
          ["229%"],
          ["243%"],
          ["264%"],
          ["285%"],
        ]
      },
      A: {
        name: "逆刃",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」",
        arguments: [
          ["95%"],
          ["113%"],
          ["151%"],
        ]
      },
      B: {
        name: "裂虹",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "一心",
        description: "如果自身本回合沒有受到攻擊，下回合穿透率提升{{}}",
        arguments: [
          ["11.2%"],
          ["13.5%"],
          ["15.9%"],
          ["18.2%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，穿透率提升9%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "阿噓",
    subname: "電玩怪客",
    rarity: rarity.R,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "92",
      DEF: "33",
      HP: "215",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "電玩次元大亂揍",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["206%"],
          ["217%"],
          ["228%"],
          ["239%"],
        ]
      },
      A: {
        name: "先下手為強",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "小豬向前沖",
        description: "按{{}}攻擊力，對敵方單體造成「真實傷害」",
        arguments: [
          ["87%"],
          ["114%"],
          ["144%"],
        ]
      },
      Passive: {
        name: "重傷",
        description: "自身每損失1%最大生命值，敵方受到治療降低{{}}",
        arguments: [
          ["0.6%"],
          ["0.7%"],
          ["0.8%"],
          ["0.9%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升5%",
        "",
        "戰鬥開始時，爆擊率提升8%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "瑞德",
    subname: "詐欺小丑",
    rarity: rarity.SR,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "102",
      DEF: "52",
      HP: "269",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "140%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "忌日快樂",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加「點燃」3回合",
        arguments: [
          ["215%"],
          ["228%"],
          ["248%"],
          ["268%"],
        ]
      },
      A: {
        name: "欺詐禮盒",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對受到傷害的目標施加「點燃」3回合",
        arguments: [
          ["96%"],
          ["120%"],
          ["160%"],
        ]
      },
      B: {
        name: "黑色幽默",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "魔術手",
        description: "戰鬥開始時，按自身戰前攻擊力的{{}}提升防禦力",
        arguments: [
          ["9%"],
          ["11%"],
          ["13%"],
          ["15%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，爆擊傷害提升24%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "伊雷",
    subname: "爆裂火山",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "116",
      DEF: "44",
      HP: "264",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "5%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "搖滾熔岩",
        description: "按{{}}攻擊力，對敵方全體造成傷害，並對目標施加「點燃」3回合",
        arguments: [
          ["172%"],
          ["183%"],
          ["198%"],
          ["214%"],
        ]
      },
      A: {
        name: "滑板衝刺",
        description: "按{{}}攻擊力，對敵方單體造成「破碎傷害」",
        arguments: [
          ["88%"],
          ["103%"],
          ["137%"],
        ]
      },
      B: {
        name: "特技表演",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "尋釁滋事",
        description: "戰鬥開始時，自身基礎能力提升{{}}",
        arguments: [
          ["9%"],
          ["11%"],
          ["13%"],
          ["15%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，爆擊率提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "依琳",
    subname: "蒼白舞者",
    rarity: rarity.SSR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "119",
      DEF: "73",
      HP: "509",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "5%",
      CRIT_DMG_RES: "5%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "謝幕禮",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加「恐懼」2回合",
        arguments: [
          ["168%"],
          ["191%"],
          ["216%"],
          ["239%"],
        ]
      },
      A: {
        name: "會心一擊",
        description: "按120%攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          [""],
          ["，並對目標施加「感染」1回合"],
          ["，並對目標施加「感染」2回合"],
        ]
      },
      B: {
        name: "優雅舞步",
        description: "提升友方全體{{}}穿透率2回合",
        arguments: [
          ["12%"],
          ["16%"],
          ["24%"],
        ]
      },
      Passive: {
        name: "同化",
        description: "所有粒子型態均為「圓振」的友方攻擊力提升{{}}",
        arguments: [
          ["7%"],
          ["8.7%"],
          ["10.3%"],
          ["12%"],
        ]
      },
      risingStar: [
        "",
        "",
        "每回合首次釋放技能後，友方全體本回合穿透率提升12%",
        "",
        "戰鬥開始時，按自身忍耐率的25%，降低敵方全體忍耐率",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "兔子玩偶",
    subname: "怪力巨兔",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "116",
      DEF: "43",
      HP: "266",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "10%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "5%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "3%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "胡蘿蔔流星",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對受到傷害的目標施加「餘震」3回合",
        arguments: [
          ["215%"],
          ["228%"],
          ["248%"],
          ["268%"],
        ]
      },
      A: {
        name: "跺腳",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["90%"],
          ["112%"],
          ["150%"],
        ]
      },
      B: {
        name: "兔兔坐飛機",
        description: "按{{}}攻擊力，對敵方單體造成「暴烈傷害」",
        arguments: [
          ["76%"],
          ["80%"],
          ["100%"],
        ]
      },
      Passive: {
        name: "堆疊",
        description: "每使用一次技能，自身爆擊傷害提升{{}}（可疊加，最高10層）",
        arguments: [
          ["4.5%"],
          ["5.5%"],
          ["6.5%"],
          ["7.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，爆擊率提升6%，穿透率提升4.5%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "杰克皇",
    subname: "時運失衡",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "118",
      DEF: "44",
      HP: "260",
      Penetration: "10%",
      Durability: "14%",
      CRIT_Rate: "0%",
      CRIT_DMG: "125%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "天崩地裂",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加「沉默」2回合",
        arguments: [
          ["161%"],
          ["171%"],
          ["186%"],
          ["201%"],
        ]
      },
      A: {
        name: "蠻牛衝撞",
        description: "按{{}}攻擊力，對敵方單體造成「破裂傷害」",
        arguments: [
          ["94%"],
          ["113%"],
          ["150%"],
        ]
      },
      B: {
        name: "怒意燃燒",
        description: "提升自身{{}}攻擊相關能力{{}}回合",
        arguments: [
          ["15%", "2"],
          ["20%", "2"],
          ["25%", "3"],
        ]
      },
      Passive: {
        name: "趁人之危",
        description: "攻擊沒有奧義能量的目標時，造成最終傷害提升{{}}",
        arguments: [
          ["18%"],
          ["22%"],
          ["26%"],
          ["30%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，穿透率提升4.5%，爆擊傷害抵抗提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "死神",
    subname: "奪魂之鐮",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "107",
      DEF: "43",
      HP: "266",
      Penetration: "14%",
      Durability: "14%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "暗殺領域",
        description: "按{{}}攻擊力，對敵方全體造成「穿刺傷害」",
        arguments: [
          ["170%"],
          ["180%"],
          ["196%"],
          ["212%"],
        ]
      },
      A: {
        name: "冥火之觸",
        description: "按120%攻擊力，對敵方單體造成傷害{{}}",
        arguments: [
          [""],
          ["，並對目標施加1回合「感染」"],
          ["，並對目標施加2回合「感染」"],
        ]
      },
      B: {
        name: "天降噩耗",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["90%"],
          ["112%"],
          ["150%"],
        ]
      },
      Passive: {
        name: "病毒肆意",
        description: "僅PVP模式戰中，敵方全體防禦相關能力降低{{}}",
        arguments: [
          ["9%"],
          ["11%"],
          ["13%"],
          ["15%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，穿透率提升9%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "文森特",
    subname: "孤獨紳士",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "85",
      DEF: "68",
      HP: "326",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "5%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "10%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "無私守護",
        description: "提升友方全體{{}}爆擊率抵抗2回合",
        arguments: [
          ["39%"],
          ["41%"],
          ["45%"],
          ["48%"],
        ]
      },
      A: {
        name: "彈力手杖",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "魔術表演",
        description: "提升友方單體{{}}穿透率3回合",
        arguments: [
          ["20%"],
          ["30%"],
          ["50%"],
        ]
      },
      Passive: {
        name: "堅守",
        description: "每有1點奧義能量，自身最大生命值提升{{}}",
        arguments: [
          ["7.2%"],
          ["9%"],
          ["10.8%"],
          ["12.6%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，防禦力提升15%",
        "",
        "戰鬥開始時，受到護盾提升16%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "卡蘿爾",
    subname: "落寞淑女",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "86",
      DEF: "54",
      HP: "378",
      Penetration: "0%",
      Durability: "20%",
      CRIT_Rate: "10%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "美夢成真",
        description: "按自身{{}}最大生命值治療友方全體",
        arguments: [
          ["45%"],
          ["47%"],
          ["51%"],
          ["56%"],
        ]
      },
      A: {
        name: "心有所屬",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "落花有意",
        description: "按自身{{}}最大生命值治療友方全體",
        arguments: [
          ["18%"],
          ["25%"],
          ["32%"],
        ]
      },
      Passive: {
        name: "護衛",
        description: "所有紅色情緒友方防禦力提升{{}}",
        arguments: [
          ["13.5%"],
          ["16.5%"],
          ["19.5%"],
          ["22.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，最大生命值提升15%",
        "",
        "戰鬥開始時，忍耐率提升18%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "狂傲戰士",
    subname: "鋼鐵傀儡",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "84",
      DEF: "68",
      HP: "368",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "神聖獻祭",
        description: "承擔除自身以外所有友方35%受到傷害2回合，並提升自身{{}}防禦能力2回合",
        arguments: [
          ["29%"],
          ["31%"],
          ["33%"],
          ["36%"],
        ]
      },
      A: {
        name: "飛刃斬殺",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "憐憫之光",
        description: "提升自身{{}}防禦力2回合",
        arguments: [
          ["30%"],
          ["40%"],
          ["50%"],
        ]
      },
      Passive: {
        name: "鋼鐵之軀",
        description: "每回合開始時，自身忍耐率提升{{}}（可疊加，最高10層）",
        arguments: [
          ["1.5%"],
          ["2%"],
          ["2.5%"],
          ["3%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，防禦力提升15%",
        "",
        "戰鬥開始時，爆擊率抵抗提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },

  {
    name: "賽爾",
    subname: "惡念殘響",
    rarity: rarity.SR,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "116",
      DEF: "43",
      HP: "269",
      Penetration: "0%",
      Durability: "14%",
      CRIT_Rate: "8%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "具現狂想",
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加「失明」2回合",
        arguments: [
          ["161%"],
          ["171%"],
          ["186%"],
          ["201%"],
        ]
      },
      A: {
        name: "數據切割",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["160%"],
          ["200%"],
        ]
      },
      B: {
        name: "強制侵入",
        description: "搶奪敵方單體{{}}防禦力2回合（不超過自身基礎防禦力的{{}}）",
        arguments: [
          ["20%", "20%"],
          ["30%", "30%"],
          ["50%", "50%"],
        ]
      },
      Passive: {
        name: "能源充足",
        description: "若生命值大於最大生命值的50%，自身攻擊力提升{{}}",
        arguments: [
          ["14.4%"],
          ["17.6%"],
          ["20.8%"],
          ["24%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，忍耐率提升18%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "奈緒",
    subname: "癔症粉絲",
    rarity: rarity.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "105",
      DEF: "44",
      HP: "269",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "10%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "8%",
      CRIT_DMG_RES: "10%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "全盤支持",
        description: "按{{}}攻擊力，對敵方全體造成傷害",
        arguments: [
          ["215%"],
          ["228%"],
          ["248%"],
          ["268%"],
        ]
      },
      A: {
        name: "打榜",
        description: "按{{}}攻擊力，對敵方單體造成「真實傷害」",
        arguments: [
          ["87%"],
          ["114%"],
          ["144%"],
        ]
      },
      B: {
        name: "伴樂",
        description: "提升友方單體{{}}爆擊率{{}}回合",
        arguments: [
          ["15%", "2"],
          ["20%", "2"],
          ["30%", "3"],
        ]
      },
      Passive: {
        name: "羊群效應",
        description: "所有人類基礎能力提升{{}}",
        arguments: [
          ["3.5%"],
          ["4.2%"],
          ["4.8%"],
          ["5.5%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升8%",
        "",
        "戰鬥開始時，爆擊率提升12%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "米特",
    subname: "噬血魔女",
    rarity: rarity.R,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "93",
      DEF: "34",
      HP: "208",
      Penetration: "0%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "135%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "千鈞降臨",
        description: "按{{}}攻擊力，對敵方單體造成傷害，此次傷害額外獲得50%「吸血」效果",
        arguments: [
          ["253%"],
          ["267%"],
          ["280%"],
          ["294%"],
        ]
      },
      A: {
        name: "新惘",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      B: {
        name: "采血充氧",
        description: "按{{}}攻擊力，對敵方單體造成傷害，此次傷害額外獲得{{}}「吸血」效果",
        arguments: [
          ["90%", "20%"],
          ["122%", "30%"],
          ["182%", "40%"],
        ]
      },
      Passive: {
        name: "瘋狂",
        description: "每有一名敵方死亡，自身攻擊力提升{{}}",
        arguments: [
          ["3.5%"],
          ["4.1%"],
          ["4.7%"],
          ["5.3%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升5%",
        "",
        "戰鬥開始時，爆擊傷害提升16%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "維斯特",
    subname: "命運審判",
    rarity: rarity.R,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "85",
      DEF: "33",
      HP: "210",
      Penetration: "10%",
      Durability: "0%",
      CRIT_Rate: "10%",
      CRIT_DMG: "120%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "0%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "不得違誤",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」",
        arguments: [
          ["204%"],
          ["215%"],
          ["226%"],
          ["237%"],
        ]
      },
      A: {
        name: "負電撽擊",
        description: "按{{}}攻擊力，對敵方單體造成「穿刺傷害」",
        arguments: [
          ["95%"],
          ["113%"],
          ["151%"],
        ]
      },
      B: {
        name: "蒼雷判決",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["120%"],
          ["150%"],
          ["200%"],
        ]
      },
      Passive: {
        name: "強電流",
        description: "戰鬥開始時，按自身戰前爆擊率抵抗的{{}}，降低敵方全體爆擊率",
        arguments: [
          ["64%"],
          ["70%"],
          ["76%"],
          ["82%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，攻擊力提升5%",
        "",
        "戰鬥開始時，穿透率提升6%",
        "",
      ]
    },
    supporters: [

    ]
  },
  {
    name: "肖特朗",
    subname: "瀕死血液",
    rarity: rarity.SR,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.summon],
    basic: {
      ATK: "116",
      DEF: "43",
      HP: "264",
      Penetration: "14%",
      Durability: "0%",
      CRIT_Rate: "0%",
      CRIT_DMG: "130%",
      CRIT_Rate_RES: "0%",
      CRIT_DMG_RES: "5%",
      Received_Healing_Boost: "0%",
      Received_Shield_Boost: "0%",
      Healing_Boost: "0%",
      Generated_Shield_Boost: "0%",
      Luck: "0%"
    },
    skills: {
      Sp: {
        name: "恐慌沸騰",
        description: "按{{}}攻擊力，對敵方單體造成傷害",
        arguments: [
          ["269%"],
          ["286%"],
          ["310%"],
          ["335%"],
        ]
      },
      A: {
        name: "死吻",
        description: "按{{}}攻擊力，對敵方單體造成「穿透傷害」",
        arguments: [
          ["95%"],
          ["125%"],
          ["167%"],
        ]
      },
      B: {
        name: "懼意散佈",
        description: "按{{}}攻擊力，對敵方單體造成「真實傷害」",
        arguments: [
          ["87%"],
          ["114%"],
          ["144%"],
        ]
      },
      Passive: {
        name: "渴血",
        description: "每損失1%生命值，自身獲得{{}}吸血效果",
        arguments: [
          ["0.36%"],
          ["0.44%"],
          ["0.52%"],
          ["0.6%"],
        ]
      },
      risingStar: [
        "",
        "",
        "戰鬥開始時，防禦力提升15%",
        "",
        "戰鬥開始時，忍耐率提升9%，受到治療提升8%",
        "",
      ]
    },
    supporters: [

    ]
  },
]

export default characterList
