module.exports = {
    mode: 'production',
    entry: './public/js/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/js'
    },
    watch: true,
    devtool: "source-map",
    module: {}
};
