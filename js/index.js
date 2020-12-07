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

let btn2 = document.getElementById("start");
let input2 = document.getElementById("input2");
let span2 = document.getElementById("start-message");
btn2.addEventListener("click", (e) => {
  e.preventDefault();
    if (!(input2.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))) {
       span2.innerHTML = "Please check your email";
       span2.style.color = ' rgb(241, 111, 111)';
       input2.style.border = '2px solid rgb(241, 111, 111)';
  }
    else{
        window.location.href = 'index.html';
       }
 })