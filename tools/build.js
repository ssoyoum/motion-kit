// 사용: node build.js <motion-kit.html> <출력 폴더>
const fs = require("fs"), path = require("path"), vm = require("vm");
const [src, out] = process.argv.slice(2);
const page = fs.readFileSync(src, "utf8");
const data = page.slice(page.indexOf("/*DATA*/"), page.indexOf("/*END*/"));
const ctx = {}; vm.runInNewContext(data + "\nthis.M = M;", ctx);
const M = ctx.M;
const ids = new Set(M.map(m => m.id));
if (ids.size !== M.length) throw new Error("중복 id");
const head = '<!doctype html>\n<html lang="ko">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n';
fs.mkdirSync(path.join(out, "motions"), { recursive: true });
fs.writeFileSync(path.join(out, "index.html"), head + page + "\n</html>\n");
const light = "--mk-accent:#2F5BFF;--mk-on-accent:#fff;--mk-ink:#1B1E26;--mk-on-ink:#fff;--mk-ink-soft:#8A90A0;--mk-bubble:#E3E7F0;--mk-danger:#E5484D;--mk-success:#1F9D55;--mk-skel-a:#E0E4EC;--mk-skel-b:#F4F5F8;--mk-warn:#D99A00;--mk-surface:#fff;--mk-line:#DCE0EA;--mk-stage:#ECEEF4";
const dark = "--mk-accent:#7B96FF;--mk-on-accent:#0E1015;--mk-ink:#E8EAF0;--mk-on-ink:#11131A;--mk-ink-soft:#8C93A5;--mk-bubble:#2A2F3D;--mk-danger:#FF6B70;--mk-success:#3DD68C;--mk-skel-a:#242938;--mk-skel-b:#313849;--mk-warn:#F5C04A;--mk-surface:#161922;--mk-line:#2A2F3C;--mk-stage:#1D212C";
const list = [];
M.forEach((m, i) => {
  const file = `${String(i + 1).padStart(3, "0")}-${m.id}.html`;
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
${m.html}
</body>
</html>
`);
});
fs.writeFileSync(path.join(out, "목록.txt"), `프론트 모션 키트 ${M.length}종\nindex.html = 전체 갤러리, motions/ = 하나씩 따로 연 파일\n\n${list.join("\n")}\n`, "utf8");
console.log(M.length, "개 생성 →", out);
