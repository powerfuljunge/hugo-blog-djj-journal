module.exports = {
  content: ["./**/*.html", "./**/*.md", "config.toml"],
  safelist: [
    // Hugoが生成するTOC/本文装飾で使う可能性があるクラスやパターン
    'prose', 'prose-invert',
    { pattern: /prose-.*/ },
    // テーマが使うtoc系クラス（テーマ側のクラス名に合わせて調整）
    'toc', 'toc-title', 'toc-content'
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        warmgray: {
          700: "#2f3335",
          800: "#1e2022",
          900: "#181a1b",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
