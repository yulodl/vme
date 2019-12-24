/*
 * @Author: xiaodongyu
 * @Date 2019-12-23 22:53:15
 * @Last Modified by: xiaodongyu
 * @Last Modified time: 2019-12-24 22:30:03
 */

module.exports = {
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
