/*
 * @Author: xiaodongyu
 * @Date 2019-12-23 22:53:15
 * @Last Modified by: xiaodongyu
 * @Last Modified time: 2019-12-26 10:20:26
 */

module.exports = {
    // public path for github page
    // publicPath: process.env.NODE_ENV === 'production' ? '/vme/' : '/',

    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    use: [
                        {
                            loader: "html-loader"
                        },
                        {
                            loader: "markdown-loader"
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.vue', '.json', '.scss', '.sass']
        }
    }
};
