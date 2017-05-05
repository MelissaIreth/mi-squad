function MiembroSquad(nombre,apellido,edad,hobbies){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad
	this.hobbies = hobbies
}

var Tania = new MiembroSquad("Tania","Ramirez","veintisiempre","Viajes, Gatos, Tomar técito a las 4")
var Pauli = new MiembroSquad("Paulina", "Aros" , 28,"Hacer libretas, Acariciar gatos, Manicure")
var Karla = new MiembroSquad("Karla", "Jeria", 35,"comer chocolates, viajar,ir al cine")
var Amala = new MiembroSquad("Valentina Amala"," Kamala", 29, "bordar, tejer, dormir")
var Paula = new MiembroSquad("Paula", "Ponce", 28, "música, aves, heroes of the storm")
var Mariela = new MiembroSquad("Mariela", "Cubillos", 36, "tejer, Comer chocolate y cocinar")
var Marcela = new MiembroSquad("Marcela", "Cabello",31,"cantar, yoga, cocinar")

var arr=[]
arr.push(Tania,Pauli,Karla,Amala,Paula,Mariela,Marcela)

arr.forEach(function(cv){
   document.write("<div>"+"<b>Nombre: </b>"+cv.nombre+" "+cv.apellido+"<ul><li><b>Edad: </b>" +cv.edad+"<li><b>Hobbies: </b><i>"+cv.hobbies+"</li></ul></i><br></br></div>")
}) 