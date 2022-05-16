const http = require('http');
const url = require('url');
const queryString = require('query-string');

const hostName = '127.0.0.1';
const port = 3000;



const server = http.createServer((req, res) => {



    const params = queryString.parse(url.parse(req.url, true).search);
        //   console.log(params);

    let resposta;

    if (params.pergunta === 'melhor-technologia-front') {
        resposta = 'React e Angular'
    }

    if (params.pergunta === 'melhor-technologia-back') {
        resposta = 'NodeJS'
    }

    if (params.pergunta !== 'melhor-technologia-front' || 'melhor-technologia-back') {
        resposta = 'Desculpe, não sei. :('
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);

});

server.listen(port, hostName, () => {

    console.log(`Server running at http://${hostName} at port: ${port}`);

})
