module.exports = {
    entry: './src/app.js',
    output:{
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {test: /\.css$/,loader: "style-loader!css-loader"}
        ]
    }
}