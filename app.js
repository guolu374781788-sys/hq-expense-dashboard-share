const overview = {
  actual: "8,520",
  diff: "+840 万元",
  mom: "+8.3%",
  yoy: "+12.4%",
  summary:
    '本期实际费用 8,520 万元，环比 +8.3%，同比 +12.4%，较预算超支 5.1%。整体看，本月费用属于 <span class="pill pill-amber">局部异常</span>，主因是 <span class="pill pill-sky">研发费用一次性前置</span> 和 <span class="pill pill-sky">区域经营投入增加</span>；其中 <strong>区域费用效率问题优先级更高</strong>。',
};

const blocks = [
  {
    id: "rd",
    name: "研发费用",
    subtitle: "研发费用一次性前置",
    diff: 420,
    feeRate: "2.9%",
    momRate: "+10%",
    yoyRate: "+20%",
    budgetExecDiff: "+16%",
    summary: "项目集中验收导致费用前置确认。",
    items: [
      ["外包开发费", "520", "+165", "+31.2%", "+38.4%", "一次性事项", "本周需解释", "重点项目验收集中在本月确认。"],
      ["测试认证费", "210", "+118", "+42.6%", "+49.0%", "节奏前置", "持续跟踪", "多机型认证推进提前。"],
      ["人工成本", "860", "+82", "+5.4%", "+11.9%", "持续性增长", "可接受", "研发编制扩充后稳步抬升。"],
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
    summary: "部分区域费用增长快于滞后收入改善。",
    items: [
      ["市场推广费", "190", "+86", "+24.3%", "+31.5%", "经营投入", "重点复盘", "新品推广和终端活动集中投放。"],
      ["渠道激励费", "145", "+58", "+18.7%", "+25.4%", "经营投入", "持续跟踪", "返利前置带动渠道投入增加。"],
      ["差旅与拓展费", "88", "+27", "+11.2%", "+16.8%", "经营投入", "可接受", "区域拓店和客户拜访增加。"],
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
    summary: "共享服务与咨询类费用抬升。",
    items: [
      ["咨询服务费", "180", "+63", "+28.4%", "+41.3%", "专项投入", "本周需解释", "流程优化专项启动导致顾问费增加。"],
      ["共享服务费", "135", "+28", "+7.0%", "+10.5%", "节奏前置", "持续跟踪", "部分服务合同提前结算。"],
      ["行政费用", "210", "+34", "+6.3%", "+8.1%", "正常波动", "可接受", "办公与差旅支出小幅增长。"],
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
    summary: "培训与支持类费用温和增长。",
    items: [
      ["培训费", "42", "+11", "+12.8%", "+16.2%", "正常波动", "可接受", "季度培训计划集中落地。"],
      ["办公保障费", "96", "+21", "+4.1%", "+5.7%", "正常波动", "可接受", "设备和系统折旧带来波动。"],
      ["行政治理项目", "68", "+18", "+7.8%", "+9.4%", "节奏正常", "持续跟踪", "组织优化配套项目推进。"],
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
    summary: "跨期调整和重分类形成对冲。",
    items: [
      ["跨期调整", "-90", "-90", "-", "-", "结算调整", "可接受", "前期多计费用在本月回冲。"],
      ["费用重分类", "-42", "-42", "-", "-", "口径修正", "可接受", "部分费用重分类至其他项目。"],
      ["项目对冲", "-28", "-28", "-", "-", "阶段回摆", "可接受", "计提回冲影响有限。"],
    ],
  },
];

const focuses = [
  ["01", "P1 本周解释", "重点解释部门", "研发中心", "研发费用较预算增加 420 万元，主要由外包开发和测试认证费用前置确认带动，需要说明后续是否回落。"],
  ["02", "P1 重点复盘", "重点复盘区域", "东非", "区域经营费用增长 15%，但滞后收入下降 4%，建议专项复盘投放效率。"],
  ["03", "P3 持续跟踪", "重点跟踪科目", "咨询服务费", "咨询服务费连续两月高增长，需核实预算外专项范围与后续节奏。"],
];

const tree = [
  {
    key: "tecno",
    level: "bu",
    name: "TECNO",
    status: "投入待复盘",
    r: "+6%",
    s: "+11%",
    d: "+5pct",
    e: "0.55",
    summary: "整体投入仍在增长，但区域回报分化明显。",
    spend: [3, 4, 6, 8, 9, 10],
    revenue: [1, 2, 3, 4, 5, 5],
    children: [
      {
        key: "tecno-east",
        level: "region",
        name: "东非",
        status: "重点异常",
        r: "-4%",
        s: "+15%",
        d: "+19pct",
        e: "-0.27",
        summary: "经营型费用明显增加，但滞后收入下滑。",
        spend: [4, 7, 9, 11, 13, 15],
        revenue: [6, 3, 1, -2, -3, -4],
        children: [
          { key: "ke", level: "country", name: "肯尼亚", status: "重点异常", r: "-6%", s: "+18%", d: "+24pct", e: "-0.33", summary: "投入增加但收入兑现偏慢。", spend: [5, 7, 10, 12, 15, 18], revenue: [4, 2, 0, -2, -4, -6] },
          { key: "tz", level: "country", name: "坦桑尼亚", status: "投入待复盘", r: "+1%", s: "+8%", d: "+7pct", e: "0.13", summary: "收入改善不足，建议复盘渠道激励。", spend: [1, 3, 4, 6, 7, 8], revenue: [0, 0, 1, 1, 1, 1] },
        ],
      },
      {
        key: "tecno-sea",
        level: "region",
        name: "东南亚",
        status: "投入有效",
        r: "+10%",
        s: "+12%",
        d: "+2pct",
        e: "0.83",
        summary: "投入增长后收入同步改善。",
        spend: [2, 4, 6, 8, 10, 12],
        revenue: [1, 3, 5, 7, 9, 10],
        children: [
          { key: "id", level: "country", name: "印尼", status: "投入有效", r: "+12%", s: "+13%", d: "+1pct", e: "0.92", summary: "终端活动与收入增长同步。", spend: [2, 4, 6, 8, 10, 13], revenue: [1, 3, 5, 7, 9, 12] },
        ],
      },
    ],
  },
  {
    key: "infinix",
    level: "bu",
    name: "Infinix",
    status: "投入有效",
    r: "+9%",
    s: "+3%",
    d: "-6pct",
    e: "3.00",
    summary: "投入增长较温和，但重点区域收入改善明显。",
    spend: [1, 2, 3, 3, 4, 4],
    revenue: [2, 3, 4, 5, 6, 7],
    children: [
      {
        key: "infinix-me",
        level: "region",
        name: "中东",
        status: "投入有效",
        r: "+12%",
        s: "+2%",
        d: "-10pct",
        e: "6.00",
        summary: "费用稳定情况下收入明显增长。",
        spend: [0, 1, 1, 2, 2, 2],
        revenue: [2, 4, 6, 8, 10, 12],
        children: [
          { key: "sa", level: "country", name: "沙特", status: "投入有效", r: "+11%", s: "+1%", d: "-10pct", e: "11.00", summary: "品牌力和终端效率同步改善。", spend: [0, 0, 1, 1, 1, 1], revenue: [2, 3, 5, 7, 9, 11] },
        ],
      },
    ],
  },
  {
    key: "itel",
    level: "bu",
    name: "itel",
    status: "投入有效",
    r: "+7%",
    s: "+5%",
    d: "-2pct",
    e: "1.40",
    summary: "多个市场费用可控，收入改善平稳。",
    spend: [1, 2, 2, 3, 4, 5],
    revenue: [1, 2, 3, 4, 5, 7],
    children: [
      {
        key: "itel-africa",
        level: "region",
        name: "非洲其他区域",
        status: "投入有效",
        r: "+8%",
        s: "+5%",
        d: "-3pct",
        e: "1.60",
        summary: "投入增长与收入改善基本同步。",
        spend: [1, 2, 2, 3, 4, 5],
        revenue: [1, 2, 3, 4, 5, 8],
        children: [
          { key: "ug", level: "country", name: "乌干达", status: "投入有效", r: "+9%", s: "+4%", d: "-5pct", e: "2.25", summary: "终端运营效率提升。", spend: [1, 1, 2, 2, 3, 4], revenue: [1, 2, 3, 4, 6, 9] },
        ],
      },
    ],
  },
  {
    key: "philips",
    level: "bu",
    name: "Philips",
    status: "投入待复盘",
    r: "-1%",
    s: "+1%",
    d: "+2pct",
    e: "-1.00",
    summary: "费用稳定但收入端动能不足。",
    spend: [0, 1, 1, 1, 1, 1],
    revenue: [2, 2, 1, 1, 0, -1],
    children: [
      {
        key: "philips-eu",
        level: "region",
        name: "欧洲",
        status: "投入待复盘",
        r: "0%",
        s: "+2%",
        d: "+2pct",
        e: "0.00",
        summary: "费用略升但收入未明显改善。",
        spend: [0, 1, 1, 1, 2, 2],
        revenue: [1, 1, 1, 0, 0, 0],
        children: [
          { key: "de", level: "country", name: "德国", status: "投入待复盘", r: "0%", s: "+3%", d: "+3pct", e: "0.00", summary: "促销投入略增，但收入改善暂不明显。", spend: [0, 1, 1, 2, 2, 3], revenue: [1, 1, 1, 1, 0, 0] },
        ],
      },
    ],
  },
];

const help = {
  r: "滞后1个月的近3个月收入均值，相对前3个月均值的变化率。",
  s: "近3个月经营型变动费用均值，相对前3个月均值的变化率。",
  d: "费用变化率减去滞后收入变化率；越接近0通常说明越匹配。",
  e: "滞后收入变化率除以费用变化率，用于衡量收入对投入变化的响应强弱。",
};

const matrixHelp = {
  effective: "投入有效：费用投入后，收入同步改善，或在费用收缩情况下收入仍保持增长。",
  review: "投入待复盘：费用变化后，收入改善不明显，或费用收缩后收入同步走弱，需要复盘投入节奏和方向。",
  abnormal: "重点异常：费用增加的同时收入下滑，投入与销售结果明显背离，需要优先关注。",
};

const state = { block: "rd", level: "bu", bu: "tecno", region: "tecno-east", node: "tecno" };

const esc = (v) => String(v).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
const tone = (s) => (s === "投入有效" ? "tone-emerald" : s === "投入待复盘" ? "tone-amber" : "tone-rose");
const totalDiff = () => blocks.reduce((n, b) => n + b.diff, 0);
const currentBlock = () => blocks.find((b) => b.id === state.block) || blocks[0];
const currentBu = () => tree.find((b) => b.key === state.bu) || tree[0];
const currentRegion = () => currentBu().children.find((r) => r.key === state.region) || currentBu().children[0];
const currentNode = () => (state.level === "bu" ? currentBu() : state.level === "region" ? currentRegion() : currentRegion().children.find((c) => c.key === state.node) || currentRegion().children[0]);
const rows = () => (state.level === "bu" ? tree : state.level === "region" ? currentBu().children : currentRegion().children);

function setLevel(level, opts = {}) {
  state.level = level;
  if (level === "bu") {
    state.bu = opts.bu || state.bu;
    state.region = currentBu().children[0].key;
    state.node = state.bu;
  } else if (level === "region") {
    state.bu = opts.bu || state.bu;
    state.region = opts.region || currentBu().children[0].key;
    state.node = state.region;
  } else {
    state.bu = opts.bu || state.bu;
    state.region = opts.region || state.region;
    state.node = opts.country || currentRegion().children[0].key;
  }
}

function line(vs, w, h, px, py, min, max) {
  const step = (w - px * 2) / (vs.length - 1);
  return vs.map((v, i) => `${px + step * i},${h - py - ((v - min) / (max - min || 1)) * (h - py * 2)}`).join(" ");
}

function metricPanel(block) {
  return `
    <div class="waterfall-metric-panel ${state.block === block.id ? "active" : ""}">
      <div class="waterfall-mini-card">
        <div class="waterfall-mini-row"><span>费用率</span><strong>${block.feeRate}</strong></div>
        <div class="waterfall-mini-row"><span>环比</span><strong>${block.momRate}</strong></div>
        <div class="waterfall-mini-row"><span>同比</span><strong>${block.yoyRate}</strong></div>
        <div class="waterfall-mini-row"><span>预算执行差异</span><strong>${block.budgetExecDiff}</strong></div>
      </div>
    </div>
  `;
}

function waterfallHtml() {
  const max = Math.max(0, ...blocks.map((b) => b.diff));
  const min = Math.min(0, ...blocks.map((b) => b.diff));
  const range = Math.max(1, max - min);
  return `
    <div class="waterfall">
      <div class="waterfall-grid">
        ${blocks
          .map((b) => {
            const h = Math.max((Math.abs(b.diff) / range) * 78, 14);
            const bottom = b.diff >= 0 ? ((0 - min) / range) * 82 : ((b.diff - min) / range) * 82;
            return `
              <button class="waterfall-card ${state.block === b.id ? "active" : ""}" data-waterfall="${b.id}">
                <div class="waterfall-stage">
                  <div class="zero-line" style="bottom:${((0 - min) / range) * 82 + 9}%"></div>
                  <div class="waterfall-value">${b.diff > 0 ? "+" : ""}${b.diff}</div>
                  <div class="waterfall-bar ${b.diff >= 0 ? "bar-positive" : "bar-negative"}" style="height:${h}%;bottom:${bottom + 9}%"></div>
                </div>
                <div class="waterfall-label">
                  <div class="waterfall-name">${esc(b.name)}</div>
                  <div class="waterfall-subtitle">${esc(b.subtitle)}</div>
                </div>
              </button>
            `;
          })
          .join("")}
      </div>
      <div class="waterfall-top-metrics waterfall-bottom-metrics">
        ${blocks.map((b) => metricPanel(b)).join("")}
      </div>
      <div class="waterfall-total"><span>总部总差异汇总</span><strong>${totalDiff() > 0 ? "+" : ""}${totalDiff()} 万元</strong></div>
    </div>
  `;
}

function explainHtml() {
  const b = currentBlock();
  return `
    <div class="current-summary"><strong>当前选中：</strong>${esc(b.name)}<span class="subline" style="display:block;margin-top:6px;">${esc(b.summary)}</span></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>费用项</th><th>实际金额</th><th>较预算</th><th>环比</th><th>同比</th><th>标签</th><th>解释判断</th><th>原因说明</th></tr></thead>
        <tbody>${b.items.map((i) => `<tr><td>${esc(i[0])}</td><td>${i[1]} 万元</td><td>${i[2]} 万元</td><td>${i[3]}</td><td>${i[4]}</td><td><span class="small-tag">${esc(i[5])}</span></td><td><span class="judge-tag">${esc(i[6])}</span></td><td>${esc(i[7])}</td></tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function matrixPath() {
  const parts = [`<button class="path-chip ${state.level === "bu" ? "active" : ""}" data-path="bu">事业部BU</button>`];
  if (state.level !== "bu") parts.push(`<span class="path-sep">/</span><button class="path-chip ${state.level === "region" ? "active" : ""}" data-path="region">${esc(currentBu().name)}</button>`);
  if (state.level === "country") parts.push(`<span class="path-sep">/</span><button class="path-chip active" data-path="country">${esc(currentRegion().name)}</button>`);
  return `<div class="matrix-path">${parts.join("")}</div>`;
}

function matrixRows() {
  return rows()
    .map((n) => {
      const active = state.node === n.key;
      const link = n.children?.length ? (n.level === "bu" ? "查看区域 »" : "查看国家 »") : "";
      const cells = ["投入有效", "投入待复盘", "重点异常"]
        .map((s) => (n.status === s ? `<td><button class="matrix-cell ${tone(s)} ${active ? "active" : ""}" data-node="${n.key}"></button></td>` : `<td><div class="matrix-cell empty-cell"></div></td>`))
        .join("");
      return `
        <tr class="${active ? "matrix-row-active" : ""}">
          <td><div class="matrix-level-cell"><button class="matrix-level-name" data-node="${n.key}">${esc(n.name)}</button>${link ? `<button class="drill-link" data-drill="${n.key}">${link}</button>` : ""}</div></td>
          <td>${esc(n.summary)}<div class="matrix-meta">
            <div class="subline"><strong>收入变动率:</strong> <span>${n.r}</span></div>
            <div class="subline"><strong>费用变动率:</strong> <span>${n.s}</span></div>
            <div class="subline"><strong>偏离度:</strong> <span>${n.d}</span></div>
            <div class="subline"><strong>弹性:</strong> <span>${n.e}</span></div>
          </div></td>
          ${cells}
        </tr>
      `;
    })
    .join("");
}

function chartHtml() {
  const n = currentNode();
  const labels = ["1月", "2月", "3月", "4月", "5月", "6月"];
  const w = 360;
  const h = 220;
  const px = 30;
  const py = 24;
  const values = [...n.spend, ...n.revenue];
  const min = Math.min(...values, 0);
  const max = Math.max(...values, 0);
  const spendLine = line(n.spend, w, h, px, py, min, max);
  const revenueLine = line(n.revenue, w, h, px, py, min, max);
  const step = (w - px * 2) / (labels.length - 1);
  const zeroY = h - py - ((0 - min) / (max - min || 1)) * (h - py * 2);

  return `
    <div class="chart-wrap">
      <svg viewBox="0 0 ${w} ${h}" width="100%" height="250" aria-label="区域趋势图">
        <line x1="${px}" y1="${zeroY}" x2="${w - px}" y2="${zeroY}" stroke="rgba(107,133,163,0.28)" stroke-dasharray="6 6"></line>
        ${labels.map((_, i) => `<line x1="${px + step * i}" y1="${py}" x2="${px + step * i}" y2="${h - py}" stroke="rgba(47,111,228,0.10)"></line>`).join("")}
        <polyline fill="none" stroke="#38bdf8" stroke-width="4" points="${spendLine}" stroke-linecap="round" stroke-linejoin="round"></polyline>
        <polyline fill="none" stroke="#34d399" stroke-width="4" points="${revenueLine}" stroke-linecap="round" stroke-linejoin="round"></polyline>
        ${n.spend.map((v, i) => `<circle cx="${px + step * i}" cy="${h - py - ((v - min) / (max - min || 1)) * (h - py * 2)}" r="4.5" fill="#38bdf8"></circle>`).join("")}
        ${n.revenue.map((v, i) => `<circle cx="${px + step * i}" cy="${h - py - ((v - min) / (max - min || 1)) * (h - py * 2)}" r="4.5" fill="#34d399"></circle>`).join("")}
        ${labels.map((l, i) => `<text x="${px + step * i}" y="${h - 6}" text-anchor="middle" fill="#6b85a3" font-size="12">${l}</text>`).join("")}
      </svg>
      <div class="chart-legend"><span><span class="legend-dot" style="background:#38bdf8"></span>费用变动率</span><span><span class="legend-dot" style="background:#34d399"></span>收入变动率</span></div>
    </div>
  `;
}

function dashboard() {
  const n = currentNode();
  const subtitle =
    state.level === "bu"
      ? "查看所选事业部的月度费用变动率与滞后收入变动率趋势。"
      : state.level === "region"
      ? "查看所选区域的月度费用变动率与滞后收入变动率趋势。"
      : "查看所选国家的月度费用变动率与滞后收入变动率趋势。";

  return `
    <div class="page-shell">
      <div class="dashboard">
        <section class="panel">
          <div class="panel-header"><div class="module-tag">模块 1</div><div><div class="panel-title">总体判断</div><div class="panel-subtitle">从总部视角快速判断本期费用状态、主要驱动与优先跟进事项。</div></div></div>
          <div class="judgement">${overview.summary}</div>
          <div class="panel-header" style="margin-top:22px;margin-bottom:14px;"><div class="module-tag">重点关注</div><div><div class="panel-title" style="font-size:20px;">重点关注对象</div><div class="panel-subtitle">把本周需要解释、重点复盘和持续跟踪的对象收进总体判断，方便管理层在首页直接抓重点。</div></div></div>
          <div class="focus-grid">${focuses.map((f) => `<article class="focus-card"><div class="focus-top"><div class="focus-icon">${f[0]}</div><div><div class="focus-priority">${esc(f[1])}</div><div class="focus-category">${esc(f[2])}</div><div class="focus-owner">${esc(f[3])}</div></div></div><div class="focus-text">${esc(f[4])}</div></article>`).join("")}</div>
        </section>

        <section class="panel linked-panel">
          <div class="panel-header"><div class="module-tag">模块 2-3</div><div><div class="panel-title">差异拆解与费用解释联动分析</div></div></div>
          <div class="linked-block">
            <div class="linked-header">
              <div>
                <div class="section-title">总差异拆解图</div>
              </div>
            </div>
            ${waterfallHtml()}
          </div>
          <div class="linked-divider"></div>
          <div class="linked-block">
            <div class="linked-header">
              <div>
                <div class="section-title">费用解释明细表</div>
              </div>
            </div>
            ${explainHtml()}
          </div>
        </section>

        <section class="panel">
          <div class="panel-header"><div class="module-tag">模块 4</div><div><div class="panel-title">区域变动费用效果分析</div><div class="panel-subtitle">从区域维度判断投入是否有效，并联动查看费用与滞后收入的月度趋势。</div></div></div>
          <div class="region-tip">先看左侧区域结果矩阵，再点击色块联动右侧趋势图。这个模块适合总部看区域效率，而不是只看费用绝对值。</div>
          <div class="region-grid">
            <div class="matrix-wrap">
              <div class="matrix-head"><div><div class="section-title">区域结果矩阵</div><div class="section-sub">默认展示事业部，点击蓝色入口可下钻到区域与国家，并联动右侧趋势图。</div></div><div class="hint">点击色块联动趋势</div></div>
              ${matrixPath()}
              <div class="table-wrap"><table><thead><tr><th>展示层级</th><th>说明</th><th>投入有效<span class="info-dot" data-tip="${esc(matrixHelp.effective)}">?</span></th><th>投入待复盘<span class="info-dot" data-tip="${esc(matrixHelp.review)}">?</span></th><th>重点异常<span class="info-dot" data-tip="${esc(matrixHelp.abnormal)}">?</span></th></tr></thead><tbody>${matrixRows()}</tbody></table></div>
            </div>
            <div class="trend-wrap">
              <div class="trend-head"><div><div class="section-title">区域趋势联动</div><div class="section-sub">${subtitle}</div></div><div class="region-badge">${esc(n.name)}</div></div>
              <div class="trend-metrics"><div class="trend-metrics-grid">
                <div><strong>收入变动率</strong><span class="info-dot" data-tip="${esc(help.r)}">?</span>： ${n.r}</div>
                <div><strong>费用变动率</strong><span class="info-dot" data-tip="${esc(help.s)}">?</span>： ${n.s}</div>
                <div><strong>偏离度</strong><span class="info-dot" data-tip="${esc(help.d)}">?</span>： ${n.d}</div>
                <div><strong>弹性</strong><span class="info-dot" data-tip="${esc(help.e)}">?</span>： ${n.e}</div>
              </div><div class="trend-summary"><strong>总结：</strong>${esc(n.summary)}</div></div>
              ${chartHtml()}
            </div>
          </div>
        </section>

        <div class="footer-note">本页为恢复后的总部费用看板静态交互版，支持模块联动与区域下钻展示。</div>
      </div>
    </div>
  `;
}

function bind(root) {
  root.querySelectorAll("[data-waterfall]").forEach((el) => el.addEventListener("click", () => {
    state.block = el.dataset.waterfall;
    render();
  }));

  root.querySelectorAll("[data-node]").forEach((el) => el.addEventListener("click", () => {
    state.node = el.dataset.node;
    if (state.level === "bu") {
      state.bu = state.node;
      state.region = currentBu().children[0].key;
    }
    if (state.level === "region") {
      state.region = state.node;
    }
    render();
  }));

  root.querySelectorAll("[data-drill]").forEach((el) => el.addEventListener("click", () => {
    const key = el.dataset.drill;
    if (state.level === "bu") {
      const bu = tree.find((b) => b.key === key);
      setLevel("region", { bu: bu.key, region: bu.children[0].key });
    } else if (state.level === "region") {
      const region = currentBu().children.find((r) => r.key === key);
      setLevel("country", { bu: state.bu, region: region.key, country: region.children[0].key });
    }
    render();
  }));

  root.querySelectorAll("[data-path]").forEach((el) => el.addEventListener("click", () => {
    if (el.dataset.path === "bu") setLevel("bu", { bu: state.bu });
    if (el.dataset.path === "region") setLevel("region", { bu: state.bu, region: state.region });
    render();
  }));
}

function render() {
  const root = document.getElementById("app");
  root.innerHTML = dashboard();
  root.innerHTML = root.innerHTML.replace('鎶曞叆寰呭鐩?span class="info-dot"', '鎶曞叆寰呭鐩?<span class="info-dot"');
  bind(root);
}

setLevel("bu", { bu: "tecno" });
render();
