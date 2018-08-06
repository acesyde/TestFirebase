// Import everything from express and assign it to the express variable
import * as debug from 'debug';
import * as express from 'express';

// Import WelcomeController from controllers entry point
import {WelcomeController} from './Controllers';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: string = process.env.PORT || '3000';

// Mount the WelcomeController at the /welcome route
app.use('/welcome', WelcomeController);

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    debug(`Listening at http://localhost:${port}/`);
});