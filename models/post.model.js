/*
Import
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
//

/*
Definition
*/
    const MySchema = new Schema({
        // Schema.org
        '@context': { type: String, default: 'http://schema.org' },
        '@type': { type: [ String ], default: ['Article'] },

        headline: String,
        articleBody: String
    });
//

/* 
Set index for search
*/
    MySchema.index({
        headline: 'text',
        articleBody: 'text'
    })
//


/*
Export
*/
    module.exports = mongoose.model( 'post', MySchema );
//