/**
 * Object with values that is used for all aplication
 * 
 * Dependencias: Jquery, JqueryMobile
 */

var Values = {

	server : "serverrest/",
	appTitle : "Prova Móvel",
	appTitleProva : "Prova Disponíveis",
	appTitleAbout : "Prova Móvel - Sobre",
	appFooterAbout : "Sobre",
	mensagemFinalizarSucesso : "Respostas enviada com sucesso!",
	messageErroServidor:"Houve um erro na comunicação com servidor",
	messageUsuarioDeveLogar:"Usuario deve estar logado",
	pages : {},

	init : function() {
		$(".html-from-values").each(function() {
			var id = $(this).attr('appid')
			$(this).html(Values[id]);
		});

		$(".text-from-values").each(function() {
			var id = $(this).attr('appid');
			$(this).text(Values[id]);
		});
		$(".value-from-values").each(function() {
			var id = $(this).attr('appid');
			$(this).val(Values[id]);
		});
	}

};