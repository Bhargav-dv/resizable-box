const el = document.querySelector(".container");

let select = true;

box.addEventListener("mousedown", mouseDown);
function mouseDown(event) {
  let currentXPos = event.clientX;
  let currentYPos = event.clientY;

  window.addEventListener("mousemove", mouseMove);
  window.addEventListener("mouseup", mouseUp);
  function mouseMove(event) {
    if (select) {
      let newXPos = currentXPos - event.clientX;
      let newYPos = currentYPos - event.clientY;

      let boxPos = box.getBoundingClientRect();
      box.style.left = boxPos.left - newXPos + "px";
      box.style.top = boxPos.top - newYPos + "px";
      currentXPos = event.clientX;
      currentYPos = event.clientY;
    }
  }

  function mouseUp() {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("mouseup", mouseUp);
  }
}
const smallBox  = document.querySelectorAll(".resize-box");
let currentResizer;
for (let i of smallBox) {
    i.addEventListener("mousedown", mouseDown);

  function mouseDown(e) {
    currentResizer= e.target;
    select = false;
    let currXPos = e.clientX;
    let currYPos = e.clientY;

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
    //console.log(e.target)
    function mouseMove(e) {
      let boxPos = box.getBoundingClientRect();
      //resizing
      if (currentResizer.classList.contains("br")) {
        box.style.width = boxPos.width  - (currXPos - e.clientX) + "px";
        box.style.height = boxPos.height - (currYPos - e.clientY) + "px";
        box.style.right =  boxPos.right  - (currXPos - e.clientX)+ "px";
    }else if(currentResizer.classList.contains("bl")){
       box.style.width = boxPos.width + (currXPos - e.clientX)+ "px";
       box.style.height = boxPos.height - (currYPos - e.clientY)+ "px";
       box.style.left =  boxPos.left  - (currXPos - e.clientX)+ "px";
    }else if(currentResizer.classList.contains("tr")){
        box.style.width = boxPos.width - (currXPos - e.clientX)+ "px";
        box.style.height = boxPos.height + (currYPos - e.clientY) + "px";
        box.style.top =  boxPos.top  - (currYPos - e.clientY)+ "px";
     }else if (currentResizer.classList.contains("tl")){
        box.style.width = boxPos.width + (currXPos - e.clientX)+ "px";
        box.style.height = boxPos.height + (currYPos - e.clientY) + "px";
        box.style.left =  boxPos.left - (currXPos - e.clientX)+ "px";
        box.style.top =  boxPos.top  - (currYPos - e.clientY)+ "px";
    }
    currXPos = e.clientX;
    currYPos = e.clientY;
    }
    function mouseUp() {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      select = true;
  }
  }
}
