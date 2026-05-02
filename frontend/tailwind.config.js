/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fdf3f0',
                    100: '#fbe4dc',
                    200: '#f8c8ba',
                    300: '#f4a18a',
                    400: '#f27c5e',
                    500: '#f05a28', // The iconic warm red/orange
                    600: '#e04715',
                    700: '#bb380e',
                    800: '#962b0c',
                    900: '#7c250b',
                },
                accent: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#0ea5e9', // Blue - For contrast
                    600: '#0284c7',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                'premium': '0 20px 50px -12px rgba(240, 90, 40, 0.15)',
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
}
