/*
Imports
*/
    // NodeJS
    const { Router } = require('express');
    const passport = require('passport');

    // Routers
    const FrontRouterClass = require('./front/front.router');
    const PostRouterClass = require('./post/post.router');
    const AuthRouterClass = require('./auth/auth.router')

    // Authentication
    const { setAuthentication } = require('../services/auth.service');
    setAuthentication(passport);
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
    const postRouter = new PostRouterClass( { passport } );
    const authRouter = new AuthRouterClass();
//

/*
Configure routes
*/
    // Set API router
    apiRouter.use('/post', postRouter.init());
    apiRouter.use('/auth', authRouter.init());
    
    // Set front router
    mainRouter.use('/', frontRouter.init());
//

/*
Export
*/
    module.exports = { mainRouter };
//