/* 
Imports
*/
    // NodeJS
    require('dotenv').config();
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const ejs = require('ejs');
    const cookieParser = require('cookie-parser');

    // Inner
    const mongoDB = require('./services/db.service');
    const { mainRouter } = require('./routes/main.router');
//

/*
Server configuration
*/
    // Define server
    const port = process.env.PORT;
    const server = express();

    // Define server class
    class ServerClass {
        // Initialization fonction
        init(){
            // View engine configuration
            server.set('view engine', 'ejs');

            // Static path configuration
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            //=> Use BodyParser to get user body data
            server.use(bodyParser.json({limit: '10mb'}));
            server.use(bodyParser.urlencoded({ extended: true }));

            //=> Use CookieParser to setup serverside cookies
            server.use(cookieParser(process.env.COOKIE_SECRET));

            //=> Set server main router
            server.use('/', mainRouter);

            // Start server
            this.launch();
        }

        launch(){
            // Connnect MongoDB
            mongoDB.initClient()
            .then( db => {
                // Launch server
                server.listen(port, () => console.log({ 
                    db: db, 
                    server: `Server is running on port ${port}` 
                }))
            })
            .catch( err => {
                console.log(err)
            })
        }
    }
//

/*
Start server
*/
    new ServerClass().init();
//