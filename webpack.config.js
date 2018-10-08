var path = require('path');

module: {  
    rules: [
        {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']        
                }
            }    
        }  
    ]
}

module.exports = {
    entry: "./assets/scripts/app.js",
    output: {
        path: path.resolve(__dirname, "./temp/scripts"),
        filename: "app.js"
    }
}

