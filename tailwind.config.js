/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                bodoni: ['Libre Bodoni', 'serif'],
                mplus: ['"M PLUS 1', 'sans-serif'],
                letterSpacing: {
                    wider: '0.05em',
                    widest: '0.1em',
                },
            },
        },
    },
    plugins: [],
};
