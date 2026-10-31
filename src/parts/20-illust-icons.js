// ── 일러스트 · 아이콘 (추가)
M.push(
{ id: "il-truck", cat: "일러스트", name: "배송 트럭", use: "배송 조회·출고 안내", meta: "바퀴 0.5s 회전 · 차체 0.3s 흔들림 · 도로 이동",
  html: `<svg class="mk-il-truck" viewBox="0 0 200 110">
  <g class="sp"><line x1="6" y1="44" x2="22" y2="44"/><line x1="2" y1="56" x2="20" y2="56"/><line x1="8" y1="68" x2="22" y2="68"/></g>
  <line class="road" x1="0" y1="100" x2="200" y2="100"/>
  <g class="body">
    <rect class="cargo" x="30" y="28" width="82" height="50" rx="5"/>
    <text x="71" y="58">택배</text>
    <path class="cab" d="M112 44h22l14 16v18h-36z"/>
    <path class="win" d="M118 49h13l9 11h-22z"/>
  </g>
  <g class="wheel"><circle cx="56" cy="82" r="10"/><path d="M56 74v16M48 82h16"/></g>
  <g class="wheel"><circle cx="132" cy="82" r="10"/><path d="M132 74v16M124 82h16"/></g>
</svg>`,
  css: `.mk-il-truck { width: 190px; height: 105px; }
.mk-il-truck .sp line, .mk-il-truck .road { stroke: var(--mk-ink-soft, #8A90A0); stroke-width: 3; stroke-linecap: round; }
.mk-il-truck .road { stroke-dasharray: 16 12; animation: mk-il-truck-road .5s linear infinite; }
.mk-il-truck .sp { animation: mk-il-truck-sp .6s linear infinite; }
.mk-il-truck .body { animation: mk-il-truck-bob .3s ease-in-out infinite alternate; }
.mk-il-truck .cargo { fill: ${A}; }
.mk-il-truck text { fill: var(--mk-on-accent, #fff); font: 700 14px system-ui, sans-serif; text-anchor: middle; }
.mk-il-truck .cab { fill: var(--mk-warn, #D99A00); }
.mk-il-truck .win { fill: var(--mk-stage, #ECEEF4); }
.mk-il-truck .wheel { transform-box: fill-box; transform-origin: center; animation: mk-il-truck-wheel .5s linear infinite; }
.mk-il-truck .wheel circle { fill: var(--mk-ink, #1B1E26); }
.mk-il-truck .wheel path { stroke: var(--mk-stage, #ECEEF4); stroke-width: 2.5; }
@keyframes mk-il-truck-road { to { stroke-dashoffset: 28; } }
@keyframes mk-il-truck-sp { from { transform: translateX(6px); opacity: 1; } to { transform: translateX(-6px); opacity: 0; } }
@keyframes mk-il-truck-bob { to { transform: translateY(-2px); } }
@keyframes mk-il-truck-wheel { to { transform: rotate(360deg); } }` },
{ id: "il-box", cat: "일러스트", name: "택배 상자 열림", use: "언박싱·주문 완료", meta: "3.2s · 날개 150° 열림 → 물건 솟음",
  html: `<svg class="mk-il-box" viewBox="0 0 200 110">
  <circle class="item" cx="100" cy="66" r="12"/>
  <rect class="flap l" x="52" y="40" width="48" height="8" rx="2"/>
  <rect class="flap r" x="100" y="40" width="48" height="8" rx="2"/>
  <rect class="bd" x="52" y="46" width="96" height="56" rx="4"/>
  <rect class="tape" x="92" y="46" width="16" height="56"/>
</svg>`,
  css: `.mk-il-box { width: 190px; height: 105px; overflow: visible; }
.mk-il-box .bd { fill: var(--mk-warn, #D99A00); }
.mk-il-box .flap { fill: color-mix(in srgb, var(--mk-warn, #D99A00) 78%, #000); transform-box: fill-box; animation: 3.2s cubic-bezier(.5, 0, .3, 1.3) infinite; }
.mk-il-box .flap.l { transform-origin: left center; animation-name: mk-il-box-l; }
.mk-il-box .flap.r { transform-origin: right center; animation-name: mk-il-box-r; }
.mk-il-box .tape { fill: var(--mk-surface, #fff); opacity: .45; }
.mk-il-box .item { fill: ${A}; animation: mk-il-box-item 3.2s cubic-bezier(.3, 1.4, .5, 1) infinite; }
@keyframes mk-il-box-l { 0%, 20%, 90%, 100% { transform: none; } 35%, 75% { transform: rotate(-150deg); } }
@keyframes mk-il-box-r { 0%, 20%, 90%, 100% { transform: none; } 35%, 75% { transform: rotate(150deg); } }
@keyframes mk-il-box-item { 0%, 30% { transform: none; } 45%, 70% { transform: translateY(-48px); } 85%, 100% { transform: none; } }` },
{ id: "il-plant", cat: "일러스트", name: "새싹 자라기", use: "성장·첫 주문·온보딩", meta: "4s · 줄기 → 잎 2장 순서",
  html: `<svg class="mk-il-plant" viewBox="0 0 200 110">
  <path class="stem" d="M100 82V44"/>
  <path class="leaf l" d="M100 56c-6-12-20-14-26-10 4 10 16 14 26 10z"/>
  <path class="leaf r" d="M100 48c6-12 20-14 26-10-4 10-16 14-26 10z"/>
  <path class="pot" d="M74 82h52l-6 24H80z"/>
  <rect class="rim" x="70" y="76" width="60" height="9" rx="3"/>
</svg>`,
  css: `.mk-il-plant { width: 190px; height: 105px; }
.mk-il-plant .stem { stroke: var(--mk-success, #1F9D55); stroke-width: 4; stroke-linecap: round; fill: none; transform-box: fill-box; transform-origin: bottom; animation: mk-il-plant-stem 4s ease-out infinite; }
.mk-il-plant .leaf { fill: var(--mk-success, #1F9D55); transform-box: fill-box; animation: mk-il-plant-leaf 4s cubic-bezier(.3, 1.5, .5, 1) infinite; }
.mk-il-plant .leaf.l { transform-origin: right center; }
.mk-il-plant .leaf.r { transform-origin: left center; animation-delay: .15s; }
.mk-il-plant .pot { fill: var(--mk-danger, #E5484D); }
.mk-il-plant .rim { fill: color-mix(in srgb, var(--mk-danger, #E5484D) 80%, #000); }
@keyframes mk-il-plant-stem { 0% { transform: scaleY(0); } 35%, 85% { transform: scaleY(1); } 100% { transform: scaleY(0); } }
@keyframes mk-il-plant-leaf { 0%, 35% { transform: scale(0); } 50%, 85% { transform: scale(1); } 100% { transform: scale(0); } }` },
{ id: "il-rain", cat: "일러스트", name: "비구름", use: "날씨·배송 지연 안내", meta: "빗방울 0.9s · 0.18s씩 · 구름 3s 흔들림",
  html: `<svg class="mk-il-rain" viewBox="0 0 200 110">
  <g class="cloud"><circle cx="80" cy="40" r="18"/><circle cx="104" cy="32" r="22"/><circle cx="126" cy="42" r="16"/><rect x="62" y="40" width="80" height="18" rx="9"/></g>
  <g class="drops">${N(5, k => `<path d="M${72 + k * 14} 66l-3 9"/>`)}</g>
</svg>`,
  css: `.mk-il-rain { width: 190px; height: 105px; }
.mk-il-rain .cloud { fill: var(--mk-ink-soft, #8A90A0); animation: mk-il-rain-cloud 3s ease-in-out infinite alternate; }
.mk-il-rain .drops path { stroke: ${A}; stroke-width: 3; stroke-linecap: round; animation: mk-il-rain-drop .9s linear infinite; }
${N(5, k => `.mk-il-rain .drops path:nth-child(${k + 1}) { animation-delay: ${([0, 3, 1, 4, 2][k] * 0.18).toFixed(2)}s; }`)}
@keyframes mk-il-rain-cloud { from { transform: translateX(-3px); } to { transform: translateX(3px); } }
@keyframes mk-il-rain-drop { from { transform: translateY(0); opacity: 1; } to { transform: translateY(32px); opacity: 0; } }` },
{ id: "il-sun", cat: "일러스트", name: "웃는 해", use: "맑음·좋은 소식", meta: "빛살 10s 회전 · 얼굴 2s 숨쉬기",
  html: `<svg class="mk-il-sun" viewBox="0 0 200 110">
  <g class="rays">${N(8, k => `<line x1="100" y1="12" x2="100" y2="24" transform="rotate(${k * 45} 100 55)"/>`)}</g>
  <g class="core"><circle cx="100" cy="55" r="24"/><circle class="f" cx="92" cy="51" r="2.2"/><circle class="f" cx="108" cy="51" r="2.2"/><path class="m" d="M91 60q9 7 18 0"/></g>
</svg>`,
  css: `.mk-il-sun { width: 190px; height: 105px; }
.mk-il-sun .rays { transform-origin: 100px 55px; animation: mk-il-sun-rot 10s linear infinite; }
.mk-il-sun .rays line { stroke: var(--mk-warn, #D99A00); stroke-width: 5; stroke-linecap: round; }
.mk-il-sun .core { transform-box: fill-box; transform-origin: center; animation: mk-il-sun-core 2s ease-in-out infinite alternate; }
.mk-il-sun .core > circle:first-child { fill: var(--mk-warn, #D99A00); }
.mk-il-sun .f { fill: color-mix(in srgb, var(--mk-warn, #D99A00) 45%, #000); }
.mk-il-sun .m { fill: none; stroke: color-mix(in srgb, var(--mk-warn, #D99A00) 45%, #000); stroke-width: 2.4; stroke-linecap: round; }
@keyframes mk-il-sun-rot { to { transform: rotate(360deg); } }
@keyframes mk-il-sun-core { to { transform: scale(1.07); } }` },
{ id: "il-mail", cat: "일러스트", name: "편지 날아감", use: "메일·문의 전송 완료", meta: "2.8s · 곡선으로 날아가며 사라짐",
  html: `<svg class="mk-il-mail" viewBox="0 0 200 110">
  <path class="trail" d="M20 96C60 90 100 66 150 36"/>
  <g class="env"><rect x="-22" y="-15" width="44" height="30" rx="4"/><path d="M-22 -13l22 16 22-16"/></g>
</svg>`,
  css: `.mk-il-mail { width: 190px; height: 105px; overflow: visible; }
.mk-il-mail .trail { fill: none; stroke: var(--mk-ink-soft, #8A90A0); stroke-width: 2; stroke-dasharray: 4 6; opacity: .6; animation: mk-il-mail-trail 2.8s linear infinite; }
.mk-il-mail .env { animation: mk-il-mail 2.8s cubic-bezier(.45, 0, .55, 1) infinite; }
.mk-il-mail .env rect { fill: var(--mk-surface, #fff); stroke: ${A}; stroke-width: 2.5; }
.mk-il-mail .env path { fill: none; stroke: ${A}; stroke-width: 2.5; stroke-linejoin: round; }
@keyframes mk-il-mail {
  0% { transform: translate(30px, 90px) rotate(-12deg) scale(.7); opacity: 0; }
  15% { opacity: 1; }
  65% { transform: translate(140px, 42px) rotate(6deg) scale(1); opacity: 1; }
  85%, 100% { transform: translate(175px, 22px) rotate(10deg) scale(.8); opacity: 0; }
}
@keyframes mk-il-mail-trail { to { stroke-dashoffset: -40; } }` },
{ id: "il-rocket", cat: "일러스트", name: "로켓 발사", use: "출시·업그레이드 안내", meta: "불꽃 0.15s 깜빡 · 몸체 1.2s 둥실 · 속도선",
  html: `<svg class="mk-il-rocket" viewBox="0 0 200 110">
  <g class="lines">${N(4, k => `<line x1="${[64, 78, 122, 136][k]}" y1="${[18, 40, 30, 50][k]}" x2="${[64, 78, 122, 136][k]}" y2="${[34, 56, 46, 66][k]}"/>`)}</g>
  <g class="ship">
    <path class="flame" d="M92 80h16l-8 22z"/>
    <path class="fin" d="M88 60l-11 18h12zM112 60l11 18h-12z"/>
    <path class="hull" d="M100 12c12 10 14 30 12 68H88c-2-38 0-58 12-68z"/>
    <circle class="win" cx="100" cy="42" r="7"/>
  </g>
</svg>`,
  css: `.mk-il-rocket { width: 190px; height: 105px; overflow: visible; }
.mk-il-rocket .lines line { stroke: var(--mk-ink-soft, #8A90A0); stroke-width: 2.5; stroke-linecap: round; animation: mk-il-rocket-line .8s linear infinite; }
${N(3, k => `.mk-il-rocket .lines line:nth-child(${k + 2}) { animation-delay: ${((k + 1) * 0.2).toFixed(1)}s; }`)}
.mk-il-rocket .ship { animation: mk-il-rocket-float 1.2s ease-in-out infinite alternate; }
.mk-il-rocket .flame { fill: var(--mk-warn, #D99A00); transform-box: fill-box; transform-origin: top center; animation: mk-il-rocket-flame .15s ease-in-out infinite alternate; }
.mk-il-rocket .fin { fill: var(--mk-danger, #E5484D); }
.mk-il-rocket .hull { fill: var(--mk-surface, #fff); stroke: var(--mk-ink, #1B1E26); stroke-width: 2.5; stroke-linejoin: round; }
.mk-il-rocket .win { fill: ${A}; stroke: var(--mk-ink, #1B1E26); stroke-width: 2.5; }
@keyframes mk-il-rocket-line { from { transform: translateY(-10px); opacity: 0; } 30% { opacity: 1; } to { transform: translateY(30px); opacity: 0; } }
@keyframes mk-il-rocket-float { from { transform: translateY(2px); } to { transform: translateY(-4px); } }
@keyframes mk-il-rocket-flame { from { transform: scaleY(.7); } to { transform: scaleY(1.15); } }` },
{ id: "il-gift", cat: "일러스트", name: "선물상자", use: "이벤트·쿠폰 받기", meta: "2.6s · 뚜껑 두 번 튕김 + 반짝이",
  html: `<svg class="mk-il-gift" viewBox="0 0 200 110">
  <g class="spark"><circle cx="68" cy="30" r="3"/><circle cx="132" cy="28" r="3"/><circle cx="82" cy="16" r="2.5"/><circle cx="120" cy="14" r="2.5"/></g>
  <rect class="bx" x="66" y="56" width="68" height="46" rx="3"/>
  <rect class="rb" x="94" y="56" width="12" height="46"/>
  <g class="lid">
    <rect class="lidr" x="60" y="44" width="80" height="14" rx="3"/>
    <rect class="rb" x="94" y="44" width="12" height="14"/>
    <path class="bow" d="M100 44c-10-14-26-8-14 0zM100 44c10-14 26-8 14 0z"/>
  </g>
</svg>`,
  css: `.mk-il-gift { width: 190px; height: 105px; overflow: visible; }
.mk-il-gift .bx { fill: var(--mk-danger, #E5484D); }
.mk-il-gift .lidr { fill: color-mix(in srgb, var(--mk-danger, #E5484D) 82%, #000); }
.mk-il-gift .rb, .mk-il-gift .bow { fill: var(--mk-warn, #D99A00); }
.mk-il-gift .lid { transform-box: fill-box; transform-origin: center bottom; animation: mk-il-gift-lid 2.6s ease-out infinite; }
.mk-il-gift .spark circle { fill: var(--mk-warn, #D99A00); transform-box: fill-box; transform-origin: center; animation: mk-il-gift-spark 2.6s ease-out infinite; }
${N(3, k => `.mk-il-gift .spark circle:nth-child(${k + 2}) { animation-delay: ${((k + 1) * 0.06).toFixed(2)}s; }`)}
@keyframes mk-il-gift-lid {
  0%, 20%, 38%, 54%, 100% { transform: none; }
  28% { transform: translateY(-18px) rotate(-10deg); }
  46% { transform: translateY(-8px) rotate(6deg); }
}
@keyframes mk-il-gift-spark { 0%, 22% { transform: scale(0); opacity: 0; } 30% { transform: scale(1.4); opacity: 1; } 50%, 100% { transform: scale(0); opacity: 0; } }` },
{ id: "il-clock", cat: "일러스트", name: "돌아가는 시계", use: "영업시간·마감 임박", meta: "분침 4s · 시침 48s 한 바퀴",
  html: `<svg class="mk-il-clock" viewBox="0 0 200 110">
  <circle class="face" cx="100" cy="55" r="42"/>
  <g class="ticks">${N(12, k => `<line x1="100" y1="19" x2="100" y2="${k % 3 ? 23 : 26}" transform="rotate(${k * 30} 100 55)"/>`)}</g>
  <line class="hr" x1="100" y1="55" x2="100" y2="34"/>
  <line class="mn" x1="100" y1="55" x2="100" y2="23"/>
  <circle class="dot" cx="100" cy="55" r="3.5"/>
</svg>`,
  css: `.mk-il-clock { width: 190px; height: 105px; }
.mk-il-clock .face { fill: var(--mk-surface, #fff); stroke: var(--mk-ink, #1B1E26); stroke-width: 4; }
.mk-il-clock .ticks line { stroke: var(--mk-ink-soft, #8A90A0); stroke-width: 2; stroke-linecap: round; }
.mk-il-clock .hr, .mk-il-clock .mn { stroke-linecap: round; transform-origin: 100px 55px; animation: mk-il-clock 4s linear infinite; }
.mk-il-clock .hr { stroke: var(--mk-ink, #1B1E26); stroke-width: 4; animation-duration: 48s; }
.mk-il-clock .mn { stroke: ${A}; stroke-width: 3; }
.mk-il-clock .dot { fill: ${A}; }
@keyframes mk-il-clock { to { transform: rotate(360deg); } }` },
{ id: "il-pin", cat: "일러스트", name: "위치 핀", use: "매장 찾기·배송지 등록", meta: "2.4s · 떨어져 튕김 → 바닥 물결",
  html: `<svg class="mk-il-pin" viewBox="0 0 200 110">
  <ellipse class="rip" cx="100" cy="96" rx="20" ry="6"/>
  <ellipse class="sh" cx="100" cy="96" rx="10" ry="3"/>
  <g class="pin"><path d="M100 96c-14-18-20-28-20-38a20 20 0 0 1 40 0c0 10-6 20-20 38z"/><circle cx="100" cy="58" r="7"/></g>
</svg>`,
  css: `.mk-il-pin { width: 190px; height: 105px; overflow: visible; }
.mk-il-pin .pin { animation: mk-il-pin 2.4s infinite; }
.mk-il-pin .pin path { fill: var(--mk-danger, #E5484D); }
.mk-il-pin .pin circle { fill: var(--mk-surface, #fff); }
.mk-il-pin .sh { fill: rgb(0 0 0 / .18); transform-box: fill-box; transform-origin: center; animation: mk-il-pin-sh 2.4s infinite; }
.mk-il-pin .rip { fill: none; stroke: var(--mk-danger, #E5484D); stroke-width: 2; transform-box: fill-box; transform-origin: center; animation: mk-il-pin-rip 2.4s ease-out infinite; }
@keyframes mk-il-pin {
  0% { transform: translateY(-50px); opacity: 0; animation-timing-function: ease-in; }
  10% { opacity: 1; }
  30% { transform: none; animation-timing-function: ease-out; }
  37% { transform: translateY(-8px); animation-timing-function: ease-in; }
  44%, 88% { transform: none; opacity: 1; }
  100% { transform: none; opacity: 0; }
}
@keyframes mk-il-pin-sh { 0% { transform: scale(.3); opacity: 0; } 30%, 88% { transform: scale(1); opacity: 1; } 100% { opacity: 0; } }
@keyframes mk-il-pin-rip { 0%, 30% { transform: scale(.3); opacity: 0; } 32% { opacity: .8; } 65%, 100% { transform: scale(1.7); opacity: 0; } }` },
{ id: "il-cart", cat: "일러스트", name: "장바구니 담기", use: "장바구니 추가 완료", meta: "4s · 물건 3개 0.6s씩 떨어짐",
  html: `<svg class="mk-il-cart" viewBox="0 0 200 110">
  <g class="items"><rect x="74" y="44" width="16" height="16" rx="3"/><rect x="94" y="40" width="14" height="20" rx="3"/><circle cx="120" cy="52" r="8"/></g>
  <g class="cart"><path d="M36 26h14l12 44h64l10-28H58"/><circle cx="70" cy="84" r="6"/><circle cx="118" cy="84" r="6"/></g>
</svg>`,
  css: `.mk-il-cart { width: 190px; height: 105px; overflow: visible; }
.mk-il-cart .cart { animation: mk-il-cart-bump 4s ease-out infinite; }
.mk-il-cart .cart path { fill: none; stroke: var(--mk-ink, #1B1E26); stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; }
.mk-il-cart .cart circle { fill: var(--mk-ink, #1B1E26); }
.mk-il-cart .items > * { animation: mk-il-cart-drop 4s cubic-bezier(.5, 0, .6, 1.4) infinite; }
.mk-il-cart .items > :nth-child(1) { fill: ${A}; }
.mk-il-cart .items > :nth-child(2) { fill: var(--mk-warn, #D99A00); animation-delay: .6s; }
.mk-il-cart .items > :nth-child(3) { fill: var(--mk-success, #1F9D55); animation-delay: 1.2s; }
@keyframes mk-il-cart-drop { 0% { transform: translateY(-60px); opacity: 0; } 5% { opacity: 1; } 15%, 80% { transform: none; opacity: 1; } 92%, 100% { transform: none; opacity: 0; } }
@keyframes mk-il-cart-bump { 0%, 13%, 19%, 28%, 34%, 43%, 49%, 100% { transform: none; } 16%, 31%, 46% { transform: translateY(2px); } }` },
{ id: "il-steam", cat: "일러스트", name: "김 나는 컵", use: "카페·따뜻한 상품·대기 화면", meta: "김 3줄 2.4s · 0.4s씩",
  html: `<svg class="mk-il-steam" viewBox="0 0 200 110">
  <g class="st">${N(3, k => `<path d="M${84 + k * 12} 44q-6-8 0-16t0-16"/>`)}</g>
  <path class="cup" d="M68 50h56v22a18 18 0 0 1-18 18h-20a18 18 0 0 1-18-18z"/>
  <path class="hd" d="M124 56h6a9 9 0 0 1 0 18h-6"/>
  <ellipse class="sc" cx="96" cy="94" rx="44" ry="6"/>
</svg>`,
  css: `.mk-il-steam { width: 190px; height: 105px; overflow: visible; }
.mk-il-steam .st path { fill: none; stroke: var(--mk-ink-soft, #8A90A0); stroke-width: 3; stroke-linecap: round; opacity: 0; animation: mk-il-steam 2.4s ease-in infinite; }
.mk-il-steam .st path:nth-child(2) { animation-delay: .4s; }
.mk-il-steam .st path:nth-child(3) { animation-delay: .8s; }
.mk-il-steam .cup { fill: ${A}; }
.mk-il-steam .hd { fill: none; stroke: ${A}; stroke-width: 5; }
.mk-il-steam .sc { fill: var(--mk-ink-soft, #8A90A0); opacity: .5; }
@keyframes mk-il-steam { 0% { transform: translateY(6px); opacity: 0; } 30% { opacity: .9; } 100% { transform: translateY(-12px); opacity: 0; } }` },
{ id: "il-fish", cat: "일러스트", name: "헤엄치는 물고기", use: "수산물·바다 상품", meta: "6s 왕복 · 꼬리 0.3s · 물방울",
  html: `<svg class="mk-il-fish" viewBox="0 0 200 110">
  <path class="wv" d="M0 100q12-6 25 0t25 0t25 0t25 0t25 0t25 0t25 0t25 0t25 0"/>
  <g class="bub">${N(3, k => `<circle cx="${[100, 112, 90][k]}" cy="44" r="${2 + k}"/>`)}</g>
  <g class="swim"><g class="fish">
    <path class="tail" d="M78 55l-14-12v24z"/>
    <ellipse class="bd" cx="96" cy="55" rx="20" ry="13"/>
    <circle class="eye" cx="106" cy="51" r="2.5"/>
  </g></g>
</svg>`,
  css: `.mk-il-fish { width: 190px; height: 105px; overflow: hidden; }
.mk-il-fish .wv { fill: none; stroke: ${A}; stroke-width: 2.5; opacity: .5; animation: mk-il-fish-wave 1.5s linear infinite; }
.mk-il-fish .swim { transform-box: fill-box; transform-origin: center; animation: mk-il-fish-swim 6s ease-in-out infinite; }
.mk-il-fish .fish { animation: mk-il-fish-bob 1s ease-in-out infinite alternate; }
.mk-il-fish .tail { fill: var(--mk-danger, #E5484D); transform-box: fill-box; transform-origin: right center; animation: mk-il-fish-tail .3s ease-in-out infinite alternate; }
.mk-il-fish .bd { fill: var(--mk-warn, #D99A00); }
.mk-il-fish .eye { fill: var(--mk-ink, #1B1E26); }
.mk-il-fish .bub circle { fill: none; stroke: ${A}; stroke-width: 1.5; animation: mk-il-fish-bub 2.4s ease-in infinite; }
.mk-il-fish .bub circle:nth-child(2) { animation-delay: .8s; }
.mk-il-fish .bub circle:nth-child(3) { animation-delay: 1.6s; }
@keyframes mk-il-fish-swim {
  0% { transform: translateX(-40px) scaleX(1); }
  45% { transform: translateX(40px) scaleX(1); }
  50% { transform: translateX(40px) scaleX(-1); }
  95% { transform: translateX(-40px) scaleX(-1); }
  100% { transform: translateX(-40px) scaleX(1); }
}
@keyframes mk-il-fish-bob { from { transform: translateY(-3px); } to { transform: translateY(3px); } }
@keyframes mk-il-fish-tail { from { transform: rotate(-15deg); } to { transform: rotate(15deg); } }
@keyframes mk-il-fish-wave { to { transform: translateX(-50px); } }
@keyframes mk-il-fish-bub { 0% { transform: translateY(0); opacity: 0; } 20% { opacity: .9; } 100% { transform: translateY(-40px); opacity: 0; } }` },
// ── 아이콘 (추가)
{ id: "ic-heart", cat: "아이콘", name: "하트 채우기", use: "찜 버튼", meta: "2.4s · 눌림 0.8 → 채움 1.2",
  html: `<svg class="mk-ic-heart" viewBox="0 0 24 24" aria-label="찜"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  css: `.mk-ic-heart { width: 44px; height: 44px; overflow: visible; }
.mk-ic-heart path {
  fill: transparent; stroke: var(--mk-danger, #E5484D); stroke-width: 1.8; stroke-linejoin: round;
  transform-box: fill-box; transform-origin: center; animation: mk-ic-heart 2.4s infinite;
}
@keyframes mk-ic-heart {
  0%, 30% { fill: transparent; transform: scale(1); }
  38% { fill: transparent; transform: scale(.8); }
  48% { fill: var(--mk-danger, #E5484D); transform: scale(1.2); }
  58%, 88% { fill: var(--mk-danger, #E5484D); transform: scale(1); }
  100% { fill: transparent; transform: scale(1); }
}` },
{ id: "ic-bookmark", cat: "아이콘", name: "북마크 저장", use: "저장·나중에 보기", meta: "2.4s · 튀어오르며 채움",
  html: `<svg class="mk-ic-bookmark" viewBox="0 0 24 24" aria-label="저장"><path d="M6 3h12v18l-6-4-6 4z"/></svg>`,
  css: `.mk-ic-bookmark { width: 44px; height: 44px; overflow: visible; }
.mk-ic-bookmark path {
  fill: transparent; stroke: var(--mk-ink, #1B1E26); stroke-width: 1.8; stroke-linejoin: round;
  animation: mk-ic-bookmark 2.4s cubic-bezier(.3, 1.4, .5, 1) infinite;
}
@keyframes mk-ic-bookmark {
  0%, 30% { fill: transparent; stroke: var(--mk-ink, #1B1E26); transform: none; }
  42% { transform: translateY(-3px); }
  52%, 88% { fill: ${A}; stroke: ${A}; transform: none; }
  100% { fill: transparent; stroke: var(--mk-ink, #1B1E26); }
}` },
{ id: "ic-trash", cat: "아이콘", name: "휴지통 열림", use: "삭제 버튼", meta: "2.4s · 뚜껑 -30° 들림",
  html: `<svg class="mk-ic-trash" viewBox="0 0 24 24" aria-label="삭제"><path d="M6 8h12l-1 13H7z"/><path d="M10 11v7M14 11v7"/><g class="lid"><path d="M4 6h16"/><path d="M9 6V4h6v2"/></g></svg>`,
  css: `.mk-ic-trash { width: 44px; height: 44px; overflow: visible; fill: none; stroke: var(--mk-ink, #1B1E26); stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.mk-ic-trash .lid { transform-origin: 4px 6px; animation: mk-ic-trash 2.4s cubic-bezier(.4, 0, .2, 1) infinite; }
@keyframes mk-ic-trash { 0%, 25%, 80%, 100% { transform: none; } 35%, 70% { transform: translateY(-1px) rotate(-30deg); } }` },
{ id: "ic-eye", cat: "아이콘", name: "눈 깜빡 · 가리기", use: "비밀번호 보기/숨기기", meta: "3s · 깜빡 → 사선 긋기",
  html: `<svg class="mk-ic-eye" viewBox="0 0 24 24" aria-label="비밀번호 보기"><g class="ey"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></g><path class="sl" d="M4 4l16 16"/></svg>`,
  css: `.mk-ic-eye { width: 44px; height: 44px; overflow: visible; }
.mk-ic-eye .ey { transform-box: fill-box; transform-origin: center; animation: mk-ic-eye-blink 3s infinite; }
.mk-ic-eye .ey path { fill: none; stroke: var(--mk-ink, #1B1E26); stroke-width: 1.8; stroke-linejoin: round; }
.mk-ic-eye .ey circle { fill: var(--mk-ink, #1B1E26); }
.mk-ic-eye .sl { fill: none; stroke: var(--mk-ink, #1B1E26); stroke-width: 1.8; stroke-linecap: round; stroke-dasharray: 23; stroke-dashoffset: 23; animation: mk-ic-eye-slash 3s infinite; }
@keyframes mk-ic-eye-blink { 0%, 40%, 50%, 100% { transform: none; } 45% { transform: scaleY(.1); } }
@keyframes mk-ic-eye-slash { 0%, 55% { stroke-dashoffset: 23; } 70%, 90% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 23; } }` },
{ id: "ic-lock", cat: "아이콘", name: "잠금 해제", use: "인증 완료·보안", meta: "2.8s · 고리 들림 → 초록으로",
  html: `<svg class="mk-ic-lock" viewBox="0 0 24 24" aria-label="잠금 해제"><path class="sh" d="M8 11V7a4 4 0 0 1 8 0v4"/><rect class="bd" x="5" y="11" width="14" height="10" rx="2"/><circle class="kh" cx="12" cy="16" r="1.5"/></svg>`,
  css: `.mk-ic-lock { width: 44px; height: 44px; overflow: visible; }
.mk-ic-lock .sh { fill: none; stroke: var(--mk-ink, #1B1E26); stroke-width: 2; stroke-linecap: round; transform-origin: 8px 11px; animation: mk-ic-lock-sh 2.8s cubic-bezier(.4, 0, .2, 1) infinite; }
.mk-ic-lock .bd { fill: var(--mk-ink, #1B1E26); animation: mk-ic-lock-bd 2.8s infinite; }
.mk-ic-lock .kh { fill: var(--mk-surface, #fff); }
@keyframes mk-ic-lock-sh { 0%, 30%, 92%, 100% { transform: none; } 40% { transform: translateY(-2px); } 50%, 85% { transform: translateY(-2px) rotate(-35deg); } }
@keyframes mk-ic-lock-bd { 0%, 40%, 95%, 100% { fill: var(--mk-ink, #1B1E26); } 50%, 88% { fill: var(--mk-success, #1F9D55); } }` },
{ id: "ic-volume", cat: "아이콘", name: "소리 퍼짐", use: "음성 재생·알림음", meta: "1.6s · 물결 3줄 0.2s씩",
  html: `<svg class="mk-ic-volume" viewBox="0 0 24 24" aria-label="소리"><path class="sp" d="M3 9h4l5-4v14l-5-4H3z"/><path class="w w1" d="M15.5 9.5a3.5 3.5 0 0 1 0 5"/><path class="w w2" d="M18 7a7 7 0 0 1 0 10"/><path class="w w3" d="M20.5 4.5a10.5 10.5 0 0 1 0 15"/></svg>`,
  css: `.mk-ic-volume { width: 44px; height: 44px; overflow: visible; }
.mk-ic-volume .sp { fill: var(--mk-ink, #1B1E26); }
.mk-ic-volume .w { fill: none; stroke: var(--mk-ink, #1B1E26); stroke-width: 1.8; stroke-linecap: round; opacity: .15; animation: mk-ic-volume 1.6s infinite; }
.mk-ic-volume .w2 { animation-delay: .2s; }
.mk-ic-volume .w3 { animation-delay: .4s; }
@keyframes mk-ic-volume { 0%, 20% { opacity: .15; } 40%, 80% { opacity: 1; } 100% { opacity: .15; } }` },
{ id: "ic-send", cat: "아이콘", name: "종이비행기 전송", use: "메시지 보내기 버튼", meta: "2.4s · 오른쪽 위로 날아갔다 다시 등장",
  html: `<svg class="mk-ic-send" viewBox="0 0 24 24" aria-label="보내기"><path class="tr" d="M2 22l7-7"/><path class="pl" d="M3 11.5L21 3l-8.5 18-2.2-7.3z"/></svg>`,
  css: `.mk-ic-send { width: 44px; height: 44px; overflow: visible; }
.mk-ic-send .pl { fill: ${A}; animation: mk-ic-send 2.4s cubic-bezier(.5, 0, .7, .4) infinite; }
.mk-ic-send .tr { fill: none; stroke: ${A}; stroke-width: 1.6; stroke-linecap: round; stroke-dasharray: 10; stroke-dashoffset: 10; animation: mk-ic-send-tr 2.4s infinite; }
@keyframes mk-ic-send {
  0%, 30% { transform: none; opacity: 1; }
  50% { transform: translate(12px, -12px); opacity: 0; animation-timing-function: step-end; }
  51% { transform: translate(-10px, 10px); opacity: 0; animation-timing-function: cubic-bezier(.2, .8, .3, 1); }
  70%, 100% { transform: none; opacity: 1; }
}
@keyframes mk-ic-send-tr { 0%, 30% { stroke-dashoffset: 10; opacity: 1; } 45% { stroke-dashoffset: 0; opacity: 1; } 55%, 100% { stroke-dashoffset: 0; opacity: 0; } }` },
{ id: "ic-cartadd", cat: "아이콘", name: "장바구니 +1", use: "담기 버튼 피드백", meta: "2.4s · 배지 튀어나와 떠오름",
  html: `<div class="mk-ic-cartadd"><svg viewBox="0 0 24 24" aria-label="장바구니"><path d="M3 4h2.5l2.2 10.5h10.6L20.5 7H7"/><circle cx="9" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/></svg><b>+1</b></div>`,
  css: `.mk-ic-cartadd { position: relative; width: 44px; height: 44px; }
.mk-ic-cartadd svg { width: 44px; height: 44px; animation: mk-ic-cartadd-bump 2.4s infinite; }
.mk-ic-cartadd path { fill: none; stroke: var(--mk-ink, #1B1E26); stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.mk-ic-cartadd circle { fill: var(--mk-ink, #1B1E26); }
.mk-ic-cartadd b {
  position: absolute; top: -8px; right: -10px; padding: 1px 6px; border-radius: 999px;
  background: var(--mk-danger, #E5484D); color: #fff; font: 700 11px/1.5 system-ui, sans-serif;
  animation: mk-ic-cartadd 2.4s infinite;
}
@keyframes mk-ic-cartadd {
  0%, 20% { transform: scale(0); opacity: 0; }
  30% { transform: scale(1.25); opacity: 1; }
  40%, 70% { transform: scale(1); opacity: 1; }
  90%, 100% { transform: translateY(-12px); opacity: 0; }
}
@keyframes mk-ic-cartadd-bump { 0%, 24%, 38%, 100% { transform: none; } 30% { transform: translateY(2px); } }` },
{ id: "ic-star", cat: "아이콘", name: "별 돌며 채우기", use: "즐겨찾기·평점", meta: "2.4s · 144° 회전 + 채움",
  html: `<svg class="mk-ic-star" viewBox="0 0 24 24" aria-label="즐겨찾기"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"/></svg>`,
  css: `.mk-ic-star { width: 44px; height: 44px; overflow: visible; }
.mk-ic-star path {
  fill: transparent; stroke: var(--mk-warn, #D99A00); stroke-width: 1.6; stroke-linejoin: round;
  transform-box: fill-box; transform-origin: center; animation: mk-ic-star 2.4s cubic-bezier(.4, 0, .2, 1) infinite;
}
@keyframes mk-ic-star {
  0%, 20% { transform: rotate(0) scale(1); fill: transparent; }
  45% { transform: rotate(144deg) scale(1.2); fill: var(--mk-warn, #D99A00); }
  55%, 85% { transform: rotate(144deg) scale(1); fill: var(--mk-warn, #D99A00); }
  100% { transform: rotate(144deg) scale(1); fill: transparent; }
}` },
);
