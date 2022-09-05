import config from './config';
import apiRouter from './api';

import express from 'express';
const server = express();

server.set('view engine', 'ejs');

server.get(['/','/test'], (req, res) => {
    res.render('index');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.get('*', (req, res) => {
    res.render('index');
})

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});
