/*
Imports
*/
    // Nodes
    const express = require('express');
    const myRouter = express.Router();

    // Modules
    const { checkFields } = require('../../services/request.checker');
    const Mandatories = require('../../services/mandatory.service');
//

/*
Routes definition
*/
    class MyRouterClass {

        // Inject Passport to secure routes
        constructor({ passport }) {
            this.passport = passport;
        }
        
        // Set route fonctions
        routes(){

            // POST 'api/auth/register': send data to register new user
            myRouter.post( '/register', (req, res) => {
                return res.json({ message: 'reqister user' })
            });

            // POST 'api/auth/login': send data to log user
            myRouter.post( '/login', (req, res) => {
                return res.json({ message: 'Login user' })
            });

            // GET 'api/auth/logout': send data to log user
            myRouter.get( '/logout', (req, res) => {
                return res.json({ message: 'Logout user' })
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