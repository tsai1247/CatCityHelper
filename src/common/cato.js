import enumList from "./commonEnum";
const { rarity, catoType, catoStatValue } = enumList;

const catoList = [
  {
    "name": "招財進寶",
    "rarity": rarity.SSR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "昆士區尋寶",
      "description": "每{{}}秒有75%的機率可獲得1份食材，其中昆士區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["250"],
        ["230"],
        ["210"],
        ["190"],
        ["170"],
        ["150"]
      ]
    }
  },
  {
    "name": "章魚貓丸",
    "rarity": rarity.SSR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "南港區尋寶",
      "description": "每{{}}秒有75%的機率可獲得1份食材，其中南港區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["250"],
        ["230"],
        ["210"],
        ["190"],
        ["170"],
        ["150"]
      ]
    }
  },
  {
    "name": "武林霸喵",
    "rarity": rarity.SSR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "耀洲區尋寶",
      "description": "每{{}}秒有75%的機率可獲得1份食材，其中耀洲區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["250"],
        ["230"],
        ["210"],
        ["190"],
        ["170"],
        ["150"]
      ]
    }
  },
  {
    "name": "貓張子",
    "rarity": rarity.SSR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "舊城區尋寶",
      "description": "每{{}}秒有75%的機率可獲得1份食材，其中舊城區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["250"],
        ["230"],
        ["210"],
        ["190"],
        ["170"],
        ["150"]
      ]
    }
  },
  {
    "name": "珍珠之淚",
    "rarity": rarity.SSR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "中心區尋寶",
      "description": "每{{}}秒有75%的機率可獲得1份食材，其中中心區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["250"],
        ["230"],
        ["210"],
        ["190"],
        ["170"],
        ["150"]
      ]
    }
  },
  {
    "name": "海灣救援",
    "rarity": rarity.SSR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "凜北區尋寶",
      "description": "每{{}}秒有75%的機率可獲得1份食材，其中凜北區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["250"],
        ["230"],
        ["210"],
        ["190"],
        ["170"],
        ["150"]
      ]
    }
  },
  {
    "name": "亡靈審判",
    "rarity": rarity.SSR,
    "type": catoType.passive.support,
    "statValue": catoStatValue.SSR.HP,
    "skill": {
      "name": "亡靈餘音",
      "description": "戰鬥開始時，生命相關能力提升{{}}%，持續3回合",
      "arguments": [
        ["6"],
        ["8"],
        ["8"],
        ["10"],
        ["10"],
        ["10"],
        ["12"]
      ]
    }
  },
  {
    "name": "災噩避散",
    "rarity": rarity.SSR,
    "type": catoType.passive.support,
    "statValue": catoStatValue.SSR.HP,
    "skill": {
      "name": "神秘學",
      "description": "戰鬥開始時，獲得3回合「神秘學」，回合結束時，按自身最大生命值的{{}}%回復生命值",
      "arguments": [
        ["5"],
        ["7"],
        ["7"],
        ["9"],
        ["9"],
        ["9"],
        ["10"],
      ]
    }
  },
  {
    "name": "喵咪心愛",
    "rarity": rarity.SSR,
    "type": catoType.passive.support,
    "statValue": catoStatValue.SSR.HP,
    "skill": {
      "name": "心的救贖",
      "description": "每釋放1次治療技能，治療效果提升{{}}%，可疊加3層",
      "arguments": [
        ["6"],
        ["8"],
        ["8"],
        ["10"],
        ["10"],
        ["10"],
        ["12"],
      ]
    }
  },
  {
    "name": "黃金之蜂",
    "rarity": rarity.SSR,
    "type": catoType.passive.support,
    "statValue": catoStatValue.SSR.HP,
    "skill": {
      "name": "黃金時間",
      "description": "回合結束時，有{{}}%機率回復1點奧義能量，該效果有2回合觸發冷卻時間，隊伍中每個戰鬥員的冷卻時間獨立計算",
      "arguments": [
        ["30"],
        ["42"],
        ["42"],
        ["51"],
        ["51"],
        ["51"],
        ["60"]
      ]
    }
  },
  {
    "name": "生煎包包",
    "rarity": rarity.SSR,
    "type": catoType.passive.support,
    "statValue": catoStatValue.SSR.HP,
    "skill": {
      "name": "以和為貴",
      "description": "釋放治療技能時，溢出的治療值按{{}}%的比例轉化為持續1回合的護盾",
      "arguments": [
        ["18"],
        ["25"],
        ["25"],
        ["31"],
        ["31"],
        ["31"],
        ["36"]
      ]
    }
  },
  {
    "name": "愛麗喵絲",
    "rarity": rarity.SSR,
    "type": catoType.passive.support,
    "statValue": catoStatValue.SSR.HP,
    "skill": {
      "name": "絕境逢生",
      "description": "回合開始時，若生命值低於50%，則按最大生命值的{{}}%回復生命值",
      "arguments": [
        ["10"],
        ["14"],
        ["14"],
        ["17"],
        ["17"],
        ["17"],
        ["20"]
      ]
    }
  },
  {
    "name": "天籟歌姬",
    "rarity": rarity.SSR,
    "type": catoType.passive.support,
    "statValue": catoStatValue.SSR.HP,
    "skill": {
      "name": "深受鼓舞",
      "description": "釋放增益技能後，友方全體下次使用進攻技能時造成的傷害提升{{}}%，可疊加3層",
      "arguments": [
        ["6"],
        ["8"],
        ["8"],
        ["10"],
        ["10"],
        ["10"],
        ["12"]
      ]
    }
  },
  {
    "name": "千層雪糕",
    "rarity": rarity.SSR,
    "type": catoType.passive.defense,
    "statValue": catoStatValue.SSR.DEF,
    "skill": {
      "name": "保護意識",
      "description": "戰鬥開始時，防禦相關能力提升{{}}%，持續3回合",
      "arguments": [
        ["6"],
        ["8"],
        ["8"],
        ["10"],
        ["10"],
        ["10"],
        ["12"]
      ]
    }
  },
  {
    "name": "喵喵甜心",
    "rarity": rarity.SSR,
    "type": catoType.passive.defense,
    "statValue": catoStatValue.SSR.DEF,
    "skill": {
      "name": "甜蜜守護",
      "description": "每回合開始時，獲得{{}}%最大生命值的護盾，持續1回合",
      "arguments": [
        ["7"],
        ["9.8"],
        ["9.8"],
        ["11.9"],
        ["11.9"],
        ["11.9"],
        ["14"]
      ]
    }
  },
  {
    "name": "血月之殤",
    "rarity": rarity.SSR,
    "type": catoType.passive.defense,
    "statValue": catoStatValue.SSR.DEF,
    "skill": {
      "name": "異化加護",
      "description": "戰鬥開始時，獲得{{}}%最大生命值的護盾，持續3回合",
      "arguments": [
        ["20"],
        ["28"],
        ["28"],
        ["34"],
        ["34"],
        ["34"],
        ["40"]
      ]
    }
  },
  {
    "name": "冬日雪寶",
    "rarity": rarity.SSR,
    "type": catoType.passive.defense,
    "statValue": catoStatValue.SSR.DEF,
    "skill": {
      "name": "乖寶寶的獎勵",
      "description": "受到傷害時，獲得1回合{{}}}%傷害減免，可疊加3層",
      "arguments": [
        ["6"],
        ["8"],
        ["8"],
        ["10"],
        ["10"],
        ["10"],
        ["12"]
      ]
    }
  },
  {
    "name": "魔法少喵",
    "rarity": rarity.SSR,
    "type": catoType.passive.attack,
    "statValue": catoStatValue.SSR.ATK,
    "skill": {
      "name": "魔法加成",
      "description": "戰鬥開始時，攻擊相關能力提升{{}}%，持續3回合",
      "arguments": [
        ["3"],
        ["4"],
        ["4"],
        ["5"],
        ["5"],
        ["5"],
        ["6"]
      ]
    }
  },
  {
    "name": "西部牛仔",
    "rarity": rarity.SSR,
    "type": catoType.passive.attack,
    "statValue": catoStatValue.SSR.ATK,
    "skill": {
      "name": "自由精神",
      "description": "釋放奧義技能後，造成傷害提升{{}}%，可疊加3層",
      "arguments": [
        ["6"],
        ["8"],
        ["8"],
        ["10"],
        ["10"],
        ["10"],
        ["12"]
      ]
    }
  },
  {
    "name": "柴郡貓",
    "rarity": rarity.SSR,
    "type": catoType.passive.attack,
    "statValue": catoStatValue.SSR.ATK,
    "skill": {
      "name": "微笑的假面",
      "description": "釋放攻擊技能後，降低敵方全體{{}}%防禦力，持續1回合，可疊加3層",
      "arguments": [
        ["5"],
        ["7"],
        ["7"],
        ["9"],
        ["9"],
        ["9"],
        ["10"]
      ]
    }
  },
  {
    "name": "貓形電腦",
    "rarity": rarity.SSR,
    "type": catoType.passive.attack,
    "statValue": catoStatValue.SSR.ATK,
    "skill": {
      "name": "精密計算",
      "description": "每回合首次釋放技能時，造成的傷害提升{{}}%",
      "arguments": [
        ["10"],
        ["14"],
        ["14"],
        ["17"],
        ["17"],
        ["17"],
        ["20"]
      ]
    }
  },
  {
    "name": "貓熊熊貓",
    "rarity": rarity.SSR,
    "type": catoType.passive.attack,
    "statValue": catoStatValue.SSR.ATK,
    "skill": {
      "name": "貓貓震怒",
      "description": "爆擊時，附帶{{}}%攻擊力的「真實傷害」",
      "arguments": [
        ["5"],
        ["7"],
        ["7"],
        ["9"],
        ["9"],
        ["9"],
        ["10"]
      ]
    }
  },
  {
    "name": "不滅之軀",
    "rarity": rarity.SSR,
    "type": catoType.active.support,
    "statValue": catoStatValue.SSR.HP,
    "skill": {
      "name": "不滅詭道",
      "description": "降低敵方全體{{}}%攻擊相關能力2回合",
      "arguments": [
        ["6"],
        ["7"],
        ["7"],
        ["8"],
        ["8"],
        ["8"],
        ["9"]
      ]
    }
  },
  {
    "name": "角黍之祀",
    "rarity": rarity.SSR,
    "type": catoType.active.support,
    "statValue": catoStatValue.SSR.HP,
    "skill": {
      "name": "箬葉之護",
      "description": "按全隊戰前攻擊力之和的{{}}%，對友方全體施加「箬葉之護」2回合",
      "arguments": [
        ["10"],
        ["13"],
        ["13"],
        ["20"],
        ["20"],
        ["20"],
        ["34"]
      ]
    }
  },
  {
    "name": "混血王子",
    "rarity": rarity.SSR,
    "type": catoType.active.defense,
    "statValue": catoStatValue.SSR.DEF,
    "skill": {
      "name": "王族血脈",
      "description": "按全隊戰前攻擊力之和的{{}}%，對友方單體施加2回合的護盾",
      "arguments": [
        ["35"],
        ["42"],
        ["42"],
        ["49"],
        ["49"],
        ["49"],
        ["53"]
      ]
    }
  },
  {
    "name": "貓咪教父",
    "rarity": rarity.SSR,
    "type": catoType.active.defense,
    "statValue": catoStatValue.SSR.DEF,
    "skill": {
      "name": "紳士風度",
      "description": "按全隊戰前攻擊力之和的{{}}%，對友方全體施加2回合的護盾",
      "arguments": [
        ["23"],
        ["28"],
        ["28"],
        ["32"],
        ["32"],
        ["32"],
        ["35"]
      ]
    }
  },
  {
    "name": "姜餅馴鹿",
    "rarity": rarity.SSR,
    "type": catoType.active.support,
    "statValue": catoStatValue.SSR.HP,
    "skill": {
      "name": "彌撒之禮",
      "description": "按全隊戰前攻擊力之和的{{}}%，治療友方全體",
      "arguments": [
        ["27"],
        ["32"],
        ["32"],
        ["38"],
        ["38"],
        ["38"],
        ["41"]
      ]
    }
  },
  {
    "name": "貓老大",
    "rarity": rarity.SSR,
    "type": catoType.active.attack,
    "statValue": catoStatValue.SSR.ATK,
    "skill": {
      "name": "領袖意志",
      "description": "對敵方全體施加{{}}%「傷害傳遞」2回合",
      "arguments": [
        ["9"],
        ["11"],
        ["11"],
        ["13"],
        ["13"],
        ["13"],
        ["14"]
      ]
    }
  },
  {
    "name": "鬼馬精靈",
    "rarity": rarity.SSR,
    "type": catoType.active.attack,
    "statValue": catoStatValue.SSR.ATK,
    "skill": {
      "name": "惡作劇",
      "description": "對敵方單體施加{{}}%「傷害擴散」2回合",
      "arguments": [
        ["17"],
        ["20"],
        ["20"],
        ["24"],
        ["24"],
        ["24"],
        ["26"]
      ]
    }
  },
  {
    "name": "布腦斧",
    "rarity": rarity.SSR,
    "type": catoType.active.attack,
    "statValue": catoStatValue.SSR.ATK,
    "skill": {
      "name": "虎虎生威",
      "description": "按全隊戰前攻擊力之和的{{}}%，對敵方單體造成「純粹傷害」",
      "arguments": [
        ["80"],
        ["96"],
        ["96"],
        ["112"],
        ["112"],
        ["112"],
        ["120"]
      ]
    }
  },
  {
    "name": "恐龍幼崽",
    "rarity": rarity.SSR,
    "type": catoType.active.attack,
    "statValue": catoStatValue.SSR.ATK,
    "skill": {
      "name": "勇氣讚歌",
      "description": "對敵方全體造成全隊戰前攻擊力之和的{{}}點「純粹傷害」",
      "arguments": [
        ["30%+600"],
        ["32%+700"],
        ["32%+700"],
        ["34%+800"],
        ["34%+800"],
        ["34%+800"],
        ["35%+900"]
      ]
    }
  },
  {
    "name": "咪子汽水",
    "rarity": rarity.SR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "昆士區尋寶",
      "description": "每{{}}秒有55%的機率可獲得1份食材，其中昆士區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["255"],
        ["240"],
        ["225"],
        ["210"],
        ["195"],
        ["180"]
      ]
    }
  },
  {
    "name": "福氣包包",
    "rarity": rarity.SR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "南港區尋寶",
      "description": "每{{}}秒有55%的機率可獲得1份食材，其中南港區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["255"],
        ["240"],
        ["225"],
        ["210"],
        ["195"],
        ["180"]
      ]
    }
  },
  {
    "name": "蔥花蝦餃",
    "rarity": rarity.SR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "耀洲區尋寶",
      "description": "每{{}}秒有55%的機率可獲得1份食材，其中耀洲區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["255"],
        ["240"],
        ["225"],
        ["210"],
        ["195"],
        ["180"]
      ]
    }
  },
  {
    "name": "歡樂小丑",
    "rarity": rarity.SR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "舊城區尋寶",
      "description": "每{{}}秒有55%的機率可獲得1份食材，其中舊城區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["255"],
        ["240"],
        ["225"],
        ["210"],
        ["195"],
        ["180"]
      ]
    }
  },
  {
    "name": "努力貓貓",
    "rarity": rarity.SR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "中心區尋寶",
      "description": "每{{}}秒有55%的機率可獲得1份食材，其中中心區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["255"],
        ["240"],
        ["225"],
        ["210"],
        ["195"],
        ["180"]
      ]
    }
  },
  {
    "name": "普羅喵斯",
    "rarity": rarity.SR,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "凜北區尋寶",
      "description": "每{{}}秒有55%的機率可獲得1份食材，其中凜北區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["255"],
        ["240"],
        ["225"],
        ["210"],
        ["195"],
        ["180"]
      ]
    }
  },
  {
    "name": "精緻喵喵",
    "rarity": rarity.SR,
    "type": catoType.passive.support,
    "statValue": catoStatValue.SR.HP,
    "skill": {
      "name": "精緻喵生",
      "description": "最大生命值提升{{}}%",
      "arguments": [
        ["8"],
        ["11"],
        ["11"],
        ["14"],
        ["14"],
        ["14"],
        ["16"]
      ]
    }
  },
  {
    "name": "暴躁喵弟",
    "rarity": rarity.SR,
    "type": catoType.passive.defense,
    "statValue": catoStatValue.SR.DEF,
    "skill": {
      "name": "歷經滄桑",
      "description": "忍耐率提升{{}}%",
      "arguments": [
        ["8"],
        ["11"],
        ["11"],
        ["14"],
        ["14"],
        ["14"],
        ["16"]
      ]
    }
  },
  {
    "name": "草莓奶昔",
    "rarity": rarity.SR,
    "type": catoType.passive.defense,
    "statValue": catoStatValue.SR.DEF,
    "skill": {
      "name": "生人勿近",
      "description": "防禦力提升{{}}%",
      "arguments": [
        ["8"],
        ["11"],
        ["11"],
        ["14"],
        ["14"],
        ["14"],
        ["16"]
      ]
    }
  },
  {
    "name": "芒果布丁",
    "rarity": rarity.SR,
    "type": catoType.passive.attack,
    "statValue": catoStatValue.SR.ATK,
    "skill": {
      "name": "精準打擊",
      "description": "穿透率提升{{}}%",
      "arguments": [
        ["4"],
        ["6"],
        ["6"],
        ["7"],
        ["7"],
        ["7"],
        ["8"]
      ]
    }
  },
  {
    "name": "香芋啵啵",
    "rarity": rarity.SR,
    "type": catoType.passive.attack,
    "statValue": catoStatValue.SR.ATK,
    "skill": {
      "name": "鼓舞士氣",
      "description": "攻擊力提升{{}}%",
      "arguments": [
        ["4"],
        ["6"],
        ["6"],
        ["7"],
        ["7"],
        ["7"],
        ["8"]
      ]
    }
  },
  {
    "name": "芝麻糊糊",
    "rarity": rarity.SR,
    "type": catoType.active.support,
    "statValue": catoStatValue.SR.HP,
    "skill": {
      "name": "芝麻糊糊",
      "description": "按全隊戰前攻擊力之和的{{}}%，治療友方全體",
      "arguments": [
        ["19"],
        ["23"],
        ["23"],
        ["27"],
        ["27"],
        ["27"],
        ["29"]
      ]
    }
  },
  {
    "name": "迷糊鬼",
    "rarity": rarity.SR,
    "type": catoType.active.support,
    "statValue": catoStatValue.SR.HP,
    "skill": {
      "name": "迷糊鬼",
      "description": "按全隊戰前攻擊力之和的{{}}%，治療友方單體",
      "arguments": [
        ["26"],
        ["31"],
        ["31"],
        ["36"],
        ["36"],
        ["36"],
        ["39"]
      ]
    }
  },
  {
    "name": "貓太狼",
    "rarity": rarity.SR,
    "type": catoType.active.defense,
    "statValue": catoStatValue.SR.DEF,
    "skill": {
      "name": "忠誠守護",
      "description": "按全隊戰前攻擊力之和的{{}}%，對友方單體施加2回合的護盾",
      "arguments": [
        ["20"],
        ["24"],
        ["24"],
        ["28"],
        ["28"],
        ["28"],
        ["30"]
      ]
    }
  },
  {
    "name": "學無止境",
    "rarity": rarity.SR,
    "type": catoType.active.attack,
    "statValue": catoStatValue.SR.ATK,
    "skill": {
      "name": "無盡的考驗",
      "description": "對敵方單體施加{{}}%「傷害擴散」2回合",
      "arguments": [
        ["12"],
        ["14"],
        ["14"],
        ["17"],
        ["17"],
        ["17"],
        ["18"]
      ]
    }
  },
  {
    "name": "蒸汽動力",
    "rarity": rarity.SR,
    "type": catoType.active.attack,
    "statValue": catoStatValue.SR.ATK,
    "skill": {
      "name": "科技力量",
      "description": "降低敵方全體{{}}%防禦力2回合",
      "arguments": [
        ["9"],
        ["11"],
        ["11"],
        ["13"],
        ["13"],
        ["13"],
        ["14"]
      ]
    }
  },
  {
    "name": "貓頭鷹貓",
    "rarity": rarity.SR,
    "type": catoType.active.attack,
    "statValue": catoStatValue.SR.ATK,
    "skill": {
      "name": "暫態突襲",
      "description": "按全隊戰前攻擊力之和的{{}}%，對敵方單體造成「純粹傷害」",
      "arguments": [
        ["60"],
        ["72"],
        ["72"],
        ["84"],
        ["84"],
        ["84"],
        ["90"]
      ]
    }
  },
  {
    "name": "心動瞬間",
    "rarity": rarity.R,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "昆士區尋寶",
      "description": "每{{}}秒有50%的機率可獲得1份食材，其中昆士區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["260"],
        ["250"],
        ["240"],
        ["230"],
        ["220"],
        ["210"]
      ]
    }
  },
  {
    "name": "紅豆沙",
    "rarity": rarity.R,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "南港區尋寶",
      "description": "每{{}}秒有50%的機率可獲得1份食材，其中南港區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["260"],
        ["250"],
        ["240"],
        ["230"],
        ["220"],
        ["210"]
      ]
    }
  },
  {
    "name": "呆呆瓜",
    "rarity": rarity.R,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "耀洲區尋寶",
      "description": "每{{}}秒有50%的機率可獲得1份食材，其中耀洲區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["260"],
        ["250"],
        ["240"],
        ["230"],
        ["220"],
        ["210"]
      ]
    }
  },
  {
    "name": "星星閃爍",
    "rarity": rarity.R,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "舊城區尋寶",
      "description": "每{{}}秒有50%的機率可獲得1份食材，其中舊城區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["260"],
        ["250"],
        ["240"],
        ["230"],
        ["220"],
        ["210"]
      ]
    }
  },
  {
    "name": "焦糖布丁",
    "rarity": rarity.R,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "中心區尋寶",
      "description": "每{{}}秒有50%的機率可獲得1份食材，其中中心區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["260"],
        ["250"],
        ["240"],
        ["230"],
        ["220"],
        ["210"]
      ]
    }
  },
  {
    "name": "摩卡可可",
    "rarity": rarity.R,
    "type": catoType.other.business,
    "statValue": {},
    "skill": {
      "name": "凜北區尋寶",
      "description": "每{{}}秒有50%的機率可獲得1份食材，其中凜北區的食材獲取機率提升",
      "arguments": [
        ["270"],
        ["260"],
        ["250"],
        ["240"],
        ["230"],
        ["220"],
        ["210"]
      ]
    }
  },
  {
    "name": "淘氣包",
    "rarity": rarity.R,
    "type": catoType.passive.support,
    "statValue": catoStatValue.R.HP,
    "skill": {
      "name": "安全範圍",
      "description": "最大生命值增加{{}}",
      "arguments": [
        ["72"],
        ["99"],
        ["99"],
        ["126"],
        ["126"],
        ["126"],
        ["144"]
      ]
    }
  },
  {
    "name": "柳丁汽水",
    "rarity": rarity.R,
    "type": catoType.passive.defense,
    "statValue": catoStatValue.R.DEF,
    "skill": {
      "name": "固若金湯",
      "description": "防禦力增加{{}}",
      "arguments": [
        ["12"],
        ["16"],
        ["16"],
        ["21"],
        ["21"],
        ["21"],
        ["24"]
      ]
    }
  },
  {
    "name": "眩暈時刻",
    "rarity": rarity.R,
    "type": catoType.passive.attack,
    "statValue": catoStatValue.R.ATK,
    "skill": {
      "name": "相信的力量",
      "description": "攻擊力增加{{}}",
      "arguments": [
        ["24"],
        ["36"],
        ["36"],
        ["42"],
        ["42"],
        ["42"],
        ["48"]
      ]
    }
  },
  {
    "name": "夾心餅乾",
    "rarity": rarity.R,
    "type": catoType.active.support,
    "statValue": catoStatValue.R.HP,
    "skill": {
      "name": "同心協力",
      "description": "按全隊戰前攻擊力之和的{{}}%，治療友方單體",
      "arguments": [
        ["19"],
        ["23"],
        ["23"],
        ["27"],
        ["27"],
        ["27"],
        ["29"]
      ]
    }
  },
  {
    "name": "追星族",
    "rarity": rarity.R,
    "type": catoType.active.defense,
    "statValue": catoStatValue.R.DEF,
    "skill": {
      "name": "絕對擁護",
      "description": "按全隊戰前攻擊力之和的{{}}%，對友方單體施加2回合的護盾",
      "arguments": [
        ["19"],
        ["23"],
        ["23"],
        ["27"],
        ["27"],
        ["27"],
        ["29"]
      ]
    }
  },
  {
    "name": "小可愛",
    "rarity": rarity.R,
    "type": catoType.active.attack,
    "statValue": catoStatValue.R.ATK,
    "skill": {
      "name": "微笑勝利法",
      "description": "按全隊戰前攻擊力之和的{{}}%，對敵方單體造成「純粹傷害」",
      "arguments": [
        ["43"],
        ["52"],
        ["52"],
        ["60"],
        ["60"],
        ["60"],
        ["65"]
      ]
    }
  }
]

export default catoList
