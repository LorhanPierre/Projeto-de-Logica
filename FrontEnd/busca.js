 // Script do dropdown de idiomas (reutilizado)
        const currentLangTrigger = document.getElementById('currentLangTrigger');
        const langDropdownMenu = document.getElementById('lang-dropdown-menu');
        const currentFlagImg = document.getElementById('current-flag');

        if (currentLangTrigger && langDropdownMenu && currentFlagImg) {
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
                    console.log('Idioma selecionado:', selectedLangCode);
                    langDropdownMenu.classList.remove('show');
                });
            });

            window.addEventListener('click', function(event) {
                if (langDropdownMenu && !langDropdownMenu.contains(event.target) && currentLangTrigger && !currentLangTrigger.contains(event.target)) {
                    if (langDropdownMenu.classList.contains('show')) {
                        langDropdownMenu.classList.remove('show');
                    }
                }
            });
        }

        // JavaScript para filtro (ainda comentado, para implementação futura)
        // const searchInput = document.querySelector('.search-container-in-bar input[type="search"]');
        // const orientationItems = document.querySelectorAll('.orientations-list .orientation-item');
        // if(searchInput && orientationItems.length > 0) {
        //     searchInput.addEventListener('keyup', function() {
        //         const filter = searchInput.value.toUpperCase().trim();
        //         orientationItems.forEach(item => {
        //             const title = item.querySelector('.orientation-info .title').textContent.toUpperCase();
        //             const type = item.querySelector('.orientation-info .type').textContent.toUpperCase();
        //             if (title.includes(filter) || type.includes(filter)) {
        //                 item.style.display = "";
        //             } else {
        //                 item.style.display = "none";
        //             }
        //         });
        //     });
        // }