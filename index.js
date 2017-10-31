'use strict';
const gutil = require('gulp-util'),
    PluginError = gutil.PluginError,
    es = require('event-stream'),
    through = require('through2'),
    compodocModule = require('@compodoc/compodoc'),
    PLUGIN_NAME = 'gulp-compodoc';

function compodoc(options) {
    var files = [];
    options = options || {};

    return es.through(function(file) {
        files.push(file.path);
    }, function() {
        var stream = this;

        if (files.length === 0) {
            stream.emit('error', new PluginError(PLUGIN_NAME, 'No input files for compodoc.'));
            stream.emit('end');
            return;
        } else if (!options.output) {
            stream.emit('error', new PluginError(PLUGIN_NAME, 'You must either specify the \'output\' option.'));
            stream.emit('end');
            return;
        } else {
            var app = new compodocModule.Application(options);

            try {
                app.setFiles(files);
                app.generate().then(function() {
                  stream.emit('end');
                  return;
                }, function(error) {
                  stream.emit('error', new PluginError(PLUGIN_NAME, error));
                  stream.emit('end');
                  return;
                });
            } catch (e) {
                stream.emit('error', e);
                stream.emit('end');
                return;
            }
        }
    });
}

module.exports = compodoc;
