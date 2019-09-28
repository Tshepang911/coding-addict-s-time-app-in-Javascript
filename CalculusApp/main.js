// define UI vars 
const btnsAll = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for (let i = 0; i < btnsAll.length; i++) {
    btnsAll[i].addEventListener('click', function () {
        let number = btnsAll[i].getAttribute('data-num');
        screen.value += number;
    });
}
equalBtn.addEventListener('click', function () {
    let value = eval(screen.value);
    if (screen.value === '') {
        setTimeout(function () {
            screen.value = 'Stop Nonsense';
        }, 3000)
        screen.value = ''
        // screen.value = '';
    } else {

        screen.value = value;
    }
});
clearBtn.addEventListener('click', function () {
    screen.value = '';
})