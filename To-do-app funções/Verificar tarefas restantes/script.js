const tarefas = document.querySelectorAll('.checkboxes')
const tarefasRestantes = document.querySelector('.tarefas-restantes')
var tarefasContagem = 3;

function teste(){

    tarefas.forEach(function(el){
        if(el.checked){
            tarefasContagem--
        }
    })
    tarefasRestantes.innerHTML = `Ainda existem ${tarefasContagem} tarefas restantes`

}



        

    
     
        
    

   
