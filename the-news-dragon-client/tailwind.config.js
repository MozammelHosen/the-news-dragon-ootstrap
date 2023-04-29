/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c4ef73",

          secondary: "#d466e2",

          accent: "#f260ea",

          neutral: "#272C3A",

          "base-100": "#FFFFFF",

          info: "#94A6E5",

          success: "#2FC6B7",

          warning: "#ECBA46",

          error: "#DD3660",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
