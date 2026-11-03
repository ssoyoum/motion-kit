// 분류: 퇴장 10 · 흔들기 9 · 스크롤 8 · 호버 장식 10
// 별이 많은 모션 저장소의 '유형'을 참고해, 이 키트에 비어 있던 분류를 새로 채웠다. 코드는 모두 새로 짰다.
//   퇴장: animate.css(별 8.3만)·magic.css(8.6천)의 나가기 계열
//   흔들기: CSShake(4.9천)의 흔들기 종류
//   스크롤: AOS(2.8만)의 스크롤 등장 유형을 JS 없이 CSS scroll-driven animation 으로
//   호버 장식: Hover.css(2.9만)의 테두리·그림자·말풍선·접힘 계열
(() => {
const K = "var(--mk-ink, #1B1E26)", S = "var(--mk-ink-soft, #8A90A0)", SURF = "var(--mk-surface, #fff)", LINE = "var(--mk-line, #DCE0EA)";
const rnd = seed => () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
const f1 = v => +v.toFixed(1);

// ── 퇴장: 같은 카드가 나갔다가 조용히 돌아오며 반복한다. 실제로 쓸 때는 0~exit 구간만 쓰면 된다.
const exBox = id => `.mk-${id} { width: 140px; padding: 12px 14px; border-radius: 12px; background: ${A}; color: var(--mk-on-accent, #fff); font: 700 13px system-ui, sans-serif; text-align: center; animation: mk-${id} 3s cubic-bezier(.5, 0, .75, 0) infinite; }`;
const back = "80% { transform: none; opacity: 0; } 100% { transform: none; opacity: 1; }";
const ex = (id, name, use, meta, text, frames, extra = "") => ({
  id, cat: "퇴장", name, use, meta, html: `<div class="mk-${id}">${text}</div>`,
  css: `${exBox(id)}${extra}\n@keyframes mk-${id} { 0%, 20% { transform: none; opacity: 1; } ${frames} ${back} }`,
});

// ── 흔들기: 무작위 프레임을 미리 계산해 keyframes 로 굳힌다.
const jitter = (seed, n, f) => { const r = rnd(seed); return Array.from({ length: n + 1 }, (_, i) => `${f1(i * 100 / n)}% { transform: ${i === 0 || i === n ? "none" : f(r)}; }`).join(" "); };
const pm = (r, a) => f1((r() * 2 - 1) * a);
const shBox = (id, extra = "") => `.mk-${id} { display: grid; place-items: center; width: 56px; height: 56px; border-radius: 14px; background: ${A}; color: var(--mk-on-accent, #fff); font: 800 22px system-ui, sans-serif;${extra} }`;
const sh = (id, name, use, meta, text, dur, frames, extra = "") => ({
  id, cat: "흔들기", name, use, meta, html: `<div class="mk-${id}">${text}</div>`,
  css: `${shBox(id, ` animation: mk-${id} ${dur} linear infinite;${extra}`)}\n@keyframes mk-${id} { ${frames} }`,
});

// ── 스크롤: 카드 안 작은 스크롤 상자. animation-timeline 을 모르는 브라우저는 움직임 없이 그대로 보인다.
const scBox = id => `.mk-${id} { width: 200px; height: 130px; overflow: hidden auto; padding: 0 10px; border-radius: 12px; background: ${SURF}; border: 1px solid ${LINE}; scrollbar-width: thin; }
.mk-${id} > p { height: 104px; margin: 0; display: grid; place-items: center; font: 600 11px system-ui, sans-serif; color: ${S}; }`;
const scItems = (n, cls = "") => Array.from({ length: n }, (_, k) => `<i${cls ? ` class="${cls}"` : ""}>${["새 소식", "이번 주 특가", "추천 상품", "후기 모음", "이벤트"][k % 5]}</i>`).join("");
const scItemCss = id => `.mk-${id} i { display: block; margin: 0 0 10px; padding: 12px; border-radius: 8px; background: ${A}; color: var(--mk-on-accent, #fff); font: 700 12px system-ui, sans-serif; font-style: normal; }`;
const HINT = "<p>↓ 안에서 스크롤해 보세요</p>";

// ── 호버 장식: 공통 버튼 모양
const hvBtn = id => `.mk-${id} { position: relative; padding: 10px 20px; border: 0; border-radius: 8px; cursor: pointer; background: ${SURF}; color: ${K}; font: 700 14px system-ui, sans-serif; box-shadow: inset 0 0 0 1px ${LINE}; }`;
const on = id => `.mk-${id}:hover, .mk-${id}:focus-visible`;
const hv = (id, name, use, meta, css, text = "메뉴 보기") => ({
  id, cat: "호버 장식", name, use, meta: `${meta} · 마우스를 올려 보세요`,
  html: `<button class="mk-${id}" type="button">${text}</button>`, css: `${hvBtn(id)}\n${css}`,
});

M.push(
// ── 퇴장
ex("ex-hinge", "경첩 빠져 떨어지기", "오래된 공지 내리기·장난스러운 삭제", "3s · 왼쪽 위 축으로 흔들리다 낙하", "지난 공지",
  "30% { transform: rotate(80deg); opacity: 1; } 38% { transform: rotate(62deg); } 46% { transform: rotate(78deg); } 54% { transform: rotate(70deg); opacity: 1; } 70% { transform: translateY(160px) rotate(80deg); opacity: 0; }",
  "\n.mk-ex-hinge { transform-origin: 0 0; }"),
ex("ex-back-down", "물러나며 내려가기", "모달·시트 닫기", "3s · scale .7 → 아래로 빠짐", "창 닫기",
  "32% { transform: scale(.7); opacity: .8; } 60% { transform: translateY(140px) scale(.7); opacity: 0; }"),
ex("ex-bounce-out", "튀었다 사라지기", "토스트·배지 없애기", "3s · 0.9 → 1.1 → 0.3", "완료!",
  "28% { transform: scale(.9); opacity: 1; } 38% { transform: scale(1.1); opacity: 1; } 55% { transform: scale(.3); opacity: 0; }"),
ex("ex-zoom-up", "작아지며 위로", "알림 확인 후 치우기", "3s · 살짝 내려앉았다 위로 빨려 들어감", "읽음 처리",
  "34% { transform: translateY(10px) scale(.6); opacity: 1; } 58% { transform: translateY(-120px) scale(.1); opacity: 0; }"),
ex("ex-lightspeed", "빛 속도로 나가기", "다음 단계로 넘기기", "3s · skewX 30° + 오른쪽으로", "다음 →",
  "50% { transform: translateX(200px) skewX(30deg); opacity: 0; }"),
ex("ex-roll", "굴러 나가기", "카드 버리기·건너뛰기", "3s · 120° 구르며 오른쪽으로", "건너뛰기",
  "55% { transform: translateX(170px) rotate(120deg); opacity: 0; }"),
ex("ex-flip-x", "가로축 뒤집혀 사라지기", "쿠폰 사용 처리", "3s · perspective + rotateX 90°", "쿠폰 사용",
  "30% { transform: perspective(300px) rotateX(-20deg); opacity: 1; } 52% { transform: perspective(300px) rotateX(90deg); opacity: 0; }"),
ex("ex-puff", "연기처럼 흩어지기", "임시 저장 버리기", "3s · scale 2 + blur 6px", "임시 저장",
  "50% { transform: scale(2); opacity: 0; filter: blur(6px); } 80% { filter: none; }"),
ex("ex-tv", "TV 끄기", "화면·영상 종료", "3s · 가로선으로 눌렸다 점으로", "방송 종료",
  "32% { transform: scale(1, .03); opacity: 1; } 44% { transform: scale(0, .03); opacity: 1; } 46% { transform: scale(0); opacity: 0; }"),
{ id: "ex-swipe", cat: "퇴장", name: "밀어서 지우기", use: "알림·메일 목록 삭제", meta: "3.4s · 밀려나고 자리까지 접힘",
  html: `<div class="mk-ex-swipe"><div><span>삭제</span><p>새 알림 3건</p></div><div><p>배송 출발</p></div></div>`,
  css: `.mk-ex-swipe { display: grid; width: 180px; font: 700 13px system-ui, sans-serif; }
.mk-ex-swipe > div { position: relative; overflow: hidden; border-radius: 10px; }
.mk-ex-swipe > div:first-child { background: var(--mk-danger, #E5484D); animation: mk-ex-swipe-h 3.4s cubic-bezier(.4, 0, .2, 1) infinite; }
.mk-ex-swipe > div:last-child { margin-top: 8px; animation: mk-ex-swipe-m 3.4s cubic-bezier(.4, 0, .2, 1) infinite; }
.mk-ex-swipe span { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); color: #fff; }
.mk-ex-swipe p { position: relative; margin: 0; padding: 14px; background: ${SURF}; color: ${K}; border: 1px solid ${LINE}; border-radius: 10px; }
.mk-ex-swipe > div:first-child p { animation: mk-ex-swipe 3.4s cubic-bezier(.5, 0, .2, 1) infinite; }
@keyframes mk-ex-swipe { 0%, 20% { transform: none; } 32% { transform: translateX(-40px); } 45%, 100% { transform: translateX(-110%); } }
@keyframes mk-ex-swipe-h { 0%, 48% { height: 47px; opacity: 1; } 62%, 88% { height: 0; opacity: 1; } 89% { height: 0; opacity: 0; } 100% { height: 47px; opacity: 0; } }
@keyframes mk-ex-swipe-m { 0%, 48% { margin-top: 8px; } 62%, 88% { margin-top: 0; } 100% { margin-top: 8px; } }` },

// ── 흔들기
sh("sh-basic", "기본 흔들기", "틀린 입력·장난스러운 강조", "0.6s · 무작위 ±3px · ±3°", "!", ".6s",
  jitter(3, 10, r => `translate(${pm(r, 3)}px, ${pm(r, 3)}px) rotate(${pm(r, 3)}deg)`)),
sh("sh-soft", "살짝 떨림", "추워요·긴장 표현", "0.4s · 무작위 ±1px", "❄", ".4s",
  jitter(5, 8, r => `translate(${pm(r, 1)}px, ${pm(r, 1)}px)`)),
sh("sh-hard", "세게 흔들기", "오류·경고 강조", "0.4s · 무작위 ±8px · ±8°", "✕", ".4s",
  jitter(7, 10, r => `translate(${pm(r, 8)}px, ${pm(r, 8)}px) rotate(${pm(r, 8)}deg)`), " background: var(--mk-danger, #E5484D);"),
sh("sh-h", "가로 떨림", "비밀번호 틀림·거절", "0.5s · translateX ±6px", "←→", ".5s",
  jitter(9, 10, r => `translateX(${pm(r, 6)}px)`)),
sh("sh-v", "세로 떨림", "점프 유도·놀람", "0.5s · translateY ±6px", "↕", ".5s",
  jitter(11, 10, r => `translateY(${pm(r, 6)}px)`)),
sh("sh-rotate", "회전 떨림", "설정·톱니 강조", "0.5s · rotate ±10°", "⚙", ".5s",
  jitter(13, 10, r => `rotate(${pm(r, 10)}deg)`)),
sh("sh-buzz", "휴대폰 진동", "전화·알림 수신", "1.6s · 0.4s 떨고 쉬기 반복", "☎", "1.6s",
  Array.from({ length: 9 }, (_, i) => `${f1(i * 3)}% { transform: ${i % 2 ? `translateX(${i % 4 === 1 ? 3 : -3}px) rotate(${i % 4 === 1 ? 4 : -4}deg)` : "none"}; }`).join(" ") + " 25%, 100% { transform: none; }"),
sh("sh-crazy", "정신없이 흔들기", "축제·이벤트 이모지", "0.8s · 위치·회전·크기·투명도 무작위", "🎉", ".8s",
  jitter(17, 12, r => `translate(${pm(r, 10)}px, ${pm(r, 10)}px) rotate(${pm(r, 25)}deg) scale(${f1(1 + pm(r, .2))})`)),
{ id: "sh-hover", cat: "흔들기", name: "올리면 흔들기", use: "삭제·나가기 버튼 경고", meta: "0.3s 반복 · 마우스를 올려 보세요",
  html: `<button class="mk-sh-hover" type="button">탈퇴하기</button>`,
  css: `.mk-sh-hover { padding: 10px 20px; border: 0; border-radius: 10px; cursor: pointer; background: var(--mk-danger, #E5484D); color: #fff; font: 700 14px system-ui, sans-serif; }
.mk-sh-hover:hover, .mk-sh-hover:focus-visible { animation: mk-sh-hover .3s linear infinite; }
@keyframes mk-sh-hover { ${jitter(19, 6, r => `translate(${pm(r, 2)}px, ${pm(r, 2)}px) rotate(${pm(r, 2)}deg)`)} }` },

// ── 스크롤 (CSS scroll-driven animation)
{ id: "sc-fade-up", cat: "스크롤", name: "아래서 떠오르기", use: "목록·카드 스크롤 등장 (JS 없이)", meta: "view() · entry 0→100% · 안에서 스크롤해 보세요",
  html: `<div class="mk-sc-fade-up">${HINT}${scItems(5)}</div>`,
  css: `${scBox("sc-fade-up")}\n${scItemCss("sc-fade-up")}
@supports (animation-timeline: view()) {
  .mk-sc-fade-up i { animation: mk-sc-fade-up linear both; animation-timeline: view(); animation-range: entry 0% entry 100%; }
}
@keyframes mk-sc-fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: none; } }` },
{ id: "sc-zoom", cat: "스크롤", name: "확대되며 등장", use: "상품 사진·갤러리", meta: "view() · scale .6→1 · 안에서 스크롤해 보세요",
  html: `<div class="mk-sc-zoom">${HINT}${scItems(5)}</div>`,
  css: `${scBox("sc-zoom")}\n${scItemCss("sc-zoom")}
@supports (animation-timeline: view()) {
  .mk-sc-zoom i { animation: mk-sc-zoom linear both; animation-timeline: view(); animation-range: entry 0% cover 40%; }
}
@keyframes mk-sc-zoom { from { opacity: 0; transform: scale(.6); } to { opacity: 1; transform: none; } }` },
{ id: "sc-flip", cat: "스크롤", name: "뒤집히며 등장", use: "단계 안내·특징 카드", meta: "view() · rotateX 70°→0 · 안에서 스크롤해 보세요",
  html: `<div class="mk-sc-flip">${HINT}${scItems(5)}</div>`,
  css: `${scBox("sc-flip")}\n${scItemCss("sc-flip")}
@supports (animation-timeline: view()) {
  .mk-sc-flip i { transform-origin: 50% 0; animation: mk-sc-flip linear both; animation-timeline: view(); animation-range: entry 0% cover 45%; }
}
@keyframes mk-sc-flip { from { opacity: 0; transform: perspective(400px) rotateX(70deg); } to { opacity: 1; transform: perspective(400px); } }` },
{ id: "sc-slide", cat: "스크롤", name: "양옆에서 번갈아", use: "연혁·타임라인", meta: "view() · 홀짝 좌우 ±60px · 안에서 스크롤해 보세요",
  html: `<div class="mk-sc-slide">${HINT}${scItems(6)}</div>`,
  css: `${scBox("sc-slide")}\n${scItemCss("sc-slide")}
.mk-sc-slide i:nth-of-type(even) { margin-left: 30px; background: ${K}; color: var(--mk-on-ink, #fff); }
.mk-sc-slide i:nth-of-type(odd) { margin-right: 30px; --x: -60px; }
@supports (animation-timeline: view()) {
  .mk-sc-slide i { animation: mk-sc-slide linear both; animation-timeline: view(); animation-range: entry 0% cover 40%; }
}
@keyframes mk-sc-slide { from { opacity: 0; transform: translateX(var(--x, 60px)); } to { opacity: 1; transform: none; } }` },
{ id: "sc-progress", cat: "스크롤", name: "읽기 진행 바", use: "블로그·약관 읽은 만큼 표시 (JS 없이)", meta: "scroll() · scaleX 0→1 · 안에서 스크롤해 보세요",
  html: `<div class="mk-sc-progress"><b></b><p>↓ 안에서 스크롤해 보세요</p>${"<span></span>".repeat(9)}</div>`,
  css: `.mk-sc-progress { width: 200px; height: 130px; overflow-y: auto; padding: 0 12px 12px; border-radius: 12px; background: ${SURF}; border: 1px solid ${LINE}; scrollbar-width: thin; }
.mk-sc-progress b { position: sticky; top: 0; display: block; height: 4px; margin: 0 -12px; background: ${A}; transform-origin: 0 50%; }
.mk-sc-progress p { margin: 12px 0; font: 600 11px system-ui, sans-serif; color: ${S}; }
.mk-sc-progress span { display: block; height: 8px; margin: 0 0 10px; border-radius: 4px; background: var(--mk-skel-a, #E0E4EC); }
.mk-sc-progress span:nth-of-type(3n) { width: 70%; }
@supports (animation-timeline: scroll()) {
  .mk-sc-progress b { animation: mk-sc-progress linear both; animation-timeline: scroll(nearest); }
}
@keyframes mk-sc-progress { from { transform: scaleX(0); } to { transform: none; } }` },
{ id: "sc-parallax", cat: "스크롤", name: "패럴랙스 배경", use: "히어로·브랜드 소개 섹션", meta: "view() · 배경만 -40px→40px · 안에서 스크롤해 보세요",
  html: `<div class="mk-sc-parallax">${HINT}<div><i></i><b>봄 컬렉션</b></div><div><i></i><b>여름 컬렉션</b></div><p></p></div>`,
  css: `.mk-sc-parallax { width: 200px; height: 130px; overflow: hidden auto; padding: 0 10px; border-radius: 12px; background: ${SURF}; border: 1px solid ${LINE}; scrollbar-width: thin; }
.mk-sc-parallax > p { height: 104px; margin: 0; display: grid; place-items: center; font: 600 11px system-ui, sans-serif; color: ${S}; }
.mk-sc-parallax > p:last-child { height: 40px; }
.mk-sc-parallax > div { position: relative; overflow: hidden; display: grid; place-items: center; height: 90px; margin-bottom: 10px; border-radius: 10px; }
.mk-sc-parallax i { position: absolute; inset: -40px 0; background: radial-gradient(circle at 30% 30%, ${A} 0 18%, transparent 19%), radial-gradient(circle at 75% 65%, var(--mk-warn, #D99A00) 0 14%, transparent 15%), color-mix(in srgb, ${A} 25%, ${SURF}); }
.mk-sc-parallax > div + div i { background: radial-gradient(circle at 70% 30%, var(--mk-success, #1F9D55) 0 18%, transparent 19%), radial-gradient(circle at 25% 70%, ${A} 0 12%, transparent 13%), color-mix(in srgb, var(--mk-success, #1F9D55) 25%, ${SURF}); }
.mk-sc-parallax b { position: relative; font: 800 14px system-ui, sans-serif; color: ${K}; }
@supports (animation-timeline: view()) {
  .mk-sc-parallax i { animation: mk-sc-parallax linear both; animation-timeline: view(); }
}
@keyframes mk-sc-parallax { from { transform: translateY(-40px); } to { transform: translateY(40px); } }` },
{ id: "sc-reveal", cat: "스크롤", name: "가림막 걷히기", use: "이미지·배너 공개", meta: "view() · clip-path inset 0 100%→0 · 안에서 스크롤해 보세요",
  html: `<div class="mk-sc-reveal">${HINT}${scItems(4)}</div>`,
  css: `${scBox("sc-reveal")}\n${scItemCss("sc-reveal")}
.mk-sc-reveal i { padding: 22px 12px; }
@supports (animation-timeline: view()) {
  .mk-sc-reveal i { animation: mk-sc-reveal linear both; animation-timeline: view(); animation-range: entry 20% cover 50%; }
}
@keyframes mk-sc-reveal { from { clip-path: inset(0 100% 0 0 round 8px); } to { clip-path: inset(0 0 0 0 round 8px); } }` },
{ id: "sc-header", cat: "스크롤", name: "스크롤하면 줄어드는 헤더", use: "상단 메뉴·검색 바 (JS 없이)", meta: "scroll() · 처음 60px 동안 높이 56→34 · 안에서 스크롤해 보세요",
  html: `<div class="mk-sc-header"><header>MOTION</header><p>↓ 안에서 스크롤해 보세요</p>${"<span></span>".repeat(10)}</div>`,
  css: `.mk-sc-header { width: 200px; height: 130px; overflow-y: auto; border-radius: 12px; background: ${SURF}; border: 1px solid ${LINE}; scrollbar-width: thin; }
.mk-sc-header header { position: sticky; top: 0; display: flex; align-items: center; height: 56px; padding: 0 12px; background: ${K}; color: var(--mk-on-ink, #fff); font: 800 18px system-ui, sans-serif; letter-spacing: .08em; }
.mk-sc-header p { margin: 12px; font: 600 11px system-ui, sans-serif; color: ${S}; }
.mk-sc-header span { display: block; height: 8px; margin: 0 12px 10px; border-radius: 4px; background: var(--mk-skel-a, #E0E4EC); }
@supports (animation-timeline: scroll()) {
  .mk-sc-header header { animation: mk-sc-header linear both; animation-timeline: scroll(nearest); animation-range: 0 60px; }
}
@keyframes mk-sc-header { from { height: 56px; font-size: 18px; } to { height: 34px; font-size: 13px; box-shadow: 0 4px 12px rgb(0 0 0 / .2); } }` },

// ── 호버 장식
hv("hv-trim", "안쪽 테두리", "카테고리·필터 버튼", "0.3s · 안쪽 4px 에 테두리 생김",
  `.mk-hv-trim::before { content: ""; position: absolute; inset: 4px; border: 2px solid ${A}; border-radius: 5px; opacity: 0; transition: opacity .3s; }
${on("hv-trim")} { color: ${A}; }
.mk-hv-trim:hover::before, .mk-hv-trim:focus-visible::before { opacity: 1; }`),
hv("hv-ripple-out", "바깥으로 퍼지는 테두리", "선택 확인·CTA", "1s · 테두리가 밖으로 퍼지며 사라짐",
  `.mk-hv-ripple-out::before { content: ""; position: absolute; inset: 0; border: 2px solid ${A}; border-radius: inherit; opacity: 0; pointer-events: none; }
.mk-hv-ripple-out:hover::before, .mk-hv-ripple-out:focus-visible::before { animation: mk-hv-ripple-out 1s ease-out infinite; }
@keyframes mk-hv-ripple-out { from { inset: 0; opacity: 1; } to { inset: -12px; opacity: 0; } }`),
hv("hv-outline-in", "조여드는 테두리", "포트폴리오·썸네일 링크", "0.3s · 바깥 12px → 딱 맞게",
  `.mk-hv-outline-in::before { content: ""; position: absolute; inset: -12px; border: 2px solid ${A}; border-radius: 14px; opacity: 0; pointer-events: none; transition: inset .3s, opacity .3s, border-radius .3s; }
.mk-hv-outline-in:hover::before, .mk-hv-outline-in:focus-visible::before { inset: -4px; opacity: 1; border-radius: 11px; }`),
hv("hv-round", "모서리 둥글게", "태그·칩 버튼", "0.3s · border-radius 0 → 끝까지",
  `.mk-hv-round { border-radius: 0; transition: border-radius .3s, background .3s, color .3s; }
${on("hv-round")} { border-radius: 999px; background: ${A}; color: var(--mk-on-accent, #fff); }`),
hv("hv-overline", "윗줄 지나가기", "상단 내비 메뉴", "0.4s · 왼쪽에서 들어와 오른쪽으로 빠짐",
  `.mk-hv-overline { overflow: hidden; }
.mk-hv-overline::before { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 3px; background: ${A}; transform: scaleX(0); transform-origin: 100% 50%; transition: transform .4s cubic-bezier(.6, 0, .2, 1); }
.mk-hv-overline:hover::before, .mk-hv-overline:focus-visible::before { transform: none; transform-origin: 0 50%; }`),
hv("hv-float-shadow", "떠오르며 그림자", "카드형 버튼·앱 아이콘", "0.3s · -6px + 바닥 그림자 타원",
  `.mk-hv-float-shadow { transition: transform .3s; }
.mk-hv-float-shadow::after { content: ""; position: absolute; left: 10%; right: 10%; bottom: -10px; height: 8px; border-radius: 50%; background: radial-gradient(closest-side, rgb(0 0 0 / .35), transparent); opacity: 0; transition: opacity .3s, transform .3s; }
${on("hv-float-shadow")} { transform: translateY(-6px); }
.mk-hv-float-shadow:hover::after, .mk-hv-float-shadow:focus-visible::after { opacity: 1; transform: translateY(6px); }`),
hv("hv-bubble", "말풍선 꼬리", "도움말·툴팁 버튼", "0.25s · 아래에 삼각 꼬리가 튀어나옴",
  `.mk-hv-bubble { transition: background .25s, color .25s; }
.mk-hv-bubble::after { content: ""; position: absolute; left: calc(50% - 8px); bottom: 0; border: 8px solid transparent; border-top-color: ${A}; border-bottom: 0; transition: transform .25s cubic-bezier(.34, 1.56, .64, 1); }
${on("hv-bubble")} { background: ${A}; color: var(--mk-on-accent, #fff); }
.mk-hv-bubble:hover::after, .mk-hv-bubble:focus-visible::after { transform: translateY(8px); }`, "도움말"),
hv("hv-curl", "모서리 접힘", "쿠폰·스티커·메모", "0.35s · 오른쪽 위가 종이처럼 접힘",
  `.mk-hv-curl { border-radius: 0; }
.mk-hv-curl::before { content: ""; position: absolute; top: 0; right: 0; width: 0; height: 0; background: linear-gradient(225deg, var(--mk-stage, #ECEEF4) 45%, ${S} 50%, ${LINE} 56%, ${SURF} 80%); box-shadow: -1px 1px 2px rgb(0 0 0 / .2); transition: width .35s, height .35s; }
.mk-hv-curl:hover::before, .mk-hv-curl:focus-visible::before { width: 22px; height: 22px; }`, "쿠폰 받기"),
hv("hv-hang", "매달려 출렁", "장난스러운 메뉴·이벤트", "1.5s · 내려왔다 위아래로 출렁 반복",
  `${on("hv-hang")} { animation: mk-hv-hang .3s ease-out forwards, mk-hv-hang-loop 1.5s .3s ease-in-out infinite alternate; }
@keyframes mk-hv-hang { to { transform: translateY(8px); } }
@keyframes mk-hv-hang-loop { from { transform: translateY(8px); } to { transform: translateY(2px); } }`, "이벤트"),
hv("hv-skew", "앞으로 기울기", "다음 단계·바로가기", "0.25s · skewX -10° + 오른쪽 4px",
  `.mk-hv-skew { transition: transform .25s, background .25s, color .25s; }
${on("hv-skew")} { transform: translateX(4px) skewX(-10deg); background: ${K}; color: var(--mk-on-ink, #fff); }`, "바로가기 →"),
);
})();
