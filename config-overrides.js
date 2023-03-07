const SassRuleRewire = require("react-app-rewire-sass-rule");
const path = require("path");
const rewireAliases = require("react-app-rewire-aliases");
const rewireCssModules = require("react-app-rewire-css-modules");

// module.exports = function override(config, env) {
//     // require("react-app-rewire-postcss")(config, {
//     //     plugins: (loader) => [require("postcss-rtl")()],
//     // });
//
//     config = rewireAliases.aliasesOptions({})(config, env);
//
//     config = new SassRuleRewire()
//         .withRuleOptions({
//             test: /\.s[ac]ss$/i,
//             use: [
//                 {
//                     loader: "sass-loader",
//                     options: {
//                         sassOptions: {
//                             includePaths: ["node_modules", "src/asset"],
//                         },
//                     },
//                 },
//             ],
//         })
//         .rewire(config, env);
//
//     config.optimization.runtimeChunk = {
//         // name: "agency-chunk",
//     };
//
//     config.optimization.splitChunks = {
//         cacheGroups: {
//             default: false,
//         },
//     };
//
//     // config.output.filename = "agency/static/js/[name].js";
//     // config.output.chunkFilename = "agency/static/js/[name].chunk.js";
//     // config.plugins[5].options.filename = "agency/static/css/[name].css";
//     // config.plugins[5].options.moduleFilename = () => "agency/static/css/index.css";
//     console.log(config);
//
//     return config;
// };
