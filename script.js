var dinosaur = document.getElementById("dinosaur");
var cactus = document.getElementById("cactus");


function jump(){
    if(dinosaur.classList !="jump"){
        dinosaur.classList.add("jump");
        
        
        setTimeout(function() {
        dinosaur.classList.remove("jump");
    }, 300)
    }

    
}


var isAlive = setInterval(function(){
    var dinosaurTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    var cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    );

    if(cactusLeft < 50 && cactusLeft > 0 && dinosaurTop>=140){
        alert("Game over");
    }
    },10);

document.addEventListener("keydown", function(event){
    jump();
});