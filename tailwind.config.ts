import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxxs: ["0.5rem", "0.75rem"],
      xxs: ["0.625rem", "0.875rem"],
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      xxl: ["1.375rem", "1.75rem"],
      xxxl: ["1.5rem", "2rem"],
    },
    extend: {
      colors: {
        "primary-color": "#475569",
        "sub-color": "#2c3e50", // rbg: 44, 62, 80;
        // "sub-color" : "#17a658",
        "vivid-color": "#0284c7",
      },
      height: {
        "safari-screen": "100dvh",
      },
      backgroundImage: {
        // home
        tell01: "url('/img/tell01.webp')",
        town01: "url('/img/town01.webp')",
        town02: "url('/img/town02.webp')",
        service01: "url('/img/service01.webp')",
        equipment01: "url('/img/equipment01.webp')",
        equipment02: "url('/img/equipment02.webp')",
        cardboard01: "url('/img/cardboard01.webp')",
        cardboard02: "url('/img/cardboard02.webp')",
        factory01: "url('/img/factory01.webp')",
        // equipment
        PrinterSlotter: "url('/img/equipment/PrinterSlotter.webp')",
        RotarySlitterSmall: "url('/img/equipment/RotarySlitterSmall.webp')",
        RotarySlitterBig: "url('/img/equipment/RotarySlitterBig.webp')",
        Punch: "url('/img/equipment/Punch.webp')",
        SemiAutoGluer: "url('/img/equipment/SemiAutoGluer.webp')",
        ArmStitcher: "url('/img/equipment/ArmStitcher.webp')",
        BikkuPunching: "url('/img/equipment/BikkuPunching.webp')",
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
