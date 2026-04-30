const overview = {
  summary:
    '本期实际费用 8,520 万元，环比 +8.3%，同比 +12.4%，较预算超支 5.1%。整体看，本月费用属于 <span class="pill pill-amber">局部异常</span>，主因是 <span class="pill pill-sky">研发费用一次性前置</span> 和 <span class="pill pill-sky">区域经营投入增加</span>；其中 <strong>区域费用效率问题优先级更高</strong>。',
};

const waterfallBlocks = [
  {
    id: "rd",
    name: "研发费用",
    subtitle: "研发费用一次性前置",
    diff: 420,
    feeRate: "2.9%",
    momRate: "+10%",
    yoyRate: "+20%",
    budgetExecDiff: "+16%",
    totalAmount: "2,680 万元",
    summary: "项目集中验收导致费用前置确认，是本月最大的单项差异来源。",
    items: [
      ["外包开发费", "520 万元", "+165 万元", "+31.2%", "+38.4%", "一次性事项", "本周需解释", "重点项目验收集中在本月确认。"],
      ["测试认证费", "210 万元", "+118 万元", "+42.6%", "+49.0%", "节奏前置", "持续跟踪", "多机型认证推进提前。"],
      ["人工成本", "860 万元", "+82 万元", "+5.4%", "+11.9%", "持续性增长", "可接受", "研发编制扩充后稳步抬升。"],
    ],
  },
  {
    id: "region_fixed",
    name: "区域费用-固定",
    subtitle: "区域基础运营投入",
    diff: 190,
    feeRate: "1.6%",
    momRate: "+4%",
    yoyRate: "+7%",
    budgetExecDiff: "+6%",
    totalAmount: "1,420 万元",
    summary: "区域固定型投入随组织覆盖和基础运营扩大而增加，需要关注预算节奏。",
    items: [
      ["区域人员费用", "620 万元", "+72 万元", "+13.1%", "+18.4%", "固定投入", "持续跟踪", "重点区域岗位补齐带来固定成本上升。"],
      ["办公与驻点费用", "360 万元", "+48 万元", "+15.4%", "+19.6%", "固定投入", "可接受", "成熟市场驻点与办公室租赁同步增加。"],
      ["区域基础服务费", "440 万元", "+70 万元", "+18.9%", "+21.3%", "固定投入", "本周需解释", "区域共享服务结算节奏前置。"],
    ],
  },
  {
    id: "region_variable",
    name: "区域费用-变动",
    subtitle: "区域经营投入增加",
    diff: 120,
    feeRate: "1.1%",
    momRate: "+8%",
    yoyRate: "+14%",
    budgetExecDiff: "+5%",
    totalAmount: "890 万元",
    summary: "区域变动费用增速快于收入改善，需要从投入转化效率角度重点复盘。",
    items: [
      ["市场推广费", "190 万元", "+86 万元", "+24.3%", "+31.5%", "经营投入", "本周需解释", "新品推广与路演活动集中投放。"],
      ["渠道激励费", "145 万元", "+58 万元", "+18.7%", "+25.4%", "经营投入", "持续跟踪", "返利前置带动渠道投入增加。"],
      ["差旅与拓展费", "88 万元", "+27 万元", "+11.2%", "+16.8%", "经营投入", "可接受", "区域拓店和客户拜访增加。"],
    ],
  },
  {
    id: "hq",
    name: "事业部总部费用",
    subtitle: "总部职能费用增长",
    diff: 180,
    feeRate: "0.4%",
    momRate: "+5%",
    yoyRate: "-3%",
    budgetExecDiff: "+2%",
    totalAmount: "860 万元",
    summary: "总部管理与共享服务相关费用小幅抬升，绝对额不高，但需要确认增长原因。",
    items: [
      ["咨询服务费", "180 万元", "+63 万元", "+28.4%", "+41.3%", "专项投入", "本周需解释", "流程优化项目启动导致顾问费用增加。"],
      ["共享服务费", "135 万元", "+28 万元", "+7.0%", "+10.5%", "节奏前置", "持续跟踪", "部分服务合同提前结算。"],
      ["行政费用", "210 万元", "+34 万元", "+6.3%", "+8.1%", "正常波动", "可接受", "办公与差旅支出小幅增长。"],
    ],
  },
  {
    id: "function",
    name: "职能费用",
    subtitle: "职能支持费用抬升",
    diff: 90,
    feeRate: "2.1%",
    momRate: "+2%",
    yoyRate: "+6%",
    budgetExecDiff: "+4%",
    totalAmount: "1,740 万元",
    summary: "培训与支持类费用温和增长，整体可控。",
    items: [
      ["培训费", "42 万元", "+11 万元", "+12.8%", "+16.2%", "正常波动", "可接受", "季度培训计划集中落地。"],
      ["办公保障费", "96 万元", "+21 万元", "+4.1%", "+5.7%", "正常波动", "可接受", "设备和系统折旧带来波动。"],
      ["行政治理项目", "68 万元", "+18 万元", "+7.8%", "+9.4%", "节奏正常", "持续跟踪", "组织优化配套项目推进。"],
    ],
  },
  {
    id: "adjustment",
    name: "调整项",
    subtitle: "其他及考核调整",
    diff: -160,
    feeRate: "1.6%",
    momRate: "-7%",
    yoyRate: "+3%",
    budgetExecDiff: "-8%",
    totalAmount: "-160 万元",
    summary: "调整项合并其他调整与考核调整，用于还原管理口径下的费用差异。",
    items: [
      ["费用重分类", "-35 万元", "-35 万元", "-", "-", "口径修正", "可接受", "部分费用重分类至对应费用项目。"],
      ["跨期结算", "-25 万元", "-25 万元", "-", "-", "结算调整", "可接受", "前期暂估在本月完成冲回。"],
      ["专项剔除", "-70 万元", "-70 万元", "-", "-", "考核调整", "可接受", "剔除非经常性专项影响。"],
      ["管理口径调整", "-30 万元", "-30 万元", "-", "-", "考核调整", "持续跟踪", "按考核规则调整部分归属口径。"],
    ],
  },
  {
    id: "other",
    name: "其他调整回冲",
    subtitle: "其他调整回冲",
    diff: -160,
    feeRate: "1.6%",
    momRate: "+7%",
    yoyRate: "+11%",
    budgetExecDiff: "+8%",
    summary: "跨期调整和重分类形成对冲，属于会计确认层面的正常回摆。",
    items: [
      ["跨期调整", "-90 万元", "-90 万元", "-", "-", "结算调整", "可接受", "前期多计费用在本月回冲。"],
      ["费用重分类", "-42 万元", "-42 万元", "-", "-", "口径修正", "可接受", "部分费用重分类至其他项目。"],
      ["项目对冲", "-28 万元", "-28 万元", "-", "-", "阶段回摆", "可接受", "计提回冲影响有限。"],
    ],
  },
];

const visibleWaterfallBlocks = waterfallBlocks.filter((block) => block.id !== "other");

const analysisViews = [
  { id: "hq", label: "总部财务视角" },
  { id: "business", label: "事业部业财视角" },
];

