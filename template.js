// Basic template description.
exports.description = 'Create a f# project with nunit test';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should install your dependencies by using paket';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
  function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    }).toUpperCase();
  }
  init.process({}, [
    // Prompt for these values.
    init.prompt('name')
  ], function(err, props) {
    props.keywords = [];
    props.projectGuid = generateUUID();
    props.testProjectGuid = generateUUID();
    //
    // Files to copy (and process).
    var files = init.filesToCopy(props);

    init.copyAndProcess(files, props);

    // All done!
    done();
  });
}
