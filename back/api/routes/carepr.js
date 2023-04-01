const express = require('express')
const router = express.Router()

const { fullFileName, renderPdf } = require('../modules/utils')

const data = require('../config/care')

router.get('/', (req, res, next) => {

  const pdfParams = {
    datos: data,
    datosModelo: data.datosModelo,
    resUrl: 'http://localhost:9000/'
  };

  renderPdf(res, pdfParams, fullFileName('CAREPR.ejs'), 'CAREPR_')
})

module.exports = router
