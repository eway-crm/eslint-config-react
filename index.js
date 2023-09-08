module.exports = {
    "plugins": [
        "react",
        "react-hooks"
    ],
    "extends": [
        "@eway-crm/eslint-config",
    ],
    "rules": {
        "react/self-closing-comp": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error"
    }
};