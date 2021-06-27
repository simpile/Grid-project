
function OpenMenu() {
      
    var menu = document.getElementById("modalMenu");
    if(menu.style.display === "none") {menu.style.display = "block";
   
            }
    else{
        menu.style.display = "none";
    }
  
  } 
var cartop = document.getElementsById("modalCartHolder");

  function OpenCartMenu() {

if(cartop.style.display == "none") {
  cartop.style.display = "block";
   
            }
    else{
        cartop.style.display = "none";
    }
  
  }
