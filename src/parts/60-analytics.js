// 분류: 차트 9 (분석용 차트: 코호트·스몰 멀티플·관리도·포레스트·팬·생존 곡선·기여도·리프트·ROC)
// 강조는 --mk-accent, 주 계열은 --mk-ink, 나머지는 --mk-ink-soft·--mk-skel-a 로 칠해 다크 모드에서도 그대로 보인다.
(() => {
const S = "var(--mk-ink-soft, #8A90A0)", K = "var(--mk-ink, #1B1E26)", G = "var(--mk-skel-a, #E0E4EC)";
const L = `color-mix(in srgb, ${S} 35%, transparent)`; // 밝은·어두운 화면 모두에서 보이는 옅은 중립색
const f1 = v => +v.toFixed(1);
const rnd = seed => () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
const AX = `font: 500 9px system-ui, sans-serif; fill: ${S};`;

// 01 코호트 리텐션
const cohort = [[100, 35, 24, 21, 15, 11], [100, 33, 25, 19, 15], [100, 35, 26, 18], [100, 36, 27], [100, 44], [100]];
const months = ["5월", "6월", "7월", "8월", "9월", "10월"];
const cohortHtml = `<div class="mk-an-cohort"><b></b>${["0", "+1", "+2", "+3", "+4", "+5"].map(h => `<b>${h}</b>`).join("")}${cohort.map((row, r) =>
  `<b>${months[r]}</b>` + Array.from({ length: 6 }, (_, c) => {
    if (c >= row.length) return "<i></i>";
    const v = row[c], d = (c * 0.12 + r * 0.05).toFixed(2);
    const cls = c === 0 ? ' class="z"' : r === 4 && c === 1 ? ' class="hl"' : "";
    const bg = c === 0 ? "" : `;--a:${Math.round(15 + v * 1.6)}%`;
    return `<i${cls} style="--d:${d}s${bg}">${v}</i>`;
  }).join("")).join("")}</div>`;

// 02 스몰 멀티플
const r2 = rnd(7);
const panels = Array.from({ length: 12 }, (_, k) => {
  const pts = Array.from({ length: 9 }, (_, i) => {
    const y = k === 7 ? 5 + i * 1.5 + (r2() - 0.5) * 2 : 11 + (r2() - 0.5) * 7;
    return `${i * 5},${f1(y)}`;
  }).join(" ");
  return `<div${k === 7 ? ' class="hl"' : ""} style="--d:${(k * 0.06).toFixed(2)}s"><span>C${String(k + 1).padStart(2, "0")}</span><svg viewBox="0 0 40 20"><polyline pathLength="1" points="${pts}"/></svg></div>`;
}).join("");

// 03 관리도
const r3 = rnd(11);
const ctlY = v => f1(90 - (v - 2) * 40);
const ctl = Array.from({ length: 30 }, (_, i) => i === 24 ? 2.1 : i === 29 ? 3.68 : 3 + (r3() - 0.5) * 0.5);
const ctlPts = ctl.map((v, i) => [f1(10 + i * 5.6), ctlY(v)]);
const ctlHtml = `<svg class="mk-an-control" viewBox="0 0 180 100">
<path class="g" d="M10 26H174M10 74H174"/><path class="m" d="M10 50H174"/>
<text x="176" y="28">+3σ</text><text x="176" y="76">−3σ</text>
<polyline pathLength="1" points="${ctlPts.map(p => p.join(",")).join(" ")}"/>
${ctlPts.map(([x, y], i) => (i === 24 || i === 29)
    ? `<circle class="o" cx="${x}" cy="${y}" r="7" style="--d:1.4s"/><circle class="x" cx="${x}" cy="${y}" r="3" style="--d:${(i * 0.035).toFixed(2)}s"/>`
    : `<circle cx="${x}" cy="${y}" r="1.8" style="--d:${(i * 0.035).toFixed(2)}s"/>`).join("")}
</svg>`;

// 04 포레스트 플롯
const forest = [["무료배송 문구", 3, 8, 14, "k"], ["리뷰 위로", -3, 4, 11], ["가격 강조", -7, -2, 4], ["영상 썸네일", 4, 12, 20, "hl"], ["CTA 색", -4, 1, 6], ["쿠폰 팝업", -10, -6, 0]];
const fx = v => f1((v + 12) / 34 * 100);
const forestHtml = `<div class="mk-an-forest"><div class="p"><i class="zero" style="left:${fx(0)}%"></i>${forest.map(([, lo, est, hi, c], r) =>
  `<div${c ? ` class="${c}"` : ""} style="--d:${(r * 0.12).toFixed(2)}s"><span style="left:${fx(lo)}%;width:${f1(fx(hi) - fx(lo))}%;transform-origin:${f1((est - lo) / (hi - lo) * 100)}% 50%"></span><b style="left:${fx(est)}%"></b></div>`).join("")}</div><ul>${forest.map(([n, , , , c]) => `<li${c === "hl" ? ' class="hl"' : ""}>${n}</li>`).join("")}</ul></div>`;

// 06 생존 곡선
const sx = t => f1(10 + t / 12 * 164), sy = s => f1(92 - s * 84);
const step = (k, wob) => {
  const r = rnd(wob); let d = `M${sx(0)} ${sy(1)}`;
  for (let i = 1; i <= 48; i++) { const t = i / 4; d += `H${sx(t)}V${sy(Math.exp(-t / k) * (1 + (r() - 0.5) * 0.02))}`; }
  return d;
};
const med = 5.2 * Math.LN2;

// 07 기여도 분해
const r7 = rnd(3);
const attrib = Array.from({ length: 16 }, (_, k) => [38 + r7() * 4, 10 + r7() * 6, 8 + k * 0.6 + r7() * 6, 6 + r7() * 4].map(Math.round));

// 08 리프트
const lift = [2.8, 1.9, 1.3, 1.0, 0.75, 0.6, 0.5, 0.42, 0.36, 0.3];

// 09 ROC: y = x^0.22 → AUC 1/1.22 ≈ 0.82
const roc = Array.from({ length: 25 }, (_, i) => { const f = (i / 24) ** 2; return [f1(8 + f * 88), f1(92 - f ** 0.22 * 88)]; });
const rocPts = roc.map(p => p.join(",")).join(" ");

M.push(
// ── 차트 (분석)
{ id: "an-cohort", cat: "차트", name: "코호트 리텐션 채우기", use: "가입 월별 재구매율·잔존", meta: "4.5s · 열마다 0.12s 계단 + 강조 칸 맥박",
  html: cohortHtml,
  css: `.mk-an-cohort { display: grid; grid-template-columns: 26px repeat(6, 26px); gap: 2px; font: 600 9px/17px system-ui, sans-serif; text-align: center; font-variant-numeric: tabular-nums; }
.mk-an-cohort b { font-weight: 500; color: ${S}; line-height: 12px; }
.mk-an-cohort b:nth-child(n+8) { line-height: 17px; text-align: right; padding-right: 3px; }
.mk-an-cohort i { font-style: normal; border-radius: 3px; color: ${K}; background: color-mix(in srgb, ${A} var(--a, 0%), transparent); animation: mk-an-cohort 4.5s cubic-bezier(.2, .8, .2, 1) var(--d, 0s) infinite both; }
.mk-an-cohort i:empty { visibility: hidden; }
.mk-an-cohort i.z { background: ${G}; }
.mk-an-cohort i.hl { background: ${A}; color: var(--mk-on-accent, #fff); animation: mk-an-cohort 4.5s cubic-bezier(.2, .8, .2, 1) var(--d) infinite both, mk-an-cohort-hl 4.5s var(--d) infinite both; }
@keyframes mk-an-cohort { 0% { opacity: 0; transform: scale(.4); } 12%, 88% { opacity: 1; transform: none; } 100% { opacity: 0; transform: none; } }
@keyframes mk-an-cohort-hl { 0%, 30%, 88%, 100% { box-shadow: 0 0 0 0 ${K}; } 40%, 78% { box-shadow: 0 0 0 2px ${K}; } }` },

{ id: "an-small", cat: "차트", name: "스몰 멀티플 이상 강조", use: "캠페인·세그먼트가 많을 때", meta: "4s · 12칸 선 그리기 → 이상 칸 붉게",
  html: `<div class="mk-an-small">${panels}</div>`,
  css: `.mk-an-small { display: grid; grid-template-columns: repeat(4, 46px); gap: 4px; }
.mk-an-small > div { position: relative; padding: 12px 3px 3px; border-radius: 5px; background: var(--mk-skel-b, #F4F5F8); border: 1px solid ${G}; }
.mk-an-small span { position: absolute; top: 2px; left: 4px; font: 600 7px system-ui, sans-serif; color: ${S}; }
.mk-an-small svg { display: block; width: 100%; height: 16px; overflow: visible; }
.mk-an-small polyline { fill: none; stroke: ${K}; stroke-width: 1.2; stroke-linejoin: round; stroke-linecap: round; stroke-dasharray: 1; animation: mk-an-small 4s ease-out var(--d) infinite both; }
.mk-an-small .hl { animation: mk-an-small-bg 4s var(--d) infinite both; }
.mk-an-small .hl polyline { animation: mk-an-small 4s ease-out var(--d) infinite both, mk-an-small-st 4s var(--d) infinite both; }
.mk-an-small .hl span { color: ${K}; }
@keyframes mk-an-small { 0% { stroke-dashoffset: 1; opacity: 1; } 30%, 90% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
@keyframes mk-an-small-bg { 0%, 38% { background: var(--mk-skel-b, #F4F5F8); border-color: ${G}; } 48%, 90% { background: color-mix(in srgb, ${A} 14%, transparent); border-color: ${A}; } 100% { background: var(--mk-skel-b, #F4F5F8); border-color: ${G}; } }
@keyframes mk-an-small-st { 0%, 38%, 100% { stroke: ${K}; } 48%, 90% { stroke: ${A}; } }` },

{ id: "an-control", cat: "차트", name: "관리도 이상점 감지", use: "일 전환율 이상 변동 알림", meta: "4.2s · 평균 ±3σ 밖 점에 고리 맥박",
  html: ctlHtml,
  css: `.mk-an-control { width: 200px; height: 112px; overflow: visible; }
.mk-an-control .m { stroke: ${S}; stroke-width: 1.5; }
.mk-an-control .g { stroke: ${A}; stroke-width: 1; stroke-dasharray: 3 3; opacity: .7; }
.mk-an-control text { ${AX} fill: ${A}; }
.mk-an-control polyline { fill: none; stroke: ${S}; stroke-width: 1; stroke-linejoin: round; stroke-dasharray: 1; animation: mk-an-control 4.2s linear infinite both; }
.mk-an-control circle { fill: ${K}; transform-box: fill-box; transform-origin: center; animation: mk-an-control-dot 4.2s var(--d) infinite both; }
.mk-an-control .x { fill: ${A}; }
.mk-an-control .o { fill: none; stroke: ${A}; stroke-width: 1.5; animation: mk-an-control-ring 4.2s var(--d) infinite both; }
@keyframes mk-an-control { 0% { stroke-dashoffset: 1; opacity: 1; } 28%, 90% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
@keyframes mk-an-control-dot { 0% { transform: scale(0); opacity: 1; } 5%, 66% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(1); opacity: 0; } }
@keyframes mk-an-control-ring { 0% { transform: scale(.4); opacity: 0; } 10% { opacity: 1; } 25% { transform: scale(1.4); opacity: 0; } 26% { transform: scale(.4); opacity: 0; } 34% { opacity: 1; } 49%, 100% { transform: scale(1.4); opacity: 0; } }` },

{ id: "an-forest", cat: "차트", name: "포레스트 플롯", use: "A/B 테스트 효과·95% 구간", meta: "3.6s · 점 → 구간 양옆으로 펼침",
  html: forestHtml,
  css: `.mk-an-forest { display: flex; flex-direction: row-reverse; gap: 6px; font: 500 9px system-ui, sans-serif; }
.mk-an-forest ul { margin: 0; padding: 0; list-style: none; text-align: right; color: ${S}; }
.mk-an-forest li { height: 16px; line-height: 16px; white-space: nowrap; }
.mk-an-forest li.hl { color: ${K}; font-weight: 700; }
.mk-an-forest .p { position: relative; width: 120px; border-bottom: 1px solid ${G}; }
.mk-an-forest .zero { position: absolute; top: 0; bottom: 0; width: 1px; background: ${K}; }
.mk-an-forest .p > div { position: relative; height: 16px; --c: ${S}; }
.mk-an-forest .p > .k { --c: ${K}; }
.mk-an-forest .p > .hl { --c: ${A}; }
.mk-an-forest span { position: absolute; top: 7.5px; height: 1.5px; background: var(--c); animation: mk-an-forest-ci 3.6s cubic-bezier(.2, .8, .2, 1) var(--d) infinite both; }
.mk-an-forest .p b { position: absolute; top: 4.5px; width: 7px; height: 7px; margin-left: -3.5px; background: var(--c); animation: mk-an-forest-pt 3.6s cubic-bezier(.34, 1.56, .64, 1) var(--d) infinite both; }
@keyframes mk-an-forest-pt { 0% { transform: scale(0); opacity: 1; } 10%, 88% { transform: none; opacity: 1; } 100% { transform: none; opacity: 0; } }
@keyframes mk-an-forest-ci { 0%, 10% { transform: scaleX(0); opacity: 1; } 32%, 88% { transform: none; opacity: 1; } 100% { transform: none; opacity: 0; } }` },

{ id: "an-fan", cat: "차트", name: "팬 차트 예측 구간", use: "매출 예측과 불확실성", meta: "4s · 실적 선 그린 뒤 구간 3겹 펼침",
  html: `<svg class="mk-an-fan" viewBox="0 0 180 100"><path class="ax" d="M8 92H176"/><g><polygon points="120,40 176,4 176,52"/><polygon points="120,40 176,13 176,43"/><polygon points="120,40 176,20 176,36"/></g><path class="fc" d="M120 40L176 28"/><polyline pathLength="1" points="8,64 22,62 36,57 50,49 64,53 78,46 92,39 106,35 120,40"/><text x="8" y="100">1월</text><text x="114" y="100">9월</text><text x="164" y="100">12월</text></svg>`,
  css: `.mk-an-fan { width: 200px; height: 112px; overflow: visible; }
.mk-an-fan .ax { stroke: ${G}; }
.mk-an-fan text { ${AX} }
.mk-an-fan polyline { fill: none; stroke: ${K}; stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; stroke-dasharray: 1; animation: mk-an-fan-l 4s ease-out infinite both; }
.mk-an-fan g { transform-box: view-box; transform-origin: 120px 40px; animation: mk-an-fan-g 4s cubic-bezier(.2, .8, .2, 1) infinite both; }
.mk-an-fan polygon { fill: ${A}; opacity: .2; }
.mk-an-fan .fc { fill: none; stroke: ${A}; stroke-width: 1.5; stroke-dasharray: 3 2; animation: mk-an-fan-f 4s infinite both; }
@keyframes mk-an-fan-l { 0% { stroke-dashoffset: 1; opacity: 1; } 35%, 90% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
@keyframes mk-an-fan-g { 0%, 35% { transform: scale(0); opacity: 1; } 60%, 90% { transform: none; opacity: 1; } 100% { transform: none; opacity: 0; } }
@keyframes mk-an-fan-f { 0%, 38% { opacity: 0; } 50%, 90% { opacity: 1; } 100% { opacity: 0; } }` },

{ id: "an-survival", cat: "차트", name: "생존 곡선 내려가기", use: "구독 유지율·이탈까지 걸린 시간", meta: "4.4s · 계단 곡선 2개 + 중앙값 표시",
  html: `<svg class="mk-an-survival" viewBox="0 0 180 100"><path class="ax" d="M10 92H174"/><path class="y" pathLength="1" d="${step(18, 5)}"/><path class="m" pathLength="1" d="${step(5.2, 9)}"/><path class="g" d="M10 ${sy(0.5)}H${sx(med)}V92"/><circle cx="${sx(med)}" cy="${sy(0.5)}" r="3"/><text x="116" y="6" class="lm">월간</text><text x="148" y="6" class="ly">연간</text><text x="10" y="100">0</text><text x="154" y="100">12개월</text></svg>`,
  css: `.mk-an-survival { width: 200px; height: 112px; overflow: visible; }
.mk-an-survival .ax { stroke: ${G}; }
.mk-an-survival text { ${AX} }
.mk-an-survival .lm { fill: ${A}; font-weight: 700; }
.mk-an-survival .ly { fill: ${K}; font-weight: 700; }
.mk-an-survival .y, .mk-an-survival .m { fill: none; stroke-width: 1.8; stroke-dasharray: 1; animation: mk-an-survival 4.4s ease-in-out infinite both; }
.mk-an-survival .y { stroke: ${K}; }
.mk-an-survival .m { stroke: ${A}; animation-delay: .15s; }
.mk-an-survival .g { fill: none; stroke: ${S}; stroke-dasharray: 2 2; animation: mk-an-survival-g 4.4s infinite both; }
.mk-an-survival circle { fill: ${A}; transform-box: fill-box; transform-origin: center; animation: mk-an-survival-c 4.4s cubic-bezier(.34, 1.56, .64, 1) infinite both; }
@keyframes mk-an-survival { 0% { stroke-dashoffset: 1; opacity: 1; } 45%, 90% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
@keyframes mk-an-survival-g { 0%, 48% { opacity: 0; } 58%, 90% { opacity: 1; } 100% { opacity: 0; } }
@keyframes mk-an-survival-c { 0%, 48% { transform: scale(0); } 58%, 90% { transform: none; opacity: 1; } 100% { transform: none; opacity: 0; } }` },

{ id: "an-attrib", cat: "차트", name: "기여도 분해 쌓기", use: "채널별 주간 매출 기여", meta: "3.6s · 16주 막대 0.05s 간격",
  html: `<div class="mk-an-attrib"><ul><li>기본</li><li>검색</li><li>PMax</li><li>메타</li></ul><div>${attrib.map((b, k) => `<p style="--d:${(k * 0.05).toFixed(2)}s">${b.map(h => `<i style="height:${h}px"></i>`).join("")}</p>`).join("")}</div></div>`,
  css: `.mk-an-attrib { display: grid; gap: 6px; }
.mk-an-attrib ul { display: flex; gap: 8px; margin: 0; padding: 0; list-style: none; font: 500 9px system-ui, sans-serif; color: ${S}; }
.mk-an-attrib li::before { content: ""; display: inline-block; width: 7px; height: 7px; margin-right: 3px; border-radius: 2px; background: var(--c); }
.mk-an-attrib > div { display: flex; align-items: flex-end; gap: 3px; height: 92px; border-bottom: 1px solid ${S}; }
.mk-an-attrib p { display: flex; flex-direction: column-reverse; width: 9px; margin: 0; transform-origin: bottom; animation: mk-an-attrib 3.6s cubic-bezier(.2, .8, .2, 1) var(--d) infinite both; }
.mk-an-attrib i { display: block; background: var(--c); }
.mk-an-attrib :is(li, i):nth-child(1) { --c: ${L}; }
.mk-an-attrib :is(li, i):nth-child(2) { --c: ${S}; }
.mk-an-attrib :is(li, i):nth-child(3) { --c: ${A}; }
.mk-an-attrib :is(li, i):nth-child(4) { --c: ${K}; }
.mk-an-attrib i:nth-child(4) { border-radius: 2px 2px 0 0; }
@keyframes mk-an-attrib { 0% { transform: scaleY(0); opacity: 1; } 30%, 88% { transform: none; opacity: 1; } 100% { transform: none; opacity: 0; } }` },

{ id: "an-lift", cat: "차트", name: "리프트 차트", use: "예측 점수 10분위 성과", meta: "3.6s · 10분위 막대 + 평균 1배 기준선",
  html: `<div class="mk-an-lift">${lift.map((v, k) => `<i style="height:${Math.round(v / 3.2 * 88)}px;--d:${(k * 0.07).toFixed(2)}s"></i>`).join("")}<b style="bottom:${Math.round(88 / 3.2)}px">평균 1배</b></div>`,
  css: `.mk-an-lift { position: relative; display: flex; align-items: flex-end; gap: 4px; height: 92px; border-bottom: 1px solid ${S}; }
.mk-an-lift i { width: 14px; border-radius: 2px 2px 0 0; background: ${L}; transform-origin: bottom; animation: mk-an-lift 3.6s cubic-bezier(.2, .8, .2, 1) var(--d) infinite both; }
.mk-an-lift i:first-child { background: ${A}; }
.mk-an-lift i:nth-child(-n+4):not(:first-child) { background: ${K}; }
.mk-an-lift b { position: absolute; left: -4px; right: -4px; height: 11px; line-height: 10px; text-align: right; border-bottom: 1px dashed ${K}; font: 700 8px system-ui, sans-serif; color: ${K}; animation: mk-an-lift-b 3.6s infinite both; }
@keyframes mk-an-lift { 0% { transform: scaleY(0); opacity: 1; } 28%, 88% { transform: none; opacity: 1; } 100% { transform: none; opacity: 0; } }
@keyframes mk-an-lift-b { 0%, 40% { opacity: 0; } 52%, 88% { opacity: 1; } 100% { opacity: 0; } }` },

{ id: "an-roc", cat: "차트", name: "ROC 커브 그리기", use: "분류 모델 성능·AUC", meta: "4s · 곡선 그리기 + AUC 0→0.82",
  html: `<div class="mk-an-roc"><svg viewBox="0 0 100 100"><path class="ax" d="M8 4V92H96"/><path class="d" d="M8 92L96 4"/><polygon points="${rocPts} 96,92"/><polyline pathLength="1" points="${rocPts}"/><text x="0" y="7">1</text><text x="0" y="95">0</text></svg><span></span></div>`,
  css: `@property --mk-an-roc-n { syntax: "<integer>"; initial-value: 0; inherits: true; }
.mk-an-roc { position: relative; width: 120px; height: 120px; counter-reset: auc var(--mk-an-roc-n); animation: mk-an-roc-n 4s cubic-bezier(.4, 0, .2, 1) infinite both; }
.mk-an-roc svg { display: block; width: 100%; height: 100%; overflow: visible; }
.mk-an-roc .ax { fill: none; stroke: ${G}; }
.mk-an-roc .d { stroke: ${S}; stroke-dasharray: 2 2; }
.mk-an-roc text { ${AX} }
.mk-an-roc polygon { fill: ${A}; opacity: 0; animation: mk-an-roc-a 4s infinite both; }
.mk-an-roc polyline { fill: none; stroke: ${A}; stroke-width: 2; stroke-linejoin: round; stroke-dasharray: 1; animation: mk-an-roc-l 4s ease-out infinite both; }
.mk-an-roc span { position: absolute; left: 44%; top: 56%; font: 800 11px system-ui, sans-serif; color: ${K}; font-variant-numeric: tabular-nums; white-space: nowrap; }
.mk-an-roc span::after { content: "AUC 0." counter(auc, decimal-leading-zero); }
@keyframes mk-an-roc-n { 0%, 10% { --mk-an-roc-n: 0; } 50%, 100% { --mk-an-roc-n: 82; } }
@keyframes mk-an-roc-l { 0% { stroke-dashoffset: 1; opacity: 1; } 45%, 90% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }
@keyframes mk-an-roc-a { 0%, 42% { opacity: 0; } 58%, 90% { opacity: .14; } 100% { opacity: 0; } }` },
);
})();
