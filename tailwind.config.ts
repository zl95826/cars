import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;
//In the context of a Tailwind CSS configuration file,
//you typically define background images relative to the public directory without including /public in the URL.
//This is because the public directory is the root directory for publicly accessible files in a Next.js application.
//When you specify a URL without the /public prefix,
//Tailwind CSS assumes that the path is relative to the public directory by default.

//In JavaScript, object keys can be defined without quotes if they are valid identifiers (consist of letters, digits, underscores, and dollar signs, and don't start with a digit).
//If a key doesn't follow the rules of a valid identifier, it should be enclosed in quotes.
//The key pattern is a valid identifier.On the other hand, hero-bg includes a hyphen, making it an invalid identifier,
//so it is enclosed in quotes to define it as a string key.
