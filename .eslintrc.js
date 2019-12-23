/*
 * @Author: xiaodongyu
 * @Date 2019-12-23 23:13:58
 * @Last Modified by: xiaodongyu
 * @Last Modified time: 2019-12-24 00:25:03
 */

module.exports = {
    extends: [
        'plugin:vue/recommended'
    ],
    settings: {
        'import/resolver': {
            webpack: {
                config: {
                    resolve: {
                        extensions: ['.js', '.vue', '.json', '.scss', '.sass']
                    }
                }
            }
        }
    },
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/require-prop-type-constructor': 'off',
        'vue/require-default-prop': 'off'
    }
}
