let express = require('express');
let router = express.Router();
let autos = require('../db/index.js');

router.get('/', function(req, res) {
  return res.send(autos.lista);
});

router.get('/color/:color', function(req, res) {
  let color = req.params.color;
  let resultadoBusqueda = [];

  for (let i = 0; i < autos.lista.length; i++) {
    if (autos.lista[i].color === color.toLowerCase()) {
      resultadoBusqueda.push(autos.lista[i]);
    }
  }

  if (resultadoBusqueda.length > 0) {
    return res.send(resultadoBusqueda);
  } else {
    return res.send(`No hay autos de color ${color}.`);
  }
});

// Ruta para traer productos dependiendo de lo que busquen //
module.exports = router;