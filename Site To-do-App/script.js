const btn = document.querySelector('#btn')
const novaTarefa = document.querySelector('#nova-tarefa')
const limparTarefas = document.querySelector('.limpar-tarefas')
const adicionarTarefa = document.querySelector('.adiocionar-tarefas')

var contagemDosInputs = 0

btn.addEventListener('click', addTarefa)

var arrayTarefa = []

function addTarefa(){   
    var valorNovaTarefa = novaTarefa.value
    var templateTarefas = document.querySelector('#tarefas-template').content
    var copiaTemplateTarefas = document.importNode(templateTarefas, true)
    const containerTarefas = document.querySelector('.container-tarefas')
    const adicionarTarefa = document.querySelector('.adicionar-tarefas')

    var semIdeia1 = document.querySelector('.semIdeia1')
    var semIdeia2 = document.querySelector('.semIdeia2')

    containerTarefas.insertBefore(copiaTemplateTarefas, adicionarTarefa)

    // LOOOOOOOOOOOOP

    for(let i = 0;)
    let ID = document.createAttribute('id')

    contagemDosInputs++ 
    ID.value = 'input-' + (contagemDosInputs)

    semIdeia1.setAttributeNode(ID)
    semIdeia2.setAttribute('for','input-' + (contagemDosInputs))

    arrayTarefa.push(copiaTemplateTarefas)
    console.log(arrayTarefa)

}

