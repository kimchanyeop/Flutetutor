function show_menu() {
    var menu = document.getElementsByClassName('menu');
    for(var i = 0; i < menu.length; i++){
        menu[i].classList.toggle('show');
    }
}