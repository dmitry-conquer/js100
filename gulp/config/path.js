// Get the project folder name
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

// paths to the source folder and the result folder
const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
   src: {
      html: `${srcFolder}/*.html`,
      scss: `${srcFolder}/scss/style.scss`,
      js: `${srcFolder}/js/app.js`,
      json: `${srcFolder}/json/**/*.json`,
      images: [
         `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
         `!${srcFolder}/img/svg-to-sprite/**/*.svg`,
      ],
      svg: `${srcFolder}/img/svg-to-sprite/*.svg`,
      fonts: `${srcFolder}/fonts/**/*.woff2`,
   },
   build: {
      html: `${buildFolder}/`,
      css: `${buildFolder}/css/`,
      js: `${buildFolder}/js/`,
      json: `${buildFolder}/json/`,
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
      sprites: `${buildFolder}/sprites/`,
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      html: `${srcFolder}/**/*.html`,
      scss: `${srcFolder}/scss/**/*.scss`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
      svg: `${srcFolder}/img/svg-to-sprite/*.svg`,
      json: `${srcFolder}/json/**/*.json`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   rootFolder: rootFolder,
   srcFolder: srcFolder,
   ftp: `your-site.com`, // the path to the desired folder on the remote server. gulp will add the project folder name automatically
};
