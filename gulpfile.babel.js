/**
 * @author Created by felix on 16-12-20.
 * @email   307253927@qq.com
 */
'use strict';
import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import zip from 'gulp-zip';
import helper from './config/helper';
import 'colors';

let webpackConfig, compiler;
let stream = process.stdout;
let server;

function initWebpack(isProd) {
  process.env.ENV = isProd ? 'production' : 'development';
  webpackConfig   = require('./webpack.config');
  compiler        = webpack(webpackConfig, (err, stats) => {
    // console.log(stats.toString());
  });
}

function initPlugins() {
  compiler.plugin('invalid', () => {
    stream.write('\x1b[2J\x1b[0f');
    console.log('\nCompiling...\n'.yellow);
  });
  compiler.plugin('done', function (stats) {
    // let json = stats.toJson({}, true);
    // console.log(json.errors);
    helper.clearLine();
    stream.write('[OK] Compilation is complete!'.green + ' ');
  });
}

function startServer() {
  let devServer = webpackConfig.devServer;
  Object.assign(devServer, {
    inline        : true,
    progress      : true,
    clientLogLevel: 'error',
    noInfo        : true,
    stats         : {
      colors: true
    }
  });
  let protocol = 'http';
  server       = new WebpackDevServer(compiler, devServer);
  server.listen(devServer.port, (err) => {
    if (err) {
      return console.error("Error:", err);
    }
    console.log('\nStarting the development server...'.cyan);
    console.log((protocol + '://' + devServer.host + ':' + devServer.port + '/\n').magenta);
  });
}

gulp.task('start', () => {
  initWebpack();
  initPlugins();
  startServer();
});

gulp.task('zip', () => {
  return gulp.src(['dist/**/*'])
    .pipe(zip('www.zip'))
    .pipe(gulp.dest('/home/felix/workspace/workspace/UnsEduOralevaldemo-master/app/src/main/assets'))
});

gulp.task('build', () => {
  initWebpack(true);
  initPlugins();
});

gulp.task('default', ['start'], () => {
});