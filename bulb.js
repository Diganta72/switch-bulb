const image = document.getElementById('bulb');
const button = document.getElementById('btn');

button.addEventListener('click', function () {

    if (bulb.src.match('off')) {

        bulb.src = './bulb-on.gif'
        button.innerHTML = 'Turn Off';

    } else {

        bulb.src = './bulb-off.gif'
        button.innerHTML = 'Turn On';
    }


})