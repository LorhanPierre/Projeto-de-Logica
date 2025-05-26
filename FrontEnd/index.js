// Script para funcionalidade do dropdown de idiomas
        const currentLangTrigger = document.getElementById('currentLangTrigger'); // Usando ID para clareza
        const langDropdownMenu = document.getElementById('lang-dropdown-menu');
        const currentFlagImg = document.getElementById('current-flag');

        if (currentLangTrigger && langDropdownMenu && currentFlagImg) { // Verifica se os elementos existem
            currentLangTrigger.addEventListener('click', function(event) {
                event.stopPropagation();
                langDropdownMenu.classList.toggle('show');
            });

            langDropdownMenu.querySelectorAll('a').forEach(item => {
                item.addEventListener('click', function(event) {
                    event.preventDefault();
                    const selectedLangCode = this.getAttribute('data-lang');
                    const selectedFlagSrc = this.querySelector('img').src;
                    const selectedFlagAlt = this.querySelector('img').alt;

                    currentFlagImg.src = selectedFlagSrc;
                    currentFlagImg.alt = selectedFlagAlt;
                    // Aqui você poderia adicionar lógica para mudar o idioma do conteúdo da página
                    console.log('Idioma selecionado:', selectedLangCode);

                    langDropdownMenu.classList.remove('show');
                });
            });

            window.addEventListener('click', function(event) {
                if (!langDropdownMenu.contains(event.target) && !currentLangTrigger.contains(event.target)) {
                    if (langDropdownMenu.classList.contains('show')) {
                        langDropdownMenu.classList.remove('show');
                    }
                }
            });
        }