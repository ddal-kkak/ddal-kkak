/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          10: "var(--gray-10)",
          20: "var(--gray-20)",
          30: "var(--gray-30)",
          40: "var(--gray-40)",
          50: "var(--gray-50)",
          60: "var(--gray-60)",
          70: "var(--gray-70)",
          80: "var(--gray-80)",
          90: "var(--gray-90)",
        },
        green: {
          10: "var(--green-10)",
          50: "var(--green-50)",
          90: "var(--green-90)",
        },
        mint: {
          10: "var(--mint-10)",
          50: "var(--mint-50)",
          90: "var(--mint-90)",
        },
        blue: {
          10: "var(--blue-10)",
          50: "var(--blue-50)",
          90: "var(--blue-90)",
        },
        red: {
          10: "var(--red-10)",
          50: "var(--red-50)",
          90: "var(--red-90)",
        },

        ui: {
          "00": "var(--ui-00)",
          "01": "var(--ui-01)",
          "02": "var(--ui-02)",
          "03": "var(--ui-03)",
          "04": "var(--ui-04)",
          "05": "var(--ui-05)",
          "06": "var(--ui-06)",
          "07": "var(--ui-07)",
        },

        line: {
          "01": "var(--line-01)",
          "02": "var(--line-02)",
        },

        bg: {
          "01": "var(--bg-01)",
          "02": "var(--bg-02)",
          "03": "var(--bg-03)",
        },

        brand: {
          "01": "var(--brand-01)",
          "02": "var(--brand-02)",
        },
        primary: {
          "01": "var(--primary-01)",
          "02": "var(--primary-02)",
        },
        secondary: {
          "01": "var(--secondary-01)",
          "02": "var(--secondary-02)",
        },
        error: {
          "01": "var(--error-01)",
          "02": "var(--error-02)",
        },
      },

      // fontSize
      fontSize: {
        headline60: [
          "3.75rem",
          {
            lineHeight: "5rem",
            fontWeight: "700",
          },
        ],
        headline48: [
          "3rem",
          {
            lineHeight: "4rem",
            fontWeight: "700",
          },
        ],
        headline30: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "700",
          },
        ],
        headline24: [
          "1.5rem",
          {
            lineHeight: "2rem",
            fontWeight: "700",
          },
        ],
        headline18: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "700",
          },
        ],
        headline15: [
          "0.9375rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "600",
          },
        ],
        headline14: [
          "0.875rem",
          {
            lineHeight: "1.125rem",
            fontWeight: "600",
          },
        ],
        button18: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "600",
          },
        ],
        button15: [
          "0.9375rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "600",
          },
        ],
        button14: [
          "0.875rem",
          {
            lineHeight: "1.125rem",
            fontWeight: "600",
          },
        ],
        button12: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "600",
          },
        ],
        title18: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "500",
          },
        ],
        title15: [
          "0.9375rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "500",
          },
        ],
        title14: [
          "0.875rem",
          {
            lineHeight: "1.125rem",
            fontWeight: "500",
          },
        ],
        title12: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "500",
          },
        ],
        body18: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        body15: [
          "0.9375rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        body14: [
          "0.875rem",
          {
            lineHeight: "1.125rem",
            fontWeight: "400",
          },
        ],
        body12: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "400",
          },
        ],
      },
    },
  },
  plugins: [],
};
