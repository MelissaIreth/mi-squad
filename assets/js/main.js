function MiembroSquad(nombre,apellido,edad,hobbies){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad
	this.hobbies = hobbies
}

var Tania = new MiembroSquad("Tania","Ramirez","veintisiempre","Viajes, Gatos, Tomar técito a las 4")
var Pauli = new MiembroSquad("Paulina", "Aros" , 28,"Hacer libretas, Acariciar gatos, Manicure")
var Karla = new MiembroSquad("Karla", "Jeria", 35,"Comer chocolates, Viajar, Ir al cine")
var Amala = new MiembroSquad("Valentina Amala"," Kamala", 29, "Bordar, Tejer, Dormir")
var Paula = new MiembroSquad("Paula", "Ponce", 28, "Música, Aves, Heroes of the storm")
var Mariela = new MiembroSquad("Mariela", "Cubillos", 36, "Tejer, Comer chocolate, Cocinar")
var Marcela = new MiembroSquad("Marcela", "Cabello",31,"Cantar, Yoga, Cocinar")
var Meli = new MiembroSquad("Melissa", "Pacheco", 25, "Dormir, Comer, Matilda")

var arr=[]
arr.push(Tania,Pauli,Karla,Amala,Paula,Mariela,Marcela,Meli)

arr.forEach(function(cv){
   document.write("<div>"+"<b>Nombre: "+cv.nombre+" "+cv.apellido+"<ul><li>Edad: "+cv.edad+"<li>Hobbies: <i>"+cv.hobbies+"</li></ul></i><br></b></div>")
}) 

