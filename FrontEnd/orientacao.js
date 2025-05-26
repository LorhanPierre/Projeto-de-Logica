// Dados da orientação (simulados - em um app real, viriam do backend/DB ou localStorage)
        const orientacaoAtual = {
            id: "456", // Este ID será usado para identificação
            categoria: "Transformador",
            titulo: "Procedimento de Segurança",
            textoParagrafos: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies tristique lectus, in aliquet massa efficitur non. Ut gravida magna lectus, lobortis ornare dui faucibus sed. Vestibulum in dolor nunc. Duis a feugiat diam. Aenean varius lacus justo. Integer dui nunc, ullamcorper at aliquam at, commodo sit amet tortor. Vestibulum vitae vestibulum sem. Phasellus non nibh lacinia leo interdum fringilla. Donec commodo ullamcorper metus lobortis pretium. In faucibus consectetur nibh, ut aliquet turpis cursus a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
                "Integer dictum tortor rhoncus, pellentesque felis ut, pharetra purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed eget lorem vehicula, commodo ligula vitae, elementum nibh. Vestibulum in ullamcorper tellus. Cras semper ac est in vestibulum. Etiam lacinia hendrerit risus, aliquet vehicula urna hendrerit vulputate. Nunc purus elit, cursus vitae est a, bibendum accumsan purus. Curabitur vitae nibh nec dui faucibus cursus vitae ac magna. Nullam et tincidunt velit, eu malesuada lacus. Maecenas sit amet lectus ultricies, cursus purus eget, pretium eros. Integer fermentum a arcu sed pulvinar. Praesent iaculis, nisi non gravida varius, sapien quam feugiat nibh, vitae ultricies magna odio vel massa. Vivamus libero ipsum, ultricies a vulputate ac, mollis eget ante. Sed ac metus sem."
            ]
        };

        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('orientation-category-display').textContent = orientacaoAtual.categoria;
            document.getElementById('orientation-main-title-display').textContent = orientacaoAtual.titulo;
            document.getElementById('orientation-id-display').textContent = `ID - ${orientacaoAtual.id}`;

            const contentDiv = document.getElementById('orientation-text-content');
            contentDiv.innerHTML = '';
            orientacaoAtual.textoParagrafos.forEach((paragrafo, index) => {
                const p = document.createElement('p');
                p.textContent = paragrafo;
                contentDiv.appendChild(p);
                if (index < orientacaoAtual.textoParagrafos.length - 1) {
                    const hr = document.createElement('hr');
                    contentDiv.appendChild(hr);
                }
            });

            const editButton = document.getElementById('edit-button');
            const deleteButton = document.getElementById('delete-button');
            const confirmDeleteModal = document.getElementById('confirm-delete-modal');
            const modalConfirmButton = document.getElementById('modal-confirm-delete');
            const modalCancelButton = document.getElementById('modal-cancel-delete');

            editButton.addEventListener('click', () => {
                const params = new URLSearchParams();
                params.append('id', orientacaoAtual.id);
                params.append('categoria', orientacaoAtual.categoria);
                params.append('titulo_pt', orientacaoAtual.titulo);
                params.append('orientacao_pt', orientacaoAtual.textoParagrafos[0]);
                window.location.href = `cadastrar.html?${params.toString()}`;
            });

            deleteButton.addEventListener('click', () => {
                confirmDeleteModal.classList.add('show');
            });

            modalCancelButton.addEventListener('click', () => {
                confirmDeleteModal.classList.remove('show');
            });

            modalConfirmButton.addEventListener('click', () => {
                console.log(`Orientação com ID ${orientacaoAtual.id} marcada para exclusão.`);
                alert(`Orientação "${orientacaoAtual.titulo}" (ID: ${orientacaoAtual.id}) excluída (simulação).`);
                confirmDeleteModal.classList.remove('show');
                // MODIFICADO AQUI: Redirecionar para a página inicial após exclusão
                window.location.href = 'index.html'; // ou 'pagina_inicial.html' se esse for o nome do seu arquivo index
            });

            confirmDeleteModal.addEventListener('click', (event) => {
                if (event.target === confirmDeleteModal) {
                    confirmDeleteModal.classList.remove('show');
                }
            });
        });