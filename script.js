document.getElementById("btn-menu").addEventListener("click", show_menu);
document.getElementById("bars-menu").addEventListener("click", hide_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("bars-menu");

function show_menu(){
    nav.style.right = "0px";
    background_menu.style.display = "block";
}

function hide_menu(){
    nav.style.right = "-250px";
    background_menu.style.display = "none";
}
