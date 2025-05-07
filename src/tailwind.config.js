export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                'scroll-text': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            animation: {
                'scroll-text': 'scroll-text 6s linear infinite',
            },
        },
    },
    plugins: [],
}
