const mongoose = require('../database/db');

const GamesSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        category: {
            type : String,
            required : true
        },
        producer : {
            type : String,
            required : true
        },
        reviews : [
            {
                score : {
                    type : Number,
                    min: 0,
                    max: 5,
                    required: true
                },
                description : {
                    type : String,
                    required : false
                }
            }
        ]
    },
    {
        versionKey : false
    }
);

const Games = mongoose.model("Games", GamesSchema);

module.exports = Games;