module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        deep_orange_50: "#ffe5e6",
        bluegray_50: "#ebeff3",
        gray_400: "#bbbcbc",
        gray_202: "#eaeaea",
        red_700: "#da1e28",
        red_600: "#e93c40",
        indigo_50: "#e4e8eb",
        light_green_A700: "#29d000",
        orange_800: "#eb6200",
        indigo_A200: "#5d5fef",
        amber_100: "#f6efab",
        gray_200: "#e5e8eb",
        gray_201: "#eaebeb",
        gray_50: "#f9f8f9",
        blue_50: "#e5f3ff",
        gray_100: "#f5f7f9",
        bluegray_900: "#12344d",
        bluegray_700: "#39566b",
        orange_50: "#fff0e5",
        bluegray_200: "#b0bbc4",
        light_blue_A700: "#008cff",
        light_green_50: "#f0ffe5",
        white_A700: "#ffffff",
        bluegray_901: "#2d2f30",
      },
      borderRadius: {
        radius4: "4px",
        radius192: "19.2px",
        radius2132: "21.32px",
      },
      fontFamily: { sourcesanspro: "Source Sans Pro", inter: "Inter" },
      borderWidth: { bw05: "0.5px" },
      letterSpacing: { ls1: "1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
