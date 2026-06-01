const express = require('express');
const router = express.Router();

const PessoaControler = require('../controller/PessoaController');

router.post('/', PessoaControler.create);// Cadastrar
router.get('/all',PessoaControler.all);// Listar
router.put('/:id', PessoaControler.update);//Atualizar
router.delete('/:id', PessoaControler.delete);


module.exports = router;