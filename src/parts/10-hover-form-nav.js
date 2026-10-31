// 분류: 버튼·호버 18 · 폼 7 · 내비 6
M.push(
// ── 버튼·호버
{ id: "hb-fill", cat: "버튼·호버", name: "왼쪽부터 채우기", use: "보조 버튼 → 강조", meta: "0.35s · background-size 0→100% · 마우스를 올려 보세요",
  html: `<button class="mk-hb-fill" type="button">장바구니 담기</button>`,
  css: `.mk-hb-fill {
  padding: 10px 20px; border: 2px solid ${A}; border-radius: 10px; cursor: pointer;
  color: ${A}; font: 700 14px system-ui, sans-serif;
  background: linear-gradient(${A}, ${A}) no-repeat 0 0 / 0% 100%;
  transition: background-size .35s cubic-bezier(.6, 0, .2, 1), color .35s;
}
.mk-hb-fill:hover, .mk-hb-fill:focus-visible { background-size: 100% 100%; color: var(--mk-on-accent, #fff); }` },
{ id: "hb-center", cat: "버튼·호버", name: "가운데서 채우기", use: "테두리 버튼", meta: "0.35s · scaleX 0→1 · 마우스를 올려 보세요",
  html: `<button class="mk-hb-center" type="button">더 알아보기</button>`,
  css: `.mk-hb-center {
  position: relative; isolation: isolate; overflow: hidden; padding: 10px 20px; cursor: pointer;
  border: 2px solid var(--mk-ink, #1B1E26); border-radius: 10px; background: transparent;
  color: var(--mk-ink, #1B1E26); font: 700 14px system-ui, sans-serif; transition: color .35s;
}
.mk-hb-center::before {
  content: ""; position: absolute; inset: 0; z-index: -1; background: var(--mk-ink, #1B1E26);
  transform: scaleX(0); transition: transform .35s cubic-bezier(.6, 0, .2, 1);
}
.mk-hb-center:hover, .mk-hb-center:focus-visible { color: var(--mk-on-ink, #fff); }
.mk-hb-center:hover::before, .mk-hb-center:focus-visible::before { transform: scaleX(1); }` },
{ id: "hb-border", cat: "버튼·호버", name: "테두리 그리기", use: "미니멀 버튼", meta: "0.4s · 네 변이 모서리에서 뻗음 · 마우스를 올려 보세요",
  html: `<button class="mk-hb-border" type="button">신청하기</button>`,
  css: `.mk-hb-border {
  padding: 10px 22px; border: 0; border-radius: 0; cursor: pointer;
  color: var(--mk-ink, #1B1E26); font: 700 14px system-ui, sans-serif;
  background:
    linear-gradient(${A}, ${A}) 0 0 / 0 2px no-repeat,
    linear-gradient(${A}, ${A}) 100% 0 / 2px 0 no-repeat,
    linear-gradient(${A}, ${A}) 100% 100% / 0 2px no-repeat,
    linear-gradient(${A}, ${A}) 0 100% / 2px 0 no-repeat;
  box-shadow: inset 0 0 0 1px var(--mk-line, #DCE0EA);
  transition: background-size .4s cubic-bezier(.6, 0, .2, 1), color .4s;
}
.mk-hb-border:hover, .mk-hb-border:focus-visible { background-size: 100% 2px, 2px 100%, 100% 2px, 2px 100%; color: ${A}; }` },
{ id: "hb-lift", cat: "버튼·호버", name: "떠오르는 버튼", use: "주요 행동 버튼", meta: "0.25s · -4px + 그림자 · 마우스를 올려 보세요",
  html: `<button class="mk-hb-lift" type="button">바로 구매</button>`,
  css: `.mk-hb-lift {
  padding: 10px 22px; border: 0; border-radius: 10px; cursor: pointer;
  background: ${A}; color: var(--mk-on-accent, #fff); font: 700 14px system-ui, sans-serif;
  box-shadow: 0 2px 6px color-mix(in srgb, ${A} 30%, transparent);
  transition: transform .25s cubic-bezier(.2, .8, .2, 1), box-shadow .25s;
}
.mk-hb-lift:hover, .mk-hb-lift:focus-visible { transform: translateY(-4px); box-shadow: 0 12px 24px color-mix(in srgb, ${A} 40%, transparent); }` },
{ id: "hb-arrow", cat: "버튼·호버", name: "화살표 등장", use: "다음 단계·더 보기", meta: "0.3s · 화살표 폭 0→1em · 마우스를 올려 보세요",
  html: `<button class="mk-hb-arrow" type="button"><span>다음 단계</span><i>→</i></button>`,
  css: `.mk-hb-arrow {
  display: inline-flex; align-items: center; gap: 0; padding: 10px 20px; border: 0; border-radius: 999px; cursor: pointer;
  background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff); font: 700 14px system-ui, sans-serif;
  transition: gap .3s cubic-bezier(.2, .8, .2, 1);
}
.mk-hb-arrow i {
  display: inline-block; width: 0; overflow: hidden; opacity: 0; font-style: normal;
  transform: translateX(-6px); transition: width .3s cubic-bezier(.2, .8, .2, 1), opacity .3s, transform .3s;
}
.mk-hb-arrow:hover, .mk-hb-arrow:focus-visible { gap: 8px; }
.mk-hb-arrow:hover i, .mk-hb-arrow:focus-visible i { width: 1em; opacity: 1; transform: none; }` },
{ id: "hb-uline", cat: "버튼·호버", name: "가운데서 퍼지는 밑줄", use: "텍스트 링크", meta: "0.3s · scaleX 0→1 · 마우스를 올려 보세요",
  html: `<a class="mk-hb-uline" href="#">이벤트 보러 가기</a>`,
  css: `.mk-hb-uline {
  position: relative; color: var(--mk-ink, #1B1E26); text-decoration: none; font: 600 15px system-ui, sans-serif;
}
.mk-hb-uline::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: -4px; height: 2px; border-radius: 1px;
  background: ${A}; transform: scaleX(0); transition: transform .3s cubic-bezier(.6, 0, .2, 1);
}
.mk-hb-uline:hover::after, .mk-hb-uline:focus-visible::after { transform: scaleX(1); }` },
{ id: "hb-glow", cat: "버튼·호버", name: "빛 번짐", use: "CTA·다크 배경 버튼", meta: "0.3s · 고리 4px + 번짐 24px · 마우스를 올려 보세요",
  html: `<button class="mk-hb-glow" type="button">무료 체험</button>`,
  css: `.mk-hb-glow {
  padding: 10px 22px; border: 0; border-radius: 10px; cursor: pointer;
  background: ${A}; color: var(--mk-on-accent, #fff); font: 700 14px system-ui, sans-serif;
  transition: box-shadow .3s ease-out;
}
.mk-hb-glow:hover, .mk-hb-glow:focus-visible {
  box-shadow: 0 0 0 4px color-mix(in srgb, ${A} 25%, transparent), 0 8px 24px color-mix(in srgb, ${A} 55%, transparent);
}` },
{ id: "hb-shine", cat: "버튼·호버", name: "광택 지나가기", use: "프리미엄·결제 버튼", meta: "0.6s · 빛 띠 왼쪽→오른쪽 · 마우스를 올려 보세요",
  html: `<button class="mk-hb-shine" type="button">멤버십 가입</button>`,
  css: `.mk-hb-shine {
  position: relative; overflow: hidden; padding: 10px 22px; border: 0; border-radius: 10px; cursor: pointer;
  background: ${A}; color: var(--mk-on-accent, #fff); font: 700 14px system-ui, sans-serif;
}
.mk-hb-shine::after {
  content: ""; position: absolute; top: 0; bottom: 0; left: -60%; width: 40%;
  background: linear-gradient(100deg, transparent, rgb(255 255 255 / .5), transparent);
  transform: skewX(-20deg); transition: left .6s ease-out;
}
.mk-hb-shine:hover::after, .mk-hb-shine:focus-visible::after { left: 130%; }` },
{ id: "hb-press", cat: "버튼·호버", name: "눌리는 버튼", use: "게임풍·확인 버튼", meta: "0.08s · 바닥 그림자 4px→0 · 클릭해 보세요",
  html: `<button class="mk-hb-press" type="button">확인</button>`,
  css: `.mk-hb-press {
  padding: 10px 26px; border: 0; border-radius: 10px; cursor: pointer;
  background: ${A}; color: var(--mk-on-accent, #fff); font: 800 14px system-ui, sans-serif;
  box-shadow: 0 4px 0 color-mix(in srgb, ${A} 65%, #000);
  transition: transform .08s, box-shadow .08s;
}
.mk-hb-press:active { transform: translateY(4px); box-shadow: 0 0 0 color-mix(in srgb, ${A} 65%, #000); }` },
{ id: "hb-icon", cat: "버튼·호버", name: "아이콘 회전", use: "추가·설정 버튼", meta: "0.4s · 90° 튕김 회전 · 마우스를 올려 보세요",
  html: `<button class="mk-hb-icon" type="button"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>담기</button>`,
  css: `.mk-hb-icon {
  display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; cursor: pointer;
  border: 1.5px solid var(--mk-ink, #1B1E26); border-radius: 999px; background: transparent;
  color: var(--mk-ink, #1B1E26); font: 700 14px system-ui, sans-serif;
  transition: background .25s, color .25s;
}
.mk-hb-icon svg {
  width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round;
  transition: transform .4s cubic-bezier(.34, 1.56, .64, 1);
}
.mk-hb-icon:hover, .mk-hb-icon:focus-visible { background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff); }
.mk-hb-icon:hover svg, .mk-hb-icon:focus-visible svg { transform: rotate(90deg); }` },
{ id: "hb-grad", cat: "버튼·호버", name: "그라데이션 이동", use: "이벤트·프로모션 버튼", meta: "0.6s · background-position 0→100% · 마우스를 올려 보세요",
  html: `<button class="mk-hb-grad" type="button">쿠폰 받기</button>`,
  css: `.mk-hb-grad {
  padding: 10px 22px; border: 0; border-radius: 10px; cursor: pointer;
  color: #fff; font: 700 14px system-ui, sans-serif;
  background: linear-gradient(90deg, ${A}, var(--mk-danger, #E5484D), var(--mk-warn, #D99A00));
  background-size: 200% 100%; background-position: 0 0;
  transition: background-position .6s ease;
}
.mk-hb-grad:hover, .mk-hb-grad:focus-visible { background-position: 100% 0; }` },
{ id: "hb-roll", cat: "버튼·호버", name: "글자 굴리기", use: "내비·CTA 버튼", meta: "0.35s · 같은 글자가 아래에서 올라옴 · 마우스를 올려 보세요",
  html: `<button class="mk-hb-roll" type="button"><span><b data-t="지금 구매">지금 구매</b></span></button>`,
  css: `.mk-hb-roll {
  padding: 10px 22px; border: 0; border-radius: 10px; cursor: pointer;
  background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff); font: 700 14px system-ui, sans-serif;
}
.mk-hb-roll span { display: block; height: 1.3em; overflow: hidden; line-height: 1.3em; }
.mk-hb-roll b { display: block; position: relative; transition: transform .35s cubic-bezier(.6, 0, .2, 1); }
.mk-hb-roll b::after { content: attr(data-t); position: absolute; left: 0; right: 0; top: 100%; color: ${A}; }
.mk-hb-roll:hover b, .mk-hb-roll:focus-visible b { transform: translateY(-100%); }` },
{ id: "cd-lift", cat: "버튼·호버", name: "떠오르는 상품 카드", use: "상품 목록", meta: "0.25s · -6px + 그림자 · 마우스를 올려 보세요",
  html: `<article class="mk-cd-lift" tabindex="0"><div></div><p>제주 한라봉 3kg<b>29,900원</b></p></article>`,
  css: `.mk-cd-lift {
  width: 150px; overflow: hidden; border-radius: 12px; cursor: pointer;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA);
  transition: transform .25s cubic-bezier(.2, .8, .2, 1), box-shadow .25s;
}
.mk-cd-lift div { height: 64px; background: linear-gradient(135deg, var(--mk-warn, #D99A00), var(--mk-danger, #E5484D)); }
.mk-cd-lift p { margin: 0; padding: 8px 10px; display: grid; font: 600 12px/1.4 system-ui, sans-serif; }
.mk-cd-lift b { color: ${A}; }
.mk-cd-lift:hover, .mk-cd-lift:focus-visible { transform: translateY(-6px); box-shadow: 0 12px 24px rgb(0 0 0 / .15); }` },
{ id: "cd-zoom", cat: "버튼·호버", name: "이미지 확대 카드", use: "갤러리·상품 썸네일", meta: "0.5s · scale 1→1.12 · 마우스를 올려 보세요",
  html: `<article class="mk-cd-zoom" tabindex="0"><div><i></i></div><p>새벽 수확 수박</p></article>`,
  css: `.mk-cd-zoom { width: 150px; overflow: hidden; border-radius: 12px; cursor: pointer; background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA); }
.mk-cd-zoom div { height: 72px; overflow: hidden; }
.mk-cd-zoom i {
  display: block; height: 100%;
  background: radial-gradient(circle at 35% 40%, var(--mk-success, #1F9D55) 0 22%, transparent 23%), linear-gradient(135deg, color-mix(in srgb, var(--mk-success, #1F9D55) 35%, #fff), var(--mk-success, #1F9D55));
  transition: transform .5s cubic-bezier(.2, .8, .2, 1);
}
.mk-cd-zoom p { margin: 0; padding: 8px 10px; font: 600 12px system-ui, sans-serif; }
.mk-cd-zoom:hover i, .mk-cd-zoom:focus-visible i { transform: scale(1.12); }` },
{ id: "cd-overlay", cat: "버튼·호버", name: "오버레이 정보", use: "포트폴리오·이미지 카드", meta: "0.3s · 어두운 막 + 글자 올라옴 · 마우스를 올려 보세요",
  html: `<article class="mk-cd-overlay" tabindex="0"><div><span>자세히 보기</span></div></article>`,
  css: `.mk-cd-overlay {
  position: relative; width: 150px; height: 100px; overflow: hidden; border-radius: 12px; cursor: pointer;
  background: linear-gradient(135deg, ${A}, color-mix(in srgb, ${A} 40%, #000));
}
.mk-cd-overlay div {
  position: absolute; inset: 0; display: grid; place-items: center;
  background: rgb(0 0 0 / .45); opacity: 0; transition: opacity .3s;
}
.mk-cd-overlay span {
  color: #fff; font: 700 13px system-ui, sans-serif; padding: 6px 12px; border: 1.5px solid #fff; border-radius: 999px;
  transform: translateY(8px); transition: transform .3s cubic-bezier(.2, .8, .2, 1);
}
.mk-cd-overlay:hover div, .mk-cd-overlay:focus-visible div { opacity: 1; }
.mk-cd-overlay:hover span, .mk-cd-overlay:focus-visible span { transform: none; }` },
{ id: "cd-slideup", cat: "버튼·호버", name: "하단 정보 올라오기", use: "상품·콘텐츠 카드", meta: "0.35s · 정보 패널 translateY · 마우스를 올려 보세요",
  html: `<article class="mk-cd-slideup" tabindex="0"><div><b>갈치 1kg</b><span>38,000원 · 무료배송</span></div></article>`,
  css: `.mk-cd-slideup {
  position: relative; width: 150px; height: 110px; overflow: hidden; border-radius: 12px; cursor: pointer;
  background: linear-gradient(160deg, color-mix(in srgb, ${A} 35%, #fff), ${A});
}
.mk-cd-slideup div {
  position: absolute; left: 0; right: 0; bottom: 0; display: grid; gap: 2px; padding: 8px 10px;
  background: var(--mk-surface, #fff); color: var(--mk-ink, #1B1E26); font: 600 12px system-ui, sans-serif;
  transform: translateY(calc(100% - 30px)); transition: transform .35s cubic-bezier(.2, .8, .2, 1);
}
.mk-cd-slideup span { color: var(--mk-ink-soft, #8A90A0); font-weight: 500; }
.mk-cd-slideup:hover div, .mk-cd-slideup:focus-visible div { transform: none; }` },
{ id: "cd-glow", cat: "버튼·호버", name: "테두리 빛 카드", use: "선택 가능한 요금제 카드", meta: "0.3s · 테두리 2px + 번짐 · 마우스를 올려 보세요",
  html: `<article class="mk-cd-glow" tabindex="0"><b>정기배송</b><span>월 2회 · 10% 할인</span></article>`,
  css: `.mk-cd-glow {
  width: 160px; display: grid; gap: 4px; padding: 14px; border-radius: 12px; cursor: pointer;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA);
  font: 600 13px system-ui, sans-serif; color: var(--mk-ink, #1B1E26);
  transition: border-color .3s, box-shadow .3s;
}
.mk-cd-glow span { color: var(--mk-ink-soft, #8A90A0); font-weight: 500; font-size: 12px; }
.mk-cd-glow:hover, .mk-cd-glow:focus-visible {
  border-color: ${A};
  box-shadow: 0 0 0 1px ${A}, 0 0 22px color-mix(in srgb, ${A} 40%, transparent);
}` },
{ id: "cd-flip3d", cat: "버튼·호버", name: "호버 3D 뒤집기", use: "상품 정보 앞뒤 카드", meta: "0.6s · rotateY 180° · 마우스를 올려 보세요",
  html: `<div class="mk-cd-flip3d" tabindex="0"><div class="mk-cd-flip3d-in"><p>한라봉</p><p>제주산 · 당도 13Brix</p></div></div>`,
  css: `.mk-cd-flip3d { width: 140px; height: 90px; perspective: 600px; cursor: pointer; }
.mk-cd-flip3d-in {
  position: relative; width: 100%; height: 100%; transform-style: preserve-3d;
  transition: transform .6s cubic-bezier(.4, 0, .2, 1);
}
.mk-cd-flip3d-in p {
  position: absolute; inset: 0; margin: 0; display: grid; place-items: center; padding: 8px; text-align: center;
  border-radius: 12px; backface-visibility: hidden; font: 700 13px system-ui, sans-serif;
  background: ${A}; color: var(--mk-on-accent, #fff);
}
.mk-cd-flip3d-in p:last-child { transform: rotateY(180deg); background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff); font-weight: 600; }
.mk-cd-flip3d:hover .mk-cd-flip3d-in, .mk-cd-flip3d:focus-visible .mk-cd-flip3d-in { transform: rotateY(180deg); }` },
// ── 폼
{ id: "f-float", cat: "폼", name: "떠오르는 라벨", use: "로그인·회원가입 입력칸", meta: "0.2s · 라벨이 위로 작아짐 · 클릭해 보세요",
  html: `<label class="mk-f-float"><input type="email" placeholder=" "><span>이메일</span></label>`,
  css: `.mk-f-float { position: relative; display: block; width: 190px; }
.mk-f-float input {
  width: 100%; box-sizing: border-box; padding: 18px 12px 6px; outline: none;
  border: 1.5px solid var(--mk-line, #DCE0EA); border-radius: 10px; background: transparent;
  color: inherit; font: 14px system-ui, sans-serif; transition: border-color .2s;
}
.mk-f-float span {
  position: absolute; left: 12px; top: 50%; transform: translateY(-50%); pointer-events: none;
  color: var(--mk-ink-soft, #8A90A0); font: 14px system-ui, sans-serif;
  transition: top .2s ease, font-size .2s ease, color .2s;
}
.mk-f-float input:focus { border-color: ${A}; }
.mk-f-float input:focus + span, .mk-f-float input:not(:placeholder-shown) + span { top: 12px; font-size: 11px; color: ${A}; }` },
{ id: "f-focusline", cat: "폼", name: "포커스 밑줄", use: "검색·닉네임 입력", meta: "0.3s · 밑줄 scaleX 0→1 · 클릭해 보세요",
  html: `<label class="mk-f-focusline"><input placeholder="닉네임"><i></i></label>`,
  css: `.mk-f-focusline { position: relative; display: block; width: 180px; }
.mk-f-focusline input {
  width: 100%; box-sizing: border-box; padding: 8px 2px; outline: none; border: 0;
  border-bottom: 1.5px solid var(--mk-line, #DCE0EA); background: transparent; color: inherit; font: 14px system-ui, sans-serif;
}
.mk-f-focusline i {
  position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: ${A};
  transform: scaleX(0); transition: transform .3s cubic-bezier(.6, 0, .2, 1);
}
.mk-f-focusline input:focus + i { transform: scaleX(1); }` },
{ id: "f-strength", cat: "폼", name: "비밀번호 강도", use: "회원가입 비밀번호", meta: "4s · 약함→보통→강함",
  html: `<div class="mk-f-strength"><div class="mk-f-strength-in">••••••••</div><div class="mk-f-strength-bar"><i></i><i></i><i></i><i></i></div><p><span>약함</span><span>보통</span><span>강함</span></p></div>`,
  css: `.mk-f-strength { width: 180px; display: grid; gap: 6px; font: 12px system-ui, sans-serif; }
.mk-f-strength-in { padding: 8px 10px; border: 1.5px solid var(--mk-line, #DCE0EA); border-radius: 8px; letter-spacing: 3px; font-size: 14px; }
.mk-f-strength-bar { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; }
.mk-f-strength-bar i { height: 5px; border-radius: 3px; background: var(--mk-skel-a, #E0E4EC); animation: mk-f-strength-c 4s infinite; }
.mk-f-strength-bar i:nth-child(1) { animation-name: mk-f-strength-a; }
.mk-f-strength-bar i:nth-child(2) { animation-name: mk-f-strength-b; }
.mk-f-strength p { margin: 0; display: grid; font-weight: 600; }
.mk-f-strength span { grid-area: 1 / 1; opacity: 0; }
.mk-f-strength span:nth-child(1) { color: var(--mk-danger, #E5484D); animation: mk-f-strength-t1 4s infinite; }
.mk-f-strength span:nth-child(2) { color: var(--mk-warn, #D99A00); animation: mk-f-strength-t2 4s infinite; }
.mk-f-strength span:nth-child(3) { color: var(--mk-success, #1F9D55); animation: mk-f-strength-t3 4s infinite; }
@keyframes mk-f-strength-a {
  0%, 8%, 100% { background: var(--mk-skel-a, #E0E4EC); }
  12%, 40% { background: var(--mk-danger, #E5484D); }
  45%, 60% { background: var(--mk-warn, #D99A00); }
  65%, 92% { background: var(--mk-success, #1F9D55); }
}
@keyframes mk-f-strength-b {
  0%, 40%, 100% { background: var(--mk-skel-a, #E0E4EC); }
  45%, 60% { background: var(--mk-warn, #D99A00); }
  65%, 92% { background: var(--mk-success, #1F9D55); }
}
@keyframes mk-f-strength-c { 0%, 60%, 100% { background: var(--mk-skel-a, #E0E4EC); } 65%, 92% { background: var(--mk-success, #1F9D55); } }
@keyframes mk-f-strength-t1 { 0%, 8%, 43%, 100% { opacity: 0; } 12%, 40% { opacity: 1; } }
@keyframes mk-f-strength-t2 { 0%, 42%, 63%, 100% { opacity: 0; } 45%, 60% { opacity: 1; } }
@keyframes mk-f-strength-t3 { 0%, 62%, 95%, 100% { opacity: 0; } 65%, 92% { opacity: 1; } }` },
{ id: "f-otp", cat: "폼", name: "인증번호 입력", use: "휴대폰·이메일 인증", meta: "4s · 칸당 0.5s · 입력 칸 강조",
  html: `<div class="mk-f-otp"><span>4</span><span>8</span><span>2</span><span>7</span></div>`,
  css: `.mk-f-otp { display: flex; gap: 8px; }
.mk-f-otp span {
  width: 34px; height: 42px; display: grid; place-items: center; border-radius: 8px;
  border: 1.5px solid var(--mk-line, #DCE0EA); color: transparent; font: 700 18px system-ui, sans-serif;
  animation: mk-f-otp 4s infinite;
}
${N(3, k => `.mk-f-otp span:nth-child(${k + 2}) { animation-delay: ${((k + 1) * 0.5).toFixed(1)}s; }`)}
@keyframes mk-f-otp {
  0% { color: transparent; border-color: var(--mk-line, #DCE0EA); transform: none; }
  4% { border-color: ${A}; }
  10% { color: var(--mk-ink, #1B1E26); border-color: ${A}; transform: scale(1.08); }
  16%, 85% { color: var(--mk-ink, #1B1E26); border-color: var(--mk-line, #DCE0EA); transform: none; }
  100% { color: transparent; border-color: var(--mk-line, #DCE0EA); }
}` },
{ id: "f-dropdown", cat: "폼", name: "드롭다운 펼침", use: "배송지·옵션 선택", meta: "3.5s · scaleY 0.6→1 + 화살표 180°",
  html: `<div class="mk-f-dropdown"><button type="button">배송지 선택 <i>▾</i></button><ul><li>집</li><li>회사</li><li>부모님 댁</li></ul></div>`,
  css: `.mk-f-dropdown { position: relative; width: 170px; font: 13px system-ui, sans-serif; }
.mk-f-dropdown button {
  width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 8px 12px;
  border: 1.5px solid var(--mk-line, #DCE0EA); border-radius: 8px; background: var(--mk-surface, #fff); color: inherit; font: inherit;
}
.mk-f-dropdown i { font-style: normal; animation: mk-f-dropdown-a 3.5s infinite; }
.mk-f-dropdown ul {
  position: absolute; left: 0; right: 0; top: calc(100% + 4px); margin: 0; padding: 4px; list-style: none;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA); border-radius: 8px;
  box-shadow: 0 8px 20px rgb(0 0 0 / .12); transform-origin: top;
  animation: mk-f-dropdown 3.5s cubic-bezier(.2, .8, .2, 1) infinite;
}
.mk-f-dropdown li { padding: 6px 8px; border-radius: 6px; }
.mk-f-dropdown li:nth-child(2) { background: color-mix(in srgb, ${A} 12%, transparent); color: ${A}; font-weight: 600; }
@keyframes mk-f-dropdown { 0%, 15% { opacity: 0; transform: scaleY(.6) translateY(-4px); } 25%, 80% { opacity: 1; transform: none; } 90%, 100% { opacity: 0; transform: scaleY(.6); } }
@keyframes mk-f-dropdown-a { 0%, 15%, 90%, 100% { transform: none; } 25%, 80% { transform: rotate(180deg); } }` },
{ id: "f-stepper", cat: "폼", name: "단계 진행", use: "주문·가입 단계 표시", meta: "4s · 1→2→3 · 연결선 채움",
  html: `<div class="mk-f-stepper"><i>1</i><b></b><i>2</i><b></b><i>3</i></div>`,
  css: `.mk-f-stepper { display: flex; align-items: center; }
.mk-f-stepper i {
  width: 28px; height: 28px; display: grid; place-items: center; border-radius: 50%; font: 700 12px system-ui, sans-serif; font-style: normal;
  border: 2px solid var(--mk-line, #DCE0EA); background: var(--mk-surface, #fff); color: var(--mk-ink-soft, #8A90A0);
}
.mk-f-stepper i:nth-of-type(1) { border-color: ${A}; background: ${A}; color: var(--mk-on-accent, #fff); }
.mk-f-stepper i:nth-of-type(2) { animation: mk-f-stepper-2 4s infinite; }
.mk-f-stepper i:nth-of-type(3) { animation: mk-f-stepper-3 4s infinite; }
.mk-f-stepper b { width: 44px; height: 3px; background: linear-gradient(${A}, ${A}) no-repeat 0 0 / 0% 100%, var(--mk-line, #DCE0EA); }
.mk-f-stepper b:nth-of-type(1) { animation: mk-f-stepper-l1 4s ease-in-out infinite; }
.mk-f-stepper b:nth-of-type(2) { animation: mk-f-stepper-l2 4s ease-in-out infinite; }
@keyframes mk-f-stepper-2 {
  0%, 30%, 100% { border-color: var(--mk-line, #DCE0EA); background: var(--mk-surface, #fff); color: var(--mk-ink-soft, #8A90A0); }
  33%, 95% { border-color: ${A}; background: ${A}; color: var(--mk-on-accent, #fff); }
}
@keyframes mk-f-stepper-3 {
  0%, 65%, 100% { border-color: var(--mk-line, #DCE0EA); background: var(--mk-surface, #fff); color: var(--mk-ink-soft, #8A90A0); }
  68%, 95% { border-color: ${A}; background: ${A}; color: var(--mk-on-accent, #fff); }
}
@keyframes mk-f-stepper-l1 { 0%, 15%, 100% { background-size: 0% 100%, auto; } 30%, 95% { background-size: 100% 100%, auto; } }
@keyframes mk-f-stepper-l2 { 0%, 50%, 100% { background-size: 0% 100%, auto; } 65%, 95% { background-size: 100% 100%, auto; } }` },
{ id: "f-radio", cat: "폼", name: "라디오 선택 이동", use: "배송 방법·옵션 선택", meta: "3s · 선택점이 1s씩 이동",
  html: `<div class="mk-f-radio"><p><i></i>일반 배송</p><p><i></i>새벽 배송</p><p><i></i>매장 픽업</p></div>`,
  css: `.mk-f-radio { display: grid; gap: 8px; font: 13px system-ui, sans-serif; }
.mk-f-radio p { margin: 0; display: flex; align-items: center; gap: 8px; }
.mk-f-radio i {
  position: relative; width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--mk-line, #DCE0EA);
  animation: mk-f-radio-b 3s infinite;
}
.mk-f-radio i::after {
  content: ""; position: absolute; inset: 2px; border-radius: 50%; background: ${A};
  transform: scale(0); animation: mk-f-radio 3s cubic-bezier(.34, 1.56, .64, 1) infinite;
}
.mk-f-radio p:nth-child(2) i, .mk-f-radio p:nth-child(2) i::after { animation-delay: 1s; }
.mk-f-radio p:nth-child(3) i, .mk-f-radio p:nth-child(3) i::after { animation-delay: 2s; }
@keyframes mk-f-radio { 0%, 33.4%, 100% { transform: scale(0); } 5%, 30% { transform: scale(1); } }
@keyframes mk-f-radio-b { 0%, 33.4%, 100% { border-color: var(--mk-line, #DCE0EA); } 5%, 30% { border-color: ${A}; } }` },
// ── 내비
{ id: "n-bottom", cat: "내비", name: "하단 탭 인디케이터", use: "모바일 앱 하단 메뉴", meta: "6s · 50px씩 이동 · 탭당 1.5s",
  html: `<nav class="mk-n-bottom"><span>홈</span><span>검색</span><span>찜</span><span>MY</span><i></i></nav>`,
  css: `.mk-n-bottom {
  position: relative; display: grid; grid-template-columns: repeat(4, 50px); padding: 10px 0 14px; text-align: center;
  border-radius: 14px; background: var(--mk-surface, #fff); box-shadow: 0 4px 16px rgb(0 0 0 / .1);
  font: 600 11px system-ui, sans-serif; color: var(--mk-ink-soft, #8A90A0);
}
.mk-n-bottom span { animation: mk-n-bottom-t 6s infinite; }
${N(3, k => `.mk-n-bottom span:nth-child(${k + 2}) { animation-delay: ${((k + 1) * 1.5).toFixed(1)}s; }`)}
.mk-n-bottom i {
  position: absolute; left: 13px; bottom: 6px; width: 24px; height: 3px; border-radius: 2px; background: ${A};
  animation: mk-n-bottom 6s cubic-bezier(.6, 0, .2, 1) infinite;
}
@keyframes mk-n-bottom {
  0%, 20% { transform: none; }
  25%, 45% { transform: translateX(50px); }
  50%, 70% { transform: translateX(100px); }
  75%, 95% { transform: translateX(150px); }
  100% { transform: none; }
}
@keyframes mk-n-bottom-t { 0%, 22% { color: ${A}; } 25%, 100% { color: var(--mk-ink-soft, #8A90A0); } }` },
{ id: "n-dots", cat: "내비", name: "캐러셀 점", use: "배너 슬라이드", meta: "5s · 슬라이드 1s씩 · 현재 점이 길어짐",
  html: `<div class="mk-n-dots"><div class="mk-n-dots-view"><div class="mk-n-dots-track">${R(5, "<i></i>")}</div></div><p>${R(5, "<b></b>")}</p></div>`,
  css: `.mk-n-dots { display: grid; gap: 8px; justify-items: center; }
.mk-n-dots-view { width: 160px; height: 80px; overflow: hidden; border-radius: 10px; }
.mk-n-dots-track { display: flex; animation: mk-n-dots 5s cubic-bezier(.6, 0, .2, 1) infinite; }
.mk-n-dots-track i { flex: none; width: 160px; height: 80px; }
${N(5, k => `.mk-n-dots-track i:nth-child(${k + 1}) { background: color-mix(in srgb, ${["var(--mk-accent, #2F5BFF)", "var(--mk-success, #1F9D55)", "var(--mk-warn, #D99A00)", "var(--mk-danger, #E5484D)", "var(--mk-ink-soft, #8A90A0)"][k]} 70%, transparent); }`)}
.mk-n-dots p { margin: 0; display: flex; gap: 5px; }
.mk-n-dots b { width: 6px; height: 6px; border-radius: 3px; background: var(--mk-line, #DCE0EA); animation: mk-n-dots-d 5s infinite; }
${N(4, k => `.mk-n-dots b:nth-child(${k + 2}) { animation-delay: ${k + 1}s; }`)}
@keyframes mk-n-dots {
  0%, 16% { transform: none; }
  20%, 36% { transform: translateX(-160px); }
  40%, 56% { transform: translateX(-320px); }
  60%, 76% { transform: translateX(-480px); }
  80%, 96% { transform: translateX(-640px); }
  100% { transform: none; }
}
@keyframes mk-n-dots-d { 0%, 18% { width: 18px; background: ${A}; } 21%, 100% { width: 6px; background: var(--mk-line, #DCE0EA); } }` },
{ id: "n-sidebar", cat: "내비", name: "사이드바 접기·펼치기", use: "관리자 대시보드 메뉴", meta: "4s · 폭 44px↔110px",
  html: `<div class="mk-n-sidebar"><aside><p><i></i><span>대시보드</span></p><p><i></i><span>주문</span></p><p><i></i><span>설정</span></p></aside><div></div></div>`,
  css: `.mk-n-sidebar { display: flex; width: 200px; height: 110px; overflow: hidden; border-radius: 10px; border: 1px solid var(--mk-line, #DCE0EA); background: var(--mk-surface, #fff); }
.mk-n-sidebar aside {
  flex: none; width: 44px; padding: 10px 0; overflow: hidden;
  background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff);
  animation: mk-n-sidebar 4s cubic-bezier(.6, 0, .2, 1) infinite;
}
.mk-n-sidebar p { display: flex; align-items: center; gap: 8px; margin: 0 0 6px; padding: 4px 15px; white-space: nowrap; font: 600 11px system-ui, sans-serif; }
.mk-n-sidebar i { flex: none; width: 14px; height: 14px; border-radius: 4px; background: color-mix(in srgb, var(--mk-on-ink, #fff) 60%, transparent); }
.mk-n-sidebar span { opacity: 0; animation: mk-n-sidebar-t 4s infinite; }
.mk-n-sidebar > div { flex: 1; margin: 10px; border-radius: 6px; background: repeating-linear-gradient(var(--mk-skel-a, #E0E4EC) 0 10px, transparent 10px 18px); }
@keyframes mk-n-sidebar { 0%, 25%, 90%, 100% { width: 44px; } 40%, 75% { width: 110px; } }
@keyframes mk-n-sidebar-t { 0%, 30%, 80%, 100% { opacity: 0; } 42%, 72% { opacity: 1; } }` },
{ id: "n-header", cat: "내비", name: "스크롤 시 헤더 축소", use: "긴 페이지 상단 바", meta: "4s · 높이 40→26px + 그림자",
  html: `<div class="mk-n-header"><header>교동마을</header><div>${R(6, "<i></i>")}</div></div>`,
  css: `.mk-n-header { position: relative; width: 150px; height: 120px; overflow: hidden; border-radius: 12px; border: 1px solid var(--mk-line, #DCE0EA); background: var(--mk-surface, #fff); }
.mk-n-header header {
  position: absolute; inset: 0 0 auto; z-index: 1; height: 40px; display: flex; align-items: center; padding: 0 10px;
  background: var(--mk-surface, #fff); font: 800 16px system-ui, sans-serif;
  animation: mk-n-header 4s ease-in-out infinite;
}
.mk-n-header > div { display: grid; gap: 6px; padding: 46px 10px 0; animation: mk-n-header-s 4s ease-in-out infinite; }
.mk-n-header i { height: 14px; border-radius: 4px; background: var(--mk-skel-a, #E0E4EC); }
@keyframes mk-n-header {
  0%, 20%, 100% { height: 40px; font-size: 16px; box-shadow: none; }
  45%, 75% { height: 26px; font-size: 12px; box-shadow: 0 4px 10px rgb(0 0 0 / .1); }
}
@keyframes mk-n-header-s { 0%, 20%, 100% { transform: none; } 45%, 75% { transform: translateY(-40px); } }` },
{ id: "n-top", cat: "내비", name: "맨 위로 버튼", use: "긴 목록·블로그", meta: "4s · 스크롤 후 버튼 튕겨 등장",
  html: `<div class="mk-n-top"><div>${R(7, "<i></i>")}</div><b>↑</b></div>`,
  css: `.mk-n-top { position: relative; width: 150px; height: 120px; overflow: hidden; border-radius: 12px; border: 1px solid var(--mk-line, #DCE0EA); background: var(--mk-surface, #fff); }
.mk-n-top > div { display: grid; gap: 6px; padding: 10px; animation: mk-n-top 4s ease-in-out infinite; }
.mk-n-top i { height: 14px; border-radius: 4px; background: var(--mk-skel-a, #E0E4EC); }
.mk-n-top b {
  position: absolute; right: 8px; bottom: 8px; width: 30px; height: 30px; display: grid; place-items: center; border-radius: 50%;
  background: ${A}; color: var(--mk-on-accent, #fff); font: 800 14px system-ui, sans-serif; box-shadow: 0 4px 10px rgb(0 0 0 / .2);
  animation: mk-n-top-b 4s infinite;
}
@keyframes mk-n-top { 0%, 20%, 95%, 100% { transform: none; } 45%, 80% { transform: translateY(-50px); } }
@keyframes mk-n-top-b {
  0%, 35% { opacity: 0; transform: translateY(8px) scale(.5); }
  45% { opacity: 1; transform: scale(1.1); animation-timing-function: ease-out; }
  50%, 80% { opacity: 1; transform: none; }
  90%, 100% { opacity: 0; transform: translateY(8px) scale(.5); }
}` },
{ id: "n-crumb", cat: "내비", name: "경로 순차 등장", use: "카테고리 경로(브레드크럼)", meta: "4s · 단계당 0.25s",
  html: `<nav class="mk-n-crumb"><span>홈</span><span>과일</span><span>감귤류</span><span>한라봉</span></nav>`,
  css: `.mk-n-crumb { display: flex; gap: 4px; font: 13px system-ui, sans-serif; color: var(--mk-ink-soft, #8A90A0); }
.mk-n-crumb span { display: inline-block; opacity: 0; animation: mk-n-crumb 4s cubic-bezier(.2, .8, .2, 1) infinite; }
.mk-n-crumb span:not(:last-child)::after { content: "›"; margin-left: 4px; }
.mk-n-crumb span:last-child { color: ${A}; font-weight: 700; }
${N(3, k => `.mk-n-crumb span:nth-child(${k + 2}) { animation-delay: ${((k + 1) * 0.25).toFixed(2)}s; }`)}
@keyframes mk-n-crumb { 0% { opacity: 0; transform: translateX(-6px); } 10%, 85% { opacity: 1; transform: none; } 100% { opacity: 0; } }` },
);
