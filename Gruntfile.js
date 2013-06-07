module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			compress: {
				files: {
					'css/statusbar.min.css': ['css/statusbar.css']
				}
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\nhttps://github.com/Serhioromano/bootstrap-statusbar.git\n'
			},
			build: {
				src: 'js/statusbar.js',
				dest: 'js/statusbar.min.js'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task(s).
	grunt.registerTask('default', ['cssmin', 'uglify']);

};