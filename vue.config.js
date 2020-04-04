/*
 * @Author: xiaodongyu
 * @Date 2019-12-23 22:53:15
 * @Last Modified by: xiaodongyu
 * @Last Modified time: 2020-04-05 00:25:05
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
