document.getElementById('search-button').addEventListener('click', function() {
    const searchBar = document.getElementById('search-bar');
    const itemResults = document.getElementById('item-results');
    
    // Simula uma lista de itens para pesquisa (substitua por uma pesquisa real se necessário)
    const allItems = [
        'Maçã', 'Banana', 'Leite', 'Ovos', 'Pão', 
        'Queijo', 'Manteiga', 'Arroz', 'Feijão', 'Tomate'
    ];
    
    // Captura o texto do input e faz a pesquisa
    const searchText = searchBar.value.toLowerCase();
    const filteredItems = allItems.filter(item => item.toLowerCase().includes(searchText));
    
    // Adiciona os itens filtrados à lista simples
    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        itemResults.appendChild(li);
    });
});