const businessViewTableOverrides = {
  rd: {
    summary: "当前展示的是研发费用在事业部业财视角下的差异明细，用于拆解研发大类、小类和环比波动原因。",
    columns: ["研发费用大类", "国家", "小类", "当期发生", "上期金额", "环比", "差异原因解析"],
    rows: [
      ["技术研发", "印度", "技术研发", "860 万元", "780 万元", "+10.3%", "计提比例不变，波动原因是BOM成本+返利上升"],
      ["产品开发", "尼日利亚", "自研", "1,240 万元", "930 万元", "+33.3%", "历史项目新增1200万，新项目一次性计提2300。"],
      ["产品开发", "巴基斯坦", "外研", "720 万元", "590 万元", "+22.0%", "单台成本不变，数量新增XX台，导致成本上升"],
      ["产品开发", "埃塞俄比亚", "软件产品", "460 万元", "410 万元", "+12.2%", "计提比例不变，波动原因是BOM成本+返利上升"],
      ["其他", "加纳", "其他", "180 万元", "165 万元", "+9.1%", "零星研发支持费用随项目验收节奏小幅增加。"],
    ],
  },
  function: {
    summary: "当前展示的是职能费用在事业部业财视角下的国家波动明细，用于快速定位差异贡献最大的国家。",
    columns: ["职能费用波动TOP5国家", "当期发生", "上期金额", "差异原因"],
    rows: [
      ["埃塞俄比亚", "320 万元", "210 万元", "职能费用计提因子BOM+返利变动3000万，导致计提金额差异大"],
      ["尼日利亚", "285 万元", "238 万元", "渠道支持与本地行政保障费用同步增加。"],
      ["加纳", "176 万元", "132 万元", "共享服务结算节奏提前，带来阶段性费用抬升。"],
      ["巴基斯坦", "154 万元", "126 万元", "本地运营支持费用随业务恢复小幅增加。"],
      ["印度", "138 万元", "119 万元", "职能支持项目集中发生，后续需观察是否回落。"],
    ],
  },
};

const detailTableConfigs = {
  rd: {
    linkName: "研发费用明细表",
    columns: ["研发一级部门", "二级科目", "较预算", "环比", "同比", "标签", "原因说明"],
    rows: [
      ["研发公共部门", "设计及认证费", "+1200 万元", "+18.4%", "+24.6%", "前置确认", "外包开发和测试认证费用前置确认，需说明后续是否回落。"],
      ["技术研发", "BOM测试费", "+860 万元", "+10.3%", "+16.8%", "本周需解释", "多机型测试节奏提前，带动当月费用集中发生。"],
      ["产品开发", "外包开发费", "+720 万元", "+22.0%", "+28.5%", "一次性事项", "重点项目外包开发验收集中在本月确认。"],
      ["产品开发", "软件产品费", "+460 万元", "+12.2%", "+15.0%", "持续跟踪", "软件适配和版本验证费用随项目进度增加。"],
      ["其他", "专利认证费", "+180 万元", "+9.1%", "+11.4%", "可接受", "认证节点集中发生，后续按项目节奏滚动观察。"],
    ],
  },
  region_fixed: {
    linkName: "区域费用-固定明细表",
    columns: ["区域", "事业部", "报表项目", "较预算", "环比", "同比", "标签", "原因说明"],
    rows: [
      ["东非", "TECNO", "其他固定", "+1200 万元", "+22%", "+22%", "本周需解释", "区域驻点和固定服务结算集中确认。"],
      ["西非", "INFINIX", "人工成本", "+1300 万元", "+19%", "+19%", "重点复盘", "团队扩编及薪酬补差推动固定成本上升。"],
      ["中东", "itel", "租赁费用", "+620 万元", "+14%", "+16%", "持续跟踪", "门店和仓储租赁续约带来阶段性上浮。"],
      ["拉美", "TECNO", "办公保障", "+480 万元", "+11%", "+13%", "可接受", "区域运营支持费用随覆盖范围扩大增加。"],
      ["东南亚", "Philips", "共享服务", "+360 万元", "+9%", "+10%", "持续跟踪", "共享服务分摊节奏提前。"],
    ],
  },
  region_variable: {
    linkName: "区域费用-变动明细表",
    columns: ["区域", "事业部", "报表项目", "较预算", "环比", "同比", "标签", "原因说明"],
    rows: [
      ["东非", "TECNO", "市场推广费", "+980 万元", "+24%", "+31%", "重点复盘", "推广投放增加但收入改善不明显，需要复盘投放效率。"],
      ["西非", "INFINIX", "渠道激励费", "+760 万元", "+21%", "+28%", "本周需解释", "渠道返利前置导致本月变动费用抬升。"],
      ["中东", "itel", "路演活动费", "+520 万元", "+16%", "+18%", "持续跟踪", "新品路演活动集中落地，需观察销售转化。"],
      ["拉美", "TECNO", "差旅拓展费", "+410 万元", "+13%", "+15%", "可接受", "客户拜访和拓店动作增加。"],
      ["东南亚", "Philips", "促销资源", "+300 万元", "+10%", "+12%", "持续跟踪", "促销资源投放节奏提前。"],
    ],
  },
  hq: {
    linkName: "事业部总部费用明细表",
    columns: ["事业部", "项目", "较预算", "环比", "同比", "标签", "原因说明"],
    rows: [
      ["TECNO事业部", "人工成本", "+1400 万元", "+12%", "+18%", "本周需解释", "季度奖金计提及关键岗位补充带来费用增加。"],
      ["TECNO事业部", "运营费用（不含人工）", "+680 万元", "+9%", "+11%", "持续跟踪", "总部运营支持项目集中发生。"],
      ["TECNO事业部", "市场费用", "+520 万元", "+7%", "+10%", "重点复盘", "品牌活动和总部市场支持费用前置。"],
      ["itel事业部", "人工成本", "-2000 万元", "-8%", "-12%", "预算节奏", "人员费用计提节奏低于预算。"],
      ["Infinix事业部", "管理费用", "+360 万元", "+6%", "+8%", "可接受", "总部管理支持费用小幅增加。"],
    ],
  },
  function: {
    linkName: "职能费用明细表",
    columns: ["职能部门", "二级科目", "较预算", "环比", "同比", "标签", "原因说明"],
    rows: [
      ["流程与信息中心-大数据", "系统服务费", "+200 万元", "+5%", "+8%", "本周需解释", "季度奖金计提及云资源服务费增加。"],
      ["流程与信息中心-AI中心", "研发支持费", "+180 万元", "+7%", "+10%", "持续跟踪", "AI工具试点和模型服务费用增加。"],
      ["财务共享中心", "咨询服务费", "+150 万元", "+6%", "+9%", "重点复盘", "专项流程优化项目顾问费用集中发生。"],
      ["人力资源中心", "培训费", "+120 万元", "+4%", "+6%", "可接受", "季度培训计划集中落地。"],
      ["供应链支持中心", "系统运维费", "+95 万元", "+3%", "+5%", "持续跟踪", "运维服务合同结算提前。"],
    ],
  },
  adjustment: {
    linkName: "调整项明细表",
    columns: ["调整大类", "调整子类", "事业部", "环比", "同比", "标签", "原因说明"],
    rows: [
      ["直接利润调整", "工厂利润", "TECNO", "-6%", "+2%", "考核调整", "剔除工厂利润归属变化对费用口径的影响。"],
      ["其他调整项", "玻璃代采补贴", "Infinix", "-4%", "+1%", "口径修正", "玻璃代采补贴按管理口径调整归属。"],
      ["考核调整项", "移动互联双计", "itel", "-5%", "+3%", "考核调整", "移动互联业务双计部分按考核规则剔除。"],
      ["其他调整项", "跨期结算", "TECNO", "-3%", "-1%", "结算调整", "前期暂估费用在本月完成冲回。"],
      ["直接利润调整", "专项剔除", "Philips", "-2%", "+1%", "可接受", "剔除非经营性专项影响。"],
    ],
  },
};

const focusCards = [
  {
    index: "01",
    title: "事业部总部费用",
    summary: "TECNO和itel事业部较预算波动较大",
    lines: [
      "TECNO事业部总部费用较预算+8%（+1400万），环比+12%，主要增加原因是季度奖金计提。",
      "ITEL事业部费用较预算-20%（-2000万），环比-8%，主要减少原因是市场费用投入减少。",
    ],
  },
  {
    index: "02",
    title: "职能费用",
    summary: "流程与信息中心较预算+5%（+200万）",
    lines: ["主要增加原因是季度奖金计提。"],
  },
  {
    index: "03",
    title: "研发费用",
    summary: "研发公共部门-设计及认证费用较预算超出1200万",
    lines: ["环比+1,720万元，主要由外包开发和测试认证费用前置确认带动，需要说明后续是否回落。"],
  },
  {
    index: "04",
    title: "区域费用",
    summary: "重点复盘：西非一区市场费用投入近6个月连续增长",
    lines: ["但是收入下降，建议专项复盘投入效率。"],
  },
];

