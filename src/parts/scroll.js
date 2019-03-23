function scroll() {
    
    let anchors = document.querySelectorAll('a');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            let id = anchor.getAttribute('href');

            document.querySelector('' + id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
}

module.exports = scroll;