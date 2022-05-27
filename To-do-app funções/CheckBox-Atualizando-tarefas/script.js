var checkboxes = document.querySelectorAll("input[type=checkbox]");
contador = 10
var p = document.querySelector('.teste')

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    if(checkbox.checked){
        contador -= 1
    }else if(!checkbox.cheked){
        contador += 1
    }
    p.innerHTML = `${contador} tarefas restantes!`
  })
});