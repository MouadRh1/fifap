/** @type {import ('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Assure-toi que tous les fichiers dans src sont scannés
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)",
      },
    },
    screens: {
      // => @media (max-width:1200px){...}
      lg: { min: "925px" },
    },
  },
  plugins: [],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
    },
  },
};
