const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const resultContainer = document.querySelector('#resultContainer');


let listaDeProdutos;
fetch('lista.json')
        .then(response => response.json())
        .then(data => listaDeProdutos = data);


searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value;

    listaDeProdutosFiltrada = listaDeProdutos.filter(produto => {
        const nomeDoProdutoEncontrado = produto
            .name
            .toString()
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) > -1;
    
        const refDoProdutoEncontrada = produto
            .ref
            .toString()
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase()) > -1;
        return nomeDoProdutoEncontrado || refDoProdutoEncontrada;
    });

    if(listaDeProdutosFiltrada.length === 0) {

    }

    
    for (let result of listaDeProdutosFiltrada) {
        const resultElement = document.createElement('p');
        resultElement.textContent = result.name;
        resultContainer.appendChild(resultElement);
    }
});
