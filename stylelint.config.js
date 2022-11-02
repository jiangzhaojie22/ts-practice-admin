module.exports = {
  // 默认错误警报
  defaultSeverity: 'error',
  // 追加stylelint-config-prettier到文件中的extends数组。确保把它放在最后，所以它会覆盖其他配置。
  /**
   * stylelint-config-prettier附带一个小 CLI 工具，可帮助您检查您的配置是否包含任何与 Prettier 冲突的规则。

  为了执行 CLI 工具，首先为其添加一个脚本package.json：

  {
    “脚本”：{
     “ stylelint-check ”：“ stylelint-config-prettier-check ”
    }
  }
  然后运行npm run stylelint-check。
   */
  extends: ['stylelint-config-prettier'],
  /**
   * 例如：stylelint-scss是一个流行的插件包，它为类似 SCSS 的语法强制执行各种 linting 规则。这里用的less
   */
  plugins: ['stylelint-less'],
};
