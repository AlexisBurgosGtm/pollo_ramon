const my = require('./myCon.js');
const express = require('express');
const router = express.Router();

router.post("/ventas", async (req, res) => {
    
    const {codruta,fecha} = req.body;
    let qry = `
    SELECT
  documentos.ID,
  documentos.CODRUTA,
  usuarios.DESRUTA,
  documentos.CODCLIE,
  clientes.NOMCLIE,
  clientes.DIRCLIE,
  clientes.MUNICIPIO,
  clientes.TELEFONO,
  documentos.LIBRAS,
  documentos.POLLOS,
  documentos.IMPORTE,
  documentos.PAGADO,
  documentos.VUELTO,
  documentos.OBS,
  documentos.CONCRE,
  documentos.SALDO,
  documentos.ABONOS,
  documentos.LAT,
  documentos.LONG,
  documentos.ST,
  documentos.FECHA
FROM documentos
  LEFT OUTER JOIN usuarios
    ON documentos.CODRUTA = usuarios.CODRUTA
  LEFT OUTER JOIN clientes
    ON documentos.CODCLIE = clientes.CODCLIE
WHERE documentos.FECHA = '${fecha}'
AND clientes.CODRUTA = ${codruta}
    `;
 
    my.Query(res, qry);

});


module.exports = router;