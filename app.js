const http = require('http');
const queryString = require('query-string')
const url = require('url');
const fs = require('fs');


const hostName = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {

    const urlParse = url.parse(req.url, true);
    const params = queryString.parse(urlParse.search);
    let resposta;

    if (urlParse.pathname == '/criar-usuario') {

        fs.writeFile('./users/' + params.id + '.json', JSON.stringify(params), (err) => {
            if (err) throw err;
            resposta = console.log('Usuario criado com sucesso!');
        })

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain, charset=utf-8');
        res.end('criar usuario');

    }

    if (urlParse.pathname == '/selecionar-usuario') {
        
        fs.readFile('./users/' + params.id + '.json', (err, data) => {
            resposta = console.log('Usuario encontrado com sucesso!');
            console.log(JSON.parse(data)); 

            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain, charset=utf-8');
            res.end('encontrar usuario');

        }); 

        

    }

    if (urlParse.pathname == '/atualizar-usuario') {

        fs.writeFile('./users/' + params.id + '.json', JSON.stringify(params), (err) => {
            if (err) throw err;
            resposta = console.log('Usuario atualizado com sucesso!');
        })

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain, charset=utf-8');
        res.end('atualizar usuario');

    }

    if (urlParse.pathname == '/remover-usuario'){

        fs.unlink('./users/' + params.id + '.json', (err) => {
            resposta = console.log('Usuario removido.');
            
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain, charset=utf-8');
            res.end('remover usario');  
        })

    }

    
});

server.listen(port, hostName, () => {

    console.log(`Server running at http://${hostName} at port: ${port}`);

})
