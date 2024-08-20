import enumList from "./commonEnum";
const { attribute } = enumList;

/**
 *
 * @param {Number} number number of club training
 * @param {{red:{}, green:{}, blue:{}, white:{}}} customBossInfo custom statement of boss info
 * @returns {Object} statements of four-type bosses
 */
function constructBossInfo(number, customBossInfo = {}) {
  const typeList = ["red", "green", "blue", "white"];

  const bossInfo = Object.fromEntries(typeList.map((type) => [
    type,
    {
      title: type == "white" ? "特級討伐" : "一般討伐",
      attribute: type == "white" ? attribute.light : attribute[type],
      ...(customBossInfo[type] ?? clubBossList[type][(number - 1) % 4]),
    }
  ]));

  return bossInfo;
}

/**
 * @param {Number} number number of club training
 * @param {{small:{delta:{}}, big:{delta:{}}}} statData original stat data
 * @returns {{small:{delta:{}}, big:{delta:{}}}} adjusted stat data
 */
function adjustBossStats(number, statData) {
  const basicStats = {
    smallHP: 4010400,
    bigHP: 4392500,
    ATK: 2865,
    DEF: 955
  };

  const basicStatsDelta = {
    smallHP: 63000,
    bigHP: 69000,
    ATK: 45,
    DEF: 15
  };


  const deltaStats = {
    smallHP: 997500,
    bigHP: 1092500,
    ATK: statData.small.delta.ATK,
    DEF: statData.small.delta.DEF
  };

  const deltaStatsDelta = {
    smallHP: 14700,
    bigHP: 16100,
    ATK: 0,
    DEF: 0
  };


  ["small", "big"].forEach((bossType) => {
    statData[bossType].basic = createStats(basicStats, basicStatsDelta);
    statData[bossType].delta = createStats(deltaStats, deltaStatsDelta);

    function createStats(statBase, statDelta) {
      return Object.fromEntries(["HP", "ATK", "DEF"].map((statType) => {
        const adjustedKey = (statType) => statType == "HP" ? `${bossType}HP` : statType;
        return [
          statType,
          statBase[adjustedKey(statType)] + statDelta[adjustedKey(statType)] * number
        ];
      }));
    }
  });

  return statData;
}

