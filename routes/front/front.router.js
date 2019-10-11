/*
Imports
*/
    const express = require('express');
    const frontRouter = express.Router();
//

/*
Routes definition
*/
    class FrontRouterClass {

        routes(){
            frontRouter.get( '/', (req, res) => {
                res.render('index', {title: 'Homepage'})
            });

            frontRouter.get( '/add-post', (req, res) => {
                res.render('add-post', {title: 'Add post'})
            });
        }

        init(){
            // Get route fonctions
            this.routes();

            // Sendback router
            return frontRouter;
        }
    }
//

/*
Export
*/
    module.exports = FrontRouterClass;
//