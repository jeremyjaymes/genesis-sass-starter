module.exports = function(grunt) {
    
	grunt.initConfig({
		sass: {
      dist: {
        options: {
          style: 'expanded',
          precision: 15
        },
        files: {
          'style.css': 'lib/stylesheets/style.scss',
        }
      }
    },
    watch: {
      sass: {
        files: ['lib/stylesheets/{,*/}*.{scss,sass}'],
        tasks: ['sass']
		  }
    }
	});
    
    
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
