// 将所有的mock文件引入
require('./adminmock')
require('./devmock')
require('./log')
require('./slider')
require('./network')

// 在这里可以做一些通用的配置
//导入Mock依赖
const  Mock  =  require( "mockjs" )
// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
  timeout:  0 - 300
})

