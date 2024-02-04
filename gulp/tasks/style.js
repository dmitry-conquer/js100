import dartSass from "sass";
import gulpSass from "gulp-sass";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import tailwindcss from "tailwindcss";

const sass = gulpSass(dartSass);

export const style = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(
      sass({
        outputStyle: "expanded",
      }),
    )

    .pipe(
      postcss([
        tailwindcss("./tailwind.config.js"),
        autoprefixer({
          grid: true,
          overrideBrowserslist: "last 2 versions",
        }),
        cssnano(),
      ]),
    )

    .pipe(
      app.plugins.rename({
        extname: ".min.css",
      }),
    )
    .pipe(app.plugins.if(app.isBuild, app.plugins.size({ title: "CSS", showFiles: true })))
    .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.isDev ? "." : false }))
    .pipe(app.plugins.browserSync.stream());
};
