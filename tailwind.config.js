/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        'gmarketSans': ['GmarketSansMedium', 'sans-serif'], // 'GmarketSansMedium' 폰트를 'gmarketSans' 이름으로 추가합니다.
      },

      colors: {
        'gradient_orange_1': '#FF6600',
        'gradient_orange_2': '#FF983F',
        'gradient_green_1': '#03C75C',
        'gradient_green_2': '#00C79C',
        // light_mode
        'light_bg': '#FFFFFF',
        'light_bg_sub': '#F0F0F0',
        'light_text': '#000000',
        'light_text_sub': '#A9A9A9',
        'light_light_green': '#7AC674',
        'light_green': '#4DA889',
        'light_light_blue': '#5382E6',
        'light_blue': '#1F4EF5',
        'light_red': '#D84432',
        'light_yellow' : '#FAEB69',
        'light_dark_yellow': '#FFD768',
        'light_violet': '#977de9',
        'light_grey': '#9295A4',
        'light_white': '#F4F5F7',
        'light_black': '#4C4C4C',
        // dark_mode
        'dark_bg': '#39393B',
        'dark_bg_sub': '#CCCCCC',
        'dark_text': '#FFFFFF',
        'dark_text_sub': '#FBFBFD',
        'dark_light_green': '#7AC674',
        'dark_green': '#3D7A74',
        'dark_light_blue': '#5382E6',
        'dark_blue': '#1F4EF5',
        'dark_red': '#DC6A6F',
        'dark_yellow' : '#E5D332',
        'dark_dark_yellow': '#EDA54B',
        'dark_violet': '#8667E5',
        'dark_grey': '#999999',
        'dark_white': '#F4F5F7',
        'dark_black': '#4C4C4C',
      }
    },
  },
  plugins: [],
}

