/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  // theme: {
  //   fontSize: {
  //     ...defaultTheme.fontSize,
  //     h1: [
  //       '30px',
  //       {
  //         lineHeight: '38px',
  //         fontWeight: '700',
  //       },
  //     ],
  //     h2: [
  //       '24px',
  //       {
  //         lineHeight: '32px',
  //         fontWeight: '700',
  //       },
  //     ],
  //     h3: [
  //       '20px',
  //       {
  //         lineHeight: '28px',
  //         fontWeight: '700',
  //       },
  //     ],
  //     sub1: [
  //       '18px',
  //       {
  //         lineHeight: '26px',
  //         fontWeight: '600',
  //       },
  //     ],
  //     sub2: [
  //       '16px',
  //       {
  //         lineHeight: '24px',
  //         fontWeight: '600',
  //       },
  //     ],
  //     sub3: [
  //       '14px',
  //       {
  //         lineHeight: '20px',
  //         fontWeight: '600',
  //       },
  //     ],
  //     body1: [
  //       '16px',
  //       {
  //         lineHeight: '24px',
  //         fontWeight: '400',
  //       },
  //     ],
  //     body2: [
  //       '14px',
  //       {
  //         lineHeight: '20px',
  //         fontWeight: '400',
  //       },
  //     ],
  //     caption1: [
  //       '12px',
  //       {
  //         lineHeight: '16px',
  //         fontWeight: '400',
  //       },
  //     ],
  //   },
  // },
  plugins: [require('@ddal-kkak/tailwind-config/tailwind.config')],
}
