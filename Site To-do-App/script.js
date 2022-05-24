const btn = document.querySelector('#btn')
const novaTarefa = document.querySelector('#nova-tarefa')
const limparTarefas = document.querySelector('.limpar-tarefas')
const adicionarTarefa = document.querySelector('.adiocionar-tarefas')

btn.addEventListener('click', addTarefa)

function addTarefa(){   
    var valorNovaTarefa = novaTarefa.value
    var templateTarefas = document.querySelector('#tarefas-template').content
    var copiaTemplateTarefas = document.importNode(templateTarefas, true)
    const containerTarefas = document.querySelector('.container-tarefas')
    const adicionarTarefa = document.querySelector('.adicionar-tarefas')

    copiaTemplateTarefas.document.getEle

    containerTarefas.insertBefore(copiaTemplateTarefas, adicionarTarefa)



}

