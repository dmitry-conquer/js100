import fileinclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import versionNumber from 'gulp-version-number';

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(fileinclude())
      
      // Prevents site caching. Comment out in production mode
      .pipe(
        app.plugins.if(
          app.isBuild,
          versionNumber({
            value: '%DT%',
            append: {
              key: '_v',
              cover: 0,
              to: ['css', 'js', 'img'],
            },
            output: {
              file: 'gulp/version.json',
            },
          })
        )
      )

      .pipe(
        app.plugins.if(
          app.isBuild,
          htmlmin({
            // collapseWhitespace: true,
            // removeComments: true,
            // preserveLineBreaks: true,
            // removeAttributeQuotes: true,
            // removeRedundantAttributes: true,
            // removeScriptTypeAttributes: true,
            // removeStyleLinkTypeAttributes: true,
            // sortClassName: true,
            // useShortDoctype: true,
          })
        )
      )
      .pipe(app.plugins.if(app.isBuild, app.plugins.size({ title: 'HTML', showFiles: true })))
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browserSync.stream())
  );
};
