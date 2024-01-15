import enumList from "./scriptFile/commonEnum";
const { level, attribute, particle } = enumList;
const { characterSource } = enumList;

const characterList = [
  {
    "id": 1.1,
    "name": "依琳",
    "subname": "蒼白舞者",
    "level": level.SSR,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "skills": {
      "Sp": {
        "name": "謝幕禮",
        "description": "按168%攻擊力，對敵方單體造成傷害，並對目標施加「恐懼」2回合"
      },
      "A": {
        "name": "會心一擊",
        "description": "按120%攻擊力，對敵方單體造成傷害"
      },
      "B": {
        "name": "優雅舞步",
        "description": "提升友芳全體12%穿透率2回合"
      },
      "Passive": {
        "name": "同化",
        "description": "所有粒子型態均為「圓振」的友方攻擊力提升7%"
      },
    },
    "bond": [

    ]
  },
  {
    "id": 2.1,
    "name": "真心",
    "subname": "青之迴旋",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.square,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 3.1,
    "name": "依蓮娜",
    "subname": "粉紅風暴",
    "level": level.SSR,
    "attribute": attribute.green,
    "particle": particle.square,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 4.1,
    "name": "達妮卡",
    "subname": "暗巷星火",
    "level": level.SSR,
    "attribute": attribute.blue,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 5.1,
    "name": "祈",
    "subname": "碧魂燈",
    "level": level.SSR,
    "attribute": attribute.blue,
    "particle": particle.square,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 6.1,
    "name": "海蕾",
    "subname": "清道夫之夜",
    "level": level.SSR,
    "attribute": attribute.blue,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 7.1,
    "name": "娜芙瑞特",
    "subname": "秘域訪客",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 8.1,
    "name": "司諾",
    "subname": "極寒朔風",
    "level": level.SSR,
    "attribute": attribute.blue,
    "particle": particle.square,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 9.1,
    "name": "奧爾嘉",
    "subname": "除障者",
    "level": level.SSR,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 10.1,
    "name": "雲沛",
    "subname": "夕雪晚照",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 11.1,
    "name": "雲燦",
    "subname": "火樹流光",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 12.1,
    "name": "安雅",
    "subname": "長夜冰冕",
    "level": level.SSR,
    "attribute": attribute.green,
    "particle": particle.triangle,
    "source": [characterSource.summon, characterSource.signin],
    "bond": [

    ]
  },
  {
    "id": 13.1,
    "name": "可可",
    "subname": "秘密調查",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 14.1,
    "name": "艾琳娜",
    "subname": "致命音符",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 15.1,
    "name": "小白",
    "subname": "戰略潛艇",
    "level": level.SSR,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 16.1,
    "name": "伊德",
    "subname": "烈火戰線",
    "level": level.SSR,
    "attribute": attribute.green,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 17.1,
    "name": "小音",
    "subname": "幽靈社團",
    "level": level.SSR,
    "attribute": attribute.green,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 18.1,
    "name": "內特",
    "subname": "英雄憧憬",
    "level": level.SSR,
    "attribute": attribute.blue,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 19.1,
    "name": "南彌生",
    "subname": "緋紅武士",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 20.1,
    "name": "特莉絲",
    "subname": "心動療癒",
    "level": level.SSR,
    "attribute": attribute.green,
    "particle": particle.triangle,
    "source": [characterSource.summon, characterSource.money],
    "bond": [

    ]
  },
  {
    "id": 21.1,
    "name": "艾可",
    "subname": "電音騎士",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 22.1,
    "name": "非天",
    "subname": "森林守護者",
    "level": level.SSR,
    "attribute": attribute.green,
    "particle": particle.square,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 23.1,
    "name": "小白",
    "subname": "滌蕩者",
    "level": level.SSR,
    "attribute": attribute.green,
    "particle": particle.triangle,
    "source": [characterSource.specialSummon],
    "bond": [

    ]
  },
  {
    "id": 24.1,
    "name": "艾可",
    "subname": "完美效勞",
    "level": level.SSR,
    "attribute": attribute.green,
    "particle": particle.triangle,
    "source": [characterSource.money],
    "bond": [

    ]
  },
  {
    "id": 25.1,
    "name": "特莉絲",
    "subname": "瘋人院",
    "level": level.SSR,
    "attribute": attribute.dark,
    "particle": particle.triangle,
    "source": [characterSource.money],
    "bond": [

    ]
  },
  {
    "id": 26.1,
    "name": "多洛茜",
    "subname": "囚鳥綺願",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.star,
    "source": [characterSource.specialSummon],
    "bond": [

    ]
  },
  {
    "id": 27.1,
    "name": "絲薇蒂",
    "subname": "致聖雪夜",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.star,
    "source": [characterSource.specialSummon],
    "bond": [

    ]
  },
  {
    "id": 28.1,
    "name": "艾可",
    "subname": "鰩搖心情",
    "level": level.SSR,
    "attribute": attribute.light,
    "particle": particle.triangle,
    "source": [characterSource.store],
    "bond": [

    ]
  },
  {
    "id": 29.1,
    "name": "特莉絲",
    "subname": "浮世謠",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.triangle,
    "source": [characterSource.store],
    "bond": [

    ]
  },
  {
    "id": 30.1,
    "name": "艾琳娜",
    "subname": "白瑰綺晶",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.square,
    "source": [characterSource.store],
    "bond": [

    ]
  },
  {
    "id": 31.1,
    "name": "米婭",
    "subname": "冬季奇遇",
    "level": level.SSR,
    "attribute": attribute.red,
    "particle": particle.triangle,
    "source": [characterSource.store],
    "bond": [

    ]
  },
  {
    "id": 1.2,
    "name": "小白",
    "subname": "棋盤遊戲",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 2.2,
    "name": "非天",
    "subname": "自由輪滑",
    "level": level.SR,
    "attribute": attribute.red,
    "particle": particle.square,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 3.2,
    "name": "艾可",
    "subname": "機械助理",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 4.2,
    "name": "特莉絲",
    "subname": "純真拜訪者",
    "level": level.SR,
    "attribute": attribute.green,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 5.2,
    "name": "特莉絲",
    "subname": "恬靜時刻",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 6.2,
    "name": "南彌生",
    "subname": "封面女郎",
    "level": level.SR,
    "attribute": attribute.green,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 7.2,
    "name": "南彌生",
    "subname": "夜間執勤",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 8.2,
    "name": "內特",
    "subname": "障礙破壞",
    "level": level.SR,
    "attribute": attribute.red,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 9.2,
    "name": "內特",
    "subname": "海灘冒險",
    "level": level.SR,
    "attribute": attribute.green,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 10.2,
    "name": "小音",
    "subname": "橘色純真",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 11.2,
    "name": "小音",
    "subname": "不思議鴨鴨",
    "level": level.SR,
    "attribute": attribute.red,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 12.2,
    "name": "伊德",
    "subname": "雪地奔馳",
    "level": level.SR,
    "attribute": attribute.red,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 13.2,
    "name": "伊德",
    "subname": "繼承者",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 14.2,
    "name": "安雅",
    "subname": "鏡光旖夢",
    "level": level.SR,
    "attribute": attribute.red,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 15.2,
    "name": "米婭",
    "subname": "愛心妝點",
    "level": level.SR,
    "attribute": attribute.green,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 16.2,
    "name": "雲燦",
    "subname": "銀鉤墨舞",
    "level": level.SR,
    "attribute": attribute.red,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 17.2,
    "name": "雲沛",
    "subname": "墨蘊尋真",
    "level": level.SR,
    "attribute": attribute.red,
    "particle": particle.star,
    "source": [characterSource.summon, characterSource.signin],
    "bond": [

    ]
  },
  {
    "id": 18.2,
    "name": "刀客",
    "subname": "修習者",
    "level": level.SR,
    "attribute": attribute.red,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 19.2,
    "name": "瑞德",
    "subname": "詐欺小丑",
    "level": level.SR,
    "attribute": attribute.green,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 20.2,
    "name": "伊雷",
    "subname": "爆裂火山",
    "level": level.SR,
    "attribute": attribute.red,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 21.2,
    "name": "兔子玩偶",
    "subname": "怪力巨兔",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 22.2,
    "name": "杰克皇",
    "subname": "時運失衡",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 23.2,
    "name": "死神",
    "subname": "奪魂之鐮",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },

  {
    "id": 24.2,
    "name": "文森特",
    "subname": "孤獨紳士",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },

  {
    "id": 25.2,
    "name": "卡蘿爾",
    "subname": "落寞淑女",
    "level": level.SR,
    "attribute": attribute.red,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },

  {
    "id": 26.2,
    "name": "狂傲戰士",
    "subname": "鋼鐵傀儡",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },

  {
    "id": 27.2,
    "name": "塞爾",
    "subname": "惡念殘響",
    "level": level.SR,
    "attribute": attribute.green,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },

  {
    "id": 28.2,
    "name": "奈緒",
    "subname": "癔症粉絲",
    "level": level.SR,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },

  {
    "id": 29.2,
    "name": "肖特朗",
    "subname": "瀕死血液",
    "level": level.SR,
    "attribute": attribute.green,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 30.2,
    "name": "絲薇蒂",
    "subname": "狂想花骸",
    "level": level.SR,
    "attribute": attribute.green,
    "particle": particle.square,
    "source": [characterSource.event],
    "bond": [

    ]
  },

  {
    "id": 1.3,
    "name": "小白",
    "subname": "AI助理",
    "level": level.R,
    "attribute": attribute.green,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 2.3,
    "name": "非天",
    "subname": "塗鴉戰爭",
    "level": level.R,
    "attribute": attribute.blue,
    "particle": particle.square,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 3.3,
    "name": "艾可",
    "subname": "星之願",
    "level": level.R,
    "attribute": attribute.red,
    "particle": particle.triangle,
    "source": [characterSource.summon, characterSource.gift],
    "bond": [

    ]
  },
  {
    "id": 4.3,
    "name": "特莉絲",
    "subname": "枕邊童話",
    "level": level.R,
    "attribute": attribute.red,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 5.3,
    "name": "南彌生",
    "subname": "高級特工",
    "level": level.R,
    "attribute": attribute.green,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 6.3,
    "name": "內特",
    "subname": "紀律監督",
    "level": level.R,
    "attribute": attribute.green,
    "particle": particle.triangle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 7.3,
    "name": "小音",
    "subname": "搬運工",
    "level": level.R,
    "attribute": attribute.green,
    "particle": particle.star,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 8.3,
    "name": "瑪拉",
    "subname": "憎惡鬥者",
    "level": level.R,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 9.3,
    "name": "通夜",
    "subname": "守夜人",
    "level": level.R,
    "attribute": attribute.green,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 10.3,
    "name": "阿噓",
    "subname": "電玩怪客",
    "level": level.R,
    "attribute": attribute.blue,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 11.3,
    "name": "米特",
    "subname": "噬血魔女",
    "level": level.R,
    "attribute": attribute.red,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },
  {
    "id": 12.3,
    "name": "維斯特",
    "subname": "命運審判",
    "level": level.R,
    "attribute": attribute.red,
    "particle": particle.circle,
    "source": [characterSource.summon],
    "bond": [

    ]
  },

]

export default characterList
