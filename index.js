var grunt = require('grunt');
module.exports =  function(){
  var deps = ['*.js','src/**/*.js', 'test/**/*.js'];
  var pkg= grunt.file.readJSON('package.json');
  for(var name in pkg.dependencies)
  {
    deps.push('../' + name + '/package.json');
    deps.push('node_modules/' + name + '/package.json');
  }
  return deps;
}
