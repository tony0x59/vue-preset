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

    api.extendPackage(pkg);
}