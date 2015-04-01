/*
 * grunt-npm-install-for-production
 * https://github.com/mkainer/grunt-npm-install-for-production
 *
 * Copyright (c) 2015 mkainer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var loadPackages = function(forPath) {
    var packages = require(forPath + '/package.json');
    return Object.keys(packages.dependencies);
  };

  grunt.registerMultiTask('npm_install_for_production', 'Installs all production specific npm packages for a specific directory', function() {
    var done = this.async();

    var npm = require('npm');
    var options = this.options({ cwd : process.cwd() });
    var currentDir = process.cwd();
    process.chdir(options.cwd);

    var packages = loadPackages(options.cwd);
    grunt.verbose.writeln("loaded " + packages.length + " packages...");

    npm.load(function (err, npm) {
        grunt.verbose.writeln("installing " + packages.length + " packages...");
        if (err) {
          process.chdir(currentDir);
          grunt.log.error(err);
          done(err);
          return;
        }

        npm.commands.install(packages, function (err) {
          process.chdir(currentDir);
          if (err) {
              grunt.log.error(err);
          }
          else {
            grunt.verbose.writeln(packages.length + " packages installed...");
          }

          done();
        });
    });
  });
};
