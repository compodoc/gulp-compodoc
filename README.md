<p align="center">
  <img src="https://avatars3.githubusercontent.com/u/23202313" alt="Compodoc: The missing documentation tool for your Angular application" width="226">
  <br>
  <a href="https://www.npmjs.com/package/gulp-compodoc"><img src="https://badge.fury.io/js/gulp-compodoc.svg" alt="npm badge"></a>
  <a href="https://david-dm.org/compodoc/gulp-compodoc"><img src="https://david-dm.org/compodoc/gulp-compodoc.svg" alt="npm dependencies"></a>
  <a href="https://david-dm.org/compodoc/gulp-compodoc?type=dev"><img src="https://david-dm.org/compodoc/gulp-compodoc/dev-status.svg" alt="npm devDependencies"></a>
  <a href="http://opensource.org/licenses/MIT"><img src="http://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT badge"></a>
</p>

# gulp-compodoc
Compodoc plugin for gulp

## Install

```
$ npm install --save-dev gulp-compodoc
```


## Usage

```js
const gulp = require('gulp'),
    compodoc= require('gulp-compodoc');

gulp.task('default', () => {
	gulp.src('src/**/*.ts')
		.pipe(compodoc())
);
```


## API

### compodoc([options])

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## License

Everything in this repo is MIT License unless otherwise specified.

MIT © 2016 - [Vincent Ogloblinsky](http://www.vincentogloblinsky.com)
