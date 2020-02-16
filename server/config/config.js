// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 5000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
// process.env.CADUCIDAD_TOKEN = '48h';


// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';



// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/reto';
} else {
    urlDB = process.env.MONGO_URI;
    //'mongodb+srv://ssssss:sss@cluster0-t8ivy.mongodb.net/"nombre-basedatos-sin-comillas"';

}
process.env.URLDB = urlDB;
