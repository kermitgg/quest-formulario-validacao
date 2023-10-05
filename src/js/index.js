const form = document.querySelectorAll('.input');
const submit = document.getElementById('submit');
let formError = document.querySelectorAll('.required');

submit.addEventListener('click', () =>{
    form.forEach((event, index) => {
        if(event.value == ''){
            event.classList.add('error')
            event.classList.remove('changed')
            formError[index].classList.add('visibility')
            
        } else if (event.value !== ''){
            event.classList.remove('error')
            event.classList.add('changed')
            formError[index].classList.remove('visibility')
        }
    })

})


