const body=document.querySelector('body')
const  button = document.querySelectorAll('.box')
button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(e){
        if (e.target.id==='grey') {
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='pink') {
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='green') {
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='skyblue') {
            body.style.backgroundColor=e.target.id;
        }
        if (e.target.id==='purple') {
            body.style.backgroundColor=e.target.id;
        }
    })
    
})