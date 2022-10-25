const iconoMenu = document.querySelector('#icono-menu'),
menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) =>{
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAtttribute('src');

    if(rutaActual == `./images/icon-menu.png`){
        e.target.setAttribute('src', `./images/icon-menu.png`)
    }else{
        
    }
})