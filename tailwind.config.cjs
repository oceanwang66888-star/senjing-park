/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // 主色：森林绿（国际高端景区基调）
        primary: {
          50: '#F2F7F1',
          100: '#E2EFE0',
          200: '#C1DFBE',
          300: '#93C88E',
          400: '#5DA855',
          500: '#2D5A27',
          600: '#244A20',
          700: '#1C3A19',
          800: '#152B13',
          900: '#0E1C0C',
          DEFAULT: '#2D5A27',
        },
        // 辅色：大地棕
        secondary: {
          50: '#FDF8F3',
          100: '#F5ECE0',
          200: '#E8D5BF',
          300: '#C9A87E',
          400: '#A87A4A',
          500: '#8B4513',
          600: '#6E370F',
          700: '#52290B',
          800: '#371C08',
          900: '#1F0F04',
          DEFAULT: '#8B4513',
        },
        // 活力橙（CTA / 高亮）
        accent: {
          50: '#FFF5F0',
          100: '#FFE8DB',
          200: '#FFCBB0',
          300: '#FFA57A',
          400: '#FF7A42',
          500: '#FF6B35',
          600: '#E05528',
          700: '#B8421D',
          800: '#8C3014',
          900: '#5C1E0C',
          DEFAULT: '#FF6B35',
        },
        // 金色点缀（高端感）
        gold: {
          100: '#FDF6E8',
          200: '#FAEBC4',
          300: '#EFD28A',
          400: '#D4AF37',
          500: '#B8943D',
          600: '#9A7B30',
          700: '#7A6023',
        },
        // 暖白/奶油色（替换纯白背景）
        cream: {
          50: '#FEFCF6',
          100: '#FDF8F0',
          200: '#FBF3E4',
          300: '#F5EDDA',
        },
        // 深暖灰/棕灰（替换纯黑文字）
        warm: {
          900: '#1F1A16',
          800: '#2C2420',
          700: '#3D352F',
          600: '#4A4036',
          500: '#6B5E52',
          400: '#8C7E70',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Noto Serif SC"', '"Source Han Serif SC"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(44,36,32,0.04), 0 1px 2px rgba(44,36,32,0.03)',
        'soft': '0 2px 8px rgba(44,36,32,0.05), 0 1px 3px rgba(44,36,32,0.03)',
        'soft-md': '0 4px 16px rgba(44,36,32,0.06), 0 2px 4px rgba(44,36,32,0.03)',
        'soft-lg': '0 8px 32px rgba(44,36,32,0.07), 0 3px 6px rgba(44,36,32,0.03)',
        'soft-xl': '0 16px 48px rgba(44,36,32,0.08), 0 4px 8px rgba(44,36,32,0.03)',
        'card': '0 1px 2px rgba(44,36,32,0.04), 0 4px 12px rgba(44,36,32,0.04)',
        'card-hover': '0 2px 4px rgba(44,36,32,0.04), 0 8px 24px rgba(44,36,32,0.06)',
      },
      borderRadius: {
        '2lg': '0.625rem',
        '3lg': '0.875rem',
        '4xl': '1.25rem',
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
