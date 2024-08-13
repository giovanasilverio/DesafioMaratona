<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de Modal</title>
    <style>
        #emergencyModal {
            display: none; /* Inicialmente escondido */
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            padding: 20px;
            background-color: white;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            z-index: 1000;
        }

        #modalOverlay {
            display: none; /* Inicialmente escondido */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }
    </style>
</head>
<body>
    <div id="modalOverlay"></div>
    <div id="emergencyModal">
        <p>Conteúdo do modal aqui...</p>
        <button onclick="closeModal()">Fechar</button>
        <p id="closingMessage" style="display: none;">Fechando em 3 segundos...</p>
    </div>

    <input type="text" id="search-bar" placeholder="Pesquisar...">
    <ul id="item-results"></ul>
    <ul id="shopping-list"></ul>

    <script>
        function openModal() {
            document.getElementById("emergencyModal").style.display = "block";
            document.getElementById("modalOverlay").style.display = "block";
            document.getElementById("closingMessage").style.display = "none"; // Esconder mensagem de fechamento
        }

        function closeModal() {
            document.getElementById("closingMessage").style.display = "block"; // Mostrar mensagem de fechamento
            setTimeout(function() {
                document.getElementById("emergencyModal").style.display = "none";
                document.getElementById("modalOverlay").style.display = "none";
            }, 3000); // 3000 milissegundos = 3 segundos
        }

        // Prevenir o fechamento ao clicar fora do modal
        document.getElementById("modalOverlay").addEventListener("click", function(event) {
            event.stopPropagation();
        });

        // Prevenir o fechamento com a tecla Esc
        document.addEventListener("keydown", function(event) {
            if (event.key === "Escape") {
                event.preventDefault();
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            const searchBar = document.getElementById('search-bar');
            const itemResults = document.getElementById('item-results');
            const shoppingList = document.getElementById('shopping-list');

            const items = ["Maçã", "Banana", "Leite", "Pão", "Ovos", "Arroz", "Feijão", "Tomate", "Cebola", "Batata"];

            searchBar.addEventListener('input', function() {
                const query = searchBar.value.toLowerCase();
                itemResults.innerHTML = '';

                if (query) {
                    const filteredItems = items.filter(item => item.toLowerCase().includes(query));
                    filteredItems.forEach(item => {
                        const li = document.createElement('li');
                        const button = document.createElement('button');
                        button.textContent = item;
                        button.classList.add('add-item');
                        button.setAttribute('data-item', item);
                        li.appendChild(button);
                        itemResults.appendChild(li);
                    });
                    attachEventListeners();
                }
            });

            function attachEventListeners() {
                const buttons = document.querySelectorAll('.add-item');
                buttons.forEach(button => {
                    button.addEventListener('click', function() {
                        const item = this.getAttribute('data-item');
                        addItemToList(item);
                    });
                });
            }

            function addItemToList(item) {
                const li = document.createElement('li');
                li.textContent = item;
                shoppingList.appendChild(li);
            }
        });
    </script>
</body>
</html>
