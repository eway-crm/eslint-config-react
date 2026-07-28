const ewayConfig = require("@eway-crm/eslint-config");
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");

const typeScriptFiles = ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"];

module.exports = [
    ...ewayConfig,
    {
        name: "@eway-crm/eslint-config-react",
        files: typeScriptFiles,
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    args: "none",
                    ignoreRestSiblings: true,
                    caughtErrors: "none",
                },
            ],
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true,
                },
            ],
        },
    },
    {
        name: "@eway-crm/eslint-config-react/react",
        files: typeScriptFiles,
        plugins: {
            react: reactPlugin,
        },
        rules: {
            "react/self-closing-comp": "error",
            "react/jsx-key": "error",
            "react/jsx-no-comment-textnodes": "warn",
            "react/jsx-no-duplicate-props": "warn",
            "react/jsx-no-target-blank": "warn",
            "react/jsx-no-undef": "error",
            "react/jsx-pascal-case": ["warn", { allowAllCaps: true, ignore: [] }],
            "react/no-children-prop": "error",
            "react/no-danger-with-children": "warn",
            "react/no-deprecated": "error",
            "react/no-direct-mutation-state": "warn",
            "react/no-find-dom-node": "error",
            "react/no-is-mounted": "warn",
            "react/no-render-return-value": "error",
            "react/no-string-refs": "error",
            "react/no-typos": "error",
            "react/no-unescaped-entities": "error",
            "react/no-unknown-property": "error",
            "react/require-render-return": "error",
        },
    },
    {
        name: "@eway-crm/eslint-config-react/react-hooks",
        files: typeScriptFiles,
        plugins: {
            "react-hooks": reactHooksPlugin,
        },
        rules: {
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": [
                "error",
                {
                    additionalHooks: "(useMemoWithCheckPrevDeps|useCallbackWithCheckPrevDeps)",
                },
            ],
        },
    },
];
