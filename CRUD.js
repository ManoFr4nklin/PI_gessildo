document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    // Carrega os produtos do Local Storage
    const loadProducts = () => {
        const products = JSON.parse(localStorage.getItem('produtos')) || [];
        productList.innerHTML = '';
        products.forEach((produto, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${produto.nome} - R$${produto.preco.toFixed(2)} - Qtd: ${produto.quantidade} - Próximo Carregamento: ${produto.data_carregamento}
                <button onclick="deleteProduct(${index})">Deletar</button>
            `;
            productList.appendChild(li);
        });
    };

    // Adiciona um produto
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const preco = parseFloat(document.getElementById('preco').value);
        const quantidade = parseInt(document.getElementById('quantidade').value);
        const data_carregamento = document.getElementById('data_carregamento').value;

        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        produtos.push({ nome, preco, quantidade, data_carregamento });
        localStorage.setItem('produtos', JSON.stringify(produtos));

        productForm.reset();
        loadProducts();
    });

    // Deleta um produto
    window.deleteProduct = (index) => {
        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        produtos.splice(index, 1);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        loadProducts();
    };

    // Carrega os produtos ao iniciar
    loadProducts();
});
