
function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

  function myFunction2() {
    var checkBox = document.getElementById("myCheck2");
    var text = document.getElementById("text2");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
    console.log("Hello")
  }
  