const regionTree = [
  {
    key: "tecno",
    level: "bu",
    name: "TECNO",
    status: "投入待复盘",
    revenueRate: "+6%",
    spendRate: "+11%",
    deviation: "+5pct",
    elasticity: "0.55",
    summary: "整体投入仍在增长，但区域回报分化明显。",
    spend: [3, 4, 6, 8, 9, 10],
    revenue: [1, 2, 3, 4, 5, 5],
    children: [
      {
        key: "tecno-east-africa",
        level: "region",
        name: "东非",
        status: "重点异常",
        revenueRate: "-4%",
        spendRate: "+15%",
        deviation: "+19pct",
        elasticity: "-0.27",
        summary: "经营型费用明显增加，但滞后收入下滑，投入与销售结果背离。",
        spend: [4, 7, 9, 11, 13, 15],
        revenue: [6, 3, 1, -2, -3, -4],
        children: [
          {
            key: "kenya",
            level: "country",
            name: "肯尼亚",
            status: "重点异常",
            revenueRate: "-6%",
            spendRate: "+18%",
            deviation: "+24pct",
            elasticity: "-0.33",
            summary: "渠道投放增加后销量未见改善，需要优先复盘。",
            spend: [6, 9, 12, 15, 17, 18],
            revenue: [5, 2, 1, -3, -4, -6],
          },
          {
            key: "ethiopia",
            level: "country",
            name: "埃塞俄比亚",
            status: "投入待复盘",
            revenueRate: "+2%",
            spendRate: "+9%",
            deviation: "+7pct",
            elasticity: "0.22",
            summary: "投入强度上升，但回报释放偏慢。",
            spend: [2, 3, 5, 6, 8, 9],
            revenue: [0, 1, 1, 2, 2, 2],
          },
        ],
      },
      {
        key: "tecno-west-africa",
        level: "region",
        name: "西非",
        status: "投入有效",
        revenueRate: "+8%",
        spendRate: "-6%",
        deviation: "-14pct",
        elasticity: "-1.33",
        summary: "费用收缩后收入仍保持增长，费用效率改善。",
        spend: [3, 1, -1, -2, -4, -6],
        revenue: [2, 3, 5, 6, 7, 8],
        children: [
          {
            key: "ghana",
            level: "country",
            name: "加纳",
            status: "投入有效",
            revenueRate: "+9%",
            spendRate: "-5%",
            deviation: "-14pct",
            elasticity: "-1.80",
            summary: "促销收缩后仍实现收入增长，投入效率优。",
            spend: [1, 0, -1, -2, -3, -5],
            revenue: [3, 4, 5, 7, 8, 9],
          },
        ],
      },
    ],
  },
  {
    key: "infinix",
    level: "bu",
    name: "Infinix",
    status: "投入有效",
    revenueRate: "+9%",
    spendRate: "+3%",
    deviation: "-6pct",
    elasticity: "3.00",
    summary: "投入增长较温和，但重点区域收入改善明显，整体效率较优。",
    spend: [1, 2, 2, 3, 3, 3],
    revenue: [2, 3, 4, 5, 6, 6],
    children: [
      {
        key: "infinix-sea",
        level: "region",
        name: "东南亚",
        status: "投入有效",
        revenueRate: "+10%",
        spendRate: "+12%",
        deviation: "+2pct",
        elasticity: "0.83",
        summary: "经营型费用增加后，滞后收入同步增长，整体基本匹配。",
        spend: [2, 4, 6, 8, 10, 12],
        revenue: [1, 3, 5, 7, 9, 10],
        children: [
          {
            key: "indonesia",
            level: "country",
            name: "印尼",
            status: "投入有效",
            revenueRate: "+11%",
            spendRate: "+10%",
            deviation: "-1pct",
            elasticity: "1.10",
            summary: "新品投放与收入增长较匹配。",
            spend: [2, 3, 4, 6, 8, 10],
            revenue: [3, 4, 5, 7, 9, 11],
          },
        ],
      },
    ],
  },
  {
    key: "itel",
    level: "bu",
    name: "itel",
    status: "投入有效",
    revenueRate: "+7%",
    spendRate: "+5%",
    deviation: "-2pct",
    elasticity: "1.40",
    summary: "多个市场费用可控，收入改善平稳，整体处于健康状态。",
    spend: [1, 1, 2, 3, 4, 5],
    revenue: [1, 2, 3, 4, 5, 7],
    children: [
      {
        key: "itel-middle-east",
        level: "region",
        name: "中东",
        status: "投入有效",
        revenueRate: "+12%",
        spendRate: "+2%",
        deviation: "-10pct",
        elasticity: "6.00",
        summary: "费用基本稳定的情况下收入明显增长，费用效率提升。",
        spend: [0, 1, 1, 2, 2, 2],
        revenue: [2, 4, 6, 8, 10, 12],
        children: [
          {
            key: "saudi",
            level: "country",
            name: "沙特",
            status: "投入有效",
            revenueRate: "+13%",
            spendRate: "+1%",
            deviation: "-12pct",
            elasticity: "13.00",
            summary: "投放保持平稳，收入持续增长。",
            spend: [0, 0, 1, 1, 1, 1],
            revenue: [3, 5, 7, 9, 11, 13],
          },
        ],
      },
    ],
  },
  {
    key: "philips",
    level: "bu",
    name: "Philips",
    status: "投入待复盘",
    revenueRate: "-1%",
    spendRate: "+1%",
    deviation: "+2pct",
    elasticity: "-1.00",
    summary: "整体费用稳定，但收入端动能不足，需要关注重点国家修复情况。",
    spend: [1, 1, 1, 1, 1, 1],
    revenue: [2, 1, 1, 0, -1, -1],
    children: [
      {
        key: "philips-latam",
        level: "region",
        name: "拉美",
        status: "投入待复盘",
        revenueRate: "-9%",
        spendRate: "-7%",
        deviation: "+2pct",
        elasticity: "1.29",
        summary: "费用收缩后收入同步走弱，需要关注是否存在投入不足。",
        spend: [-1, -2, -3, -4, -5, -7],
        revenue: [-2, -3, -4, -6, -7, -9],
        children: [
          {
            key: "mexico",
            level: "country",
            name: "墨西哥",
            status: "投入待复盘",
            revenueRate: "-8%",
            spendRate: "-5%",
            deviation: "+3pct",
            elasticity: "1.60",
            summary: "投放收缩与收入走弱同步出现，需判断是否压缩过度。",
            spend: [-1, -1, -2, -3, -4, -5],
            revenue: [-1, -2, -3, -5, -6, -8],
          },
        ],
      },
    ],
  },
];

const matrixHelp = {
  "投入有效": "费用投入后，收入同步改善，或在费用收缩情况下收入仍保持增长。",
  "投入待复盘": "费用变化后，收入改善不明显，或费用收缩后收入同步走弱，需要继续复盘。",
  "重点异常": "费用增加的同时收入下滑，投入与销售结果明显背离，需要优先关注。",
};

const calcHelp = {
  "收入变动率": "滞后1个月的近3个月收入均值，相对前3个月均值的变化率。",
  "费用变动率": "近3个月经营型变动费用均值，相对前3个月均值的变化率。",
  "偏离度": "费用变化率减去滞后收入变化率；越接近0通常说明越匹配。",
  "弹性": "滞后收入变化率除以费用变化率，用于衡量收入对投入变化的响应强弱。",
};

const statusTone = {
  "投入有效": "tone-emerald",
  "投入待复盘": "tone-amber",
  "重点异常": "tone-rose",
};

