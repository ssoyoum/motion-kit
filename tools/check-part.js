// 사용: node tools/check-part.js src/parts/<파일>.js
// 기본 모션 + 이 파트만 읽어 문법·id 중복·분류·keyframes 이름 충돌을 검사한다.
const fs = require("fs"), path = require("path"), vm = require("vm");
const part = process.argv[2];
const src = path.join(__dirname, "..", "src", "motion-kit.html");
const raw = fs.readFileSync(src, "utf8").replace("/*PARTS*/", "/*PARTS*/\nconst __BASE = M.length;\n" + fs.readFileSync(part, "utf8"));
const data = raw.slice(raw.indexOf("/*DATA*/"), raw.indexOf("/*END*/"));
const ctx = {}; vm.runInNewContext(data + "\nthis.M = M; this.ORDER = ORDER; this.BASE = __BASE;", ctx);
const { M, ORDER, BASE } = ctx;
const errs = [], ids = new Set(), kf = new Map();
M.forEach((m, i) => {
  for (const k of ["id", "cat", "name", "use", "meta", "html", "css"]) if (!m[k]) errs.push(`${m.id || i}: ${k} 없음`);
  if (ids.has(m.id)) errs.push("중복 id: " + m.id); ids.add(m.id);
  if (!ORDER.includes(m.cat)) errs.push(`${m.id}: 모르는 분류 ${m.cat}`);
  for (const [, name] of (m.css || "").matchAll(/@keyframes\s+([\w-]+)/g)) {
    if (kf.has(name) && kf.get(name) !== m.id) errs.push(`keyframes 이름 충돌: ${name} (${kf.get(name)} / ${m.id})`);
    kf.set(name, m.id);
  }
});
const mine = M.length - BASE;
if (errs.length) { console.log("실패\n" + errs.join("\n")); process.exit(1); }
console.log(`통과: 이 파트 ${mine}개 (전체 ${M.length}개)`);
