//function to check if what the user input is "yes"
function validate() {
    var corgi_button_show = document.getElementById("corgi-link-button");
    var sad_button_show = document.getElementById("sad-link-button")
    var answer  = document.getElementById("answer");
      
  if(answer){
     if(answer.value  == "yes"){
        corgi_button_show.style.display = "block";
     }
     else if(answer.value == "no") {
        sad_button_show.style.display = "block";
     }
   }
}

//function to visit the corgi-website
function visitCorgi()
{ window.location="https://corgiorgy.com/"; }
