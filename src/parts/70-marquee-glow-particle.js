// 분류: 마키 5 · 글로우 5 · 파티클 5
// 인기 모션 저장소(Animate.css·Hover.css·Magic UI·Aceternity UI 등)에서 자주 쓰이는 유형을 CSS만으로 옮겼다.
(() => {
const S = "var(--mk-ink-soft, #8A90A0)", K = "var(--mk-ink, #1B1E26)", G = "var(--mk-skel-a, #E0E4EC)";
const SF = "var(--mk-surface, #fff)", LN = "var(--mk-line, #DCE0EA)";
const brands = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff"];
const chip = t => `<i>${t}</i>`;
const row = () => brands.map(chip).join("");

M.push(
// ── 마키
{ id: "x-marq", cat: "마키", name: "가로 마키", use: "고객사 로고, 파트너 띠", meta: "8s · linear · ∞ · 양끝 페이드",
  html: `<div class="mk-x-marq"><div>${row()}${row()}</div></div>`,
  css: `.mk-x-marq { width: 240px; overflow: hidden; -webkit-mask: linear-gradient(90deg, transparent, #000 18%, #000 82%, transparent); mask: linear-gradient(90deg, transparent, #000 18%, #000 82%, transparent); }
.mk-x-marq div { display: flex; gap: 10px; width: max-content; animation: mk-x-marq 8s linear infinite; }
.mk-x-marq i { flex: none; width: 44px; height: 32px; display: grid; place-items: center; border-radius: 8px; background: ${G}; color: ${K}; font: 700 13px system-ui, sans-serif; font-style: normal; }
@keyframes mk-x-marq { to { transform: translateX(calc(-50% - 5px)); } }` },
{ id: "x-marq2", cat: "마키", name: "반대 방향 두 줄", use: "후기 월, 로고 월", meta: "9s · 위 ← 아래 → · ∞",
  html: `<div class="mk-x-marq2"><div>${row()}${row()}</div><div class="r">${row()}${row()}</div></div>`,
  css: `.mk-x-marq2 { width: 240px; overflow: hidden; display: grid; gap: 8px; -webkit-mask: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent); mask: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent); }
.mk-x-marq2 div { display: flex; gap: 8px; width: max-content; animation: mk-x-marq2 9s linear infinite; }
.mk-x-marq2 .r { animation-direction: reverse; animation-duration: 11s; }
.mk-x-marq2 i { flex: none; width: 40px; height: 28px; display: grid; place-items: center; border-radius: 14px; border: 1px solid ${LN}; background: ${SF}; color: ${K}; font: 600 12px system-ui, sans-serif; font-style: normal; }
@keyframes mk-x-marq2 { to { transform: translateX(calc(-50% - 4px)); } }` },
{ id: "x-vmarq", cat: "마키", name: "세로 마키", use: "공지 롤링, 사이드 후기", meta: "7s · linear · ∞ · 위아래 페이드",
  html: `<div class="mk-x-vmarq"><div>${["새 기능 출시", "점검 안내", "이벤트 시작", "후기 1,000개"].map(chip).join("")}${["새 기능 출시", "점검 안내", "이벤트 시작", "후기 1,000개"].map(chip).join("")}</div></div>`,
  css: `.mk-x-vmarq { width: 150px; height: 110px; overflow: hidden; -webkit-mask: linear-gradient(transparent, #000 20%, #000 80%, transparent); mask: linear-gradient(transparent, #000 20%, #000 80%, transparent); }
.mk-x-vmarq div { display: grid; gap: 8px; animation: mk-x-vmarq 7s linear infinite; }
.mk-x-vmarq i { display: block; padding: 8px 12px; border-radius: 8px; background: ${G}; color: ${K}; font: 600 12px system-ui, sans-serif; font-style: normal; }
@keyframes mk-x-vmarq { to { transform: translateY(calc(-50% - 4px)); } }` },
{ id: "x-ticker", cat: "마키", name: "속보 티커", use: "상단 공지 띠, 시세 표시줄", meta: "10s · linear · ∞ · 라벨 고정",
  html: `<div class="mk-x-ticker"><b>속보</b><div><span>신규 모션 15종 추가 · 마키 · 글로우 · 파티클 · 갤러리에서 확인하세요 · </span><span>신규 모션 15종 추가 · 마키 · 글로우 · 파티클 · 갤러리에서 확인하세요 · </span></div></div>`,
  css: `.mk-x-ticker { display: flex; align-items: center; width: 250px; border-radius: 6px; overflow: hidden; background: ${K}; color: var(--mk-on-ink, #fff); font: 600 12px system-ui, sans-serif; }
.mk-x-ticker b { flex: none; z-index: 1; padding: 8px 10px; background: var(--mk-danger, #E5484D); color: #fff; }
.mk-x-ticker div { display: flex; width: max-content; animation: mk-x-ticker 10s linear infinite; }
.mk-x-ticker span { white-space: nowrap; padding-left: 10px; }
@keyframes mk-x-ticker { to { transform: translateX(-50%); } }` },
{ id: "x-marqhov", cat: "마키", name: "올리면 멈추는 마키", use: "클릭할 수 있는 카드 띠", meta: "마우스를 올려 보세요 · 8s · paused",
  html: `<div class="mk-x-marqhov"><div>${row()}${row()}</div></div>`,
  css: `.mk-x-marqhov { width: 240px; overflow: hidden; padding: 6px 0; -webkit-mask: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent); mask: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent); }
.mk-x-marqhov div { display: flex; gap: 10px; width: max-content; animation: mk-x-marqhov 8s linear infinite; }
.mk-x-marqhov:hover div { animation-play-state: paused; }
.mk-x-marqhov i { flex: none; width: 44px; height: 44px; display: grid; place-items: center; border-radius: 10px; background: ${G}; color: ${K}; font: 700 13px system-ui, sans-serif; font-style: normal; transition: transform .2s, background .2s; }
.mk-x-marqhov i:hover { transform: translateY(-4px) scale(1.08); background: var(--mk-accent, #2F5BFF); color: var(--mk-on-accent, #fff); }
@keyframes mk-x-marqhov { to { transform: translateX(calc(-50% - 5px)); } }` },

// ── 글로우
{ id: "x-beam", cat: "글로우", name: "도는 테두리 빛", use: "추천 요금제, 강조 카드", meta: "3s · linear · ∞ · conic-gradient",
  html: `<div class="mk-x-beam"><span>Pro 요금제</span></div>`,
  css: `@property --mk-x-beam-a { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
.mk-x-beam { padding: 2px; border-radius: 14px; background: conic-gradient(from var(--mk-x-beam-a), transparent 0 70%, var(--mk-accent, #2F5BFF) 90%, transparent); animation: mk-x-beam 3s linear infinite; }
.mk-x-beam span { display: grid; place-items: center; width: 150px; height: 80px; border-radius: 12px; background: ${SF}; color: ${K}; font: 700 14px system-ui, sans-serif; }
@keyframes mk-x-beam { to { --mk-x-beam-a: 360deg; } }` },
{ id: "x-shimmer", cat: "글로우", name: "시머 버튼", use: "주요 행동 버튼, 프로모션", meta: "2.4s · ease · ∞ · 빛줄기 지나가기",
  html: `<button class="mk-x-shimmer" type="button">지금 시작하기</button>`,
  css: `.mk-x-shimmer { position: relative; overflow: hidden; padding: 12px 22px; border: 0; border-radius: 10px; background: ${K}; color: var(--mk-on-ink, #fff); font: 700 14px system-ui, sans-serif; cursor: pointer; }
.mk-x-shimmer::after { content: ""; position: absolute; top: 0; bottom: 0; left: -60%; width: 40%; background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .45), transparent); transform: skewX(-20deg); animation: mk-x-shimmer 2.4s ease-in-out infinite; }
@keyframes mk-x-shimmer { 0% { left: -60%; } 60%, 100% { left: 130%; } }` },
{ id: "x-neon", cat: "글로우", name: "네온 숨쉬기", use: "다크 화면 강조 문구, 라이브 표시", meta: "2s · ease-in-out · alternate",
  html: `<div class="mk-x-neon">LIVE</div>`,
  css: `.mk-x-neon { padding: 10px 24px; border: 2px solid ${A}; border-radius: 10px; color: ${A}; font: 800 20px system-ui, sans-serif; letter-spacing: .12em; animation: mk-x-neon 2s ease-in-out infinite alternate; }
@keyframes mk-x-neon { from { box-shadow: 0 0 4px ${A}, inset 0 0 4px color-mix(in srgb, ${A} 40%, transparent); text-shadow: 0 0 2px ${A}; } to { box-shadow: 0 0 18px ${A}, 0 0 36px color-mix(in srgb, ${A} 60%, transparent), inset 0 0 12px color-mix(in srgb, ${A} 50%, transparent); text-shadow: 0 0 10px ${A}; } }` },
{ id: "x-aurora", cat: "글로우", name: "오로라 글자", use: "히어로 제목, 로고 문구", meta: "6s · linear · ∞ · 그라데이션 흐름",
  html: `<div class="mk-x-aurora">Aurora</div>`,
  css: `.mk-x-aurora { font: 800 40px system-ui, sans-serif; background: linear-gradient(100deg, var(--mk-accent, #2F5BFF), #9B5BFF, #19C3A6, var(--mk-accent, #2F5BFF)); background-size: 300% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: mk-x-aurora 6s linear infinite; }
@keyframes mk-x-aurora { to { background-position: 300% 0; } }` },
{ id: "x-spot", cat: "글로우", name: "스포트라이트 카드", use: "기능 소개 카드, 호버 강조", meta: "마우스를 올려 보세요 · .5s · 빛 번짐",
  html: `<div class="mk-x-spot"><b>빠른 속도</b><span>올려 보세요</span></div>`,
  css: `.mk-x-spot { position: relative; overflow: hidden; width: 170px; padding: 18px; border: 1px solid ${LN}; border-radius: 14px; background: ${SF}; color: ${K}; font: 13px system-ui, sans-serif; display: grid; gap: 6px; }
.mk-x-spot::before { content: ""; position: absolute; inset: -40%; background: radial-gradient(circle at 20% 0%, color-mix(in srgb, var(--mk-accent, #2F5BFF) 40%, transparent), transparent 45%); opacity: 0; transform: translate(-20%, -20%); transition: opacity .5s, transform .5s; }
.mk-x-spot:hover::before { opacity: 1; transform: translate(10%, 10%); }
.mk-x-spot:hover { border-color: var(--mk-accent, #2F5BFF); }
.mk-x-spot b, .mk-x-spot span { position: relative; }
.mk-x-spot span { color: ${S}; }` },

// ── 파티클
{ id: "x-meteor", cat: "파티클", name: "유성우", use: "히어로 배경, 404 화면", meta: "3~5s · linear · ∞ · 각기 다른 지연",
  html: `<div class="mk-x-meteor">${N(7, k => `<i style="left:${10 + k * 13}%;--d:${(k * 0.7 % 3).toFixed(1)}s;--t:${3 + (k % 3)}s"></i>`)}</div>`,
  css: `.mk-x-meteor { position: relative; overflow: hidden; width: 200px; height: 120px; border-radius: 12px; background: ${K}; }
.mk-x-meteor i { position: absolute; top: -10px; width: 2px; height: 2px; border-radius: 50%; background: #fff; box-shadow: 0 0 6px 1px rgba(255, 255, 255, .6); transform: rotate(215deg); animation: mk-x-meteor var(--t) linear var(--d) infinite; }
.mk-x-meteor i::before { content: ""; position: absolute; top: 50%; left: 2px; width: 40px; height: 1px; transform: translateY(-50%); background: linear-gradient(90deg, #fff, transparent); }
@keyframes mk-x-meteor { 0% { transform: rotate(215deg) translateX(0); opacity: 1; } 70% { opacity: 1; } 100% { transform: rotate(215deg) translateX(-160px); opacity: 0; } }` },
{ id: "x-ripple", cat: "파티클", name: "퍼지는 물결", use: "녹음 중, 위치 표시, 검색 대기", meta: "3s · ease-out · ∞ · 동심원 4겹",
  html: `<div class="mk-x-ripple"><i></i><i></i><i></i><i></i><b></b></div>`,
  css: `.mk-x-ripple { position: relative; width: 120px; height: 120px; display: grid; place-items: center; }
.mk-x-ripple i { position: absolute; inset: 0; border-radius: 50%; border: 1.5px solid var(--mk-accent, #2F5BFF); opacity: 0; animation: mk-x-ripple 3s ease-out infinite; }
.mk-x-ripple i:nth-child(2) { animation-delay: .75s; }
.mk-x-ripple i:nth-child(3) { animation-delay: 1.5s; }
.mk-x-ripple i:nth-child(4) { animation-delay: 2.25s; }
.mk-x-ripple b { width: 16px; height: 16px; border-radius: 50%; background: var(--mk-accent, #2F5BFF); }
@keyframes mk-x-ripple { 0% { transform: scale(.15); opacity: .9; } 100% { transform: scale(1); opacity: 0; } }` },
{ id: "x-sparkle", cat: "파티클", name: "반짝이", use: "새 기능 표시, 별점·보상", meta: "1.8s · ease-in-out · ∞ · 별 4개 엇박",
  html: `<div class="mk-x-sparkle">${[[8, 18, 0], [70, 6, .5], [88, 52, 1], [28, 66, 1.4]].map(([x, y, d]) => `<i style="left:${x}%;top:${y}%;--d:${d}s"></i>`).join("")}<b>NEW</b></div>`,
  css: `.mk-x-sparkle { position: relative; display: grid; place-items: center; width: 120px; height: 80px; }
.mk-x-sparkle b { padding: 6px 14px; border-radius: 999px; background: var(--mk-accent, #2F5BFF); color: var(--mk-on-accent, #fff); font: 800 13px system-ui, sans-serif; }
.mk-x-sparkle i { position: absolute; width: 14px; height: 14px; background: var(--mk-warn, #D99A00); clip-path: polygon(50% 0, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0 50%, 38% 38%); transform: scale(0); animation: mk-x-sparkle 1.8s ease-in-out var(--d) infinite; }
@keyframes mk-x-sparkle { 0%, 100% { transform: scale(0) rotate(0); } 40% { transform: scale(1) rotate(90deg); } 70% { transform: scale(.4) rotate(160deg); } }` },
{ id: "x-orbit", cat: "파티클", name: "도는 아이콘 궤도", use: "연동 서비스 소개, 허브 그림", meta: "10s · linear · ∞ · 안쪽·바깥 반대 방향",
  html: `<div class="mk-x-orbit"><b>●</b><div class="a"><i>A</i><i>B</i><i>C</i></div><div class="b"><i>D</i><i>E</i><i>F</i><i>G</i></div></div>`,
  css: `.mk-x-orbit { position: relative; width: 150px; height: 150px; display: grid; place-items: center; }
.mk-x-orbit b { color: var(--mk-accent, #2F5BFF); font-size: 20px; }
.mk-x-orbit div { position: absolute; border-radius: 50%; border: 1px dashed ${LN}; animation: mk-x-orbit 10s linear infinite; }
.mk-x-orbit .a { inset: 34px; }
.mk-x-orbit .b { inset: 0; animation-direction: reverse; animation-duration: 16s; }
.mk-x-orbit i { position: absolute; width: 22px; height: 22px; margin: -11px 0 0 -11px; display: grid; place-items: center; border-radius: 50%; background: ${SF}; border: 1px solid ${LN}; color: ${K}; font: 700 10px system-ui, sans-serif; font-style: normal; animation: mk-x-orbit 10s linear infinite reverse; }
.mk-x-orbit .b i { animation-direction: normal; animation-duration: 16s; }
.mk-x-orbit .a i:nth-child(1) { top: 0; left: 50%; } .mk-x-orbit .a i:nth-child(2) { top: 75%; left: 93%; } .mk-x-orbit .a i:nth-child(3) { top: 75%; left: 7%; }
.mk-x-orbit .b i:nth-child(1) { top: 0; left: 50%; } .mk-x-orbit .b i:nth-child(2) { top: 50%; left: 100%; } .mk-x-orbit .b i:nth-child(3) { top: 100%; left: 50%; } .mk-x-orbit .b i:nth-child(4) { top: 50%; left: 0; }
@keyframes mk-x-orbit { to { transform: rotate(360deg); } }` },
{ id: "x-snow", cat: "파티클", name: "내리는 눈·비", use: "시즌 배경, 날씨 카드", meta: "4~7s · linear · ∞ · 무작위 지연",
  html: `<div class="mk-x-snow">${N(14, k => `<i style="left:${(k * 37) % 96 + 2}%;--d:-${((k * 53) % 70) / 10}s;--t:${4 + (k % 4)}s;--s:${2 + (k % 3)}px"></i>`)}</div>`,
  css: `.mk-x-snow { position: relative; overflow: hidden; width: 200px; height: 120px; border-radius: 12px; background: ${K}; }
.mk-x-snow i { position: absolute; top: -8px; width: var(--s); height: var(--s); border-radius: 50%; background: #fff; opacity: .85; animation: mk-x-snow var(--t) linear var(--d) infinite; }
@keyframes mk-x-snow { 0% { transform: translate(0, 0); } 50% { transform: translate(8px, 70px); } 100% { transform: translate(-6px, 140px); } }` },
);
})();
