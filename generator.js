module.exports = (api, options, rootOptions) => {
    const pkg = {
        // package.json
        // publicPath: ''
        browserslist: [
            "last 2 versions",
            "> 1%",
            "not IE_Mob <= 11",
            "not OperaMini all",
            "not dead"
        ],
        devDependencies: {}
    }

    // add eslint compat
    Object.assign(pkg.devDependencies, {
        "eslint-plugin-compat": "^3.1.1"
    })
    pkg.eslintConfig = {
        env: {browser: true},
        extends: ['plugin:compat/recommended']
    }

    // add postcss-px-to-viewport
    Object.assign(pkg.devDependencies, {
        "postcss-px-to-viewport": "^1.1.0"
    })
    pkg.postcss = {
        plugins: {
            'postcss-px-to-viewport': {
                viewportWidth: 750,
                landscapeWidth: 1334,
                unitPrecision: 3,
                selectorBlackList: ['.use-pixel']
            }
        }
    }

    api.extendPackage(pkg);
}