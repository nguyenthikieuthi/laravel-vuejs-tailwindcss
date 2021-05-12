const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */ //test thử

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css', {
        implementation: require('node-sass'),
      })
      .options({
        processCssUrls: false,
        postCss: [require('tailwindcss'), require('autoprefixer')],
        autoprefixer: { remove: false },
        clearConsole: true, // in watch mode, clears console after every build
      });

    //   mix.js('resources/js/app.js', 'public/js')
    // .vue()
    // .postCss("resources/sass/app.scss", "public/css", [
    //     require("tailwindcss"),
    //    ])
    //    .options({
    //              processCssUrls: false,
    //              postCss: [require('tailwindcss'), require('autoprefixer')],
    //              autoprefixer: { remove: false },
    //              clearConsole: true, // in watch mode, clears console after every build;
    //         });



