let totalGeral = 0;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let precoProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    if(quantidade == '' || quantidade == 0) {
        alert('Informe a quantidade do produto');
        return;
    }

    let subtotalProduto = quantidade * precoProduto

    console.log(`Nome do Produto: ${nomeProduto}`);
    console.log(`Preço do Produto: ${precoProduto}`);
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Subtotal: ${subtotalProduto}`);

    let carrinho = document.getElementById('lista-produtos');
    let item = document.createElement('section');                    
    item.classList.add('carrinho__produtos__produto');
    item.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotalProduto}</span>`;
    carrinho.appendChild(item);

    totalGeral = totalGeral + subtotalProduto;
    
    let total = document.getElementById('valor-total');

    total.textContent = `R$ ${totalGeral}`;

    document.getElementById('quantidade').value = '';
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}