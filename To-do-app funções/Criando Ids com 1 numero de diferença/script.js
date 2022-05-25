
var array = []

const inputTexto = document.querySelector('#input-text')

var labelsId = 0;
var pId = 0;

function testando(){
    array.push(inputTexto.value)
    console.log(array)

    labelsId += 1
    pId += 1
    
    var div = document.createElement('div')
    var labels = document.createElement('label')
    labels.setAttribute('id', 'input-' + (labelsId))
    var input = document.createElement('input')
    input.setAttribute('id', 'input-' + (pId))

    div.append(labels, input)
    document.body.append(div)



}





        

    
     
        
    

   
