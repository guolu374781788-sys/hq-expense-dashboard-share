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
    summary: "项目集中验收导致费用前置确认，是本月最大的单项差异来源。",
    items: [
      ["外包开发费", "520 万元", "+165 万元", "+31.2%", "+38.4%", "一次性事项", "本周需解释", "重点项目验收集中在本月确认。"],
      ["测试认证费", "210 万元", "+118 万元", "+42.6%", "+49.0%", "节奏前置", "持续跟踪", "多机型认证推进提前。"],
      ["人工成本", "860 万元", "+82 万元", "+5.4%", "+11.9%", "持续性增长", "可接受", "研发编制扩充后稳步抬升。"],
    ],
  },
  {
    id: "region",
    name: "区域费用",
    subtitle: "区域经营投入增加",
    diff: 310,
    feeRate: "2.7%",
    momRate: "+6%",
    yoyRate: "+9%",
    budgetExecDiff: "+11%",
    summary: "部分区域经营型费用增速快于收入改善，需要从区域效率角度重点复盘。",
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
    summary: "培训与支持类费用温和增长，整体可控。",
    items: [
      ["培训费", "42 万元", "+11 万元", "+12.8%", "+16.2%", "正常波动", "可接受", "季度培训计划集中落地。"],
      ["办公保障费", "96 万元", "+21 万元", "+4.1%", "+5.7%", "正常波动", "可接受", "设备和系统折旧带来波动。"],
      ["行政治理项目", "68 万元", "+18 万元", "+7.8%", "+9.4%", "节奏正常", "持续跟踪", "组织优化配套项目推进。"],
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

const focusCards = [
  ["01", "P1 本周解释", "重点解释部门", "研发中心", "研发费用较预算增加 420 万元，主要由外包开发和测试认证费用前置确认带动，需要说明后续是否回落。"],
  ["02", "P1 重点复盘", "重点复盘区域", "东非", "区域经营费用增长 15%，但滞后收入下降 4%，建议专项复盘投放效率。"],
  ["03", "P3 持续跟踪", "重点跟踪科目", "咨询服务费", "咨询服务费连续两月高增长，需核实预算外专项范围、合同周期以及后续费用节奏。"],
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

const state = {
  selectedBlockId: "rd",
  selectedNodeKey: "tecno",
  currentLevel: "bu",
  trail: [],
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

function renderWaterfall() {
  const maxValue = Math.max(...waterfallBlocks.map((block) => Math.abs(block.diff)));
  return `
    <div class="linked-block">
      <div class="linked-header">
        <div class="section-title">总差异拆解图</div>
      </div>
      <div class="waterfall">
        <div class="waterfall-grid">
          ${waterfallBlocks
            .map((block) => {
              const isActive = block.id === state.selectedBlockId;
              const barHeight = Math.max(42, (Math.abs(block.diff) / maxValue) * 170);
              const isPositive = block.diff >= 0;
              const zeroTop = 200;
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
                    <div class="waterfall-subtitle">${block.subtitle}</div>
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
        <div class="waterfall-top-metrics waterfall-bottom-metrics">
          ${waterfallBlocks
            .map(
              (block) => `
                <div class="waterfall-metric-panel ${block.id === state.selectedBlockId ? "active" : ""}">
                  <div class="waterfall-mini-card">
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

function renderMatrixRows() {
  return getLevelRows()
    .map((node) => {
      const selected = state.selectedNodeKey === node.key;
      const cells = ["投入有效", "投入待复盘", "重点异常"]
        .map((status) => {
          const active = node.status === status;
          const cls = active ? `${statusTone[status]} active` : "empty-cell";
          return `
            <td>
              <button class="matrix-cell ${cls}" ${active ? `data-select-node="${node.key}"` : ""}></button>
            </td>
          `;
        })
        .join("");

      const drill = node.children?.length
        ? `<button class="drill-link" data-drill-node="${node.key}">查看${node.level === "bu" ? "区域" : "国家"} »</button>`
        : "";

      return `
        <tr class="${selected ? "matrix-row-active" : ""}">
          <td>
            <div class="matrix-level-cell">
              <button class="matrix-level-name" data-select-node="${node.key}">${node.name}</button>
              ${drill || `<span class="matrix-leaf-tag">${levelLabel(node.level)}</span>`}
            </div>
          </td>
          <td>
            ${node.summary}
            <div class="matrix-meta">
              <div class="subline"><strong>收入变动率：</strong><span>${node.revenueRate}</span></div>
              <div class="subline"><strong>费用变动率：</strong><span>${node.spendRate}</span></div>
              <div class="subline"><strong>偏离度：</strong><span>${node.deviation}</span></div>
              <div class="subline"><strong>弹性：</strong><span>${node.elasticity}</span></div>
            </div>
          </td>
          ${cells}
        </tr>
      `;
    })
    .join("");
}

function renderMatrix() {
  const path = buildPath();
  return `
    <div class="matrix-wrap">
      <div class="matrix-head">
        <div>
          <div class="section-title">区域结果矩阵</div>
          <div class="section-sub">默认展示事业部，点击蓝色入口可下钻到区域与国家，并联动右侧趋势图。</div>
        </div>
        <div class="hint">点击色块联动趋势</div>
      </div>
      <div class="matrix-path">
        ${path
          .map(
            (item, index) => `
              <button class="path-chip ${index === path.length - 1 ? "active" : ""}" data-jump-path="${item.key}">${item.name}</button>
              ${index === path.length - 1 ? "" : '<span class="path-sep">/</span>'}
            `,
          )
          .join("")}
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>展示层级</th>
              <th>说明</th>
              <th>投入有效${infoDot(matrixHelp["投入有效"])}</th>
              <th>投入待复盘${infoDot(matrixHelp["投入待复盘"])}</th>
              <th>重点异常${infoDot(matrixHelp["重点异常"])}</th>
            </tr>
          </thead>
          <tbody>${renderMatrixRows()}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderTrend() {
  const node = getNode(state.selectedNodeKey);
  return `
    <div class="trend-wrap">
      <div class="trend-head">
        <div>
          <div class="section-title">区域趋势联动</div>
          <div class="section-sub">查看所选${levelLabel(node.level)}的月度费用变动率与滞后收入变动率趋势。</div>
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

function bindEvents() {
  document.querySelectorAll("[data-select-block]").forEach((node) => {
    node.addEventListener("click", () => {
      state.selectedBlockId = node.dataset.selectBlock;
      renderApp();
    });
  });

  document.querySelectorAll("[data-select-node]").forEach((node) => {
    node.addEventListener("click", () => {
      selectNode(getNode(node.dataset.selectNode));
      renderApp();
    });
  });

  document.querySelectorAll("[data-drill-node]").forEach((node) => {
    node.addEventListener("click", () => {
      drillNode(getNode(node.dataset.drillNode));
      renderApp();
    });
  });

  document.querySelectorAll("[data-jump-path]").forEach((node) => {
    node.addEventListener("click", () => {
      jumpPath({ key: node.dataset.jumpPath });
      renderApp();
    });
  });
}

renderApp();
