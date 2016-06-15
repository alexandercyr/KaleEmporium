var path = require("path");
var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('/', 'config.js');


builder.buildStatic('src/js/index.js', 'dist/js/index.js', {minify: true})
  .then(function() {
    console.log('Index build complete');
  })
  .catch(function(err) {
    console.log('build err');
    console.log(err);
  });
/*
builder
.bundle('src/js/project.js', 'build/outfile.js')
.then(function() {
  console.log('Build complete');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
}); */