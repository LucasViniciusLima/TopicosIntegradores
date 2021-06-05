const Games = require('../models/gamesModel');

async function findOne(req, res) {
    
    try {
        const game = await Games.findOne({ _id : req.params.id})
        res.status(200).json(game)
    } catch (err) {
        res.status(400).json("error : Bad request")
    };
};

async function findAll(req, res) {
    
    try {
        const games = await Games.find()
        res.status(200).json(games)
    } catch (err) {
        res.status(400).json("error : Bad request")
    };
};

async function store(req, res) {
    
    try {
        const game = await Games.create(req.body)
        res.status(200).json(game)
    } catch (err) {
        res.status(400).json("error : Bad request")
    };
};

async function update(req, res) {
    
    try {
        await Games.updateOne({_id : req.params.id}, req.body);
        res.status(204).json()
    } catch (err) {
        res.status(400).json("error : Bad request")
    };
};

async function destroy(req, res) {
    
    try {
        await Games.deleteOne({_id : req.params.id});
        res.status(204).json()
    } catch (err) {
        res.status(400).json("error : Bad request")
    };
};

module.exports = {
    findOne,
    findAll,
    store,
    update,
    destroy
}