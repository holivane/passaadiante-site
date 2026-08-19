document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.menu__mobile');
    const closeBtn = document.querySelector('.menu__close');
    const menuListMobile = document.querySelector('.menu__list-mobile');
    const overlay = document.querySelector('.menu__overlay');

    function toggleMenu() {
        menuListMobile.classList.toggle('menu__list-mobile--open');
        overlay.classList.toggle('menu__overlay--open');
    }

    if (mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
    if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);

    if ($('#catalog-filters').length) {
        $('#catalog-filters').on('submit', function (e) {
            e.preventDefault();

            const categoria = $('#filter-category').val();
            const condicao = $('#filter-condition').val();

            $('.catalog-card').each(function () {
                const card = $(this);
                const bateCategoria = !categoria || card.data('category') === categoria;
                const bateCondicao = !condicao || card.data('condition') === condicao;

                card.toggle(bateCategoria && bateCondicao);
            });

            $('#no-results').toggle($('.catalog-card:visible').length === 0);
        });
    }

    if ($('#contact-form').length) {
        
        $('#email').on('input', function() {
            $(this).val($(this).val().replace(/\s+/g, ''));
        });

        $('#contact-form').on('submit', function(e) {
            e.preventDefault();

            const nome = $('#nome').val().trim();
            const email = $('#email').val().trim();
            const mensagem = $('#mensagem').val().trim();
            const $feedback = $('#form-feedback');

            $feedback.removeClass('form-feedback--error form-feedback--success');

            if (nome === '' || email === '' || mensagem === '') {
                $feedback.text('Por favor, preencha todos os campos obrigatórios.');
                $feedback.addClass('form-feedback--error');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                $feedback.text('Por favor, insira um e-mail válido.');
                $feedback.addClass('form-feedback--error');
                return;
            }

            $feedback.text('Mensagem enviada com sucesso!');
            $feedback.addClass('form-feedback--success');
            
            this.reset();

            setTimeout(function() {
                $feedback.text('');
                $feedback.removeClass('form-feedback--success');
            }, 4000);
        });
    }
});