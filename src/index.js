const express = require('express');
const server = express();

const CidadeRoutes = require('./router/CidadeRouter');

server.use(express.json());

server.use('/cidade', CidadeRoutes);

server.listen(3000, () => {
    console.log("API ONLINE");
});