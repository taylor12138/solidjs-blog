module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
   'postcss-pxtorem': {
        rootValue: 37.5, // 设计稿宽度除以 10，  开头大写的Px 不转换 => height: 100Px, 内联样式不转换，需要 / 75 转成 rem
        unitPrecision: 2, // 计算结果保留 6 位小数
        propList: ['*'], // 可以从px更改为rem的属性  感叹号开头的不转换
        replace: true, // 转换成 rem 以后，不保留原来的 px 单位属性
        mediaQuery: true, // 允许在媒体查询中转换px。
        minPixelValue: 2 // 设置要替换的最小像素值。
    }
  },
}
