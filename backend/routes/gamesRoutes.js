const router = require('express').Router();
const gamesController = require('../controllers/gamesController');

router.get('/getAll', async (req, res) => {
    gamesController.findAll(req, res);
});

router.get('/:id', async (req, res) => {
    gamesController.findOne(req, res);
});

router.post('/', async (req, res) => {
    gamesController.store(req, res);
});

router.put('/:id', async (req, res) => {
    gamesController.update(req, res);
});

router.delete('/:id', async (req, res) => {
    gamesController.destroy(req, res);
});

module.exports = app => app.use('/games', router);


    

