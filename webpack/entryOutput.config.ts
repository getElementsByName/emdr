import * as path from 'path'
import * as webpack from 'webpack'

const entryFilePath = './src/index.ts'
const outputDirectoryPath = path.resolve(process.cwd(), 'public/dist/js')

const entryOutputWebpackConfig: webpack.Configuration = {
    entry: entryFilePath,
    output: {
      filename: 'bundle.js',
      path: outputDirectoryPath,
      publicPath: 'dist/js'
    },
}

export { entryOutputWebpackConfig }
