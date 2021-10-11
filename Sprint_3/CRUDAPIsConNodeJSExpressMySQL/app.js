const express = require ('express');
const mysql = require('mysql2');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());


// MySql
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Colombia.2021',
    database: 'antonela_reposteria',
    insecureAuth: true
});

// Route
app.get('/',(req, res)=>{
    res.send('¡Bienvenido a nuestra API!');
});

// CRUD Módulo Usuarios

// Consulta toda la Tabla de Usuarios

app.get('/usuarios', (req, res) =>{
    const sql = 'SELECT * FROM usuarios';

    connection.query(sql,(error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay registros en la tabla');   
        }
    });

    /* res.send('Listar los usuarios');
 */});

//Consulta sólo por Número de identificación

 app.get('/usuarios/ni/:num_identificacion', (req, res) =>{
    const {num_identificacion} = req.params 
    const sql = 'SELECT * FROM usuarios WHERE num_identificacion ='+ num_identificacion;

    connection.query(sql,(error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('No hay coincidencias');   
        }
    });
});

// Consulta sólo por Estado

app.get('/usuarios/es/:estado', (req, res) =>{
    const {estado} = req.params 
    const sql = 'SELECT * FROM usuarios WHERE estado =\''+estado+'\'';

    connection.query(sql,(error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('No hay coincidencias');   
        }
    });
}); 

// Consulta sólo por Rol

app.get('/usuarios/r/:rol', (req, res) =>{
    const {rol} = req.params 
    const sql = 'SELECT * FROM usuarios WHERE rol =\''+rol+'\'';

    connection.query(sql,(error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('No hay coincidencias');   
        }
    });
}); 

// Para crear registro nuevo en la Tabla usuarios

app.post('/add', (req, res) =>{
    const sql = 'INSERT INTO usuarios SET ?';

    const usuariosObj = {
        tipo_documento: req.body.tipo_documento,
        num_identificacion: req.body.num_identificacion,
        nombre_usuario: req.body.nombre_usuario,
        estado: req.body.estado,
        rol: req.body.rol,
        email: req.body.email,
        telefono_usuario: req.body.telefono_usuario
    }

    connection.query(sql, usuariosObj, error => {
        if (error) throw error;
        res.send('¡Se crea usuario!');
    })
});

// Para actualizar registro en la Tabla usuarios

app.put('/update/:id_usuarios', (req, res) =>{
    const {id_usuarios} = req.params;
    const {tipo_documento, num_identificacion, nombre_usuario, estado, rol, email, telefono_usuario} = req.body;
    const sql = 'UPDATE usuarios SET tipo_documento = \''+tipo_documento+'\', num_identificacion = \''+num_identificacion+'\', nombre_usuario = \''+nombre_usuario+'\', estado = \''+estado+'\', rol = \''+rol+'\', email = \''+email+'\', telefono_usuario = \''+telefono_usuario+'\' WHERE id_usuarios = \''+id_usuarios+'\'';

    connection.query(sql, error => {
        if(error) throw error;
        res.send('¡Se actualiza usuario!');
    })
});

/* app.delete('/delete/:id', (req, res) =>{
    res.send('Se borró usuario');
});
 */

// Check connect
connection.connect(error => {
    if (error) throw error;
    console.log('¡Servidor de base de datos en ejecución!');
});

app.listen(PORT, () => console.log('¡Servidor en ejecución en el puerto ${PORT}'));