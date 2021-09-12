const net = require('net')

const client = net.createConnection({
    port: 5000,
    host: '127.0.0.1'
})

client.on('connect', ()=>{
    console.info('Conexión exitosa!')
    client.write('Test Servidor')
})

client.on('error', (error)=> {
    console.log(error.message)
})