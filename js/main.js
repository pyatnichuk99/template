  document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
    const open = document.querySelector('.menu-burger');
    const menu = document.querySelector('.menu');
    const menu_block = document.querySelector('.menu-block');
    const exit = document.querySelectorAll('.menu-burder__item');
    const open_menu = document.querySelector('ul');
    const body = document.body;

    open.addEventListener('click',()=>{
    
      if(menu.style.opacity==0){
        open.classList.add('open_menu');
        menu.style="opacity:1; display:block ";
        body.style ="background: rgba(0, 0, 0, 0.64)";
        menu_block.classList.add('open');

        for (let index = 0; index < exit.length; index++) {
          exit[index].classList.add('exit');
          
        }

      }
      else{
        open.classList.remove('open_menu');
        menu.style="opacity: 0";
        body.style ="background: none";
        for (let index = 0; index < exit.length; index++) {
          exit[index].classList.remove('exit');
          
        }
      }
    })
  })