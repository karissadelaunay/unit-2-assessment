var express = require('express');
var router = express.Router();
const todoDB = require('../data/todo');

const todosCtrl = require('../controllers/todos')

router.get('/', todosCtrl.getAll);
router.post('/', todosCtrl.create);

module.exports = router;