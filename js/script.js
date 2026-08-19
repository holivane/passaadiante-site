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

    if ($('.select-custom').length) {
        $('.select-custom').each(function () {
            const wrapper = $(this);
            const select = wrapper.find('select');
            const trigger = wrapper.find('.select-custom__trigger');
            const options = wrapper.find('.select-custom__options');

            trigger.on('click', function (e) {
                e.stopPropagation();
                $('.select-custom__options').not(options).removeClass('select-custom__options--open');
                options.toggleClass('select-custom__options--open');
            });

            options.find('li').on('click', function () {
                const opcao = $(this);

                select.val(opcao.data('value'));
                trigger.text(opcao.text());
                options.removeClass('select-custom__options--open');
            });
        });

        $(document).on('click', function () {
            $('.select-custom__options').removeClass('select-custom__options--open');
        });
    }
});