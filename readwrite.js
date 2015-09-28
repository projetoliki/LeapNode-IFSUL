/*
 * Module dependencies
 */
var express = require('express')
var fs = require('fs');

var app = express()

ROOT_APP_PATH = fs.realpathSync('.'); 
console.log(ROOT_APP_PATH);

app.get("/", function(req, res){
	
	salvaArquivo(req.param('s'));
	res.end("Salvou o arquivo");
	 

})

app.get("/learquivo", function(req, res){
	console.log(req.query);
	leArquivo(res);
	 

})


app.post("/", function(req, res){
	res.end("Olá mundo")

})
app.listen(3000)
console.log("Servidor rodando...")


function salvaArquivo(string){
	fs.writeFile("test.txt", string, function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("The file was saved!");
	});
}

function leArquivo(res){
	var arquivo = "";
	fs.readFile('test.txt', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  console.log(data);
	  res.end(data);
	});
}
