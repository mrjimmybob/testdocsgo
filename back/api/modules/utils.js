const path = require('path')
const fs = require('fs')

const convertHTMLToPDF = require('pdf-puppeteer')
const pdfFormat = require('../config/pdf')

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

function renderPdf(res, pdfParams, htmlTemplateFile, filePrefix)
{
  return res.render(
    htmlTemplateFile, pdfParams,
    (err, html) => {
      convertHTMLToPDF(
        html,
        (pdf) => {
          writePdfFile(filePrefix, pdf)
          res.setHeader('Content-Type', 'application/pdf')
          res.send(pdf)
        },
        pdfFormat,
        null,
        true
      ).catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
    }
  )
}

module.exports['renderPdf'] = renderPdf;
module.exports['fullFileName'] = fullFileName;
module.exports['writePdfFile'] = writePdfFile;
