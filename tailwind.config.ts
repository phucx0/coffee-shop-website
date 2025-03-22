import type { Config } from "tailwindcss";
const {heroui} = require("@heroui/react");
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        title: 'var(--textTitle)',
        caption: 'var(--fontCaption)',
        bodyLarge: 'var(--fontBodyLarge)',  // Nội dung chính
        bodyMedium: 'var(--fontBodyMedium)', // Nội dung phụ
        bodySmall: 'var(--fontBodySmall)',  // Ghi chú nhỏ
        label: 'var(--fontLabel)',
      },
      boxShadow: {
        100: ''
        // 100: '0px 0px 5px 0px rgba(0, 0, 0, 0.116)'
      },
      colors: {
        primary: {
          100 : '#D0EFFF',
          200 : '#FFD700',
          300 : '#FFC04B',
          400 : '#FFB732',
          900 : '#FFD70040'
        },
        secondary: {
          200: '#1B1B1B',
          300: '#1C1C1C',
          400: '#141414'
        }
      },
      screens: {
        'phone' : '0px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      fontFamily: {
        'anton' : ["Anton", 'serif'],
        'playfair' : ["Playfair Display SC", 'serif'],
        'merriweather' : ["Merriweather", 'serif']
      }
    },
  },
  plugins: [heroui()],
} satisfies Config;
