var express = require('express');
var router = express.Router();

const MOCK_ARTICULOS = [
  {
    id: '1',
    nombre:'Angulos',
    precio:'1000.00'
  },
  {
    id: '1001',
    nombre:'Lonas',
    precio:'11000.00'
  },
  {
    id: '123',
    nombre:'Condensador de Flujo',
    precio:'11000000.00'
  },
  {
    id: '234',
    nombre:'Algo',
    precio:'1000.00'
  }
];

/* GET Articulos listing. */
router.get('/:id?', function(req, res, next) {
  let id = req.params.id;
  
  switch(id){
    case '123':
      res.json(MOCK_ARTICULOS[1]);
    break;

    default:
      res.json(MOCK_ARTICULOS);
    break;
  }


});

module.exports = router;
