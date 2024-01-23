const elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
    duvida.classList.toggle('ativa')
  })
})
//forEach = para cada elemento//

//toggle = liga e desliga//