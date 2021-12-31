module.exports = {
    plugins : [
        require('postcss-import'),
        require('autoprefixer'),
        require('postcss-preset-env')({stage: 3,
            features: {
              'nesting-rules': true,
            }}),
       
           
        // require('cssnano'),
    ]

}

// This command will excute - ' npm run postcss:watch  '