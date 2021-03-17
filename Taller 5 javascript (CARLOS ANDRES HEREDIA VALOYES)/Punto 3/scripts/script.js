function cambios(){
	let elementos = document.getElementsByClassName("titulos");
	for(let i = 0; i < elementos.length; i++){
		elementos[i].style.backgroundColor = "black";
	}
	document.getElementById("tab").style.color = "red";
}