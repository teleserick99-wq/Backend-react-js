const express = require('express');
const server = express();

const CidadeRoutes = require('./router/CidadeRouter');
const PessoaRoutes = require('./router/PessoaRoutes');

server.use(express.json());

server.use('/cidade', CidadeRoutes);
server.use('/pessoa', PessoaRoutes);

server.listen(3000, () => {
    console.log("API ONLINE");
});