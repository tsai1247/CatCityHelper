import enumList from "./scriptFile/commonEnum";
const { rarity, attribute, particle } = enumList;
const { characterSource } = enumList;

const characterList = [
  // new characters
  {
    name: "小曼",
    subname: "心動季節",
    rarity: rarity.SSR,
    attribute: null,
    particle: null,
    source: [characterSource.specialSummon],
    skills: null,
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
    skills: null,
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
    skills: null,
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
    skills: null,
    supporters: [

    ]
  },
  {
    name: "非天",
    subname: "棒球龍魂",
    rarity: rarity.SR,
    attribute: attribute.red,
    particle: particle.square,
    source: [],
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
        description: "每次行動後，爆擊傷害提升{{}}（可疊加，最高10層）；一回合內，其他友方每釋放兩張攻擊技能牌，“詭夜霧行”對隨機敵方目標追擊1張1星「詭步連刃」，每回合至多追擊2次",
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
        "“詭夜霧行”的攻擊技能牌也可觸發追擊效果",
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
      attack: "255",
      defense: "142",
      hp: "633",
      穿透: "14%",
      爆率: "5%",
      爆傷: "122.2%",
      healed: "1.1%",
      protected: "1.1%",
      luck: "1%",
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
        "奧義能量施加的「傷害擴散」持續回合數+1",
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
        description: "按{{}}攻擊力，對敵方單體造成傷害，並對目標施加1層「詛咒」{{}}回合",
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
          ["150%", "，並對目標施加1層「易傷」3回合"],
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
        "",
        "",
        "",
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
        description: "按{{}}攻擊力，對敵方單體造成「破盾傷害」，並對目標施加1層「易傷」3回合",
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
        description: "所有率色情緒友方穿透率提升{{}}",
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
        description: "所有粒子型態均為「三相」的友方攻擊力提升{{}}（死亡後也生效）",
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
        description: "按{{}}攻擊力，對敵方單體造成傷害，此次傷害額外獲得{{}}「流血」效果",
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
