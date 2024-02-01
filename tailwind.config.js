/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

export default {
    content: [
        "src/**/*.{html,js}",
        "./node_modules/@nextui-org/theme/dist/components/button.js",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#e9781c",
                    '50': '#fef8ee',
                    '100': '#fceed8',
                    '200': '#f8dab0',
                    '300': '#f4bf7d',
                    '400': '#ee9949',
                    '500': '#e9781c',
                    '600': '#db651b',
                    '700': '#b64c18',
                    '800': '#913e1b',
                    '900': '#753419',
                    '950': '#3f180b',
                },
                success: {
                    DEFAULT: "#17c964",
                    50: "#e8faf0",
                    100: "#d1f4e0",
                    200: "#a2e9c1",
                    300: "#74dfa2",
                    400: "#45d483",
                    500: "#17c964",
                    600: "#12a150",
                    700: "#0e793c",
                    800: "#095028",
                    900: "#052814"
                }
            },
            fontSize: {
                xxs: ['0.68rem', '.8rem'],
                s: "0.813rem",
                m: ['0.9rem', '1.3rem'],

            },
        },
    },
    plugins: [
        nextui(),
    ],
}

