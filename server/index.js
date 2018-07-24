import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {
    mongoose
} from "./config/db";
import config from './config/config';
import HomeRoute from "./routes/router";

var app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(HomeRoute);

app.use(function (req, res, next) {
    res.status(404);

    // respond with html page
    if (req.accepts('html')) {
        res.send({
            error: 'Not found'
        });
        return;
    }

    // respond with json
    if (req.accepts('json')) {
        res.send({
            error: 'Not found'
        });
        return;
    }

    // default to plain-text. send()
    res.type('txt').send('Not found');
});
const { app: { port } } = config;

app.listen(port);