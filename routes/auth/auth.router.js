/*
Imports
*/
    // Nodes
    const express = require('express');
    const myRouter = express.Router();

    // Modules
    const { checkFields } = require('../../services/request.checker');
    const Mandatories = require('../../services/mandatory.service');
    const { register, login, logout } = require('./auth.controller');
//

/*
Routes definition
*/
    class MyRouterClass {
        constructor() {}
        
        // Set route fonctions
        routes(){

            // POST 'api/auth/register': send data to register new user
            myRouter.post( '/register', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.status(400).json({
                        message: 'No body provided',
                        data: null,
                        err: null
                    })
                }

                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.identity, req.body);

                if(!ok){
                    return res.status(400).json({
                        message: 'Bad fields provided',
                        data: null,
                        err: {miss, extra}
                    })
                }
                else{
                    register(req)
                    .then( apiResponse => {
                        return res.status(201).json({
                            message: 'Indentity created',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch( apiResponse => {
                        return res.status(400).json({
                            message: 'Identity not created',
                            data: null,
                            err: apiResponse
                        })
                    })
                }
            });

            // POST 'api/auth/login': send data to log user
            myRouter.post( '/login', (req, res) => {
                // Error: no body present
                if (typeof req.body === 'undefined' || req.body === null) { 
                    return res.status(400).json({
                        message: 'No body provided',
                        data: null,
                        err: null
                    })
                }

                // Check fields in the body
                const { miss, extra, ok } = checkFields( Mandatories.identity, req.body);

                if(!ok){
                    return res.status(400).json({
                        message: 'Bad fields provided',
                        data: null,
                        err: {miss, extra}
                    })
                }
                else{
                    login(req, res)
                    .then( apiResponse => {
                        return res.status(201).json({
                            message: 'Indentity found',
                            data: apiResponse,
                            err: null
                        })
                    })
                    .catch( apiResponse => {
                        return res.status(400).json({
                            message: 'Identity not found',
                            data: null,
                            err: apiResponse
                        })
                    })
                }
            });

            // GET 'api/auth/logout': send data to log user
            myRouter.get( '/logout', (req, res) => {
                logout(res)
                .then( apiResponse => {
                    return res.status(201).json({
                        message: 'Indentity found',
                        data: apiResponse,
                        err: null
                    })
                })
                .catch( apiResponse => {
                    return res.status(400).json({
                        message: 'Identity not found',
                        data: null,
                        err: apiResponse
                    })
                })
            });
        };

        // Start router
        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return myRouter;
        };
    };
//

/*
Export
*/
    module.exports = MyRouterClass;
//