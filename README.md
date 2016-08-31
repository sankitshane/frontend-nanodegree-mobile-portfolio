## Frontend-Nanodegree-Mobile-Portfolio

###Website CRP Optimization

The first part of work focuses on rendering the page under as fast as possible.
It was both checked on desktop and mobile devices, the results were really fast.
You can checkout the page at [here](https://sankitshane.github.io/frontend-nanodegree-mobile-portfolio/)

####Techniques Used :
* In-line CSS
* Minified CSS and JavaScript
* Used Gulp
* Browser Caching
* Image Optimization using gulp and ImageMagic

###Browser Render Optimization

After the website is loaded fast, It's time to check the browser render animations
in 60fps. Optimization are done to the JavaScript code in the pizza site *Please
check the comments in the code for more details*

####Techniques Used :
* In-line CSS
* Variable declaration outside loops
* checking for repeated assignment.

###Gulp Plugins:
* Gulp-uglify : to minify JavaScript
* Gulp-uglifycss : to minify CSS
* Gulp-imagemin : to compress images
