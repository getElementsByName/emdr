import * as webpack from 'webpack'


const optimizationWebpackConfig: webpack.Configuration = {
  // https://webpack.js.org/configuration/devtool/
  devtool: 'inline-source-map',
  // https://webpack.js.org/configuration/optimization/
  // optimization: {
  //   minimize: true
  // }
}

export { optimizationWebpackConfig }
