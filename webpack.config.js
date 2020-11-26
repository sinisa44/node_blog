const path = require('path');

module.exports = {
    entry:{
        index: path.resolve(__dirname, './src/js/index.js')
    },
    output:{
        path: path.resolve(__dirname, './public/js'),
        filename: '[name].bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:['babel-loader']
            }
        ]
    }   
}