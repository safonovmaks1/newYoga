function calc() {
    
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        calcInput = document.querySelectorAll('.counter-block-input'),
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),

        placeKoef = place.options[place.selectedIndex].value,

        day = 4000,
        personsSum = 0,
        daysSum = 0;


    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        // total = daysSum * personsSum * day;
        if (restDays == '' || persons == '') {
            totalValue.innerHTML = 0;
            return;
        } else {
            totalValue.innerHTML = daysSum * personsSum * day * placeKoef;
        }
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        // total = daysSum * personsSum * day;
        if (persons == '' || restDays == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = daysSum * personsSum * day * placeKoef;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            // let a = total;
            placeKoef = this.options[this.selectedIndex].value;
            totalValue.innerHTML = daysSum * personsSum * day * placeKoef;
        }
    });

    calcInput.forEach(function (item) {
        item.addEventListener('input', function () {
            if (item != 0) {
                item.value = item.value.replace(/\D+/g);
            }
        });
    });

}

module.exports = calc;