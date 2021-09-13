
const net = require('net')

//Creamos el servidor
const server = net.createServer()

// Alimentamos la informaicón de los arrays
const phrases = [
    "La tecnología se alimenta a si misma. La tecnología hace posible más tecnología.-Alvin Toffler.",
    "La tecnología es sólo una herramienta. En términos de llevar a los niños a trabajar juntos y motivarlos, el profesor es el más importante.-Bill Gates.",
    "La máquina tecnológicamente más eficiente que el hombre ha inventado es el libro.-Northrop Frye.",
    "Ya no hacen más los bugs como bunny - Olav Mjelde",
    "Un lenguaje de programación es de bajo nivel cuando requiere que prestes atencion a lo irrelevante.-Alan J. Perlis.",
    "Hablar es barato. Enséñame el código.-Linus Torvalds ",
    "No me importa si funciona en su máquina! No me envían su máquina!. -Vidiu Platon",
    "Siempre codifica como si la persona que finalmente mantendrá tu código fuera un psicópata violento que sabe dónde  ives. -Martin Golding"
]
const books = [
    "Divina Comedia - Dante Alighieri",
    "Don Quijote de la Mancha - Miguel de Cervantes",
    "Cien años de soledad - Gabriel García Márquez",
    "Moby Dick - Herman Melville",
    "Ana Karenina - Lev Tolstói",
    "Eneida - Virgilio",
    "Otelo - William Shakespeare",
    "El viejo y el mar - Ernest Hemingway",
    "Orgullo y prejuicio - Jane Austen"
]

//Creamos la función para elegir un valor aleatorio
function shuffle(array) {
    return array[Math.floor(Math.random()*array.length)];     
}

//Escribimos la lógica del servidor
server.on('connection', (socket)=> {
    //Cuando el servidor recibe información ejecuta
    socket.on('data', (data)=> {
        switch(data.toString('utf-8')){
            case 'book':
                socket.write(shuffle(books))
            break
            case 'libro':
                socket.write(shuffle(books))
            break
            case 'phrase':
                socket.write(shuffle(phrases))
            break
            case 'frase':
                socket.write(shuffle(phrases))
            break
            default:
                socket.write('No existen resultados, intenta nuevamente')
            break
        }
        console.info('Consulta Recibida para '+data.toString('utf-8')+'!')
    })
    //Si hay algun tipo de error
    socket.on('error', (error)=> {
        console.log(error.message  )
    })
    //Cuando se cierra la conexión ejecuta
    socket.on('close', ()=> {
        console.info("\nLa comunicación ha sido finalizada")
    })
})

//Lanzamos el servidor
server.listen(5000, () => {
    console.info("Servidor activo y en escucha desde el puerto ", server.address().port)
})