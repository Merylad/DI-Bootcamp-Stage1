function myMove() {
    var animate= document.querySelector("#animate");
    var pos = 0;
    let id = setInterval(function() {
      if (pos == 350) {
        clearInterval(id);
      }
      else {
        pos++;
        animate.style.left = pos + "px";
      }
    }, 1);
  }