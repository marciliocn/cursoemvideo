function mudaFoto(foto) {
	if (foto != "bk") {
		arquivo = "_imagens/" + foto + ".png";
	} else {
		arquivo = "_imagens/glass-oculos-preto-peq.png";
	}

	document.getElementById("icone").src = arquivo;
}