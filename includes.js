var includeFiles = require('assets/scripts/fileInclude.js');
var renderPuml = require('assets/scripts/pumlpreprocessor.js');

module.exports = (markdown, options) => {
    return new Promise((resolve, reject) => {
        return resolve(
            renderPuml(includeFiles(markdown))
        );
    })
}
