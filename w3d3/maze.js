$(function () {   
    let lose = false;
    let wrongDirection = false;
    let start = false;

    $("div.boundary").on("mouseover", function(){
        
        if (start){
            alert("Sorry, you lost:[");
            $("div.boundary").addClass("youlose");
        }
        else if (!start)
            alert("Click on start the play the game!")
        lose = true;

    });
    $("#start").click(function(){
        $("div.boundary").removeClass("youlose");
        lose = false;
        wrongDirection = false;
        start = true;
    });
    $("#end").click(function () {
        if (!lose & !wrongDirection)
            alert("You win:]");
        else if(wrongDirection)
            alert("you followed the wrong direction!!"); 
        start = false;       
    });

    $("#maze").on("mouseleave", function(){
        if (!lose){
            wrongDirection = true;            
        }
    });
});