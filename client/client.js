const net = require('net')
const read = require('readline-sync')

//Funcion para capturar texto por consola
function sendPetition() {
    let consoleRead = read.question('\nIngrese el tipo de consulta:\n')
    
    if (consoleRead == 'exit') {
        console.info('\nConexión Finalizada!')
        client.end()
    } else {
        client.write(consoleRead)
    }
}

//Creamos la conexión del cliente
const client = net.createConnection({
    port: 5000,
    host: '127.0.0.1'
})

//Aplicamos la logica cuando se conecta
client.on('connect', ()=>{
    console.info('Conexión exitosa!\n')
    sendPetition()
})

//Cuando el servidor envie información se ejecutara
client.on('data', (data)=>{
    console.clear()
    console.info('La respuesta obtenida del servidor es:\n ->'+data.toString('utf-8'))
    sendPetition()
})

//En caso de tener un error la conexion mostrara el error
client.on('error', (error)=> {
    console.log(error.message)
})