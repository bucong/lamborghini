var gulp=require('gulp');
var less=require('gulp-less');
var concat=require('gulp-concat');
var minifyCss=require('gulp-minify-css');
var rename=require('gulp-rename');

//编译less
gulp.task('less',function(){
    return gulp.src(['./www/less/*.less'])
        .pipe(less())//合并
        .pipe(gulp.dest('./www/css'));//合并路径
});

//合并css文件
gulp.task('concat-minify-rename-css',['less'],function(){
    gulp.src('./www/css/*.css')
        .pipe(concat('main.css'))//合并后的文件名
        .pipe(gulp.dest('./www/css-dist'))//合并后的路径
        .pipe(minifyCss())
        .pipe(rename({suffix:'.min'}))//后缀名添加min表示压缩文件
        .pipe(gulp.dest('./www/css-dist'));
});

gulp.task('build-css',['concat-minify-rename-css']);
//自动化改变，监听less文件
gulp.task('watch-css',function(){
    gulp.watch('./www/less/*.less',function(){
        //gulp.start('less');//只编译less
        gulp.start('build-css');//编译less并压缩css文件
    })
});
