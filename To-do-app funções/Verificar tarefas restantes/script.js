const tarefasRestantes = document.querySelector('.tarefas-restantes')
var tarefas = 0;

function teste(){
    const checkboxes = document.querySelector('.checkboxes')

    for (um in checkboxes){
        if(um.checked){
            tarefas -= 1
        } 
        else if(um.checked){
            tarefas += 1
        }
        tarefas
        
        Restantes.innerHTML = `Ainda existem ${tarefas} tarefas restantes`
    }

    
}
    
     
        
    

   
