// 量表数据文件 - 女性抗衰门诊H5量表评估系统
// 包含28个量表的完整题目、选项和评分逻辑

const SCALES = [
  {
    "id": "moca",
    "name": "MoCA蒙特利尔认知评估量表",
    "category": "认知评估",
    "description": "用于快速筛查轻度认知功能障碍，满分30分，≤25分提示认知障碍（受教育≤12年加1分）",
    "questions": [
      {
        "text": "视空间/执行功能：连线测试（按数字顺序连线1-2-3-4-5）",
        "type": "select",
        "options": [
          {
            "text": "正确完成",
            "score": 1
          },
          {
            "text": "未正确完成",
            "score": 0
          }
        ]
      },
      {
        "text": "视空间/执行功能：立方体复制（画出三维立方体）",
        "type": "select",
        "options": [
          {
            "text": "正确完成",
            "score": 1
          },
          {
            "text": "未正确完成",
            "score": 0
          }
        ]
      },
      {
        "text": "视空间/执行功能：画钟测验（画出含所有数字和指针的钟面，指向11:10）",
        "type": "select",
        "options": [
          {
            "text": "正确完成（轮廓+数字+指针均正确）",
            "score": 3
          },
          {
            "text": "2项正确",
            "score": 2
          },
          {
            "text": "1项正确",
            "score": 1
          },
          {
            "text": "0项正确",
            "score": 0
          }
        ]
      },
      {
        "text": "命名：狮子",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "命名：犀牛",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "命名：骆驼（或船）",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "注意力：数字顺背（如5-8-2）",
        "type": "select",
        "options": [
          {
            "text": "2次均正确",
            "score": 1
          },
          {
            "text": "未达标准",
            "score": 0
          }
        ]
      },
      {
        "text": "注意力：数字倒背（如2-4-7）",
        "type": "select",
        "options": [
          {
            "text": "2次均正确",
            "score": 1
          },
          {
            "text": "未达标准",
            "score": 0
          }
        ]
      },
      {
        "text": "注意力：警觉性测试（听到A时拍手）",
        "type": "select",
        "options": [
          {
            "text": "无错误或最多1次错误",
            "score": 1
          },
          {
            "text": "2次及以上错误",
            "score": 0
          }
        ]
      },
      {
        "text": "注意力：连续减7（从100开始连续减7，5次）",
        "type": "select",
        "options": [
          {
            "text": "4-5次正确",
            "score": 3
          },
          {
            "text": "3次正确",
            "score": 2
          },
          {
            "text": "2次正确",
            "score": 1
          },
          {
            "text": "0-1次正确",
            "score": 0
          }
        ]
      },
      {
        "text": "语言：句子复述第1句（我只知道今天张亮是来帮过忙的人）",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "语言：句子复述第2句（狗在房间的时候，猫总是躲在沙发下面）",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "语言：语言流畅性（1分钟内说出尽可能多的动物名称）",
        "type": "select",
        "options": [
          {
            "text": "≥11个",
            "score": 1
          },
          {
            "text": "<11个",
            "score": 0
          }
        ]
      },
      {
        "text": "抽象：苹果和橙子的相似性",
        "type": "select",
        "options": [
          {
            "text": "正确（都是水果）",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "抽象：手表和尺子的相似性",
        "type": "select",
        "options": [
          {
            "text": "正确（都是测量工具/工具）",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "延迟回忆：对5个词语的自由回忆（面孔、天鹅绒、教堂、菊花、红色）",
        "type": "select",
        "options": [
          {
            "text": "回忆出5个",
            "score": 5
          },
          {
            "text": "回忆出4个",
            "score": 4
          },
          {
            "text": "回忆出3个",
            "score": 3
          },
          {
            "text": "回忆出2个",
            "score": 2
          },
          {
            "text": "回忆出1个",
            "score": 1
          },
          {
            "text": "回忆出0个",
            "score": 0
          }
        ]
      },
      {
        "text": "定向：星期几",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向：月份",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向：年份",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向：日期",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向：地点/城市",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "受教育年限是否≤12年",
        "type": "select",
        "options": [
          {
            "text": "是（加1分）",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ],
        "note": "教育校正项"
      }
    ],
    "scoring": {
      "formula": "sum",
      "maxScore": 30,
      "educationCorrection": true,
      "levels": [
        {
          "min": 26,
          "max": 30,
          "label": "认知功能正常",
          "color": "green"
        },
        {
          "min": 18,
          "max": 25,
          "label": "轻度认知障碍",
          "color": "yellow"
        },
        {
          "min": 10,
          "max": 17,
          "label": "中度认知障碍",
          "color": "orange"
        },
        {
          "min": 0,
          "max": 9,
          "label": "重度认知障碍",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "mmse",
    "name": "MMSE简易精神状态检查量表",
    "category": "认知评估",
    "description": "筛查认知功能缺损的常用工具，满分30分",
    "questions": [
      {
        "text": "定向力-时间：今年是哪一年？",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向力-时间：现在是什么季节？",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向力-时间：现在是几月份？",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向力-时间：今天是几号？",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向力-时间：今天是星期几？",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向力-地点：我们现在在哪个省/市？",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向力-地点：我们现在在哪个区/县？",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向力-地点：这是什么医院？",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向力-地点：这是第几层楼？",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "定向力-地点：我们在哪个科室？",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "记忆力：复述3个词（皮球、国旗、树木）",
        "type": "select",
        "options": [
          {
            "text": "3个均正确",
            "score": 3
          },
          {
            "text": "2个正确",
            "score": 2
          },
          {
            "text": "1个正确",
            "score": 1
          },
          {
            "text": "0个正确",
            "score": 0
          }
        ]
      },
      {
        "text": "注意力和计算力：从100连续减7（5次）",
        "type": "select",
        "options": [
          {
            "text": "5次全对",
            "score": 5
          },
          {
            "text": "4次对",
            "score": 4
          },
          {
            "text": "3次对",
            "score": 3
          },
          {
            "text": "2次对",
            "score": 2
          },
          {
            "text": "1次对",
            "score": 1
          },
          {
            "text": "0次对",
            "score": 0
          }
        ]
      },
      {
        "text": "回忆力：回忆之前3个词（皮球、国旗、树木）",
        "type": "select",
        "options": [
          {
            "text": "3个均正确",
            "score": 3
          },
          {
            "text": "2个正确",
            "score": 2
          },
          {
            "text": "1个正确",
            "score": 1
          },
          {
            "text": "0个正确",
            "score": 0
          }
        ]
      },
      {
        "text": "语言能力：辨认物品（手表和铅笔）",
        "type": "select",
        "options": [
          {
            "text": "2个均正确",
            "score": 2
          },
          {
            "text": "1个正确",
            "score": 1
          },
          {
            "text": "0个正确",
            "score": 0
          }
        ]
      },
      {
        "text": "语言能力：复述'四十四只石狮子'",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "语言能力：执行三步命令（用右手拿纸，对折，放在桌上）",
        "type": "select",
        "options": [
          {
            "text": "3步全对",
            "score": 3
          },
          {
            "text": "2步对",
            "score": 2
          },
          {
            "text": "1步对",
            "score": 1
          },
          {
            "text": "0步对",
            "score": 0
          }
        ]
      },
      {
        "text": "语言能力：阅读并执行'闭上眼睛'",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "语言能力：写一个完整句子",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "视空间功能：临摹图形（两个交叉五边形）",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sum",
      "maxScore": 30,
      "levels": [
        {
          "min": 27,
          "max": 30,
          "label": "认知功能正常",
          "color": "green"
        },
        {
          "min": 21,
          "max": 26,
          "label": "轻度认知障碍",
          "color": "yellow"
        },
        {
          "min": 10,
          "max": 20,
          "label": "中度认知障碍",
          "color": "orange"
        },
        {
          "min": 0,
          "max": 9,
          "label": "重度认知障碍",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "elderly_cognitive",
    "name": "老年人认知功能智力状态简易评价量表",
    "category": "认知评估",
    "description": "结合MMSE的老年人专用认知功能评估，含日常生活能力补充评价",
    "questions": [
      {
        "text": "时间定向：今天是哪年哪月哪日星期几？",
        "type": "select",
        "options": [
          {
            "text": "全对",
            "score": 4
          },
          {
            "text": "对3项",
            "score": 3
          },
          {
            "text": "对2项",
            "score": 2
          },
          {
            "text": "对1项",
            "score": 1
          },
          {
            "text": "全错",
            "score": 0
          }
        ]
      },
      {
        "text": "地点定向：您现在在什么地方？",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 2
          },
          {
            "text": "部分正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "即刻记忆：我说三样东西（树、钟、汽车），请重复",
        "type": "select",
        "options": [
          {
            "text": "3个均正确",
            "score": 3
          },
          {
            "text": "2个正确",
            "score": 2
          },
          {
            "text": "1个正确",
            "score": 1
          },
          {
            "text": "0个正确",
            "score": 0
          }
        ]
      },
      {
        "text": "注意与计算：100减7等于多少？再减7呢？（共5次）",
        "type": "select",
        "options": [
          {
            "text": "5次全对",
            "score": 5
          },
          {
            "text": "4次对",
            "score": 4
          },
          {
            "text": "3次对",
            "score": 3
          },
          {
            "text": "2次对",
            "score": 2
          },
          {
            "text": "1次对",
            "score": 1
          },
          {
            "text": "0次对",
            "score": 0
          }
        ]
      },
      {
        "text": "延迟回忆：刚才说的三样东西是什么？",
        "type": "select",
        "options": [
          {
            "text": "3个均正确",
            "score": 3
          },
          {
            "text": "2个正确",
            "score": 2
          },
          {
            "text": "1个正确",
            "score": 1
          },
          {
            "text": "0个正确",
            "score": 0
          }
        ]
      },
      {
        "text": "命名：这是什么？（出示手表）",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "命名：这是什么？（出示铅笔）",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "复述：请跟我念'大家齐心协力'",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "三步命令：用右手拿纸，对折，放在桌上",
        "type": "select",
        "options": [
          {
            "text": "3步全对",
            "score": 3
          },
          {
            "text": "2步对",
            "score": 2
          },
          {
            "text": "1步对",
            "score": 1
          },
          {
            "text": "0步对",
            "score": 0
          }
        ]
      },
      {
        "text": "阅读：请念这句话并照做'闭上眼睛'",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "书写：请写一个完整的句子",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "图形描画：请临摹这个图形",
        "type": "select",
        "options": [
          {
            "text": "正确",
            "score": 1
          },
          {
            "text": "错误",
            "score": 0
          }
        ]
      },
      {
        "text": "日常生活：您能自己穿衣吗？",
        "type": "select",
        "options": [
          {
            "text": "能独立完成",
            "score": 2
          },
          {
            "text": "需要帮助",
            "score": 1
          },
          {
            "text": "完全不能",
            "score": 0
          }
        ]
      },
      {
        "text": "日常生活：您能自己吃饭吗？",
        "type": "select",
        "options": [
          {
            "text": "能独立完成",
            "score": 2
          },
          {
            "text": "需要帮助",
            "score": 1
          },
          {
            "text": "完全不能",
            "score": 0
          }
        ]
      },
      {
        "text": "日常生活：您能自己上厕所吗？",
        "type": "select",
        "options": [
          {
            "text": "能独立完成",
            "score": 2
          },
          {
            "text": "需要帮助",
            "score": 1
          },
          {
            "text": "完全不能",
            "score": 0
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sum",
      "maxScore": 35,
      "levels": [
        {
          "min": 30,
          "max": 35,
          "label": "认知功能正常",
          "color": "green"
        },
        {
          "min": 22,
          "max": 29,
          "label": "轻度认知障碍",
          "color": "yellow"
        },
        {
          "min": 12,
          "max": 21,
          "label": "中度认知障碍",
          "color": "orange"
        },
        {
          "min": 0,
          "max": 11,
          "label": "重度认知障碍",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "cdr",
    "name": "CDR临床痴呆评定量表",
    "category": "认知评估",
    "description": "通过6个认知领域评估痴呆严重程度，分为0/0.5/1/2/3五级",
    "questions": [
      {
        "text": "记忆力：是否存在记忆障碍？",
        "type": "select",
        "options": [
          {
            "text": "无记忆丧失（0分）",
            "score": 0
          },
          {
            "text": "轻度遗忘（0.5分）",
            "score": 0.5
          },
          {
            "text": "中度记忆丧失，近期记忆尤其受累（1分）",
            "score": 1
          },
          {
            "text": "严重记忆丧失，仅有片段记忆（2分）",
            "score": 2
          },
          {
            "text": "完全丧失记忆（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "定向力：时间和地点定向能力如何？",
        "type": "select",
        "options": [
          {
            "text": "定向力完好（0分）",
            "score": 0
          },
          {
            "text": "轻度障碍（0.5分）",
            "score": 0.5
          },
          {
            "text": "中度障碍（1分）",
            "score": 1
          },
          {
            "text": "严重障碍（2分）",
            "score": 2
          },
          {
            "text": "完全丧失定向力（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "判断与解决问题：判断和解决问题的能力如何？",
        "type": "select",
        "options": [
          {
            "text": "良好处理问题（0分）",
            "score": 0
          },
          {
            "text": "轻度受损（0.5分）",
            "score": 0.5
          },
          {
            "text": "中度受损（1分）",
            "score": 1
          },
          {
            "text": "严重受损（2分）",
            "score": 2
          },
          {
            "text": "完全不能（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "社区事务：参与社区活动的能力如何？",
        "type": "select",
        "options": [
          {
            "text": "独立参与（0分）",
            "score": 0
          },
          {
            "text": "轻度受损但仍参与（0.5分）",
            "score": 0.5
          },
          {
            "text": "虽能参与但明显受损（1分）",
            "score": 1
          },
          {
            "text": "不能独立参与（2分）",
            "score": 2
          },
          {
            "text": "完全丧失（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "家务与爱好：家务和业余爱好的维持情况如何？",
        "type": "select",
        "options": [
          {
            "text": "正常独立（0分）",
            "score": 0
          },
          {
            "text": "轻度受损（0.5分）",
            "score": 0.5
          },
          {
            "text": "中度受损（1分）",
            "score": 1
          },
          {
            "text": "严重受损（2分）",
            "score": 2
          },
          {
            "text": "完全丧失（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "个人照料：个人生活自理能力如何？",
        "type": "select",
        "options": [
          {
            "text": "完全自理（0分）",
            "score": 0
          },
          {
            "text": "需要督促（1分）",
            "score": 1
          },
          {
            "text": "需要帮助穿衣、卫生（2分）",
            "score": 2
          },
          {
            "text": "完全需要帮助（3分）",
            "score": 3
          }
        ]
      }
    ],
    "scoring": {
      "formula": "cdr",
      "note": "CDR评分规则：记忆为主要决定因素，若记忆=0.5则CDR≥0.5；若3个以上次要领域≥1则CDR=1；依此类推",
      "levels": [
        {
          "min": 0,
          "max": 0,
          "label": "正常（CDR=0）",
          "color": "green"
        },
        {
          "min": 0.5,
          "max": 0.5,
          "label": "可疑痴呆（CDR=0.5）",
          "color": "yellow"
        },
        {
          "min": 1,
          "max": 1,
          "label": "轻度痴呆（CDR=1）",
          "color": "orange"
        },
        {
          "min": 2,
          "max": 2,
          "label": "中度痴呆（CDR=2）",
          "color": "red"
        },
        {
          "min": 3,
          "max": 3,
          "label": "重度痴呆（CDR=3）",
          "color": "darkred"
        }
      ]
    }
  },
  {
    "id": "hama",
    "name": "汉密尔顿焦虑量表(HAMA)",
    "category": "情绪评估",
    "description": "评定焦虑症状的严重程度，14项，0-4分五级评分",
    "questions": [
      {
        "text": "焦虑心境：担心、预感不幸、易激惹",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "紧张：紧张感、疲劳感、不能放松、易哭、颤抖",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "害怕：怕黑、怕陌生人、怕独处、怕动物",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "失眠：入睡困难、易醒、多梦、早醒",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "记忆或注意障碍：记忆力减退、注意力不集中",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "抑郁心境：丧失兴趣、对爱好缺乏愉快感、早醒、抑郁",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "躯体性焦虑-肌肉系统：肌肉酸痛、活动不灵活、肌肉跳动",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "躯体性焦虑-感觉系统：耳鸣、视力模糊、发冷发热、软弱无力",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "心血管系统症状：心动过速、心悸、胸痛、血管跳动",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "呼吸系统症状：胸闷、窒息感、叹气、呼吸困难",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "胃肠道症状：吞咽困难、腹胀、恶心、腹痛、腹泻",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "生殖泌尿系统症状：尿频、尿急、停经、性欲减退",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "植物神经症状：口干、潮红、苍白、出汗",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "会谈时行为表现：紧张、坐立不安、手抖、面肌抽动、叹气",
        "type": "select",
        "options": [
          {
            "text": "无症状（0分）",
            "score": 0
          },
          {
            "text": "轻（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "重（3分）",
            "score": 3
          },
          {
            "text": "极重（4分）",
            "score": 4
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sum",
      "maxScore": 56,
      "levels": [
        {
          "min": 0,
          "max": 6,
          "label": "无焦虑",
          "color": "green"
        },
        {
          "min": 7,
          "max": 13,
          "label": "可能焦虑",
          "color": "yellow"
        },
        {
          "min": 14,
          "max": 20,
          "label": "肯定焦虑",
          "color": "orange"
        },
        {
          "min": 21,
          "max": 28,
          "label": "明显焦虑",
          "color": "red"
        },
        {
          "min": 29,
          "max": 56,
          "label": "严重焦虑",
          "color": "darkred"
        }
      ]
    }
  },
  {
    "id": "hamd",
    "name": "HAMD汉密尔顿抑郁量表(17项)",
    "category": "情绪评估",
    "description": "评定抑郁症状严重程度的金标准量表，17项版",
    "questions": [
      {
        "text": "抑郁情绪",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "只在问到时才诉述（1分）",
            "score": 1
          },
          {
            "text": "在访谈中自发表达（2分）",
            "score": 2
          },
          {
            "text": "不用言语也可观察到（3分）",
            "score": 3
          },
          {
            "text": "言语和非言语均表达明显（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "有罪感",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "责备自己（1分）",
            "score": 1
          },
          {
            "text": "认为自己连累他人（2分）",
            "score": 2
          },
          {
            "text": "反复思考以往过失（3分）",
            "score": 3
          },
          {
            "text": "罪恶妄想（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "自杀",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "觉得活着没意思（1分）",
            "score": 1
          },
          {
            "text": "希望自己死去（2分）",
            "score": 2
          },
          {
            "text": "有自杀观念（3分）",
            "score": 3
          },
          {
            "text": "有自杀行为（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "入睡困难",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "主诉有时入睡困难（1分）",
            "score": 1
          },
          {
            "text": "主诉每晚均入睡困难（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "睡眠不深",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "睡眠浅多噩梦（1分）",
            "score": 1
          },
          {
            "text": "半夜曾醒来（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "早醒",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "有时早醒（1分）",
            "score": 1
          },
          {
            "text": "经常早醒（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "工作和兴趣",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "提问才诉说（1分）",
            "score": 1
          },
          {
            "text": "自发表达（2分）",
            "score": 2
          },
          {
            "text": "活动减少（3分）",
            "score": 3
          },
          {
            "text": "完全不能工作（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "迟缓",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "轻度迟缓（1分）",
            "score": 1
          },
          {
            "text": "明显迟缓（2分）",
            "score": 2
          },
          {
            "text": "交谈困难（3分）",
            "score": 3
          },
          {
            "text": "完全木僵（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "激越",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "心神不定（1分）",
            "score": 1
          },
          {
            "text": "搓手、咬手指（2分）",
            "score": 2
          },
          {
            "text": "走来走去（3分）",
            "score": 3
          },
          {
            "text": "无法静坐（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "精神性焦虑",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "问及时诉说（1分）",
            "score": 1
          },
          {
            "text": "自发表达（2分）",
            "score": 2
          },
          {
            "text": "表情言谈中明显（3分）",
            "score": 3
          },
          {
            "text": "明显恐惧不安（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "躯体性焦虑",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "轻度（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "重度（3分）",
            "score": 3
          },
          {
            "text": "严重影响生活和活动（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "胃肠道症状",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "食欲减退（1分）",
            "score": 1
          },
          {
            "text": "需药才能进食（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "全身症状",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "四肢、背部或头部沉重感（1分）",
            "score": 1
          },
          {
            "text": "症状明显（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "性症状（性欲减退或月经紊乱）",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "轻度（1分）",
            "score": 1
          },
          {
            "text": "重度（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "疑病",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "过分关注自身健康（1分）",
            "score": 1
          },
          {
            "text": "反复考虑健康问题（2分）",
            "score": 2
          },
          {
            "text": "疑病妄想（3分）",
            "score": 3
          },
          {
            "text": "伴幻觉的疑病妄想（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "体重减轻",
        "type": "select",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "1周内减轻0.5kg以上（1分）",
            "score": 1
          },
          {
            "text": "1周内减轻1kg以上（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "自知力",
        "type": "select",
        "options": [
          {
            "text": "知道自己有病（0分）",
            "score": 0
          },
          {
            "text": "知道自己有病但归因于其他（1分）",
            "score": 1
          },
          {
            "text": "完全否认有病（2分）",
            "score": 2
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sum",
      "maxScore": 52,
      "levels": [
        {
          "min": 0,
          "max": 7,
          "label": "正常",
          "color": "green"
        },
        {
          "min": 8,
          "max": 16,
          "label": "可能抑郁",
          "color": "yellow"
        },
        {
          "min": 17,
          "max": 23,
          "label": "轻中度抑郁",
          "color": "orange"
        },
        {
          "min": 24,
          "max": 52,
          "label": "重度抑郁",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "had",
    "name": "HAD情绪测定表（医院焦虑抑郁量表）",
    "category": "情绪评估",
    "description": "14题，焦虑7题+抑郁7题，0-3分，双因子评分",
    "questions": [
      {
        "text": "我感到紧张（或痛苦）",
        "type": "select",
        "group": "anxiety",
        "options": [
          {
            "text": "几乎所有时候",
            "score": 3
          },
          {
            "text": "大多时候",
            "score": 2
          },
          {
            "text": "有时",
            "score": 1
          },
          {
            "text": "根本没有",
            "score": 0
          }
        ]
      },
      {
        "text": "我对以往感兴趣的事情还是有兴趣",
        "type": "select",
        "group": "depression",
        "options": [
          {
            "text": "根本没有",
            "score": 3
          },
          {
            "text": "只有一点",
            "score": 2
          },
          {
            "text": "不像以前那样多",
            "score": 1
          },
          {
            "text": "肯定一样",
            "score": 0
          }
        ]
      },
      {
        "text": "我感到有点害怕，好像预感到有什么可怕的事情要发生",
        "type": "select",
        "group": "anxiety",
        "options": [
          {
            "text": "非常肯定和十分严重",
            "score": 3
          },
          {
            "text": "是有，但并不太严重",
            "score": 2
          },
          {
            "text": "有一点，但并不使我苦恼",
            "score": 1
          },
          {
            "text": "根本没有",
            "score": 0
          }
        ]
      },
      {
        "text": "我能够哈哈大笑，并看到事物有趣的一面",
        "type": "select",
        "group": "depression",
        "options": [
          {
            "text": "根本没有",
            "score": 3
          },
          {
            "text": "现在肯定是不太多了",
            "score": 2
          },
          {
            "text": "现在已经不大这样了",
            "score": 1
          },
          {
            "text": "我经常这样",
            "score": 0
          }
        ]
      },
      {
        "text": "我的心中充满烦恼",
        "type": "select",
        "group": "anxiety",
        "options": [
          {
            "text": "大多数时间",
            "score": 3
          },
          {
            "text": "常常如此",
            "score": 2
          },
          {
            "text": "有时，但并不经常",
            "score": 1
          },
          {
            "text": "偶然如此",
            "score": 0
          }
        ]
      },
      {
        "text": "我感到愉快",
        "type": "select",
        "group": "depression",
        "options": [
          {
            "text": "根本没有",
            "score": 3
          },
          {
            "text": "并不经常",
            "score": 2
          },
          {
            "text": "有时",
            "score": 1
          },
          {
            "text": "大多数时候",
            "score": 0
          }
        ]
      },
      {
        "text": "我能够安闲而轻松地坐着",
        "type": "select",
        "group": "anxiety",
        "options": [
          {
            "text": "根本没有",
            "score": 3
          },
          {
            "text": "并不经常",
            "score": 2
          },
          {
            "text": "经常",
            "score": 1
          },
          {
            "text": "肯定",
            "score": 0
          }
        ]
      },
      {
        "text": "我好像感到人变迟钝了",
        "type": "select",
        "group": "depression",
        "options": [
          {
            "text": "几乎所有时间",
            "score": 3
          },
          {
            "text": "很经常",
            "score": 2
          },
          {
            "text": "有时",
            "score": 1
          },
          {
            "text": "根本没有",
            "score": 0
          }
        ]
      },
      {
        "text": "我感到一种令人发抖的恐惧",
        "type": "select",
        "group": "anxiety",
        "options": [
          {
            "text": "根本没有",
            "score": 0
          },
          {
            "text": "有时",
            "score": 1
          },
          {
            "text": "很经常",
            "score": 2
          },
          {
            "text": "非常经常",
            "score": 3
          }
        ]
      },
      {
        "text": "我对自己的外表（打扮）失去兴趣",
        "type": "select",
        "group": "depression",
        "options": [
          {
            "text": "肯定",
            "score": 3
          },
          {
            "text": "并不像我应该做的那样关心",
            "score": 2
          },
          {
            "text": "我可能不是非常关心",
            "score": 1
          },
          {
            "text": "我像往常一样关心",
            "score": 0
          }
        ]
      },
      {
        "text": "我有点坐立不安，好像感到非要活动不可",
        "type": "select",
        "group": "anxiety",
        "options": [
          {
            "text": "确实非常多",
            "score": 3
          },
          {
            "text": "是不少",
            "score": 2
          },
          {
            "text": "并不很少",
            "score": 1
          },
          {
            "text": "根本没有",
            "score": 0
          }
        ]
      },
      {
        "text": "我对一切都是乐观地向前看",
        "type": "select",
        "group": "depression",
        "options": [
          {
            "text": "几乎从不",
            "score": 3
          },
          {
            "text": "很少",
            "score": 2
          },
          {
            "text": "通常如此",
            "score": 1
          },
          {
            "text": "差不多是这样做的",
            "score": 0
          }
        ]
      },
      {
        "text": "我突然发现有恐慌感",
        "type": "select",
        "group": "anxiety",
        "options": [
          {
            "text": "确实很经常",
            "score": 3
          },
          {
            "text": "时常",
            "score": 2
          },
          {
            "text": "并非经常",
            "score": 1
          },
          {
            "text": "根本没有",
            "score": 0
          }
        ]
      },
      {
        "text": "我好像感到情绪在渐渐低落",
        "type": "select",
        "group": "depression",
        "options": [
          {
            "text": "几乎所有时间",
            "score": 3
          },
          {
            "text": "很经常",
            "score": 2
          },
          {
            "text": "有时",
            "score": 1
          },
          {
            "text": "根本没有",
            "score": 0
          }
        ]
      }
    ],
    "scoring": {
      "formula": "had",
      "note": "分别计算焦虑因子分（奇数题）和抑郁因子分（偶数题）",
      "anxietyLevels": [
        {
          "min": 0,
          "max": 7,
          "label": "无焦虑",
          "color": "green"
        },
        {
          "min": 8,
          "max": 10,
          "label": "可疑焦虑",
          "color": "yellow"
        },
        {
          "min": 11,
          "max": 21,
          "label": "肯定焦虑",
          "color": "red"
        }
      ],
      "depressionLevels": [
        {
          "min": 0,
          "max": 7,
          "label": "无抑郁",
          "color": "green"
        },
        {
          "min": 8,
          "max": 10,
          "label": "可疑抑郁",
          "color": "yellow"
        },
        {
          "min": 11,
          "max": 21,
          "label": "肯定抑郁",
          "color": "red"
        }
      ],
      "levels": [
        {
          "min": 0,
          "max": 14,
          "label": "参考焦虑/抑郁各因子分",
          "color": "green"
        }
      ]
    }
  },
  {
    "id": "sas",
    "name": "SAS焦虑自评量表（Zung）",
    "category": "情绪评估",
    "description": "20题自评量表，4级评分，部分反向计分，标准分=原始分×1.25取整",
    "questions": [
      {
        "text": "我觉得比平常容易紧张和着急",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我无缘无故地感到害怕",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我容易心里烦乱或觉得惊恐",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我觉得我可能将要发疯",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我觉得一切都好，也不会发生什么不幸",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我手脚发抖打颤",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我因为头痛、颈痛和背痛而苦恼",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我感觉容易衰弱和疲乏",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我觉得心平气和，并且容易安静坐着",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我觉得心跳得很快",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我因为一阵阵头晕而苦恼",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我有晕倒发作，或觉得要晕倒似的",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我吸气呼气都感到很容易",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我的手脚麻木和刺痛",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我因为胃痛和消化不良而苦恼",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我常常要小便",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我的手常常是干燥温暖的",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我脸红发热",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我容易入睡并且一夜睡得很好",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我做噩梦",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sas",
      "note": "标准分=原始分×1.25取整，反向计分题:5,9,13,17,19",
      "reverseItems": [
        5,
        9,
        13,
        17,
        19
      ],
      "levels": [
        {
          "min": 0,
          "max": 49,
          "label": "正常",
          "color": "green"
        },
        {
          "min": 50,
          "max": 59,
          "label": "轻度焦虑",
          "color": "yellow"
        },
        {
          "min": 60,
          "max": 69,
          "label": "中度焦虑",
          "color": "orange"
        },
        {
          "min": 70,
          "max": 100,
          "label": "重度焦虑",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "sds",
    "name": "SDS抑郁自评量表（Zung）",
    "category": "情绪评估",
    "description": "20题自评量表，4级评分，10题反向计分，标准分=原始分×1.25取整",
    "questions": [
      {
        "text": "我觉得闷闷不乐，情绪低沉",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我觉得一天中早晨最好",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我一阵阵地哭出来或想哭",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我晚上睡眠不好",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我吃的跟平常一样多",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我与异性亲密接触时和以往一样感觉愉快",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我发觉我的体重在下降",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我有便秘的苦恼",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我心跳比平时快",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我无缘无故地感到疲乏",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我的头脑跟平常一样清楚",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我觉得经常做的事情并没有困难",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我觉得不安而平静不下来",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我对将来抱有希望",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我比平常容易生气激动",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我觉得做出决定是容易的",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我觉得自己是个有用的人，有人需要我",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我的生活过得很有意思",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      },
      {
        "text": "我认为如果我死了别人会生活得好些",
        "type": "select",
        "reverse": false,
        "options": [
          {
            "text": "没有或很少时间",
            "score": 1
          },
          {
            "text": "少部分时间",
            "score": 2
          },
          {
            "text": "相当多时间",
            "score": 3
          },
          {
            "text": "绝大部分或全部时间",
            "score": 4
          }
        ]
      },
      {
        "text": "平常感兴趣的事我仍然照样感兴趣",
        "type": "select",
        "reverse": true,
        "options": [
          {
            "text": "绝大部分或全部时间",
            "score": 1
          },
          {
            "text": "相当多时间",
            "score": 2
          },
          {
            "text": "少部分时间",
            "score": 3
          },
          {
            "text": "没有或很少时间",
            "score": 4
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sds",
      "note": "标准分=原始分×1.25取整，反向计分题:2,5,6,11,12,14,16,17,18,20",
      "reverseItems": [
        2,
        5,
        6,
        11,
        12,
        14,
        16,
        17,
        18,
        20
      ],
      "levels": [
        {
          "min": 0,
          "max": 52,
          "label": "正常",
          "color": "green"
        },
        {
          "min": 53,
          "max": 62,
          "label": "轻度抑郁",
          "color": "yellow"
        },
        {
          "min": 63,
          "max": 72,
          "label": "中度抑郁",
          "color": "orange"
        },
        {
          "min": 73,
          "max": 100,
          "label": "重度抑郁",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "kupperman",
    "name": "改良Kupperman评分（更年期症状）",
    "category": "更年期评估",
    "description": "评估更年期症状严重程度，13项加权评分法",
    "questions": [
      {
        "text": "潮热出汗",
        "type": "select",
        "weight": 4,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "<3次/天（1分）",
            "score": 1
          },
          {
            "text": "3-9次/天（2分）",
            "score": 2
          },
          {
            "text": "≥10次/天（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "感觉异常（麻木、刺痛、耳鸣）",
        "type": "select",
        "weight": 2,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "有时（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": " constant（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "失眠",
        "type": "select",
        "weight": 2,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": "严重/服安眠药（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "情绪波动（烦躁、易怒、抑郁）",
        "type": "select",
        "weight": 2,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": "严重（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "抑郁疑心",
        "type": "select",
        "weight": 1,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": "严重（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "眩晕",
        "type": "select",
        "weight": 1,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": "严重影响生活（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "疲乏",
        "type": "select",
        "weight": 1,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": "严重影响日常生活（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "骨关节痛",
        "type": "select",
        "weight": 1,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": "功能障碍（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "头痛",
        "type": "select",
        "weight": 1,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": "严重（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "心悸",
        "type": "select",
        "weight": 1,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": "严重需治疗（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "皮肤蚁走感（感觉有虫子爬）",
        "type": "select",
        "weight": 1,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": "严重（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "性生活困难/性交痛",
        "type": "select",
        "weight": 1,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": "严重（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "泌尿系统症状（尿频、尿急、尿痛）",
        "type": "select",
        "weight": 1,
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "经常（2分）",
            "score": 2
          },
          {
            "text": "严重（3分）",
            "score": 3
          }
        ]
      }
    ],
    "scoring": {
      "formula": "kupperman",
      "note": "加权评分：潮热出汗×4，感觉异常/失眠/情绪波动×2，其余×1。总分=各项加权分之和",
      "levels": [
        {
          "min": 0,
          "max": 0,
          "label": "无更年期症状",
          "color": "green"
        },
        {
          "min": 1,
          "max": 15,
          "label": "轻度更年期症状",
          "color": "yellow"
        },
        {
          "min": 16,
          "max": 30,
          "label": "中度更年期症状",
          "color": "orange"
        },
        {
          "min": 31,
          "max": 63,
          "label": "重度更年期症状",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "psqi",
    "name": "匹兹堡睡眠质量指数(PSQI)",
    "category": "睡眠评估",
    "description": "评估近一个月的睡眠质量，7个因子分+总分，总分>7分提示睡眠质量差",
    "questions": [
      {
        "text": "近一个月，您每晚通常几点上床睡觉？（时:分）",
        "type": "input",
        "inputType": "time",
        "factor": "sleepLatency"
      },
      {
        "text": "近一个月，您每晚通常需要多久才能入睡？（分钟）",
        "type": "input",
        "inputType": "number",
        "factor": "sleepLatency",
        "options": [
          {
            "text": "≤15分钟（0分）",
            "score": 0
          },
          {
            "text": "16-30分钟（1分）",
            "score": 1
          },
          {
            "text": "31-60分钟（2分）",
            "score": 2
          },
          {
            "text": ">60分钟（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "近一个月，您每天早上通常几点起床？（时:分）",
        "type": "input",
        "inputType": "time",
        "factor": "sleepDuration"
      },
      {
        "text": "近一个月，您每晚实际睡眠时间大约有几小时？",
        "type": "select",
        "factor": "sleepDuration",
        "options": [
          {
            "text": ">7小时（0分）",
            "score": 0
          },
          {
            "text": "6-7小时（1分）",
            "score": 1
          },
          {
            "text": "5-6小时（2分）",
            "score": 2
          },
          {
            "text": "<5小时（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "近一个月，您是否因以下原因导致睡眠不好？①入睡困难（30分钟内不能入睡）",
        "type": "select",
        "factor": "sleepDisturbance",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "<1次/周（1分）",
            "score": 1
          },
          {
            "text": "1-2次/周（2分）",
            "score": 2
          },
          {
            "text": "≥3次/周（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "②夜间易醒或早醒",
        "type": "select",
        "factor": "sleepDisturbance",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "<1次/周（1分）",
            "score": 1
          },
          {
            "text": "1-2次/周（2分）",
            "score": 2
          },
          {
            "text": "≥3次/周（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "③夜间需要起床如厕",
        "type": "select",
        "factor": "sleepDisturbance",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "<1次/周（1分）",
            "score": 1
          },
          {
            "text": "1-2次/周（2分）",
            "score": 2
          },
          {
            "text": "≥3次/周（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "④感觉呼吸不畅",
        "type": "select",
        "factor": "sleepDisturbance",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "<1次/周（1分）",
            "score": 1
          },
          {
            "text": "1-2次/周（2分）",
            "score": 2
          },
          {
            "text": "≥3次/周（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "⑤大声咳嗽或打鼾",
        "type": "select",
        "factor": "sleepDisturbance",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "<1次/周（1分）",
            "score": 1
          },
          {
            "text": "1-2次/周（2分）",
            "score": 2
          },
          {
            "text": "≥3次/周（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "⑥感觉太冷或太热",
        "type": "select",
        "factor": "sleepDisturbance",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "<1次/周（1分）",
            "score": 1
          },
          {
            "text": "1-2次/周（2分）",
            "score": 2
          },
          {
            "text": "≥3次/周（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "⑦做噩梦",
        "type": "select",
        "factor": "sleepDisturbance",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "<1次/周（1分）",
            "score": 1
          },
          {
            "text": "1-2次/周（2分）",
            "score": 2
          },
          {
            "text": "≥3次/周（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "⑧身体疼痛不适",
        "type": "select",
        "factor": "sleepDisturbance",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "<1次/周（1分）",
            "score": 1
          },
          {
            "text": "1-2次/周（2分）",
            "score": 2
          },
          {
            "text": "≥3次/周（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "⑨其他原因（请说明）",
        "type": "select",
        "factor": "sleepDisturbance",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "<1次/周（1分）",
            "score": 1
          },
          {
            "text": "1-2次/周（2分）",
            "score": 2
          },
          {
            "text": "≥3次/周（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "近一个月，您是否需要服药（包括处方药、非处方药）才能入睡？",
        "type": "select",
        "factor": "sleepMedication",
        "options": [
          {
            "text": "无（0分）",
            "score": 0
          },
          {
            "text": "<1次/周（1分）",
            "score": 1
          },
          {
            "text": "1-2次/周（2分）",
            "score": 2
          },
          {
            "text": "≥3次/周（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "近一个月，您在开车、吃饭或参加社交活动时，能否保持清醒？",
        "type": "select",
        "factor": "daytimeDysfunction",
        "options": [
          {
            "text": "没有困倦（0分）",
            "score": 0
          },
          {
            "text": "偶尔困倦（1分）",
            "score": 1
          },
          {
            "text": "经常困倦（2分）",
            "score": 2
          },
          {
            "text": "非常困倦（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "近一个月，您做事情是否感觉精力不足？",
        "type": "select",
        "factor": "daytimeDysfunction",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "偶尔（1分）",
            "score": 1
          },
          {
            "text": "有时（2分）",
            "score": 2
          },
          {
            "text": "经常（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "总体睡眠质量评价",
        "type": "select",
        "factor": "subjectiveQuality",
        "options": [
          {
            "text": "很好（0分）",
            "score": 0
          },
          {
            "text": "较好（1分）",
            "score": 1
          },
          {
            "text": "较差（2分）",
            "score": 2
          },
          {
            "text": "很差（3分）",
            "score": 3
          }
        ]
      }
    ],
    "scoring": {
      "formula": "psqi",
      "note": "7个因子分（主观睡眠质量/潜伏期/持续时间/效率/障碍/催眠药物/日间功能障碍），每因子0-3分，总分0-21分",
      "levels": [
        {
          "min": 0,
          "max": 4,
          "label": "睡眠质量良好",
          "color": "green"
        },
        {
          "min": 5,
          "max": 7,
          "label": "睡眠质量一般",
          "color": "yellow"
        },
        {
          "min": 8,
          "max": 14,
          "label": "睡眠质量较差",
          "color": "orange"
        },
        {
          "min": 15,
          "max": 21,
          "label": "睡眠质量很差",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "pgi_sleep",
    "name": "睡眠障碍评估量表(PGI-S SD/PGI-C SD)",
    "category": "睡眠评估",
    "description": "患者全局印象量表-睡眠障碍严重度和改善度评估",
    "questions": [
      {
        "text": "您目前的睡眠障碍严重程度如何？(PGI-S SD)",
        "type": "select",
        "options": [
          {
            "text": "正常，没有睡眠问题（0分）",
            "score": 0
          },
          {
            "text": "轻度睡眠障碍（1分）",
            "score": 1
          },
          {
            "text": "中度睡眠障碍（2分）",
            "score": 2
          },
          {
            "text": "重度睡眠障碍（3分）",
            "score": 3
          },
          {
            "text": "非常严重的睡眠障碍（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "与治疗前相比，您的睡眠状况改善程度如何？(PGI-C SD)",
        "type": "select",
        "options": [
          {
            "text": "改善非常明显（1分）",
            "score": 1
          },
          {
            "text": "明显改善（2分）",
            "score": 2
          },
          {
            "text": "略有改善（3分）",
            "score": 3
          },
          {
            "text": "没有变化（4分）",
            "score": 4
          },
          {
            "text": "略有加重（5分）",
            "score": 5
          },
          {
            "text": "明显加重（6分）",
            "score": 6
          },
          {
            "text": "加重非常明显（7分）",
            "score": 7
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sum",
      "maxScore": 11,
      "levels": [
        {
          "min": 0,
          "max": 1,
          "label": "睡眠正常",
          "color": "green"
        },
        {
          "min": 2,
          "max": 4,
          "label": "轻度睡眠障碍",
          "color": "yellow"
        },
        {
          "min": 5,
          "max": 7,
          "label": "中度睡眠障碍",
          "color": "orange"
        },
        {
          "min": 8,
          "max": 11,
          "label": "重度睡眠障碍",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "mna_sf",
    "name": "微型营养评定法简表(MNA-SF)",
    "category": "营养评估",
    "description": "老年人营养筛查工具，6项快速筛查，≥12分正常",
    "questions": [
      {
        "text": "近三个月食欲变化",
        "type": "select",
        "options": [
          {
            "text": "严重食欲下降（0分）",
            "score": 0
          },
          {
            "text": "中度食欲下降（1分）",
            "score": 1
          },
          {
            "text": "食欲无变化（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "近三个月体重变化",
        "type": "select",
        "options": [
          {
            "text": "体重下降>3kg（0分）",
            "score": 0
          },
          {
            "text": "不知道（1分）",
            "score": 1
          },
          {
            "text": "体重下降1-3kg（2分）",
            "score": 2
          },
          {
            "text": "体重无变化（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "活动能力",
        "type": "select",
        "options": [
          {
            "text": "卧床或轮椅（0分）",
            "score": 0
          },
          {
            "text": "可下床但不能外出（1分）",
            "score": 1
          },
          {
            "text": "可自由外出（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "近三个月有无精神心理创伤或急性疾病",
        "type": "select",
        "options": [
          {
            "text": "有严重精神创伤或急性疾病（0分）",
            "score": 0
          },
          {
            "text": "有轻度精神创伤（1分）",
            "score": 1
          },
          {
            "text": "无（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "神经精神问题",
        "type": "select",
        "options": [
          {
            "text": "严重痴呆或抑郁（0分）",
            "score": 0
          },
          {
            "text": "轻度痴呆（1分）",
            "score": 1
          },
          {
            "text": "无精神问题（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "BMI（体质指数）或小腿围",
        "type": "select",
        "options": [
          {
            "text": "BMI<19 或 小腿围<31cm（0分）",
            "score": 0
          },
          {
            "text": "BMI 19-21 或 小腿围31-35cm（1分）",
            "score": 1
          },
          {
            "text": "BMI 21-23 或 小腿围>35cm（2分）",
            "score": 2
          },
          {
            "text": "BMI≥23（3分）",
            "score": 3
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sum",
      "maxScore": 14,
      "levels": [
        {
          "min": 12,
          "max": 14,
          "label": "正常营养状态",
          "color": "green"
        },
        {
          "min": 8,
          "max": 11,
          "label": "有营养不良风险",
          "color": "yellow"
        },
        {
          "min": 0,
          "max": 7,
          "label": "营养不良",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "mna",
    "name": "MNA迷你营养评估（完整版）",
    "category": "营养评估",
    "description": "18项完整营养评估，≥24分正常，17-23.5分风险，<17分营养不良",
    "questions": [
      {
        "text": "近三个月食欲下降",
        "type": "select",
        "options": [
          {
            "text": "严重下降（0分）",
            "score": 0
          },
          {
            "text": "中度下降（1分）",
            "score": 1
          },
          {
            "text": "无变化（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "近三个月体重变化",
        "type": "select",
        "options": [
          {
            "text": ">3kg（0分）",
            "score": 0
          },
          {
            "text": "不知道（1分）",
            "score": 1
          },
          {
            "text": "1-3kg（2分）",
            "score": 2
          },
          {
            "text": "无（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "活动能力",
        "type": "select",
        "options": [
          {
            "text": "卧床（0分）",
            "score": 0
          },
          {
            "text": "可下床但不能外出（1分）",
            "score": 1
          },
          {
            "text": "可自由外出（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "近三个月有无精神创伤或急性疾病",
        "type": "select",
        "options": [
          {
            "text": "有（0分）",
            "score": 0
          },
          {
            "text": "无（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "神经精神问题",
        "type": "select",
        "options": [
          {
            "text": "严重痴呆（0分）",
            "score": 0
          },
          {
            "text": "轻度痴呆（1分）",
            "score": 1
          },
          {
            "text": "无（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "BMI（体质指数）",
        "type": "select",
        "options": [
          {
            "text": "<19（0分）",
            "score": 0
          },
          {
            "text": "19-21（1分）",
            "score": 1
          },
          {
            "text": "21-23（2分）",
            "score": 2
          },
          {
            "text": "≥23（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "能否独立生活（不需他人帮助进食）",
        "type": "select",
        "options": [
          {
            "text": "不能（0分）",
            "score": 0
          },
          {
            "text": "能（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "每天服用处方药数量",
        "type": "select",
        "options": [
          {
            "text": ">3种（0分）",
            "score": 0
          },
          {
            "text": "1-3种（1分）",
            "score": 1
          },
          {
            "text": "无（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "有无压疮或皮肤溃疡",
        "type": "select",
        "options": [
          {
            "text": "有（0分）",
            "score": 0
          },
          {
            "text": "无（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "每天进餐次数",
        "type": "select",
        "options": [
          {
            "text": "1餐（0分）",
            "score": 0
          },
          {
            "text": "2餐（1分）",
            "score": 1
          },
          {
            "text": "3餐（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "蛋白质摄入：每天至少摄入乳制品、豆类、蛋、肉、鱼中的几种？",
        "type": "select",
        "options": [
          {
            "text": "0-1种（0分）",
            "score": 0
          },
          {
            "text": "2种（0.5分）",
            "score": 0.5
          },
          {
            "text": "3种及以上（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "每天是否食用至少2份水果或蔬菜",
        "type": "select",
        "options": [
          {
            "text": "否（0分）",
            "score": 0
          },
          {
            "text": "是（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "每天饮水量（杯）",
        "type": "select",
        "options": [
          {
            "text": "<3杯（0分）",
            "score": 0
          },
          {
            "text": "3-5杯（0.5分）",
            "score": 0.5
          },
          {
            "text": ">5杯（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "进食方式",
        "type": "select",
        "options": [
          {
            "text": "需帮助（0分）",
            "score": 0
          },
          {
            "text": "自行进食但有困难（1分）",
            "score": 1
          },
          {
            "text": "完全自行进食（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "对自己营养状况的看法",
        "type": "select",
        "options": [
          {
            "text": "认为自己营养不良（0分）",
            "score": 0
          },
          {
            "text": "不确定（1分）",
            "score": 1
          },
          {
            "text": "认为自己营养良好（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "与同龄人比较，认为自己的营养状况",
        "type": "select",
        "options": [
          {
            "text": "不太好（0分）",
            "score": 0
          },
          {
            "text": "不知道（0.5分）",
            "score": 0.5
          },
          {
            "text": "差不多（1分）",
            "score": 1
          },
          {
            "text": "更好（2分）",
            "score": 2
          }
        ]
      },
      {
        "text": "上臂围（MAC）",
        "type": "select",
        "options": [
          {
            "text": "<21cm（0分）",
            "score": 0
          },
          {
            "text": "21-22cm（0.5分）",
            "score": 0.5
          },
          {
            "text": ">22cm（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "小腿围（CC）",
        "type": "select",
        "options": [
          {
            "text": "<31cm（0分）",
            "score": 0
          },
          {
            "text": "≥31cm（1分）",
            "score": 1
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sum",
      "maxScore": 30,
      "levels": [
        {
          "min": 24,
          "max": 30,
          "label": "正常营养状态",
          "color": "green"
        },
        {
          "min": 17,
          "max": 23.5,
          "label": "有营养不良风险",
          "color": "yellow"
        },
        {
          "min": 0,
          "max": 16.5,
          "label": "营养不良",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "osteoporosis_one_min",
    "name": "骨质疏松一分钟测试题",
    "category": "骨骼评估",
    "description": "国际骨质疏松基金会(IOF)骨质疏松风险快速筛查，有1项为'是'即有风险",
    "questions": [
      {
        "text": "您是否曾经因为轻微碰撞或跌倒就会伤到自己的骨骼？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您的父母有没有过轻微碰撞或跌倒就发生髋部骨折的情况？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您经常连续3个月以上服用可的松等皮质类固醇激素吗？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您的身高是否降低了3厘米以上？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您经常过度饮酒吗？（超过2个单位/天）",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您每天吸烟超过20支吗？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您经常腹泻吗？（由于腹腔疾病或肠炎引起）",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "女性：您是否在45岁之前绝经？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "女性：您是否曾有过连续12个月以上没有月经（除怀孕外）？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "男性：您是否患有阳痿或缺乏性欲？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sum",
      "maxScore": 10,
      "note": "任何1项回答'是'即提示存在骨质疏松风险",
      "levels": [
        {
          "min": 0,
          "max": 0,
          "label": "暂无明显骨质疏松风险",
          "color": "green"
        },
        {
          "min": 1,
          "max": 3,
          "label": "存在骨质疏松风险，建议进一步检查",
          "color": "yellow"
        },
        {
          "min": 4,
          "max": 10,
          "label": "骨质疏松高风险，建议尽快做骨密度检测",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "osta",
    "name": "OSTA亚洲人骨质疏松自我筛查工具",
    "category": "骨骼评估",
    "description": "基于体重和年龄快速评估骨质疏松风险，OSTA指数=(体重kg-年龄)×0.2",
    "questions": [
      {
        "text": "您的年龄（岁）",
        "type": "input",
        "inputType": "number",
        "unit": "岁",
        "factor": "age"
      },
      {
        "text": "您的体重（kg）",
        "type": "input",
        "inputType": "number",
        "unit": "kg",
        "factor": "weight"
      }
    ],
    "scoring": {
      "formula": "osta",
      "note": "OSTA指数=(体重kg-年龄)×0.2，取整数部分",
      "levels": [
        {
          "min": 0,
          "max": 100,
          "label": "低风险",
          "color": "green"
        },
        {
          "min": -4,
          "max": -1,
          "label": "中等风险",
          "color": "yellow"
        },
        {
          "min": -100,
          "max": -5,
          "label": "高风险",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "frax",
    "name": "FRAX骨折风险评估工具",
    "category": "骨骼评估",
    "description": "基于临床危险因素和骨密度评估10年骨折概率（简化版，建议使用WHO在线工具精确计算）",
    "questions": [
      {
        "text": "您的年龄",
        "type": "input",
        "inputType": "number",
        "unit": "岁",
        "factor": "age"
      },
      {
        "text": "您的性别",
        "type": "select",
        "options": [
          {
            "text": "女性",
            "score": 0
          },
          {
            "text": "男性",
            "score": 0
          }
        ],
        "factor": "gender"
      },
      {
        "text": "既往是否有脆性骨折史（成人后轻微外力即骨折）",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "父母是否有髋部骨折史",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "目前是否使用糖皮质激素（泼尼松≥5mg/天，超过3个月）",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "是否患有类风湿关节炎",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "是否患有继发性骨质疏松（1型糖尿病/甲亢/慢性肝病等）",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "每天饮酒是否超过3个单位",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "目前是否吸烟",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "体重（kg）",
        "type": "input",
        "inputType": "number",
        "unit": "kg",
        "factor": "weight"
      },
      {
        "text": "身高（cm）",
        "type": "input",
        "inputType": "number",
        "unit": "cm",
        "factor": "height"
      },
      {
        "text": "是否有股骨颈BMD（骨密度）T值数据？（如有请输入）",
        "type": "input",
        "inputType": "number",
        "unit": "T值",
        "factor": "bmd_t"
      }
    ],
    "scoring": {
      "formula": "frax",
      "note": "风险因子计数，建议使用WHO FRAX在线工具精确计算10年骨折概率。此处为简化评估",
      "levels": [
        {
          "min": 0,
          "max": 1,
          "label": "低风险（建议定期筛查）",
          "color": "green"
        },
        {
          "min": 2,
          "max": 3,
          "label": "中等风险（建议骨密度检测）",
          "color": "yellow"
        },
        {
          "min": 4,
          "max": 10,
          "label": "高风险（建议骨密度检测+干预）",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "pfdi20",
    "name": "盆底功能障碍问卷(PFDI-20)",
    "category": "盆底评估",
    "description": "20题3个分量表：盆底脱垂6题+肠道8题+泌尿6题",
    "questions": [
      {
        "text": "【盆底脱垂量表-1】您是否感觉阴道有包块或下坠感？",
        "type": "select",
        "group": "popdi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【盆底脱垂量表-2】您是否需要压迫阴道或会阴部来协助排便？",
        "type": "select",
        "group": "popdi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【盆底脱垂量表-3】您是否感觉下腹部有压迫感？",
        "type": "select",
        "group": "popdi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【盆底脱垂量表-4】您是否经常感到下腰部疼痛？",
        "type": "select",
        "group": "popdi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【盆底脱垂量表-5】您是否存在阴道或会阴部的压迫感导致无法正常站立？",
        "type": "select",
        "group": "popdi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【盆底脱垂量表-6】是否有阴道内压迫感或看到/感到阴道有肿物脱出？",
        "type": "select",
        "group": "popdi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【肠道量表-1】您是否经常排便困难？",
        "type": "select",
        "group": "cradi8",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【肠道量表-2】您是否经常需要用力排便？",
        "type": "select",
        "group": "cradi8",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【肠道量表-3】您排便时是否感到排便不完全？",
        "type": "select",
        "group": "cradi8",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【肠道量表-4】您是否无法在15分钟内完成排便？",
        "type": "select",
        "group": "cradi8",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【肠道量表-5】您排便时是否需要用手帮助（按压会阴/阴道）？",
        "type": "select",
        "group": "cradi8",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【肠道量表-6】您是否存在粪便失禁（无法控制排便）？",
        "type": "select",
        "group": "cradi8",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【肠道量表-7】您是否存在急迫性排便（来不及到厕所）？",
        "type": "select",
        "group": "cradi8",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【肠道量表-8】您排便时是否有疼痛？",
        "type": "select",
        "group": "cradi8",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【泌尿量表-1】您是否经常尿频（2小时内再次排尿）？",
        "type": "select",
        "group": "udi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【泌尿量表-2】您是否有尿急感？",
        "type": "select",
        "group": "udi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【泌尿量表-3】您是否有压力性尿失禁（咳嗽/打喷嚏/运动时漏尿）？",
        "type": "select",
        "group": "udi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【泌尿量表-4】您是否有急迫性尿失禁（来不及到厕所就漏尿）？",
        "type": "select",
        "group": "udi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【泌尿量表-5】您是否有少量漏尿（无明显诱因）？",
        "type": "select",
        "group": "udi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "【泌尿量表-6】您排尿时是否有疼痛或不适？",
        "type": "select",
        "group": "udi6",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "有，但不影响生活（1分）",
            "score": 1
          },
          {
            "text": "有，有些影响（2分）",
            "score": 2
          },
          {
            "text": "有，相当影响（3分）",
            "score": 3
          },
          {
            "text": "有，严重影响（4分）",
            "score": 4
          }
        ]
      }
    ],
    "scoring": {
      "formula": "pfdi20",
      "note": "3个分量表分别计算均分×25，POPDI-6（盆底脱垂）、CRADI-8（肠道）、UDI-6（泌尿），总分=3个分量表分之和",
      "levels": [
        {
          "min": 0,
          "max": 25,
          "label": "轻度盆底功能障碍",
          "color": "green"
        },
        {
          "min": 26,
          "max": 50,
          "label": "中度盆底功能障碍",
          "color": "yellow"
        },
        {
          "min": 51,
          "max": 75,
          "label": "中重度盆底功能障碍",
          "color": "orange"
        },
        {
          "min": 76,
          "max": 300,
          "label": "重度盆底功能障碍",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "pfiq7",
    "name": "盆底障碍影响问卷(PFIQ-7)",
    "category": "盆底评估",
    "description": "3个分量表各7题，评估盆底症状对日常生活的影响",
    "questions": [
      {
        "text": "【肠道相关-1】排便问题是否影响您做家务？",
        "type": "select",
        "group": "crai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【肠道相关-2】排便问题是否影响您的体力活动？",
        "type": "select",
        "group": "crai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【肠道相关-3】排便问题是否影响您参加娱乐活动？",
        "type": "select",
        "group": "crai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【肠道相关-4】排便问题是否影响您出行？",
        "type": "select",
        "group": "crai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【肠道相关-5】排便问题是否影响您的社交活动？",
        "type": "select",
        "group": "crai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【肠道相关-6】排便问题是否影响您的情感受挫？",
        "type": "select",
        "group": "crai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【肠道相关-7】排便问题是否使您感到沮丧？",
        "type": "select",
        "group": "crai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【泌尿相关-1】排尿问题是否影响您做家务？",
        "type": "select",
        "group": "urai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【泌尿相关-2】排尿问题是否影响您的体力活动？",
        "type": "select",
        "group": "urai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【泌尿相关-3】排尿问题是否影响您参加娱乐活动？",
        "type": "select",
        "group": "urai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【泌尿相关-4】排尿问题是否影响您出行？",
        "type": "select",
        "group": "urai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【泌尿相关-5】排尿问题是否影响您的社交活动？",
        "type": "select",
        "group": "urai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【泌尿相关-6】排尿问题是否影响您的情感受挫？",
        "type": "select",
        "group": "urai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【泌尿相关-7】排尿问题是否使您感到沮丧？",
        "type": "select",
        "group": "urai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【盆腔相关-1】盆腔问题是否影响您做家务？",
        "type": "select",
        "group": "prai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【盆腔相关-2】盆腔问题是否影响您的体力活动？",
        "type": "select",
        "group": "prai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【盆腔相关-3】盆腔问题是否影响您参加娱乐活动？",
        "type": "select",
        "group": "prai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【盆腔相关-4】盆腔问题是否影响您出行？",
        "type": "select",
        "group": "prai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【盆腔相关-5】盆腔问题是否影响您的社交活动？",
        "type": "select",
        "group": "prai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【盆腔相关-6】盆腔问题是否影响您的情感受挫？",
        "type": "select",
        "group": "prai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "【盆腔相关-7】盆腔问题是否使您感到沮丧？",
        "type": "select",
        "group": "prai7",
        "options": [
          {
            "text": "完全没有（0分）",
            "score": 0
          },
          {
            "text": "有点（1分）",
            "score": 1
          },
          {
            "text": "中度（2分）",
            "score": 2
          },
          {
            "text": "相当多（3分）",
            "score": 3
          }
        ]
      }
    ],
    "scoring": {
      "formula": "pfiq7",
      "note": "3个分量表(肠道/泌尿/盆腔)各7题，各量表均分×100/3，总分=3个量表分之和",
      "levels": [
        {
          "min": 0,
          "max": 50,
          "label": "轻度影响",
          "color": "green"
        },
        {
          "min": 51,
          "max": 150,
          "label": "中度影响",
          "color": "yellow"
        },
        {
          "min": 151,
          "max": 250,
          "label": "中重度影响",
          "color": "orange"
        },
        {
          "min": 251,
          "max": 300,
          "label": "重度影响",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "iciq_sf",
    "name": "尿失禁评分(ICIQ-SF)",
    "category": "盆底评估",
    "description": "国际尿失禁咨询委员会尿失禁问卷简表，4题+自我评价",
    "questions": [
      {
        "text": "您漏尿的频率如何？",
        "type": "select",
        "options": [
          {
            "text": "从不（0分）",
            "score": 0
          },
          {
            "text": "约一周一次（1分）",
            "score": 1
          },
          {
            "text": "一周2-3次（2分）",
            "score": 2
          },
          {
            "text": "约每天一次（3分）",
            "score": 3
          },
          {
            "text": "一天数次（4分）",
            "score": 4
          },
          {
            "text": "一直漏尿（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您每次漏尿的量通常是多少？",
        "type": "select",
        "options": [
          {
            "text": "不漏尿（0分）",
            "score": 0
          },
          {
            "text": "少量（1分）",
            "score": 1
          },
          {
            "text": "中等量（2分）",
            "score": 2
          },
          {
            "text": "大量（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "总体而言，漏尿对您日常生活的影响程度如何？",
        "type": "select",
        "options": [
          {
            "text": "0（无影响）",
            "score": 0
          },
          {
            "text": "1",
            "score": 1
          },
          {
            "text": "2",
            "score": 2
          },
          {
            "text": "3",
            "score": 3
          },
          {
            "text": "4",
            "score": 4
          },
          {
            "text": "5",
            "score": 5
          },
          {
            "text": "6",
            "score": 6
          },
          {
            "text": "7",
            "score": 7
          },
          {
            "text": "8",
            "score": 8
          },
          {
            "text": "9",
            "score": 9
          },
          {
            "text": "10（极大影响）",
            "score": 10
          }
        ]
      },
      {
        "text": "您何时出现漏尿？（可多选，选最主要的）",
        "type": "select",
        "options": [
          {
            "text": "从不漏尿（0分）",
            "score": 0
          },
          {
            "text": "在咳嗽或打喷嚏时（1分）",
            "score": 1
          },
          {
            "text": "在运动/行走时（2分）",
            "score": 2
          },
          {
            "text": "在着急赶去厕所时（3分）",
            "score": 3
          },
          {
            "text": "在无明显原因时（4分）",
            "score": 4
          },
          {
            "text": "在睡眠中（5分）",
            "score": 5
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sum",
      "maxScore": 21,
      "levels": [
        {
          "min": 0,
          "max": 0,
          "label": "无尿失禁",
          "color": "green"
        },
        {
          "min": 1,
          "max": 5,
          "label": "轻度尿失禁",
          "color": "yellow"
        },
        {
          "min": 6,
          "max": 12,
          "label": "中度尿失禁",
          "color": "orange"
        },
        {
          "min": 13,
          "max": 21,
          "label": "重度尿失禁",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "parq",
    "name": "全人群体力活动准备问卷(PAR-Q+)",
    "category": "运动评估",
    "description": "运动前安全筛查，任一题回答'是'需咨询医生后再运动",
    "questions": [
      {
        "text": "医生是否曾经告诉过您有心脏问题？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您在日常活动时是否感到胸痛？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您在过去一个月内是否曾因头晕失去平衡或失去意识？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您是否正在服用降血压药物或心脏病药物？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您是否曾经被告知有其他不应进行体力活动的原因？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您是否正在服用处方药？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      },
      {
        "text": "您是否有骨关节问题（如关节炎）可能因体力活动而加重？",
        "type": "select",
        "options": [
          {
            "text": "是",
            "score": 1
          },
          {
            "text": "否",
            "score": 0
          }
        ]
      }
    ],
    "scoring": {
      "formula": "parq",
      "note": "有任何1项为'是'，建议先咨询医生再进行运动",
      "levels": [
        {
          "min": 0,
          "max": 0,
          "label": "可以安全进行体力活动",
          "color": "green"
        },
        {
          "min": 1,
          "max": 7,
          "label": "需要先咨询医生再运动",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "exercise_prescription",
    "name": "运动处方模板",
    "category": "运动评估",
    "description": "根据评估结果生成运动处方建议（FITT原则：频率/强度/时间/类型）",
    "questions": [
      {
        "text": "您目前的运动频率",
        "type": "select",
        "options": [
          {
            "text": "从不运动（0分）",
            "score": 0
          },
          {
            "text": "偶尔运动（1分）",
            "score": 1
          },
          {
            "text": "每周1-2次（2分）",
            "score": 2
          },
          {
            "text": "每周3-5次（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "您每次运动的持续时间",
        "type": "select",
        "options": [
          {
            "text": "不运动（0分）",
            "score": 0
          },
          {
            "text": "<10分钟（1分）",
            "score": 1
          },
          {
            "text": "10-30分钟（2分）",
            "score": 2
          },
          {
            "text": ">30分钟（3分）",
            "score": 3
          }
        ]
      },
      {
        "text": "您偏好的运动类型（可多选，此处选最主要的）",
        "type": "select",
        "options": [
          {
            "text": "散步/快走",
            "score": 0
          },
          {
            "text": "游泳/水中运动",
            "score": 0
          },
          {
            "text": "瑜伽/太极",
            "score": 0
          },
          {
            "text": "力量训练",
            "score": 0
          },
          {
            "text": "骑车",
            "score": 0
          },
          {
            "text": "跳舞",
            "score": 0
          }
        ]
      },
      {
        "text": "您是否有运动中不适的经历",
        "type": "select",
        "options": [
          {
            "text": "没有",
            "score": 0
          },
          {
            "text": "偶尔有轻微不适",
            "score": 1
          },
          {
            "text": "经常不适",
            "score": 2
          },
          {
            "text": "严重不适需要停止",
            "score": 3
          }
        ]
      }
    ],
    "scoring": {
      "formula": "exercise",
      "note": "根据评估结果生成运动处方建议",
      "levels": [
        {
          "min": 0,
          "max": 2,
          "label": "久坐不动，建议循序渐进开始运动",
          "color": "red"
        },
        {
          "min": 3,
          "max": 5,
          "label": "运动不足，建议增加运动频率和时间",
          "color": "yellow"
        },
        {
          "min": 6,
          "max": 9,
          "label": "运动习惯尚可，建议坚持并适当增加强度",
          "color": "green"
        }
      ]
    }
  },
  {
    "id": "tcm_constitution",
    "name": "中医体质量表（27条版）",
    "category": "待补充",
    "description": "根据GB/T46939-2025标准，辨识9种中医体质类型：平和质、气虚质、阳虚质、阴虚质、痰湿质、湿热质、血瘀质、气郁质、特禀质",
    "questions": [
      {
        "text": "您精力充沛吗？",
        "type": "select",
        "constitution": "pinghe",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您容易疲乏吗？",
        "type": "select",
        "constitution": "qixu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您容易气短（呼吸短促、接不上气）吗？",
        "type": "select",
        "constitution": "qixu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您容易心慌吗？",
        "type": "select",
        "constitution": "qixu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您容易头晕或站起时晕眩吗？",
        "type": "select",
        "constitution": "xueyu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您容易感冒吗？",
        "type": "select",
        "constitution": "qixu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您喜欢安静、懒得说话吗？",
        "type": "select",
        "constitution": "qixu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您说话声音低弱无力吗？",
        "type": "select",
        "constitution": "qixu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您容易出虚汗吗？",
        "type": "select",
        "constitution": "yangxu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您手脚发凉吗？",
        "type": "select",
        "constitution": "yangxu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您胃部/背部/腰部/膝部怕冷吗？",
        "type": "select",
        "constitution": "yangxu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您比一般人耐受不了寒冷吗？",
        "type": "select",
        "constitution": "yangxu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您吃（喝）凉的东西会感到不舒服或怕吃凉的吗？",
        "type": "select",
        "constitution": "yangxu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您受凉或吃（喝）凉的东西后容易拉肚子吗？",
        "type": "select",
        "constitution": "yangxu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您感到身体沉重不轻松或不爽快吗？",
        "type": "select",
        "constitution": "tanshi",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您感到额头部位油脂分泌多吗？",
        "type": "select",
        "constitution": "shire",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您上眼皮比别人肿（上眼皮有轻微隆起）吗？",
        "type": "select",
        "constitution": "tanshi",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您嘴里有黏黏的感觉吗？",
        "type": "select",
        "constitution": "tanshi",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您平时痰多，特别是感到咽喉部总有痰堵着吗？",
        "type": "select",
        "constitution": "tanshi",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您舌苔厚腻或有舌苔厚厚的感觉吗？",
        "type": "select",
        "constitution": "tanshi",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您面部/鼻部有油腻感或者油亮发光吗？",
        "type": "select",
        "constitution": "shire",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您易生痤疮或疮疖吗？",
        "type": "select",
        "constitution": "shire",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您感到口苦或嘴里有异味吗？",
        "type": "select",
        "constitution": "shire",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您大便黏滞不爽、有解不尽的感觉吗？",
        "type": "select",
        "constitution": "shire",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您小便时尿道有发热感、尿色浓（深）吗？",
        "type": "select",
        "constitution": "shire",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您皮肤常在不知不觉中出现青紫瘀斑（皮下出血）吗？",
        "type": "select",
        "constitution": "xueyu",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "您皮肤常有什么表现？",
        "type": "select",
        "constitution": "tebing",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "经常（4分）",
            "score": 4
          },
          {
            "text": "总是（5分）",
            "score": 5
          }
        ]
      }
    ],
    "scoring": {
      "formula": "tcm",
      "note": "各体质转化分=(该体质条目得分-该体质条目数)/(该体质条目数×4)×100，平和质≥60且其他体质<30为平和质，某偏颇体质≥30为该体质，30-39为倾向",
      "constitutions": [
        "pinghe",
        "qixu",
        "yangxu",
        "yinxu",
        "tanshi",
        "shire",
        "xueyu",
        "qiyu",
        "tebing"
      ],
      "constitutionNames": {
        "pinghe": "平和质",
        "qixu": "气虚质",
        "yangxu": "阳虚质",
        "yinxu": "阴虚质",
        "tanshi": "痰湿质",
        "shire": "湿热质",
        "xueyu": "血瘀质",
        "qiyu": "气郁质",
        "tebing": "特禀质"
      },
      "levels": [
        {
          "min": 0,
          "max": 100,
          "label": "详见体质辨识结果",
          "color": "green"
        }
      ]
    }
  },
  {
    "id": "menqol",
    "name": "MENQOL更年期生活质量量表",
    "category": "待补充",
    "description": "29题4个域（血管4题/心理9题/生理16题/性3题），评估更年期对生活质量的影响",
    "questions": [
      {
        "text": "【血管域-1】您是否有潮热？",
        "type": "select",
        "group": "vasomotor",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【血管域-2】您是否有夜间盗汗？",
        "type": "select",
        "group": "vasomotor",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【血管域-3】您是否有出汗？",
        "type": "select",
        "group": "vasomotor",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【血管域-4】您是否对寒冷或炎热不能耐受？",
        "type": "select",
        "group": "vasomotor",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【心理域-1】您是否感到不满意？",
        "type": "select",
        "group": "psychosocial",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【心理域-2】您是否有心脏不适感（心悸/心跳加快）？",
        "type": "select",
        "group": "psychosocial",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【心理域-3】您是否感到紧张？",
        "type": "select",
        "group": "psychosocial",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【心理域-4】您是否有睡眠困难？",
        "type": "select",
        "group": "psychosocial",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【心理域-5】您是否感到易激动？",
        "type": "select",
        "group": "psychosocial",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【心理域-6】您是否想要独处？",
        "type": "select",
        "group": "psychosocial",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【心理域-7】您是否有抑郁情绪？",
        "type": "select",
        "group": "psychosocial",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【心理域-8】您是否有哭泣发作？",
        "type": "select",
        "group": "psychosocial",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【心理域-9】您是否缺乏耐性？",
        "type": "select",
        "group": "psychosocial",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-1】您是否有皮肤干燥？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-2】您是否有体重增加？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-3】您是否有乳房胀痛？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-4】您是否有头痛？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-5】您是否有肌肉/关节疼痛？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-6】您是否有尿频/尿急？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-7】您是否有尿失禁？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-8】您是否有阴道干燥？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-9】您是否有腹胀？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-10】您是否有消化不良？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-11】您是否有背部/颈部疼痛？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-12】您是否感到体力下降？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-13】您是否有毛发/指甲变化？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-14】您是否有性欲减退？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-15】您是否有嗅觉/味觉变化？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【生理域-16】您是否感到记忆减退？",
        "type": "select",
        "group": "physical",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【性域-1】您是否有性交疼痛？",
        "type": "select",
        "group": "sexual",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【性域-2】您是否对性的兴趣有变化？",
        "type": "select",
        "group": "sexual",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      },
      {
        "text": "【性域-3】您的性满足感是否有变化？",
        "type": "select",
        "group": "sexual",
        "options": [
          {
            "text": "没有此问题（0分）",
            "score": 0
          },
          {
            "text": "有，但不困扰（1分）",
            "score": 1
          },
          {
            "text": "有，有些困扰（2分）",
            "score": 2
          },
          {
            "text": "有，非常困扰（3分）",
            "score": 3
          },
          {
            "text": "有，极度困扰（4分）",
            "score": 4
          },
          {
            "text": "有，无法忍受（5分）",
            "score": 5
          },
          {
            "text": "有，严重影响（6分）",
            "score": 6
          }
        ]
      }
    ],
    "scoring": {
      "formula": "menqol",
      "note": "4个域分别计算均分，总分=各域均分之和/4",
      "levels": [
        {
          "min": 0,
          "max": 1.5,
          "label": "更年期对生活质量影响较小",
          "color": "green"
        },
        {
          "min": 1.6,
          "max": 3,
          "label": "更年期对生活质量有一定影响",
          "color": "yellow"
        },
        {
          "min": 3.1,
          "max": 4.5,
          "label": "更年期对生活质量影响较大",
          "color": "orange"
        },
        {
          "min": 4.6,
          "max": 6,
          "label": "更年期对生活质量影响严重",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "fss",
    "name": "FSS疲劳严重度量表",
    "category": "待补充",
    "description": "9题7级评分，评估疲劳严重程度，平均分≥4分提示严重疲劳",
    "questions": [
      {
        "text": "当我感到疲劳时，我就什么事都不想做了",
        "type": "select",
        "options": [
          {
            "text": "非常不同意（1分）",
            "score": 1
          },
          {
            "text": "不同意（2分）",
            "score": 2
          },
          {
            "text": "有点不同意（3分）",
            "score": 3
          },
          {
            "text": "中立（4分）",
            "score": 4
          },
          {
            "text": "有点同意（5分）",
            "score": 5
          },
          {
            "text": "同意（6分）",
            "score": 6
          },
          {
            "text": "非常同意（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "锻炼让我感到疲劳",
        "type": "select",
        "options": [
          {
            "text": "非常不同意（1分）",
            "score": 1
          },
          {
            "text": "不同意（2分）",
            "score": 2
          },
          {
            "text": "有点不同意（3分）",
            "score": 3
          },
          {
            "text": "中立（4分）",
            "score": 4
          },
          {
            "text": "有点同意（5分）",
            "score": 5
          },
          {
            "text": "同意（6分）",
            "score": 6
          },
          {
            "text": "非常同意（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "我很容易疲劳",
        "type": "select",
        "options": [
          {
            "text": "非常不同意（1分）",
            "score": 1
          },
          {
            "text": "不同意（2分）",
            "score": 2
          },
          {
            "text": "有点不同意（3分）",
            "score": 3
          },
          {
            "text": "中立（4分）",
            "score": 4
          },
          {
            "text": "有点同意（5分）",
            "score": 5
          },
          {
            "text": "同意（6分）",
            "score": 6
          },
          {
            "text": "非常同意（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "疲劳使我的身体机能受到影响",
        "type": "select",
        "options": [
          {
            "text": "非常不同意（1分）",
            "score": 1
          },
          {
            "text": "不同意（2分）",
            "score": 2
          },
          {
            "text": "有点不同意（3分）",
            "score": 3
          },
          {
            "text": "中立（4分）",
            "score": 4
          },
          {
            "text": "有点同意（5分）",
            "score": 5
          },
          {
            "text": "同意（6分）",
            "score": 6
          },
          {
            "text": "非常同意（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "疲劳使我不能持续工作",
        "type": "select",
        "options": [
          {
            "text": "非常不同意（1分）",
            "score": 1
          },
          {
            "text": "不同意（2分）",
            "score": 2
          },
          {
            "text": "有点不同意（3分）",
            "score": 3
          },
          {
            "text": "中立（4分）",
            "score": 4
          },
          {
            "text": "有点同意（5分）",
            "score": 5
          },
          {
            "text": "同意（6分）",
            "score": 6
          },
          {
            "text": "非常同意（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "工作/学习时我感到疲劳",
        "type": "select",
        "options": [
          {
            "text": "非常不同意（1分）",
            "score": 1
          },
          {
            "text": "不同意（2分）",
            "score": 2
          },
          {
            "text": "有点不同意（3分）",
            "score": 3
          },
          {
            "text": "中立（4分）",
            "score": 4
          },
          {
            "text": "有点同意（5分）",
            "score": 5
          },
          {
            "text": "同意（6分）",
            "score": 6
          },
          {
            "text": "非常同意（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "疲劳影响我的工作/学习/家务/社交",
        "type": "select",
        "options": [
          {
            "text": "非常不同意（1分）",
            "score": 1
          },
          {
            "text": "不同意（2分）",
            "score": 2
          },
          {
            "text": "有点不同意（3分）",
            "score": 3
          },
          {
            "text": "中立（4分）",
            "score": 4
          },
          {
            "text": "有点同意（5分）",
            "score": 5
          },
          {
            "text": "同意（6分）",
            "score": 6
          },
          {
            "text": "非常同意（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "因为疲劳，我的思考能力下降",
        "type": "select",
        "options": [
          {
            "text": "非常不同意（1分）",
            "score": 1
          },
          {
            "text": "不同意（2分）",
            "score": 2
          },
          {
            "text": "有点不同意（3分）",
            "score": 3
          },
          {
            "text": "中立（4分）",
            "score": 4
          },
          {
            "text": "有点同意（5分）",
            "score": 5
          },
          {
            "text": "同意（6分）",
            "score": 6
          },
          {
            "text": "非常同意（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "疲劳是我最严重的症状之一",
        "type": "select",
        "options": [
          {
            "text": "非常不同意（1分）",
            "score": 1
          },
          {
            "text": "不同意（2分）",
            "score": 2
          },
          {
            "text": "有点不同意（3分）",
            "score": 3
          },
          {
            "text": "中立（4分）",
            "score": 4
          },
          {
            "text": "有点同意（5分）",
            "score": 5
          },
          {
            "text": "同意（6分）",
            "score": 6
          },
          {
            "text": "非常同意（7分）",
            "score": 7
          }
        ]
      }
    ],
    "scoring": {
      "formula": "fss",
      "note": "9题平均分，≥4分提示严重疲劳",
      "levels": [
        {
          "min": 1,
          "max": 2.9,
          "label": "无明显疲劳",
          "color": "green"
        },
        {
          "min": 3,
          "max": 3.9,
          "label": "轻度疲劳",
          "color": "yellow"
        },
        {
          "min": 4,
          "max": 5.4,
          "label": "中度疲劳",
          "color": "orange"
        },
        {
          "min": 5.5,
          "max": 7,
          "label": "严重疲劳",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "gsrs",
    "name": "GSRS胃肠道症状评定量表",
    "category": "待补充",
    "description": "15题7级评分，5个因子（反流/腹痛/消化不良/腹泻/便秘）",
    "questions": [
      {
        "text": "【反流因子-1】您是否有烧心感？",
        "type": "select",
        "group": "reflux",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【反流因子-2】您是否有反酸？",
        "type": "select",
        "group": "reflux",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【腹痛因子-1】您是否有上腹部疼痛？",
        "type": "select",
        "group": "pain",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【腹痛因子-2】您是否有上腹部不适？",
        "type": "select",
        "group": "pain",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【腹痛因子-3】您是否有饥饿痛？",
        "type": "select",
        "group": "pain",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【消化不良因子-1】您是否有恶心？",
        "type": "select",
        "group": "indigestion",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【消化不良因子-2】您是否有嗳气（打嗝）？",
        "type": "select",
        "group": "indigestion",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【消化不良因子-3】您是否有腹部胀气？",
        "type": "select",
        "group": "indigestion",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【消化不良因子-4】您是否有早饱感？",
        "type": "select",
        "group": "indigestion",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【腹泻因子-1】您是否有腹泻？",
        "type": "select",
        "group": "diarrhea",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【腹泻因子-2】您是否有稀便？",
        "type": "select",
        "group": "diarrhea",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【腹泻因子-3】您是否有排便急迫感？",
        "type": "select",
        "group": "diarrhea",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【便秘因子-1】您是否有便秘？",
        "type": "select",
        "group": "constipation",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【便秘因子-2】您是否有硬便？",
        "type": "select",
        "group": "constipation",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      },
      {
        "text": "【便秘因子-3】您是否有排便不尽感？",
        "type": "select",
        "group": "constipation",
        "options": [
          {
            "text": "没有（1分）",
            "score": 1
          },
          {
            "text": "非常轻微（2分）",
            "score": 2
          },
          {
            "text": "轻微（3分）",
            "score": 3
          },
          {
            "text": "中度（4分）",
            "score": 4
          },
          {
            "text": "较重（5分）",
            "score": 5
          },
          {
            "text": "重（6分）",
            "score": 6
          },
          {
            "text": "非常重（7分）",
            "score": 7
          }
        ]
      }
    ],
    "scoring": {
      "formula": "gsrs",
      "note": "5个因子分别计算均分：反流(2题)/腹痛(3题)/消化不良(4题)/腹泻(3题)/便秘(3题)",
      "levels": [
        {
          "min": 1,
          "max": 2,
          "label": "无明显胃肠道症状",
          "color": "green"
        },
        {
          "min": 2.1,
          "max": 3.5,
          "label": "轻度胃肠道症状",
          "color": "yellow"
        },
        {
          "min": 3.6,
          "max": 5,
          "label": "中度胃肠道症状",
          "color": "orange"
        },
        {
          "min": 5.1,
          "max": 7,
          "label": "重度胃肠道症状",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "fsfi",
    "name": "FSFI女性性功能指数",
    "category": "待补充",
    "description": "19题6个域（性欲/主观唤起/润滑/高潮/满意度/疼痛），总分≤26.55提示性功能障碍",
    "questions": [
      {
        "text": "【性欲域-1】在过去4周内，您多长时间感到一次性欲或对性生活有兴趣？",
        "type": "select",
        "group": "desire",
        "options": [
          {
            "text": "几乎总是或总是（5分）",
            "score": 5
          },
          {
            "text": "多数时候（4分）",
            "score": 4
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "几乎不或从不（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【性欲域-2】您如何评价自己的性欲水平？",
        "type": "select",
        "group": "desire",
        "options": [
          {
            "text": "非常高（5分）",
            "score": 5
          },
          {
            "text": "高（4分）",
            "score": 4
          },
          {
            "text": "中等（3分）",
            "score": 3
          },
          {
            "text": "低（2分）",
            "score": 2
          },
          {
            "text": "非常低或无（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【主观唤起域-1】在过去4周内，性活动或性交时，多长时间感到性唤起？",
        "type": "select",
        "group": "arousal",
        "options": [
          {
            "text": "几乎总是或总是（5分）",
            "score": 5
          },
          {
            "text": "多数时候（4分）",
            "score": 4
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "几乎不或从不（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【主观唤起域-2】性活动或性交时，您如何评价自己的性唤起水平？",
        "type": "select",
        "group": "arousal",
        "options": [
          {
            "text": "非常高（5分）",
            "score": 5
          },
          {
            "text": "高（4分）",
            "score": 4
          },
          {
            "text": "中等（3分）",
            "score": 3
          },
          {
            "text": "低（2分）",
            "score": 2
          },
          {
            "text": "非常低或无（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【主观唤起域-3】性活动或性交时，您是否对自己的性唤起感到自信？",
        "type": "select",
        "group": "arousal",
        "options": [
          {
            "text": "非常自信（5分）",
            "score": 5
          },
          {
            "text": "比较自信（4分）",
            "score": 4
          },
          {
            "text": "一般（3分）",
            "score": 3
          },
          {
            "text": "不太自信（2分）",
            "score": 2
          },
          {
            "text": "非常不自信（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【主观唤起域-4】性活动或性交时，您多长时间感到性唤起满足？",
        "type": "select",
        "group": "arousal",
        "options": [
          {
            "text": "几乎总是或总是（5分）",
            "score": 5
          },
          {
            "text": "多数时候（4分）",
            "score": 4
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "几乎不或从不（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【润滑域-1】性交时，多长时间感到阴道润滑？",
        "type": "select",
        "group": "lubrication",
        "options": [
          {
            "text": "几乎总是或总是（5分）",
            "score": 5
          },
          {
            "text": "多数时候（4分）",
            "score": 4
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "几乎不或从不（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【润滑域-2】性交时，维持阴道润滑的困难程度如何？",
        "type": "select",
        "group": "lubrication",
        "options": [
          {
            "text": "无困难（5分）",
            "score": 5
          },
          {
            "text": "很少困难（4分）",
            "score": 4
          },
          {
            "text": "有时困难（3分）",
            "score": 3
          },
          {
            "text": "经常困难（2分）",
            "score": 2
          },
          {
            "text": "总是困难（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【润滑域-3】性交时，多长时间能维持阴道润滑到性交结束？",
        "type": "select",
        "group": "lubrication",
        "options": [
          {
            "text": "几乎总是或总是（5分）",
            "score": 5
          },
          {
            "text": "多数时候（4分）",
            "score": 4
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "几乎不或从不（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【润滑域-4】性交时，维持阴道润滑有多困难？",
        "type": "select",
        "group": "lubrication",
        "options": [
          {
            "text": "极困难（1分）",
            "score": 1
          },
          {
            "text": "非常困难（2分）",
            "score": 2
          },
          {
            "text": "困难（3分）",
            "score": 3
          },
          {
            "text": "稍有困难（4分）",
            "score": 4
          },
          {
            "text": "无困难（5分）",
            "score": 5
          }
        ]
      },
      {
        "text": "【高潮域-1】性交时，多长时间能达到性高潮？",
        "type": "select",
        "group": "orgasm",
        "options": [
          {
            "text": "几乎总是或总是（5分）",
            "score": 5
          },
          {
            "text": "多数时候（4分）",
            "score": 4
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "很少（2分）",
            "score": 2
          },
          {
            "text": "几乎不或从不（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【高潮域-2】性交时，达到性高潮有多困难？",
        "type": "select",
        "group": "orgasm",
        "options": [
          {
            "text": "无困难（5分）",
            "score": 5
          },
          {
            "text": "稍有困难（4分）",
            "score": 4
          },
          {
            "text": "困难（3分）",
            "score": 3
          },
          {
            "text": "非常困难（2分）",
            "score": 2
          },
          {
            "text": "极困难（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【高潮域-3】您对自己的性高潮能力是否满意？",
        "type": "select",
        "group": "orgasm",
        "options": [
          {
            "text": "非常满意（5分）",
            "score": 5
          },
          {
            "text": "比较满意（4分）",
            "score": 4
          },
          {
            "text": "一半一半（3分）",
            "score": 3
          },
          {
            "text": "不太满意（2分）",
            "score": 2
          },
          {
            "text": "非常不满意（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【满意度域-1】您与性伴侣的感情亲密程度？",
        "type": "select",
        "group": "satisfaction",
        "options": [
          {
            "text": "非常亲密（5分）",
            "score": 5
          },
          {
            "text": "比较亲密（4分）",
            "score": 4
          },
          {
            "text": "一般（3分）",
            "score": 3
          },
          {
            "text": "不太亲密（2分）",
            "score": 2
          },
          {
            "text": "非常不亲密（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【满意度域-2】您对性生活的满意程度？",
        "type": "select",
        "group": "satisfaction",
        "options": [
          {
            "text": "非常满意（5分）",
            "score": 5
          },
          {
            "text": "比较满意（4分）",
            "score": 4
          },
          {
            "text": "一般（3分）",
            "score": 3
          },
          {
            "text": "不太满意（2分）",
            "score": 2
          },
          {
            "text": "非常不满意（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【满意度域-3】您对与性伴侣的性关系满意程度？",
        "type": "select",
        "group": "satisfaction",
        "options": [
          {
            "text": "非常满意（5分）",
            "score": 5
          },
          {
            "text": "比较满意（4分）",
            "score": 4
          },
          {
            "text": "一般（3分）",
            "score": 3
          },
          {
            "text": "不太满意（2分）",
            "score": 2
          },
          {
            "text": "非常不满意（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【疼痛域-1】性交时，多长时间感到阴道疼痛？",
        "type": "select",
        "group": "pain",
        "options": [
          {
            "text": "几乎不或从不（5分）",
            "score": 5
          },
          {
            "text": "很少（4分）",
            "score": 4
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "多数时候（2分）",
            "score": 2
          },
          {
            "text": "几乎总是或总是（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【疼痛域-2】性交后，多长时间感到阴道疼痛？",
        "type": "select",
        "group": "pain",
        "options": [
          {
            "text": "几乎不或从不（5分）",
            "score": 5
          },
          {
            "text": "很少（4分）",
            "score": 4
          },
          {
            "text": "有时（3分）",
            "score": 3
          },
          {
            "text": "多数时候（2分）",
            "score": 2
          },
          {
            "text": "几乎总是或总是（1分）",
            "score": 1
          }
        ]
      },
      {
        "text": "【疼痛域-3】您如何评价性交时阴道疼痛的程度？",
        "type": "select",
        "group": "pain",
        "options": [
          {
            "text": "无疼痛（5分）",
            "score": 5
          },
          {
            "text": "轻度（4分）",
            "score": 4
          },
          {
            "text": "中度（3分）",
            "score": 3
          },
          {
            "text": "重度（2分）",
            "score": 2
          },
          {
            "text": "极重度（1分）",
            "score": 1
          }
        ]
      }
    ],
    "scoring": {
      "formula": "fsfi",
      "note": "6个域：性欲(2题×0.6)、主观唤起(4题×0.3)、润滑(4题×0.3)、高潮(3题×0.3)、满意度(3题×0.3)、疼痛(3题×0.3)，总分=6个域分之和，满分36分，≤26.55提示性功能障碍",
      "domainWeights": {
        "desire": 0.6,
        "arousal": 0.3,
        "lubrication": 0.3,
        "orgasm": 0.3,
        "satisfaction": 0.3,
        "pain": 0.3
      },
      "levels": [
        {
          "min": 27,
          "max": 36,
          "label": "性功能正常",
          "color": "green"
        },
        {
          "min": 20,
          "max": 26.55,
          "label": "轻度性功能障碍",
          "color": "yellow"
        },
        {
          "min": 12,
          "max": 19.9,
          "label": "中度性功能障碍",
          "color": "orange"
        },
        {
          "min": 2,
          "max": 11.9,
          "label": "重度性功能障碍",
          "color": "red"
        }
      ]
    }
  },
  {
    "id": "skin_aging",
    "name": "皮肤衰老自评量表",
    "category": "待补充",
    "description": "评估面部及全身皮肤衰老程度的自评工具",
    "questions": [
      {
        "text": "您面部是否有明显的细纹/皱纹？",
        "type": "select",
        "group": "wrinkle",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "轻微（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "明显（3分）",
            "score": 3
          },
          {
            "text": "非常明显（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "您面部皮肤是否有色斑/色素沉着？",
        "type": "select",
        "group": "pigment",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "轻微（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "明显（3分）",
            "score": 3
          },
          {
            "text": "非常明显（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "您面部皮肤是否有松弛/下垂？",
        "type": "select",
        "group": "sagging",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "轻微（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "明显（3分）",
            "score": 3
          },
          {
            "text": "非常明显（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "您面部皮肤干燥程度如何？",
        "type": "select",
        "group": "dryness",
        "options": [
          {
            "text": "不干燥（0分）",
            "score": 0
          },
          {
            "text": "偶尔干燥（1分）",
            "score": 1
          },
          {
            "text": "经常干燥（2分）",
            "score": 2
          },
          {
            "text": "持续干燥（3分）",
            "score": 3
          },
          {
            "text": "严重干燥脱屑（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "您眼下是否有明显的眼袋/黑眼圈？",
        "type": "select",
        "group": "eyeArea",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "轻微（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "明显（3分）",
            "score": 3
          },
          {
            "text": "非常明显（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "您颈部皮肤是否有皱纹/松弛？",
        "type": "select",
        "group": "neck",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "轻微（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "明显（3分）",
            "score": 3
          },
          {
            "text": "非常明显（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "您手部皮肤是否有衰老表现（干燥/斑点/静脉突出）？",
        "type": "select",
        "group": "hands",
        "options": [
          {
            "text": "没有（0分）",
            "score": 0
          },
          {
            "text": "轻微（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "明显（3分）",
            "score": 3
          },
          {
            "text": "非常明显（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "您毛孔粗大程度如何？",
        "type": "select",
        "group": "pore",
        "options": [
          {
            "text": "不明显（0分）",
            "score": 0
          },
          {
            "text": "轻微（1分）",
            "score": 1
          },
          {
            "text": "中等（2分）",
            "score": 2
          },
          {
            "text": "明显（3分）",
            "score": 3
          },
          {
            "text": "非常明显（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "您皮肤弹性如何？（用手轻捏面颊后松开恢复速度）",
        "type": "select",
        "group": "elasticity",
        "options": [
          {
            "text": "恢复很快（0分）",
            "score": 0
          },
          {
            "text": "恢复较快（1分）",
            "score": 1
          },
          {
            "text": "恢复一般（2分）",
            "score": 2
          },
          {
            "text": "恢复较慢（3分）",
            "score": 3
          },
          {
            "text": "恢复很慢（4分）",
            "score": 4
          }
        ]
      },
      {
        "text": "您对目前皮肤状态的整体满意度？",
        "type": "select",
        "group": "overall",
        "options": [
          {
            "text": "非常满意（0分）",
            "score": 0
          },
          {
            "text": "比较满意（1分）",
            "score": 1
          },
          {
            "text": "一般（2分）",
            "score": 2
          },
          {
            "text": "不太满意（3分）",
            "score": 3
          },
          {
            "text": "非常不满意（4分）",
            "score": 4
          }
        ]
      }
    ],
    "scoring": {
      "formula": "sum",
      "maxScore": 40,
      "levels": [
        {
          "min": 0,
          "max": 8,
          "label": "皮肤衰老不明显",
          "color": "green"
        },
        {
          "min": 9,
          "max": 16,
          "label": "轻度皮肤衰老",
          "color": "yellow"
        },
        {
          "min": 17,
          "max": 28,
          "label": "中度皮肤衰老",
          "color": "orange"
        },
        {
          "min": 29,
          "max": 40,
          "label": "重度皮肤衰老",
          "color": "red"
        }
      ]
    }
  }
,
{
  "id": "wuxing_constitution",
  "name": "五行体质评估",
  "category": "五行体质",
  "description": "通过日常场景中的自然反应，了解你的身心特质，获得个性化健康建议",
  "questions": [
    {
      "text": "你在开会时，别人提出了一个你觉得明显有问题的方案：",
      "type": "select",
      "options": [
        {
          "text": "你会直接指出问题所在，语气可能有点冲",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "你会先观察其他人的反应，然后找到一个大家都能接受的方式说",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "你会在心里反复想“他为什么会这样想”，可能会后私下聊",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "你会沉默，觉得说了也没用，心里有点凉",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "你会避开这个话题，等会后再私下处理",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你一个人在家，突然停电了：",
      "type": "select",
      "options": [
        {
          "text": "立刻找手电/手机，动作很快，觉得“怎么又出这种事”",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "第一反应是打电话给朋友/家人说说这件事",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "坐在原地想“是不是电费忘了交/跳闸了”，开始想各种可能",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "觉得有点孤单/凄凉，叹了口气",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "有点紧张，开始想“万一有坏人怎么办”",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你收到一个久未联系的朋友的消息，说想见你：",
      "type": "select",
      "options": [
        {
          "text": "“好啊，定个时间吧”——干脆利落",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "很开心，开始想“去哪里吃/聊什么”",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "“好呀好呀，你最近怎么样？”——开始关心对方",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "“好的，不过我最近有点忙...”——先保持距离",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "有点犹豫，想“要不要见/会不会尴尬”",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你做了一个重要的决定，但结果不如预期：",
      "type": "select",
      "options": [
        {
          "text": "会想“是不是哪个环节出了问题”，想复盘",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "会找信任的人聊聊，说说自己的感受",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "会反复想“如果当时选了另一个就好了”",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "会有点沮丧，但很快告诉自己“算了，过去了”",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "会担心“下一次会不会也这样”",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "有人在你面前讲了一个你很不同意的观点：",
      "type": "select",
      "options": [
        {
          "text": "会忍不住反驳，觉得“这不对”",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "会笑着听，然后说“我有一个不同的看法...”",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "会想“他为什么这样想”，试图理解",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "懒得争论，心里想“随他去吧”",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "不表态，但心里已经开始想怎么避开这个人",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你的工作/生活节奏突然被打乱：",
      "type": "select",
      "options": [
        {
          "text": "烦躁，觉得“计划都被打乱了”",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "有点慌，想赶紧找人商量怎么办",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "开始重新规划，但总觉得哪里不对",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "觉得失落，原来的安排挚好的",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "想躲起来，不想被打扰",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你在一个聚会上，不太认识其他人：",
      "type": "select",
      "options": [
        {
          "text": "找个话题主动跟人聊，很快就能搭上话",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "到处看看，找到看起来友善的人开始聊",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "待在主人/熟人旁边，慢慢认识别人",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "找个安静的角落，观察别人",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "想早点离开，或者一直看手机",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你做了一个很满意的成果，但没得到预期的认可：",
      "type": "select",
      "options": [
        {
          "text": "有点生气，觉得“他们没看到吗”",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "有点失落，想找人倾诉“我做了很多...”",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "开始想“是不是我做得还不够好”",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "觉得“算了，自己知道就好”",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "开始怀疑自己“是不是真的不行”",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "别人形容你说话的语气：",
      "type": "select",
      "options": [
        {
          "text": "干脆、有力、像在安排事情",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "热情、有感染力、像在讲故事",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "温和、缓慢、让人觉得很舒服",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "平淡、克制、像在汇报",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "很轻、很慢、要凑近才能听清",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你笑的方式：",
      "type": "select",
      "options": [
        {
          "text": "大笑/爽朗的笑/短促的笑",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "爱笑/笑点低/自带笑意",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "微笑/不好意思地笑/温暖的笑",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "很少笑/礼貌性微笑/带距离感",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "几乎不笑/或突然笑一下又收住",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "别人跟你聊天时的感受：",
      "type": "select",
      "options": [
        {
          "text": "觉得你在“教”他什么/有点被压制",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "觉得很开心/被关注/想继续聊",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "觉得很舒服/被照顾/想靠近",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "觉得有距离/不太敢多说/你很理性",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "觉得你有点神秘/看不透/想保护你",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你讲电话/发语音时：",
      "type": "select",
      "options": [
        {
          "text": "语速快、声音大、直奔主题",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "语气活泼、语气词多、像在聊天",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "语速慢、尾音长、有点柔和",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "简短、公事公办、不带感情色彩",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "声音小、犹豫、经常停顿",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你在表达不同意见时：",
      "type": "select",
      "options": [
        {
          "text": "直接说“不对/不行”，然后说理由",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "先笑着说“你说的有道理，但是...”",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "绕个弯子说“我在想是不是还可以...”",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "不说/或者冷冷地来一句",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "不说/但身体语言明显不认同",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你的口头禅：",
      "type": "select",
      "options": [
        {
          "text": "“烦死了/气死了/怎么这样”",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "“哎呀/天哪/我的妈呀”",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "“嗯...我想想/是不是...”",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "“算了/无所谓/都行”",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "“嗯.../啊.../”（无意义的低声）",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你在紧张/压力下的说话方式：",
      "type": "select",
      "options": [
        {
          "text": "语速更快、声音更大、像在命令",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "话变多、有点语无伦次/笑场",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "话变多、开始解释/寻求理解",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "话变少、声音变平/像在陈述事实",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "话变少、声音变低/甚至说不出话",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你放松/减压的方式：",
      "type": "select",
      "options": [
        {
          "text": "运动/做事/让自己忙起来",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "找朋友聊天/聚会/分享",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "吃好吃的/睡觉/待着不动",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "独处/看书/散步/整理",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "泡澡/听音乐/发呆/躲起来",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你身体的紧张/不舒服通常在哪里：",
      "type": "select",
      "options": [
        {
          "text": "头/脖子/肩膀/眼睛/两肋",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "胸口/心脏/脸/舌头",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "肚子/胃/四肢/嘴巴",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "胸部/皮肤/鼻子/肩背",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "腰/膝盖/耳朵/腿",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你的睡眠模式：",
      "type": "select",
      "options": [
        {
          "text": "入睡难/脑子停不下来/凌晨1-3点醒",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "睡眠浅/多梦/说梦话/半夜醒",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "嗜睡/饭后困/睡了还想睡",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "早醒/凌晨3-5点醒/醒来就睡不着",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "整夜多梦/夜尿多/怕冷/睡不暖",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你生病时的状态：",
      "type": "select",
      "options": [
        {
          "text": "硬扛/不想让人看到自己虚弱",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "赶紧告诉别人/寻求关心",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "躺在床上不动/不想吃东西",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "安静地休息/不想被打扰",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "特别害怕/担心严重/想躲起来",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你的饮食特点：",
      "type": "select",
      "options": [
        {
          "text": "吃得快/不挑食/饿了自己找吃的",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "喜欢吃热的/辣的/刺激性食物",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "喜欢吃甜的/主食/慢慢吃",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "食欲不稳定/情绪化进食/或没胃口",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "喜欢咸的/热汤/吃得少但规律",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你的能量节律：",
      "type": "select",
      "options": [
        {
          "text": "早上最有精力/晚上容易亢奋",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "上午一般/下午和晚上最活跃",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "上午到中午最好/下午犯困",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "清晨最好/下午开始低落",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "晚上比较有精神/白天没劲",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你对环境温度的感受：",
      "type": "select",
      "options": [
        {
          "text": "怕热/容易出汗/喜欢凉爽",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "怕热/脸容易红/手脚心热",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "对温度不太敏感/但怕潮湿",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "怕冷/容易起鸡皮疙瘩/皮肤干",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "怕冷/手脚冰凉/腰膝冷",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你的运动方式：",
      "type": "select",
      "options": [
        {
          "text": "高强度/竞技类/快节奏",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "团体运动/热闹的/有互动",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "散步/瑜伽/不太剧烈",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "独自跑步/游泳/有节奏感",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "不太爱动/或喜欢水中运动/太极",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你最喜欢的季节：",
      "type": "select",
      "options": [
        {
          "text": "春天 — 万物复苏，充满生机",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "夏天 — 热烈奔放，活力满满",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "初秋 — 温暖舒适，收获充实",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "深秋 — 天高云淡，清爽通透",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "冬天 — 安静深沉，适合蓄养",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你最喜欢的味道：",
      "type": "select",
      "options": [
        {
          "text": "酸味 — 柠檬/醋/酸梅",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "苦味 — 咖啡/黑巧/苦菊",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "甜味 — 甜点/水果/主食",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "辛辣 — 辣椒/姜/薄荷",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "咸味 — 海鲜/咸汤/酱类",
          "score": 1,
          "element": "water"
        }
      ]
    },
    {
      "text": "你最喜欢的颜色：",
      "type": "select",
      "options": [
        {
          "text": "绿色/青色 — 自然清新",
          "score": 1,
          "element": "wood"
        },
        {
          "text": "红色/橙色 — 温暖热烈",
          "score": 1,
          "element": "fire"
        },
        {
          "text": "黄色/棕色 — 踏实厚重",
          "score": 1,
          "element": "earth"
        },
        {
          "text": "白色/银色 — 简洁纯净",
          "score": 1,
          "element": "metal"
        },
        {
          "text": "蓝色/黑色 — 深沉宁静",
          "score": 1,
          "element": "water"
        }
      ]
    }
  ],
  "scoring": {
    "formula": "wuxing",
    "maxScore": 58,
    "levels": [
      {
        "min": 0,
        "max": 58,
        "label": "五行体质评估完成",
        "color": "green"
      }
    ]
  }
}
];

// 量表分类映射
const SCALE_CATEGORIES = {
  "认知评估": [
    "moca",
    "mmse",
    "elderly_cognitive",
    "cdr"
  ],
  "情绪评估": [
    "hama",
    "hamd",
    "had",
    "sas",
    "sds"
  ],
  "更年期评估": [
    "kupperman"
  ],
  "睡眠评估": [
    "psqi",
    "pgi_sleep"
  ],
  "营养评估": [
    "mna_sf",
    "mna"
  ],
  "骨骼评估": [
    "osteoporosis_one_min",
    "osta",
    "frax"
  ],
  "盆底评估": [
    "pfdi20",
    "pfiq7",
    "iciq_sf"
  ],
  "运动评估": [
    "parq",
    "exercise_prescription"
  ],
  "待补充": [
    "tcm_constitution",
    "menqol",
    "fss",
    "gsrs",
    "fsfi",
    "skin_aging"
  ],
  "五行体质": [
    "wuxing_constitution"
  ]
};

// 分类显示名称
const CATEGORY_NAMES = {
  '认知评估': '🧠 认知评估',
  '情绪评估': '💭 情绪评估',
  '更年期评估': '🌸 更年期评估',
  '睡眠评估': '😴 睡眠评估',
  '营养评估': '🥗 营养评估',
  '骨骼评估': '🦴 骨骼评估',
  '盆底评估': '💪 盆底评估',
  '运动评估': '🏃 运动评估',
  '待补充': '📋 综合评估',
  '五行体质': '🌿 体质辨识'
};

// 获取量表通过ID
function getScaleById(id) {
  return SCALES.find(s => s.id === id);
}

// 获取分类下的量表列表
function getScalesByCategory(category) {
  return SCALES.filter(s => s.category === category);
}
