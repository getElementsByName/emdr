// webpack accepts configuration files written in multiple programming and data languages: https://webpack.js.org/configuration/configuration-languages/
import * as webpack from 'webpack'
import * as merge from 'webpack-merge'
import { entryOutputWebpackConfig } from './entryOutput.config'
import { typescriptWebpackConfig } from './typescript.config'
import { devServerWebpackConfig } from './devServer.config'
import { workboxWebpackConfig } from './workbox.config'

const webpackConfig: webpack.Configuration = merge(
  entryOutputWebpackConfig,
  typescriptWebpackConfig,
  devServerWebpackConfig,
  workboxWebpackConfig,
)

export default webpackConfig
