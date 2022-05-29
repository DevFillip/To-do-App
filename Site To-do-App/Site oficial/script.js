const btn = document.querySelector('#btn')
const novaTarefa = document.querySelector('#nova-tarefa')
const limparTarefas = document.querySelector('.limpar-tarefas')
const adicionarTarefa = document.querySelector('.adicionar-tarefas')
const containerTarefas = document.querySelector('.container-tarefas')
const tarefasAdicionadas = document.querySelector('.tarefas-adicionadas')
const tarefasAcumprir = document.querySelector('.tarefas-a-cumprir')

var tarefasAcumprirContador = 0
var contadorCriacaoId = 0

btn.addEventListener('click', addTarefa)

function addTarefa(){   

    contadorCriacaoId += 1 
    tarefasAcumprirContador += 1

    if(tarefasAcumprirContador == 1){
        tarefasAcumprir.innerHTML = `<p>Você tem ${tarefasAcumprirContador} tarefa!</p>`
    }
    else{
        tarefasAcumprir.innerHTML = `<p>Você tem ${tarefasAcumprirContador} tarefas!</p>`
    }

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

    var divEditarExcluir = document.createElement('div')
    divEditarExcluir.classList.add('div-editar-excluir')
    var h6Edicao = document.createElement('h6')
    h6Edicao.classList.add('editar-tarefa')
    h6Edicao.textContent = 'editar'

    var h6 = document.createElement('h6')
    h6.classList.add('deletar-tarefa')
    h6.textContent = 'X'

    divEditarExcluir.append(h6Edicao, h6)

    div.append(input, label, divEditarExcluir)

    tarefasAdicionadas.append(div)


    h6.addEventListener('click', deletarTarefa)

    function deletarTarefa(){
        h6.parentNode.remove()
        label.parentNode.remove()

        tarefasAcumprirContador -= 1

         if(tarefasAcumprirContador == 1){
            tarefasAcumprir.innerHTML = `<p>Você tem ${tarefasAcumprirContador} tarefa!</p>`
        }else if(tarefasAcumprirContador > 1){
            tarefasAcumprir.innerHTML = `<p>Você tem ${tarefasAcumprirContador} tarefas!</p>`
        }
        else{
            tarefasAcumprir.innerHTML = `<p>Nenhuma tarefa a cumprir</p>`

        }

    }

    h6Edicao.addEventListener('click', editarTarefa)

    function editarTarefa(){
        var novoInput = document.createElement('input')
        novoInput.setAttribute('type', 'text')
        novoInput.classList.add('input-edicao')
        label.innerHTML = ""
        divEditarExcluir.insertBefore(novoInput, h6Edicao)
        h6Edicao.remove()

        var botaoSalvar = document.createElement('h6')
        botaoSalvar.innerText = `Salvar`
        botaoSalvar.classList.add('botao-salvar')
        divEditarExcluir.insertBefore(botaoSalvar, h6)

        botaoSalvar.addEventListener('click', salvarEdicao)

        function salvarEdicao(){
            botaoSalvar.remove()
            
            label.innerHTML = `
            <span class="customizar-checkbox"></span> `+novoInput.value+`
            `
            novoInput.remove()

            divEditarExcluir.insertBefore(h6Edicao, h6)
        }
        }
    }

limparTarefas.addEventListener('click', deletarTudo)

function deletarTudo(){
    while(tarefasAdicionadas.firstChild){
        tarefasAdicionadas.removeChild(tarefasAdicionadas.firstChild)
    }
    tarefasAcumprirContador = 0
    contadorCriacaoId = 0
    tarefasAcumprir.innerHTML = `<p>Nenhuma tarefa a cumprir</p>`

}