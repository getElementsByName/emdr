// https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallbackimport * as webpack from 'webpack';
import * as webpack from 'webpack'
import 'webpack-dev-server' // for 'devServer' type
import * as path from 'path'

const devServerWebpackConfig: webpack.Configuration = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, '../public'),
  },
}

export { devServerWebpackConfig }
