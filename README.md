1,路由元信息（meta），来控制footer组件的显示与隐藏
2,axios与拦截器
3,nprogress，来展示发送请求时候项目顶部有进度条
4，vuex模块化
5，节流
6,三级联动节流
7，利用mockjs模拟轮播图跟下面的数据
        使用步骤：
            (1),在项目的src文件夹当中创建mock文件夹
            (2),第二步准备json数据(mock文件夹中创建相应的json文件)---别留有空格，格式化一下，不然跑不起来
            (3)把mock数据需要的图片放置在public文件夹中，public文件夹在打包的时候，会把相应的资源原封不动打包到dist文件夹
            (4),创建mockServe.js通过mockjs实现模拟数据
            (5)mockServe.js文件在入口文件中引入(至少需要执行一次，才能模拟数据)
8,轮播图是用swiper+watch+nextTick实现的，只用watch是不能保证for循环已经遍历完成的，仅仅只能保证监测的那个数据已经发生改变，并不能保证模板已经更新完毕。