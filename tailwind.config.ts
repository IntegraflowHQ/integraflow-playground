import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-button':
          'linear-gradient(27deg, #53389E 8.33%, #6941C6 91.67%)',
        'gradient-button-hover':
          'linear-gradient(27deg, #299532 8.33%, #7EE787 91.67%)',
      },
    },
  },
  plugins: [],
};
export default config;
