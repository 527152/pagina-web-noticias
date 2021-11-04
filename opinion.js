var item = document.querySelector("#lista-1")

function guardar(){
	sessionStorage.setItem("apunte", item.innerHtml)
	alert("opinión guardada!")

}

function mostrar(){
	if(sessionStorage.getItem("apunte")){
		item.innerHtml = sessionStorage.getItem("apunte")
	}

}

function borrar(){
	sessionStorage.clear()
	location.reload()
	alert("opinión eliminada")


}