const matrixRateMetrics = {
  tecno: { feeRate: "2.9%", feeRateMom: "+10%", feeRateYoy: "+20%" },
  "tecno-east-africa": { feeRate: "3.3%", feeRateMom: "+12%", feeRateYoy: "+18%" },
  kenya: { feeRate: "3.8%", feeRateMom: "+14%", feeRateYoy: "+19%" },
  ethiopia: { feeRate: "2.7%", feeRateMom: "+7%", feeRateYoy: "+11%" },
  "tecno-west-africa": { feeRate: "1.9%", feeRateMom: "-3%", feeRateYoy: "+4%" },
  ghana: { feeRate: "1.7%", feeRateMom: "-4%", feeRateYoy: "+5%" },
  infinix: { feeRate: "2.7%", feeRateMom: "+6%", feeRateYoy: "+9%" },
  "infinix-sea": { feeRate: "2.8%", feeRateMom: "+8%", feeRateYoy: "+11%" },
  indonesia: { feeRate: "2.6%", feeRateMom: "+7%", feeRateYoy: "+10%" },
  itel: { feeRate: "2.1%", feeRateMom: "+4%", feeRateYoy: "+8%" },
  "itel-middle-east": { feeRate: "2.0%", feeRateMom: "+3%", feeRateYoy: "+7%" },
  saudi: { feeRate: "1.8%", feeRateMom: "+2%", feeRateYoy: "+6%" },
  philips: { feeRate: "1.6%", feeRateMom: "-1%", feeRateYoy: "+2%" },
  "philips-latam": { feeRate: "1.5%", feeRateMom: "-2%", feeRateYoy: "+1%" },
  mexico: { feeRate: "1.4%", feeRateMom: "-3%", feeRateYoy: "0%" },
};

const productLineRowsByBu = {
  tecno: [
    { key: "tecno-camon", sourceKey: "tecno", name: "CAMON", level: "productLine", status: "投入有效", summary: "高端影像线增长稳定，投放与销量释放较匹配。", feeRate: "3.1%", feeRateMom: "+8%", feeRateYoy: "+13%" },
    { key: "tecno-spark", sourceKey: "tecno", name: "SPARK", level: "productLine", status: "投入待复盘", summary: "大众线投放强度提升，但转化节奏偏慢。", feeRate: "2.8%", feeRateMom: "+11%", feeRateYoy: "+16%" },
    { key: "tecno-pova", sourceKey: "tecno", name: "POVA", level: "productLine", status: "重点异常", summary: "游戏线费用抬升快于收入改善，需要重点复盘。", feeRate: "3.6%", feeRateMom: "+15%", feeRateYoy: "+22%" },
    { key: "tecno-phantom", sourceKey: "tecno", name: "PHANTOM", level: "productLine", status: "投入有效", summary: "旗舰线费用可控，品牌拉动较明显。", feeRate: "2.2%", feeRateMom: "+4%", feeRateYoy: "+7%" },
    { key: "tecno-pop", sourceKey: "tecno", name: "POP", level: "productLine", status: "投入待复盘", summary: "入门线维持投放，但区域间回报分化明显。", feeRate: "1.9%", feeRateMom: "+3%", feeRateYoy: "+5%" },
  ],
  infinix: [
    { key: "infinix-note", sourceKey: "infinix", name: "NOTE", level: "productLine", status: "投入有效", summary: "核心销量线表现稳定，投放效率较高。", feeRate: "2.8%", feeRateMom: "+7%", feeRateYoy: "+10%" },
    { key: "infinix-hot", sourceKey: "infinix", name: "HOT", level: "productLine", status: "投入有效", summary: "主力促销线收入改善明显。", feeRate: "2.6%", feeRateMom: "+6%", feeRateYoy: "+9%" },
    { key: "infinix-zero", sourceKey: "infinix", name: "ZERO", level: "productLine", status: "投入待复盘", summary: "高端线品牌费用增加，但销量释放偏慢。", feeRate: "3.0%", feeRateMom: "+9%", feeRateYoy: "+12%" },
  ],
  itel: [
    { key: "itel-a", sourceKey: "itel", name: "A 系列", level: "productLine", status: "投入有效", summary: "基础款费用可控，销量修复平稳。", feeRate: "2.0%", feeRateMom: "+4%", feeRateYoy: "+7%" },
    { key: "itel-p", sourceKey: "itel", name: "P 系列", level: "productLine", status: "投入有效", summary: "长续航线促销效率较高。", feeRate: "2.2%", feeRateMom: "+5%", feeRateYoy: "+8%" },
    { key: "itel-city", sourceKey: "itel", name: "CITY", level: "productLine", status: "投入待复盘", summary: "城市渠道投放增加后回报仍需观察。", feeRate: "2.3%", feeRateMom: "+6%", feeRateYoy: "+9%" },
  ],
  philips: [
    { key: "philips-audio", sourceKey: "philips", name: "音频", level: "productLine", status: "投入待复盘", summary: "费用平稳，但收入修复较慢。", feeRate: "1.7%", feeRateMom: "-1%", feeRateYoy: "+2%" },
    { key: "philips-home", sourceKey: "philips", name: "家电", level: "productLine", status: "重点异常", summary: "家电线收入承压，费用仍需进一步压缩。", feeRate: "1.5%", feeRateMom: "-2%", feeRateYoy: "+1%" },
  ],
};

const state = {
  selectedBlockId: "rd",
  analysisView: "hq",
  selectedNodeKey: "tecno",
  currentLevel: "bu",
  trail: [],
  drilledBuKey: null,
  matrixHistory: [],
  filters: {
    bu: "ALL",
    region: "ALL",
    country: "ALL",
    productLine: "ALL",
  },
};

function levelLabel(level) {
  return { bu: "事业部BU", region: "区域", country: "国家" }[level] || "层级";
}

function infoDot(text) {
  return `<span class="info-dot" data-tip="${text.replace(/"/g, "&quot;")}">?</span>`;
}

function getBlock(id) {
  return waterfallBlocks.find((item) => item.id === id) || waterfallBlocks[0];
}

function flattenNodes(nodes, parentTrail = []) {
  const all = [];
  nodes.forEach((node) => {
    const trail = [...parentTrail, { key: node.key, name: node.name, level: node.level }];
    all.push({ ...node, trail });
    if (node.children) {
      all.push(...flattenNodes(node.children, trail));
    }
  });
  return all;
}

const allRegionNodes = flattenNodes(regionTree);

function getNode(key) {
  return allRegionNodes.find((node) => node.key === key) || allRegionNodes[0];
}

function getMatrixRateMetrics(node) {
  return (
    matrixRateMetrics[node.key] || {
      feeRate: "--",
      feeRateMom: "--",
      feeRateYoy: "--",
    }
  );
}

function getProductLine(node) {
  const rootKey = node.level === "bu" ? node.key : node.trail?.[0]?.key || node.key;
  return {
    tecno: "智能机",
    infinix: "智能机",
    itel: "功能机",
    philips: "生态产品",
  }[rootKey] || "智能机";
}

function getFilterOptions() {
  const productLineOptions = state.drilledBuKey
    ? (productLineRowsByBu[state.drilledBuKey] || []).map((row) => ({ value: row.name, label: row.name }))
    : [];

  return {
    bu: regionTree.map((node) => ({ value: node.key, label: node.name })),
    region: allRegionNodes.filter((node) => node.level === "region").map((node) => ({ value: node.key, label: node.name })),
    country: allRegionNodes.filter((node) => node.level === "country").map((node) => ({ value: node.key, label: node.name })),
    productLine: productLineOptions,
  };
}

function getBusinessRows() {
  const baseRows = regionTree;

  if (!state.drilledBuKey) {
    return baseRows;
  }

  return (productLineRowsByBu[state.drilledBuKey] || []).filter((row) => {
    return state.filters.productLine === "ALL" || row.name === state.filters.productLine;
  });
}

function getRegionRows() {
  return regionTree
    .filter((node) => state.filters.bu === "ALL" || node.key === state.filters.bu)
    .flatMap((node) => node.children || [])
    .filter((node) => {
      const matchRegion = state.filters.region === "ALL" || node.key === state.filters.region;
      const matchCountry = state.filters.country === "ALL" || (node.children || []).some((country) => country.key === state.filters.country);
      return matchRegion && matchCountry;
    });
}

