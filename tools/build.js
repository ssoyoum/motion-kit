// 사용: node tools/build.js src/motion-kit.html <출력 폴더> [아티팩트용 조각 경로]
// src/parts/*.js 를 /*PARTS*/ 자리에 이어 붙인 뒤 index.html, motions/, 목록.txt 를 만든다.
const fs = require("fs"), path = require("path"), vm = require("vm");
const [src, out, fragOut] = process.argv.slice(2);
const partsDir = path.join(path.dirname(src), "parts");
const parts = fs.existsSync(partsDir)
  ? fs.readdirSync(partsDir).filter(f => f.endsWith(".js")).sort().map(f => fs.readFileSync(path.join(partsDir, f), "utf8")).join("\n")
  : "";
const page = fs.readFileSync(src, "utf8").replace("/*PARTS*/", "/*PARTS*/\n" + parts);
const data = page.slice(page.indexOf("/*DATA*/"), page.indexOf("/*END*/"));
const ctx = {}; vm.runInNewContext(data + "\nthis.M = M; this.ORDER = ORDER;", ctx);
const { M, ORDER } = ctx;
const ids = new Set();
for (const m of M) {
  if (ids.has(m.id)) throw new Error("중복 id: " + m.id);
  if (!ORDER.includes(m.cat)) throw new Error("모르는 분류: " + m.cat + " (" + m.id + ")");
  ids.add(m.id);
}
const head = '<!doctype html>\n<html lang="ko">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n';
fs.rmSync(path.join(out, "motions"), { recursive: true, force: true });
fs.mkdirSync(path.join(out, "motions"), { recursive: true });
fs.writeFileSync(path.join(out, "index.html"), head + page + "\n</html>\n");
if (fragOut) fs.writeFileSync(fragOut, page);
const light = "--mk-accent:#2F5BFF;--mk-on-accent:#fff;--mk-ink:#1B1E26;--mk-on-ink:#fff;--mk-ink-soft:#8A90A0;--mk-bubble:#E3E7F0;--mk-danger:#E5484D;--mk-success:#1F9D55;--mk-skel-a:#E0E4EC;--mk-skel-b:#F4F5F8;--mk-warn:#D99A00;--mk-surface:#fff;--mk-line:#DCE0EA;--mk-stage:#ECEEF4";
const dark = "--mk-accent:#7B96FF;--mk-on-accent:#0E1015;--mk-ink:#E8EAF0;--mk-on-ink:#11131A;--mk-ink-soft:#8C93A5;--mk-bubble:#2A2F3D;--mk-danger:#FF6B70;--mk-success:#3DD68C;--mk-skel-a:#242938;--mk-skel-b:#313849;--mk-warn:#F5C04A;--mk-surface:#161922;--mk-line:#2A2F3C;--mk-stage:#1D212C";
const list = [];
const count = {};
M.forEach((m, i) => {
  count[m.cat] = (count[m.cat] || 0) + 1;
  const file = `${String(i + 1).padStart(3, "0")}-${m.id}.html`;
  const js = m.js ? `
<script>
document.querySelectorAll(".mk-${m.id}").forEach(function (root) {
${m.js.trim()}
});
</script>` : "";
  list.push(`- ${file}  [${m.cat}] ${m.name} — ${m.use}`);
  fs.writeFileSync(path.join(out, "motions", file), `${head}<title>${m.name}</title>
<style>
/* 색은 아래 변수만 바꾸면 됩니다 */
:root { ${light}; }
@media (prefers-color-scheme: dark) { :root { ${dark}; color-scheme: dark; } }
* { box-sizing: border-box; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: var(--mk-stage); color: var(--mk-ink); font-family: system-ui, sans-serif; }

/* ${m.name} · ${m.meta} */
${m.css}
</style>
</head>
<body>
${m.html}${js}
</body>
</html>
`);
});
const summary = ORDER.filter(c => count[c]).map(c => `${c} ${count[c]}`).join(" · ");
fs.writeFileSync(path.join(out, "목록.txt"), `프론트 모션 키트 ${M.length}종\n${summary}\nindex.html = 전체 갤러리, motions/ = 하나씩 따로 연 파일\n\n${list.join("\n")}\n`, "utf8");
console.log(M.length, "개 생성 →", out, "\n" + summary);
