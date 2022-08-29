var includeFiles = require('/slides/assets/scripts/fileInclude.js');
var renderPuml = require('/slides/assets/scripts/pumlpreprocessor.js');

module.exports = (markdown, options) => {
    return new Promise((resolve, reject) => {
        return resolve(
            renderPuml(includeFiles(markdown))
        );
    })
}
