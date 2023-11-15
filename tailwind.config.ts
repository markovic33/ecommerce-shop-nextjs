/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
                    
            "primary": "#eac188",
                    
            "secondary": "#037c7c",
                    
            "accent": "#e2b17c",
                    
            "neutral": "#17181c",
                    
            "base-100": "#f2f4f7",
                    
            "info": "#5182c8",
                    
            "success": "#118868",
                    
            "warning": "#984f06",
                    
            "error": "#ed789f",

            body: {
              "background-color": "#f2f4f7"
            },
                    },
                  },
                ],
              },
            }

