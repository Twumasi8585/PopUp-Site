var open = document.querySelector('#open');
var close = document.querySelector('#close');
var quote1  = document.querySelector('.quote1');

open.addEventListener('click', () => {
    quote1.style.display = 'block';
});

close.addEventListener('click', () => {
    quote1.style.display = 'none';
});