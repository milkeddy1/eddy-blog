/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        dark: {
          css: {
            "--tw-prose-body": theme("colors.gray[50]"),
            "--tw-prose-headings": theme("colors.gray[50]"),
            "--tw-prose-lead": theme("colors.gray[50]"),
            "--tw-prose-links": theme("colors.gray[50]"),
            "--tw-prose-bold": theme("colors.gray[50]"),
            "--tw-prose-counters": theme("colors.gray[50]"),
            "--tw-prose-bullets": theme("colors.gray[50]"),
            "--tw-prose-hr": theme("colors.gray[50]"),
            "--tw-prose-quotes": theme("colors.gray[50]"),
            "--tw-prose-quote-borders": theme("colors.gray[50]"),
            "--tw-prose-captions": theme("colors.gray[50]"),
            "--tw-prose-code": theme("colors.green[500]"),
            "--tw-prose-code-bg": theme("colors.green[500]"),
            "--tw-prose-pre-code": theme("colors.gray[500]"),
            "--tw-prose-pre-bg": theme("colors.gray[50]"),
            "--tw-prose-th-borders": theme("colors.gray[50]"),
            "--tw-prose-td-borders": theme("colors.gray[50]"),
            code: {
              color: "#f87171",
              borderRadius: "5px",
              padding: ".25rem .5rem",
            },
            "code::before": {
              display: "none",
            },
            "code::after": {
              display: "none",
            },
            pre: {
              code: {
                padding: "0",
                color: "#4e4e54",
              },
            },
          },
        },
        light: {
          css: {
            "--tw-prose-body": theme("colors.gray[800]"),
            "--tw-prose-headings": theme("colors.gray[800]"),
            "--tw-prose-lead": theme("colors.gray[800]"),
            "--tw-prose-links": theme("colors.gray[800]"),
            "--tw-prose-bold": theme("colors.gray[800]"),
            "--tw-prose-counters": theme("colors.gray[800]"),
            "--tw-prose-bullets": theme("colors.gray[800]"),
            "--tw-prose-hr": theme("colors.gray[800]"),
            "--tw-prose-quotes": theme("colors.gray[800]"),
            "--tw-prose-quote-borders": theme("colors.gray[800]"),
            "--tw-prose-captions": theme("colors.gray[800]"),
            "--tw-prose-code": theme("colors.gray[800]"),
            "--tw-prose-pre-code": theme("colors.gray[800]"),
            "--tw-prose-pre-bg": theme("colors.gray[800]"),
            "--tw-prose-th-borders": theme("colors.gray[800]"),
            "--tw-prose-td-borders": theme("colors.gray[800]"),
            code: {
              color: "#f87171",
              borderRadius: "5px",
              padding: ".25rem .5rem",
            },
            "code::before": {
              display: "none",
            },
            "code::after": {
              display: "none",
            },
            pre: {
              code: {
                padding: "0",
                color: "white",
              },
            },
          },
        },
      }),
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       color: "#15803d",
      //       code: {
      //         color: "red",
      //         backgroundColor: "blue",
      //       },
      //     },
      //   },
      // },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
