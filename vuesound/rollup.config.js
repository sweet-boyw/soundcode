import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'

export default {
    input: './src/index.js', // 配置打包入口文件
    output: {
        file: 'dist/vue.js',// 打包出口文件
        format: 'umd', // 打包方式
        name: 'Vue',
        sourcemap: true, // 将转化后的代码进行映射
    },
    plugins: [
        babel({
            exclude: 'node_modules/**', // 打包时排除此文件
        }),
        serve({
            port: '3000',// 启动服务时端口为3000
            contentBase: '', // 启动服务文件的目录，空字符串表示当前目录
            openPage: '/index.html', // 启动服务时打开的文件
        })
    ]
}