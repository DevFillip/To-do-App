var contador = 0
var p = document.querySelector('.teste')
var contadorDosInputs = 0
var arrayInputs = []
var btn2 = document.querySelector('btn2')

function Testando(){
  contadorDosInputs += 1
  contador += 1
  var input = document.createElement('input')
  input.setAttribute('type','checkbox')
  input.setAttribute('name','nome-dos-inputs')
  input.setAttribute('id', 'input-' + (contadorDosInputs))
  var label = document.createElement('label')
  label.setAttribute('id', 'input-' + (contadorDosInputs))
  label.textContent = 'Só pra conseguir ver'

  document.body.append(input, label)

  input.addEventListener('change', teste)

  function teste(){

          if(input.checked){
              contador -= 1
          }else if(!input.checked){
              contador += 1
          }
          p.innerHTML = `${contador} tarefas restantes!`

    
    
  }
  

}













// Use Array.forEach to add an event listener to each checkbox.
/*checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    if(checkbox.checked){
        contador -= 1
    }else if(!checkbox.cheked){
        contador += 1
    }
    p.innerHTML = `${contador} tarefas restantes!`
  })
});*/