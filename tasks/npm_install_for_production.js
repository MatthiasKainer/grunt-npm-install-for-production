/*
 * grunt-npm-install-for-production
 * https://github.com/mkainer/grunt-npm-install-for-production
 *
 * Copyright (c) 2015 mkainer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerTask('npm_install_for_production', 'Installs all production specific npm packages for a specific directory', function() {
    var npm = require('npm');
    var done = this.async();
    var options = this.options({ cwd : process.cwd() });
    var currentDir = process.cwd();
    process.chdir(options.cwd);
    var packages = require(options.cwd + '/package.json');
    packages = Object.keys(packages.dependencies);
    grunt.verbose.writeln("loaded " + packages.length + " packages...");
    npm.load(function (err, npm) {
        grunt.verbose.writeln("installing " + packages.length + " packages...");
        if (err) {
            grunt.log.error(err);
            done(err);
            return;
        }
        npm.commands.install(packages, function (err) {
            if (err) {
                grunt.log.error(err);
            }

            grunt.verbose.writeln(packages.length + " packages installed...");
            process.chdir(currentDir);
            done();
        });
    });
  });
};
