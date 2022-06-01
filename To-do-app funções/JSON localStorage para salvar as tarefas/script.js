const inputText = document.querySelector('#btnText')
const div = document.querySelector('.div')
const texto = document.querySelector('#texto')
const btn = document.querySelector('#btn')

const tarefas = localStorage.getItem('tarefas')
var arrayTarefas

if(tarefas === null){
    arrayTarefas = []
}else{
    arrayTarefas = JSON.parse(tarefas)
    for(let i = 0; i < arrayTarefas.length; i++){
        console.log(arrayTarefas[i])
        var pTeste = document.createElement('p')
        pTeste.textContent = arrayTarefas[i]
        div.insertBefore(pTeste, btn)
    }
}

btn.addEventListener('click', adicionarNovoTexto)

function adicionarNovoTexto(){
    var p = document.createElement('p')
    p.textContent = `${inputText.value}`
    div.insertBefore(p, btn)
    arrayTarefas.push(inputText.value)
    localStorage.setItem('tarefas', JSON.stringify(arrayTarefas))
}









/*
const estaSalvoNoLocalStorage = localStorage.getItem("texto")
if(estaSalvoNoLocalStorage){
    texto.textContent = estaSalvoNoLocalStorage
}

inputText.addEventListener('input', letras => {
    texto.textContent = letras.target.value
})

function salvarNoStorageLocal(){
    localStorage.setItem('texto', texto.textContent)
}

btn.addEventListener('click', salvarNoStorageLocal)
*/
