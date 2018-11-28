const gulp = require('gulp'),
    compodoc = require('../');

gulp.task('default', () => {
    return gulp.src('nest-app/src/**/*.ts')
        .pipe(compodoc({
            output: 'nest-app//documentation',
            tsconfig: 'nest-app/tsconfig.json'
        }))
});