const clubBossList = {
  red: [
    {
      name: "爆裂鼓蟹",
      skills: {
        Sp: "對敵方全體造成攻擊力75%的破盾傷害，並對目標添加1層攻擊力降低10%的效果，最高6層",
        Active: [
          "對敵方單體目標造成攻擊力100%的技能傷害，並對目標添加1層攻擊力降低10%的效果，最高6層",
          "對敵方單體造成攻擊力120%的破盾傷害",
        ],
        Passive: "當敵方目標身上的【攻擊力降低】效果疊加至6層後，給予自身攻擊力提升的效果，最多可疊加4層，持續至戰鬥結束。"
      },
    },
    {
      name: "拳擊販售機",
      skills: {
        Sp: "對敵方全體造成攻擊力127%的爆裂傷害，並使目標受到治療效果降低50%，效果持續3回合",
        Active: [
          "對目標造成攻擊力95%的爆裂傷害",
          "對敵方全體造成攻擊力76%的爆裂傷害",
        ],
        Passive: "自身忍耐率提升100%"
      },
    },
    {
      name: "厄運轉輪",
      skills: {
        Sp: "按176%攻擊力，對敵方單體造成傷害，並對目標施加「恐懼」3回合",
        Active: [
          "按120%攻擊力，對敵方單體造成傷害",
          "降低敵方單體30%爆擊率3回合",
        ]
      },
    },
    {
      name: "無面塗鴉犬",
      skills: {
        Sp: "召喚4個繼承自身基礎能力的友方助陣，降低其40%攻擊力，替其承擔50%受到傷害，並使其在下回合結束時死亡",
        Active: [
          "按120%攻擊力，對敵方單體造成傷害",
          "提升全體友方40%防禦力2回合",
        ]
      },
    }
  ],
  green: [
    {
      name: "孤傲劍客",
      skills: {
        Sp: "對敵方全體造成攻擊力75%的技能傷害，並降低目標50%受療效果，最多可疊加2層，持續3回合",
        Active: [
          "對敵方單體造成攻擊力150%的穿刺傷害。(此為3倍穿透)",
          "清除自身全部減益效果，同時給自身添加一層攻擊力150%的護盾",
          "對敵方全體造成攻擊力80%的穿刺傷害",
        ],
      },
    },
    {
      name: "惡意挖掘機",
      skills: {
        Sp: "對目標造成攻擊力178%的破裂傷害",
        Active: [
          "對目標造成攻擊力90%的強擊傷害",
          "對目標造成攻擊力94%的破裂傷害",
        ],
        Passive: "自身防禦力提升50%"
      },
    },
    {
      name: "警覺鍵盤鹿",
      skills: {
        Sp: "按126%攻擊力，對敵方全體造成「弱點傷害」",
        Active: [
          "按96%攻擊力，對敵方單體造成傷害，並對目標施加2層「鏽刃」3回合",
          "按120%攻擊力，對敵方單體造成傷害",
          "按300%攻擊力，對自身施加護盾3回合",
        ]
      }
    },
    {
      name: "失敗格鬥遊戲機",
      skills: {
        Sp: "按193%攻擊力，對敵方單體造成傷害，並使目標降低3點奧義能量",
        Active: [
          "按120%攻擊力，對敵方單體造成傷害",
          "按96%攻擊力，對敵方單體造成傷害，並降低目標20%攻擊力2回合",
        ],
        Passive: "每回合結束時，敵我雙方隨機獲得以下減益效果之一：\n1. 攻擊力降低\n2. 造成間接傷害降低\n3. 受到間接傷害提升\n4. 受到傷害提升"
      },
    }

  ],
  blue: [
    {
      name: "寶寶玩偶",
      skills: {
        Sp: "對敵方全體造成攻擊力112%的傷害，自身爆擊率30%，爆擊傷害提升50%，持續2回合",
        Active: [
          "對敵方全體造成攻擊力100%的傷害，並使目標造成傷害降低5%效果，持續2回合，最多可疊加20層。該效果可以被驅散",
        ],
        Passive: "自身每擁有1點SP點，攻擊力提升10%"
      },
    },
    {
      name: "銅銹劍鼠",
      skills: {
        Sp: "對敵方全體造成攻擊力135%的傷害，並對目標施加【流血】效果，造成攻擊力30%的間接傷書，持續3回合",
        Active: [
          "對敵方全體造成攻擊力90%的傷害",
          "對敵方全體造成攻擊力70%的傷害，並對目標施加【流血】效果，造成攻擊力30%的間接傷書，持續3回合",
        ],
        Passive: "自身免疫控制技能"
      },
    },
    {
      name: "怪鳥時鐘",
      skills: {
        Sp: "按207%攻擊力，對敵方單體造成傷害",
        Active: [
          "按120%攻擊力，對敵方單體造成傷害",
          "按72%攻擊力，對敵方全體造成傷害，並對受到傷害的目標施加「點燃」3回合",
        ],
      },
    },
    {
      name: "銅鏽盾鼠",
      skills: {
        Sp: "按207%攻擊力，對敵方單體造成傷害",
        Active: [
          "按120%攻擊力，對敵方單體造成傷害",
          "對自己施加1層「受到傷害降低10%」（可疊加，最高6層）",
        ],
      },
    }
  ],
  white: [
    {
      name: "莫布",
      skills: {
        Sp: "對敵方全體造成141%的破盾傷害，成功破盾後給目標施加【破裂】：防禦降低30%，最多可疊加4層，持續3回合。",
        Active: [
          "對敵方全體造成攻擊力100%的穿透傷害",
          "對敵方全體造成攻擊力90%的傷害",
        ],
        Passive: "1.莫布每次擊穿護盾效果都可以提升自身10%的攻擊力，最多可以疊加20層\n2.莫布第3回合開始時，暴露出破綻，受到的爆擊傷害提升50%"
      },
    },
    {
      name: "竹牙巨人",
      skills: {
        Sp: "對敵方全體攻擊力126%的破勢傷害",
        Active: [
          "對目標造成攻擊力105%的破勢傷害",
          "對敵方全體造成攻擊力90%的傷害，並使目標防禦降低30%，效果持續3回合",
        ],
        Passive: "自身防禦提升30%，造成最終傷害提升30%"
      },
    },
    {
      name: "躁狂遊戲機",
      skills: {
        Sp: "按141%攻擊力，對全體造成「爆裂傷害」",
        Active: [
          "按94%攻擊力，對敵方單體造成「破盾傷害」",
          "按90%攻擊力，對敵方全體造成傷害，並驅散自身所有減益",
          "按72%攻擊力，造成單體傷害，並驅散目標所有增益",
        ],
        Passive: "50層防禦力提升，每受到一段傷害減少一層。效果消失時，重置被動，並按照攻擊者500%攻擊力受到一次「純粹傷害」"
      },
    },
    {
      name: "奪麥蜥蜴",
      skills: {
        Sp: "召喚1個繼承自身基礎能力的友方助陣，降低其40%攻擊力，並替其承擔50%受到傷害",
        Active: [
          "按120%攻擊力，對單體造成傷害",
          "按90%攻擊力，造成全體造成傷害",
          "使自身獲得2點奧義能量",
        ],
      },
    }
  ]
}

