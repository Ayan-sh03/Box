const input = document.querySelector(".input"),
      box = document.getElementById("box");
      

      input.addEventListener("input",()=>{
        box.style.background = input.value;
        box.style.borderRadius = input.value;
        // box.style.border = input.value;
      })