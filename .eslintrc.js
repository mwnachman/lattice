module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "root": true,
  "rules": {
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "react/jsx-curly-spacing": [
      "error",
      "never",
      { "allowMultiline": false }
    ],
    "react/jsx-key": [
      "error"
    ],
    "react/jsx-max-props-per-line": [
      "error",
      { "maximum": 2 }
    ],
    "react/no-unused-prop-types": [
      "error"
    ],
    "react/prefer-stateless-function": [
      "error"
    ],
    "react/jsx-wrap-multilines": [
      "error"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "no-console": [
      "error",
      { "allow": [
          "warn",
          "error"
        ]
      }
    ]
  },
  "settings": {
    "react": {
      "version": "16.13.0"
    }
  }
};