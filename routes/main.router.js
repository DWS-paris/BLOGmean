/*
Imports
*/
    // NodeJS
    const { Router } = require('express');

    // Routers
    const FrontRouterClass = require('./front/front.router');
    const PostRouterClass = require('./post/post.router')
//

/*
Define routers
*/
    // Parent
    const mainRouter = Router();
    const apiRouter = Router();
    mainRouter.use('/api', apiRouter);

    // Child
    const frontRouter = new FrontRouterClass();
    const postRouter = new PostRouterClass();
//

/*
Configure routes
*/
    // Set API router
    apiRouter.use('/post', postRouter.init());
    
    // Set front router
    mainRouter.use('/', frontRouter.init());
//

/*
Export
*/
    module.exports = { mainRouter };
//