const clubInfo = [
  {
    no: 18,
    duration: {
      start: '2024-08-21',
      end: '2024-08-27',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 5089800,
            ATK: 3636.5,
            DEF: 1212,
          },
          delta: {
            HP: 1257900,
            ATK: 898.5,
            DEF: 299.5
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 5574700,
            ATK: 3636.5,
            DEF: 1212,
          },
          delta: {
            HP: 1377700,
            ATK: 898.5,
            DEF: 299.5
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(18)
    }
  },
  {
    no: 17,
    duration: {
      start: '2024-08-07',
      end: '2024-08-13',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 5089800,
            ATK: 3636.5,
            DEF: 1212,
          },
          delta: {
            HP: 1257900,
            ATK: 898.5,
            DEF: 299.5
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 5574700,
            ATK: 3636.5,
            DEF: 1212,
          },
          delta: {
            HP: 1377700,
            ATK: 898.5,
            DEF: 299.5
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(17)
    }
  },
  {
    no: 16,
    duration: {
      start: '2024-07-24',
      end: '2024-07-30',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 5022600,
            ATK: 3588.5,
            DEF: 1196,
          },
          delta: {
            HP: 1241100,
            ATK: 886.5,
            DEF: 295.5
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 5501100,
            ATK: 3588.5,
            DEF: 1196,
          },
          delta: {
            HP: 1359300,
            ATK: 886.5,
            DEF: 295.5
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(16)
    }
  },
  {
    no: 15,
    duration: {
      start: '2024-07-10',
      end: '2024-07-16',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 4957500,
            ATK: 3542,
            DEF: 1180.5,
          },
          delta: {
            HP: 1224300,
            ATK: 874.5,
            DEF: 291.5
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 5429800,
            ATK: 3542,
            DEF: 1180.5,
          },
          delta: {
            HP: 1340900,
            ATK: 874.5,
            DEF: 291.5
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(15)
    }
  },
  {
    no: 14,
    duration: {
      start: '2024-06-26',
      end: '2024-07-02',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 4892400,
            ATK: 3495.5,
            DEF: 1165,
          },
          delta: {
            HP: 1209600,
            ATK: 864,
            DEF: 288,
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 5358500,
            ATK: 3495.5,
            DEF: 1165,
          },
          delta: {
            HP: 1324800,
            ATK: 864,
            DEF: 288,
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(14)
    }
  },
  {
    no: 13,
    duration: {
      start: '2024-06-12',
      end: '2024-06-18',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 4829400,
            ATK: 3450,
            DEF: 1150,
          },
          delta: {
            HP: 1192800,
            ATK: 852,
            DEF: 284,
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 5289500,
            ATK: 3450,
            DEF: 1150,
          },
          delta: {
            HP: 1306400,
            ATK: 852,
            DEF: 284,
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(13)
    }
  },
  {
    no: 12,
    duration: {
      start: '2024-05-29',
      end: '2024-06-04',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 4764300,
            ATK: 3404,
            DEF: 1134.5,
          },
          delta: {
            HP: 1178100,
            ATK: 841.5,
            DEF: 280.5,
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 5218200,
            ATK: 3404,
            DEF: 1134.5,
          },
          delta: {
            HP: 1290300,
            ATK: 841.5,
            DEF: 280.5,
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(12)
    }
  },
  {
    no: 11,
    duration: {
      start: '2024-05-15',
      end: '2024-05-21',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 4701300,
            ATK: 3359,
            DEF: 1119.5,
          },
          delta: {
            HP: 1161300,
            ATK: 829.5,
            DEF: 276.5,
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 5149200,
            ATK: 3359,
            DEF: 1119.5,
          },
          delta: {
            HP: 1271900,
            ATK: 829.5,
            DEF: 276.5,
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(11)
    }
  },
  {
    no: 10,
    duration: {
      start: '2024-05-01',
      end: '2024-05-07',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 4638300,
            ATK: 3314,
            DEF: 1104,
          },
          delta: {
            HP: 1146600,
            ATK: 819,
            DEF: 273,
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 5080200,
            ATK: 3314,
            DEF: 1104,
          },
          delta: {
            HP: 1255800,
            ATK: 819,
            DEF: 273,
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(10)
    }
  },
  {
    no: 9,
    duration: {
      start: '2024-04-17',
      end: '2024-04-23',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 4577400,
            ATK: 3270,
            DEF: 1090,
          },
          delta: {
            HP: 1129800,
            ATK: 807,
            DEF: 269,
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 5013500,
            ATK: 3270,
            DEF: 1090,
          },
          delta: {
            HP: 1237400,
            ATK: 807,
            DEF: 269,
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(9)
    }
  },
  {
    no: 8,
    duration: {
      start: '2024-04-03',
      end: '2024-04-09',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 4514400,
            ATK: 3225,
            DEF: 1075,
          },
          delta: {
            HP: 1115100,
            ATK: 797,
            DEF: 264.5,
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 4944500,
            ATK: 3225,
            DEF: 1075,
          },
          delta: {
            HP: 1221300,
            ATK: 797,
            DEF: 264.5,
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(8)
    }
  },
  {
    no: 7,
    duration: {
      start: '2024-03-20',
      end: '2024-03-27',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 4451400,
            ATK: 3180,
            DEF: 1060,
          },
          delta: {
            HP: 1100400,
            ATK: 786,
            DEF: 262,
          },
          maxRound: 5,
        },
        big: {
          basic: {
            HP: 4875500,
            ATK: 3180,
            DEF: 1060,
          },
          delta: {
            HP: 1205200,
            ATK: 786,
            DEF: 262,
          },
          maxRound: 5,
        },
      },
      ...constructBossInfo(7)
    }
  },
  {
    no: 5,
    duration: {
      start: '2024-02-21',
      end: '2024-02-27',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 4272900,
            ATK: 4070,
            DEF: 1017,
          },
          delta: {
            HP: 1056300,
            ATK: 1006,
            DEF: 251.5,
          },
          maxRound: 9999,
        },
        big: {
          basic: {
            HP: 4680000,
            ATK: 4070,
            DEF: 1017,
          },
          delta: {
            HP: 1156900,
            ATK: 1006,
            DEF: 251.5,
          },
          maxRound: 9999,
        },
      },
      ...constructBossInfo(5)
    }
  },
  {
    no: 4,
    duration: {
      start: '2024-02-07',
      end: '2024-02-13',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 4155300,
            ATK: 3958,
            DEF: 989,
          },
          delta: {
            HP: 1026900,
            ATK: 978,
            DEF: 245,
          },
          maxRound: 9999,
        },
        big: {
          basic: {
            HP: 4551200,
            ATK: 3958,
            DEF: 989,
          },
          delta: {
            HP: 1124700,
            ATK: 978,
            DEF: 245,
          },
          maxRound: 9999,
        },
      },
      ...constructBossInfo(4)
    }
  },
  {
    no: 2,
    duration: {
      start: '2024-01-10',
      end: '2024-01-16',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 2071500,
            ATK: 2762,
            DEF: 694,
          },
          delta: {
            HP: 511500,
            ATK: 682,
            DEF: 170,
          },
          maxRound: 9999,
        },
        big: {
          basic: {
            HP: 2485800,
            ATK: 2762,
            DEF: 694,
          },
          delta: {
            HP: 613800,
            ATK: 682,
            DEF: 170,
          },
          maxRound: 9999,
        },
      },
      ...constructBossInfo(2)
    }
  },
  {
    no: 1,
    duration: {
      start: '2023-12-27',
      end: '2024-01-02',
    },
    enemies: {
      stats: {
        small: {
          basic: {
            HP: 2071500,
            ATK: 2762,
            DEF: 694,
          },
          delta: {
            HP: 511500,
            ATK: 682,
            DEF: 170,
          },
          maxRound: 9999,
        },
        big: {
          basic: {
            HP: 2485800,
            ATK: 2762,
            DEF: 694,
          },
          delta: {
            HP: 613800,
            ATK: 682,
            DEF: 170,
          },
          maxRound: 9999,
        },
      },
      ...constructBossInfo(1)
    }
  },
]

export default clubInfo