function getActiveTrendNode() {
  if (state.filters.country !== "ALL") return getNode(state.filters.country);
  if (state.filters.region !== "ALL") return getNode(state.filters.region);
  if (state.filters.bu !== "ALL") return getNode(state.filters.bu);
  return getNode(state.selectedNodeKey);
}

function snapshotMatrixState() {
  return {
    selectedNodeKey: state.selectedNodeKey,
    drilledBuKey: state.drilledBuKey,
    filters: { ...state.filters },
  };
}

function restoreMatrixState(snapshot) {
  state.selectedNodeKey = snapshot.selectedNodeKey;
  state.drilledBuKey = snapshot.drilledBuKey;
  state.filters = { ...snapshot.filters };
}

function pushMatrixHistory() {
  state.matrixHistory.push(snapshotMatrixState());
}

function setFilter(type, value, recordHistory = true) {
  if (recordHistory) {
    pushMatrixHistory();
  }

  state.filters[type] = value;

  if (type === "bu") {
    if (value === "ALL") {
      state.drilledBuKey = null;
      state.filters.productLine = "ALL";
    } else if (state.drilledBuKey) {
      state.drilledBuKey = value;
      state.filters.productLine = "ALL";
    }
  }

  if (type === "region") {
    if (value === "ALL") {
      state.filters.country = "ALL";
    } else if (state.filters.country !== "ALL") {
      const countryNode = getNode(state.filters.country);
      const currentRegionKey = countryNode.trail?.[1]?.key;
      if (currentRegionKey !== value) {
        state.filters.country = "ALL";
      }
    }
  }

  if (type === "country" && value !== "ALL") {
    const countryNode = getNode(value);
    const regionKey = countryNode.trail?.[1]?.key;
    if (regionKey) state.filters.region = regionKey;
  }

  state.selectedNodeKey = getActiveTrendNode().key;
}

function drillBusinessView(buKey) {
  pushMatrixHistory();
  state.drilledBuKey = buKey;
  state.filters.bu = buKey;
  state.filters.productLine = "ALL";
  state.selectedNodeKey = buKey;
}

function goBackMatrixView() {
  const snapshot = state.matrixHistory.pop();
  if (snapshot) {
    restoreMatrixState(snapshot);
  }
}

function getLevelRows() {
  if (state.currentLevel === "bu") {
    return regionTree;
  }
  const parent = getNode(state.trail[state.trail.length - 1]?.key || state.selectedNodeKey);
  return parent.children || [];
}

function buildPath() {
  const path = [];
  if (state.currentLevel === "bu") {
    return [{ key: "root", name: "事业部BU", level: "root" }];
  }
  path.push({ key: "root", name: "事业部BU", level: "root" });
  state.trail.forEach((item) => path.push(item));
  return path;
}

function selectNode(node) {
  state.selectedNodeKey = node.key;
  if (node.level === "bu") {
    state.currentLevel = "bu";
    state.trail = [];
    return;
  }
  if (node.level === "region") {
    const parent = allRegionNodes.find((item) => (item.children || []).some((child) => child.key === node.key));
    state.currentLevel = "region";
    state.trail = parent ? [{ key: parent.key, name: parent.name, level: parent.level }] : [];
    return;
  }
  const regionParent = allRegionNodes.find((item) => (item.children || []).some((child) => child.key === node.key));
  const buParent = allRegionNodes.find((item) => (item.children || []).some((child) => child.key === regionParent?.key));
  state.currentLevel = "country";
  state.trail = [];
  if (buParent) {
    state.trail.push({ key: buParent.key, name: buParent.name, level: buParent.level });
  }
  if (regionParent) {
    state.trail.push({ key: regionParent.key, name: regionParent.name, level: regionParent.level });
  }
}

function drillNode(node) {
  state.selectedNodeKey = node.key;
  if (node.level === "bu" && node.children?.length) {
    state.currentLevel = "region";
    state.trail = [{ key: node.key, name: node.name, level: node.level }];
    return;
  }
  if (node.level === "region" && node.children?.length) {
    const buParent = allRegionNodes.find((item) => (item.children || []).some((child) => child.key === node.key));
    state.currentLevel = "country";
    state.trail = [];
    if (buParent) {
      state.trail.push({ key: buParent.key, name: buParent.name, level: buParent.level });
    }
    state.trail.push({ key: node.key, name: node.name, level: node.level });
  }
}

function jumpPath(item) {
  if (item.key === "root") {
    state.currentLevel = "bu";
    state.selectedNodeKey = regionTree[0].key;
    state.trail = [];
    return;
  }
  const node = getNode(item.key);
  selectNode(node);
}

function buildChart(seriesA, seriesB) {
  const width = 420;
  const height = 220;
  const paddingX = 28;
  const paddingTop = 20;
  const paddingBottom = 34;
  const maxValue = Math.max(...seriesA, ...seriesB, 0) + 2;
  const minValue = Math.min(...seriesA, ...seriesB, 0) - 2;
  const xStep = (width - paddingX * 2) / (seriesA.length - 1);
  const yScale = (height - paddingTop - paddingBottom) / (maxValue - minValue || 1);
  const x = (index) => paddingX + index * xStep;
  const y = (value) => paddingTop + (maxValue - value) * yScale;
  const path = (series) => series.map((value, index) => `${index === 0 ? "M" : "L"} ${x(index)} ${y(value)}`).join(" ");
  const zeroY = y(0);
  const months = ["1月", "2月", "3月", "4月", "5月", "6月"];

  return `
    <svg viewBox="0 0 ${width} ${height}" width="100%" height="260" aria-label="趋势图">
      ${months
        .map(
          (_, index) =>
            `<line x1="${x(index)}" y1="${paddingTop}" x2="${x(index)}" y2="${height - paddingBottom}" stroke="rgba(59,130,246,0.08)" stroke-width="1" />`,
        )
        .join("")}
      <line x1="${paddingX}" y1="${zeroY}" x2="${width - paddingX}" y2="${zeroY}" stroke="rgba(100,116,139,0.28)" stroke-dasharray="6 6" />
      <path d="${path(seriesA)}" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="${path(seriesB)}" fill="none" stroke="#34d399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      ${seriesA
        .map((value, index) => `<circle cx="${x(index)}" cy="${y(value)}" r="4.5" fill="#38bdf8" />`)
        .join("")}
      ${seriesB
        .map((value, index) => `<circle cx="${x(index)}" cy="${y(value)}" r="4.5" fill="#34d399" />`)
        .join("")}
      ${months
        .map(
          (month, index) =>
            `<text x="${x(index)}" y="${height - 10}" text-anchor="middle" fill="#6b85a3" font-size="12">${month}</text>`,
        )
        .join("")}
    </svg>
  `;
}

function getAnalysisViewLabel() {
  return analysisViews.find((view) => view.id === state.analysisView)?.label || analysisViews[0].label;
}

function getTableConfig() {
  const block = getBlock(state.selectedBlockId);
  const businessOverride = state.analysisView === "business" ? businessViewTableOverrides[block.id] : null;
  const detailConfig = detailTableConfigs[block.id];
  const linkName = detailConfig?.linkName || `${block.name}明细表`;

  if (businessOverride) {
    return {
      blockName: block.name,
      summary: businessOverride.summary,
      tip: `默认展示异常TOP5，更多明细请查询`,
      linkName,
      columns: businessOverride.columns,
      rows: businessOverride.rows,
      mode: "plain",
    };
  }

  return {
    blockName: block.name,
    summary: block.summary,
    tip: `默认展示异常TOP5，更多明细请查询`,
    linkName,
    columns: detailConfig?.columns || ["二级科目", "实际金额", "较预算", "环比", "同比", "标签", "解释判断", "原因说明"],
    rows: detailConfig?.rows || block.items,
    mode: detailConfig ? "warning" : "default",
  };
}

