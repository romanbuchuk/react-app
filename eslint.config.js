import js from '@eslint/js';
import simpleImport from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
    eslintPluginUnicorn.configs['flat/recommended'],
    simpleImport.flatConfigs.recommended,
    { ignores: ['dist'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: {
            react: {
                version: '18.3',
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx'],
                },
            },
            'import/ignore': ['vite'],
        },
        plugins: {
            'simple-import-sort': simpleImportSort,
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'unicorn/filename-case': [
                'error',
                {
                    cases: {
                        camelCase: true,
                        pascalCase: true,
                    },
                },
            ],
            'unicorn/no-empty-file': 'off',
            'simple-import-sort/exports': 'error',
            'simple-import-sort/imports': 'error',
            'import/namespace': [2, { allowComputed: true }],
            'import/first': 'error',
            'import/newline-after-import': 'error',
        },
    },
    {
        files: ['*rc.js', '*.config.js'],
        rules: {
            'unicorn/prefer-module': 'off',
            'unicorn/filename-case': 'off',
        },
    },
    eslintPluginPrettierRecommended,
];
