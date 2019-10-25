// Imports
const Models = require('../../models/index')

/* 
Methods CRUD
*/
    const createItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.post.create(req.body)
            .then( post => resolve({post, identity: req.user}) )
            .catch( err => reject(err) );
        })
    }

    const readItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.post.find( (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
        })
    }

    const readOneItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.post.findById(req.params.id, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }

    const updateItem = (req) => {
        return new Promise( (resolve, reject) => {
            /* Models.post.findById( req.params.id, ( err, document ) => {
                if( err ){
                    return reject(err)
                }
                else{
                    document.save( req.body, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            }) */

            /* Models.post.update( { _id: req.params.id }, req.body, (err, documents) => {
                err ? reject(err) : resolve(documents);
            }) */

            Models.post.findByIdAndUpdate(req.params.id, req.body, (err, document) => {
                if( err ){
                    return reject(err)
                }
                else{
                    Models.post.findById( req.params.id, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        })
    }

    const deleteItem = (req) => {
        return new Promise( (resolve, reject) => {
            Models.post.deleteOne({ _id: req.params.id }, (err, document) => {
                err ? reject(err) : resolve(document);
            })
        })
    }
//

/*
Export
*/
    module.exports = {
        createItem,
        readItem,
        readOneItem,
        updateItem,
        deleteItem
    }
//