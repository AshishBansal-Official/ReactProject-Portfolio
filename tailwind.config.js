/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            boxShadow: {
                "app-base":
                    "0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px rgba(0, 0, 0, 0.478)",
            },
        },
    },
    plugins: [],
};
