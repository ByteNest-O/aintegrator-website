/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,ts,scss}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                md: '2rem',
                lg: '2.5rem',
                xl: '3rem',
                '2xl': '4rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1440px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
            },
            spacing: {
                '0': '0px',
                '0.5': '0.125rem',
                '1': '0.25rem',
                '1.5': '0.375rem',
                '2': '0.5rem',
                '2.5': '0.625rem',
                '3': '0.75rem',
                '3.5': '0.875rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '7': '1.75rem',
                '8': '2rem',
                '9': '2.25rem',
                '10': '2.5rem',
                '11': '2.75rem',
                '12': '3rem',
                '14': '3.5rem',
                '16': '4rem',
                '20': '5rem',
                '24': '6rem',
                '28': '7rem',
                '32': '8rem',
                '36': '9rem',
                '37': '9.25rem',   // 148px — block spacing
                '40': '10rem',
                '44': '11rem',
                '48': '12rem',
                '49': '12.25rem',  // 196px — section spacing
                '52': '13rem',
                '56': '14rem',
                '60': '15rem',
                '64': '16rem',
                '72': '18rem',     // 71.5rem = 1144px content width
                '80': '20rem',
                '96': '24rem',
                '128': '32rem',
                '256': '64rem',
            },
            maxWidth: {
                'site': '1144px',  // Design grid content width
            },
            screens: {
                'xs': '375px',
                '3xl': '1920px',
            },
        },
    },
    plugins: [],
};
