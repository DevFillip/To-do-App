const btn = document.querySelector('#btn')
const novaTarefa = document.querySelector('#nova-tarefa')
const limparTarefas = document.querySelector('.limpar-tarefas')
const adicionarTarefa = document.querySelector('.adicionar-tarefas')
const containerTarefas = document.querySelector('.container-tarefas')
const tarefasAdicionadas = document.querySelector('.tarefas-adicionadas')

var contadorCriacaoId = 0

btn.addEventListener('click', addTarefa)

function addTarefa(){   

    contadorCriacaoId += 1 

    var div = document.createElement('div')
    div.classList.add('tarefas')

    var input = document.createElement('input')
    input.setAttribute('type','checkbox')
    input.setAttribute('id', 'input-' + (contadorCriacaoId))
    var label = document.createElement('label')
    label.setAttribute('for', 'input-' + (contadorCriacaoId))
    label.innerHTML = `
    <span class="customizar-checkbox"></span>
    `+novaTarefa.value+`
    `
    var h6Edicao = document.createElement('h6')
    h6Edicao.classList.add('editar-tarefa')
    h6Edicao.textContent = 'editar'

    var h6= document.createElement('h6')
    h6.classList.add('deletar-tarefa')
    h6.textContent = 'X'

    div.append(input, label, h6Edicao ,h6)

    tarefasAdicionadas.append(div)

    h6.addEventListener('click', deletarTarefa)

    function deletarTarefa(){
        h6.parentNode.remove()
    }

    h6Edicao.addEventListener('click', testando)

    function testando(){
        var novoInput = document.createElement('input')
        novoInput.setAttribute('type', 'text')
        label.innerHTML = ""
        div.insertBefore(novoInput, h6Edicao)
        h6Edicao.remove()

        var botaoSalvar = document.createElement('h6')
        botaoSalvar.innerText = `Salvar`
        div.insertBefore(botaoSalvar, h6)

        botaoSalvar.addEventListener('click', salvarEdicao)

        function salvarEdicao(){
            botaoSalvar.remove()
            
            label.innerHTML = `
            <span class="customizar-checkbox"></span> `+novoInput.value+`
            `
            novoInput.remove()

            div.insertBefore(h6Edicao, h6)
        }
        }
    }

limparTarefas.addEventListener('click', deletarTudo)

function deletarTudo(){
    while(tarefasAdicionadas.firstChild){
        tarefasAdicionadas.removeChild(tarefasAdicionadas.firstChild)
    }
}