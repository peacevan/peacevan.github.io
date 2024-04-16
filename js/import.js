$(document).ready(function(){
    setTimeout(function(){
      $("#footer").load("footer.html");
    },0);
    setTimeout(function(){
      $("#nav").load("nav.html");
    },0);

    setTimeout(function(){
      $("#nav-mobile").load("nav_mobile.html");
      alert('aqui');
    },0);

 
});