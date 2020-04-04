module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        ['module-resolver', {root: ['./src']}],
        ['import', {libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css'}] // `style: true` for less
    ]
}
