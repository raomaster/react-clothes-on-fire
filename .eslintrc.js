module.exports = {
    parser: 'babel-eslint',
    extends: ["react-app"],
    env: {
        browser: true,
        jest: true
    },
    plugins: [
        'react', 'jsx-a11y', 'import', 'prettier'
    ],
    rules: {
        // 'max-len': [     'error', 100 ], 'no-underscore-dangle': [     'error', {
        // allow: ['_id']     } ], 'prefer-destructuring': [     'error', {
        // VariableDeclarator: {             array: false,             object: true },
        //   AssignmentExpression: {             array: true, object: false     }  }, {
        //        enforceForRenamedProperties: false   } ],
        // 'import/prefer-default-export': 'off', 'jsx-a11y/anchor-is-valid': 'off',
        // 'react/react-in-jsx-scope': 'off', "react/prop-types": [     0, { "ignore":
        // "ignore",         "customValidators": "customValidator"     } ],
        // 'react/jsx-filename-extension': [     'error', {         extensions: ['.js']
        // } ], "react/prefer-stateless-function": 0
        "prettier/prettier": ["error", { "singleQuote": true }]
    }
};