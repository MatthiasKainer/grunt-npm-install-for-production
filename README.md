# grunt-npm-install-for-production

> Installs all production specific npm packages for a specific directory

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-npm-install-for-production --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-npm-install-for-production');
```

## The "npm_install_for_production" task

### Overview
In your project's Gruntfile, add a section named `npm_install_for_production` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  "npm_install_for_production": {
    "options": {
      // Task-specific options go here.
    },
    "your_target" : {

    }
  },
});
```

### Options

#### options.cwd
Type: `String`
Default value: `',  '`

The directory in which npm install should be executed

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  "npm_install_for_production": {    
    "dev" : {
      "options": {
        "cwd" : "~/some/project"
      },
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
