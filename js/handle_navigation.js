    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};
               
    // Get the navbar
    var navbar = document.getElementById("navbar");
    var navlist = document.getElementById("navigation__list");
    var about = document.getElementById("about");
    var logo = document.getElementById("logo");
    var navicon = document.getElementById("nav-icon");
    
    // Get the offset position of the navbar
    var sticky = spacing.offsetTop;

    //Get hamburger icon 
    var hamburger = document.getElementById("hamburger");
    var open = false;
    
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {

         var list = document.getElementById("navigation__list");
         if (window.pageYOffset >= sticky) {
             navbar.classList.add("sticky");
             navbar.style.backgroundColor="#101d2c";
      } 
      else if(window.pageYOffset <= sticky){
        navbar.classList.remove("sticky");
        navbar.style.backgroundColor="transparent";
                           
      }

      if (window.pageYOffset <= sticky && open) {
        navbar.style.backgroundColor="transparent"; 
      }
    }
    
    hamburger.addEventListener("click", function(){

        if (open) {
            navlist.style.transform="translate(-300px,0)";
            navicon.classList.add("fas", "fa-bars");
            navlist.classList.remove("far", "fa-window-close");
            open = false;
        }
        
        else{
            navlist.style.transform="translate(0,0)";
            navicon.classList.add("far", "fa-window-close");
            navicon.classList.remove("fas", "fa-bars");
            open = true;
        }
    });        