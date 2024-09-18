let menuVisible = false;
const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');

toggleTheme.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    if(toggleIcon.src.includes('moon-solid.svg')){
        toggleIcon.src='assets/img/sun-solid.svg'
    }else{
        toggleIcon.src='assets/img/moon-solid.svg'
    }

})

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}