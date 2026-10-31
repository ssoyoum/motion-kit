// 분류: JS — 자바스크립트가 필요한 모션. js 필드는 function (root) { … } 의 본문이고, root는 html 첫 요소(.mk-<id>)다.
M.push(
{ id: "js-scroll-reveal", cat: "JS", name: "스크롤 등장", use: "목록·섹션이 화면에 들어올 때", meta: "IntersectionObserver · 0.45s · 0.08s씩 · 스크롤해 보세요",
  html: `<div class="mk-js-scroll-reveal">
  <p class="hint">↓ 스크롤해 보세요</p>
  <div class="row">주문 접수 · 10:02</div>
  <div class="row">결제 완료 · 10:03</div>
  <div class="row">산지 수확 · 06:30</div>
  <div class="row">포장 완료 · 09:10</div>
  <div class="row">출고 · 13:00</div>
  <div class="row">배송 중 · 내일 도착</div>
</div>`,
  css: `.mk-js-scroll-reveal {
  width: 200px; height: 120px; overflow-y: auto; padding: 8px; border-radius: 10px;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA); scrollbar-width: thin;
}
.mk-js-scroll-reveal .hint { margin: 0 0 8px; font-size: 11px; text-align: center; color: var(--mk-ink-soft, #8A90A0); }
.mk-js-scroll-reveal .row {
  margin-bottom: 8px; padding: 8px 10px; border-radius: 8px; font-size: 12px;
  background: var(--mk-bubble, #E3E7F0); color: var(--mk-ink, #1B1E26);
  opacity: 0; transform: translateY(14px);
  transition: opacity .45s ease, transform .45s cubic-bezier(.2, .8, .2, 1);
}
.mk-js-scroll-reveal .row.in { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .mk-js-scroll-reveal .row { opacity: 1; transform: none; transition: none; } }`,
  js: `var rows = Array.prototype.slice.call(root.querySelectorAll(".row"));
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.style.transitionDelay = (rows.indexOf(e.target) % 3) * 0.08 + "s";
      e.target.classList.add("in");
    } else {
      e.target.style.transitionDelay = "0s";
      e.target.classList.remove("in");
    }
  });
}, { root: root, threshold: 0.3 });
rows.forEach(function (r) { io.observe(r); });` },

{ id: "js-scroll-progress", cat: "JS", name: "읽기 진행 바", use: "긴 글·약관·상세 페이지", meta: "scroll 이벤트 · scaleX 0→1 · 스크롤해 보세요",
  html: `<div class="mk-js-scroll-progress">
  <i class="bar"></i>
  <div class="box">
    <h4>배송 안내</h4>
    <p>산지에서 아침에 수확한 상품은 오후 1시에 출고됩니다.</p>
    <p>제주 지역은 하루가 더 걸릴 수 있습니다.</p>
    <p>신선식품은 받으신 날 바로 냉장 보관해 주세요.</p>
    <p>상품에 문제가 있으면 7일 안에 사진과 함께 알려 주세요.</p>
  </div>
</div>`,
  css: `.mk-js-scroll-progress {
  position: relative; width: 210px; height: 124px; overflow: hidden; border-radius: 10px;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA);
}
.mk-js-scroll-progress .bar {
  position: absolute; left: 0; top: 0; z-index: 1; width: 100%; height: 4px;
  background: var(--mk-accent, #2F5BFF); transform: scaleX(0); transform-origin: left;
}
.mk-js-scroll-progress .box { height: 100%; overflow-y: auto; padding: 12px 12px 4px; font-size: 12px; line-height: 1.6; color: var(--mk-ink, #1B1E26); scrollbar-width: thin; }
.mk-js-scroll-progress h4 { margin: 0 0 4px; font-size: 13px; }
.mk-js-scroll-progress p { margin: 0 0 8px; }`,
  js: `var box = root.querySelector(".box"), bar = root.querySelector(".bar");
function update() {
  var max = box.scrollHeight - box.clientHeight;
  bar.style.transform = "scaleX(" + (max > 0 ? box.scrollTop / max : 0) + ")";
}
box.addEventListener("scroll", update, { passive: true });
update();` },

{ id: "js-sticky-shrink", cat: "JS", name: "줄어드는 헤더", use: "스크롤 시 상단 헤더 축소", meta: "scrollTop > 8px · 0.25s · 스크롤해 보세요",
  html: `<div class="mk-js-sticky-shrink">
  <header>교동마을 산지직송</header>
  <p>애플망고 2kg</p><p>꿀수박 1통</p><p>제주 옥돔 3미</p><p>노지 감귤 5kg</p><p>한라봉 3kg</p>
</div>`,
  css: `.mk-js-sticky-shrink {
  width: 200px; height: 124px; overflow-y: auto; border-radius: 10px;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA); scrollbar-width: thin;
}
.mk-js-sticky-shrink header {
  position: sticky; top: 0; padding: 18px 12px; font: 700 15px system-ui, sans-serif;
  background: var(--mk-accent, #2F5BFF); color: var(--mk-on-accent, #fff);
  transition: padding .25s ease, font-size .25s ease, box-shadow .25s ease;
}
.mk-js-sticky-shrink.shrunk header { padding: 6px 12px; font-size: 12px; box-shadow: 0 4px 10px rgb(0 0 0 / .18); }
.mk-js-sticky-shrink p { margin: 0; padding: 9px 12px; font-size: 12px; border-bottom: 1px solid var(--mk-line, #DCE0EA); color: var(--mk-ink, #1B1E26); }`,
  js: `root.addEventListener("scroll", function () {
  root.classList.toggle("shrunk", root.scrollTop > 8);
}, { passive: true });` },

{ id: "js-cursor", cat: "JS", name: "따라오는 커서", use: "포트폴리오·브랜드 사이트", meta: "pointermove + lerp 0.18 · 마우스를 올려 보세요",
  html: `<div class="mk-js-cursor"><span class="ring"></span><span class="dot"></span><b>여기서 움직여 보세요</b></div>`,
  css: `.mk-js-cursor {
  position: relative; width: 220px; height: 120px; overflow: hidden; display: grid; place-items: center; cursor: none;
  border-radius: 12px; border: 1px dashed color-mix(in srgb, var(--mk-accent, #2F5BFF) 45%, transparent);
  background: color-mix(in srgb, var(--mk-accent, #2F5BFF) 7%, transparent);
}
.mk-js-cursor b { font: 600 12px system-ui, sans-serif; color: var(--mk-ink-soft, #8A90A0); pointer-events: none; }
.mk-js-cursor .dot, .mk-js-cursor .ring { position: absolute; left: 0; top: 0; border-radius: 50%; pointer-events: none; opacity: 0; }
.mk-js-cursor .dot { width: 6px; height: 6px; margin: -3px; background: var(--mk-accent, #2F5BFF); transition: opacity .2s; }
.mk-js-cursor .ring { width: 30px; height: 30px; margin: -15px; border: 2px solid var(--mk-accent, #2F5BFF); transition: opacity .2s, width .2s, height .2s, margin .2s; }
.mk-js-cursor.on .dot, .mk-js-cursor.on .ring { opacity: 1; }
.mk-js-cursor.down .ring { width: 18px; height: 18px; margin: -9px; }`,
  js: `var dot = root.querySelector(".dot"), ring = root.querySelector(".ring");
var x = 0, y = 0, rx = 0, ry = 0, raf = 0;
function loop() {
  rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
  ring.style.transform = "translate(" + rx + "px," + ry + "px)";
  raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.3 ? requestAnimationFrame(loop) : 0;
}
root.addEventListener("pointermove", function (e) {
  var r = root.getBoundingClientRect();
  x = e.clientX - r.left; y = e.clientY - r.top;
  dot.style.transform = "translate(" + x + "px," + y + "px)";
  if (!raf) raf = requestAnimationFrame(loop);
});
root.addEventListener("pointerenter", function (e) {
  var r = root.getBoundingClientRect();
  rx = x = e.clientX - r.left; ry = y = e.clientY - r.top;
  root.classList.add("on");
});
root.addEventListener("pointerleave", function () { root.classList.remove("on", "down"); });
root.addEventListener("pointerdown", function () { root.classList.add("down"); });
root.addEventListener("pointerup", function () { root.classList.remove("down"); });` },

{ id: "js-trail", cat: "JS", name: "마우스 꼬리", use: "이벤트 페이지 장식", meta: "점 16ms마다 · 0.7s 사라짐 · 마우스를 올려 보세요",
  html: `<div class="mk-js-trail"><b>마우스를 움직여 보세요</b></div>`,
  css: `.mk-js-trail {
  position: relative; width: 220px; height: 120px; overflow: hidden; display: grid; place-items: center;
  border-radius: 12px; background: var(--mk-ink, #1B1E26);
}
.mk-js-trail b { font: 600 12px system-ui, sans-serif; color: rgb(255 255 255 / .55); pointer-events: none; }
.mk-js-trail .p {
  position: absolute; width: 10px; height: 10px; margin: -5px; border-radius: 50%; pointer-events: none;
  animation: mk-js-trail-fade .7s ease-out forwards;
}
@keyframes mk-js-trail-fade { to { transform: scale(.2); opacity: 0; } }`,
  js: `var colors = ["var(--mk-accent, #2F5BFF)", "var(--mk-danger, #E5484D)", "var(--mk-warn, #D99A00)", "var(--mk-success, #1F9D55)"];
var n = 0, last = 0, lastMove = 0, t = 0;
var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
function spawn(x, y) {
  var p = document.createElement("i");
  p.className = "p";
  p.style.left = x + "px"; p.style.top = y + "px";
  p.style.background = colors[n++ % colors.length];
  root.appendChild(p);
  p.addEventListener("animationend", function () { p.remove(); });
}
root.addEventListener("pointermove", function (e) {
  var now = performance.now();
  lastMove = now;
  if (now - last < 16) return;
  last = now;
  var r = root.getBoundingClientRect();
  spawn(e.clientX - r.left, e.clientY - r.top);
});
if (!reduce) {
  var timer = setInterval(function () {
    if (!root.isConnected) return clearInterval(timer);
    if (performance.now() - lastMove < 1500) return;
    t += 0.14;
    spawn(110 + 80 * Math.sin(t), 60 + 32 * Math.sin(2 * t));
  }, 45);
}` },

{ id: "js-magnet", cat: "JS", name: "자석 버튼", use: "핵심 CTA", meta: "버튼 중심과 거리 × 0.35 · 마우스를 올려 보세요",
  html: `<div class="mk-js-magnet"><button type="button">지금 구매</button></div>`,
  css: `.mk-js-magnet { width: 220px; height: 120px; display: grid; place-items: center; }
.mk-js-magnet button {
  padding: 12px 24px; border: 0; border-radius: 999px; cursor: pointer;
  background: var(--mk-accent, #2F5BFF); color: var(--mk-on-accent, #fff); font: 700 14px system-ui, sans-serif;
  box-shadow: 0 6px 16px color-mix(in srgb, var(--mk-accent, #2F5BFF) 35%, transparent);
  transition: transform .25s cubic-bezier(.2, .8, .2, 1);
}
.mk-js-magnet button:focus-visible { outline: 2px solid var(--mk-ink, #1B1E26); outline-offset: 3px; }`,
  js: `var b = root.querySelector("button");
root.addEventListener("pointermove", function (e) {
  var r = b.getBoundingClientRect();
  var dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
  b.style.transform = "translate(" + dx * 0.35 + "px," + dy * 0.45 + "px)";
});
root.addEventListener("pointerleave", function () { b.style.transform = ""; });` },

{ id: "js-tilt", cat: "JS", name: "따라 기우는 카드", use: "멤버십·상품 카드", meta: "±12° 기울기 + 빛 반사 · 마우스를 올려 보세요",
  html: `<div class="mk-js-tilt"><div class="card"><b>VIP 멤버십</b><small>2026 · 교동마을</small><i class="glare"></i></div></div>`,
  css: `.mk-js-tilt { width: 220px; height: 124px; display: grid; place-items: center; perspective: 600px; }
.mk-js-tilt .card {
  position: relative; overflow: hidden; width: 170px; height: 100px; padding: 14px; border-radius: 14px;
  display: flex; flex-direction: column; justify-content: flex-end; gap: 2px;
  background: linear-gradient(135deg, var(--mk-accent, #2F5BFF), #1B1E26); color: #fff;
  box-shadow: 0 12px 24px rgb(0 0 0 / .25); transition: transform .2s ease-out;
}
.mk-js-tilt b { font: 800 15px system-ui, sans-serif; }
.mk-js-tilt small { font-size: 11px; opacity: .8; }
.mk-js-tilt .glare {
  position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity .2s;
  background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgb(255 255 255 / .45), transparent 55%);
}
.mk-js-tilt.on .glare { opacity: 1; }
.mk-js-tilt:not(.on) .card { animation: mk-js-tilt-sway 4s ease-in-out infinite; }
@keyframes mk-js-tilt-sway {
  0%, 100% { transform: rotateY(-10deg) rotateX(6deg); }
  50% { transform: rotateY(10deg) rotateX(-6deg); }
}`,
  js: `var c = root.querySelector(".card");
root.addEventListener("pointermove", function (e) {
  var r = c.getBoundingClientRect();
  var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
  c.style.transform = "rotateY(" + (px - 0.5) * 24 + "deg) rotateX(" + (0.5 - py) * 20 + "deg)";
  c.style.setProperty("--gx", px * 100 + "%");
  c.style.setProperty("--gy", py * 100 + "%");
  root.classList.add("on");
});
root.addEventListener("pointerleave", function () { c.style.transform = ""; root.classList.remove("on"); });` },

{ id: "js-spotlight", cat: "JS", name: "따라오는 조명", use: "어두운 히어로·이벤트 배너", meta: "--x/--y 갱신 · 반지름 70px · 마우스를 올려 보세요",
  html: `<div class="mk-js-spotlight"><p>숨은 혜택을<br>찾아보세요</p></div>`,
  css: `.mk-js-spotlight {
  --x: 50%; --y: 50%;
  position: relative; overflow: hidden; width: 220px; height: 120px; border-radius: 12px;
  display: grid; place-items: center; background: #11141B;
}
.mk-js-spotlight::before {
  content: ""; position: absolute; inset: 0;
  background: radial-gradient(circle 70px at var(--x) var(--y), color-mix(in srgb, var(--mk-accent, #2F5BFF) 60%, transparent), transparent 75%);
}
.mk-js-spotlight p { position: relative; margin: 0; text-align: center; font: 800 16px/1.35 system-ui, sans-serif; color: rgb(255 255 255 / .88); }`,
  js: `var lastMove = 0, t = 0;
root.addEventListener("pointermove", function (e) {
  var r = root.getBoundingClientRect();
  lastMove = performance.now();
  root.style.setProperty("--x", e.clientX - r.left + "px");
  root.style.setProperty("--y", e.clientY - r.top + "px");
});
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  var timer = setInterval(function () {
    if (!root.isConnected) return clearInterval(timer);
    if (performance.now() - lastMove < 1500) return;
    t += 0.035;
    root.style.setProperty("--x", 110 + 85 * Math.cos(t) + "px");
    root.style.setProperty("--y", 60 + 35 * Math.sin(1.7 * t) + "px");
  }, 30);
}` },

{ id: "js-ripple-pos", cat: "JS", name: "누른 자리 물결", use: "버튼·리스트 터치 반응", meta: "누른 좌표에서 0.6s 확산 · 클릭해 보세요",
  html: `<div class="mk-js-ripple-pos"><button type="button">눌러서 담기</button></div>`,
  css: `.mk-js-ripple-pos { width: 220px; height: 120px; display: grid; place-items: center; }
.mk-js-ripple-pos button {
  position: relative; overflow: hidden; padding: 14px 28px; border: 0; border-radius: 12px; cursor: pointer;
  background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff); font: 700 14px system-ui, sans-serif;
}
.mk-js-ripple-pos .rp {
  position: absolute; border-radius: 50%; pointer-events: none; transform: scale(0);
  background: color-mix(in srgb, currentColor 35%, transparent);
  animation: mk-js-ripple-pos .6s ease-out forwards;
}
@keyframes mk-js-ripple-pos { to { transform: scale(1); opacity: 0; } }`,
  js: `var b = root.querySelector("button"), lastUser = 0;
function ripple(x, y) {
  var r = b.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2.2;
  var i = document.createElement("span");
  i.className = "rp";
  i.style.width = i.style.height = s + "px";
  i.style.left = x - s / 2 + "px"; i.style.top = y - s / 2 + "px";
  b.appendChild(i);
  i.addEventListener("animationend", function () { i.remove(); });
}
b.addEventListener("pointerdown", function (e) {
  var r = b.getBoundingClientRect();
  lastUser = Date.now();
  ripple(e.clientX - r.left, e.clientY - r.top);
});
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  var timer = setInterval(function () {
    if (!root.isConnected) return clearInterval(timer);
    if (Date.now() - lastUser < 3000) return;
    ripple(Math.random() * b.offsetWidth, Math.random() * b.offsetHeight);
  }, 1800);
}` },

{ id: "js-scramble", cat: "JS", name: "글자 뒤섞였다 맞춰짐", use: "히어로 카피·브랜드 문구", meta: "글자마다 무작위 시작·끝 프레임 · 1.8s 쉬고 다음 문구",
  html: `<div class="mk-js-scramble"><span>교동마을 산지직송</span></div>`,
  css: `.mk-js-scramble { min-width: 210px; text-align: center; font: 800 20px/1.3 system-ui, sans-serif; color: var(--mk-ink, #1B1E26); }
.mk-js-scramble i { font-style: normal; color: var(--mk-accent, #2F5BFF); opacity: .75; }`,
  js: `var el = root.querySelector("span");
var phrases = ["교동마을 산지직송", "오늘 수확, 내일 도착", "NEW · 애플망고 특가"];
var glyphs = "#*+=/-_?ABCDEFXYZ01가나다라마바사아";
var k = 0;
if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(function () { el.textContent = phrases[++k % phrases.length]; }, 2500);
  return;
}
function play(to) {
  var from = el.textContent, len = Math.max(from.length, to.length), q = [];
  for (var i = 0; i < len; i++) {
    var s = Math.floor(Math.random() * 20), e = s + 10 + Math.floor(Math.random() * 20);
    q.push({ from: from[i] || "", to: to[i] || "", s: s, e: e, ch: "" });
  }
  var f = 0;
  (function step() {
    if (!root.isConnected) return;
    var out = "", done = 0;
    q.forEach(function (c) {
      if (f >= c.e) { done++; out += c.to; }
      else if (f >= c.s) {
        if (!c.ch || Math.random() < 0.28) c.ch = glyphs[Math.floor(Math.random() * glyphs.length)];
        out += "<i>" + c.ch + "</i>";
      } else out += c.from;
    });
    el.innerHTML = out;
    f++;
    if (done < q.length) requestAnimationFrame(step);
    else setTimeout(function () { play(phrases[++k % phrases.length]); }, 1800);
  })();
}
setTimeout(function () { play(phrases[++k % phrases.length]); }, 1200);` },

{ id: "js-typewriter", cat: "JS", name: "썼다 지우는 문구", use: "검색창 예시·히어로 슬로건", meta: "쓰기 90ms · 지우기 45ms · 1.2s 멈춤",
  html: `<p class="mk-js-typewriter">상담원이 <b></b><i></i></p>`,
  css: `.mk-js-typewriter { margin: 0; font: 700 16px system-ui, sans-serif; color: var(--mk-ink, #1B1E26); }
.mk-js-typewriter b { color: var(--mk-accent, #2F5BFF); font-weight: 800; }
.mk-js-typewriter i {
  display: inline-block; width: 2px; height: 1.1em; margin-left: 2px; vertical-align: -3px;
  background: var(--mk-accent, #2F5BFF); animation: mk-js-typewriter-caret .8s step-end infinite;
}
@keyframes mk-js-typewriter-caret { 50% { opacity: 0; } }`,
  js: `var out = root.querySelector("b");
var words = ["배송을 확인해요", "환불을 도와드려요", "24시간 답해요"];
var w = 0, n = 0, del = false;
if (matchMedia("(prefers-reduced-motion: reduce)").matches) { out.textContent = words[0]; return; }
(function tick() {
  if (!root.isConnected) return;
  var chars = Array.from(words[w]);
  n += del ? -1 : 1;
  out.textContent = chars.slice(0, n).join("");
  var wait = del ? 45 : 90;
  if (!del && n === chars.length) { del = true; wait = 1200; }
  else if (del && n === 0) { del = false; w = (w + 1) % words.length; wait = 350; }
  setTimeout(tick, wait);
})();` },

{ id: "js-countup", cat: "JS", name: "보이면 올라가는 숫자", use: "통계·누적 실적 섹션", meta: "IntersectionObserver · 1.6s easeOutCubic · 4s마다 다시",
  html: `<div class="mk-js-countup"><b data-to="12480">0</b><small>누적 주문</small></div>`,
  css: `.mk-js-countup { display: grid; justify-items: center; gap: 2px; }
.mk-js-countup b { font: 800 34px/1 system-ui, sans-serif; font-variant-numeric: tabular-nums; color: var(--mk-ink, #1B1E26); }
.mk-js-countup small { font-size: 12px; color: var(--mk-ink-soft, #8A90A0); }`,
  js: `var b = root.querySelector("b"), to = +b.dataset.to, visible = false;
function run() {
  var t0 = performance.now(), d = 1600;
  (function f(t) {
    var p = Math.min(1, (t - t0) / d), e = 1 - Math.pow(1 - p, 3);
    b.textContent = Math.round(to * e).toLocaleString("ko-KR");
    if (p < 1) requestAnimationFrame(f);
  })(t0);
}
if (matchMedia("(prefers-reduced-motion: reduce)").matches) { b.textContent = to.toLocaleString("ko-KR"); return; }
new IntersectionObserver(function (es) {
  var was = visible; visible = es[0].isIntersecting;
  if (visible && !was) run();
}, { threshold: 0.6 }).observe(root);
var timer = setInterval(function () {
  if (!root.isConnected) return clearInterval(timer);
  if (visible) run();
}, 4000);` },

{ id: "js-odometer", cat: "JS", name: "굴러가는 숫자판", use: "방문자·재고 실시간 표시", meta: "자리마다 0~9 띠 · 0.8s 이동 · 1.6s마다 증가",
  html: `<div class="mk-js-odometer" role="img" aria-label="오늘 방문자 수"></div>`,
  css: `.mk-js-odometer { display: flex; gap: 3px; font: 800 30px/1 system-ui, sans-serif; font-variant-numeric: tabular-nums; color: var(--mk-ink, #1B1E26); }
.mk-js-odometer .d {
  width: .7em; height: 1.2em; overflow: hidden; border-radius: 6px;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA);
}
.mk-js-odometer .d span { display: block; transition: transform .8s cubic-bezier(.2, .8, .2, 1); }
.mk-js-odometer .d i { display: block; height: 1.2em; line-height: 1.2em; font-style: normal; text-align: center; }
@media (prefers-reduced-motion: reduce) { .mk-js-odometer .d span { transition: none; } }`,
  js: `var n = 48210, cols = [];
for (var c = 0; c < 6; c++) {
  var d = document.createElement("div"), s = document.createElement("span");
  d.className = "d";
  for (var k = 0; k < 10; k++) { var i = document.createElement("i"); i.textContent = k; s.appendChild(i); }
  d.appendChild(s); root.appendChild(d); cols.push(s);
}
function show() {
  String(n).padStart(6, "0").split("").forEach(function (ch, idx) {
    cols[idx].style.transform = "translateY(" + (-1.2 * +ch) + "em)";
  });
  root.setAttribute("aria-label", "오늘 방문자 " + n.toLocaleString("ko-KR") + "명");
}
show();
var timer = setInterval(function () {
  if (!root.isConnected) return clearInterval(timer);
  n += 1 + Math.floor(Math.random() * 380);
  show();
}, 1600);` },

{ id: "js-confetti-canvas", cat: "JS", name: "캔버스 꽃가루", use: "주문 완료·당첨 축하", meta: "canvas · 조각 60개 · 중력 0.12 · 클릭해 보세요",
  html: `<div class="mk-js-confetti-canvas"><canvas></canvas><span>클릭하면 축하!</span></div>`,
  css: `.mk-js-confetti-canvas {
  position: relative; width: 220px; height: 120px; border-radius: 12px; cursor: pointer;
  background: color-mix(in srgb, var(--mk-accent, #2F5BFF) 7%, transparent);
}
.mk-js-confetti-canvas canvas { position: absolute; inset: 0; width: 100%; height: 100%; }
.mk-js-confetti-canvas span { position: absolute; inset: 0; display: grid; place-items: center; font: 700 13px system-ui, sans-serif; color: var(--mk-ink-soft, #8A90A0); pointer-events: none; }`,
  js: `var cv = root.querySelector("canvas"), ctx = cv.getContext("2d");
var W = 220, H = 120, dpr = Math.min(2, window.devicePixelRatio || 1);
cv.width = W * dpr; cv.height = H * dpr; ctx.scale(dpr, dpr);
var cs = getComputedStyle(root), fall = ["#2F5BFF", "#E5484D", "#1F9D55", "#D99A00"];
var colors = ["--mk-accent", "--mk-danger", "--mk-success", "--mk-warn"].map(function (v, i) { return cs.getPropertyValue(v).trim() || fall[i]; });
var parts = [], raf = 0, lastUser = 0;
var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
function burst(x, y) {
  for (var i = 0; i < 60; i++) {
    var a = Math.random() * Math.PI * 2, sp = 1.5 + Math.random() * 3.5;
    parts.push({ x: x, y: y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 2.2, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4,
      w: 4 + Math.random() * 3, h: 6 + Math.random() * 4, c: colors[i % colors.length], life: 1 });
  }
  if (!raf) raf = requestAnimationFrame(loop);
}
function loop() {
  ctx.clearRect(0, 0, W, H);
  parts = parts.filter(function (p) { return p.life > 0 && p.y < H + 20; });
  parts.forEach(function (p) {
    p.vy += 0.12; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life -= 0.012;
    ctx.save(); ctx.globalAlpha = Math.max(0, p.life); ctx.translate(p.x, p.y); ctx.rotate(p.r);
    ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
  });
  raf = parts.length ? requestAnimationFrame(loop) : 0;
}
root.addEventListener("click", function (e) {
  var r = root.getBoundingClientRect();
  lastUser = Date.now();
  burst(e.clientX - r.left, e.clientY - r.top);
});
if (!reduce) {
  var timer = setInterval(function () {
    if (!root.isConnected) return clearInterval(timer);
    if (Date.now() - lastUser > 4000) burst(40 + Math.random() * (W - 80), 70);
  }, 2600);
  burst(W / 2, 70);
}` },

{ id: "js-particles", cat: "JS", name: "입자 네트워크", use: "AI·기술 소개 배경", meta: "canvas · 입자 28개 · 50px 안이면 선 연결 · 마우스를 올려 보세요",
  html: `<div class="mk-js-particles"><canvas></canvas></div>`,
  css: `.mk-js-particles { position: relative; width: 220px; height: 124px; border-radius: 12px; overflow: hidden; background: #0F1320; }
.mk-js-particles canvas { position: absolute; inset: 0; width: 100%; height: 100%; }`,
  js: `var cv = root.querySelector("canvas"), ctx = cv.getContext("2d");
var W = 220, H = 124, dpr = Math.min(2, window.devicePixelRatio || 1);
cv.width = W * dpr; cv.height = H * dpr; ctx.scale(dpr, dpr);
var col = getComputedStyle(root).getPropertyValue("--mk-accent").trim() || "#2F5BFF";
var ps = [], mx = -999, my = -999, running = false, visible = true;
for (var i = 0; i < 28; i++) ps.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5 });
function draw() {
  ctx.clearRect(0, 0, W, H);
  for (var a = 0; a < ps.length; a++) {
    var p = ps[a];
    for (var b = a + 1; b < ps.length; b++) {
      var q = ps[b], d = Math.hypot(p.x - q.x, p.y - q.y);
      if (d < 50) { ctx.globalAlpha = 1 - d / 50; ctx.strokeStyle = col; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
    }
    var dm = Math.hypot(p.x - mx, p.y - my);
    if (dm < 60) { ctx.globalAlpha = 1 - dm / 60; ctx.strokeStyle = "#fff"; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mx, my); ctx.stroke(); }
    ctx.globalAlpha = 1; ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2); ctx.fill();
  }
}
function step() {
  if (!visible || !root.isConnected) { running = false; return; }
  ps.forEach(function (p) {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
  });
  draw();
  requestAnimationFrame(step);
}
root.addEventListener("pointermove", function (e) { var r = root.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
root.addEventListener("pointerleave", function () { mx = my = -999; });
if (matchMedia("(prefers-reduced-motion: reduce)").matches) { draw(); return; }
new IntersectionObserver(function (es) {
  visible = es[0].isIntersecting;
  if (visible && !running) { running = true; requestAnimationFrame(step); }
}).observe(root);` },

{ id: "js-drag-sort", cat: "JS", name: "끌어서 순서 바꾸기", use: "우선순위·장바구니 정렬", meta: "pointer 이벤트 · 중간선 넘으면 자리 교환 · 끌어서 옮겨 보세요",
  html: `<ul class="mk-js-drag-sort">
  <li><span class="h">⋮⋮</span>결제 확인</li>
  <li><span class="h">⋮⋮</span>포장</li>
  <li><span class="h">⋮⋮</span>출고</li>
  <li><span class="h">⋮⋮</span>배송 완료</li>
</ul>`,
  css: `.mk-js-drag-sort { list-style: none; margin: 0; padding: 0; width: 180px; display: grid; gap: 6px; }
.mk-js-drag-sort li {
  position: relative; display: flex; gap: 8px; align-items: center; padding: 6px 10px; border-radius: 8px;
  background: var(--mk-surface, #fff); border: 1px solid var(--mk-line, #DCE0EA); color: var(--mk-ink, #1B1E26);
  font-size: 12.5px; cursor: grab; user-select: none; touch-action: none;
}
.mk-js-drag-sort li .h { color: var(--mk-ink-soft, #8A90A0); letter-spacing: -2px; }
.mk-js-drag-sort li.drag { z-index: 2; cursor: grabbing; box-shadow: 0 8px 18px rgb(0 0 0 / .18); border-color: var(--mk-accent, #2F5BFF); }`,
  js: `var drag = null, startY = 0;
function center(el) { var r = el.getBoundingClientRect(); return r.top + r.height / 2; }
root.addEventListener("pointerdown", function (e) {
  var li = e.target.closest("li");
  if (!li) return;
  drag = li; startY = e.clientY;
  li.classList.add("drag");
  li.setPointerCapture(e.pointerId);
});
root.addEventListener("pointermove", function (e) {
  if (!drag) return;
  drag.style.transform = "translateY(" + (e.clientY - startY) + "px)";
  var mid = center(drag), next = drag.nextElementSibling, prev = drag.previousElementSibling;
  if (next && mid > center(next)) {
    startY += next.offsetHeight + 6; root.insertBefore(next, drag);
  } else if (prev && mid < center(prev)) {
    startY -= prev.offsetHeight + 6; root.insertBefore(drag, prev);
  } else return;
  drag.style.transform = "translateY(" + (e.clientY - startY) + "px)";
});
function end() {
  if (!drag) return;
  drag.classList.remove("drag"); drag.style.transform = ""; drag = null;
}
root.addEventListener("pointerup", end);
root.addEventListener("pointercancel", end);` },

{ id: "js-flip-shuffle", cat: "JS", name: "FLIP 섞기", use: "필터·정렬 결과 재배치", meta: "First-Last-Invert-Play · 0.6s · 2.5s마다 · 클릭해 보세요",
  html: `<div class="mk-js-flip-shuffle"><i>1</i><i>2</i><i>3</i><i>4</i><i>5</i><i>6</i><i>7</i><i>8</i><i>9</i></div>`,
  css: `.mk-js-flip-shuffle { display: grid; grid-template-columns: repeat(3, 34px); gap: 6px; cursor: pointer; }
.mk-js-flip-shuffle i {
  display: grid; place-items: center; height: 30px; border-radius: 7px;
  font: 700 13px system-ui, sans-serif; font-style: normal; color: #fff; background: var(--mk-accent, #2F5BFF);
}
.mk-js-flip-shuffle i:nth-child(3n+2) { background: var(--mk-danger, #E5484D); }
.mk-js-flip-shuffle i:nth-child(3n) { background: var(--mk-success, #1F9D55); }`,
  js: `function shuffle() {
  var items = Array.prototype.slice.call(root.children);
  var first = items.map(function (el) { return el.getBoundingClientRect(); });
  var order = items.slice().sort(function () { return Math.random() - 0.5; });
  order.forEach(function (el) { root.appendChild(el); });
  items.forEach(function (el, i) {
    var a = first[i], b = el.getBoundingClientRect(), dx = a.left - b.left, dy = a.top - b.top;
    if (dx || dy) el.animate([{ transform: "translate(" + dx + "px," + dy + "px)" }, { transform: "none" }],
      { duration: 600, easing: "cubic-bezier(.2, .8, .2, 1)" });
  });
}
root.addEventListener("click", shuffle);
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  var timer = setInterval(function () {
    if (!root.isConnected) return clearInterval(timer);
    shuffle();
  }, 2500);
}` },

{ id: "js-view-transition", cat: "JS", name: "뷰 전환", use: "목록 → 상세 화면 전환", meta: "startViewTransition(지원 시) · 아니면 FLIP · 0.45s · 클릭해 보세요",
  html: `<div class="mk-js-view-transition"><div class="v"><b>애플망고 2kg</b><small>목록</small></div><button type="button">전환</button></div>`,
  css: `.mk-js-view-transition { position: relative; width: 220px; height: 124px; display: grid; place-items: center; }
.mk-js-view-transition .v {
  view-transition-name: mk-js-vt-card;
  display: grid; gap: 2px; padding: 10px 14px; border-radius: 12px;
  background: var(--mk-accent, #2F5BFF); color: var(--mk-on-accent, #fff); font: 13px system-ui, sans-serif;
}
.mk-js-view-transition .v b { font-weight: 800; }
.mk-js-view-transition .v small { opacity: .8; font-size: 11px; }
.mk-js-view-transition .v.big { position: absolute; inset: 0; align-content: end; padding: 16px; border-radius: 14px; font-size: 15px; }
.mk-js-view-transition button {
  position: absolute; right: 6px; top: 6px; z-index: 2; padding: 4px 10px; border: 0; border-radius: 999px; cursor: pointer;
  background: var(--mk-surface, #fff); color: var(--mk-ink, #1B1E26); font: 600 11px system-ui, sans-serif;
  box-shadow: 0 1px 4px rgb(0 0 0 / .15);
}
::view-transition-group(mk-js-vt-card) { animation-duration: .45s; animation-timing-function: cubic-bezier(.2, .8, .2, 1); }`,
  js: `var v = root.querySelector(".v"), lastUser = 0;
var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
function swap() {
  var big = v.classList.toggle("big");
  v.querySelector("small").textContent = big ? "상세 · 산지에서 오늘 출고" : "목록";
}
function flip() {
  var a = v.getBoundingClientRect();
  swap();
  var b = v.getBoundingClientRect();
  if (reduce) return;
  v.animate([
    { transformOrigin: "0 0", transform: "translate(" + (a.left - b.left) + "px," + (a.top - b.top) + "px) scale(" + a.width / b.width + "," + a.height / b.height + ")" },
    { transformOrigin: "0 0", transform: "none" }
  ], { duration: 450, easing: "cubic-bezier(.2, .8, .2, 1)" });
}
root.querySelector("button").addEventListener("click", function () {
  lastUser = Date.now();
  if (document.startViewTransition && !reduce) document.startViewTransition(swap);
  else flip();
});
if (!reduce) {
  var timer = setInterval(function () {
    if (!root.isConnected) return clearInterval(timer);
    if (Date.now() - lastUser > 5000) flip();
  }, 2800);
}` },

{ id: "js-toast-queue", cat: "JS", name: "쌓이는 알림", use: "주문·결제 상태 알림", meta: "최대 3개 · 2.6s 뒤 사라짐 · 1.4s마다 · 클릭해 보세요",
  html: `<div class="mk-js-toast-queue"><button type="button">알림 보내기</button><ol></ol></div>`,
  css: `.mk-js-toast-queue { position: relative; width: 220px; height: 124px; }
.mk-js-toast-queue button {
  position: absolute; left: 0; top: 0; padding: 5px 10px; border-radius: 8px; cursor: pointer;
  border: 1px solid var(--mk-line, #DCE0EA); background: var(--mk-surface, #fff); color: var(--mk-ink, #1B1E26); font: 600 11.5px system-ui, sans-serif;
}
.mk-js-toast-queue ol { position: absolute; right: 0; bottom: 0; margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
.mk-js-toast-queue li {
  padding: 7px 11px; border-radius: 9px; font-size: 12px; white-space: nowrap;
  background: var(--mk-ink, #1B1E26); color: var(--mk-on-ink, #fff); box-shadow: 0 6px 14px rgb(0 0 0 / .18);
  animation: mk-js-toast-queue-in .3s cubic-bezier(.2, .8, .2, 1);
}
.mk-js-toast-queue li.out { animation: mk-js-toast-queue-out .3s ease-in forwards; }
@keyframes mk-js-toast-queue-in { from { opacity: 0; transform: translateX(30px); } }
@keyframes mk-js-toast-queue-out { to { opacity: 0; transform: translateX(30px); } }`,
  js: `var list = root.querySelector("ol"), k = 0, lastUser = 0;
var msgs = ["주문이 접수됐어요", "결제가 완료됐어요", "배송이 시작됐어요", "리뷰 쿠폰이 도착했어요"];
function out(li) {
  if (li.classList.contains("out")) return;
  li.classList.add("out");
  li.addEventListener("animationend", function () { li.remove(); }, { once: true });
}
function push() {
  var li = document.createElement("li");
  li.textContent = msgs[k++ % msgs.length];
  list.appendChild(li);
  var live = list.querySelectorAll("li:not(.out)");
  if (live.length > 3) out(live[0]);
  setTimeout(function () { out(li); }, 2600);
}
root.querySelector("button").addEventListener("click", function () { lastUser = Date.now(); push(); });
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  var timer = setInterval(function () {
    if (!root.isConnected) return clearInterval(timer);
    if (Date.now() - lastUser > 3000) push();
  }, 1400);
}` },

{ id: "js-swipe-carousel", cat: "JS", name: "밀어 넘기는 캐러셀", use: "상품 이미지·배너", meta: "pointer 스와이프 40px · 자동 2.4s · 끌어서 넘겨 보세요",
  html: `<div class="mk-js-swipe-carousel">
  <div class="track"><div class="sl">애플망고</div><div class="sl">꿀수박</div><div class="sl">제주 옥돔</div><div class="sl">노지 감귤</div></div>
  <div class="dots"></div>
</div>`,
  css: `.mk-js-swipe-carousel { width: 200px; overflow: hidden; border-radius: 12px; user-select: none; touch-action: pan-y; cursor: grab; }
.mk-js-swipe-carousel .track { display: flex; transition: transform .45s cubic-bezier(.2, .8, .2, 1); }
.mk-js-swipe-carousel .sl { flex: 0 0 100%; height: 96px; display: grid; place-items: center; font: 800 16px system-ui, sans-serif; color: #fff; }
.mk-js-swipe-carousel .sl:nth-child(1) { background: var(--mk-warn, #D99A00); }
.mk-js-swipe-carousel .sl:nth-child(2) { background: var(--mk-success, #1F9D55); }
.mk-js-swipe-carousel .sl:nth-child(3) { background: var(--mk-accent, #2F5BFF); }
.mk-js-swipe-carousel .sl:nth-child(4) { background: var(--mk-danger, #E5484D); }
.mk-js-swipe-carousel .dots { display: flex; justify-content: center; gap: 5px; padding-top: 7px; }
.mk-js-swipe-carousel .dots i { width: 6px; height: 6px; border-radius: 3px; background: var(--mk-line, #DCE0EA); transition: width .3s, background .3s; }
.mk-js-swipe-carousel .dots i.on { width: 16px; background: var(--mk-accent, #2F5BFF); }`,
  js: `var track = root.querySelector(".track"), dots = root.querySelector(".dots");
var n = track.children.length, cur = 0, x0 = null, dx = 0, lastUser = 0;
for (var i = 0; i < n; i++) dots.appendChild(document.createElement("i"));
function go(k) {
  cur = (k + n) % n;
  track.style.transform = "translateX(" + -cur * 100 + "%)";
  Array.prototype.forEach.call(dots.children, function (d, j) { d.classList.toggle("on", j === cur); });
}
root.addEventListener("pointerdown", function (e) {
  x0 = e.clientX; dx = 0; lastUser = Date.now();
  track.style.transition = "none";
  root.setPointerCapture(e.pointerId);
});
root.addEventListener("pointermove", function (e) {
  if (x0 === null) return;
  dx = e.clientX - x0;
  track.style.transform = "translateX(calc(" + -cur * 100 + "% + " + dx + "px))";
});
function release() {
  if (x0 === null) return;
  track.style.transition = "";
  go(Math.abs(dx) > 40 ? cur + (dx < 0 ? 1 : -1) : cur);
  x0 = null; lastUser = Date.now();
}
root.addEventListener("pointerup", release);
root.addEventListener("pointercancel", release);
go(0);
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  var timer = setInterval(function () {
    if (!root.isConnected) return clearInterval(timer);
    if (Date.now() - lastUser > 4000) go(cur + 1);
  }, 2400);
}` },
);
