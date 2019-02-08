const defaultConfig = {
    presets: [
        ['@babel/env', {targets: ['last 2 versions', 'ie >= 11']}],
        '@babel/react',
        '@babel/flow',
    ],
    plugins: [
        'react-hot-loader/babel',
        'array-includes',
        'es6-promise',
        '@babel/transform-runtime',
        '@babel/proposal-function-bind',
        '@babel/proposal-class-properties',
        ['@babel/proposal-decorators', {decoratorsBeforeExport: false}],
        '@babel/proposal-do-expressions',
        '@babel/proposal-export-default-from',
        '@babel/proposal-export-namespace-from',
        '@babel/proposal-function-sent',
        '@babel/proposal-json-strings',
        '@babel/proposal-logical-assignment-operators',
        '@babel/proposal-nullish-coalescing-operator',
        '@babel/proposal-numeric-separator',
        '@babel/proposal-object-rest-spread',
        '@babel/proposal-optional-chaining',
        ['@babel/proposal-pipeline-operator', {proposal: 'minimal'}],
        '@babel/proposal-throw-expressions',
        '@babel/syntax-dynamic-import',
        '@babel/syntax-import-meta',
        '@babel/transform-flow-strip-types',
    ],
};

module.exports = {
    ...defaultConfig,
    env: {
        test: {
            presets: defaultConfig.presets,
            plugins: ['dynamic-import-node', ...defaultConfig.plugins, 'jest-hoist'],
        },
    },
};
