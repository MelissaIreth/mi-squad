
function MiembroSquad(nombre,apellido,edad,hobbies,foto,photo,id){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad
	this.hobbies = hobbies
	this.foto = new Image()
	this.photo = "assets/imagen/"+this.nombre+".jpg" 
	this.id = id

}
function Comentario(id_miembro, comentario, likes){
	this.id_miembro = id_miembro
	this.comentario = comentario
	this.likes = 0
}

var Tania = new MiembroSquad("Tania","Ramirez","veintisiempre","Viajes, Gatos, Tomar técito a las 4",1)
var Pauli = new MiembroSquad("Paulina", "Aros" , 28,"Hacer libretas, Acariciar gatos, Manicure",2)
var Karla = new MiembroSquad("Karla", "Jeria", 35,"Comer chocolates, Viajar, Ir al cine",3)
var Amala = new MiembroSquad("Valentina","Amala Kamala", 29, "Bordar, Tejer, Dormir",4)
var Paula = new MiembroSquad("Paula", "Ponce", 28, "Música, Aves, Heroes of the storm",5)
var Mariela = new MiembroSquad("Mariela", "Cubillos", 36, "Tejer, Comer chocolate, Cocinar",6)
var Marcela = new MiembroSquad("Marcela", "Cabello",31,"Cantar, Yoga, Cocinar",7)
var Meli = new MiembroSquad("Melissa", "Pacheco", 25, "Dormir, Comer, Matilda",8)
var arr=[]
arr.push(Tania,Pauli,Karla,Amala,Paula,Mariela,Marcela,Meli)

	arr.forEach(function(cv){
   document.getElementById("sopaipas").innerHTML+="<div class='usuario'><img width=200 src="+cv.photo+"><ul><br><li><b>Nombre: "+cv.nombre+" "+cv.apellido+"<li>Edad: "+cv.edad+"<li>Hobbies: <i>"+cv.hobbies+"</li></ul></i></b></div><div><textarea name='comment' id='comment'></textarea><br><button type='button'>Dejar Comentario</button><br><br/></div>"

})  



