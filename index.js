
var open = false;

function decide(){
  if(open == true){
    closeNav();
  }else{
    openNav();
  }
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  open = true;

}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
  open = false;

}

function myFunction(x) {
  x.classList.toggle("change");
}
