function dibujo1() {
	var elemento1 = document.querySelector("#lienzo1")
    var forma1 = elemento1.getContext('2d')

    
    forma1.strokeRect(0,0,700,400)
    forma1.strokeRect(25,25,650,350)
    forma1.strokeRect(15,15,670,370)


}

window.addEventListener("load", dibujo1)

