const ewayConfig = require("@eway-crm/eslint-config");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");

const typeScriptFiles = ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"];

module.exports = [
    ...ewayConfig,
    {
        name: "@eway-crm/eslint-config-react",
        files: typeScriptFiles,
        plugins: {
            react: reactPlugin,
            "react-hooks": reactHooksPlugin,
        },
        rules: {
            "react/self-closing-comp": "error",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
        },
    },
];
