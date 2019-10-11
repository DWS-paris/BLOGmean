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
                res.render('index')
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