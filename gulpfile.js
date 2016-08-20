let gulp = require("gulp");
let browserSync = require("browser-sync").create();
gulp.task("browser-sync", () => {
    browserSync.init({
        server: {
            baseDir: "./",
            proxy: "yourlocal.dev"
        },
    });
    gulp.watch("./dist/**/*.*").on("change", browserSync.reload);
});
gulp.task("default", () => {
    gulp.start("browser-sync");
});
//# sourceMappingURL=gulpfile.js.map