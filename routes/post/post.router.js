/*
Imports
*/
    const express = require('express');
    const myRouter = express.Router();
    const { createItem, readItem, readOneItem, updateItem, deleteItem } = require('./post.controller')
//

/*
Routes definition
*/
    class MyRouterClass {

        routes(){
            // CRUD: create
            myRouter.post('/', (req, res) => {
                return res.json({ data: 'Create' })
            })

            // CRUD: read
            myRouter.get('/', (req, res) => {
                return res.json({ data: 'Read' })
            })

            // CRUD: read on
            myRouter.get('/:id', (req, res) => {
                return res.json({ data: 'Read one' })
            })

            // CRUD: update
            myRouter.put('/', (req, res) => {
                return res.json({ data: 'Update' })
            })

            // CRUD: delete
            myRouter.delete('/', (req, res) => {
                return res.json({ data: 'Delete' })
            })
        }

        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return myRouter;
        }
    }
//

/*
Export
*/
    module.exports = MyRouterClass;
//