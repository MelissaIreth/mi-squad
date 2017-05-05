function MiembroSquad(nombre,apellido,edad,hobbies){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad
	this.hobbies = hobbies
}

var tania = new MiembroSquad("Tania","Ramirez","veintisiempre","Viajes, Gatos, Tomar técito a las 4")
var Pauli = new MiembroSquad("Paulina", "Aros" , 28,"Hacer libretas, Acariciar gatos, Manicure")
var Karla = new MiembroSquad("Karla", "Jeria", 35,"comer chocolates, viajar,ir al cine")
var Amala = new MiembroSquad("Valentina Amala"," Kamala", 29, "bordar, tejer, dormir")
var Paula = new MiembroSquad("Paula", "Ponce", 28, "música, aves, heroes of the storm")
var Mariela = new MiembroSquad("Mariela", "Cubillos", 36, "tejer, Comer chocolate y cocinar")
var Marcela = new MiembroSquad("Marcela", "Cabello",31,"cantar, yoga, cocinar")

var arr=[]
arr.push(tania)

arr.forEach(function(cv){
   document.write("<div><b>"+"Name: "+cv.nombre+cv.apellido+"</b> , " +cv.edad+" ,<i>"+cv.hobbies+"</i><br></br></div>")
}) 