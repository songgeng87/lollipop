/** @type {import('tailwindcss').Config} */
export default {
    content: ["./app.vue",
        "./pages/**/*.{vue,js,ts,jsx,tsx}", 
        "./components/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [

        require('@assets/css/tailwind.css'),
    ],
}

