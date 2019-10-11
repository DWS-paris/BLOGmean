/*
Imports
*/
    // Nodes
    const express = require('express');
    const myRouter = express.Router();

    // Modules
    const { checkFields } = require('../../services/request.checker');
    const Mandatories = require('../../services/mandatory.service');
    const { createItem, readItem, readOneItem, updateItem, deleteItem } = require('./post.controller');
//

/*
Routes definition
*/
    class MyRouterClass {

        routes(){
            // CRUD: create
            myRouter.post('/', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.status(400).json({
                        message: 'No body provided',
                        data: null,
                        err: null
                    })
                }

                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.post, req.body);

                if(!ok){
                    return res.status(400).json({
                        message: 'Bad fields provided',
                        data: null,
                        err: {miss, extra}
                    })
                }
                else{
                    createItem(req)
                    .then( apiResponse => {
                        return res.status(201).json({
                            message: 'Data created',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch( apiResponse => {
                        return res.status(400).json({
                            message: 'Data not created',
                            data: null,
                            err: apiResponse
                        })
                    })
                }

                return res.json({ data: req.body })
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
            myRouter.put('/:id', (req, res) => {
                return res.json({ data: 'Update' })
            })

            // CRUD: delete
            myRouter.delete('/:id', (req, res) => {
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