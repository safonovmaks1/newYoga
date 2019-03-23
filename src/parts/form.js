function forms() {

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
    };

    let form = document.querySelector('.main-form'),
        form2 = document.querySelector('#form'),
        input = document.querySelectorAll('form > input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    function formSend(elem) {
        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open("POST", 'server.php');

                    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8'); // JSON

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 3) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    request.send(json); // JSON
                });
            } // end postData

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    // thanksModal.style.display = 'block';
                    // overlay.style.display = 'none';
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = ''; // Очищаем инпуты  
                }
            }
        });
    }
    
    formSend(form);
    formSend(form2);

    let tel = document.querySelectorAll('input[type="tel"]');

    tel.forEach(function (item) {
        item.addEventListener('input', function () {
            if (item != 0) {
                if (!checkValidSum(item.value)) {
                    item.value = item.value.slice(0, -1);
                }
            }
        });
    });

    function checkValidSum(input) {
        return /^\+?[()\d \-]*$/.test(input);
    }
    
}

module.exports = forms;