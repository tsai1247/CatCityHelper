import enumList from "./scriptFile/commonEnum";
const { level, attribute, particle } = enumList;
const { characterSource } = enumList;

const characterList = [
  {
    name: "非天",
    subname: "塗鴉戰爭",
    level: level.R,
    attribute: attribute.blue,
    particle: particle.square,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "非天",
    subname: "自由輪滑",
    level: level.SR,
    attribute: attribute.red,
    particle: particle.square,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "非天",
    subname: "森林守護者",
    level: level.SSR,
    attribute: attribute.green,
    particle: particle.square,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "星之願",
    level: level.R,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon, characterSource.gift],
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "電音騎士",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "機械助理",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "鰩搖心情",
    level: level.SSR,
    attribute: attribute.light,
    particle: particle.triangle,
    source: [characterSource.store],
    supporters: [

    ]
  },
  {
    name: "艾可",
    subname: "完美效勞",
    level: level.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.money],
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "純真拜訪者",
    level: level.SR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "瘋人院",
    level: level.SSR,
    attribute: attribute.dark,
    particle: particle.triangle,
    source: [characterSource.money],
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "浮世謠",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.store],
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "恬靜時刻",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "枕邊童話",
    level: level.R,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "特莉絲",
    subname: "心動療癒",
    level: level.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon, characterSource.money],
    supporters: [

    ]
  },
  {
    name: "南彌生",
    subname: "緋紅武士",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "南彌生",
    subname: "封面女郎",
    level: level.SR,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "南彌生",
    subname: "高級特工",
    level: level.R,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "南彌生",
    subname: "夜間執勤",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "內特",
    subname: "障礙破壞",
    level: level.SR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "內特",
    subname: "紀律監督",
    level: level.R,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "內特",
    subname: "海灘冒險",
    level: level.SR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "內特",
    subname: "英雄憧憬",
    level: level.SSR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "小音",
    subname: "搬運工",
    level: level.R,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "小音",
    subname: "幽靈社團",
    level: level.SSR,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "小音",
    subname: "橘色純真",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "小音",
    subname: "不思議鴨鴨",
    level: level.SR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "伊德",
    subname: "烈火戰線",
    level: level.SSR,
    attribute: attribute.green,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "伊德",
    subname: "雪地奔馳",
    level: level.SR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "伊德",
    subname: "繼承者",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "小白",
    subname: "戰略潛艇",
    level: level.SSR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "小白",
    subname: "棋盤遊戲",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "小白",
    subname: "滌蕩者",
    level: level.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.specialSummon],
    supporters: [

    ]
  },
  {
    name: "小白",
    subname: "AI助理",
    level: level.R,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "艾琳娜",
    subname: "白瑰綺晶",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.square,
    source: [characterSource.store],
    supporters: [

    ]
  },
  {
    name: "艾琳娜",
    subname: "致命音符",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "可可",
    subname: "秘密調查",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "安雅",
    subname: "長夜冰冕",
    level: level.SSR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon, characterSource.signin],
    supporters: [

    ]
  },
  {
    name: "安雅",
    subname: "鏡光旖夢",
    level: level.SR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "米婭",
    subname: "冬季奇遇",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.store],
    supporters: [

    ]
  },
  {
    name: "米婭",
    subname: "愛心妝點",
    level: level.SR,
    attribute: attribute.green,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "雲燦",
    subname: "火樹流光",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "雲燦",
    subname: "銀鉤墨舞",
    level: level.SR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "雲沛",
    subname: "夕雪晚照",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "雲沛",
    subname: "墨蘊尋真",
    level: level.SR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.summon, characterSource.signin],
    supporters: [

    ]
  },
  {
    name: "奧爾嘉",
    subname: "除障者",
    level: level.SSR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "司諾",
    subname: "極寒朔風",
    level: level.SSR,
    attribute: attribute.blue,
    particle: particle.square,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "娜芙瑞特",
    subname: "秘域訪客",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.triangle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "海蕾",
    subname: "清道夫之夜",
    level: level.SSR,
    attribute: attribute.blue,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "祈",
    subname: "碧魂燈",
    level: level.SSR,
    attribute: attribute.blue,
    particle: particle.square,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "絲薇蒂",
    subname: "致聖雪夜",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.specialSummon],
    supporters: [

    ]
  },
  {
    name: "絲薇蒂",
    subname: "狂想花骸",
    level: level.SR,
    attribute: attribute.green,
    particle: particle.square,
    source: [characterSource.event],
    supporters: [

    ]
  },
  {
    name: "達妮卡",
    subname: "暗巷星火",
    level: level.SSR,
    attribute: attribute.blue,
    particle: particle.star,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "依蓮娜",
    subname: "粉紅風暴",
    level: level.SSR,
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
        description: "所有粒子型態為「方波」的友方基礎能力提升{{}}(死亡後也生效)",
        arguments: [
          ["4%"],
          ["4.7%"],
          ["5.3%"],
          ["6%"],
        ]
      },
    },
    supporters: [

    ]
  },
  {
    name: "真心",
    subname: "青之迴旋",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.square,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "多洛茜",
    subname: "囚鳥綺願",
    level: level.SSR,
    attribute: attribute.red,
    particle: particle.star,
    source: [characterSource.specialSummon],
    supporters: [

    ]
  },
  {
    name: "瑪拉",
    subname: "憎惡鬥者",
    level: level.R,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "通夜",
    subname: "守夜人",
    level: level.R,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "刀客",
    subname: "修習者",
    level: level.SR,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "阿噓",
    subname: "電玩怪客",
    level: level.R,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "瑞德",
    subname: "詐欺小丑",
    level: level.SR,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "伊雷",
    subname: "爆裂火山",
    level: level.SR,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "依琳",
    subname: "蒼白舞者",
    level: level.SSR,
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
          ["並對目標施加「感染」1回合"],
          ["並對目標施加「感染」2回合"],
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
    },
    supporters: [

    ]
  },
  {
    name: "兔子玩偶",
    subname: "怪力巨兔",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "杰克皇",
    subname: "時運失衡",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "死神",
    subname: "奪魂之鐮",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "文森特",
    subname: "孤獨紳士",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "卡蘿爾",
    subname: "落寞淑女",
    level: level.SR,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "狂傲戰士",
    subname: "鋼鐵傀儡",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },

  {
    name: "賽爾",
    subname: "惡念殘響",
    level: level.SR,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "奈緒",
    subname: "癔症粉絲",
    level: level.SR,
    attribute: attribute.blue,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "米特",
    subname: "噬血魔女",
    level: level.R,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "維斯特",
    subname: "命運審判",
    level: level.R,
    attribute: attribute.red,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
  {
    name: "肖特朗",
    subname: "瀕死血液",
    level: level.SR,
    attribute: attribute.green,
    particle: particle.circle,
    source: [characterSource.summon],
    supporters: [

    ]
  },
]

export default characterList
