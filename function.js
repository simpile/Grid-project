
function OpenMenu() {
      
    var menu = document.getElementById("modalMenu");
    if(menu.style.display === "none") {menu.style.display = "block";
    menu.style.transition =  "5s";
            }
    else{
        menu.style.display = "none";
    }
  
  } 

  // var MenuMainHolder = document.getElementById('modalMainHolder');

  //   if(menu.style.display == "block"){
  //     console.log('its block');
  //       MenuMainHolder.style.display = "grid";
  //   }
  //   else{
  //       MenuMainHolder.style.display = "none";


// while (menu.style.display === "block") {
//     do{
//         MenuMainHolder.style.display = "grid";
//     }
// }
// ................
// const container = document.getElementById("container");

// function makeRows(rows, cols) {
//   container.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (c = 0; c < (rows * cols); c++) {
//     let cell = document.createElement("div");
//     cell.innerText = (c + 1);
//     container.appendChild(cell).className = "grid-item";
//   };
// };

// makeRows(16, 16);