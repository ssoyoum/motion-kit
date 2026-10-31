// 로딩 12 · 텍스트 12 · 피드백 10 · 채팅 6
M.push(
// ── 로딩
{ id: "l-cradle", cat: "로딩", name: "뉴턴 진자", use: "계산·정산 중", meta: "1.2s · 양끝 공 ±30°",
  html: `<div class="mk-l-cradle">${R(5, "<i></i>")}</div>`,
  css: `.mk-l-cradle { display: flex; height: 60px; }
.mk-l-cradle i { position: relative; width: 14px; height: 60px; transform-origin: 50% 0; }
.mk-l-cradle i::before { content: ""; position: absolute; left: 6.5px; top: 0; width: 1px; height: 46px; background: var(--mk-ink-soft, #8A90A0); }
.mk-l-cradle i::after { content: ""; position: absolute; left: 0; bottom: 0; width: 14px; height: 14px; border-radius: 50%; background: ${A}; }
.mk-l-cradle i:first-child { animation: mk-l-cradle-a 1.2s ease-in-out infinite; }
.mk-l-cradle i:last-child { animation: mk-l-cradle-b 1.2s ease-in-out infinite; }
@keyframes mk-l-cradle-a { 0%, 50%, 100% { transform: none; } 25% { transform: rotate(30deg); } }
@keyframes mk-l-cradle-b { 0%, 50%, 100% { transform: none; } 75% { transform: rotate(-30deg); } }` },
{ id: "l-comet", cat: "로딩", name: "꼬리 달린 점", use: "부드러운 대기", meta: "1s · linear · 점 6개 18°씩",
  html: `<div class="mk-l-comet">${R(6, "<i></i>")}</div>`,
  css: `.mk-l-comet { position: relative; width: 44px; height: 44px; animation: mk-l-comet 1s linear infinite; }
.mk-l-comet i {
  position: absolute; left: 50%; top: 0; width: var(--s); height: var(--s); margin-left: calc(var(--s) / -2);
  border-radius: 50%; background: ${A}; transform-origin: 50% 22px; transform: rotate(var(--r)); opacity: var(--o);
}
${N(6, k => `.mk-l-comet i:nth-child(${k + 1}) { --s: ${(10 - k * 1.4).toFixed(1)}px; --r: ${-k * 18}deg; --o: ${(1 - k * 0.15).toFixed(2)}; }`)}
@keyframes mk-l-comet { to { transform: rotate(360deg); } }` },
{ id: "l-squash", cat: "로딩", name: "찌그러지는 공", use: "가벼운 로딩·빈 화면", meta: "0.8s · 바닥에서 1.25×0.7",
  html: `<div class="mk-l-squash"><i></i></div>`,
  css: `.mk-l-squash { position: relative; width: 40px; height: 70px; }
.mk-l-squash i { position: absolute; left: 8px; top: 0; width: 24px; height: 24px; border-radius: 50%; background: ${A}; transform-origin: 50% 100%; animation: mk-l-squash .8s infinite; }
.mk-l-squash::after { content: ""; position: absolute; left: 6px; bottom: 0; width: 28px; height: 6px; border-radius: 50%; background: rgb(0 0 0 / .18); animation: mk-l-squash-s .8s infinite; }
@keyframes mk-l-squash {
  0%, 100% { transform: none; animation-timing-function: cubic-bezier(.5, 0, 1, .5); }
  45% { transform: translateY(43px); }
  50% { transform: translateY(43px) scale(1.25, .7); animation-timing-function: cubic-bezier(0, .5, .5, 1); }
  55% { transform: translateY(43px); }
}
@keyframes mk-l-squash-s { 0%, 100% { transform: scale(.5); opacity: .4; } 50% { transform: scale(1); opacity: 1; } }` },
{ id: "l-infinity", cat: "로딩", name: "무한 경로", use: "동기화·반복 작업", meta: "1.6s · pathLength 100 · 대시 22",
  html: `<svg class="mk-l-infinity" viewBox="0 0 50 40"><path class="mk-l-infinity-tr" pathLength="100" d="M25 20C25 8 5 8 5 20s20 12 20 0 20-12 20 0-20 12-20 0"/><path class="mk-l-infinity-mv" pathLength="100" d="M25 20C25 8 5 8 5 20s20 12 20 0 20-12 20 0-20 12-20 0"/></svg>`,
  css: `.mk-l-infinity { width: 90px; height: 72px; }
.mk-l-infinity path { fill: none; stroke-width: 3; stroke-linecap: round; }
.mk-l-infinity-tr { stroke: color-mix(in srgb, ${A} 18%, transparent); }
.mk-l-infinity-mv { stroke: ${A}; stroke-dasharray: 22 78; animation: mk-l-infinity 1.6s linear infinite; }
@keyframes mk-l-infinity { to { stroke-dashoffset: -100; } }` },
{ id: "l-ecg", cat: "로딩", name: "심전도", use: "상태 확인·헬스 체크", meta: "1.6s · 선 30% 길이로 흐름",
  html: `<svg class="mk-l-ecg" viewBox="0 0 120 40"><polyline class="mk-l-ecg-tr" pathLength="100" points="0,20 34,20 40,20 46,6 52,34 58,12 62,20 120,20"/><polyline class="mk-l-ecg-mv" pathLength="100" points="0,20 34,20 40,20 46,6 52,34 58,12 62,20 120,20"/></svg>`,
  css: `.mk-l-ecg { width: 160px; height: 54px; }
.mk-l-ecg polyline { fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }
.mk-l-ecg-tr { stroke: color-mix(in srgb, var(--mk-danger, #E5484D) 15%, transparent); }
.mk-l-ecg-mv { stroke: var(--mk-danger, #E5484D); stroke-dasharray: 30 70; stroke-dashoffset: 100; animation: mk-l-ecg 1.6s linear infinite; }
@keyframes mk-l-ecg { to { stroke-dashoffset: 0; } }` },
{ id: "l-letters", cat: "로딩", name: "LOADING 글자", use: "스플래시 화면", meta: "1.4s · 글자당 0.1s",
  html: `<p class="mk-l-letters">${"LOADING".split("").map(c => `<span>${c}</span>`).join("")}</p>`,
  css: `.mk-l-letters { margin: 0; font: 800 20px system-ui, sans-serif; letter-spacing: .12em; color: ${A}; }
.mk-l-letters span { display: inline-block; opacity: .25; animation: mk-l-letters 1.4s ease-in-out infinite; }
${N(6, k => `.mk-l-letters span:nth-child(${k + 2}) { animation-delay: ${((k + 1) * 0.1).toFixed(1)}s; }`)}
@keyframes mk-l-letters { 0%, 60%, 100% { opacity: .25; transform: none; } 30% { opacity: 1; transform: translateY(-3px); } }` },
{ id: "l-fold", cat: "로딩", name: "접히는 사각형", use: "앱 전체 로딩", meta: "2.4s · 4조각 0.3s씩 접힘",
  html: `<div class="mk-l-fold"><i></i><i></i><i></i><i></i></div>`,
  css: `.mk-l-fold { position: relative; width: 40px; height: 40px; transform: rotate(45deg); }
.mk-l-fold i { position: relative; float: left; width: 50%; height: 50%; transform: scale(1.1); }
.mk-l-fold i::before { content: ""; position: absolute; inset: 0; background: ${A}; transform-origin: 100% 100%; animation: mk-l-fold 2.4s linear infinite both; }
.mk-l-fold i:nth-child(2) { transform: scale(1.1) rotate(90deg); }
.mk-l-fold i:nth-child(4) { transform: scale(1.1) rotate(180deg); }
.mk-l-fold i:nth-child(3) { transform: scale(1.1) rotate(270deg); }
.mk-l-fold i:nth-child(2)::before { animation-delay: .3s; }
.mk-l-fold i:nth-child(4)::before { animation-delay: .6s; }
.mk-l-fold i:nth-child(3)::before { animation-delay: .9s; }
@keyframes mk-l-fold {
  0%, 10% { transform: perspective(140px) rotateX(-180deg); opacity: 0; }
  25%, 75% { transform: perspective(140px) rotateX(0); opacity: 1; }
  90%, 100% { transform: perspective(140px) rotateY(180deg); opacity: 0; }
}` },
{ id: "l-hex", cat: "로딩", name: "육각 펄스", use: "블록·데이터 처리", meta: "1.8s · 육각 3겹 0.6s씩",
  html: `<div class="mk-l-hex"><i></i><i></i><i></i></div>`,
  css: `.mk-l-hex { position: relative; width: 48px; height: 54px; }
.mk-l-hex i, .mk-l-hex::after { clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%); background: ${A}; }
.mk-l-hex i { position: absolute; inset: 0; animation: mk-l-hex 1.8s ease-out infinite; }
.mk-l-hex i:nth-child(2) { animation-delay: .6s; }
.mk-l-hex i:nth-child(3) { animation-delay: 1.2s; }
.mk-l-hex::after { content: ""; position: absolute; inset: 32%; }
@keyframes mk-l-hex { 0% { transform: scale(.25); opacity: .9; } 100% { transform: scale(1); opacity: 0; } }` },
{ id: "l-liquid", cat: "로딩", name: "차오르는 물", use: "충전·설치 진행", meta: "회전 3s + 차오름 4s",
  html: `<div class="mk-l-liquid"><i></i></div>`,
  css: `.mk-l-liquid { position: relative; box-sizing: border-box; width: 60px; height: 60px; border-radius: 50%; border: 3px solid ${A}; overflow: hidden; }
.mk-l-liquid i {
  position: absolute; left: -50%; top: 100%; width: 200%; height: 200%; border-radius: 40%;
  background: color-mix(in srgb, ${A} 70%, transparent);
  animation: mk-l-liquid-r 3s linear infinite, mk-l-liquid-f 4s ease-in-out infinite;
}
@keyframes mk-l-liquid-r { to { transform: rotate(360deg); } }
@keyframes mk-l-liquid-f { 0% { top: 100%; } 80%, 100% { top: 5%; } }` },
{ id: "l-bars3", cat: "로딩", name: "도는 막대 셋", use: "버튼 옆 작은 로딩", meta: "1.2s · 0.15s씩 반 바퀴",
  html: `<div class="mk-l-bars3"><i></i><i></i><i></i></div>`,
  css: `.mk-l-bars3 { display: flex; gap: 8px; }
.mk-l-bars3 i { width: 6px; height: 28px; border-radius: 3px; background: ${A}; animation: mk-l-bars3 1.2s ease-in-out infinite; }
.mk-l-bars3 i:nth-child(2) { animation-delay: .15s; }
.mk-l-bars3 i:nth-child(3) { animation-delay: .3s; }
@keyframes mk-l-bars3 { 0% { transform: rotate(0); } 50% { transform: rotate(90deg) scaleY(.5); } 100% { transform: rotate(180deg); } }` },
{ id: "l-ring-pct", cat: "로딩", name: "원형 퍼센트", use: "다운로드·분석 진행률", meta: "2.6s · @property 0→100",
  html: `<div class="mk-l-ring-pct"></div>`,
  css: `@property --mk-l-ring-pct-n { syntax: "<integer>"; initial-value: 0; inherits: true; }
.mk-l-ring-pct {
  position: relative; width: 64px; height: 64px; display: grid; place-items: center;
  font: 700 14px system-ui, sans-serif; font-variant-numeric: tabular-nums;
  counter-reset: mk-l-ring-pct var(--mk-l-ring-pct-n);
  animation: mk-l-ring-pct 2.6s cubic-bezier(.4, 0, .2, 1) infinite;
}
.mk-l-ring-pct::before {
  content: ""; position: absolute; inset: 0; border-radius: 50%;
  background: conic-gradient(${A} calc(var(--mk-l-ring-pct-n) * 1%), color-mix(in srgb, ${A} 15%, transparent) 0);
  -webkit-mask: radial-gradient(farthest-side, transparent 80%, #000 81%);
  mask: radial-gradient(farthest-side, transparent 80%, #000 81%);
}
.mk-l-ring-pct::after { content: counter(mk-l-ring-pct) "%"; }
@keyframes mk-l-ring-pct { 0% { --mk-l-ring-pct-n: 0; } 85%, 100% { --mk-l-ring-pct-n: 100; } }` },
{ id: "l-steps", cat: "로딩", name: "단계 막대", use: "가입·결제 단계 진행", meta: "3.2s · 4칸 0.4s씩",
  html: `<div class="mk-l-steps"><i></i><i></i><i></i><i></i></div>`,
  css: `.mk-l-steps { display: flex; gap: 4px; width: 180px; }
.mk-l-steps i { position: relative; flex: 1; height: 6px; border-radius: 3px; overflow: hidden; background: color-mix(in srgb, ${A} 18%, transparent); }
.mk-l-steps i::after { content: ""; position: absolute; inset: 0; background: ${A}; transform: scaleX(0); transform-origin: left; animation: mk-l-steps 3.2s ease-out infinite; }
${N(3, k => `.mk-l-steps i:nth-child(${k + 2})::after { animation-delay: ${((k + 1) * 0.4).toFixed(1)}s; }`)}
@keyframes mk-l-steps { 0% { transform: scaleX(0); opacity: 1; } 12%, 80% { transform: scaleX(1); opacity: 1; } 100% { transform: scaleX(1); opacity: 0; } }` },
// ── 텍스트
{ id: "t-flipclock", cat: "텍스트", name: "넘기는 숫자판", use: "타임세일 남은 시간", meta: "10s · steps(10) · 덮개 1s",
  html: `<div class="mk-t-flipclock"><span>0</span><span>5</span><em>:</em><span>0</span><span class="mk-t-flipclock-run"><b></b></span></div>`,
  css: `@property --mk-t-flipclock-d { syntax: "<integer>"; initial-value: 0; inherits: false; }
.mk-t-flipclock { display: flex; align-items: center; gap: 4px; }
.mk-t-flipclock span {
  position: relative; width: 32px; height: 44px; border-radius: 6px; text-align: center;
  background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff); font: 800 28px/44px system-ui, sans-serif;
}
.mk-t-flipclock span::after { content: ""; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: rgb(0 0 0 / .35); }
.mk-t-flipclock em { font: 800 24px system-ui, sans-serif; font-style: normal; color: var(--mk-ink, #1B1E26); }
.mk-t-flipclock-run { counter-reset: mk-t-flipclock var(--mk-t-flipclock-d); animation: mk-t-flipclock 10s steps(10) infinite; }
.mk-t-flipclock-run::before { content: counter(mk-t-flipclock); }
.mk-t-flipclock-run b {
  position: absolute; inset: 0 0 50% 0; border-radius: 6px 6px 0 0;
  background: linear-gradient(rgb(255 255 255 / .12), rgb(0 0 0 / .2));
  transform-origin: bottom; animation: mk-t-flipclock-f 1s ease-in infinite;
}
@keyframes mk-t-flipclock { from { --mk-t-flipclock-d: 0; } to { --mk-t-flipclock-d: 10; } }
@keyframes mk-t-flipclock-f { 0% { transform: perspective(200px) rotateX(0); opacity: 1; } 35%, 100% { transform: perspective(200px) rotateX(-180deg); opacity: 0; } }` },
{ id: "t-wavyline", cat: "텍스트", name: "물결 밑줄", use: "강조 문구·링크", meta: "1.2s · linear · 3주기 이동",
  html: `<span class="mk-t-wavyline">신선함 보장<svg viewBox="0 0 120 8" preserveAspectRatio="none"><path d="M0 4Q5 0 10 4T20 4T30 4T40 4T50 4T60 4T70 4T80 4T90 4T100 4T110 4T120 4"/></svg></span>`,
  css: `.mk-t-wavyline { position: relative; display: inline-block; overflow: hidden; padding-bottom: 10px; font: 800 22px system-ui, sans-serif; }
.mk-t-wavyline svg { position: absolute; left: 0; bottom: 0; width: 200%; height: 8px; fill: none; stroke: ${A}; stroke-width: 2; animation: mk-t-wavyline 1.2s linear infinite; }
@keyframes mk-t-wavyline { to { transform: translateX(-50%); } }` },
{ id: "t-3dshadow", cat: "텍스트", name: "입체 그림자", use: "이벤트 타이틀", meta: "2.4s · 그림자 5겹",
  html: `<span class="mk-t-3dshadow">POP!</span>`,
  css: `.mk-t-3dshadow { display: inline-block; font: 900 34px system-ui, sans-serif; color: ${A}; animation: mk-t-3dshadow 2.4s cubic-bezier(.2, .8, .2, 1) infinite; }
@keyframes mk-t-3dshadow {
  0%, 100% { text-shadow: none; transform: none; }
  35%, 75% {
    text-shadow: 1px 1px 0 var(--mk-ink, #1B1E26), 2px 2px 0 var(--mk-ink, #1B1E26), 3px 3px 0 var(--mk-ink, #1B1E26), 4px 4px 0 var(--mk-ink, #1B1E26), 5px 5px 0 var(--mk-ink, #1B1E26);
    transform: translate(-5px, -5px);
  }
}` },
{ id: "t-twotone", cat: "텍스트", name: "두 색 채우기", use: "히어로 문구·브랜드", meta: "3s · 아래에서 색이 차오름",
  html: `<span class="mk-t-twotone">제철 과일</span>`,
  css: `.mk-t-twotone {
  font: 900 28px system-ui, sans-serif;
  background: linear-gradient(180deg, var(--mk-ink, #1B1E26) 0 50%, ${A} 50% 100%);
  background-size: 100% 200%; background-position: 0 0;
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: mk-t-twotone 3s cubic-bezier(.6, 0, .4, 1) infinite;
}
@keyframes mk-t-twotone { 0%, 15% { background-position: 0 0; } 50%, 80% { background-position: 0 100%; } 100% { background-position: 0 0; } }` },
{ id: "t-karaoke", cat: "텍스트", name: "단어 순차 강조", use: "슬로건·안내 문구", meta: "4s · 단어당 0.6s",
  html: `<p class="mk-t-karaoke"><span>지금</span> <span>주문하면</span> <span>내일</span> <span>도착</span></p>`,
  css: `.mk-t-karaoke { margin: 0; font: 700 18px system-ui, sans-serif; }
.mk-t-karaoke span {
  color: var(--mk-ink-soft, #8A90A0);
  background: linear-gradient(color-mix(in srgb, ${A} 22%, transparent), color-mix(in srgb, ${A} 22%, transparent)) no-repeat 0 100% / 0% 30%;
  animation: mk-t-karaoke 4s infinite;
}
${N(3, k => `.mk-t-karaoke span:nth-child(${k + 2}) { animation-delay: ${((k + 1) * 0.6).toFixed(1)}s; }`)}
@keyframes mk-t-karaoke {
  0%, 8% { color: var(--mk-ink-soft, #8A90A0); background-size: 0% 30%; }
  15%, 70% { color: ${A}; background-size: 100% 30%; }
  80%, 100% { color: var(--mk-ink-soft, #8A90A0); background-size: 100% 30%; }
}` },
{ id: "t-svgstroke", cat: "텍스트", name: "글자 외곽선 그리기", use: "인트로·로고 타입", meta: "3.5s · 선 그린 뒤 채움",
  html: `<svg class="mk-t-svgstroke" viewBox="0 0 200 60"><text x="100" y="45" text-anchor="middle">HELLO</text></svg>`,
  css: `.mk-t-svgstroke { width: 180px; }
.mk-t-svgstroke text {
  font: 900 46px system-ui, sans-serif; fill: transparent; stroke: ${A}; stroke-width: 1.5;
  stroke-dasharray: 300; stroke-dashoffset: 300; animation: mk-t-svgstroke 3.5s ease-in-out infinite;
}
@keyframes mk-t-svgstroke {
  0% { stroke-dashoffset: 300; fill: transparent; }
  55% { stroke-dashoffset: 0; fill: transparent; }
  75%, 90% { stroke-dashoffset: 0; fill: ${A}; }
  100% { stroke-dashoffset: 0; fill: transparent; }
}` },
{ id: "t-dropletters", cat: "텍스트", name: "떨어지는 글자", use: "오픈·이벤트 알림", meta: "3s · 글자당 0.08s · 착지 튕김",
  html: `<p class="mk-t-dropletters">${"오픈 특가!".split("").map(c => `<span>${c === " " ? "&nbsp;" : c}</span>`).join("")}</p>`,
  css: `.mk-t-dropletters { margin: 0; padding-top: 20px; font: 800 24px system-ui, sans-serif; color: var(--mk-danger, #E5484D); }
.mk-t-dropletters span { display: inline-block; animation: mk-t-dropletters 3s infinite; }
${N(5, k => `.mk-t-dropletters span:nth-child(${k + 2}) { animation-delay: ${((k + 1) * 0.08).toFixed(2)}s; }`)}
@keyframes mk-t-dropletters {
  0% { transform: translateY(-40px); opacity: 0; animation-timing-function: cubic-bezier(.5, 0, 1, .5); }
  15% { transform: translateY(4px); opacity: 1; }
  20%, 80% { transform: none; opacity: 1; }
  100% { transform: translateY(10px); opacity: 0; }
}` },
{ id: "t-rotx", cat: "텍스트", name: "뒤집히는 글자", use: "로고 강조·호기심 유도", meta: "2.4s · 글자당 0.1s · rotateX 360°",
  html: `<p class="mk-t-rotx">${"SMART".split("").map(c => `<span>${c}</span>`).join("")}</p>`,
  css: `.mk-t-rotx { margin: 0; font: 900 28px system-ui, sans-serif; color: ${A}; }
.mk-t-rotx span { display: inline-block; animation: mk-t-rotx 2.4s cubic-bezier(.6, 0, .4, 1) infinite; }
${N(4, k => `.mk-t-rotx span:nth-child(${k + 2}) { animation-delay: ${((k + 1) * 0.1).toFixed(1)}s; }`)}
@keyframes mk-t-rotx { 0% { transform: perspective(200px) rotateX(0); } 35%, 100% { transform: perspective(200px) rotateX(360deg); } }` },
{ id: "t-quote", cat: "텍스트", name: "후기 돌려 보이기", use: "상품 상세 리뷰 요약", meta: "9s · 후기 3개 3s씩",
  html: `<div class="mk-t-quote"><p><b>★★★★★</b> 당도가 정말 높아요</p><p><b>★★★★★</b> 포장이 꼼꼼해요</p><p><b>★★★★☆</b> 배송이 하루 만에 왔어요</p></div>`,
  css: `.mk-t-quote { display: grid; width: 200px; }
.mk-t-quote p { grid-area: 1 / 1; margin: 0; font-size: 14px; opacity: 0; animation: mk-t-quote 9s infinite; }
.mk-t-quote b { display: block; color: var(--mk-warn, #D99A00); letter-spacing: .1em; font-size: 12px; }
.mk-t-quote p:nth-child(2) { animation-delay: 3s; }
.mk-t-quote p:nth-child(3) { animation-delay: 6s; }
@keyframes mk-t-quote { 0% { opacity: 0; transform: translateY(8px); } 5%, 30% { opacity: 1; transform: none; } 36%, 100% { opacity: 0; transform: translateY(-8px); } }` },
{ id: "t-ticker", cat: "텍스트", name: "세로 뉴스 롤링", use: "공지·실시간 주문 알림", meta: "6s · 4줄 + 첫 줄 복제",
  html: `<div class="mk-t-ticker"><b>공지</b><div><ul><li>추석 배송 마감 9/24</li><li>애플망고 예약 시작</li><li>신규 회원 5% 쿠폰</li><li>제주 직송 무료배송</li><li aria-hidden="true">추석 배송 마감 9/24</li></ul></div></div>`,
  css: `.mk-t-ticker { display: flex; align-items: center; gap: 8px; width: 200px; font-size: 13px; }
.mk-t-ticker b { flex: none; padding: 2px 6px; border-radius: 4px; background: ${A}; color: var(--mk-on-accent, #fff); font-size: 11px; }
.mk-t-ticker div { height: 1.5em; overflow: hidden; }
.mk-t-ticker ul { margin: 0; padding: 0; list-style: none; animation: mk-t-ticker 6s cubic-bezier(.7, 0, .3, 1) infinite; }
.mk-t-ticker li { height: 1.5em; line-height: 1.5em; white-space: nowrap; }
@keyframes mk-t-ticker {
  0%, 18% { transform: none; }
  25%, 43% { transform: translateY(-20%); }
  50%, 68% { transform: translateY(-40%); }
  75%, 93% { transform: translateY(-60%); }
  100% { transform: translateY(-80%); }
}` },
{ id: "t-skew", cat: "텍스트", name: "기울며 등장", use: "속도감 있는 문구", meta: "2.8s · skewX 30°→0",
  html: `<span class="mk-t-skew">빠른 배송</span>`,
  css: `.mk-t-skew { display: inline-block; font: 900 italic 26px system-ui, sans-serif; color: ${A}; animation: mk-t-skew 2.8s cubic-bezier(.2, .8, .2, 1) infinite; }
@keyframes mk-t-skew {
  0% { transform: translateX(-30px) skewX(30deg); opacity: 0; }
  20% { transform: translateX(5px) skewX(-10deg); opacity: 1; }
  28%, 80% { transform: none; opacity: 1; }
  100% { transform: translateX(20px); opacity: 0; }
}` },
{ id: "t-countdown", cat: "텍스트", name: "3·2·1 카운트다운", use: "라이브·이벤트 시작", meta: "4s · 숫자당 1s",
  html: `<div class="mk-t-countdown"><span>3</span><span>2</span><span>1</span><span>시작!</span></div>`,
  css: `.mk-t-countdown { display: grid; place-items: center; width: 120px; height: 70px; }
.mk-t-countdown span { grid-area: 1 / 1; font: 900 40px system-ui, sans-serif; opacity: 0; animation: mk-t-countdown 4s infinite; }
.mk-t-countdown span:nth-child(2) { animation-delay: 1s; }
.mk-t-countdown span:nth-child(3) { animation-delay: 2s; }
.mk-t-countdown span:nth-child(4) { animation-delay: 3s; color: ${A}; font-size: 30px; }
@keyframes mk-t-countdown {
  0% { transform: scale(2); opacity: 0; }
  5%, 20% { transform: none; opacity: 1; }
  25%, 100% { transform: scale(.5); opacity: 0; }
}` },
// ── 피드백
{ id: "fb-snackbar", cat: "피드백", name: "되돌리기 스낵바", use: "삭제·보관 직후", meta: "4.5s · 남은 시간 바 줄어듦",
  html: `<div class="mk-fb-snackbar" role="status">메시지를 삭제했어요 <b>되돌리기</b></div>`,
  css: `.mk-fb-snackbar {
  position: relative; overflow: hidden; display: flex; align-items: center; gap: 14px; padding: 10px 14px; border-radius: 10px;
  background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff); font-size: 13px;
  animation: mk-fb-snackbar 4.5s cubic-bezier(.2, .8, .2, 1) infinite;
}
.mk-fb-snackbar b { color: var(--mk-warn, #D99A00); }
.mk-fb-snackbar::after { content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 3px; background: var(--mk-warn, #D99A00); transform-origin: left; animation: mk-fb-snackbar-t 4.5s linear infinite; }
@keyframes mk-fb-snackbar { 0% { transform: translateY(30px); opacity: 0; } 8%, 88% { transform: none; opacity: 1; } 100% { transform: translateY(30px); opacity: 0; } }
@keyframes mk-fb-snackbar-t { 0%, 8% { transform: scaleX(1); } 88%, 100% { transform: scaleX(0); } }` },
{ id: "fb-inputerr", cat: "피드백", name: "입력 오류 문구", use: "폼 검증 실패", meta: "3s · 테두리 빨강 + 문구 내려옴",
  html: `<div class="mk-fb-inputerr"><input value="abc@" aria-label="이메일" readonly><p>이메일 형식이 아니에요</p></div>`,
  css: `.mk-fb-inputerr { display: grid; gap: 5px; width: 180px; }
.mk-fb-inputerr input {
  padding: 8px 10px; border-radius: 8px; font: inherit; background: transparent; color: inherit;
  border: 1.5px solid var(--mk-line, #DCE0EA); animation: mk-fb-inputerr-b 3s infinite;
}
.mk-fb-inputerr p { margin: 0; font-size: 12px; color: var(--mk-danger, #E5484D); animation: mk-fb-inputerr-m 3s cubic-bezier(.2, .8, .2, 1) infinite; }
@keyframes mk-fb-inputerr-b { 0%, 20%, 100% { border-color: var(--mk-line, #DCE0EA); } 30%, 85% { border-color: var(--mk-danger, #E5484D); } }
@keyframes mk-fb-inputerr-m { 0%, 20% { opacity: 0; transform: translateY(-6px); } 30%, 85% { opacity: 1; transform: none; } 100% { opacity: 0; } }` },
{ id: "fb-banner", cat: "피드백", name: "상단 성공 배너", use: "주문 접수·저장 완료", meta: "3.5s · 위에서 내려왔다 올라감",
  html: `<div class="mk-fb-banner"><p>✓ 주문이 접수됐어요</p><i></i><i></i></div>`,
  css: `.mk-fb-banner { position: relative; overflow: hidden; width: 190px; height: 100px; border-radius: 12px; background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA); }
.mk-fb-banner i { position: absolute; left: 12px; height: 8px; border-radius: 4px; background: var(--mk-skel-a, #E0E4EC); }
.mk-fb-banner i:nth-of-type(1) { top: 56px; width: 70%; }
.mk-fb-banner i:nth-of-type(2) { top: 72px; width: 45%; }
.mk-fb-banner p {
  position: absolute; left: 8px; right: 8px; top: 8px; margin: 0; padding: 8px 10px; border-radius: 8px;
  background: var(--mk-success, #1F9D55); color: #fff; font-size: 12px; font-weight: 600;
  animation: mk-fb-banner 3.5s cubic-bezier(.2, .8, .2, 1) infinite;
}
@keyframes mk-fb-banner { 0% { transform: translateY(-140%); } 12%, 80% { transform: none; } 100% { transform: translateY(-140%); } }` },
{ id: "fb-cloudsave", cat: "피드백", name: "클라우드 저장", use: "자동 저장 표시", meta: "3s · 올라가는 화살표 → 체크",
  html: `<svg class="mk-fb-cloudsave" viewBox="0 0 24 24" aria-label="저장됨"><path d="M7 19h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 9.6 4.7 4.7 0 0 0 7 19z"/><path class="mk-fb-cloudsave-up" d="M12 16v-5M9.8 13L12 10.8 14.2 13"/><path class="mk-fb-cloudsave-ok" d="M9.4 14.2l1.9 1.9 3.4-3.6"/></svg>`,
  css: `.mk-fb-cloudsave { width: 56px; height: 56px; fill: none; stroke: ${A}; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
.mk-fb-cloudsave-up { animation: mk-fb-cloudsave-u 3s infinite; }
.mk-fb-cloudsave-ok { stroke: var(--mk-success, #1F9D55); stroke-width: 2; stroke-dasharray: 8; stroke-dashoffset: 8; animation: mk-fb-cloudsave-c 3s infinite; }
@keyframes mk-fb-cloudsave-u {
  0% { transform: translateY(2px); opacity: 0; }
  10%, 40% { transform: none; opacity: 1; }
  50%, 100% { transform: translateY(-2px); opacity: 0; }
}
@keyframes mk-fb-cloudsave-c { 0%, 50% { stroke-dashoffset: 8; opacity: 1; } 65%, 90% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }` },
{ id: "fb-stack", cat: "피드백", name: "알림 카드 쌓기", use: "알림 센터·주문 알림", meta: "5s · 카드 3장 0.8s씩",
  html: `<div class="mk-fb-stack"><p>새 주문 3건</p><p>배송 출발</p><p>리뷰가 도착했어요</p></div>`,
  css: `.mk-fb-stack { position: relative; width: 180px; height: 92px; }
.mk-fb-stack p {
  position: absolute; left: 0; right: 0; top: 0; margin: 0; padding: 9px 12px 9px 26px; border-radius: 10px; font-size: 13px;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA); box-shadow: 0 4px 12px rgb(0 0 0 / .08);
  opacity: 0; transform-origin: 50% 0;
}
.mk-fb-stack p::before { content: ""; position: absolute; left: 11px; top: 50%; width: 7px; height: 7px; margin-top: -3.5px; border-radius: 50%; background: ${A}; }
.mk-fb-stack p:nth-child(1) { z-index: 1; animation: mk-fb-stack-a 5s cubic-bezier(.2, .8, .2, 1) infinite; }
.mk-fb-stack p:nth-child(2) { z-index: 2; animation: mk-fb-stack-b 5s cubic-bezier(.2, .8, .2, 1) infinite; }
.mk-fb-stack p:nth-child(3) { z-index: 3; animation: mk-fb-stack-c 5s cubic-bezier(.2, .8, .2, 1) infinite; }
@keyframes mk-fb-stack-a {
  0% { opacity: 0; transform: translateY(-20px); }
  6%, 16% { opacity: 1; transform: none; }
  22%, 32% { opacity: 1; transform: translateY(14px) scale(.95); }
  38%, 85% { opacity: 1; transform: translateY(28px) scale(.9); }
  100% { opacity: 0; transform: translateY(28px) scale(.9); }
}
@keyframes mk-fb-stack-b {
  0%, 16% { opacity: 0; transform: translateY(-20px); }
  22%, 32% { opacity: 1; transform: none; }
  38%, 85% { opacity: 1; transform: translateY(14px) scale(.95); }
  100% { opacity: 0; transform: translateY(14px) scale(.95); }
}
@keyframes mk-fb-stack-c {
  0%, 32% { opacity: 0; transform: translateY(-20px); }
  38%, 85% { opacity: 1; transform: none; }
  100% { opacity: 0; }
}` },
{ id: "fb-progtoast", cat: "피드백", name: "진행 토스트", use: "업로드·내보내기", meta: "4s · 로딩 → 완료 전환",
  html: `<div class="mk-fb-progtoast" role="status"><i></i><b>✓</b><span>사진 올리는 중…</span><span>업로드 완료</span></div>`,
  css: `.mk-fb-progtoast {
  display: grid; grid-template-columns: 18px auto; align-items: center; column-gap: 10px; padding: 10px 14px; border-radius: 10px;
  background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff); font-size: 13px;
  animation: mk-fb-progtoast-bg 4s infinite;
}
.mk-fb-progtoast i, .mk-fb-progtoast b { grid-area: 1 / 1; justify-self: center; }
.mk-fb-progtoast span { grid-area: 1 / 2; }
.mk-fb-progtoast i {
  width: 16px; height: 16px; border-radius: 50%; border: 2px solid color-mix(in srgb, currentColor 30%, transparent); border-top-color: currentColor;
  animation: mk-fb-progtoast-a 4s infinite, mk-fb-progtoast-r .8s linear infinite;
}
.mk-fb-progtoast b { font-size: 15px; animation: mk-fb-progtoast-b 4s infinite; }
.mk-fb-progtoast span:nth-of-type(1) { animation: mk-fb-progtoast-a 4s infinite; }
.mk-fb-progtoast span:nth-of-type(2) { animation: mk-fb-progtoast-b 4s infinite; }
@keyframes mk-fb-progtoast-bg { 0%, 58%, 100% { background: var(--mk-ink, #1B1E26); } 62%, 95% { background: var(--mk-success, #1F9D55); } }
@keyframes mk-fb-progtoast-a { 0%, 55% { opacity: 1; } 60%, 95% { opacity: 0; } 100% { opacity: 1; } }
@keyframes mk-fb-progtoast-b { 0%, 58% { opacity: 0; transform: translateY(4px); } 64%, 95% { opacity: 1; transform: none; } 100% { opacity: 0; } }
@keyframes mk-fb-progtoast-r { to { transform: rotate(360deg); } }` },
{ id: "fb-tooltip", cat: "피드백", name: "툴팁 팝", use: "용어 설명·도움말", meta: "3s · scale 0.8→1 · 아래 꼭지점 기준",
  html: `<div class="mk-fb-tooltip"><p>3만원 이상 무료배송</p><span>?</span></div>`,
  css: `.mk-fb-tooltip { display: grid; justify-items: center; gap: 8px; }
.mk-fb-tooltip p {
  position: relative; margin: 0; padding: 6px 10px; border-radius: 8px; font-size: 12px; white-space: nowrap;
  background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff);
  transform-origin: 50% calc(100% + 6px); animation: mk-fb-tooltip 3s cubic-bezier(.34, 1.56, .64, 1) infinite;
}
.mk-fb-tooltip p::after { content: ""; position: absolute; left: 50%; bottom: -5px; margin-left: -5px; border: 5px solid transparent; border-bottom: 0; border-top-color: var(--mk-ink, #1B1E26); }
.mk-fb-tooltip span { display: grid; place-items: center; width: 24px; height: 24px; border-radius: 50%; border: 1.5px solid var(--mk-ink-soft, #8A90A0); color: var(--mk-ink-soft, #8A90A0); font: 700 13px system-ui, sans-serif; }
@keyframes mk-fb-tooltip { 0%, 15% { opacity: 0; transform: scale(.8); } 25%, 80% { opacity: 1; transform: none; } 90%, 100% { opacity: 0; transform: scale(.9); } }` },
{ id: "fb-countup", cat: "피드백", name: "장바구니 수 증가", use: "담기 직후 배지", meta: "3s · 1→2→3 · 매초 튕김",
  html: `<div class="mk-fb-countup"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.2a1 1 0 0 0 1-.8L19 8H6"/><circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/></svg><b></b></div>`,
  css: `@property --mk-fb-countup-n { syntax: "<integer>"; initial-value: 1; inherits: false; }
.mk-fb-countup { position: relative; width: 40px; height: 40px; }
.mk-fb-countup svg { width: 100%; height: 100%; fill: none; stroke: var(--mk-ink, #1B1E26); stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
.mk-fb-countup b {
  position: absolute; top: -4px; right: -6px; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px;
  background: var(--mk-danger, #E5484D); color: #fff; font: 700 11px/18px system-ui, sans-serif; text-align: center;
  counter-reset: mk-fb-countup var(--mk-fb-countup-n);
  animation: mk-fb-countup 3s step-end infinite, mk-fb-countup-p 1s infinite;
}
.mk-fb-countup b::after { content: counter(mk-fb-countup); }
@keyframes mk-fb-countup { 0% { --mk-fb-countup-n: 1; } 33.33% { --mk-fb-countup-n: 2; } 66.66% { --mk-fb-countup-n: 3; } 100% { --mk-fb-countup-n: 3; } }
@keyframes mk-fb-countup-p { 0% { transform: scale(1.35); } 20%, 100% { transform: none; } }` },
{ id: "fb-upload", cat: "피드백", name: "업로드 완료 링", use: "파일·사진 업로드", meta: "3s · @property 0→100 후 체크",
  html: `<div class="mk-fb-upload"><svg viewBox="0 0 24 24" aria-label="완료"><path d="M7.5 12.5l3 3 6-6.5"/></svg></div>`,
  css: `@property --mk-fb-upload-p { syntax: "<number>"; initial-value: 0; inherits: true; }
.mk-fb-upload { position: relative; width: 56px; height: 56px; display: grid; place-items: center; animation: mk-fb-upload 3s cubic-bezier(.4, 0, .2, 1) infinite; }
.mk-fb-upload::before {
  content: ""; position: absolute; inset: 0; border-radius: 50%;
  background: conic-gradient(${A} calc(var(--mk-fb-upload-p) * 1%), color-mix(in srgb, ${A} 15%, transparent) 0);
  -webkit-mask: radial-gradient(farthest-side, transparent 82%, #000 83%);
  mask: radial-gradient(farthest-side, transparent 82%, #000 83%);
}
.mk-fb-upload svg { width: 26px; height: 26px; fill: none; stroke: ${A}; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 20; stroke-dashoffset: 20; animation: mk-fb-upload-c 3s infinite; }
@keyframes mk-fb-upload { 0% { --mk-fb-upload-p: 0; } 60%, 100% { --mk-fb-upload-p: 100; } }
@keyframes mk-fb-upload-c { 0%, 62% { stroke-dashoffset: 20; opacity: 1; } 75%, 92% { stroke-dashoffset: 0; opacity: 1; } 100% { stroke-dashoffset: 0; opacity: 0; } }` },
{ id: "fb-thumb", cat: "피드백", name: "엄지 좋아요", use: "도움이 됐어요 버튼", meta: "2s · 기울었다 튀며 채움",
  html: `<svg class="mk-fb-thumb" viewBox="0 0 24 24" aria-label="좋아요"><path d="M7 10.5V20H4v-9.5h3zm2 9.5h7.6a2 2 0 0 0 2-1.6l1.2-6a2 2 0 0 0-2-2.4H14l.7-3.6a1.8 1.8 0 0 0-3.3-1.3L9 10.5V20z"/></svg>`,
  css: `.mk-fb-thumb {
  width: 44px; height: 44px; fill: transparent; stroke: ${A}; stroke-width: 1.6; stroke-linejoin: round;
  transform-origin: 30% 80%; animation: mk-fb-thumb 2s infinite;
}
@keyframes mk-fb-thumb {
  0%, 10% { transform: none; fill: transparent; }
  20% { transform: rotate(-18deg) scale(.9); fill: transparent; }
  35% { transform: rotate(6deg) scale(1.2); fill: ${A}; }
  45%, 85% { transform: none; fill: ${A}; }
  100% { transform: none; fill: transparent; }
}` },
// ── 채팅
{ id: "c-react", cat: "채팅", name: "하트 리액션", use: "메시지 공감·라이브 반응", meta: "2.4s · 하트 4개 0.4s씩",
  html: `<div class="mk-c-react"><p>오늘 수확한 망고예요</p>${R(4, "<span>♥</span>")}</div>`,
  css: `.mk-c-react { position: relative; width: 170px; height: 100px; }
.mk-c-react p { position: absolute; left: 0; bottom: 0; margin: 0; padding: 8px 12px; border-radius: 14px 14px 14px 4px; background: var(--mk-bubble, #E3E7F0); font-size: 13px; }
.mk-c-react span { position: absolute; right: 18px; bottom: 26px; color: var(--mk-danger, #E5484D); font-size: 16px; opacity: 0; animation: mk-c-react 2.4s ease-out infinite; }
${N(4, k => `.mk-c-react span:nth-of-type(${k + 1}) { --x: ${[-14, 10, -4, 16][k]}px; animation-delay: ${(k * 0.4).toFixed(1)}s; }`)}
@keyframes mk-c-react {
  0% { transform: translate(0, 0) scale(.6); opacity: 0; }
  15% { opacity: 1; }
  100% { transform: translate(var(--x), -70px) scale(1.1); opacity: 0; }
}` },
{ id: "c-delete", cat: "채팅", name: "메시지 삭제", use: "보낸 메시지 지우기", meta: "3.5s · 줄어들며 사라짐 → 안내 문구",
  html: `<div class="mk-c-delete"><p>주소를 잘못 보냈어요</p><em>삭제된 메시지입니다</em></div>`,
  css: `.mk-c-delete { display: grid; justify-items: end; width: 180px; }
.mk-c-delete p, .mk-c-delete em { grid-area: 1 / 1; margin: 0; font-size: 13px; }
.mk-c-delete p { padding: 8px 12px; border-radius: 14px 14px 4px 14px; background: ${A}; color: var(--mk-on-accent, #fff); transform-origin: right center; animation: mk-c-delete 3.5s cubic-bezier(.4, 0, .2, 1) infinite; }
.mk-c-delete em { align-self: center; padding: 8px 12px; color: var(--mk-ink-soft, #8A90A0); animation: mk-c-delete-e 3.5s infinite; }
@keyframes mk-c-delete { 0%, 30% { transform: none; opacity: 1; } 45%, 90% { transform: scale(.6); opacity: 0; } 100% { transform: none; opacity: 1; } }
@keyframes mk-c-delete-e { 0%, 40% { opacity: 0; } 50%, 88% { opacity: 1; } 96%, 100% { opacity: 0; } }` },
{ id: "c-linkcard", cat: "채팅", name: "링크 미리보기", use: "상품 링크 공유", meta: "3.5s · 링크 뒤 카드 펼침",
  html: `<div class="mk-c-linkcard"><p>gyodong.market/mango</p><div><i></i><span><b>제주 애플망고 2kg</b><small>교동마을 산지직송</small></span></div></div>`,
  css: `.mk-c-linkcard { display: grid; gap: 4px; width: 190px; font-size: 12px; }
.mk-c-linkcard p { margin: 0; justify-self: start; padding: 6px 10px; border-radius: 12px; background: var(--mk-bubble, #E3E7F0); color: ${A}; text-decoration: underline; }
.mk-c-linkcard div {
  display: flex; gap: 8px; align-items: center; padding: 6px; border-radius: 10px; background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA);
  animation: mk-c-linkcard 3.5s cubic-bezier(.2, .8, .2, 1) infinite;
}
.mk-c-linkcard i { flex: none; width: 40px; height: 40px; border-radius: 7px; background: linear-gradient(135deg, var(--mk-warn, #D99A00), var(--mk-danger, #E5484D)); }
.mk-c-linkcard span { display: grid; min-width: 0; }
.mk-c-linkcard small { color: var(--mk-ink-soft, #8A90A0); }
@keyframes mk-c-linkcard { 0%, 20% { opacity: 0; transform: translateY(-6px) scale(.97); } 35%, 85% { opacity: 1; transform: none; } 100% { opacity: 0; } }` },
{ id: "c-attach", cat: "채팅", name: "첨부 파일 전송", use: "사진·파일 보내기", meta: "3.5s · 진행 바 후 '전송됨'",
  html: `<div class="mk-c-attach"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z"/><path d="M14 3v5h5"/></svg><div><b>영수증.pdf</b><i></i><small>전송됨 ✓</small></div></div>`,
  css: `.mk-c-attach { display: flex; gap: 8px; align-items: center; width: 180px; padding: 8px 10px; border-radius: 14px 14px 4px 14px; background: ${A}; color: var(--mk-on-accent, #fff); font-size: 12px; }
.mk-c-attach svg { flex: none; width: 26px; height: 26px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linejoin: round; }
.mk-c-attach div { display: grid; gap: 4px; flex: 1; min-width: 0; }
.mk-c-attach i { height: 4px; border-radius: 2px; background: linear-gradient(currentColor, currentColor) 0 0 / 0% 100% no-repeat, color-mix(in srgb, currentColor 30%, transparent); animation: mk-c-attach 3.5s ease-out infinite; }
.mk-c-attach small { grid-area: 2 / 1; opacity: 0; animation: mk-c-attach-d 3.5s infinite; }
.mk-c-attach i { grid-area: 2 / 1; align-self: center; }
@keyframes mk-c-attach { 0% { background-size: 0% 100%, auto; opacity: 1; } 60% { background-size: 100% 100%, auto; opacity: 1; } 66%, 100% { background-size: 100% 100%, auto; opacity: 0; } }
@keyframes mk-c-attach-d { 0%, 64% { opacity: 0; } 70%, 92% { opacity: 1; } 100% { opacity: 0; } }` },
{ id: "c-sendbtn", cat: "채팅", name: "보내기 버튼 활성", use: "채팅 입력창", meta: "3.5s · 입력 steps(7) 후 버튼 켜짐",
  html: `<div class="mk-c-sendbtn"><span>주문취소할게요</span><b><svg viewBox="0 0 24 24" aria-label="보내기"><path d="M4 12l16-8-6 16-2.5-6.5L4 12z"/></svg></b></div>`,
  css: `.mk-c-sendbtn { display: flex; align-items: center; gap: 8px; width: 190px; padding: 5px 5px 5px 12px; border-radius: 20px; border: 1px solid var(--mk-line, #DCE0EA); background: var(--mk-surface, #fff); }
.mk-c-sendbtn span { flex: 1; overflow: hidden; white-space: nowrap; font-size: 13px; line-height: 1; }
.mk-c-sendbtn span { max-width: 7em; animation: mk-c-sendbtn-t 3.5s steps(7) infinite; }
.mk-c-sendbtn b { margin-left: auto; display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; background: var(--mk-skel-a, #E0E4EC); animation: mk-c-sendbtn-b 3.5s infinite; }
.mk-c-sendbtn svg { width: 15px; height: 15px; fill: #fff; }
@keyframes mk-c-sendbtn-t { 0%, 10% { max-width: 0; } 50%, 85% { max-width: 7em; } 100% { max-width: 0; } }
@keyframes mk-c-sendbtn-b {
  0%, 48% { background: var(--mk-skel-a, #E0E4EC); transform: none; }
  53% { background: ${A}; transform: scale(1.15); }
  58%, 85% { background: ${A}; transform: none; }
  100% { background: var(--mk-skel-a, #E0E4EC); }
}` },
{ id: "c-divider", cat: "채팅", name: "여기까지 읽음", use: "안 읽은 메시지 시작점", meta: "3.5s · 선이 가운데서 펼쳐짐",
  html: `<div class="mk-c-divider"><p>배송 시작했나요?</p><div><span>여기까지 읽었어요</span></div><p>방금 출발했어요</p></div>`,
  css: `.mk-c-divider { display: grid; gap: 8px; width: 190px; font-size: 12px; }
.mk-c-divider p { margin: 0; justify-self: start; padding: 6px 10px; border-radius: 12px; background: var(--mk-bubble, #E3E7F0); }
.mk-c-divider p:first-child { opacity: .55; }
.mk-c-divider div { position: relative; display: grid; place-items: center; }
.mk-c-divider div::before { content: ""; position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: ${A}; transform: scaleX(0); animation: mk-c-divider-l 3.5s cubic-bezier(.6, 0, .2, 1) infinite; }
.mk-c-divider span { position: relative; padding: 0 8px; background: var(--mk-stage, #ECEEF4); color: ${A}; font-size: 11px; font-weight: 700; animation: mk-c-divider-t 3.5s infinite; }
.mk-c-divider p:last-child { animation: mk-c-divider-m 3.5s cubic-bezier(.2, .8, .2, 1) infinite; }
@keyframes mk-c-divider-l { 0%, 10% { transform: scaleX(0); } 35%, 88% { transform: scaleX(1); } 100% { transform: scaleX(0); } }
@keyframes mk-c-divider-t { 0%, 25% { opacity: 0; } 35%, 88% { opacity: 1; } 100% { opacity: 0; } }
@keyframes mk-c-divider-m { 0%, 40% { opacity: 0; transform: translateY(6px); } 50%, 88% { opacity: 1; transform: none; } 100% { opacity: 0; } }` },
);
