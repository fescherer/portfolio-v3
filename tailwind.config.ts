import type { Config } from "tailwindcss";
import daisyui from "daisyui"
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { },
  },
  plugins: [
    daisyui,
    plugin(function ({addComponents, theme}) {
      addComponents({
        '.p': {
          marginTop: theme('spacing.2'),
          marginBottom: theme('spacing.2'),
          textAlign: 'justify',
          lineHeight: '1.375',
          textIndent: theme('spacing.4')
        }
      })
    })
  ],
  daisyui: {
    themes: ['emerald']
  }
};
export default config;
