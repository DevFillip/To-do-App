const containerTarefas = document.querySelector('.container-tarefas')
const novaTarefa = document.querySelector('#nova-tarefa')
const btnAddTarefa = document.querySelector('#btn')
const tarefasAdicionadas = document.querySelector('.tarefas-adicionadas')
const tarefasAcumprir = document.querySelector('.tarefas-a-cumprir')
const btnLimparTarefas = document.querySelector('.limpar-tarefas')

var numeroDeTarefas = 0
var criacaoDeIdsDeInputs = 0

btnAddTarefa.addEventListener('click', addTarefa)

function addTarefa(){   
    numeroDeTarefas += 1 
    criacaoDeIdsDeInputs += 1

    if(numeroDeTarefas == 1){
        tarefasAcumprir.textContent = `Você tem ${numeroDeTarefas} tarefa!`
    }
    else{
        tarefasAcumprir.textContent = `Você tem ${numeroDeTarefas} tarefas!`
    }

    var divTarefas = document.createElement('div')
    divTarefas.classList.add('tarefas')

    var checkboxes = document.createElement('input')
    checkboxes.setAttribute('type','checkbox')
    checkboxes.setAttribute('id', 'input-' + (criacaoDeIdsDeInputs))
    var labelTarefas = document.createElement('label')
    labelTarefas.setAttribute('for', 'input-' + (criacaoDeIdsDeInputs))
    labelTarefas.innerHTML = `
    <span class="customizar-checkbox"></span>
    `+novaTarefa.value+`
    `
    
    var divEditarExcluir = document.createElement('div')
    divEditarExcluir.classList.add('div-editar-excluir')
    var btnEditar = document.createElement('h6')
    btnEditar.classList.add('editar-tarefa')
    btnEditar.textContent = 'editar'

    var btnExcluir = document.createElement('h6')
    btnExcluir.classList.add('deletar-tarefa')
    btnExcluir.textContent = 'X'

    divEditarExcluir.append(btnEditar, btnExcluir)
    divTarefas.append(checkboxes, labelTarefas, divEditarExcluir)
    tarefasAdicionadas.append(divTarefas)

    checkboxes.addEventListener('change', tarefasRealizadas)

    function tarefasRealizadas(){
        if(checkboxes.checked){
            numeroDeTarefas -= 1
        }else if(!checkboxes.checked){
            numeroDeTarefas += 1
        }
        if(numeroDeTarefas == 1){
            tarefasAcumprir.textContent = `Você tem ${numeroDeTarefas} tarefa!`
        }else if(numeroDeTarefas > 1){
            tarefasAcumprir.textContent = `Você tem ${numeroDeTarefas} tarefas!`
        }
        else{
            tarefasAcumprir.textContent = `Nenhuma tarefa a cumprir`
        }
    } 
   
    btnExcluir.addEventListener('click', deletarTarefa)

    function deletarTarefa(){
        btnExcluir.parentNode.remove()
        labelTarefas.parentNode.remove()
        novaTarefa.value = ''
        novaTarefa.focus()

        if(!checkboxes.checked){
            numeroDeTarefas -= 1
        }

        if(numeroDeTarefas == 1){
            tarefasAcumprir.textContent = `Você tem ${numeroDeTarefas} tarefa!`
        }else if(numeroDeTarefas > 1){
            tarefasAcumprir.textContent = `Você tem ${numeroDeTarefas} tarefas!`
        }
        else{
            tarefasAcumprir.textContent = `Nenhuma tarefa a cumprir`
        }
    }

    btnEditar.addEventListener('click', editarTarefa)

    function editarTarefa(){
        var inputEditarTarefa = document.createElement('input')
        inputEditarTarefa.setAttribute('type', 'text')
        inputEditarTarefa.classList.add('input-edicao')
        labelTarefas.innerHTML = ""
        divEditarExcluir.insertBefore(inputEditarTarefa, btnEditar)
        btnEditar.remove()

        var btnSalvarEdicao = document.createElement('h6')
        btnSalvarEdicao.innerText = `Salvar`
        btnSalvarEdicao.classList.add('botao-salvar')
        divEditarExcluir.insertBefore(btnSalvarEdicao, btnExcluir)

        inputEditarTarefa.focus()

        btnSalvarEdicao.addEventListener('click', salvarEdicao)

        function salvarEdicao(){
            btnSalvarEdicao.remove()
            labelTarefas.innerHTML = `
            <span class="customizar-checkbox"></span> `+inputEditarTarefa.value+`
            `
            inputEditarTarefa.remove()
            divEditarExcluir.insertBefore(btnEditar, btnExcluir)

            novaTarefa.focus()
        }
    }
    novaTarefa.value = ''
    novaTarefa.focus()
    
}

btnLimparTarefas.addEventListener('click', limparTarefas)

function limparTarefas(){
    while(tarefasAdicionadas.firstChild){
        tarefasAdicionadas.removeChild(tarefasAdicionadas.firstChild)
    }
    novaTarefa.value = ''
    novaTarefa.focus()
    numeroDeTarefas = 0
    criacaoDeIdsDeInputs = 0
    tarefasAcumprir.textContent = `Nenhuma tarefa a cumprir`
}