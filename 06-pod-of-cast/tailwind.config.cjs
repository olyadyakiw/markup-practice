/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.scss'],
    theme: {
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1200px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        fontFamily: {
            body: 'MontserratAlternates',
        },
        boxShadow: {
            btn: '3px 3px 0px 0px rgba(0, 0, 0, 0.25);',
        },
        container: {
            center: true,
            padding: '20px',
        },
        colors: {
            inherit: 'inherit',
            current: 'currentColor',
            transparent: 'transparent',
            black: '#000000',
            white: '#ffffff',
            gray: {
                300: '#f7fafc',
                400: '#4D4D4D',
                600: '#244000',
                900: '#1a202c',
            },
            red: '#CD4631',
            green: '#008000',
            blue: '#0000FF',
            champagne: '#F7EDE8',
        },
        extend: {
            spacing: {
                100: '100px',
            },
        },
    },
    purge: {
        enabled: false,
    },
    plugins: [],
}
