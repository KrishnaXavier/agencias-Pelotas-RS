window.onload = function(){	
	init();
}

function init(){		
	let main = g("slot-tabela");
	c(main);
	html(main, data);
}

function html(slot, dados){
	html = "";
	c(dados.length);

	html += '<table class="table-fill">';
	html += '<thead> <tr> <th class="text-left">Nome</th> <th class="text-left">Contato</th> <th class="text-left">Endereço</th> </thead>';
	html += '<tbody class="table-hover">';
	for(i=0; i<dados.length; i++){
		html += '<tr>';
		html += '<td class="text-left">'+dados[i].nome+'</td>';
		html += '<td class="text-left">'+dados[i].contato+'</td>';
		html += '<td class="text-left">'+dados[i].endereco+'</td>';
		//html += '<td class="text-left">'+dados[i].complemento+'</td>';
		//html += '<td class="text-left">'+dados[i].area+'</td>';
		html += '</tr>';
	}
	html += '</tbody>';
	html +='</table>';

	slot.innerHTML = html;
}

/* funções de redução */
function c(t){console.log(t);}
function g(id){return document.getElementById(id);}
