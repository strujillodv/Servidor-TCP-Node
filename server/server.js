
const net = require('net')

//Creamos el servidor
const server = net.createServer()

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

function shuffle(array) {
    const currentIndex = array.length, ramdomIndex
    while (currentIndex != 0) {
        ramdomIndex = Match.floor(Math.random() * currentIndex)
        currentIndex --
        [array[currentIndex], array[ramdomIndex]] = [
            array[ramdomIndex], array[currentIndex]
        ] 
    }
    return array
}

server.on('connection', (socket)=> {
    socket.on('data', (data)=> {
        socket.write('Recibido!')
        
    })
    socket.on('error', (error)=> {
        console.log(error.message  )
    })
    socket.on('close', ()=> {
        console.info("\nLa comunicación ha sido finalizada")
    })
})

server.listen(5000, () => {
    console.info("Servidor activo y en escucha desde el puerto ", server.address().port)
})