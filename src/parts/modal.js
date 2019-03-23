function modal() {
    
    let more = document.querySelector('.more'),
        descrBtn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function openModal() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', openModal);

    descrBtn.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    window.addEventListener('click', (e) => {
        if (e.target == overlay) {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }

        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    });
    
}

module.exports = modal;