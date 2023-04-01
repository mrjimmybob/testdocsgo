const path = require('path')
const fs = require('fs')

function fullFileName(template) {
    return path.resolve('./public', 'templates') + '/' + template
}


function writePdfFile(prefix, pdf)
{
    const my_date = new Date()
    fs.writeFileSync(fullFileName(prefix + my_date.getTime() + '.pdf'), pdf, 'binary', (err) => {
      console.log('%c Error saving CARE contract: %o', 'color: red', err)
    })
}
          

module.exports['fullFileName'] = fullFileName;
module.exports['writePdfFile'] = writePdfFile;
