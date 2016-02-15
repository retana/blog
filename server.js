//Import De las librerias
var express=require('express');
var path=require('path');
//Generar una instancia de express;
var app=express();
//Defino el puerto
var puerto=8080;
//Definimos los recursos estaticos a trabajar en el proyecto
app.use(express.static(path.join(__dirname,'public')));
//Rutas
app.get('/',function(peticion,respuesta){
	respuesta.sendFile(__dirname+'/public/index.html');
}); 
app.post('/',function(req,res){
	res.json({message:'hola'});
});

// Si una ruta no coincide muestra error 404
app.use(function(req, res, next) {
    var err = new Error('Recurso no encontrado en el servidor - File Not Found');
    err.status = 404;
    next(err);
});

app.listen(puerto,function(){
	console.log('Servidor iniciado');
});
