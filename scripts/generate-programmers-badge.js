const fs = require("fs");
const path = require("path");

const root = path.join(process.cwd(), "프로그래머스");
const outputDir = path.join(process.cwd(), "badges");
const outputPath = path.join(outputDir, "programmers.svg");

function countProblems(level) {
  const dir = path.join(root, String(level));

  if (!fs.existsSync(dir)) return 0;

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory()).length;
}

const counts = {};

for (let level = 0; level <= 5; level++) {
  counts[level] = countProblems(level);
}

const total = Object.values(counts).reduce(
  (sum, count) => sum + count,
  0
);

fs.mkdirSync(outputDir, { recursive: true });

const lv3Plus = counts[3] + counts[4] + counts[5];

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="470" height="112" role="img" aria-label="Programmers solving stats">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#1f2937"/>
    </linearGradient>
  </defs>

  <rect width="470" height="112" rx="12" fill="url(#bg)"/>

  <text x="22" y="31"
        fill="#ffffff"
        font-family="Arial, sans-serif"
        font-size="18"
        font-weight="700">
    Programmers
  </text>

  <text x="448" y="31"
        text-anchor="end"
        fill="#9ca3af"
        font-family="Arial, sans-serif"
        font-size="13">
    JavaScript · ${total} solved
  </text>

  <line x1="22" y1="45" x2="448" y2="45" stroke="#374151"/>

  <text x="22" y="75" fill="#d1d5db" font-family="Arial, sans-serif" font-size="13">Lv.0</text>
  <text x="70" y="75" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="700">${counts[0]}</text>

  <text x="125" y="75" fill="#d1d5db" font-family="Arial, sans-serif" font-size="13">Lv.1</text>
  <text x="173" y="75" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="700">${counts[1]}</text>

  <text x="228" y="75" fill="#d1d5db" font-family="Arial, sans-serif" font-size="13">Lv.2</text>
  <text x="276" y="75" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="700">${counts[2]}</text>

  <text x="331" y="75" fill="#d1d5db" font-family="Arial, sans-serif" font-size="13">Lv.3+</text>
  <text x="387" y="75" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="700">${lv3Plus}</text>

  <text x="22" y="99"
        fill="#6b7280"
        font-family="Arial, sans-serif"
        font-size="11">
    Auto-updated from BaekjoonHub submissions
  </text>
</svg>
`;

fs.writeFileSync(outputPath, svg.trim(), "utf8");

console.log("Programmers badge generated");
console.log({ ...counts, total });
