const express=require('express');  //const app=require('express')(); 
const app=express();

app.get('/',function(req,res){
  res.send('Hola mundo');
}); 

app.get('/saludo',(req,res)=>{
  res.send('Hola mundo soy Dubenis L.');
}); 

app.get('/ejemplo',(req,res)=>{
  res.send('Otro ejemplo de metodo Get.');
  console.log('imprimiendo con uso de metodo get')
}); 

app.listen(3000,function(){
  console.log('El servidor se encuentra activo')
})