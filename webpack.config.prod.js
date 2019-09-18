const fs = require('fs'),
    path = require('path'),
    projectRoot = process.cwd(),
    sourcePath = path.join(__dirname, './client/src'),
    destPath = path.join(__dirname, './public'),
    ProgressPlugin = require('webpack/lib/ProgressPlugin'),
    rxPaths = require('rxjs/_esm5/path-mapping'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const { ProvidePlugin, DefinePlugin, NoEmitOnErrorsPlugin, NamedModulesPlugin } = require('webpack');

const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const nodeModules = path.join(process.cwd(), 'node_modules'),
    realNodeModules = fs.realpathSync(nodeModules),
    genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');

module.exports = {
    resolve: {
        extensions: [
            ".ts",
            ".js"
        ],
        modules: [
            "./node_modules"
        ],
        symlinks: true,
        alias: rxPaths()
    },
    resolveLoader: {
        modules: [
            "./node_modules"
        ]
    },
    entry: {
        polyfills: [
            "./client/src/polyfills.ts"
        ],
        main: [
            "./client/src/main.ts",
            "./node_modules/jquery/dist/jquery.slim.min.js"
        ]
    },
    target: 'web',
    output: {
        path: `${__dirname}/public/dist/`,
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    module: {
        rules: [{
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.html$/,
            use: [{
                loader: 'raw-loader'
            }],
        }, {
            test: /\.ts$/,
            loader: '@ngtools/webpack'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: destPath + '/index.html',
            template: sourcePath + '/index.html'
        }),
        new ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new NoEmitOnErrorsPlugin(),
        new ProgressPlugin(),
        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false
        }),
        new NamedModulesPlugin({}),
        new AngularCompilerPlugin({
            mainPath: "main.ts",
            hostReplacementPaths: {
                "client/environments/environment.ts": "client/environments/environment.ts"
            },
            tsConfigPath: 'client/src/tsconfig.app.json',
            skipCodeGeneration: true,
            sourceMap: true
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test:/\.js(\?.*)?$/i,
            })
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                    maxSize: 10000
                },
                default: {
                    name: "main",
                    chunks: "all",
                    "minChunks": 2
                }
            }
        }
    }
}