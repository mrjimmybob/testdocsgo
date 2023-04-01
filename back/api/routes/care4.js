const express = require('express')
const router = express.Router()

const convertHTMLToPDF = require('pdf-puppeteer')
const datos = require('../config/care')
const pdfFormat = require('../config/pdf')
const {fullFileName, writePdfFile} = require('../modules/utils')

router.get('/', (req, res, next) => {
  const templateFile = fullFileName('CARE4.ejs')
  const prefix = 'CARE4_'

  const params = {
    datos: datos,
    datosModelo: datos.datosModelo,
    resUrl: 'http://localhost:9000/'
  };

  return res.render(
    templateFile, params,
    (err, html) => {
      convertHTMLToPDF(
        html,
        (pdf) => {
          writePdfFile(prefix, pdf)
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
})

module.exports = router
