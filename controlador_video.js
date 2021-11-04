var video = document.querySelector("#mivideo");

var boton_rep=document.getElementById("reproducir")



function reproducir(){

	if (video.paused){

		video.play()

		boton_rep.innerHTML="pausar";

	}else{

		video.pause()

		boton_rep.innerHTML="reproducir";

	}

}
function detener(){
	video.pause()
	video.currentTime = 0
	boton_rep.innerHTML = "reproducir"
}



function saltar(fotogramas){

	video.currentTime += fotogramas

}