//====================ADICIONAR/REMOVER TAREFAS=======================
// Cria um botao de fechar e anexar ele a cada item da lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Quando clicar no 'x', apaga a tarefa
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
	var div = this.parentElement;
	div.style.display = "none";
  }
}

 // Risca a tarefa e muda a cor, quando clica na terefa.
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
	ev.target.classList.toggle('checked');
  }
}, false);

// Quando clicar em 'adicionar' vai acrescentar uma nova tarefa
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
	alert("Você precisa escrever alguma tarefa!");
  } else {
	document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  

  for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
	  var div = this.parentElement;
	  div.style.display = "none";
	}
  }
}

  //=============Enviar com Enter==============
  const inputEle = document.getElementById('myInput');
  inputEle.addEventListener('keyup', function(e){
    var key = e.which || e.keyCode;
    if (key == 13) { // codigo da tecla enter
      var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
      alert("Você precisa escrever alguma tarefa!");
      } else {
      document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      

      for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
      }
      // alert('carregou enter o valor digitado foi: ' +this.value);

    }
  });

//============================DRAG AND DROP================================

$( function() {
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
  } );

  //==================LOCAL STORAGE======================================

document.getElementById('myInput').value = localStorage.Texto;

var salvarData = function () {
  var texto = document.getElementById('myInput').value;
  localStorage.setItem('Texto', texto)
}

document.onchange = salvarData


