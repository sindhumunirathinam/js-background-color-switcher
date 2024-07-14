let btn = document.querySelectorAll('.button');
let body = document.querySelector('body');


btn.forEach(function(btn){
  btn.addEventListener('click', function(e){
    if(e.target.id === e.target.id){
      body.style.backgroundColor = e.target.id;
    }
  })
})

