module.exports = {
    content: ["./src/**/*.{html,vue,js}"],
    theme: {
        extend: {
            backdropBlur: {
                xs: "2px",
            },
            invert: {
                25: ".25",
                50: ".5",
                75: ".75",
            },
            transitionProperty: {
                height: "height",
                width: "width",
            },
            fontFamily: {},
            colors: {},
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
