const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Configuración para poder recibir el body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  // app.get('/:saludo',(request,response)=>{
  //response.send('Hola mundo soy Dubenis L.');
  console.log('========= /  ======');
  response.send({ message: "Tu primera peticion por /" });
  console.log(request.params);
  // console.log(request.query);
});

app.get("/home", (req, res) => {
  console.log('========= /home  =====');
  res.send({ message: "Tu peticion por /home" });
  console.log(req.path);
  console.log(req.params);
  console.log(req.query);
});

//Params
//http://localhost:3000/user/1912 <--- el id
app.get("/user/:uid", (req, res) => {
  console.log('========= /user  =====');
  console.log(req.query); //
  console.log(req.path); //endpoint
  console.log(req.params);
  // const uid = req.params.uid
  const { uid } = req.params;
  res.send({ message: `Id buscado: ${uid}` });
});

//Querys
//http://localhost:3000/search?q=gatos&color=negro&vidas=6
app.get("/search", (req, res) => {
  console.log('========= /search  ======');
  console.log(req.path); //endpoint
  console.log(req.params);
  console.log(req.query);
  // console.log(req.query.q);
  // console.log(req.query.color);
  // console.log(req.query.vidas);
  // const { q, color, vidas } = req.query;
  // res.send({ q, color, vidas });
});

app.post("/create/user", (req, res) => {
  console.log(req.body);
  const { name, last_name, age, is_active } = req.body;
  res.status(201).send({
    id: "19",
    name,
    last_name,
    age,
    is_active
  });
});


app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});
