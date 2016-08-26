'use strict';

const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');

/*
 * Configure a Fractal instance.
 *
 * This configuration could also be done in a separate file, provided that this file
 * then imported the configured fractal instance from it to work with in your Gulp tasks.
 * i.e. const fractal = require('./my-fractal-config-file');
 */

const fractal = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

const myCustomisedTheme = mandelbrot({
    skin: "black",
    static: {
        "mount": "theme", // Theme asset URLs would now look something like: '/no-clash/path/to/file.js'
    }
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default

fractal.set('project.title', 'MyTilt Library'); // title for the project
fractal.web.set('builder.dest', 'styleguide'); // destination for the static export
fractal.web.set('static.path', `${__dirname}/css`);
fractal.web.set('server.sync', true); // browsersync
fractal.docs.set('path', `${__dirname}/styleguide-src/docs`); // location of the documentation directory.
fractal.components.set('path', `${__dirname}/styleguide-src/components`); // location of the component directory.
fractal.components.set('default.preview', '@preview'); // let Fractal know that this preview layout should be used as the default layout for our components
fractal.components.set('default.status', 'wip'); // set default components status to work in progress. This has to be overridden in component.config.js files

// any other configuration or customisation here

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

// fractal.components.engine(hbs); /* set as the default template engine for components */
// fractal.docs.engine(hbs); /* you can also use the same instance for documentation, if you like! */


/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */

gulp.task('fractal:start', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.url}`);
    });
});

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */

gulp.task('fractal:build', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});

// Deploy production style guide on github
// Watch out, this automatically publish on a gh-pages branch
gulp.task('deploy', ['fractal:build'], function() {
  return gulp.src(`${__dirname}/styleguide/**/*`)
    .pipe(ghPages({
                  'push': true, // dry run test fi false
                  // 'message': "Update 2 [timestamp]" // change commit message
                }));
});
