const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],
    theme: {
        extend: {
            colors: {
                sky: colors.sky,
                cyan: colors.cyan,
                lightblue: colors.lightblue,
                fontFamily: {
                    sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                },
            },
        },

        variants: {
            extend: {
                opacity: ['disabled'],
            },
        },

        plugins: [require('@tailwindcss/forms')],
    },
};