const BTN = document.querySelector('button');
const CONTENT = document.querySelector('#content');

BTN.addEventListener('click', function(){
    CONTENT.textContent = "Hello World";
});