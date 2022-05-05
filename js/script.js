const lista = [];

function Produto(id,produto,preco){
    return {
        id,
        produto,
        preco
    }
}
    
function Salvar(){
    const id = 0;
    const produto = document.querySelector('#produto').value
    const preco = document.querySelector('#preco').value
    let add = lista.push(Produto(id,produto,preco))

  
    listarProduto();
 
}

function listarProduto(){

    const tbody = document.querySelector('#tbody')
    tbody.innerHTML = ''
  
    for(let i = 0; i< lista.length; i++){
        
        let  tr = tbody.insertRow()
        let  id = tr.insertCell();
        let  produto = tr.insertCell();
        let  preco = tr.insertCell();

        id.innerHTML = lista[i].id++;
        produto.innerHTML = lista[i].produto;
        preco.innerHTML = lista[i].preco;

    }
}

