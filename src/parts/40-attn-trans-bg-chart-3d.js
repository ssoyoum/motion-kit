// 분류: 주목 8 · 전환 10 · 배경 8 · 차트 8 · 3D 6
M.push(
// ── 주목
{ id: "a-wobble", cat: "주목", name: "좌우 흔들림", use: "담기 버튼 재촉", meta: "2.4s · 이동+회전 반감 5회",
  html: `<div class="mk-a-wobble">장바구니 담기</div>`,
  css: `.mk-a-wobble {
  padding: 10px 16px; border-radius: 10px; background: ${A}; color: var(--mk-on-accent, #fff);
  font: 700 14px system-ui, sans-serif; animation: mk-a-wobble 2.4s ease-in-out infinite;
}
@keyframes mk-a-wobble {
  0%, 50%, 100% { transform: none; }
  8% { transform: translateX(-10px) rotate(-5deg); }
  16% { transform: translateX(8px) rotate(3deg); }
  24% { transform: translateX(-6px) rotate(-3deg); }
  32% { transform: translateX(4px) rotate(2deg); }
  40% { transform: translateX(-2px) rotate(-1deg); }
}` },
{ id: "a-swing", cat: "주목", name: "매달린 간판", use: "영업 중·오픈 안내", meta: "2.6s · ±8° 진자",
  html: `<div class="mk-a-swing"><svg viewBox="0 0 110 36"><path d="M55 4L14 35M55 4l41 31"/><circle cx="55" cy="4" r="3"/></svg><span>영업 중</span></div>`,
  css: `.mk-a-swing { width: 110px; transform-origin: 50% 4px; animation: mk-a-swing 2.6s ease-in-out infinite; }
.mk-a-swing svg { display: block; width: 110px; height: 36px; fill: var(--mk-ink-soft, #8A90A0); stroke: var(--mk-ink-soft, #8A90A0); stroke-width: 2; }
.mk-a-swing span {
  display: grid; place-items: center; height: 44px; margin-top: -2px; border-radius: 8px;
  background: var(--mk-success, #1F9D55); color: #fff; font: 800 16px system-ui, sans-serif;
  box-shadow: 0 4px 0 rgb(0 0 0 / .15);
}
@keyframes mk-a-swing { 0%, 100% { transform: rotate(8deg); } 50% { transform: rotate(-8deg); } }` },
{ id: "a-flash", cat: "주목", name: "깜빡 강조", use: "마감 임박 특가", meta: "1.6s · 채움 두 번 깜빡",
  html: `<span class="mk-a-flash">오늘만 특가</span>`,
  css: `.mk-a-flash {
  display: inline-block; padding: 8px 14px; border-radius: 8px;
  border: 2px solid var(--mk-danger, #E5484D); color: var(--mk-danger, #E5484D);
  font: 800 15px system-ui, sans-serif; animation: mk-a-flash 1.6s infinite;
}
@keyframes mk-a-flash {
  0%, 20%, 40%, 100% { background: transparent; color: var(--mk-danger, #E5484D); }
  10%, 30% { background: var(--mk-danger, #E5484D); color: #fff; }
}` },
{ id: "a-outline", cat: "주목", name: "테두리 펄스", use: "새 기능 카드 안내", meta: "1.8s · 테두리 11px 퍼짐",
  html: `<div class="mk-a-outline">새 기능이 생겼어요</div>`,
  css: `.mk-a-outline {
  position: relative; padding: 12px 18px; border-radius: 10px;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA); font: 600 13px system-ui, sans-serif;
}
.mk-a-outline::after {
  content: ""; position: absolute; inset: -1px; border-radius: inherit;
  border: 2px solid ${A}; animation: mk-a-outline 1.8s ease-out infinite;
}
@keyframes mk-a-outline { from { inset: -1px; opacity: 1; } to { inset: -12px; opacity: 0; } }` },
{ id: "a-bounce-down", cat: "주목", name: "아래 화살표 튕김", use: "스크롤 유도", meta: "1.6s · 10px → 5px 튕김",
  html: `<div class="mk-a-bounce-down"><span>아래로 더 보기</span><svg viewBox="0 0 24 24"><path d="M6 6l6 6 6-6M6 12l6 6 6-6"/></svg></div>`,
  css: `.mk-a-bounce-down { display: grid; justify-items: center; gap: 4px; }
.mk-a-bounce-down span { font: 500 12px system-ui, sans-serif; color: var(--mk-ink-soft, #8A90A0); }
.mk-a-bounce-down svg {
  width: 28px; height: 28px; fill: none; stroke: ${A}; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round;
  animation: mk-a-bounce-down 1.6s infinite;
}
@keyframes mk-a-bounce-down {
  0%, 20%, 50%, 80%, 100% { transform: none; }
  40% { transform: translateY(10px); }
  60% { transform: translateY(5px); }
}` },
{ id: "a-spot", cat: "주목", name: "스포트라이트", use: "추천 상품 하나씩 비추기", meta: "4s · @property 원형 구멍 이동",
  html: `<div class="mk-a-spot"><i></i><i></i><i></i></div>`,
  css: `@property --mk-a-spot-x { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
.mk-a-spot {
  position: relative; display: flex; gap: 8px; padding: 10px; border-radius: 12px; overflow: hidden;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA);
}
.mk-a-spot i { width: 44px; height: 56px; border-radius: 8px; background: color-mix(in srgb, ${A} 30%, transparent); }
.mk-a-spot i:nth-child(2) { background: color-mix(in srgb, var(--mk-danger, #E5484D) 30%, transparent); }
.mk-a-spot i:nth-child(3) { background: color-mix(in srgb, var(--mk-success, #1F9D55) 30%, transparent); }
.mk-a-spot::after {
  content: ""; position: absolute; inset: 0;
  background: radial-gradient(circle 34px at var(--mk-a-spot-x) 50%, transparent 0 28px, rgb(0 0 0 / .55) 34px);
  animation: mk-a-spot 4s cubic-bezier(.6, 0, .4, 1) infinite;
}
@keyframes mk-a-spot {
  0%, 15% { --mk-a-spot-x: 20%; }
  33%, 48% { --mk-a-spot-x: 50%; }
  66%, 81% { --mk-a-spot-x: 80%; }
  100% { --mk-a-spot-x: 20%; }
}` },
{ id: "a-live", cat: "주목", name: "LIVE 배지", use: "라이브 방송 중 표시", meta: "1s · step-end 점 깜빡",
  html: `<span class="mk-a-live"><i></i>LIVE<b>1,284</b></span>`,
  css: `.mk-a-live {
  display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 6px;
  background: var(--mk-danger, #E5484D); color: #fff; font: 800 12px/1 system-ui, sans-serif; letter-spacing: .08em;
}
.mk-a-live i { width: 7px; height: 7px; border-radius: 50%; background: #fff; animation: mk-a-live 1s step-end infinite; }
.mk-a-live b { margin-left: 2px; font-weight: 600; letter-spacing: 0; opacity: .85; font-variant-numeric: tabular-nums; }
@keyframes mk-a-live { 50% { opacity: 0; } }` },
{ id: "a-headshake", cat: "주목", name: "도리도리", use: "거절·비밀번호 틀림", meta: "2s · 0.8s 동안 4번 흔듦",
  html: `<div class="mk-a-headshake" aria-label="아니요"><i></i><i></i><b></b></div>`,
  css: `.mk-a-headshake {
  position: relative; width: 56px; height: 56px; border-radius: 50%;
  background: var(--mk-warn, #D99A00); animation: mk-a-headshake 2s ease-in-out infinite;
}
.mk-a-headshake i { position: absolute; top: 20px; width: 6px; height: 8px; border-radius: 3px; background: #1B1E26; }
.mk-a-headshake i:first-child { left: 17px; }
.mk-a-headshake i:nth-child(2) { right: 17px; }
.mk-a-headshake b { position: absolute; left: 20px; right: 20px; bottom: 15px; height: 3px; border-radius: 2px; background: #1B1E26; }
@keyframes mk-a-headshake {
  0%, 50%, 100% { transform: none; }
  10% { transform: translateX(-6px) rotate(-6deg); }
  20% { transform: translateX(5px) rotate(5deg); }
  30% { transform: translateX(-4px) rotate(-3deg); }
  40% { transform: translateX(2px) rotate(2deg); }
}` },
// ── 전환
{ id: "tr-pages", cat: "전환", name: "화면 밀어 넘기기", use: "온보딩·탭 화면 전환", meta: "6s · 화면 3장 + 첫 화면 복제",
  html: `<div class="mk-tr-pages"><div><section>홈</section><section>상품</section><section>장바구니</section><section aria-hidden="true">홈</section></div></div>`,
  css: `.mk-tr-pages { width: 160px; height: 100px; border-radius: 12px; overflow: hidden; border: 1px solid var(--mk-line, #DCE0EA); }
.mk-tr-pages > div { display: flex; width: 400%; height: 100%; animation: mk-tr-pages 6s cubic-bezier(.7, 0, .3, 1) infinite; }
.mk-tr-pages section { flex: 1; display: grid; place-items: center; font: 700 14px system-ui, sans-serif; }
.mk-tr-pages section:nth-child(odd) { background: color-mix(in srgb, ${A} 16%, var(--mk-surface, #fff)); }
.mk-tr-pages section:nth-child(2) { background: color-mix(in srgb, var(--mk-success, #1F9D55) 16%, var(--mk-surface, #fff)); }
.mk-tr-pages section:nth-child(3) { background: color-mix(in srgb, var(--mk-warn, #D99A00) 20%, var(--mk-surface, #fff)); }
@keyframes mk-tr-pages {
  0%, 25% { transform: none; }
  33%, 58% { transform: translateX(-25%); }
  66%, 91% { transform: translateX(-50%); }
  100% { transform: translateX(-75%); }
}` },
{ id: "tr-crossfade", cat: "전환", name: "이미지 교차 페이드", use: "상품 사진 슬라이드", meta: "6s · 두 장이 3s 차이로 교대",
  html: `<div class="mk-tr-crossfade"><i></i><i></i></div>`,
  css: `.mk-tr-crossfade { position: relative; width: 160px; height: 100px; border-radius: 12px; overflow: hidden; }
.mk-tr-crossfade i { position: absolute; inset: 0; opacity: 0; animation: mk-tr-crossfade 6s ease-in-out infinite; }
.mk-tr-crossfade i:first-child { background: linear-gradient(160deg, ${A}, color-mix(in srgb, ${A} 35%, #fff)); }
.mk-tr-crossfade i:last-child { background: linear-gradient(160deg, var(--mk-success, #1F9D55), var(--mk-warn, #D99A00)); animation-delay: -3s; }
@keyframes mk-tr-crossfade {
  0% { opacity: 0; transform: scale(1.08); }
  10%, 50% { opacity: 1; }
  60%, 100% { opacity: 0; transform: scale(1); }
}` },
{ id: "tr-curtain", cat: "전환", name: "커튼 열림", use: "신상품 공개·이벤트 오픈", meta: "4s · 양쪽으로 100% 이동",
  html: `<div class="mk-tr-curtain"><p>신상품 공개</p><i></i><i></i></div>`,
  css: `.mk-tr-curtain {
  position: relative; display: grid; place-items: center; width: 160px; height: 100px; border-radius: 12px; overflow: hidden;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA);
}
.mk-tr-curtain p { margin: 0; font: 800 16px system-ui, sans-serif; }
.mk-tr-curtain i {
  position: absolute; top: 0; bottom: 0; width: 50%;
  background: repeating-linear-gradient(90deg, var(--mk-danger, #E5484D) 0 8px, color-mix(in srgb, var(--mk-danger, #E5484D) 78%, #000) 8px 12px);
  animation: mk-tr-curtain 4s cubic-bezier(.7, 0, .3, 1) infinite;
}
.mk-tr-curtain i:nth-of-type(1) { left: 0; --mk-tr-curtain-d: -100%; }
.mk-tr-curtain i:nth-of-type(2) { right: 0; --mk-tr-curtain-d: 100%; }
@keyframes mk-tr-curtain {
  0%, 20% { transform: none; }
  50%, 80% { transform: translateX(var(--mk-tr-curtain-d)); }
  100% { transform: none; }
}` },
{ id: "tr-shutter", cat: "전환", name: "블라인드", use: "섹션·배너 교체", meta: "4s · 살 5개 0.06s씩",
  html: `<div class="mk-tr-shutter">${R(5, "<i></i>")}</div>`,
  css: `.mk-tr-shutter {
  display: grid; grid-template-rows: repeat(5, 1fr); width: 160px; height: 100px; border-radius: 12px; overflow: hidden;
  background: linear-gradient(135deg, var(--mk-success, #1F9D55), ${A});
}
.mk-tr-shutter i { background: var(--mk-ink, #1B1E26); transform-origin: top; animation: mk-tr-shutter 4s cubic-bezier(.7, 0, .3, 1) infinite; }
${N(4, k => `.mk-tr-shutter i:nth-child(${k + 2}) { animation-delay: ${((k + 1) * 0.06).toFixed(2)}s; }`)}
@keyframes mk-tr-shutter { 0%, 15% { transform: scaleY(1); } 45%, 85% { transform: scaleY(0); } 100% { transform: scaleY(1); } }` },
{ id: "tr-diag", cat: "전환", name: "대각선 와이프", use: "단계 전환", meta: "3.6s · clip-path 4점 사선",
  html: `<div class="mk-tr-diag">1단계</div>`,
  css: `.mk-tr-diag {
  position: relative; display: grid; place-items: center; width: 160px; height: 100px; border-radius: 12px; overflow: hidden;
  background: var(--mk-skel-a, #E0E4EC); font: 800 16px system-ui, sans-serif;
}
.mk-tr-diag::after {
  content: "2단계"; position: absolute; inset: 0; display: grid; place-items: center;
  background: ${A}; color: var(--mk-on-accent, #fff);
  animation: mk-tr-diag 3.6s cubic-bezier(.7, 0, .3, 1) infinite;
}
@keyframes mk-tr-diag {
  0% { clip-path: polygon(0 0, 0 0, -40% 100%, -40% 100%); }
  40%, 70% { clip-path: polygon(0 0, 140% 0, 100% 100%, -40% 100%); }
  100% { clip-path: polygon(140% 0, 140% 0, 100% 100%, 100% 100%); }
}` },
{ id: "tr-zoomrot", cat: "전환", name: "확대·회전 전환", use: "컬렉션·시즌 전환", meta: "5s · scale 1.4 → 0.6, ±10°",
  html: `<div class="mk-tr-zoomrot"><i>봄 컬렉션</i><i>여름 컬렉션</i></div>`,
  css: `.mk-tr-zoomrot { position: relative; width: 130px; height: 80px; }
.mk-tr-zoomrot i {
  position: absolute; inset: 0; display: grid; place-items: center; border-radius: 12px; opacity: 0;
  font: 800 14px/1 system-ui, sans-serif; font-style: normal; color: #fff;
  animation: mk-tr-zoomrot 5s cubic-bezier(.6, 0, .4, 1) infinite;
}
.mk-tr-zoomrot i:first-child { background: var(--mk-success, #1F9D55); }
.mk-tr-zoomrot i:last-child { background: var(--mk-danger, #E5484D); animation-delay: -2.5s; }
@keyframes mk-tr-zoomrot {
  0% { opacity: 0; transform: scale(1.4) rotate(10deg); }
  12%, 45% { opacity: 1; transform: none; }
  55%, 100% { opacity: 0; transform: scale(.6) rotate(-10deg); }
}` },
{ id: "tr-flipv", cat: "전환", name: "세로 뒤집기", use: "쿠폰 앞뒤·정답 공개", meta: "3.6s · rotateX 0→180→360",
  html: `<div class="mk-tr-flipv"><div><span>쿠폰 뒤집기</span><span>3,000원 할인</span></div></div>`,
  css: `.mk-tr-flipv { width: 130px; height: 80px; perspective: 500px; }
.mk-tr-flipv > div { position: relative; height: 100%; transform-style: preserve-3d; animation: mk-tr-flipv 3.6s cubic-bezier(.6, 0, .4, 1) infinite; }
.mk-tr-flipv span {
  position: absolute; inset: 0; display: grid; place-items: center; border-radius: 10px;
  backface-visibility: hidden; font: 700 14px system-ui, sans-serif;
}
.mk-tr-flipv span:first-child { background: ${A}; color: var(--mk-on-accent, #fff); }
.mk-tr-flipv span:last-child { background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff); transform: rotateX(180deg); }
@keyframes mk-tr-flipv { 0%, 35% { transform: none; } 50%, 85% { transform: rotateX(180deg); } 100% { transform: rotateX(360deg); } }` },
{ id: "tr-shuffle", cat: "전환", name: "카드 섞기", use: "쿠폰함·추천 카드 넘기기", meta: "6s · 카드 3장 2s씩 순환",
  html: `<div class="mk-tr-shuffle"><i>쿠폰 1</i><i>쿠폰 2</i><i>쿠폰 3</i></div>`,
  css: `.mk-tr-shuffle { position: relative; width: 130px; height: 96px; }
.mk-tr-shuffle i {
  position: absolute; left: 5px; right: 5px; bottom: 0; height: 74px; border-radius: 10px;
  display: grid; place-items: center; font: 800 14px/1 system-ui, sans-serif; font-style: normal; color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / .15); transform-origin: 50% 100%;
  animation: mk-tr-shuffle 6s cubic-bezier(.6, 0, .4, 1) infinite;
}
.mk-tr-shuffle i:nth-child(1) { background: ${A}; }
.mk-tr-shuffle i:nth-child(2) { background: var(--mk-success, #1F9D55); animation-delay: -2s; }
.mk-tr-shuffle i:nth-child(3) { background: var(--mk-danger, #E5484D); animation-delay: -4s; }
@keyframes mk-tr-shuffle {
  0%, 13% { transform: none; z-index: 3; }
  20% { transform: translateX(115%) rotate(10deg); z-index: 3; }
  27%, 46% { transform: translateY(-16px) scale(.88); z-index: 1; }
  53%, 80% { transform: translateY(-8px) scale(.94); z-index: 2; }
  87%, 100% { transform: none; z-index: 3; }
}` },
{ id: "tr-morph", cat: "전환", name: "사각형 → 원", use: "버튼 상태 변화·로고 인트로", meta: "4s · 모양·색·90°씩 회전",
  html: `<div class="mk-tr-morph"></div>`,
  css: `.mk-tr-morph { width: 64px; height: 64px; background: ${A}; animation: mk-tr-morph 4s cubic-bezier(.6, 0, .4, 1) infinite; }
@keyframes mk-tr-morph {
  0%, 100% { border-radius: 8px; transform: rotate(0); background: ${A}; }
  33% { border-radius: 50%; transform: rotate(90deg); background: var(--mk-success, #1F9D55); }
  66% { border-radius: 50% 0 50% 0; transform: rotate(180deg); background: var(--mk-warn, #D99A00); }
}` },
{ id: "tr-expand", cat: "전환", name: "카드가 상세로 확장", use: "목록 → 상세 화면", meta: "4s · 56px 카드 → 전체 영역",
  html: `<div class="mk-tr-expand"><div><i></i><span></span><span></span></div></div>`,
  css: `.mk-tr-expand { position: relative; width: 190px; height: 110px; border-radius: 12px; background: var(--mk-skel-a, #E0E4EC); }
.mk-tr-expand > div {
  position: absolute; left: 10px; top: 10px; width: 56px; height: 56px; border-radius: 10px; overflow: hidden;
  background: var(--mk-surface, #fff); box-shadow: 0 4px 14px rgb(0 0 0 / .15);
  animation: mk-tr-expand 4s cubic-bezier(.6, 0, .2, 1) infinite;
}
.mk-tr-expand i { display: block; height: 56px; background: ${A}; }
.mk-tr-expand span { display: block; height: 8px; margin: 8px 10px 0; border-radius: 4px; background: var(--mk-skel-a, #E0E4EC); opacity: 0; animation: mk-tr-expand-t 4s infinite; }
.mk-tr-expand span:last-child { width: 50%; }
@keyframes mk-tr-expand {
  0%, 20%, 100% { left: 10px; top: 10px; width: 56px; height: 56px; border-radius: 10px; }
  45%, 80% { left: 0; top: 0; width: 190px; height: 110px; border-radius: 12px; }
}
@keyframes mk-tr-expand-t { 0%, 42% { opacity: 0; } 50%, 76% { opacity: 1; } 84%, 100% { opacity: 0; } }` },
// ── 배경
{ id: "bg-conic", cat: "배경", name: "회전 원뿔 그라데이션", use: "히어로·프로모션 배경", meta: "8s · linear · 4색 conic",
  html: `<div class="mk-bg-conic"></div>`,
  css: `.mk-bg-conic { position: relative; width: 180px; height: 110px; border-radius: 12px; overflow: hidden; }
.mk-bg-conic::before {
  content: ""; position: absolute; inset: -60%;
  background: conic-gradient(from 0deg, ${A}, var(--mk-success, #1F9D55), var(--mk-warn, #D99A00), var(--mk-danger, #E5484D), ${A});
  animation: mk-bg-conic 8s linear infinite;
}
.mk-bg-conic::after { content: ""; position: absolute; inset: 0; background: rgb(255 255 255 / .22); }
@keyframes mk-bg-conic { to { transform: rotate(360deg); } }` },
{ id: "bg-grain", cat: "배경", name: "노이즈 질감", use: "필름·빈티지 무드", meta: "0.4s · steps(1) 위치 4곳",
  html: `<div class="mk-bg-grain"></div>`,
  css: `.mk-bg-grain {
  position: relative; width: 180px; height: 110px; border-radius: 12px; overflow: hidden;
  background: linear-gradient(135deg, ${A}, var(--mk-danger, #E5484D));
}
.mk-bg-grain::after {
  content: ""; position: absolute; inset: -50%; opacity: .4;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  animation: mk-bg-grain .4s steps(1) infinite;
}
@keyframes mk-bg-grain {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-8%, 6%); }
  50% { transform: translate(6%, -4%); }
  75% { transform: translate(-4%, -8%); }
}` },
{ id: "bg-floor", cat: "배경", name: "원근 격자 바닥", use: "테크·게임 이벤트 배경", meta: "1s · linear · 20px 격자",
  html: `<div class="mk-bg-floor"></div>`,
  css: `.mk-bg-floor {
  position: relative; width: 180px; height: 110px; border-radius: 12px; overflow: hidden;
  background: linear-gradient(#0B1020 45%, #1A2550);
}
.mk-bg-floor::before {
  content: ""; position: absolute; left: -50%; right: -50%; top: 45%; height: 200%;
  background-image:
    linear-gradient(color-mix(in srgb, ${A} 75%, transparent) 1px, transparent 1px),
    linear-gradient(90deg, color-mix(in srgb, ${A} 75%, transparent) 1px, transparent 1px);
  background-size: 20px 20px;
  transform: perspective(120px) rotateX(60deg); transform-origin: top;
  animation: mk-bg-floor 1s linear infinite;
}
@keyframes mk-bg-floor { to { background-position: 0 20px; } }` },
{ id: "bg-shapes", cat: "배경", name: "떠다니는 도형", use: "랜딩·빈 화면 장식", meta: "도형 5개 · 4~7s alternate",
  html: `<div class="mk-bg-shapes">${R(5, "<i></i>")}</div>`,
  css: `.mk-bg-shapes {
  position: relative; width: 180px; height: 110px; border-radius: 12px; overflow: hidden;
  background: color-mix(in srgb, ${A} 8%, var(--mk-surface, #fff));
}
.mk-bg-shapes i { position: absolute; animation: mk-bg-shapes ease-in-out infinite alternate; }
.mk-bg-shapes i:nth-child(1) { left: 12%; top: 18%; width: 26px; height: 26px; border-radius: 50%; background: ${A}; animation-duration: 5s; }
.mk-bg-shapes i:nth-child(2) { left: 62%; top: 12%; width: 24px; height: 22px; background: var(--mk-warn, #D99A00); clip-path: polygon(50% 0, 100% 100%, 0 100%); animation-duration: 6s; }
.mk-bg-shapes i:nth-child(3) { left: 40%; top: 58%; width: 20px; height: 20px; border-radius: 4px; background: var(--mk-success, #1F9D55); animation-duration: 4s; }
.mk-bg-shapes i:nth-child(4) { left: 78%; top: 60%; width: 22px; height: 22px; border-radius: 50%; border: 3px solid var(--mk-danger, #E5484D); animation-duration: 7s; }
.mk-bg-shapes i:nth-child(5) { left: 22%; top: 70%; width: 10px; height: 10px; border-radius: 50%; background: ${A}; opacity: .5; animation-duration: 4.5s; }
@keyframes mk-bg-shapes { to { transform: translate(14px, -12px) rotate(90deg); } }` },
{ id: "bg-snow", cat: "배경", name: "눈 내림", use: "겨울 시즌 배너", meta: "눈송이 12개 · 3~6s",
  html: `<div class="mk-bg-snow">${R(12, "<i></i>")}</div>`,
  css: `.mk-bg-snow { position: relative; width: 180px; height: 110px; border-radius: 12px; overflow: hidden; background: linear-gradient(#1C2A48, #3B4F7A); }
.mk-bg-snow i { position: absolute; top: -6px; border-radius: 50%; background: #fff; opacity: .9; animation: mk-bg-snow linear infinite; }
${N(12, k => `.mk-bg-snow i:nth-child(${k + 1}) { left: ${(k * 8 + 3) % 96}%; width: ${2 + k % 4}px; height: ${2 + k % 4}px; animation-duration: ${(3 + (k * 7) % 4 * 0.8).toFixed(1)}s; animation-delay: ${(-(k * 0.53) % 5).toFixed(2)}s; }`)}
@keyframes mk-bg-snow {
  0% { transform: translate(0, 0); }
  50% { transform: translate(6px, 60px); }
  100% { transform: translate(-4px, 125px); }
}` },
{ id: "bg-confetti", cat: "배경", name: "꽃가루 비", use: "축하·당첨 화면 배경", meta: "조각 14개 · 2.5~4.3s",
  html: `<div class="mk-bg-confetti">${R(14, "<i></i>")}</div>`,
  css: `.mk-bg-confetti { position: relative; width: 180px; height: 110px; border-radius: 12px; overflow: hidden; background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA); }
.mk-bg-confetti i { position: absolute; top: -12px; width: 5px; height: 9px; border-radius: 1px; animation: mk-bg-confetti linear infinite; }
${N(14, k => `.mk-bg-confetti i:nth-child(${k + 1}) { left: ${(k * 7 + 4) % 96}%; background: ${["var(--mk-accent, #2F5BFF)", "var(--mk-danger, #E5484D)", "var(--mk-success, #1F9D55)", "var(--mk-warn, #D99A00)"][k % 4]}; animation-duration: ${(2.5 + (k * 5) % 7 * 0.3).toFixed(1)}s; animation-delay: ${(-(k * 0.37) % 3).toFixed(2)}s; }`)}
@keyframes mk-bg-confetti {
  from { transform: translateY(0) rotate3d(1, 1, 0, 0deg); }
  to { transform: translateY(130px) rotate3d(1, 1, 0, 720deg); }
}` },
{ id: "bg-rays", cat: "배경", name: "빛줄기 회전", use: "당첨·레벨업 배경", meta: "12s · linear · 20° 반복",
  html: `<div class="mk-bg-rays"><span>당첨!</span></div>`,
  css: `.mk-bg-rays { position: relative; width: 180px; height: 110px; border-radius: 12px; overflow: hidden; background: var(--mk-warn, #D99A00); }
.mk-bg-rays::before {
  content: ""; position: absolute; left: 50%; top: 50%; width: 300px; height: 300px; margin: -150px 0 0 -150px;
  background: repeating-conic-gradient(rgb(255 255 255 / .28) 0 10deg, transparent 10deg 20deg);
  animation: mk-bg-rays 12s linear infinite;
}
.mk-bg-rays span {
  position: relative; display: grid; place-items: center; height: 100%;
  font: 900 22px system-ui, sans-serif; color: #fff; text-shadow: 0 2px 0 rgb(0 0 0 / .2);
}
@keyframes mk-bg-rays { to { transform: rotate(360deg); } }` },
{ id: "bg-scan", cat: "배경", name: "스캔라인", use: "인증·스캔 진행 화면", meta: "2.4s · 빛 띠 위→아래",
  html: `<div class="mk-bg-scan"><span>SCANNING</span></div>`,
  css: `.mk-bg-scan {
  position: relative; display: grid; place-items: center; width: 180px; height: 110px; border-radius: 12px; overflow: hidden;
  background: #0D1A14 repeating-linear-gradient(0deg, rgb(255 255 255 / .05) 0 1px, transparent 1px 3px);
}
.mk-bg-scan span { font: 700 13px ui-monospace, Consolas, monospace; letter-spacing: .2em; color: #3DD68C; }
.mk-bg-scan::after {
  content: ""; position: absolute; left: 0; right: 0; top: -30px; height: 30px;
  background: linear-gradient(transparent, rgb(61 214 140 / .35), transparent);
  animation: mk-bg-scan 2.4s linear infinite;
}
@keyframes mk-bg-scan { to { transform: translateY(140px); } }` },
// ── 차트
{ id: "ch-pie", cat: "차트", name: "파이 차트 채우기", use: "판매 비중·카테고리 구성", meta: "3s · @property 0→100",
  html: `<div class="mk-ch-pie"><i></i><ul><li>과일 45%</li><li>수산 30%</li><li>채소 25%</li></ul></div>`,
  css: `@property --mk-ch-pie-p { syntax: "<number>"; initial-value: 0; inherits: true; }
.mk-ch-pie { display: flex; align-items: center; gap: 14px; animation: mk-ch-pie 3s cubic-bezier(.4, 0, .2, 1) infinite; }
.mk-ch-pie i {
  width: 76px; height: 76px; border-radius: 50%;
  background: conic-gradient(
    ${A} 0 calc(min(var(--mk-ch-pie-p), 45) * 1%),
    var(--mk-success, #1F9D55) 0 calc(min(var(--mk-ch-pie-p), 75) * 1%),
    var(--mk-warn, #D99A00) 0 calc(var(--mk-ch-pie-p) * 1%),
    var(--mk-skel-a, #E0E4EC) 0);
}
.mk-ch-pie ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 4px; font: 500 12px system-ui, sans-serif; }
.mk-ch-pie li::before { content: ""; display: inline-block; width: 8px; height: 8px; margin-right: 6px; border-radius: 2px; background: ${A}; }
.mk-ch-pie li:nth-child(2)::before { background: var(--mk-success, #1F9D55); }
.mk-ch-pie li:nth-child(3)::before { background: var(--mk-warn, #D99A00); }
@keyframes mk-ch-pie { 0% { --mk-ch-pie-p: 0; } 60%, 100% { --mk-ch-pie-p: 100; } }` },
{ id: "ch-area", cat: "차트", name: "영역 차트 차오름", use: "방문자·매출 추이", meta: "3s · scaleY 0→1 아래 기준",
  html: `<svg class="mk-ch-area" viewBox="0 0 160 80"><g><path d="M0 80V55L25 48L50 52L75 30L100 36L125 18L160 24V80Z"/><path d="M0 55L25 48L50 52L75 30L100 36L125 18L160 24"/></g><path d="M0 79.5H160"/></svg>`,
  css: `.mk-ch-area { width: 180px; height: 90px; overflow: visible; }
.mk-ch-area g { transform-box: fill-box; transform-origin: 50% 100%; animation: mk-ch-area 3s cubic-bezier(.2, .8, .2, 1) infinite; }
.mk-ch-area g path:first-child { fill: color-mix(in srgb, ${A} 25%, transparent); }
.mk-ch-area g path:last-child { fill: none; stroke: ${A}; stroke-width: 2.5; stroke-linejoin: round; stroke-linecap: round; }
.mk-ch-area > path { fill: none; stroke: var(--mk-ink-soft, #8A90A0); stroke-width: 1; }
@keyframes mk-ch-area { 0% { transform: scaleY(0); } 35%, 85% { transform: scaleY(1); } 100% { transform: scaleY(0); } }` },
{ id: "ch-race", cat: "차트", name: "막대 순위 경주", use: "실시간 인기 순위", meta: "5s · 길이 변화 + 자리 바꿈",
  html: `<div class="mk-ch-race"><div><span>사과</span><i></i></div><div><span>귤</span><i></i></div><div><span>배</span><i></i></div></div>`,
  css: `.mk-ch-race { position: relative; width: 190px; height: 78px; font: 600 12px system-ui, sans-serif; }
.mk-ch-race > div { position: absolute; left: 0; right: 0; display: flex; align-items: center; gap: 6px; height: 26px; }
.mk-ch-race > div:nth-child(1) { top: 0; animation: mk-ch-race-a 5s cubic-bezier(.6, 0, .4, 1) infinite; }
.mk-ch-race > div:nth-child(2) { top: 26px; animation: mk-ch-race-b 5s cubic-bezier(.6, 0, .4, 1) infinite; }
.mk-ch-race > div:nth-child(3) { top: 52px; }
.mk-ch-race span { width: 30px; flex: none; }
.mk-ch-race i { display: block; flex: none; width: 0; height: 14px; border-radius: 7px; animation: 5s cubic-bezier(.6, 0, .4, 1) infinite; }
.mk-ch-race > div:nth-child(1) i { background: var(--mk-danger, #E5484D); animation-name: mk-ch-race-wa; }
.mk-ch-race > div:nth-child(2) i { background: var(--mk-warn, #D99A00); animation-name: mk-ch-race-wb; }
.mk-ch-race > div:nth-child(3) i { background: var(--mk-success, #1F9D55); animation-name: mk-ch-race-wc; }
@keyframes mk-ch-race-a { 0%, 45%, 100% { transform: none; } 60%, 90% { transform: translateY(26px); } }
@keyframes mk-ch-race-b { 0%, 45%, 100% { transform: none; } 60%, 90% { transform: translateY(-26px); } }
@keyframes mk-ch-race-wa { 0% { width: 0; } 20%, 45% { width: 112px; } 60%, 90% { width: 98px; } 100% { width: 0; } }
@keyframes mk-ch-race-wb { 0% { width: 0; } 20%, 45% { width: 84px; } 60%, 90% { width: 140px; } 100% { width: 0; } }
@keyframes mk-ch-race-wc { 0% { width: 0; } 20%, 45% { width: 56px; } 60%, 90% { width: 70px; } 100% { width: 0; } }` },
{ id: "ch-spark", cat: "차트", name: "스파크라인 점 이동", use: "주가·실시간 지표 카드", meta: "3s · SVG animateMotion + 후광",
  html: `<div class="mk-ch-spark"><b>+12.4%</b><svg width="160" height="50" viewBox="0 0 160 50"><path d="M0 38L20 30L40 34L60 18L80 24L100 10L120 20L140 8L160 14"/><circle r="9"><animateMotion dur="3s" repeatCount="indefinite" path="M0 38L20 30L40 34L60 18L80 24L100 10L120 20L140 8L160 14"/></circle><circle r="4"><animateMotion dur="3s" repeatCount="indefinite" path="M0 38L20 30L40 34L60 18L80 24L100 10L120 20L140 8L160 14"/></circle></svg></div>`,
  css: `.mk-ch-spark { display: grid; gap: 4px; width: 160px; }
.mk-ch-spark b { justify-self: end; font: 700 12px system-ui, sans-serif; color: var(--mk-success, #1F9D55); }
.mk-ch-spark svg { display: block; overflow: visible; }
.mk-ch-spark path { fill: none; stroke: ${A}; stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; }
.mk-ch-spark circle { fill: ${A}; }
.mk-ch-spark circle:first-of-type { opacity: .25; transform-box: fill-box; transform-origin: center; animation: mk-ch-spark .9s ease-in-out infinite alternate; }
@keyframes mk-ch-spark { from { transform: scale(.5); } to { transform: scale(1); } }` },
{ id: "ch-rings", cat: "차트", name: "3중 링 진행", use: "운동·목표 달성 링", meta: "3.2s · 82% / 64% / 45%",
  html: `<svg class="mk-ch-rings" viewBox="0 0 80 80"><circle cx="40" cy="40" r="34"/><circle cx="40" cy="40" r="26"/><circle cx="40" cy="40" r="18"/><circle cx="40" cy="40" r="34"/><circle cx="40" cy="40" r="26"/><circle cx="40" cy="40" r="18"/></svg>`,
  css: `.mk-ch-rings { width: 90px; height: 90px; transform: rotate(-90deg); }
.mk-ch-rings circle { fill: none; stroke-width: 6; stroke-linecap: round; }
.mk-ch-rings circle:nth-child(-n+3) { stroke: var(--mk-skel-a, #E0E4EC); }
.mk-ch-rings circle:nth-child(4) { stroke: var(--mk-danger, #E5484D); stroke-dasharray: 213.6; animation: mk-ch-rings-a 3.2s cubic-bezier(.4, 0, .2, 1) infinite; }
.mk-ch-rings circle:nth-child(5) { stroke: var(--mk-success, #1F9D55); stroke-dasharray: 163.4; animation: mk-ch-rings-b 3.2s cubic-bezier(.4, 0, .2, 1) infinite; }
.mk-ch-rings circle:nth-child(6) { stroke: ${A}; stroke-dasharray: 113.1; animation: mk-ch-rings-c 3.2s cubic-bezier(.4, 0, .2, 1) infinite; }
@keyframes mk-ch-rings-a { 0%, 100% { stroke-dashoffset: 213.6; } 50%, 85% { stroke-dashoffset: 38.4; } }
@keyframes mk-ch-rings-b { 0%, 5%, 100% { stroke-dashoffset: 163.4; } 55%, 85% { stroke-dashoffset: 58.8; } }
@keyframes mk-ch-rings-c { 0%, 10%, 100% { stroke-dashoffset: 113.1; } 60%, 85% { stroke-dashoffset: 62.2; } }` },
{ id: "ch-heat", cat: "차트", name: "히트맵 펄스", use: "요일·시간대 주문량", meta: "2.4s · 7×4칸 대각선 물결",
  html: `<div class="mk-ch-heat">${R(28, "<i></i>")}</div>`,
  css: `.mk-ch-heat { display: grid; grid-template-columns: repeat(7, 16px); gap: 3px; }
.mk-ch-heat i { width: 16px; height: 16px; border-radius: 3px; background: ${A}; opacity: var(--o); animation: mk-ch-heat 2.4s ease-in-out infinite; }
${N(28, k => `.mk-ch-heat i:nth-child(${k + 1}) { --o: ${[.15, .35, .6, .25, .8, .45, .2][(k * 3) % 7]}; animation-delay: ${((k % 7 + Math.floor(k / 7)) * 0.08).toFixed(2)}s; }`)}
@keyframes mk-ch-heat { 50% { opacity: 1; transform: scale(.85); } }` },
{ id: "ch-stack", cat: "차트", name: "누적 막대 쌓기", use: "채널별 매출 구성", meta: "3.2s · 칸마다 0.15s, 막대마다 0.08s",
  html: `<div class="mk-ch-stack">${R(4, "<div><i></i><i></i><i></i></div>")}</div>`,
  css: `.mk-ch-stack { display: flex; align-items: flex-end; gap: 10px; height: 90px; border-bottom: 1px solid var(--mk-ink-soft, #8A90A0); }
.mk-ch-stack > div { display: flex; flex-direction: column-reverse; width: 22px; }
.mk-ch-stack i { display: block; height: 0; animation: mk-ch-stack 3.2s cubic-bezier(.2, .8, .2, 1) infinite; }
.mk-ch-stack i:nth-child(1) { background: ${A}; }
.mk-ch-stack i:nth-child(2) { background: var(--mk-success, #1F9D55); }
.mk-ch-stack i:nth-child(3) { background: var(--mk-warn, #D99A00); border-radius: 3px 3px 0 0; }
${N(12, k => { const b = Math.floor(k / 3), s = k % 3; return `.mk-ch-stack > div:nth-child(${b + 1}) i:nth-child(${s + 1}) { --h: ${[[30, 20, 12], [24, 28, 18], [36, 16, 22], [20, 30, 26]][b][s]}px; animation-delay: ${(b * 0.08 + s * 0.15).toFixed(2)}s; }`; })}
@keyframes mk-ch-stack { 0% { height: 0; } 30%, 85% { height: var(--h); } 100% { height: 0; } }` },
{ id: "ch-kpi", cat: "차트", name: "KPI 숫자 상승", use: "대시보드 요약 카드", meta: "3s · @property 0→128 + 증감 배지",
  html: `<div class="mk-ch-kpi"><span>오늘 매출</span><b></b><em>▲ 18%</em></div>`,
  css: `@property --mk-ch-kpi-n { syntax: "<integer>"; initial-value: 0; inherits: true; }
.mk-ch-kpi {
  display: grid; gap: 4px; min-width: 150px; padding: 12px 14px; border-radius: 12px;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA);
  counter-reset: k var(--mk-ch-kpi-n); animation: mk-ch-kpi 3s cubic-bezier(.2, .8, .2, 1) infinite;
}
.mk-ch-kpi span { font: 500 12px system-ui, sans-serif; color: var(--mk-ink-soft, #8A90A0); }
.mk-ch-kpi b { font: 800 24px/1.1 system-ui, sans-serif; font-variant-numeric: tabular-nums; }
.mk-ch-kpi b::after { content: counter(k) "만원"; }
.mk-ch-kpi em {
  justify-self: start; padding: 2px 6px; border-radius: 6px; font: 700 12px system-ui, sans-serif; font-style: normal;
  background: color-mix(in srgb, var(--mk-success, #1F9D55) 15%, transparent); color: var(--mk-success, #1F9D55);
  animation: mk-ch-kpi-up 3s infinite;
}
@keyframes mk-ch-kpi { 0% { --mk-ch-kpi-n: 0; } 60%, 100% { --mk-ch-kpi-n: 128; } }
@keyframes mk-ch-kpi-up { 0%, 55% { opacity: 0; transform: translateY(6px); } 65%, 92% { opacity: 1; transform: none; } 100% { opacity: 0; } }` },
// ── 3D
{ id: "d3-carousel", cat: "3D", name: "3D 회전 캐러셀", use: "상품·기획전 둘러보기", meta: "8s · 카드 6장 60°씩",
  html: `<div class="mk-d3-carousel"><div>${R(6, "<i></i>")}</div></div>`,
  css: `.mk-d3-carousel { display: grid; place-items: center; width: 180px; height: 100px; perspective: 400px; }
.mk-d3-carousel > div { position: relative; width: 46px; height: 62px; transform-style: preserve-3d; animation: mk-d3-carousel 8s linear infinite; }
.mk-d3-carousel i { position: absolute; inset: 0; border-radius: 8px; border: 2px solid var(--mk-surface, #fff); opacity: .92; }
${N(6, k => `.mk-d3-carousel i:nth-child(${k + 1}) { transform: rotateY(${k * 60}deg) translateZ(60px); background: ${["var(--mk-accent, #2F5BFF)", "var(--mk-danger, #E5484D)", "var(--mk-success, #1F9D55)", "var(--mk-warn, #D99A00)"][k % 4]}; }`)}
@keyframes mk-d3-carousel { from { transform: translateZ(-60px) rotateY(0); } to { transform: translateZ(-60px) rotateY(-360deg); } }` },
{ id: "d3-book", cat: "3D", name: "책장 넘김", use: "가이드북·매거진", meta: "3.6s · rotateY 0→-180°",
  html: `<div class="mk-d3-book"><i></i><i></i><b></b></div>`,
  css: `.mk-d3-book { position: relative; width: 160px; height: 100px; padding: 4px; border-radius: 6px; background: ${A}; perspective: 600px; }
.mk-d3-book i, .mk-d3-book b {
  position: absolute; top: 4px; bottom: 4px; width: calc(50% - 4px);
  background: var(--mk-surface, #fff) repeating-linear-gradient(transparent 0 10px, var(--mk-line, #DCE0EA) 10px 11px) 10px 14px / calc(100% - 20px) calc(100% - 24px) no-repeat;
}
.mk-d3-book i:first-child { left: 4px; border-radius: 4px 0 0 4px; box-shadow: inset -6px 0 8px -6px rgb(0 0 0 / .3); }
.mk-d3-book i:nth-child(2) { left: 50%; border-radius: 0 4px 4px 0; box-shadow: inset 6px 0 8px -6px rgb(0 0 0 / .3); }
.mk-d3-book b { left: 50%; border-radius: 0 4px 4px 0; transform-origin: left; animation: mk-d3-book 3.6s cubic-bezier(.6, 0, .4, 1) infinite; }
@keyframes mk-d3-book {
  0% { transform: rotateY(0); opacity: 0; }
  5%, 10% { transform: rotateY(0); opacity: 1; }
  55%, 80% { transform: rotateY(-180deg); opacity: 1; }
  90%, 100% { transform: rotateY(-180deg); opacity: 0; }
}` },
{ id: "d3-layers", cat: "3D", name: "화면 레이어 분리", use: "앱 구조·기능 소개", meta: "4s · 층마다 18px 띄움",
  html: `<div class="mk-d3-layers"><div><i></i><i></i><i></i></div></div>`,
  css: `.mk-d3-layers { display: grid; place-items: center; width: 180px; height: 110px; perspective: 600px; }
.mk-d3-layers > div { position: relative; width: 64px; height: 96px; transform-style: preserve-3d; transform: rotateX(58deg) rotateZ(-38deg); }
.mk-d3-layers i { position: absolute; inset: 0; border-radius: 10px; animation: mk-d3-layers 4s cubic-bezier(.6, 0, .4, 1) infinite; }
.mk-d3-layers i:nth-child(1) { background: var(--mk-skel-a, #E0E4EC); border: 1px solid var(--mk-line, #DCE0EA); }
.mk-d3-layers i:nth-child(2) { background: color-mix(in srgb, ${A} 55%, transparent); --mk-d3-layers-z: 18px; }
.mk-d3-layers i:nth-child(3) {
  background: var(--mk-surface, #fff) linear-gradient(${A}, ${A}) 8px 8px / 48px 10px no-repeat;
  border: 1px solid var(--mk-line, #DCE0EA); box-shadow: 0 6px 12px rgb(0 0 0 / .15); --mk-d3-layers-z: 36px;
}
@keyframes mk-d3-layers {
  0%, 20%, 100% { transform: translateZ(0); }
  50%, 80% { transform: translateZ(var(--mk-d3-layers-z, 0px)); }
}` },
{ id: "d3-door", cat: "3D", name: "문 열림", use: "입장·체크인 화면", meta: "3.6s · rotateY -75°",
  html: `<div class="mk-d3-door"><i></i></div>`,
  css: `.mk-d3-door {
  position: relative; width: 70px; height: 100px; perspective: 300px; border-radius: 4px 4px 0 0;
  border: 4px solid var(--mk-ink, #1B1E26); border-bottom: 0;
  background: linear-gradient(var(--mk-warn, #D99A00), color-mix(in srgb, var(--mk-warn, #D99A00) 55%, #fff));
}
.mk-d3-door i { position: absolute; inset: 0; background: ${A}; transform-origin: left; animation: mk-d3-door 3.6s cubic-bezier(.6, 0, .4, 1) infinite; }
.mk-d3-door i::after { content: ""; position: absolute; right: 8px; top: 50%; width: 7px; height: 7px; border-radius: 50%; background: var(--mk-warn, #D99A00); }
@keyframes mk-d3-door { 0%, 20%, 100% { transform: none; } 50%, 80% { transform: rotateY(-75deg); } }` },
{ id: "d3-sphere", cat: "3D", name: "고리 구 회전", use: "글로벌·네트워크 표현", meta: "8s · 고리 6개 + 적도",
  html: `<div class="mk-d3-sphere"><div>${R(7, "<i></i>")}</div></div>`,
  css: `.mk-d3-sphere { width: 90px; height: 90px; perspective: 400px; }
.mk-d3-sphere > div { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; animation: mk-d3-sphere 8s linear infinite; }
.mk-d3-sphere i { position: absolute; inset: 0; border-radius: 50%; border: 2px solid color-mix(in srgb, ${A} 70%, transparent); }
${N(6, k => `.mk-d3-sphere i:nth-child(${k + 1}) { transform: rotateY(${k * 30}deg); }`)}
.mk-d3-sphere i:nth-child(7) { transform: rotateX(90deg); border-color: var(--mk-warn, #D99A00); }
@keyframes mk-d3-sphere { from { transform: rotateX(-20deg) rotateY(0); } to { transform: rotateX(-20deg) rotateY(360deg); } }` },
{ id: "d3-prism", cat: "3D", name: "삼각기둥 회전", use: "단계·키워드 3개 순환", meta: "6s · 120°씩 멈춤 회전",
  html: `<div class="mk-d3-prism"><div><i>기획</i><i>개발</i><i>배포</i></div></div>`,
  css: `.mk-d3-prism { width: 60px; height: 70px; perspective: 400px; }
.mk-d3-prism > div { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; animation: mk-d3-prism 6s cubic-bezier(.6, 0, .4, 1) infinite; }
.mk-d3-prism i {
  position: absolute; inset: 0; display: grid; place-items: center; backface-visibility: hidden;
  font: 800 13px/1 system-ui, sans-serif; font-style: normal; color: #fff;
}
${N(3, k => `.mk-d3-prism i:nth-child(${k + 1}) { transform: rotateY(${k * 120}deg) translateZ(17.3px); background: ${["var(--mk-accent, #2F5BFF)", "var(--mk-success, #1F9D55)", "var(--mk-danger, #E5484D)"][k]}; }`)}
@keyframes mk-d3-prism {
  0%, 25% { transform: rotateY(0); }
  33%, 58% { transform: rotateY(-120deg); }
  66%, 91% { transform: rotateY(-240deg); }
  100% { transform: rotateY(-360deg); }
}` },
);
