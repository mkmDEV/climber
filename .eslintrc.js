module.exports = {
    env: {
        browser: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
        "prettier",
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:vue/strongly-recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "@vue/typescript/recommended",
    ],
    rules: {
        "prettier/prettier": ["error"],
        "vue/require-default-prop": 0,
        "vue/html-indent": ["error", 4],
        "vue/singleline-html-element-content-newline": 0,
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
    },
};