function renderAnalysisTabs() {
  return `
    <div class="analysis-tabs">
      ${analysisViews
        .map(
          (view) => `
            <button
              type="button"
              class="analysis-tab ${state.analysisView === view.id ? "active" : ""}"
              data-analysis-view="${view.id}"
            >
              ${view.label}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderWaterfall() {
  const blockCount = visibleWaterfallBlocks.length;
  const maxValue = Math.max(...visibleWaterfallBlocks.map((block) => Math.abs(block.diff)));
  return `
    <div class="linked-block">
      <div class="linked-header">
        <div class="section-title">总差异拆解图</div>
      </div>
      <div class="waterfall">
        <div class="waterfall-grid" style="grid-template-columns: repeat(${blockCount}, minmax(0, 1fr));">
          ${visibleWaterfallBlocks
            .map((block) => {
              const isActive = block.id === state.selectedBlockId;
              const barHeight = Math.max(30, (Math.abs(block.diff) / maxValue) * 98);
              const isPositive = block.diff >= 0;
              const zeroTop = 122;
              const style = isPositive
                ? `top:${zeroTop - barHeight}px;height:${barHeight}px;`
                : `top:${zeroTop}px;height:${barHeight}px;`;
              return `
                <div class="waterfall-card ${isActive ? "active" : ""}" data-select-block="${block.id}">
                  <div class="waterfall-stage">
                    <div class="zero-line" style="top:${zeroTop}px"></div>
                    <div class="waterfall-value">${block.diff > 0 ? "+" : ""}${block.diff}</div>
                    <div class="waterfall-bar ${isPositive ? "bar-positive" : "bar-negative"}" style="${style}"></div>
                  </div>
                  <div class="waterfall-label">
                    <div class="waterfall-name">${block.name}</div>
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
        <div class="waterfall-amount-grid" style="grid-template-columns: repeat(${blockCount}, minmax(0, 1fr));">
          ${visibleWaterfallBlocks
            .map(
              (block) => `
                <div class="waterfall-amount ${block.id === state.selectedBlockId ? "active" : ""}">
                  <span>总金额</span>
                  <strong>${block.totalAmount}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="waterfall-top-metrics waterfall-bottom-metrics" style="grid-template-columns: repeat(${blockCount}, minmax(0, 1fr));">
          ${visibleWaterfallBlocks
            .map(
              (block) => `
                <div class="waterfall-metric-panel ${block.id === state.selectedBlockId ? "active" : ""}">
                  <div class="waterfall-mini-card">
                    <div class="waterfall-mini-row"><span>总金额</span><strong>${block.totalAmount}</strong></div>
                    <div class="waterfall-mini-row"><span>费用率</span><strong>${block.feeRate}</strong></div>
                    <div class="waterfall-mini-row"><span>环比</span><strong>${block.momRate}</strong></div>
                    <div class="waterfall-mini-row"><span>同比</span><strong>${block.yoyRate}</strong></div>
                    <div class="waterfall-mini-row"><span>预算执行差异</span><strong>${block.budgetExecDiff}</strong></div>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="waterfall-total">
          <span>总部总差异汇总</span>
          <strong style="font-size:18px;color:#35506b;">+840 万元</strong>
        </div>
      </div>
    </div>
  `;
}

function renderTable() {
  const block = getBlock(state.selectedBlockId);
  return `
    <div class="linked-block">
      <div class="linked-header">
        <div class="section-title">费用解释明细表</div>
      </div>
      <div class="current-summary">
        <strong>当前选中：</strong>${block.name}
        <div class="subline">${block.summary}</div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>费用项</th>
              <th>实际金额</th>
              <th>较预算</th>
              <th>环比</th>
              <th>同比</th>
              <th>标签</th>
              <th>解释判断</th>
              <th>原因说明</th>
            </tr>
          </thead>
          <tbody>
            ${block.items
              .map(
                (item) => `
                  <tr>
                    <td>${item[0]}</td>
                    <td>${item[1]}</td>
                    <td>${item[2]}</td>
                    <td>${item[3]}</td>
                    <td>${item[4]}</td>
                    <td><span class="small-tag">${item[5]}</span></td>
                    <td><span class="judge-tag">${item[6]}</span></td>
                    <td>${item[7]}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderWaterfall() {
  const blockCount = visibleWaterfallBlocks.length;
  const maxValue = Math.max(...visibleWaterfallBlocks.map((block) => Math.abs(block.diff)));
  return `
    <div class="linked-block">
      <div class="waterfall">
        <div class="waterfall-grid" style="grid-template-columns: repeat(${blockCount}, minmax(0, 1fr));">
          ${visibleWaterfallBlocks
            .map((block) => {
              const isActive = block.id === state.selectedBlockId;
              const barHeight = Math.max(30, (Math.abs(block.diff) / maxValue) * 98);
              const isPositive = block.diff >= 0;
              const zeroTop = 122;
              const style = isPositive
                ? `top:${zeroTop - barHeight}px;height:${barHeight}px;`
                : `top:${zeroTop}px;height:${barHeight}px;`;
              return `
                <div class="waterfall-card ${isActive ? "active" : ""}" data-select-block="${block.id}">
                  <div class="waterfall-stage">
                    <div class="zero-line" style="top:${zeroTop}px"></div>
                    <div class="waterfall-value">${block.diff > 0 ? "+" : ""}${block.diff}</div>
                    <div class="waterfall-bar ${isPositive ? "bar-positive" : "bar-negative"}" style="${style}"></div>
                  </div>
                  <div class="waterfall-label">
                    <div class="waterfall-name">${block.name}</div>
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
        <div class="waterfall-amount-grid" style="grid-template-columns: repeat(${blockCount}, minmax(0, 1fr));">
          ${visibleWaterfallBlocks
            .map(
              (block) => `
                <div class="waterfall-amount ${block.id === state.selectedBlockId ? "active" : ""}">
                  <span>总金额</span>
                  <strong>${block.totalAmount}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="waterfall-top-metrics waterfall-bottom-metrics" style="grid-template-columns: repeat(${blockCount}, minmax(0, 1fr));">
          ${visibleWaterfallBlocks
            .map(
              (block) => `
                <div class="waterfall-metric-panel ${block.id === state.selectedBlockId ? "active" : ""}">
                  <div class="waterfall-mini-card">
                    <div class="waterfall-mini-row"><span>总金额</span><strong>${block.totalAmount}</strong></div>
                    <div class="waterfall-mini-row"><span>费用率</span><strong>${block.feeRate}</strong></div>
                    <div class="waterfall-mini-row"><span>环比</span><strong>${block.momRate}</strong></div>
                    <div class="waterfall-mini-row"><span>同比</span><strong>${block.yoyRate}</strong></div>
                    <div class="waterfall-mini-row"><span>预算执行差异</span><strong>${block.budgetExecDiff}</strong></div>
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
        <div class="waterfall-total">
          <span>实际费用与预算费用差异汇总</span>
          <strong style="font-size:18px;color:#35506b;">+840 万元</strong>
        </div>
      </div>
    </div>
  `;
}

function renderDetailTableCell(cell, index, tableConfig) {
  const tagIndex = tableConfig.columns.indexOf("标签");
  if (index === tagIndex && cell) {
    return `<td><span class="small-tag">${cell}</span></td>`;
  }
  return `<td>${cell || ""}</td>`;
}

function renderTable() {
  const tableConfig = getTableConfig();
  return `
    <div class="linked-block">
      <div class="linked-header">
        <div class="section-title">费用解释明细表</div>
      </div>
      <div class="current-summary">
        <strong>当前选中：</strong>${tableConfig.blockName}
        <div class="subline detail-tip">
          ${tableConfig.tip}
          <a class="detail-table-link" href="javascript:void(0)">《${tableConfig.linkName}》</a>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              ${tableConfig.columns.map((column) => `<th>${column}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${tableConfig.rows
              .slice(0, 5)
              .map(
                (row) => `
                  <tr>
                    ${row.map((cell, index) => renderDetailTableCell(cell, index, tableConfig)).join("")}
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderMatrixRow(node, leafLabel = "") {
  const selected = state.selectedNodeKey === node.key;
  const rateMetrics = node.feeRate
    ? { feeRate: node.feeRate, feeRateMom: node.feeRateMom, feeRateYoy: node.feeRateYoy }
    : getMatrixRateMetrics(node);
  const cells = ["投入有效", "投入待复盘", "重点异常"]
    .map((status) => {
      const active = node.status === status;
      const cls = active ? `${statusTone[status]} active` : "empty-cell";
      return `
        <td>
          <button class="matrix-cell ${cls}" ${active ? `data-select-node="${node.sourceKey || node.key}"` : ""}></button>
        </td>
      `;
    })
    .join("");

  const drill =
    node.level === "bu"
      ? `<button class="drill-link" data-drill-bu="${node.key}">查看产品线 »</button>`
      : node.children?.length
        ? `<button class="drill-link" data-filter-shortcut="country:${node.children[0]?.key || node.key}">查看国家 »</button>`
        : `<span class="matrix-leaf-tag">${leafLabel || levelLabel(node.level)}</span>`;

  return `
    <tr class="${selected ? "matrix-row-active" : ""}">
      <td>
        <div class="matrix-level-cell">
          <button class="matrix-level-name" data-select-node="${node.sourceKey || node.key}">${node.name}</button>
          ${drill}
        </div>
      </td>
      <td class="matrix-kpi-cell"><strong>${rateMetrics.feeRate}</strong></td>
      <td class="matrix-kpi-cell"><strong>${rateMetrics.feeRateMom}</strong></td>
      <td class="matrix-kpi-cell"><strong>${rateMetrics.feeRateYoy}</strong></td>
      ${cells}
      <td>${node.summary}</td>
    </tr>
  `;
}

function renderMatrixRows() {
  const businessRows = getBusinessRows();
  const regionRows = getRegionRows();

  const sectionRow = (title) => `
    <tr class="matrix-section-row">
      <td colspan="8">${title}</td>
    </tr>
  `;

  return `
    ${sectionRow(state.drilledBuKey ? "产品线视角" : "事业部视角")}
    ${businessRows.map((node) => renderMatrixRow(node, state.drilledBuKey ? "产品线" : "事业部BU")).join("")}
    ${sectionRow("区域视角")}
    ${
      regionRows.length
        ? regionRows.map((node) => renderMatrixRow(node, "区域")).join("")
        : `<tr class="matrix-empty-row"><td colspan="8">当前筛选下暂无区域数据</td></tr>`
    }
  `;
}

function renderMatrixFilters() {
  const options = getFilterOptions();
  const renderSelect = (label, type, optionList) => `
    <label class="matrix-filter">
      <span>${label}</span>
      <select data-filter-type="${type}">
        <option value="ALL">ALL</option>
        ${optionList
          .map((option) => `<option value="${option.value}" ${state.filters[type] === option.value ? "selected" : ""}>${option.label}</option>`)
          .join("")}
      </select>
    </label>
  `;

  return `
    <div class="matrix-filters">
      ${state.matrixHistory.length ? `<button class="matrix-back-btn" data-matrix-back="1">← 返回</button>` : ""}
      ${renderSelect("事业部", "bu", options.bu)}
      ${renderSelect("区域", "region", options.region)}
      ${renderSelect("国家", "country", options.country)}
      ${renderSelect("产品线", "productLine", options.productLine)}
    </div>
  `;
}

function renderMatrix() {
  return `
    <div class="matrix-wrap">
      <div class="matrix-head">
        <div>
          <div class="section-title">区域结果矩阵</div>
          <div class="section-sub">默认展示事业部，新增筛选后可同时查看事业部视角与区域视角，并联动右侧趋势图。</div>
        </div>
        <div class="hint">点击色块联动趋势</div>
      </div>
      ${renderMatrixFilters()}
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>展示层级</th>
              <th>费率</th>
              <th>费率环比</th>
              <th>费率同比</th>
              <th>投入有效${infoDot(matrixHelp["投入有效"])}</th>
              <th>投入待复盘${infoDot(matrixHelp["投入待复盘"])}</th>
              <th>重点异常${infoDot(matrixHelp["重点异常"])}</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>${renderMatrixRows()}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderTrend() {
  const node = getActiveTrendNode();
  return `
    <div class="trend-wrap">
      <div class="trend-head">
        <div>
          <div class="section-title">投入趋势联动</div>
          <div class="section-sub">查看所选${levelLabel(node.level)}的月度市场费用变动率与滞后收入变动率趋势。</div>
        </div>
        <div class="region-badge">${node.name}</div>
      </div>
      <div class="trend-metrics">
        <div class="trend-metrics-grid">
          <div><strong>收入变动率</strong>${infoDot(calcHelp["收入变动率"])}： ${node.revenueRate}</div>
          <div><strong>费用变动率</strong>${infoDot(calcHelp["费用变动率"])}： ${node.spendRate}</div>
          <div><strong>偏离度</strong>${infoDot(calcHelp["偏离度"])}： ${node.deviation}</div>
          <div><strong>弹性</strong>${infoDot(calcHelp["弹性"])}： ${node.elasticity}</div>
        </div>
        <div class="trend-summary"><strong>总结：</strong>${node.summary}</div>
      </div>
      <div class="chart-wrap">
        ${buildChart(node.spend, node.revenue)}
        <div class="chart-legend">
          <span><span class="legend-dot" style="background:#38bdf8"></span>费用变动率</span>
          <span><span class="legend-dot" style="background:#34d399"></span>收入变动率</span>
        </div>
      </div>
    </div>
  `;
}

function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="page-shell">
      <div class="dashboard">
        <section class="panel">
          <div class="panel-header">
            <span class="module-tag">模块 1</span>
            <div>
              <div class="panel-title">总体判断</div>
              <div class="panel-subtitle">从总部视角快速判断本期费用状态、主要驱动与优先跟进事项。</div>
            </div>
          </div>
          <div class="judgement">${overview.summary}</div>
          <div style="margin-top:24px;">
            <div class="panel-header" style="margin-bottom:14px;">
              <span class="module-tag">重点关注</span>
              <div>
                <div class="panel-title">重点关注对象</div>
                <div class="panel-subtitle">把本周需要解释、重点复盘和持续跟踪的对象收进总体判断，方便管理层在首页直接抓重点。</div>
              </div>
            </div>
            <div class="focus-grid">
              ${focusCards
                .map(
                  (item) => `
                    <div class="focus-card">
                      <div class="focus-top">
                        <div class="focus-icon">${item[0]}</div>
                        <div>
                          <div class="focus-priority">${item[1]}</div>
                          <div class="focus-category">${item[2]}</div>
                          <div class="focus-owner">${item[3]}</div>
                        </div>
                      </div>
                      <div class="focus-text">${item[4]}</div>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>
        </section>

        <section class="panel linked-panel">
          <div class="panel-header">
            <span class="module-tag">模块 2-3</span>
            <div>
              <div class="panel-title">差异拆解与费用解释联动分析</div>
            </div>
          </div>
          ${renderAnalysisTabs()}
          ${renderWaterfall()}
          ${renderTable()}
        </section>

        <section class="panel">
          <div class="panel-header">
            <span class="module-tag">模块 4</span>
            <div>
              <div class="panel-title">区域变动费用效果分析</div>
              <div class="panel-subtitle">从区域维度判断投入是否有效，并联动查看费用与滞后收入的月度趋势。</div>
            </div>
          </div>
          <div class="region-tip">先看左侧区域结果矩阵，再点击色块联动右侧趋势图。这个模块适合总部看区域效率，而不是只看费用绝对值。</div>
          <div class="region-grid">
            ${renderMatrix()}
            ${renderTrend()}
          </div>
        </section>
      </div>
    </div>
  `;

  bindEvents();
}

function renderStatusDotCell(node, status, index) {
  const toneList = ["dot-green", "dot-amber", "dot-red"];
  const active = node.status === status;
  return `
    <td class="eye-dot-cell">
      ${
        active
          ? `<button class="eye-status-dot ${toneList[index] || "dot-gray"}" data-select-node="${node.sourceKey || node.key}"></button>`
          : `<span class="eye-empty-value">--</span>`
      }
    </td>
  `;
}

function renderEyeMatrixRow(node, groupLabel) {
  const selected = state.selectedNodeKey === (node.sourceKey || node.key);
  const rateMetrics = node.feeRate
    ? { feeRate: node.feeRate, feeRateMom: node.feeRateMom, feeRateYoy: node.feeRateYoy }
    : getMatrixRateMetrics(node);

  return `
    <tr class="${selected ? "eye-row-active" : ""}">
      <td>${rateMetrics.feeRate}</td>
      <td>${rateMetrics.feeRateMom}</td>
      <td>${rateMetrics.feeRateYoy}</td>
      ${Object.keys(statusTone).map((status, index) => renderStatusDotCell(node, status, index)).join("")}
      <td>${node.summary}</td>
    </tr>
  `;
}

function renderEyeMatrixSectionHeader() {
  return `
    <tr class="eye-section-header-row">
      <td>费率</td>
      <td>费率环比</td>
      <td>费率同比</td>
      <td>投入有效</td>
      <td>投入待复盘</td>
      <td>重点异常</td>
      <td>说明</td>
    </tr>
  `;
}

function renderEyeTree() {
  const businessRows = getBusinessRows();
  const regionRows = getRegionRows();
  const businessTitle = state.drilledBuKey ? "产品线" : "事业部";

  const businessItems = businessRows
    .map(
      (node) => `
        <div class="eye-tree-item">
          <button data-select-node="${node.sourceKey || node.key}">${node.name}</button>
          ${node.level === "bu" ? `<button class="eye-tree-drill" data-drill-bu="${node.key}">»</button>` : ""}
        </div>
      `,
    )
    .join("");

  const regionItems = regionRows
    .map(
      (node) => `
        <div class="eye-tree-item">
          <button data-select-node="${node.key}">${node.name}</button>
          ${node.children?.length ? `<button class="eye-tree-drill" data-filter-shortcut="country:${node.children[0]?.key || node.key}">»</button>` : ""}
        </div>
      `,
    )
    .join("");

  return `
    <aside class="eye-tree">
      ${state.matrixHistory.length ? `<button class="eye-back-chip" data-matrix-back="1">↩ 返回</button>` : ""}
      <div class="eye-tree-group">
        <div class="eye-tree-title">${businessTitle}</div>
        ${businessItems || `<div class="eye-tree-empty">暂无数据</div>`}
      </div>
      <div class="eye-tree-group">
        <div class="eye-tree-title">地区部</div>
        ${regionItems || `<div class="eye-tree-empty">暂无数据</div>`}
      </div>
    </aside>
  `;
}

function renderEyeMatrixTable() {
  const businessRows = getBusinessRows();
  const regionRows = getRegionRows();
  const businessTitle = state.drilledBuKey ? "产品线" : "事业部";
  const rows = [
    ...businessRows.map((node) => renderEyeMatrixRow(node, businessTitle)),
    ...(regionRows.length ? [renderEyeMatrixSectionHeader()] : []),
    ...regionRows.map((node) => renderEyeMatrixRow(node, "地区部")),
  ];

  return `
    <div class="eye-matrix-card">
      <div class="eye-matrix-layout">
        ${renderEyeTree()}
        <div class="eye-table-shell">
          <table class="eye-main-table">
            <colgroup>
              <col class="eye-col-rate" />
              <col class="eye-col-rate" />
              <col class="eye-col-rate" />
              <col class="eye-col-status" />
              <col class="eye-col-status" />
              <col class="eye-col-status" />
              <col class="eye-col-desc" />
            </colgroup>
            <thead>
              <tr>
                <th>费率</th>
                <th>费率环比</th>
                <th>费率同比</th>
                <th>投入有效</th>
                <th>投入待复盘</th>
                <th>重点异常</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              ${rows.length ? rows.join("") : `<tr><td colspan="7">当前筛选下暂无数据</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderEyeOverview() {
  return `
    <section class="eye-card eye-overview-card">
      <div class="eye-section-title">总体判断</div>
      <div class="eye-overview-body">
        <div class="judgement eye-judgement">${overview.summary}</div>
        <div class="eye-focus-row">
          ${focusCards
            .map(
              (item) => `
                <div class="focus-card eye-focus-card">
                  <div class="focus-top">
                    <div class="focus-icon">${item.index}</div>
                    <div>
                      <div class="focus-priority">重点跟踪事项</div>
                      <div class="focus-owner">${item.title}</div>
                    </div>
                  </div>
                  <div class="focus-category">${item.summary}</div>
                  <div class="focus-text">
                    ${item.lines.map((line) => `<p>${line}</p>`).join("")}
                  </div>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderEyeRegionAnalysis() {
  return `
    <section class="eye-card eye-region-card">
      <div class="eye-section-title">市场费用投入效果分析</div>
      <div class="eye-region-layout">
        <div class="eye-region-main">
          ${renderEyeMatrixTable()}
        </div>
        <div class="eye-region-trend">
          ${renderTrend()}
        </div>
      </div>
    </section>
  `;
}

function renderEyePeriodFilter() {
  return `
    <div class="eye-filterbar">
      <label class="eye-period-field">
        <span>期间</span>
        <input value="202603" aria-label="开始期间" />
      </label>
      <span class="eye-range-separator">--</span>
      <label class="eye-period-field">
        <input value="202603" aria-label="结束期间" />
      </label>
    </div>
  `;
}

function renderApp() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="eye-page">
      <header class="eye-topbar">
        <button class="eye-back-button" data-eye-back="1">↩ 返回</button>
        <span class="eye-diamond">◆</span>
        <div class="eye-title">费用分析</div>
        <div class="eye-unit">单位：万元</div>
      </header>
      ${renderEyePeriodFilter()}
      <main class="eye-content">
        ${renderEyeOverview()}
        <section class="eye-card eye-analysis-card">
          <div class="eye-section-title">预实差异解释明细</div>
          ${renderAnalysisTabs()}
          ${renderWaterfall()}
          ${renderTable()}
        </section>
        ${renderEyeRegionAnalysis()}
      </main>
    </div>
  `;

  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-eye-back]").forEach((node) => {
    node.addEventListener("click", () => {
      window.history.back();
    });
  });

  document.querySelectorAll("[data-analysis-view]").forEach((node) => {
    node.addEventListener("click", () => {
      state.analysisView = node.dataset.analysisView;
      renderApp();
    });
  });

  document.querySelectorAll("[data-select-block]").forEach((node) => {
    node.addEventListener("click", () => {
      state.selectedBlockId = node.dataset.selectBlock;
      renderApp();
    });
  });

  document.querySelectorAll("[data-select-node]").forEach((node) => {
    node.addEventListener("click", () => {
      state.selectedNodeKey = node.dataset.selectNode;
      renderApp();
    });
  });

  document.querySelectorAll("[data-filter-shortcut]").forEach((node) => {
    node.addEventListener("click", () => {
      const [type, value] = node.dataset.filterShortcut.split(":");
      setFilter(type, value);
      renderApp();
    });
  });

  document.querySelectorAll("[data-drill-bu]").forEach((node) => {
    node.addEventListener("click", () => {
      drillBusinessView(node.dataset.drillBu);
      renderApp();
    });
  });

  document.querySelectorAll("[data-matrix-back]").forEach((node) => {
    node.addEventListener("click", () => {
      goBackMatrixView();
      renderApp();
    });
  });

  document.querySelectorAll("[data-filter-type]").forEach((node) => {
    node.addEventListener("change", () => {
      setFilter(node.dataset.filterType, node.value);
      renderApp();
    });
  });
}

renderApp();
