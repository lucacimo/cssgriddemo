    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {myFunction()};
               
    // Get the navbar
    var navbar = document.getElementById("navbar");
    var about = document.getElementById("about");
    var logo = document.getElementById("logo");
    
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
             logo.classList.add("logosticky");
             document.getElementById("navbar").style.backgroundColor="#101d2c";
      } 
      else if(window.pageYOffset <= sticky && !open){
        navbar.classList.remove("sticky");
        logo.classList.remove("logosticky");
        document.getElementById("navbar").style.backgroundColor="transparent";
                           
      }
    }
    
    hamburger.addEventListener("click", function(){

        if (open) {
            document.getElementById("navigation__list").style.transform="translate(-300px,0)";
            document.getElementById("nav-icon").classList.add("fas", "fa-bars");
            document.getElementById("nav-icon").classList.remove("far", "fa-window-close");
            open = false;
        }
        
        else{
            document.getElementById("navigation__list").style.transform="translate(0,0)";
            document.getElementById("nav-icon").classList.add("far", "fa-window-close");
            document.getElementById("nav-icon").classList.remove("fas", "fa-bars");
            open = true;
        }
    });        