/** @type {import("tailwindcss").Config} */
export default {
    darkMode: ["selector", "[data-theme='dark']"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            zIndex: {
                "top": "9999"
            },
            colors: {
                "primary": "#1890ff",
                "primary-dark": "#142844",
            },
        },
    },
    plugins: [],
};

