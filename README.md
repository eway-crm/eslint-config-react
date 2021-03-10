![eWay-CRM Logo](https://www.eway-crm.com/wp-content/themes/eway/img/email/logo_grey.png)
# eWay-CRM ESLint Rules for React and TypeScript

## Installation

```
npm i --save-dev @eway-crm/eslint-config-react
```

## Configuration

Add configuration to your ```.eslintrc.json``` project file:

```
{
  "extends": ["@eway-crm/eslint-config-react"]
}
```

If your project is created using ```create-react-app``` the configuration should look like this:

```
{
  "extends": [
        "react-app",
        "@eway-crm/eslint-config-react"
    ]
}
```