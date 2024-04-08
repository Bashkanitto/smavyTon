const checkbox = document.getElementById('checkbox');
const body = document.body;

checkbox.addEventListener('click', function(){
    body.classList.toggle('dark')
})