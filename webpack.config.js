const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/bootstrap.js',
    output: {
        path: path.resolve(__dirname, './src/bundle'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
