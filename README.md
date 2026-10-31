# Motion Kit

프론트엔드에 바로 붙여 쓰는 CSS 애니메이션 111종. 라이브러리 없이 HTML과 CSS만 씁니다.

- 갤러리: https://ssoyoum.github.io/motion-kit/
- 하나씩 보기: [`motions/`](motions/) (모션마다 완성된 HTML 한 파일)
- 전체 목록: [`목록.txt`](목록.txt)

| 분류 | 수 |
|---|---|
| 로딩 | 24 |
| 채팅 | 10 |
| 피드백 | 13 |
| 텍스트 | 16 |
| 주목 | 13 |
| 전환 | 16 |
| 아이콘 | 7 |
| 차트 | 4 |
| 배경 | 7 |
| 3D | 4 |

## 쓰는 법
1. 갤러리에서 고르고 **HTML+CSS 복사**를 누르거나, `motions/` 파일을 엽니다.
2. 색은 CSS 변수로 바꿉니다: `--mk-accent`, `--mk-ink`, `--mk-danger`, `--mk-success`, `--mk-warn` 등. 변수가 없으면 기본색이 들어갑니다.
3. 미리보기는 무한 반복입니다. 한 번만 재생하려면 `infinite`를 지웁니다.
4. 실제 서비스에서는 `@media (prefers-reduced-motion: reduce)`로 끄는 것을 권합니다.

## 고치고 다시 만들기
모션 정의는 `src/motion-kit.html`의 `/*DATA*/ … /*END*/` 사이에 있습니다. 고친 뒤:

```
node tools/build.js src/motion-kit.html .
```

`index.html`, `motions/`, `목록.txt`가 다시 만들어집니다.
