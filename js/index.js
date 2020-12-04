let btn = document.getElementById('btn');
let span = document.getElementById('span');
let input = document.getElementById('input');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!(input.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))) {
       span.innerHTML = "Please check your email";
       span.style.color = ' rgb(241, 111, 111)';
       input.style.border = '1px solid rgb(241, 111, 111)';
  }
    else{
        window.location.href = 'index.html';
       }
})

