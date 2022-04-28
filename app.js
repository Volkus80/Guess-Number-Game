"use strict"

const input = document.querySelector('.input-text');
const massage = document.querySelector('.container-text');
const start = document.getElementById('start');
const confirmButton = document.querySelector('.confirm-button');
const massages = {
    error : 'Число больше 100',
    tooSmall : 'Мало ))',
    tooBig : 'Много ))',
    goal : 'Ура!! Вы угадали',
    continue : 'Введите число от 1 до 100', 
};

input.addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9]/g, '');
    if (+this.value > 100) {
        massage.textContent = massages.error;
    } else {
        massage.textContent = massages.continue;
    }
});

start.addEventListener('click', function game(event){
    event.stopPropagation();
    start.removeEventListener('click', game);
    let num = Math.ceil(Math.random()*101)-1;
    input.value = '';
    input.removeAttribute('disabled');
    input.focus();
    this.classList.add('active');
    confirmButton.addEventListener('click', function() {
        if (checkAnswer(input.value, num) == true) {
            start.classList.remove('active');
            input.setAttribute('disabled', 'disabled');
            start.addEventListener('click', game);
        }


    });

});

function checkAnswer(answer, request) {
    let res = false;
    if (+answer == request) {
        massage.textContent = massages.goal;
        res = true;
    } else if (+answer < request) {
        massage.textContent = massages.tooSmall;
    } else {
        massage.textContent = massages.tooBig;
    }
    return res;
}
