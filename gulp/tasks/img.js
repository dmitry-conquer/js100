// import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';

export const img = () => {
	return app.gulp
		.src(app.path.src.images)

		.pipe(app.plugins.newer(app.path.build.images))
	      .pipe(webp({
	      	quality: 100,
	      }))
			.pipe(app.plugins.if(app.isBuild, app.plugins.size({ title: 'IMG', showFiles: true })))
	      .pipe(app.gulp.dest(app.path.build.images))

			
	    //   .pipe(app.gulp.src(app.path.src.images))
		// 	.pipe(app.plugins.newer(app.path.build.images))
		// 	.pipe(
		// 		app.plugins.if(
		// 			app.isBuild,
		// 			imagemin({
		// 				progressive: true,
		// 				svgoPlugins: [{ removeViewBox: false }],
		// 				interlaced: true,
		// 				optimizationLevel: 3, // 0 to 7
		// 			})
		// 		)
		// 	)
		// .pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream());
};
