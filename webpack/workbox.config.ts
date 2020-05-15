// https://webpack.js.org/guides/progressive-web-application/
import * as webpack from "webpack"
import * as WorkboxPlugin from "workbox-webpack-plugin"

const workboxWebpackConfig: webpack.Configuration = {
  plugins: [
    // new WorkboxPlugin.GenerateSW({
    //   // these options encourage the ServiceWorkers to get in there fast
    //   // and not allow any straggling "old" SWs to hang around
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
    new WorkboxPlugin.InjectManifest({
      swSrc: "./src/sw/index.ts",
      swDest: "sw.js",
    }),
  ],
};

export { workboxWebpackConfig };
